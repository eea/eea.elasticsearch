curl -u eea:eea -XPUT 'http://centaurus-dev.eea.europa.eu/elasticsearch/_river/search2/_meta' -d '{
  "type": "eeaRDF",
  "eeaRDF" : {
    "endpoint" : "http://semantic.eea.europa.eu/sparql",
    "queryType" : "construct",
    "query" : "CONSTRUCT {?s ?p ?o} WHERE { {?s a <http://www.eea.europa.eu/portal_types/EcoTip#EcoTip> . ?s ?p ?o} UNION { ?s a <http://www.eea.europa.eu/portal_types/ExternalDataSpec#ExternalDataSpec> . ?s ?p ?o }}",
	 "normMap" : { "http://www.eea.europa.eu/portal_types/EEAFigureFile#themes" : "topic", "http://www.eea.europa.eu/portal_types/EEAVacancy#themes" : "topic", "http://www.eea.europa.eu/portal_types/EcoTip#themes" : "topic", "http://www.eea.europa.eu/portal_types/EpubFile#themes" : "topic", "http://www.eea.europa.eu/portal_types/Event#themes" : "topic", "http://www.eea.europa.eu/portal_types/ExternalDataSpec#themes" : "topic", "http://www.eea.europa.eu/portal_types/EyewitnessStory#themes" : "topic", "http://www.eea.europa.eu/portal_types/FactSheetDocument#themes" : "topic"},
	"proplist" : ["http://www.eea.europa.eu/portal_types/EEAFigureFile#id", "http://www.eea.europa.eu/portal_types/EEAVacancy#id", "http://www.eea.europa.eu/portal_types/EcoTip#id", "http://www.eea.europa.eu/portal_types/EpubFile#id", "http://www.eea.europa.eu/portal_types/Event#id", "http://www.eea.europa.eu/portal_types/ExternalDataSpec#id", "http://www.eea.europa.eu/portal_types/EyewitnessStory#id", "http://www.eea.europa.eu/portal_types/FactSheetDocument#id"],
	"listtype" : "black"
}
}'

