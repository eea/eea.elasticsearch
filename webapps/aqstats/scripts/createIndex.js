var api = require('../../common/lib/esAPI.js');

var fields = [
    "http://reference.eionet.europa.eu/aq/ontology/aggregationType_link",
    "http://reference.eionet.europa.eu/aq/ontology/sample_inletHeight",
    "http://reference.eionet.europa.eu/aq/ontology/procedure_procedure",
    "http://reference.eionet.europa.eu/aq/ontology/sample_link",
    "http://reference.eionet.europa.eu/aq/ontology/samplingPoint_zoneCountryLabel_link",
    "http://reference.eionet.europa.eu/aq/ontology/procedure_link",
    "http://reference.eionet.europa.eu/aq/ontology/datacapturePct_datacapture",
    "http://reference.eionet.europa.eu/aq/ontology/samplingPoint_zone",
    "http://reference.eionet.europa.eu/aq/ontology/samplingpoint_lat",
    "http://reference.eionet.europa.eu/aq/ontology/station_link",
    "http://reference.eionet.europa.eu/aq/ontology/procedure",
    "http://reference.eionet.europa.eu/aq/ontology/beginPosition_year",
    "http://reference.eionet.europa.eu/aq/ontology/station_stationarea",
    "http://reference.eionet.europa.eu/aq/ontology/inserted",
    "http://reference.eionet.europa.eu/aq/ontology/station_geo_pos",
    "http://reference.eionet.europa.eu/aq/ontology/aggregationType_reportingmetric",
    "http://reference.eionet.europa.eu/aq/ontology/station_stationarea_link",
    "http://reference.eionet.europa.eu/aq/ontology/observationVerification",
    "http://reference.eionet.europa.eu/aq/ontology/station_lon",
    "http://reference.eionet.europa.eu/aq/ontology/endPosition",
    "http://reference.eionet.europa.eu/aq/ontology/sample",
    "http://reference.eionet.europa.eu/aq/ontology/samplingPoint_zoneType",
    "http://reference.eionet.europa.eu/aq/ontology/station_lon_stationlongitude",
    "http://reference.eionet.europa.eu/aq/ontology/samplingPoint_stationtype",
    "http://reference.eionet.europa.eu/aq/ontology/sample_kerbdistance",
    "http://reference.eionet.europa.eu/aq/ontology/pollutant",
    "http://reference.eionet.europa.eu/aq/ontology/beginPosition",
    "http://reference.eionet.europa.eu/aq/ontology/samplingPoint_stationtype_link",
    "http://reference.eionet.europa.eu/aq/ontology/station_lat_stationlatitude",
    "http://reference.eionet.europa.eu/aq/ontology/samplingPoint_zone_link",
    "http://reference.eionet.europa.eu/aq/ontology/procedure_analyticaltechnique",
    "http://reference.eionet.europa.eu/aq/ontology/procedure_measurementtype",
    "http://reference.eionet.europa.eu/aq/ontology/samplingpoint_lon",
    "http://reference.eionet.europa.eu/aq/ontology/samplingPoint_zoneCountryLabel",
    "http://reference.eionet.europa.eu/aq/ontology/station_lat",
    "http://reference.eionet.europa.eu/aq/ontology/procedure_measurementtype_link",
    "http://reference.eionet.europa.eu/aq/ontology/samplingPoint_samplingPoint",
    "http://reference.eionet.europa.eu/aq/ontology/procedure_analyticaltechnique_link",
    "http://reference.eionet.europa.eu/aq/ontology/sample_sample",
    "http://reference.eionet.europa.eu/aq/ontology/unit",
    "http://reference.eionet.europa.eu/aq/ontology/updated",
    "http://reference.eionet.europa.eu/aq/ontology/samplingPoint",
    "http://reference.eionet.europa.eu/aq/ontology/aggregationType",
    "http://reference.eionet.europa.eu/aq/ontology/station",
    "http://reference.eionet.europa.eu/aq/ontology/aggregationType_reportingmetric_link",
    "http://reference.eionet.europa.eu/aq/ontology/airqualityValue",
    "http://reference.eionet.europa.eu/aq/ontology/datacapturePct",
    "http://reference.eionet.europa.eu/aq/ontology/samplingPoint_zoneLabel",
    "http://reference.eionet.europa.eu/aq/ontology/observationValidity",
    "http://reference.eionet.europa.eu/aq/ontology/airqualityValue_aqvalue",
    "http://reference.eionet.europa.eu/aq/ontology/inspireNamespace",
    "http://reference.eionet.europa.eu/aq/ontology/samplingPoint_link",
    "http://reference.eionet.europa.eu/aq/ontology/samplingPoint_zoneType_link",
    "http://reference.eionet.europa.eu/aq/ontology/pollutant_link",
];

