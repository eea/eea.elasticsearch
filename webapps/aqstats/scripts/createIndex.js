var api = require('../../common/lib/esAPI.js');

var reqBody = {
    "type": "eeaRDF",
    "eeaRDF" : {
        "endpoint" : "http://cr.eionet.europa.eu/sparql",
        "queryType" : "select",
        "query" : ["SELECT ?s ?p ?o WHERE { ?s a <http://reference.eionet.europa.eu/aq/ontology/ValidatedExceedence> ; ?p ?o <filter>}"],
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
    var SparqlClient = require('sparql-client');
    var endpoint = 'http://cr.eionet.europa.eu/sparql';
    var query = "SELECT ?s WHERE { ?s a <http://reference.eionet.europa.eu/aq/ontology/ValidatedExceedence>} order by ?s limit 20"
    var client = new SparqlClient(endpoint);
    var limit = 5;

    var filtertemplate = "FILTER (str(?s) in (<slist>))"
    var reqQueryTemplate = reqBody.eeaRDF.query[0];

    client.query(query)
        .execute(function(error, results){
            var slist = "";
            var step = 0;
            for (var i = 0; i < results.results.bindings.length; i++){
                if (step > 0){
                    slist = slist + ", ";
                }
                slist = slist + '"' + results.results.bindings[i].s.value +'"'
                step++;
                if (step === limit){
                    var filter = filtertemplate.split("<slist>").join(slist);
                    reqBody.eeaRDF.query[0] = reqQueryTemplate.split("<filter>").join(filter);

                    api.esAPI(options)
                        .PUT('/_river/aqstats/_meta', reqBody, callbacks).execute();
                    step = 0;
                    slist = "";

                }
            }

        });

}
module.exports = { run: run };
