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
      var date = element['http://purl.org/dc/terms/issued'];
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
      var result = $("<div class='photoAlbumEntry'></div>");
      var a = $("<a href='" + url + "'></a>");
      a.attr('title',title);
      result.append(a);
      a.append(
        $("<span class='photoAlbumEntryWrapper'></span>").append(
          $("<img src='" + url + "/image_thumb' />")));
      a.append(
        $("<span class='photoAlbumEntryTitle'>" + title + "</span>")
			     );
      a.append(
        $("<span class='date'>" + date + "</span>"));
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
      {'field': 'http://purl.org/dc/terms/title', 'display': 'Title'},
      {'field': 'http://purl.org/dc/terms/issued', 'display': 'Publishing date'}
    ],
    static_filters: [
        {'field': 'language', 'display': 'Language', 'size': '50', 'values':
        [{'display': 'Bulgarian', 'value': 'bg'}, {'display': 'Czech',
        'value': 'cs'}, {'display': 'Croatian', 'value': 'hr'}, {'display':
        'Danish', 'value': 'da'}, {'display': 'Dutch', 'value': 'nl'},
        {'display': 'English', 'value': 'en'}, {'display': 'Greek', 'value' :
        'el'}, {'display': 'Estonian', 'value': 'et'}, {'display': 'Finnish',
        'value': 'fi'}, {'display': 'French', 'value': 'fr'}, {'display':
        'German', 'value': 'de'}, {'display': 'Hungarian', 'value': 'hu'},
        {'display': 'Icelandic', 'value': 'is'}, {'display': 'Italian', 'value':
        'it'}, {'display': 'Latvian', 'value': 'lv'}, {'display': 'Lithuanian',
        'value': 'lt'}, {'display': 'Maltese', 'value': 'mt'}, {'display':
        'Norwegian', 'value': 'no'}, {'display': 'Polish', 'value': 'pl'},
        {'display': 'Portuguese', 'value': 'pt'},{'display': 'Romanian',
        'value': 'ro'}, {'display': 'Slovak', 'value': 'sk'}, {'display':
        'Slovenian', 'value': 'sl'}, {'display': 'Spanish', 'value': 'es'},
        {'display': 'Swedish', 'value': 'sv'}, {'display': 'Turkish', 'value':
        'tr'}], 'type': {'value': 'oneorless'}}
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
