const fs = require('fs');

const alldata = require("../../yelp_dataset/yelp_academic_dataset_business.json");
const result = [];

for (let i = 0; i < 209393; i++) {
    const { hours, latitude, longitude, ...element } = alldata[i];
    const reg = new RegExp(/(hospice)/, "gi");
    reg.test(element.categories) ? result.push(element) : "";
}
//const result = alldata.filter(a=> {
//return reg.
//})
fs.writeFile("hospice.json", JSON.stringify(result, null, 2), err => console.log(err || "ok!"))


