// Scroll up button
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

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
                        <h4 class="card-businessName">${data[i].name}</h4> 
                        <hr>
                        <h6 class="card-title card-address">ADDRESS: <text>${data[i].location.address1}</text></h6>
                        <h6 class="card-title card-city">CITY, STATE & ZIP CODE: <text>${data[i].location.display_address[1]}</text></h6>
                        <h6 class="card-title card-phone">BUSINESS PHONE #: <text>${data[i].display_phone}</text></h6>
                        <h6 class="card-title card-rating">RATING: <text>${data[i].rating} out of 5</text></h6>
                        <p class="categories">${data[i].categories[0].title}</p>
                    </div>
                </div>
            </div>
        </div>`
        );
        }
    });
});
