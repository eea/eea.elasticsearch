var countries = require('./util/countries.js');
var api = require('./util/esAPI.js');

// Properties that are indexed into ElasticSearch
var proplist = [
    "http://purl.org/dc/terms/spatial",
    "http://purl.org/dc/terms/creator",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    "http://purl.org/dc/terms/issued",
    "http://purl.org/dc/terms/expires",
    "http://purl.org/dc/terms/modified",
    "http://purl.org/dc/terms/title",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#about",
    "language",
    "http://www.eea.europa.eu/portal_types#topic",
    "http://purl.org/dc/terms/description",
    "http://www.eea.europa.eu/ontologies.rdf#hasWorkflowState",
    "http://www.eea.europa.eu/ontologies.rdf#objectProvides"];

// Normalise the properties to the given value
var normalisedProperties = {
    "http://www.eea.europa.eu/portal_workflow/daviz_workflow/states/published" : "published",
    "http://www.eea.europa.eu/portal_workflow/eea_simple_approval/states/published": "published",
    "http://www.eea.europa.eu/portal_workflow/one_state_workflow/states/published": "published",
    "http://www.eea.europa.eu/portal_workflow/eea_simple_public_approval/states/published": "published",
    "http://www.eea.europa.eu/portal_workflow/indicators_workflow/states/published": "published",
    "http://www.eea.europa.eu/portal_workflow/folder_workflow/states/published": "published",
    "http://www.eea.europa.eu/portal_workflow/plone_workflow/states/published": "published",
    "http://www.eea.europa.eu/portal_workflow/linguaflow/states/published": "published",
    "http://www.eea.europa.eu/portal_workflow/eea_default_workflow/states/published": "published",
    "http://www.eea.europa.eu/portal_workflow/eea_data_workflow/states/published": "published"
};

// Do not index these values for a given properties
var blackMap = {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
        "Webpage",
        "Tracked file",
        "http://www.w3.org/ns/dcat#Dataset",
        "http://www.w3.org/ns/dcat#Distribution" ]
};

// Index _only_ these values for given properties
var whiteMap = { "http://purl.org/dc/terms/spatial" : countries.countries };

// Normalise these following objects to a given value
var normObj = {
    "Organisation" : "Organization",
    "Czechia" : "Czech Republic",
    "Russia" : "Russian Federation",
    "Kosovo (UNSCR 1244/99)" : "Kosovo",
    "Macedonia (FYR)" : "Macedonia",
    "http://www.eea.europa.eu/portal_vocabularies/themes/acidification" : "Air Pollution",
    "http://www.eea.europa.eu/portal_vocabularies/themes/air_quality" : "Air pollution",
    "http://www.eea.europa.eu/portal_vocabularies/themes/nature" : "Biodiversity",
    "http://www.eea.europa.eu/portal_vocabularies/themes/ozone" : "Climate change",
    "http://www.eea.europa.eu/portal_vocabularies/themes/management" : "Policy instruments",
    "http://www.eea.europa.eu/portal_vocabularies/themes/information" : "Policy Instruments",
    "http://www.eea.europa.eu/portal_vocabularies/themes/reporting" : "Policy instruments",
    "http://www.eea.europa.eu/portal_vocabularies/themes/population" : "Green economy",
    "http://www.eea.europa.eu/portal_vocabularies/themes/health" : "Environment and health",
    "http://www.eea.europa.eu/portal_workflow/daviz_workflow/states/published" : "published",
    "http://www.eea.europa.eu/portal_workflow/eea_simple_approval/states/published": "published",
    "http://www.eea.europa.eu/portal_workflow/one_state_workflow/states/published": "published",
    "http://www.eea.europa.eu/portal_workflow/eea_simple_public_approval/states/published": "published",
    "http://www.eea.europa.eu/portal_workflow/indicators_workflow/states/published": "published",
    "http://www.eea.europa.eu/portal_workflow/folder_workflow/states/published": "published",
    "http://www.eea.europa.eu/portal_workflow/plone_workflow/states/published": "published",
    "http://www.eea.europa.eu/portal_workflow/linguaflow/states/published": "published",
    "http://www.eea.europa.eu/portal_workflow/eea_default_workflow/states/published": "published",
    "http://www.eea.europa.eu/portal_workflow/eea_data_workflow/states/published": "published"
};

