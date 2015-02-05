var api = require('../../common/lib/esAPI.js');

var queryTemplate = "SELECT ?s ?p ?o WHERE" +
                        "{"+
                            "{ ?s a <http://reference.eionet.europa.eu/aq/ontology/ValidatedExceedence> ; ?p ?o FILTER(isLiteral(?o))}"+
                            "UNION"+
                            "{?s a <http://reference.eionet.europa.eu/aq/ontology/ValidatedExceedence> ; ?p ?o1 ."+
                                "?o1 <http://www.w3.org/2000/01/rdf-schema#label> ?o  }"+
                        "<filter>"+
                        "}";

var filterTemplate = "FILTER (str(?s) in (<slist>))"

var filterLength = 5;

var sQuery = "SELECT ?s WHERE { ?s a <http://reference.eionet.europa.eu/aq/ontology/ValidatedExceedence>} order by ?s"


var reqBody = {
    "type": "eeaRDF",
    "eeaRDF" : {
        "endpoint" : "http://cr.eionet.europa.eu/sparql",
        "queryType" : "select",
        "query" : [],
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
    var client = new SparqlClient(endpoint);

    var reqQueryTemplate = reqBody.eeaRDF.query[0];

    client.query(sQuery)
        .execute(function(error, results){
            var slist = "";
            var step = 0;
            for (var i = 0; i < results.results.bindings.length; i++){
                if (step > 0){
                    slist = slist + ", ";
                }
                slist = slist + '"' + results.results.bindings[i].s.value +'"'
                step++;
                if (step === filterLength){
                    reqBody.eeaRDF.query.push(queryTemplate.split("<filter>").join(filterTemplate.split("<slist>").join(slist)));
                    step = 0;
                    slist = "";
                }
            }
            api.esAPI(options)
                .PUT('/_river/aqstats/_meta', reqBody, callbacks).execute();

        });

}
module.exports = { run: run };
