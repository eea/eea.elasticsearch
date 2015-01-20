var api = require('../../common/lib/esAPI.js');

var reqBody = {
    "type": "eeaRDF",
    "eeaRDF" : {
        "endpoint" : "http://semantic.eea.europa.eu/sparql",
        "queryType" : "construct",
        "query" : ["CONSTRUCT {?s ?p ?o} FROM <http://semantic.eea.europa.eu/project/pam/pam2014.csv> WHERE { ?s ?p ?o}"],
        "addLanguage" : false,
        "includeResourceURI" : false
    },
    "index" : {
        "index" : "pamdata",
        "type" : "resources"
    }
};

// As part of the runScript skel
var run = function(options, callbacks) {
    api.esAPI(options)
        .PUT('/_river/new_pam/_meta', reqBody, callbacks).execute();
}
module.exports = { run: run };
