'use strict';

const yelp = require('yelp-fusion');
const client = yelp.client(process.env.YELP_API_KEY);
const terms = ['Estate Planning Law', 'Life Insurance', 'Funeral Services & Cemeteries', 'Hospice'];

module.exports = function(app) {
    // Return businesses by zip code
    //==================================================

    // Estate Laws
    app.get("/api/yelp/business/lawyers/:zipCode", async function(req, res) {
        try {
            let businessSearchData = await businessSearch(terms[0], req.params.zipCode);
            res.json(businessSearchData);  
        } catch (err) {
            console.log(err);
        }
    });

    // Life Insurances
    app.get("/api/yelp/business/insurances/:zipCode", async function(req, res) {
        try {
            let businessSearchData = await businessSearch(terms[1], req.params.zipCode);
            res.json(businessSearchData);  
        } catch (err) {
            console.log(err);
        }
    });

    // Life Insurances
    app.get("/api/yelp/business/funerals/:zipCode", async function(req, res) {
        try {
            let businessSearchData = await businessSearch(terms[2], req.params.zipCode);
            res.json(businessSearchData);  
        } catch (err) {
            console.log(err);
        }
    });

    // Life Insurances
    app.get("/api/yelp/business/hospices/:zipCode", async function(req, res) {
        try {
            let businessSearchData = await businessSearch(terms[3], req.params.zipCode);
            res.json(businessSearchData);  
        } catch (err) {
            console.log(err);
        }
    });

    // Business Details
    app.get("/api/yelp/business/details/:alias", async function(req, res) {
        try {
            let businessData = await businessDetails(req.params.alias);
            res.json(businessData);
        } catch(err) {
            console.log(err);
        }
    })
}

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
    } catch (err) {
        console.log(err);
    }
}