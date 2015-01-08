var api = require('../../common/lib/esAPI.js');

// User defined filters for both query and index _tokens_
var filters = {
    'english_stemmer': {
          'type': 'stemmer',
          'language': 'english'
    }
};

// Analyzers to be used for different object properties
var analyzers = {
    'none' : {
      'type' : 'keyword',
      'filter':  [ 'lowercase' ]
    },
    'default' : {
      'type' : 'custom',
      'tokenizer': 'standard',
      'filter':  [ 'lowercase', 'stop', 'asciifolding', 'english_stemmer' ]
    }
};

// Proprety mappings for rdfdata
// Describe how properties get indexed into ElasticSearch
var rdfdataMappings = {
    'language' : {
      'type' : 'string',
      'analyzer' : 'none'
    },
    'http://www.eea.europa.eu/portal_types#topic' : {
      'type' : 'string',
      'null_value' : 'Various other issues',
      'analyzer' : 'none'
    },
    'http://www.w3.org/1999/02/22-rdf-syntax-ns#type' : {
      'type' : 'string',
      'analyzer' : 'none'
    },
    'http://www.eea.europa.eu/ontologies.rdf#objectProvides' : {
      'type' : 'string',
      'analyzer' : 'none'
    },
    'http://purl.org/dc/terms/spatial' : {
      'type' : 'string',
      'analyzer' : 'none'
    },
    'http://www.eea.europa.eu/ontologies.rdf#hasWorkflowState' : {
      'type' : 'string',
      'analyzer' : 'none'
    },
    'http://purl.org/dc/terms/title' : {
      'type' : 'multi_field',
      'fields' : {
        'sort' : {'type' : 'string', 'analyzer' : 'default'},
        'index' : {'type' : 'string', 'analyzer' : 'none'}
      }
    }
};

var mappings = {
    'settings': {
        'analysis': {
            'filter': filters,
            'analyzer': analyzers,
        }
    },
    'mappings': {
        'resource': {
            'properties': rdfdataMappings
        }
    }
};

// Index title both as a whole and using the default analyzer
var titleMappings = {
    "resource": {
        "properties": {
            "http://purl.org/dc/terms/title" : {
                "type": "multi_field",
                "fields" : {
                    "http://purl.org/dc/terms/title" : {
                        "type" : "string",
                        "index" : "not_analyzed"
                    },
                    "toindex" : {
                        "type" : "string",
                        "analyzer" : "default"
                    }
                }
            }
        }
    }
};

// As part of the runScript skel
var run = function(options, callbacks) {
    api.esAPI(options)
       .PUT('/rdfdata', mappings, callbacks)
       .PUT('/rdfdata/resource/_mapping', titleMappings, callbacks)
       .execute();
}
module.exports = { run: run };
