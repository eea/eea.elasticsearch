$(function($) {
  function hide_unused_options() {
    var toHide = ["option1", "Report"];
    for(var i = 0; i < toHide.length; i++){
      $("[href='" + toHide[i] + "']").parent().hide();
    }
  };

  function display_results() {
    $(".photoAlbumEntry").remove();
    var data = $.fn.facetview.options.data;
    var prependto = $(".facetview_metadata");
    for(var i = 0; i < data.records.length; i++){
      var element = data.records[i];
      var title = element['http://purl.org/dc/terms/title'];
      var url = element['http://www.w3.org/1999/02/22-rdf-syntax-ns#about'];
      var result = $("<div class='photoAlbumEntry'></div>");
      var a = $("<a href='" + url + "'></a>");
      result.append(a);
      a.append(
        $("<span class='photoAlbumEntryWrapper'></span>").append(
          $("<img src='" + url + "/image_thumb' />")));
      a.append(
        $("<span class='photoAlbumEntryTitle'>" + title + "</span>")
			     );
      prependto.before(result);
    }
  };

  var facetview_ob = $('.facet-view-simple').facetview({
    search_url: 'http://centaurus-dev.eea.europa.eu/elasticsearch/rdfdata/_search?',
    search_index: 'elasticsearch',
    facets: [
      {'field': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type', 'display': 'Product Type', 'size':'50', 'order': 'term'},
      {'field': 'http://www.eea.europa.eu/portal_types#topic', 'display': 'EEA Topic', 'size':'50', 'order':'term'},
      {'field': 'http://purl.org/dc/terms/spatial', 'display': 'Spatial coverage', 'size':'50', 'order':'count'}
    ],
    search_sortby: [
      {'field': 'http://purl.org/dc/terms/issued', 'display': 'Publishing date'},
      {'field': 'http://purl.org/dc/terms/title', 'display': 'Title'}
    ],
    static_filters: [
        {'field': 'language', 'display': 'Language', 'size': '50', 'values':
        [{'display': 'English', 'value': 'en'}, {'display': 'French', 'value':
        'fr'}, {'display': 'Romanian', 'value': 'ro'}], 'type': {'value':
        'oneorless'}}
    ],
    result_display: [],
    add_undefined: true,
    post_search_callback: function(){
      display_results();
      hide_unused_options();
    },
    linkify:  false,
              paging: {
                from: 0,
                size: 20
              }
  });
});
