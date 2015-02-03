var api = require('../../common/lib/esAPI.js');

var reqBody = {
    "type": "eeaRDF",
    "eeaRDF" : {
        "endpoint" : "http://cr.eionet.europa.eu/sparql",
        "queryType" : "select",
        "query" : ["SELECT ?s ?p ?o WHERE { ?s a <http://reference.eionet.europa.eu/aq/ontology/ValidatedExceedence> ; ?p ?o}"],
        "addLanguage" : false,
        "includeResourceURI" : true
    },
    "index" : {
        "index" : "aqstatsdata",
        "type" : "resources"
    }
};

// As part of the runScript skel
var run = function(options, callbacks) {
    api.esAPI(options)
        .PUT('/_river/aqstats/_meta', reqBody, callbacks).execute();
}
module.exports = { run: run };
