curl -u eea:eea -XPUT 'http://centaurus-dev.eea.europa.eu/elasticsearch/voiddata' -d '{
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
          }
      }
    }
  },
  "mappings" : {
    "resources" : {
      "properties" : {
        "http://purl.org/dc/terms/creator" : {
          "type" : "string",
          "analyzer" : "none"
        },
        "http://purl.org/dc/terms/subject"  : {
          "type" : "string",
          "analyzer" : "none"
        },
        "http://purl.org/dc/terms/publisher" : {
          "type" : "string",
          "analyzer" : "none"
         }
      }
    }
  }
}'
