// Credit goes to Chad for showing us how to filer json data and use regular expressions

const fs = require('fs');

const alldata = require("../../yelp_dataset/yelp_academic_dataset_business.json");
const result = [];

for (let i = 0; i < 209393; i++) {
    const { hours, latitude, longitude, review_count, is_open, attributes, ...element } = alldata[i];
    const reg = new RegExp(/(Law)/, "gi");
    reg.test(element.categories) ? result.push(element) : "";
}
fs.writeFile("law.json", JSON.stringify(result, null, 2), err => console.log(err || "ok!"))

/*========= regular expressions ==========*/
// Hospice
// Estate\sPlanning\sLaw
// Life\sInsurance
// Funeral\sServices\s&\sCemeteries