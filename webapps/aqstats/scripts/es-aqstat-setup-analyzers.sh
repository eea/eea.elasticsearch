curl -u eea:eea -XPUT 'http://localhost:9200/aqstatsdata' -d '{
  "settings" : {
    "analysis" : {
      "analyzer" : {
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
      }
    }
  },
  "mappings" : {
    "resources" : {
      "properties" : {
        "http://reference.eionet.europa.eu/aq/ontology/station" : {
          "type" : "string",
          "analyzer" : "none"
        },
        "http://reference.eionet.europa.eu/aq/ontology/samplingPoint" : {
          "type" : "string",
          "analyzer" : "none"
        },
        "http://reference.eionet.europa.eu/aq/ontology/pollutant" : {
          "type" : "string",
          "analyzer" : "none"
        },

        "http://reference.eionet.europa.eu/aq/ontology/observationVerification" : {
          "type" : "string",
          "analyzer" : "none"
        },
        "http://reference.eionet.europa.eu/aq/ontology/observationValidity" : {
          "type" : "string",
          "analyzer" : "none"
        },
        "http://reference.eionet.europa.eu/aq/ontology/aggregationType" : {
          "type" : "string",
          "analyzer" : "none"
        }
      }
    }
  }
}'
