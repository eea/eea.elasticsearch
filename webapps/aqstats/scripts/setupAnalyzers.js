var api = require('../../common/lib/esAPI.js');

// Analyzers to be used for different object properties
var analyzers = {
    "none" : {
      "type" : "keyword"
    },
    "coma" : {
      "type" : "pattern",
      "lowercase" : false,
      "pattern" : ", "
    },
    "semicolon" : {
      "type" : "pattern",
      "lowercase" : false,
      "pattern" : "; "
    }
};

// Proprety mappings for aqstatsdata
// Describe how properties get indexed into ElasticSearch
var aqstatsdataMappings = {
    "inspireNamespace" : {
        "type" : "string",
        "analyzer" : "none"
    },
    "pollutant" : {
        "type" : "string",
        "analyzer" : "none"
    },
    "aggregationType" : {
        "type" : "string",
        "analyzer" : "none"
    },
    "samplingPoint_stationtype" : {
        "type" : "string",
        "analyzer" : "none"
    },
    "station_stationarea" : {
        "type" : "string",
        "analyzer" : "none"
    },
    "procedure_analyticaltechnique" : {
        "type" : "string",
        "analyzer" : "none"
    },
    "samplingPoint_zone" : {
        "type" : "string",
        "analyzer" : "none"
    },
    "samplingPoint_zoneCountryLabel" : {
        "type" : "string",
        "analyzer" : "none"
    },
    "station_geo_pos" : {
        "type" : "geo_point",
        "analyzer" : "none"
    }
};

var mappings = {
    'settings': {
        'analysis': {
            'analyzer': analyzers
        }
    },
    'mappings': {
        'resources': {
            'properties': aqstatsdataMappings
        }
    }
};

// As part of the runScript skel
var run = function(options, callbacks) {
    api.esAPI(options)
       .PUT('/aqstatsdata', mappings, callbacks)
       .execute();
}
module.exports = { run: run };
