$(document).ready(() => {

  // Global variables
  // =======================================
  const tableNames = ['Hospice', 'Lawyers', 'Funeral', 'LifeInsurance'];

  $.get("/api/user_data").then((data) => {
    console.log(data); // Object { email: "email@email.com", id: 1 }
    $(".member-name").text(data.email);
    getUserCases(data.id);
  });

  const getUserCases = (userId) => {
    $.get(`api/cases/${userId}`).then((data) => {
      // Change display to match current cases information
      changeCurrentCase(data[0]);
      // Populate the sidebars
      data.forEach((dataItem) => populateSidebar(dataItem, userId));
      // append card to create user
      $("#sidebar-cases").append(
        `<a id="create-case" class="item">
                    <i class="plus icon"></i>
                    Add a new profile for yourself or a loved one.
                </a>`
      );
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
    $("#HospiceName").html(data[0].name);
    $("#HospiceNumber").html(data[0].display_phone);
  });

  $.get("api/cases/Lawyers/1").then((data) => {
    $("#LawyersName").html(data[0].name);
    $("#LawyersNumber").html(data[0].display_phone);
  });

  $.get("api/cases/Funeral/1").then((data) => {
    $("#FuneralName").html(data[0].name);
    $("#FuneralNumber").html(data[0].display_phone);
  });

  $.get("api/cases/LifeInsurance/1").then((data) => {
    $("#LifeInsuranceName").html(data[0].name);
    $("#LifeInsuranceNumber").html(data[0].display_phone);
  });

  // button functionality to choose case from sidebar
  $(document).on("click", ".sidebar-case", function (event) {
    const userId = $(this).data("user");
    const caseId = $(this).data("case");
    console.log(userId);
    console.log(caseId);

    $.ajax({
      type: 'get',
      url: `/api/cases/search/${caseId}`
    }).done(function (data) {
      console.log(data);
      changeCurrentCase(data);
    })
    tableNames.forEach(tableName => updateCard(caseId, tableName))
  })

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
  const updateCard = (caseId, tableName) => {
    $.get(`api/cases/${tableName}/${caseId}`).then((data) => {
      if (data.length === 0) {
        $(`#${tableName}Name`).html("--");
        $(`#${tableName}Number`).html("--");
      } else {
        $(`#${tableName}Name`).html(data[0].name);
        $(`#${tableName}Number`).html(data[0].display_phone);
      }
    });
  }

}); // end document.ready
