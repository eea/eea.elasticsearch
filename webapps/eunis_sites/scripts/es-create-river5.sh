curl -u eea:eea -XPUT 'http://centaurus-dev.eea.europa.eu/elasticsearch/_river/eunis5/_meta' -d '{
   "type" : "eeaRDF",
   "eeaRDF" : {
      "uris" : ["https://dl.dropboxusercontent.com/s/m9lukwcn2da7j4f/species4.rdf?dl=1&token_hash=AAEKjbDYHIL9DyIFFPMtYRg8dnwC_13DyciNxKZpAb-Fyg"]
   },
   "index" : {
      "index" : "eunis",
      "type" : "resource"}}'