var req_body = {
  "type": "eeaRDF",
  "eeaRDF" : {
    "endpoint" : "http://semantic.eea.europa.eu/sparql",
    "queryType" : "construct",
    "query" : [
        "CONSTRUCT {?s ?p ?o} WHERE { graph ?g { ?s ?p ?o } . FILTER (str(?g) = concat(str(?s),\"/@@rdf\")) . ?s a <http://www.eea.europa.eu/portal_types/Article#Article> . ?s ?p ?o }",
        "CONSTRUCT {?s ?p ?o} WHERE { graph ?g { ?s ?p ?o } . FILTER (str(?g) = concat(str(?s),\"/@@rdf\")) . ?s a <http://www.eea.europa.eu/portal_types/Assessment#Assessment> . ?s ?p ?o }",
        "CONSTRUCT {?s ?p ?o} WHERE { graph ?g { ?s ?p ?o } . FILTER (str(?g) = concat(str(?s),\"/@@rdf\")) . ?s a <http://www.eea.europa.eu/portal_types/CloudVideo#CloudVideo> . ?s ?p ?o }",
        "CONSTRUCT {?s ?p ?o} WHERE { graph ?g { ?s ?p ?o } . FILTER (str(?g) = concat(str(?s),\"/@@rdf\")) . ?s a <http://www.eea.europa.eu/portal_types/Data#Data> . ?s ?p ?o }",
        "CONSTRUCT {?s ?p ?o} WHERE { graph ?g { ?s ?p ?o } . FILTER (str(?g) = concat(str(?s),\"/@@rdf\")) . ?s a <http://www.eea.europa.eu/portal_types/EEAFigure#EEAFigure> . ?s ?p ?o }",
        "CONSTRUCT {?s ?p ?o} WHERE { graph ?g { ?s ?p ?o } . FILTER (str(?g) = concat(str(?s),\"/@@rdf\")) . ?s a <http://www.eea.europa.eu/portal_types/DavizVisualization#DavizVisualization> . ?s ?p ?o }",
        "CONSTRUCT {?s ?p ?o} WHERE { graph ?g { ?s ?p ?o } . FILTER (str(?g) = concat(str(?s),\"/@@rdf\")) . ?s a <http://www.eea.europa.eu/portal_types/EcoTip#EcoTip> . ?s ?p ?o }",
        "CONSTRUCT {?s ?p ?o} WHERE { graph ?g { ?s ?p ?o } . FILTER (str(?g) = concat(str(?s),\"/@@rdf\")) . ?s a <http://www.eea.europa.eu/portal_types/GIS%20Application#GISApplication> . ?s ?p ?o }",
        "CONSTRUCT {?s ?p ?o} WHERE { graph ?g { ?s ?p ?o } . FILTER (str(?g) = concat(str(?s),\"/@@rdf\")) . ?s a <http://www.eea.europa.eu/portal_types/Highlight#Highlight> . ?s ?p ?o }",
        "CONSTRUCT {?s ?p ?o} WHERE { graph ?g { ?s ?p ?o } . FILTER (str(?g) = concat(str(?s),\"/@@rdf\")) . ?s a <http://www.eea.europa.eu/portal_types/KeyMessage#KeyMessage>}",
        "CONSTRUCT {?s ?p ?o} WHERE { graph ?g { ?s ?p ?o } . FILTER (str(?g) = concat(str(?s),\"/@@rdf\")) . ?s a <http://www.eea.europa.eu/portal_types/PolicyQuestion#PolicyQuestion> . ?s ?p ?o }",
        "CONSTRUCT {?s ?p ?o} WHERE { graph ?g { ?s ?p ?o } . FILTER (str(?g) = concat(str(?s),\"/@@rdf\")) . ?s a <http://www.eea.europa.eu/portal_types/PressRelease#PressRelease> . ?s ?p ?o }",
        "CONSTRUCT {?s ?p ?o} WHERE { graph ?g { ?s ?p ?o } . FILTER (str(?g) = concat(str(?s),\"/@@rdf\")) . ?s a <http://www.eea.europa.eu/portal_types/Report#Report> . ?s ?p ?o }",
        "CONSTRUCT {?s ?p ?o} WHERE { graph ?g { ?s ?p ?o } . FILTER (str(?g) = concat(str(?s),\"/@@rdf\")) . ?s a <http://www.eea.europa.eu/portal_types/SOERKeyFact#SOERKeyFact> . ?s ?p ?o }",
        "CONSTRUCT {?s ?p ?o} WHERE { graph ?g { ?s ?p ?o } . FILTER (str(?g) = concat(str(?s),\"/@@rdf\")) . ?s a <http://www.eea.europa.eu/portal_types/SOERMessage#SOERMessage> . ?s ?p ?o }"],
    "proplist" : proplist,
    "listtype" : "white",
    "normProp" : normalisedProperties,
    "blackMap" : blackMap,
    "whiteMap" : whiteMap,
    "normObj" : normObj
  }
};

// As part of the runScript skel
var run = function(options, callbacks) {
    api.esAPI(options)
       .PUT('/_river/search/_meta', req_body, callbacks).execute();
}
module.exports = { run: run };
