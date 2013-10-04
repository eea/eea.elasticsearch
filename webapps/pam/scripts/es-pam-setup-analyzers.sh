curl -u eea:eea -XPUT 'http://centaurus.eea.europa.eu/elasticsearch/pamdata' -d '{
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
        "http://semantic.eea.europa.eu/project/pam/pam.csv#Country" : {
          "type" : "string",
          "analyzer" : "coma"
        },
        "http://semantic.eea.europa.eu/project/pam/pam.csv#PAMID"  : {
          "type" : "string",
          "analyzer" : "none"
        },
        "http://semantic.eea.europa.eu/project/pam/pam.csv#Type_of_instrument" : {
          "type" : "string",
          "analyzer" : "coma"
        },
        "http://semantic.eea.europa.eu/project/pam/pam.csv#Affected_GHG" : {
          "type" : "string",
          "analyzer" : "coma"
        },
        "http://semantic.eea.europa.eu/project/pam/pam.csv#Targeted_sectors" : {
          "type" : "string",
          "analyzer" : "coma"
        },
        "http://semantic.eea.europa.eu/project/pam/pam.csv#Projection_scenario_in_which_the_PAM_is_included" : {
          "type" : "string",
          "analyzer" : "coma"
        },
        "http://semantic.eea.europa.eu/project/pam/pam.csv#Link_to_EU_Emissions_Trading_Scheme_ETS" : {
          "type" : "string",
          "analyzer" : "coma"
        },
        "http://semantic.eea.europa.eu/project/pam/pam.csv#Type_of_implementing_entities" : {
          "type" : "string",
          "analyzer" : "coma"
        },
        "http://semantic.eea.europa.eu/project/pam/pam.csv#Related_EU_policies" : {
          "type" : "string",
          "analyzer" : "semicolon"
        }
      }
    }
  }
}'
