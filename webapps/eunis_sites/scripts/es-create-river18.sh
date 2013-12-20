curl -u eea:eea -XPUT 'http://centaurus-dev.eea.europa.eu/elasticsearch/_river/eunis17/_meta' -d '{
   "type" : "eeaRDF",
   "eeaRDF" : {
      "uris" : ["https://dl.dropboxusercontent.com/s/j452hplihudm8cq/species17.rdf?dl=1&token_hash=AAHkZaKYeh5lYw0253ZAjW-A4ZYNgxS6bzOFAO_-TtFoxw"]
   },
   "index" : {
      "index" : "eunis",
      "type" : "resource"}}'
