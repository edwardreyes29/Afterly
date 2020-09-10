$(document).ready(() => {
  $.get("/api/user_data").then((data) => {
    console.log(data); // Object { email: "email@email.com", id: 1 }
    $(".member-name").text(data.email);
    getUserCases(data.id);
  });

  const getUserCases = (userId) => {
    $.get(`api/cases/${userId}`).then((data) => {
      console.log(data);

      data.forEach((dataItem) => populateSidebar(dataItem, userId));

      // append create user
      $("#sidebar-cases").append(
        `<a class="item">
                    <i class="plus icon"></i>
                    Add a new profile for yourself or a loved one.
                </a>`
      );

      $(".case-name").html(data[0].name);
      $(".case-birthday").html(data[0].birthday);
      $(".case-zipCode").html(data[0].zipCode);

      $(".complete-form").attr("data-case", data[0].id);
      $(".complete-form").attr("data-zip", data[0].zipCode);

      $(".update-form").attr("data-case", data[0].id);
      $(".update-form").attr("data-zip", data[0].zipCode);
    });
  };

  $(".mortuary").on("click", async function (event) {
    const zip = $(this).data("zip");
    const id = $(this).data("case");
    window.location.href = `../funeral_form.html?case=${id}&zipCode=${zip}`;
  });

  $(".hospice").on("click", async function (event) {
    const zip = $(this).data("zip");
    const id = $(this).data("case");
    window.location.href = `../hospice_form.html?case=${id}&zipCode=${zip}`;
  });

  $(".insurance").on("click", async function (event) {
    const zip = $(this).data("zip");
    const id = $(this).data("case");
    window.location.href = `../insurance_form.html?case=${id}&zipCode=${zip}`;
  });

  $(".lawyer").on("click", async function (event) {
    const zip = $(this).data("zip");
    const id = $(this).data("case");
    window.location.href = `../lawyer_form.html?case=${id}&zipCode=${zip}`;
  });

  const populateSidebar = (data, userId) => {
    $("#sidebar-cases").append(
      `<a class="sidebar-case item" data-case=${data.id} data-user=${userId}>
                <i class="user icon"></i>
                ${data.name}
            </a>`
    );
  };

  //   Changing the cards dynamically in the USERLP.html//

  $.get("api/cases/Hospice/1").then((data) => {
    console.log(data); // Object { email: "email@email.com", id: 1 }
    console.log(data[0].name);
    $("#HospiceName").html(data[0].name);
    console.log(data[0].display_phone);
    $("#HospiceNumber").html(data[0].display_phone);
  });

  $.get("api/cases/Lawyers/1").then((data) => {
    console.log(data); // Object { email: "email@email.com", id: 1 }
    console.log(data[0].name);
    $("#lawyerName").html(data[0].name);
    console.log(data[0].display_phone);
    $("#lawyerNumber").html(data[0].display_phone);
  });

  $.get("api/cases/Funeral/1").then((data) => {
    console.log(data); // Object { email: "email@email.com", id: 1 }
    console.log(data[0].name);
    $("#mortuaryName").html(data[0].name);
    console.log(data[0].display_phone);
    $("#mortuaryNumber").html(data[0].display_phone);
  });

  $.get("api/cases/LifeInsurance/1").then((data) => {
    console.log(data); // Object { email: "email@email.com", id: 1 }
    console.log(data[0].name);
    $("#insuranceName").html(data[0].name);
    console.log(data[0].display_phone);
    $("#insuranceNumber").html(data[0].display_phone);
  });

  // button functionality to choose case from sidebar
  // $(document).on("click", ".sidebar-case", function (event) {
  //   const userId = $(this).data("user");
  //   const caseId = $(this).data("case");
  //   console.log(userId);
  //   console.log(caseId);
  //   $.ajax({
  //     type: 'get',
  //     url: `/api/cases/${userId}/${caseId}`
  //   })
  //     .done(function (data) {
  //       console.log(data);
  //       changeCurrentCase(data);
  //       // create object to send to changeCase function
  //     })
  // })

  const changeCurrentCase = data => {
    $(".case-name").html(data.name);
    $(".case-birthday").html(data.birthday);
    $(".case-zipCode").html(data.zipCode);
    $(".case-name").html(data.name);
    $(".case-birthday").html(data.birthday);
    $(".case-zipCode").html(data.zipCode);
    $(".complete-form").attr("data-case", data.id);
    $(".complete-form").attr("data-zip", data.zipCode);
    $(".update-form").attr("data-case", data.id);
    $(".update-form").attr("data-zip", data.zipCode);
}



}); // end document.ready
