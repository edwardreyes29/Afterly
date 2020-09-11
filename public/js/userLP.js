$(document).ready(() => {

  // Global variables
  // =======================================
  // const tableNames = ['Hospice', 'Lawyers', 'Funeral', 'LifeInsurance'];
  const tableNames = ["lawyers", "insurances", "funerals", "hospices"];
  // Global Functions 
  // =======================================
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
    $("#create-doc").attr("data-case", data.id);
  }
  const updateCard = (caseId, tableName) => {
    $.get(`api/cases/${tableName}/${caseId}`).then((data) => {
      if (data.length === 0) {
        $(`#${tableName}-name`).html("--");
        $(`#${tableName}-number`).html("--");
      } else {
        $(`#${tableName}-name`).html(data[0].name);
        $(`#${tableName}-number`).html(data[0].display_phone);
      }
    });
  }

  const populateSidebar = (data, userId) => {
    $("#sidebar-cases").append(
      `<a class="sidebar-case item" data-case=${data.id} data-user=${userId}>
          <i class="user icon"></i>
          ${data.name}
      </a>`
    );
  };

  const getUserCases = (userId) => {
    $.get(`api/cases/${userId}`).then((data) => {
      // Change display to match current cases information
      /**
       * var myParam = location.search.split('case=')[1] -> might split again
       * 
       * if (data[i] === myParam) -> loop this
       * 
       */
      if (data.length !== 0) {
        changeCurrentCase(data[0]);
      // Populate the sidebars
      data.forEach((dataItem) => populateSidebar(dataItem, userId));
      }
      // append card to create user
      $("#sidebar-cases").append(
        `<a id="create-case" class="item" data-user=${userId}>
            <i class="plus icon"></i>
            Add a new profile for yourself or a loved one.
        </a>`
      );
    });
  };

  // Page Initializations
  // ===========================================

  // Changing the cards dynamically in the USERLP.html//
  tableNames.forEach(tableName => {
      updateCard(1, tableName);
      console.log(tableName);
    }
  )

  // Get current User Cases
  $.get("/api/user_data").then((data) => {
    console.log(data); // Object { email: "email@email.com", id: 1 }
    $(".member-name").text(data.email);
    getUserCases(data.id);
  });

  // Page events
  // =============================================
  
  // Click events for complete-form buttons
  $("#complete-lawyers").on("click", function (event) {
    const zipCode = $(this).data("zip");
    const caseId = $(this).data("case");
    window.location.href = `../complete-form.html?caseId=${caseId}&zipCode=${zipCode}&tableName=${tableNames[0]}`;
  });

  $("#complete-insurances").on("click", function (event) {
    const zipCode = $(this).data("zip");
    const caseId = $(this).data("case");
    window.location.href = `../complete-form.html?caseId=${caseId}&zipCode=${zipCode}&tableName=${tableNames[1]}`;
  });

  $("#complete-funerals").on("click", function (event) {
    const zipCode = $(this).data("zip");
    const caseId = $(this).data("case");
    window.location.href = `../complete-form.html?caseId=${caseId}&zipCode=${zipCode}&tableName=${tableNames[2]}`;
  });

  $("#complete-hospices").on("click", function (event) {
    const zipCode = $(this).data("zip");
    const caseId = $(this).data("case");
    window.location.href = `../complete-form.html?caseId=${caseId}&zipCode=${zipCode}&tableName=${tableNames[3]}`;
  });

  // Click events for update-form buttons
  $("#update-lawyers").on("click", function(event) {
    const zipCode = $(this).data("zip");
    const caseId = $(this).data("case");
    window.location.href = `../update-form.html?caseId=${caseId}&zipCode=${zipCode}&tableName=${tableNames[0]}`;
  })

  $("#update-insurances").on("click", function(event) {
    const zipCode = $(this).data("zip");
    const caseId = $(this).data("case");
    window.location.href = `../update-form.html?caseId=${caseId}&zipCode=${zipCode}&tableName=${tableNames[1]}`;
  })

  $("#update-funerals").on("click", function(event) {
    const zipCode = $(this).data("zip");
    const caseId = $(this).data("case");
    window.location.href = `../update-form.html?caseId=${caseId}&zipCode=${zipCode}&tableName=${tableNames[2]}`;
  })

  $("#update-hospices").on("click", function(event) {
    const zipCode = $(this).data("zip");
    const caseId = $(this).data("case");
    window.location.href = `../update-form.html?caseId=${caseId}&zipCode=${zipCode}&tableName=${tableNames[3]}`;
  })

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

  // Events for Modal Create User
  $("#case-create-submit").on("click", function(event) {
    event.preventDefault();
    // Store the values from the input elements
    const caseName = $("#case-name-input").val();
    const caseDate = $("#case-date-input").val();
    const caseZip = $("#case-zip-input").val();
    const userId = $("#create-case").data("user");
    // Create object to pass to post request
    var caseData = {
      name: caseName,
      birthday: caseDate,
      zipCode: caseZip,
      UserId: userId,
    }

    // Make a Post request
    $.post("/api/cases", caseData);
  })

  $("#create-doc").on("click", function(event) {
    const caseId = $(this).data("case");
    window.location.href = `../generateddoc.html?caseId=${caseId}`;
  })

}); // end document.ready
