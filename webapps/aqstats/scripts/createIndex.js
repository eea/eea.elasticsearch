var api = require('../../common/lib/esAPI.js');

var queryTemplate =
"SELECT ?s if(bound(?pr), ?pr, ?p) as ?p if (bound(?isdate), year(?o), if (bound(?isnumber), round(?o*100)/100, if (bound(?iscoord), round(?o*10000)/10000, ?o))) as ?o WHERE\
    {\
        {?s a <http://reference.eionet.europa.eu/aq/ontology/ValidatedExceedence> ; ?p ?o FILTER(isLiteral(?o))\
        }\
        UNION\
        {?s a <http://reference.eionet.europa.eu/aq/ontology/ValidatedExceedence> ; ?p ?o1 .\
            ?o1 <http://www.w3.org/2000/01/rdf-schema#label> ?o\
        }\
        UNION\
        {?s a <http://reference.eionet.europa.eu/aq/ontology/ValidatedExceedence> ; ?p ?o1 .\
            ?o1 <http://dd.eionet.europa.eu/property/broaderMetric> ?o2 .\
            ?o2 <http://www.w3.org/2000/01/rdf-schema#label> ?o\
            FILTER (str(?p) in ('http://reference.eionet.europa.eu/aq/ontology/aggregationType'))\
            { SELECT <http://reference.eionet.europa.eu/aq/ontology/aggregationType.reportingmetric> as ?pr WHERE { } }\
        }\
        UNION\
        {?s a <http://reference.eionet.europa.eu/aq/ontology/ValidatedExceedence> ; ?p ?o .\
            FILTER (str(?p) in ('http://reference.eionet.europa.eu/aq/ontology/beginPosition'))\
            { SELECT <http://reference.eionet.europa.eu/aq/ontology/beginPosition.year> as ?pr WHERE { } }\
            { SELECT "true" as ?isdate WHERE { } }\
        }\
        UNION\
        {?s a <http://reference.eionet.europa.eu/aq/ontology/ValidatedExceedence> ; ?p ?o .\
            FILTER (str(?p) = 'http://reference.eionet.europa.eu/aq/ontology/airqualityValue')\
            { SELECT <http://reference.eionet.europa.eu/aq/ontology/airqualityValue.aqvalue> as ?pr WHERE { } }\
            { SELECT "true" as ?isnumber WHERE { } }\
        }\
        UNION\
        {?s a <http://reference.eionet.europa.eu/aq/ontology/ValidatedExceedence> ; ?p ?o .\
            FILTER (str(?p) = 'http://reference.eionet.europa.eu/aq/ontology/datacapturePct')\
            { SELECT <http://reference.eionet.europa.eu/aq/ontology/datacapturePct.datacapture> as ?pr WHERE { } }\
            { SELECT "true" as ?isnumber WHERE { } }\
        }\
        UNION\
        {?s a <http://reference.eionet.europa.eu/aq/ontology/ValidatedExceedence> ; ?p ?o .\
            FILTER (str(?p) = 'http://reference.eionet.europa.eu/aq/ontology/station_lat')\
            { SELECT <http://reference.eionet.europa.eu/aq/ontology/station_lat.stationlatitude> as ?pr WHERE { } }\
            { SELECT "true" as ?iscoord WHERE { } }\
        }\
        UNION\
        {?s a <http://reference.eionet.europa.eu/aq/ontology/ValidatedExceedence> ; ?p ?o .\
            FILTER (str(?p) = 'http://reference.eionet.europa.eu/aq/ontology/station_lon')\
            { SELECT <http://reference.eionet.europa.eu/aq/ontology/station_lon.stationlongitude> as ?pr WHERE { } }\
            { SELECT "true" as ?iscoord WHERE { } }\
        }\
        UNION\
        {?s a <http://reference.eionet.europa.eu/aq/ontology/ValidatedExceedence> ; ?p ?o1 .\
            ?o1 <http://reference.eionet.europa.eu/aq/ontology/relevantEmissions> ?o2 .\
            ?o2 <http://reference.eionet.europa.eu/aq/ontology/stationClassification> ?o3 .\
            ?o3 <http://www.w3.org/2004/02/skos/core#notation> ?o\
            FILTER (str(?p) = 'http://reference.eionet.europa.eu/aq/ontology/samplingPoint')\
            { SELECT <http://reference.eionet.europa.eu/aq/ontology/samplingPoint.stationtype> as ?pr WHERE { } }\
        }\
        UNION\
        {?s a <http://reference.eionet.europa.eu/aq/ontology/ValidatedExceedence> ; ?p ?o1 .\
            ?o1 <http://reference.eionet.europa.eu/aq/ontology/areaClassification> ?o2 .\
            ?o2 <http://www.w3.org/2004/02/skos/core#notation> ?o\
            FILTER (str(?p) = 'http://reference.eionet.europa.eu/aq/ontology/station')\
            { SELECT <http://reference.eionet.europa.eu/aq/ontology/station.stationarea> as ?pr WHERE { } }\
        }\
        UNION\
        {?s a <http://reference.eionet.europa.eu/aq/ontology/ValidatedExceedence> ; ?p ?o1 .\
            ?o1 <http://reference.eionet.europa.eu/aq/ontology/analyticalTechnique> ?o2 .\
            ?o2 <http://www.w3.org/2000/01/rdf-schema#label> ?o\
            FILTER (str(?p) = 'http://reference.eionet.europa.eu/aq/ontology/procedure')\
            { SELECT <http://reference.eionet.europa.eu/aq/ontology/procedure.analyticaltechnique> as ?pr WHERE { } }\
        }\
        UNION\
        {?s a <http://reference.eionet.europa.eu/aq/ontology/ValidatedExceedence> ; ?p ?o1 .\
            ?o1 <http://reference.eionet.europa.eu/aq/ontology/measurementType> ?o2 .\
            ?o2 <http://www.w3.org/2000/01/rdf-schema#label> ?o\
            FILTER (str(?p) = 'http://reference.eionet.europa.eu/aq/ontology/procedure')\
            { SELECT <http://reference.eionet.europa.eu/aq/ontology/procedure.measurementtype> as ?pr WHERE { } }\
        }\
        UNION\
        {?s a <http://reference.eionet.europa.eu/aq/ontology/ValidatedExceedence> ; ?p ?o1 .\
            ?o1 <http://reference.eionet.europa.eu/aq/ontology/inletHeight> ?o\
            FILTER (str(?p) = 'http://reference.eionet.europa.eu/aq/ontology/sample')\
            { SELECT <http://reference.eionet.europa.eu/aq/ontology/sample.inletHeight> as ?pr WHERE { } }\
        }\
        UNION\
        {?s a <http://reference.eionet.europa.eu/aq/ontology/ValidatedExceedence> ; ?p ?o1 .\
            ?o1 <http://reference.eionet.europa.eu/aq/ontology/kerbDistance> ?o\
            FILTER (str(?p) = 'http://reference.eionet.europa.eu/aq/ontology/sample')\
            { SELECT <http://reference.eionet.europa.eu/aq/ontology/sample.kerbdistance> as ?pr WHERE { } }\
        }\
        UNION\
        {?s a <http://reference.eionet.europa.eu/aq/ontology/ValidatedExceedence> ; ?p ?o1 .\
            ?o1 <http://reference.eionet.europa.eu/aq/ontology/zone> ?o2 .\
            ?o2 <http://reference.eionet.europa.eu/aq/ontology/inspireId> ?o\
            FILTER (str(?p) = 'http://reference.eionet.europa.eu/aq/ontology/samplingPoint')\
            { SELECT <http://reference.eionet.europa.eu/aq/ontology/samplingPoint.zone> as ?pr WHERE { } }\
        }\
        UNION\
        {?s a <http://reference.eionet.europa.eu/aq/ontology/ValidatedExceedence> ; ?p ?o1 .\
            ?o1 <http://reference.eionet.europa.eu/aq/ontology/zone> ?o2 .\
            ?o2 <http://www.w3.org/2000/01/rdf-schema#label> ?o\
            FILTER (str(?p) = 'http://reference.eionet.europa.eu/aq/ontology/samplingPoint')\
            { SELECT <http://reference.eionet.europa.eu/aq/ontology/samplingPoint.zoneLabel> as ?pr WHERE { } }\
        }\
        UNION\
        {?s a <http://reference.eionet.europa.eu/aq/ontology/ValidatedExceedence> ; ?p ?o1 .\
            ?o1 <http://reference.eionet.europa.eu/aq/ontology/zone> ?o2 .\
            ?o2 <http://reference.eionet.europa.eu/aq/ontology/zoneType> ?o3.\
            ?o3 <http://www.w3.org/2000/01/rdf-schema#label> ?o\
            FILTER (str(?p) = 'http://reference.eionet.europa.eu/aq/ontology/samplingPoint')\
            { SELECT <http://reference.eionet.europa.eu/aq/ontology/samplingPoint.zoneType> as ?pr WHERE { } }\
        }\
        UNION\
        {?s a <http://reference.eionet.europa.eu/aq/ontology/ValidatedExceedence> ; ?p ?o1 .\
            ?o1 <http://reference.eionet.europa.eu/aq/ontology/zone> ?o2 .\
            ?o2 <http://purl.org/dc/terms/spatial> ?o3.\
            ?o3 <http://www.w3.org/2000/01/rdf-schema#label> ?o\
            FILTER (str(?p) = 'http://reference.eionet.europa.eu/aq/ontology/samplingPoint')\
            { SELECT <http://reference.eionet.europa.eu/aq/ontology/samplingPoint.zoneCountryLabel> as ?pr WHERE { } }\
        }\
        UNION\
        {?s a <http://reference.eionet.europa.eu/aq/ontology/ValidatedExceedence> ; ?p ?o1 .\
            ?o1 <http://reference.eionet.europa.eu/aq/ontology/inspireId> ?o\
            FILTER (str(?p) = 'http://reference.eionet.europa.eu/aq/ontology/samplingPoint')\
            { SELECT <http://reference.eionet.europa.eu/aq/ontology/samplingPoint.samplingPoint> as ?pr WHERE { } }\
        }\
        UNION\
        {?s a <http://reference.eionet.europa.eu/aq/ontology/ValidatedExceedence> ; ?p ?o1 .\
            ?o1 <http://reference.eionet.europa.eu/aq/ontology/inspireId> ?o\
            FILTER (str(?p) = 'http://reference.eionet.europa.eu/aq/ontology/sample')\
            { SELECT <http://reference.eionet.europa.eu/aq/ontology/sample.sample> as ?pr WHERE { } }\
        }\
        UNION\
        {?s a <http://reference.eionet.europa.eu/aq/ontology/ValidatedExceedence> ; ?p ?o1 .\
            ?o1 <http://reference.eionet.europa.eu/aq/ontology/inspireId> ?o\
            FILTER (str(?p) = 'http://reference.eionet.europa.eu/aq/ontology/procedure')\
            { SELECT <http://reference.eionet.europa.eu/aq/ontology/procedure.procedure> as ?pr WHERE { } }\
        }\
        <filter>\
    }";

var filterTemplate = "FILTER (str(?s) in (<slist>))"

var filterLength = 1000;

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
