$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    console.log(data); // Object { email: "email@email.com", id: 1 }
    $(".member-name").text(data.email);

    getUserCases(data.id);
  });

  const getUserCases = id => {
    $.get(`api/cases/${id}`).then(data => {
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        $('#all-cases').append(
          `<div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Name: ${data[i].name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">Birthday: ${data[i].birthday}</h6>
              <h6 class="card-subtitle mb-2 text-muted">Zip Code: ${data[i].zipCode}</h6>
              <button class="cases-select btn btn-info" data-case=${data[i].id} data-zip=${data[i].zipCode}>Create Form</button>
            </div>
          </div>`
        )
      }
    });
  };
  
  $(document).on("click", ".cases-select", async function(event) {
    const zip = $(this).data("zip");
    const id = $(this).data("case");
    window.location.href = `../lawyer_form.html?case=${id}&zipCode=${zip}`;
  })  
});
