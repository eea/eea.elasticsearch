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
        "http://semantic.eea.europa.eu/project/pam/pam.csv#Policy_Type_List" : {
          "type" : "string",
          "analyzer" : "coma"
        },
        "http://semantic.eea.europa.eu/project/pam/pam.csv#GHG_affected" : {
          "type" : "string",
          "analyzer" : "coma"
        },
        "http://semantic.eea.europa.eu/project/pam/pam.csv#Sector_List" : {
          "type" : "string",
          "analyzer" : "coma"
        },
        "http://semantic.eea.europa.eu/project/pam/pam.csv#Projections_scenario_in_which_the_PAM_is_included" : {
          "type" : "string",
          "analyzer" : "coma"
        },
        "http://semantic.eea.europa.eu/project/pam/pam.csv#Link_to_EU_Emissions_Trading_Scheme_EU_ETS" : {
          "type" : "string",
          "analyzer" : "coma"
        },
        "http://semantic.eea.europa.eu/project/pam/pam.csv#Implementing_entities_List" : {
          "type" : "string",
          "analyzer" : "coma"
        },
        "http://semantic.eea.europa.eu/project/pam/pam.csv#Primary_EU_policy_responsible_objectives" : {
          "type" : "string",
          "analyzer" : "none"
        },
		"http://semantic.eea.europa.eu/project/pam/pam.csv#Related_EU_policies" : {
          "type" : "string",
          "analyzer" : "coma"
        }
      }
    }
  }
}'
