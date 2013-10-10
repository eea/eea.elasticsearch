curl -u eea:eea -XPUT 'http://centaurus-dev.eea.europa.eu/elasticsearch/eunis_sites' -d '{
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
    "resource" : {
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
         },
        "http://eunis.eea.europa.eu/rdf/sites-schema.rdf#inCountry" : {
          "type" : "string",
          "analyzer" : "none"
         },
        "http://eunis.eea.europa.eu/rdf/sites-schema.rdf#designationDate" : {
          "type" : "string",
          "analyzer" : "none"
         },
        "http://eunis.eea.europa.eu/rdf/sites-schema.rdf#sourceDb" : {
          "type" : "string",
          "analyzer" : "none"
         },
        "http://eunis.eea.europa.eu/rdf/sites-schema.rdf#hasHabitatType" : {
          "type" : "string",
          "analyzer" : "none"
         },
        "http://eunis.eea.europa.eu/rdf/sites-schema.rdf#hasSpecies" : {
          "type" : "string",
          "analyzer" : "none"
         }
      }
    }
  }
}'
