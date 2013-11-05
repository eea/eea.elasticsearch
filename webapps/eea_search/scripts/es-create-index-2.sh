curl -u eea:eea -XPUT 'http://centaurus-dev.eea.europa.eu/elasticsearch/_river/search1/_meta' -d '{
  "type": "eeaRDF",
  "eeaRDF" : {
    "endpoint" : "http://semantic.eea.europa.eu/sparql",
    "queryType" : "construct",
    "query" : "CONSTRUCT {?s ?p ?o} WHERE { {?s a <http://www.eea.europa.eu/portal_types/Assessment#Assessment> . ?s ?p ?o} UNION {?s a <http://www.eea.europa.eu/portal_types/CloudVideo#CloudVideo> . ?s ?p ?o} UNION {?s a <http://www.eea.europa.eu/portal_types/Data#Data> . ?s ?p ?o} UNION { ?s a <http://www.eea.europa.eu/portal_types/DavizVisualization#DavizVisualization> . ?s ?p ?o} UNION { ?s a <http://www.eea.europa.eu/portal_types/Document#Document> . ?s ?p ?o } UNION {?s a <http://www.eea.europa.eu/portal_types/EcoTip#EcoTip> . ?s ?p ?o} UNION { ?s a <http://www.eea.europa.eu/portal_types/ExternalDataSpec#ExternalDataSpec> . ?s ?p ?o }}",
	"normProp" : { "http://www.eea.europa.eu/portal_types/Assessment#themes" : "topic", "http://www.eea.europa.eu/portal_types/AssessmentPart#themes" : "topic", "http://www.eea.europa.eu/portal_types/Data#themes" : "topic", "http://www.eea.europa.eu/portal_types/CloudVideo#themes" : "topic", "http://www.eea.europa.eu/portal_types/DataFile#themes" : "topic", "http://www.eea.europa.eu/portal_types/DavizVisualization#themes" : "topic", "http://www.eea.europa.eu/portal_types/Document#themes" : "topic", "http://www.eea.europa.eu/portal_types/EEAFigureFile#themes" : "topic", "http://www.eea.europa.eu/portal_types/EEAVacancy#themes" : "topic", "http://www.eea.europa.eu/portal_types/EcoTip#themes" : "topic", "http://www.eea.europa.eu/portal_types/EpubFile#themes" : "topic", "http://www.eea.europa.eu/portal_types/Event#themes" : "topic", "http://www.eea.europa.eu/portal_types/ExternalDataSpec#themes" : "topic"},
    "blackMap" : {"http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : ["Webpage", "Tracked file"]},
    "normObj" : {"Organisation" : "Organization", "Quick Event" : "Event"},
    "proplist" : ["http://purl.org/dc/terms/spatial", "http://purl.org/dc/terms/creator", "http://www.w3.org/1999/02/22-rdf-syntax-ns#type", "http://purl.org/dc/terms/issued", "http://purl.org/dc/terms/title", "http://www.w3.org/1999/02/22-rdf-syntax-ns#about", "language", "topic"],
    "listtype" : "white"
}}'
