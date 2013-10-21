curl -u eea:eea -XPUT 'http://centaurus-dev.eea.europa.eu/elasticsearch/rdfdata' -d '{
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
    "resource" : {
      "properties" : {
        "language" : {
          "type" : "string",
          "analyzer" : "none"
        },
        "topic" : {
          "type" : "string",
          "analyzer" : "none"
        },
        "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : {
          "type" : "string",
          "analyzer" : "none"
        },
        "http://purl.org/dc/terms/spatial" : {
          "type" : "string",
          "analyzer" : "none"
        }
      }
    }
  }
}'
