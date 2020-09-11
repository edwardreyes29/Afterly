// Global Functions
// ========================================

// Capitalize function
const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

$(document).ready(function () {
    // Local variables
    // =======================================
    const url_string = window.location.href;
    const url = new URL(url_string);
    const id = url.searchParams.get("caseId")
    const zip = url.searchParams.get("zipCode");
    const tableName = url.searchParams.get("tableName");
    console.log(zip);

    // Initialization
    // ======================================
    $("#update-page-title").html(capitalize(tableName));
    $.ajax({
        type: 'get',
        url: `/api/yelp/business/${tableName}/${zip}`,
    })
        .done(function (data) {
            console.log(data);
            for (let i = 0; i < data.length; i++) {
                $("#estates-results").append(
                    `<div class="card mb-3" style="max-width: 600px;">
                <div class="row no-gutters">
                    <div class="col-md-3">
                        <img src="${data[i].image_url}" class="card-img" alt="image">
                    </div>
                    <div class="col-md-9">
                        <div class="card-business">
                            <h4 class="card-businessName">${data[i].name}</h4>
                            <hr>
                            <h6 class="card-title card-address">ADDRESS: <text>${data[i].location.address1}</text></h6>
                            <h6 class="card-title card-city">CITY, STATE & ZIP CODE: <text>${data[i].location.display_address[1]}</text>
                            </h6>
                            <h6 class="card-title card-phone">BUSINESS PHONE #: <text>${data[i].display_phone}</text></h6>
                            <h6 class="card-title card-rating">RATING: <text>${data[i].rating} out of 5</text></h6>
                            <p class="categories">${data[i].categories[0].title}</p>
                            <button class="business-select btn btn-info" data-case=${data[i].id} data-alias=${data[i].alias}>Select</button>
                        </div>
                    </div>
                </div>
            </div>`
                );
            }
        });

    // When user selects a business, get business details and create a new estate-law row
    $(document).on("click", ".business-select", async function (event) {
        // Get the business alias to get business details
        const alias = $(this).data("alias");
        $.ajax({
            type: 'get',
            url: `/api/yelp/business/details/${alias}`,
        })
            .done(function (data) {
                // Create a new business object
                try {
                    updateCase({
                        id: 1,
                        business_id: data.id,
                        name: data.name,
                        image_url: data.image_url,
                        phone: data.phone,
                        rating: data.rating,
                        display_phone: data.display_phone,
                        location: data.location,
                        photos: data.photos,
                        hours: data.hours,
                        messaging: data.messaging,
                        CaseId: parseInt(id), // Must get current case id in the future
                    });
                } catch (err) {
                    console.log(err);
                }
            })
    })

    function updateCase(caseData) {
        // Update form
        console.log(tableName)
        $.ajax({
            method: "PUT",
            url: `/api/cases/${tableName}/1`,
            data: caseData
        }).then(function () {
            window.location.href = `../userLP.html?caseId=${id}&zipCode=${zip}`
        });
    }
});