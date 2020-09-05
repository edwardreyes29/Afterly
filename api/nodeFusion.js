'use strict';

const yelp = require('yelp-fusion');
const client = yelp.client(process.env.YELP_API_KEY);

// Business search
client.search({
    term: 'Estate Planning Law',
    location: 'Los Angeles, ca',
}).then(response => {
    console.log(response.jsonBody.businesses[0].name);
    console.log(response.jsonBody.businesses);
}).catch(e => {
    console.log(e);
});

// Business details 
client.business('gary-danko-san-francisco').then(response => {
    // console.log(response.jsonBody);
    console.log(response.jsonBody.name);
}).catch(e => {
    console.log(e);
});