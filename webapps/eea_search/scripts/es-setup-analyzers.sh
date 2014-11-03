#!/bin/bash
curl -u eea:eea -XPUT $1'/rdfdata' -d '{
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
        "http://www.eea.europa.eu/portal_types#topic" : {
          "type" : "string",
          "analyzer" : "none"
        },
        "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : {
          "type" : "string",
          "analyzer" : "none"
        },
        "http://www.eea.europa.eu/ontologies.rdf#objectProvides" : {
          "type" : "string",
          "analyzer" : "none"
        },
        "http://purl.org/dc/terms/spatial" : {
          "type" : "string",
          "analyzer" : "none"
        },
        "http://www.eea.europa.eu/ontologies.rdf#hasWorkflowState" : {
          "type" : "string",
          "analyzer" : "none"
        },
        "http://purl.org/dc/terms/title" : {
          "type" : "multi_field",
          "fields" : {
            "sort" : {"type" : "string", "analyzer" : "default"},
            "index" : {"type" : "string", "analyzer" : "none"}
          }
        }
      }
    }
  }
}'

curl -u eea:eea -XPUT $1'/rdfdata/resource/_mapping' -d '{
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
}'