var queryTemplate =
"PREFIX dcterms: <http://purl.org/dc/terms/>\
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\
PREFIX aqr: <http://reference.eionet.europa.eu/aq/ontology/>\
PREFIX aqdd: <http://dd.eionet.europa.eu/property/>\
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>\
SELECT ?s ?p (if (bound(?isgeo), concat(str(?geo_lat),',',str(?geo_lon)), (if (bound(?isdate), year(?o_orig), (if (bound(?isnumber), round(?o_orig*100)/100, (if (bound(?iscoord), round(?o_orig*10000)/10000, ?o_orig))))))) as ?o)\
WHERE\
    {\
        {?s a aqr:ValidatedExceedence ; ?p ?o_orig FILTER(isLiteral(?o_orig))\
        }\
        UNION\
        {?s a aqr:ValidatedExceedence ; ?p ?o1 .\
            ?o1 rdfs:label ?o_orig\
        }\
        UNION\
        {?s a aqr:ValidatedExceedence ; ?p1 ?o1 .\
            ?o1 aqdd:broaderMetric ?o2 .\
            ?o2 rdfs:label ?o_orig\
            FILTER (str(?p1) in ('http://reference.eionet.europa.eu/aq/ontology/aggregationType'))\
            { SELECT (<http://reference.eionet.europa.eu/aq/ontology/aggregationType_reportingmetric> as ?p) WHERE { } }\
        }\
        UNION\
        {?s a aqr:ValidatedExceedence ; ?p1 ?o1 .\
            ?o1 aqr:relevantEmissions ?o2 .\
            ?o2 aqr:stationClassification ?o3 .\
            ?o3 skos:notation ?o_orig\
            FILTER (str(?p1) = 'http://reference.eionet.europa.eu/aq/ontology/samplingPoint')\
            { SELECT (<http://reference.eionet.europa.eu/aq/ontology/samplingPoint_stationtype> as ?p) WHERE { } }\
        }\
        UNION\
        {?s a aqr:ValidatedExceedence ; ?p1 ?o1 .\
            ?o1 aqr:areaClassification ?o2 .\
            ?o2 skos:notation ?o_orig\
            FILTER (str(?p1) = 'http://reference.eionet.europa.eu/aq/ontology/station')\
            { SELECT (<http://reference.eionet.europa.eu/aq/ontology/station_stationarea> as ?p) WHERE { } }\
        }\
        UNION\
        {?s a aqr:ValidatedExceedence ; ?p1 ?o1 .\
            ?o1 aqr:analyticalTechnique ?o2 .\
            ?o2 rdfs:label ?o_orig\
            FILTER (str(?p1) = 'http://reference.eionet.europa.eu/aq/ontology/procedure')\
            { SELECT (<http://reference.eionet.europa.eu/aq/ontology/procedure_analyticaltechnique> as ?p) WHERE { } }\
        }\
        UNION\
        {?s a aqr:ValidatedExceedence ; ?p1 ?o1 .\
            ?o1 aqr:measurementType ?o2 .\
            ?o2 rdfs:label ?o_orig\
            FILTER (str(?p1) = 'http://reference.eionet.europa.eu/aq/ontology/procedure')\
            { SELECT (<http://reference.eionet.europa.eu/aq/ontology/procedure_measurementtype> as ?p) WHERE { } }\
        }\
        UNION\
        {?s a aqr:ValidatedExceedence ; ?p1 ?o1 .\
            ?o1 aqr:inletHeight ?o_orig\
            FILTER (str(?p1) = 'http://reference.eionet.europa.eu/aq/ontology/sample')\
            { SELECT (<http://reference.eionet.europa.eu/aq/ontology/sample_inletHeight> as ?p) WHERE { } }\
        }\
        UNION\
        {?s a aqr:ValidatedExceedence ; ?p1 ?o1 .\
            ?o1 aqr:kerbDistance ?o_orig\
            FILTER (str(?p1) = 'http://reference.eionet.europa.eu/aq/ontology/sample')\
            { SELECT (<http://reference.eionet.europa.eu/aq/ontology/sample_kerbdistance> as ?p) WHERE { } }\
        }\
        UNION\
        {?s a aqr:ValidatedExceedence ; ?p1 ?o1 .\
            ?o1 aqr:zone ?o2 .\
            ?o2 aqr:inspireId ?o_orig\
            FILTER (str(?p1) = 'http://reference.eionet.europa.eu/aq/ontology/samplingPoint')\
            { SELECT (<http://reference.eionet.europa.eu/aq/ontology/samplingPoint_zone> as ?p) WHERE { } }\
        }\
        UNION\
        {?s a aqr:ValidatedExceedence ; ?p1 ?o1 .\
            ?o1 aqr:zone ?o2 .\
            ?o2 rdfs:label ?o_orig\
            FILTER (str(?p1) = 'http://reference.eionet.europa.eu/aq/ontology/samplingPoint')\
            { SELECT (<http://reference.eionet.europa.eu/aq/ontology/samplingPoint_zoneLabel> as ?p) WHERE { } }\
        }\
        UNION\
        {?s a aqr:ValidatedExceedence ; ?p1 ?o1 .\
            ?o1 aqr:zone ?o2 .\
            ?o2 aqr:zoneType ?o3.\
            ?o3 rdfs:label ?o_orig\
            FILTER (str(?p1) = 'http://reference.eionet.europa.eu/aq/ontology/samplingPoint')\
            { SELECT (<http://reference.eionet.europa.eu/aq/ontology/samplingPoint_zoneType> as ?p) WHERE { } }\
        }\
        UNION\
        {?s a aqr:ValidatedExceedence ; ?p1 ?o1 .\
            ?o1 aqr:zone ?o2 .\
            ?o2 dcterms:spatial ?o3.\
            ?o3 rdfs:label ?o_orig\
            FILTER (str(?p1) = 'http://reference.eionet.europa.eu/aq/ontology/samplingPoint')\
            { SELECT (<http://reference.eionet.europa.eu/aq/ontology/samplingPoint_zoneCountryLabel> as ?p) WHERE { } }\
        }\
        UNION\
        {?s a aqr:ValidatedExceedence ; ?p1 ?o1 .\
            ?o1 aqr:inspireId ?o_orig\
            FILTER (str(?p1) = 'http://reference.eionet.europa.eu/aq/ontology/samplingPoint')\
            { SELECT (<http://reference.eionet.europa.eu/aq/ontology/samplingPoint_samplingPoint> as ?p) WHERE { } }\
        }\
        UNION\
        {?s a aqr:ValidatedExceedence ; ?p1 ?o1 .\
            ?o1 aqr:inspireId ?o_orig\
            FILTER (str(?p1) = 'http://reference.eionet.europa.eu/aq/ontology/sample')\
            { SELECT (<http://reference.eionet.europa.eu/aq/ontology/sample_sample> as ?p) WHERE { } }\
        }\
        UNION\
        {?s a aqr:ValidatedExceedence ; ?p1 ?o1 .\
            ?o1 aqr:inspireId ?o_orig\
            FILTER (str(?p1) = 'http://reference.eionet.europa.eu/aq/ontology/procedure')\
            { SELECT (<http://reference.eionet.europa.eu/aq/ontology/procedure_procedure> as ?p) WHERE { } }\
        }\
        UNION\
        {?s a aqr:ValidatedExceedence ; ?p1 ?o_orig .\
            FILTER (str(?p1) in ('http://reference.eionet.europa.eu/aq/ontology/beginPosition'))\
            { SELECT (<http://reference.eionet.europa.eu/aq/ontology/beginPosition_year> as ?p) WHERE { } }\
            { SELECT ('true' as ?isdate) WHERE { } }\
        }\
        UNION\
        {?s a aqr:ValidatedExceedence ; ?p1 ?o_orig .\
            FILTER (str(?p1) = 'http://reference.eionet.europa.eu/aq/ontology/airqualityValue')\
            { SELECT (<http://reference.eionet.europa.eu/aq/ontology/airqualityValue_aqvalue> as ?p) WHERE { } }\
            { SELECT ('true' as ?isnumber) WHERE { } }\
        }\
        UNION\
        {?s a aqr:ValidatedExceedence ; ?p1 ?o_orig .\
            FILTER (str(?p1) = 'http://reference.eionet.europa.eu/aq/ontology/datacapturePct')\
            { SELECT (<http://reference.eionet.europa.eu/aq/ontology/datacapturePct_datacapture> as ?p) WHERE { } }\
            { SELECT ('true' as ?isnumber) WHERE { } }\
        }\
        UNION\
        {?s a aqr:ValidatedExceedence ; ?p1 ?o_orig .\
            FILTER (str(?p1) = 'http://reference.eionet.europa.eu/aq/ontology/station_lat')\
            { SELECT (<http://reference.eionet.europa.eu/aq/ontology/station_lat_stationlatitude> as ?p) WHERE { } }\
            { SELECT ('true' as ?iscoord) WHERE { } }\
        }\
        UNION\
        {?s a aqr:ValidatedExceedence ; ?p1 ?o_orig .\
            FILTER (str(?p1) = 'http://reference.eionet.europa.eu/aq/ontology/station_lon')\
            { SELECT (<http://reference.eionet.europa.eu/aq/ontology/station_lon_stationlongitude> as ?p) WHERE { } }\
            { SELECT ('true' as ?iscoord) WHERE { } }\
        }\
        UNION\
        {?s a aqr:ValidatedExceedence ; ?p1 ?o_orig .\
            FILTER (str(?p1) = 'http://reference.eionet.europa.eu/aq/ontology/station')\
            { SELECT (<http://reference.eionet.europa.eu/aq/ontology/station_link> as ?p) WHERE { } }\
        }\
        UNION\
        {?s a aqr:ValidatedExceedence ; ?p1 ?o_orig .\
            FILTER (str(?p1) = 'http://reference.eionet.europa.eu/aq/ontology/aggregationType')\
            { SELECT (<http://reference.eionet.europa.eu/aq/ontology/aggregationType_link> as ?p) WHERE { } }\
        }\
        UNION\
        {?s a aqr:ValidatedExceedence ; ?p1 ?o1 .\
            ?o1 aqdd:broaderMetric ?o_orig .\
            FILTER (str(?p1) in ('http://reference.eionet.europa.eu/aq/ontology/aggregationType'))\
            { SELECT (<http://reference.eionet.europa.eu/aq/ontology/aggregationType_reportingmetric_link> as ?p) WHERE { } }\
        }\
        UNION\
        {?s a aqr:ValidatedExceedence ; ?p1 ?o_orig .\
            FILTER (str(?p1) = 'http://reference.eionet.europa.eu/aq/ontology/pollutant')\
            { SELECT (<http://reference.eionet.europa.eu/aq/ontology/pollutant_link> as ?p) WHERE { } }\
        }\
        UNION\
        {?s a aqr:ValidatedExceedence ; ?p1 ?o1 .\
            ?o1 aqr:relevantEmissions ?o2 .\
            ?o2 aqr:stationClassification ?o_orig .\
            FILTER (str(?p1) = 'http://reference.eionet.europa.eu/aq/ontology/samplingPoint')\
            { SELECT (<http://reference.eionet.europa.eu/aq/ontology/samplingPoint_stationtype_link> as ?p) WHERE { } }\
        }\
        UNION\
        {?s a aqr:ValidatedExceedence ; ?p1 ?o1 .\
            ?o1 aqr:areaClassification ?o_orig .\
            FILTER (str(?p1) = 'http://reference.eionet.europa.eu/aq/ontology/station')\
            { SELECT (<http://reference.eionet.europa.eu/aq/ontology/station_stationarea_link> as ?p) WHERE { } }\
        }\
        UNION\
        {?s a aqr:ValidatedExceedence ; ?p1 ?o1 .\
            ?o1 aqr:analyticalTechnique ?o_orig .\
            FILTER (str(?p1) = 'http://reference.eionet.europa.eu/aq/ontology/procedure')\
            { SELECT (<http://reference.eionet.europa.eu/aq/ontology/procedure_analyticaltechnique_link> as ?p) WHERE { } }\
        }\
        UNION\
        {?s a aqr:ValidatedExceedence ; ?p1 ?o1 .\
            ?o1 aqr:measurementType ?o_orig .\
            FILTER (str(?p1) = 'http://reference.eionet.europa.eu/aq/ontology/procedure')\
            { SELECT (<http://reference.eionet.europa.eu/aq/ontology/procedure_measurementtype_link> as ?p) WHERE { } }\
        }\
        UNION\
        {?s a aqr:ValidatedExceedence ; ?p1 ?o_orig .\
            FILTER (str(?p1) = 'http://reference.eionet.europa.eu/aq/ontology/sample')\
            { SELECT (<http://reference.eionet.europa.eu/aq/ontology/sample_link> as ?p) WHERE { } }\
        }\
        UNION\
        {?s a aqr:ValidatedExceedence ; ?p1 ?o1 .\
            ?o1 aqr:zone ?o_orig .\
            FILTER (str(?p1) = 'http://reference.eionet.europa.eu/aq/ontology/samplingPoint')\
            { SELECT (<http://reference.eionet.europa.eu/aq/ontology/samplingPoint_zone_link> as ?p) WHERE { } }\
        }\
        UNION\
        {?s a aqr:ValidatedExceedence ; ?p1 ?o1 .\
            ?o1 aqr:zone ?o2 .\
            ?o2 aqr:zoneType ?o_orig.\
            FILTER (str(?p1) = 'http://reference.eionet.europa.eu/aq/ontology/samplingPoint')\
            { SELECT (<http://reference.eionet.europa.eu/aq/ontology/samplingPoint_zoneType_link> as ?p) WHERE { } }\
        }\
        UNION\
        {?s a aqr:ValidatedExceedence ; ?p1 ?o1 .\
            ?o1 aqr:zone ?o2 .\
            ?o2 dcterms:spatial ?o_orig.\
            FILTER (str(?p1) = 'http://reference.eionet.europa.eu/aq/ontology/samplingPoint')\
            { SELECT (<http://reference.eionet.europa.eu/aq/ontology/samplingPoint_zoneCountryLabel_link> as ?p) WHERE { } }\
        }\
        UNION\
        {?s a aqr:ValidatedExceedence ; ?p1 ?o_orig .\
            FILTER (str(?p1) = 'http://reference.eionet.europa.eu/aq/ontology/samplingPoint')\
            { SELECT (<http://reference.eionet.europa.eu/aq/ontology/samplingPoint_link> as ?p) WHERE { } }\
        }\
        UNION\
        {?s a aqr:ValidatedExceedence ; ?p1 ?o_orig .\
            FILTER (str(?p1) = 'http://reference.eionet.europa.eu/aq/ontology/procedure')\
            { SELECT (<http://reference.eionet.europa.eu/aq/ontology/procedure_link> as ?p) WHERE { } }\
        }\
        UNION\
        {?s a aqr:ValidatedExceedence;\
              aqr:station_lon ?geo_lon;\
              aqr:station_lat ?geo_lat\
              { SELECT (<http://reference.eionet.europa.eu/aq/ontology/station_geo_pos> as ?p) WHERE { }}\
              { SELECT ('true' as ?isgeo) WHERE { } }\
        }\
        <filter>\
}";

var filterTemplate = "FILTER (str(?s) in (<slist>))"

var filterLength = 100;

var sQuery = "SELECT ?s WHERE { ?s a <http://reference.eionet.europa.eu/aq/ontology/ValidatedExceedence>} order by ?s"

var normProp = {};
for (var i = 0; i < fields.length; i++){
    normProp[fields[i]] = fields[i].split("/")[fields[i].split("/").length - 1];
}

console.log(normProp);

var reqBody = {
    "type": "eeaRDF",
    "eeaRDF" : {
        "endpoint" : "http://cr.eionet.europa.eu/sparql",
        "queryType" : "select",
        "query" : [],
        "addLanguage" : false,
        "includeResourceURI" : true,
        "normProp" : normProp
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

