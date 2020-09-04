// {"business_id":"f9NumwFMBDn751xgFiRbNA",
// "name":"The Range At Lake Norman",
// "address":"10913 Bailey Rd","city":"Cornelius",
// "state":"NC","postal_code":"28031","latitude":35.4627242,
// "longitude":-80.8526119,"stars":3.5,"review_count":36,"is_open":1,"attributes":{"BusinessAcceptsCreditCards":"True",
// "BikeParking":"True","GoodForKids":"False","BusinessParking":"{'garage': False, 'street': False, 'validated': False, 'lot': True, 'valet': False}",
// "ByAppointmentOnly":"False","RestaurantsPriceRange2":"3"},"categories":"Active Life, Gun\/Rifle Ranges, Guns & Ammo, Shopping",
// "hours":{"Monday":"10:0-18:0","Tuesday":"11:0-20:0","Wednesday":"10:0-18:0","Thursday":"11:0-20:0","Friday":"11:0-20:0","Saturday":"11:0-20:0",
// "Sunday":"13:0-18:0"}}

const fs = require('fs')
// Credit Chad
const alldata = require("../../yelp_dataset/yelp_academic_dataset_business.json");
const result = []

for (let i = 0; i < 209393; i++) {
    const {hours, latitude, longitude, ...element} = alldata[i];
    const reg = new RegExp(/(hospice)/, "gi");
    reg.test(element.categories) ? result.push(element) : ""
}
//const result = alldata.filter(a=> {
    //return reg.
//})
fs.writeFile("hospice.json", JSON.stringify(result, null, 2), err=> console.log(err|| "ok!"))


