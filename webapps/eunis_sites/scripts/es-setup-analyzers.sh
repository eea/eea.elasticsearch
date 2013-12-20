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
        "http://eunis.eea.europa.eu/rdf/species-schema.rdf#speciesGroup" : {
          "type" : "string",
          "analyzer" : "none"
        },
        "http://rs.tdwg.org/dwc/terms/genus" : {
          "type" : "string",
          "analyzer" : "none"
        },
        "http://rs.tdwg.org/dwc/terms/scientificName"  : {
          "type" : "string",
          "analyzer" : "none"
        }
      }
    }
  }
}'
