// require("dotenv").config(); // remove later...
$(document).ready(function () {

    $.ajax({
        type: 'get',
        url: '/api/yelp/business/estates/32789',
    })
    .done(function(data){
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            $("#lawyer-results").append(`<div class="card mb-3" style="max-width: 600px;">
            <div class="row no-gutters">
                <div class="col-md-3">
                    <img src="${data[i].image_url}" class="card-img" alt="image">
                </div>
                <div class="col-md-9">
                    <div class="card-business">
                        <h6 class="card-title-name">Business Name: ${data[i].name}</h6> 
                        <h6 class="card-title-address">Business Address: ${data[i].location.address1}</h6>
                        <h6 class="card-title-city">City, State Zip: ${data[i].location.display_address[1]}</h6>
                        <h6 class="card-title-phone">Business Phone #: ${data[i].display_phone}</h6>
                        <h6 class="card-title-rating">Rating: ${data[i].rating}</h6>
                    </div>
                </div>
            </div>
        </div>`
        );
        }
    });
});