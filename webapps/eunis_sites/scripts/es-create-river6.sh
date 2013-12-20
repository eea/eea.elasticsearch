curl -u eea:eea -XPUT 'http://centaurus-dev.eea.europa.eu/elasticsearch/_river/eunis5/_meta' -d '{
   "type" : "eeaRDF",
   "eeaRDF" : {
      "uris" : ["https://dl.dropboxusercontent.com/s/i1cmmpapzrm57b1/species5.rdf?dl=1&token_hash=AAFlIk6kujOUDTuPnsf60YkhCN7CRZuO9f7-Kj8ALVj_0A"]
   },
   "index" : {
      "index" : "eunis",
      "type" : "resource"}}'
