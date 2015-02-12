var api = require('../../common/lib/esAPI.js');

var queryTemplate =
"PREFIX dcterms: <http://purl.org/dc/terms/>\
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\
PREFIX aqr: <http://reference.eionet.europa.eu/aq/ontology/>\
PREFIX aqdd: <http://dd.eionet.europa.eu/property/>\
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>\
SELECT ?s ?p ?o WHERE\
    {\
        {?s a aqr:ValidatedExceedence ; ?p ?o FILTER(isLiteral(?o))\
        }\
        UNION\
        {?s a aqr:ValidatedExceedence ; ?p ?o1 .\
            ?o1 rdfs:label ?o\
        }\
        UNION\
        {?s a aqr:ValidatedExceedence ; ?p1 ?o1 .\
            ?o1 aqdd:broaderMetric ?o2 .\
            ?o2 rdfs:label ?o\
            FILTER (str(?p1) in ('http://reference.eionet.europa.eu/aq/ontology/aggregationType'))\
            { SELECT (<http://reference.eionet.europa.eu/aq/ontology/aggregationType_reportingmetric> as ?p) WHERE { } }\
        }\
        UNION\
        {?s a aqr:ValidatedExceedence ; ?p1 ?o1 .\
            ?o1 aqr:relevantEmissions ?o2 .\
            ?o2 aqr:stationClassification ?o3 .\
            ?o3 skos:notation ?o\
            FILTER (str(?p1) = 'http://reference.eionet.europa.eu/aq/ontology/samplingPoint')\
            { SELECT (<http://reference.eionet.europa.eu/aq/ontology/samplingPoint_stationtype> as ?p) WHERE { } }\
        }\
        UNION\
        {?s a aqr:ValidatedExceedence ; ?p1 ?o1 .\
            ?o1 aqr:areaClassification ?o2 .\
            ?o2 skos:notation ?o\
            FILTER (str(?p1) = 'http://reference.eionet.europa.eu/aq/ontology/station')\
            { SELECT (<http://reference.eionet.europa.eu/aq/ontology/station_stationarea> as ?p) WHERE { } }\
        }\
        UNION\
        {?s a aqr:ValidatedExceedence ; ?p1 ?o1 .\
            ?o1 aqr:analyticalTechnique ?o2 .\
            ?o2 rdfs:label ?o\
            FILTER (str(?p1) = 'http://reference.eionet.europa.eu/aq/ontology/procedure')\
            { SELECT (<http://reference.eionet.europa.eu/aq/ontology/procedure_analyticaltechnique> as ?p) WHERE { } }\
        }\
        UNION\
        {?s a aqr:ValidatedExceedence ; ?p1 ?o1 .\
            ?o1 aqr:measurementType ?o2 .\
            ?o2 rdfs:label ?o\
            FILTER (str(?p1) = 'http://reference.eionet.europa.eu/aq/ontology/procedure')\
            { SELECT (<http://reference.eionet.europa.eu/aq/ontology/procedure_measurementtype> as ?p) WHERE { } }\
        }\
        UNION\
        {?s a aqr:ValidatedExceedence ; ?p1 ?o1 .\
            ?o1 aqr:inletHeight ?o\
            FILTER (str(?p1) = 'http://reference.eionet.europa.eu/aq/ontology/sample')\
            { SELECT (<http://reference.eionet.europa.eu/aq/ontology/sample_inletHeight> as ?p) WHERE { } }\
        }\
        UNION\
        {?s a aqr:ValidatedExceedence ; ?p1 ?o1 .\
            ?o1 aqr:kerbDistance ?o\
            FILTER (str(?p1) = 'http://reference.eionet.europa.eu/aq/ontology/sample')\
            { SELECT (<http://reference.eionet.europa.eu/aq/ontology/sample_kerbdistance> as ?p) WHERE { } }\
        }\
        UNION\
        {?s a aqr:ValidatedExceedence ; ?p1 ?o1 .\
            ?o1 aqr:zone ?o2 .\
            ?o2 aqr:inspireId ?o\
            FILTER (str(?p1) = 'http://reference.eionet.europa.eu/aq/ontology/samplingPoint')\
            { SELECT (<http://reference.eionet.europa.eu/aq/ontology/samplingPoint_zone> as ?p) WHERE { } }\
        }\
        UNION\
        {?s a aqr:ValidatedExceedence ; ?p1 ?o1 .\
            ?o1 aqr:zone ?o2 .\
            ?o2 rdfs:label ?o\
            FILTER (str(?p1) = 'http://reference.eionet.europa.eu/aq/ontology/samplingPoint')\
            { SELECT (<http://reference.eionet.europa.eu/aq/ontology/samplingPoint_zoneLabel> as ?p) WHERE { } }\
        }\
        UNION\
        {?s a aqr:ValidatedExceedence ; ?p1 ?o1 .\
            ?o1 aqr:zone ?o2 .\
            ?o2 aqr:zoneType ?o3.\
            ?o3 rdfs:label ?o\
            FILTER (str(?p1) = 'http://reference.eionet.europa.eu/aq/ontology/samplingPoint')\
            { SELECT (<http://reference.eionet.europa.eu/aq/ontology/samplingPoint_zoneType> as ?p) WHERE { } }\
        }\
        UNION\
        {?s a aqr:ValidatedExceedence ; ?p1 ?o1 .\
            ?o1 aqr:zone ?o2 .\
            ?o2 dcterms:spatial ?o3.\
            ?o3 rdfs:label ?o\
            FILTER (str(?p1) = 'http://reference.eionet.europa.eu/aq/ontology/samplingPoint')\
            { SELECT (<http://reference.eionet.europa.eu/aq/ontology/samplingPoint_zoneCountryLabel> as ?p) WHERE { } }\
        }\
        UNION\
        {?s a aqr:ValidatedExceedence ; ?p1 ?o1 .\
            ?o1 aqr:inspireId ?o\
            FILTER (str(?p1) = 'http://reference.eionet.europa.eu/aq/ontology/samplingPoint')\
            { SELECT (<http://reference.eionet.europa.eu/aq/ontology/samplingPoint_samplingPoint> as ?p) WHERE { } }\
        }\
        UNION\
        {?s a aqr:ValidatedExceedence ; ?p1 ?o1 .\
            ?o1 aqr:inspireId ?o\
            FILTER (str(?p1) = 'http://reference.eionet.europa.eu/aq/ontology/sample')\
            { SELECT (<http://reference.eionet.europa.eu/aq/ontology/sample_sample> as ?p) WHERE { } }\
        }\
        UNION\
        {?s a aqr:ValidatedExceedence ; ?p1 ?o1 .\
            ?o1 aqr:inspireId ?o\
            FILTER (str(?p1) = 'http://reference.eionet.europa.eu/aq/ontology/procedure')\
            { SELECT (<http://reference.eionet.europa.eu/aq/ontology/procedure_procedure> as ?p) WHERE { } }\
        }\
        <filter>\
}";

var filterTemplate = "FILTER (str(?s) in (<slist>))"

var filterLength = 100;

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
                if ((step === filterLength) || (i === results.results.bindings.length - 1)){
                    var filter = filterTemplate.split("<slist>").join(slist);
                    var query = queryTemplate.split("<filter>").join(filter);
                    reqBody.eeaRDF.query.push(query);
                    step = 0;
                    slist = "";
                }
            }
            api.esAPI(options)
                .PUT('/_river/aqstats/_meta', reqBody, callbacks).execute();

        });

}
module.exports = { run: run };
