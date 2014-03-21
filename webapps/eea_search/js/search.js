$(function($) {

  var blackList = {"http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : ["Article", "Report", "Output from Annual Management Plan", "http://www.eea.europa.eu/portal_types/SimpleVocabularyTerm#SimpleVocabularyTerm", "http://www.eea.europa.eu/portal_types/TreeVocabularyTerm#TreeVocabularyTerm", "http://www.eea.europa.eu/soer/1.0#DataFile"]};
  var whiteList = {"http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : ["Article"]};

  function hide_img_error() {
    $("img").error(function(){
      var box_entry = $(this).parents('.box');
      box_entry.hide();
    });
    return true;
  };

  function display_results() {
    $(".box").remove();
    var data = $.fn.facetview.options.data;
    var prependto = $(".facetview_metadata");
    for(var i = 0; i < data.records.length; i++){
      var element = data.records[i];
      var title = element['http://purl.org/dc/terms/title'];
      var url = element['http://www.w3.org/1999/02/22-rdf-syntax-ns#about'];
      var date = element['http://purl.org/dc/terms/issued'];
      var types = element['http://www.w3.org/1999/02/22-rdf-syntax-ns#type'];
      if (!(types instanceof Array)) {
         types = [types]
      }
      var topics = element['http://www.eea.europa.eu/portal_types#topic'];
      if (!(topics instanceof Array)) {
         topics = [topics]
      }
      if(date === undefined) {
        date = element['http://purl.org/dc/terms/modified'];
        if(date === undefined) {
          date = element['http://purl.org/dc/terms/created'];
          if(date === undefined) {
             date = "";
          }
        }
      }
      date = $.datepicker.formatDate( "dd M yy", new Date(date) );

      var result = $("<div class='box'></div>");
      var inner = $("<div class='boxInner'></div>");
      var a = $("<a href='" + url + "'></a>");
      a.attr('title',title);
      var img = $("<img src='" + url + "/image_mini' />");
      result.append(inner);
      inner.append($("<span class='boxType'>"+types[types.length-1]+"</span>"));
      var titleinfo = $("<p class='titleBox'>"+title+"</p>");
      a.append(img);
      a.append(titleinfo);
      inner.append(a);
      if (topics[0] != undefined) {
         inner.append($("<span class='boxTopic'>"+topics[0]+"</span>"));
      }
      inner.append($("<span class='boxIssued'>"+date+"</span>"));
      
      prependto.before(result);
    }
  };

  var url = $(location).attr('href');
  var position = url.indexOf('/search/');
  var language = url[position-3] === '/' ? url.substring(position-2, position) : 'en';

  var facetview_ob = $('.facet-view-simple').facetview({
    search_url: 'http://centaurus-dev.eea.europa.eu/elasticsearch/rdfdata/_search?',
    search_index: 'elasticsearch',
    facets: [
      {'field': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type', 'display': 'Product Type', 'size':'50', 'order': 'term'},
      {'field': 'http://www.eea.europa.eu/portal_types#topic', 'display': 'EEA Topic', 'size':'50', 'order':'term'},
      {'field': 'http://purl.org/dc/terms/spatial', 'display': 'Spatial coverage', 'size':'50', 'order':'count'}
    ],
    search_sortby: [
      {'field': 'http://purl.org/dc/terms/title', 'display': 'Title'},
      {'field': 'http://purl.org/dc/terms/issued', 'display': 'Publishing date'}
    ],
    sort: [{'http://purl.org/dc/terms/issued':{'order': 'desc'}}
    ],
    result_display: [],
    add_undefined: true,
    predefined_filters: [{'term': {'language':language}},{'term':{'http://www.eea.europa.eu/ontologies.rdf#hasWorkflowState':'published'}}
    ],
    post_search_callback: function(){
      display_results();
      window.hide_unused_options(blackList, whiteList);
      hide_img_error();
      window.add_iframe();
    },
    linkify:  false,
              paging: {
                from: 0,
                size: 20
              }
  });
});
