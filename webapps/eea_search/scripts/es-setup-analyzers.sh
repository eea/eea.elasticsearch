curl -u eea:eea -XPUT 'http://centaurus.eea.europa.eu/elasticsearch/rdfdata' -d '{
  "settings" : {
    "analysis" : {
      "analyzer" : {
        "none" : {
          "type" : "keyword"
        }
      }
    }
  },
  "mappings" : {
    "resources" : {
      "properties" : {
        "language" : {
          "type" : "string",
          "analyzer" : "none"
        },
        "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : {
          "type" : "string",
          "analyzer" : "none"
        }

      }
    }
  }
}'
