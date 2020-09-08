'use strict';

const yelp = require('yelp-fusion');
const client = yelp.client(process.env.YELP_API_KEY);

const terms = ['Estate Planning Law', 'Life Insurance', 'Funeral Services & Cemeteries', 'Hospice'];

const businessSearch = (term, location) => {
    return new Promise((resolve, reject) => {
        // yelp-fusion - Business Search
        client.search({
            term: term,  
            location: location,    
        }).then(response => {
            resolve(response.jsonBody.businesses);
        }).catch(e => {
            reject(e);  // console.log(e);
        });
    });
}

const businessDetails = alias => {
    return new Promise((resolve, reject) => {
        // yelp-fusion - Business Details
        client.business(alias).then(response => {
            resolve(response.jsonBody)
        }).catch(e => {
            reject(e);
        });
    });
}

const getBusinessSearchResult = async (term, location) => {
    try {
        let businessSearchData = await businessSearch(term, location);
        return businessSearchData;
        // Get more detailed results
        // let businessDetailsData = await businessDetails(businessSearchData[0].alias)
        // console.log(businessDetailsData);
    } catch (err) {
        console.log(err);
    }
}

console.log(getBusinessSearchResult(terms[1], 'Los Angeles, ca'));