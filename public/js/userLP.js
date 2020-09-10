$(document).ready(() => {
    $.get("/api/user_data").then(data => {
        console.log(data); // Object { email: "email@email.com", id: 1 }
        $(".member-name").text(data.email);

        getUserCases(data.id);
    });

    const getUserCases = id => {
        $.get(`api/cases/${id}`).then(data => {
            console.log(data);

            data.forEach(dataItem => populateSidebar(dataItem));

            // append create user
            $("#sidebar-cases").append(
                `<a class="item">
                    <i class="plus icon"></i>
                    Add a new profile for yourself or a loved one.
                </a>`
            )

            $(".case-name").html(data[0].name);
            $(".case-birthday").html(data[0].birthday);
            $(".case-zipCode").html(data[0].zipCode);

            $(".complete-form").attr("data-case", data[0].id);
            $(".complete-form").attr("data-zip", data[0].zipCode);

            $(".update-form").attr("data-case", data[0].id);
            $(".update-form").attr("data-zip", data[0].zipCode);
        });
    };

    $(".mortuary").on("click", async function(event) {
        const zip = $(this).data("zip");
        const id = $(this).data("case");
        window.location.href = `../funeral_form.html?case=${id}&zipCode=${zip}`;
    })  

    $(".hospice").on("click", async function(event) {
        const zip = $(this).data("zip");
        const id = $(this).data("case");
        window.location.href = `../hospice_form.html?case=${id}&zipCode=${zip}`;
    }) 
    
    $(".insurance").on("click", async function(event) {
        const zip = $(this).data("zip");
        const id = $(this).data("case");
        window.location.href = `../insurance_form.html?case=${id}&zipCode=${zip}`;
    })  

    $(".lawyer").on("click", async function(event) {
        const zip = $(this).data("zip");
        const id = $(this).data("case");
        window.location.href = `../lawyer_form.html?case=${id}&zipCode=${zip}`;
    }) 

    const populateSidebar = (data) => {
        $("#sidebar-cases").append(
            `<a class="item"><i class="user icon"></i>${data.name}</a>`
        )
    }

}); // end document.ready