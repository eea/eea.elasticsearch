curl -u eea:eea -XPUT 'http://centaurus-dev.eea.europa.eu/elasticsearch/_river/eunis4/_meta' -d '{
   "type" : "eeaRDF",
   "eeaRDF" : {
      "uris" : ["https://dl.dropboxusercontent.com/s/5evbjk8i80ai5up/species20.rdf?dl=1&token_hash=AAEX7fHyaem61WaiDeG1Ji6TF39Fx6uQRRA_G0jyjYYLdw"]
   },
   "index" : {
      "index" : "eunis",
      "type" : "resource"}}'
