$(function($) {

  var blackList = {
    'http://www.w3.org/1999/02/22-rdf-syntax-ns#type' : []};

  var whiteList = false;
  var appHierarchy = {
    'http://www.w3.org/1999/02/22-rdf-syntax-ns#type' :
      [{
        'Highlight' : [],
        'Press Release' : [],
        'Event' : [],
        'Promotion' : [],
        'Article' : [],
        'Eco-Tip' : [],
        'Image' : [],
        'Video' : [],
        'Report' : [],
        'Data' : [],
        'Daviz Visualization' : [],
        'Indicator Specification' : [],
        'Indicator factsheet' : [],
        'Indicator assessment' : [],
        'Page': [],
        'Link' : [],
        'Data File' : [],
        'Assessment part' : [],
        'Dataset' : [],
        'Distribution' : [],
        'EEA Job Vacancy' : [],
        'Epub File' : [],
        'External Data Reference' : [],
        'Eyewitness story' : [],
        'Figure' : [],
        'File' : [],
        'GIS Map Application' : [],
        'Methodology Reference' : [],
        'Organization' : [],
        'Policy Question' : [],
        'Rationale Reference' : [],
        'SOER Key fact' : [],
        'SOER Message' : [],
        'Speech' : [],
        'Text' : [],
        'Work Item' : []
        }],
          'http://www.eea.europa.eu/portal_types#topic' : [],
          'http://purl.org/dc/terms/spatial' : [],
          'http://www.eea.europa.eu/ontologies.rdf#objectProvides' : []
        };

  function getToday() {
    var d = new Date();
    var month = d.getMonth() + 1;
    var day = d.getDate();

    var output = [
      d.getFullYear(),
      '-',
      (month < 10 ? '0' : ''),
      month,
      '-',
      (day < 10 ? '0' : ''),
      day].join('');
    return output;
  }

  function hide_unused_options(blackList, whiteList) {
    var filters = $('a.facetview_filterchoice');
    for (var filter in filters) {
      var thisFilter = filters[filter];
      var value;
      if (thisFilter.href) {
        value = thisFilter.href.substring(
          thisFilter.href.lastIndexOf('/') + 1,
          thisFilter.href.length);
      }
      if (!whiteList.isEmptyObject) {
        var toKeep = whiteList[thisFilter.rel];
        if (toKeep && toKeep.indexOf(value) === -1) {
          hidden = $(thisFilter.parentNode).remove();
        }

      } else {
        var toHide = blackList[thisFilter.rel];
        if (toHide === undefined) {
          continue;
        }
        if (toHide.indexOf(value) >= 0) {
          $(thisFilter.parentNode).remove();
        }
      }
    }
  }

  function add_EEA_settings() {
    //Accordion settings
    $('#facetview_trees')
        .addClass('eea-accordion-panels collapsed-by-default non-exclusive');
    $('.facetview_filter').addClass('eea-accordion-panel');
    $('.facetview_showtree').addClass('notoc eea-icon-right-container');
    $('.facetview_arrow_right').addClass('eea-icon eea-icon-right');
    //Remove results button
    $('.facetview_howmany').hide();
    //Remove facetview help
    $('.facetview_learnmore').hide();
    //Remove share button
    $('.facetview_sharesave').hide();
    //replace share icon
    $('.icon-share-alt').addClass('eea-icon eea-icon-share-alt');
    $('.eea-icon-share-alt').removeClass('icon-share-alt');
    $('.share-icon').addClass('eea-icon eea-icon-share-alt');
    //replace remove icon
    $('.icon-remove').addClass('eea-icon eea-icon-times');
    $('.eea-icon-times').removeClass('icon-remove');
    //change pagination
    $('.pagination').addClass('paginator listingBar');
    //Change top pagination
    var results = $($('.pagination').find('.active')[0]).text(); //x-y of z
    var split = results.split(' of ');
    if (split.length === 2) {
      var html = [
        '<span>Results ',
        split[0],
        ' of <strong>',
        split[1],
        '</strong></span>'
        ].join('');
    $('.top-pagination').html(html);
    } else {
      $('.top-pagination').html('');
    }
  }

  function add_iframe() {
    if (window.embed) {
      var url = $(location).attr('href');
      var position = url.indexOf('?');
      url = url.substring(0, position);
      var width = $('.facet-embed')[0].offsetWidth;
      var height = $('.content').height();

      var button = '<button class="btn btn-small btn-lg" data-toggle="modal"' +
          'data-target="#myModal">' + 'Embed' + ' </button>';
      var popup = [
        '<div class="modal fade" id="myModal" tabindex="-1"',
        'role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">',
        '<div class="modal-dialog">',
        '<div class="modal-content">',
        '<div class="modal-header">',
        '<button type="button" class="close"',
        'data-dismiss="modal" aria-hidden="true">&times;</button> ',
        '<h4 class="modal-title" id="myModalLabel">Embed code</h4>',
        '<div class="modal-body"> <textarea style="width:95%" rows="3">',
        '<iframe width="',
        width,
        '" height="',
        height,
        '" src="',
        url,
        '"></iframe></textarea></div></div></div></div></div>'
      ].join('');

      $('.facet-embed').append(button + popup);

    }
  }

  function display_results() {
    $('.eea-tile').remove();
    var data = $.fn.facetview.options.data;
    var prependto = $('.facetview_metadata');
    var pagers = prependto.length;
    if (prependto.length == 2) {
      prependto = $(prependto[1]);
    }
    for (var i = 0; i < data.records.length; i++) {
      var element = data.records[i];
      var title = element['http://purl.org/dc/terms/title'];
      var url = element['http://www.w3.org/1999/02/22-rdf-syntax-ns#about'];
      var date = element['http://purl.org/dc/terms/issued'];
      var types = element['http://www.w3.org/1999/02/22-rdf-syntax-ns#type'];
      if (!(types instanceof Array)) {
         types = [types];
      }
      var topics = element['http://www.eea.europa.eu/portal_types#topic'];
      if (!(topics instanceof Array)) {
         topics = [topics];
      }
      if (date === undefined) {
        date = element['http://purl.org/dc/terms/modified'];
        if (date === undefined) {
          date = element['http://purl.org/dc/terms/created'];
          if (date === undefined) {
             date = '';
          }
        }
      }
      date = $.datepicker.formatDate('dd M yy', new Date(date));

      var result = $('<div class="eea-tile"></div>');
      var inner = $('<div class="eea-tileInner"></div>');
      var aimg = $('<a href="' + url + '"></a>');
      var atitle = $('<a href="' + url + '"></a>');
      aimg.attr('title', title);
      atitle.attr('title', title);

      var img = $('<img src="' + url + '/image_mini" />');
      var typelabel = $(
        '<span class="eea-tileType">' + types[types.length - 1] + '</span>');
      result.append(inner);
      var titleinfo = $('<span class="eea-titleTile">' + title + '</span>');
      aimg.append(img);
      atitle.append(titleinfo);
      inner.append(aimg);
      inner.append(typelabel);
      inner.append(atitle);
      if (topics[0] !== undefined) {
         inner.append($(
          '<span class="eea-tileTopic">' + topics[0] + '</span>'));
      }
      inner.append($('<span class="eea-tileIssued">' + date + '</span>'));
      prependto.before(result);
    }
  }

  var url = $(location).attr('href');
  var position = url.indexOf('/search/');
  var language = url[position - 3] === '/' ?
      url.substring(position - 2, position) :
      'en';
  var today = getToday();

  var s_url = '';
  var jsoninfo = $.getJSON('config.json', function(data) {
    s_url = data.es.host + data.es.path;
    var facetview_ob = $('.facet-view-simple').facetview({
      search_url: s_url,
      search_index: 'elasticsearch',
      facets: [
        {
          'field': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type',
          'display': 'Product Type',
          'size': '50000',
          'min_size': '10',
          'order': 'term',
          'operator': 'OR',
          'facet_display_options': ['sort', 'checkbox']
        },
        {
          'field': 'http://www.eea.europa.eu/portal_types#topic',
          'display': 'EEA Topic',
          'size': '100',
          'min_size': '10',
          'order': 'term',
          'operator': 'AND',
          'facet_display_options': ['sort', 'checkbox']
        },
        {
          'field': 'http://purl.org/dc/terms/spatial',
          'display': 'Spatial coverage',
          'size': '100',
          'min_size': '10',
          'order': 'term',
          'operator': 'AND',
          'facet_display_options': ['sort', 'checkbox']
        },
        {
          'field' : 'http://www.eea.europa.eu/ontologies.rdf#objectProvides',
          'display' : 'Interface',
          'size' : '100',
          'min_size': '10',
          'order': 'term',
          'operator' : 'AND',
          'facet_display_options': ['sort', 'checkbox']
        }
      ],
      search_sortby: [
        {
          'field': 'http://purl.org/dc/terms/title',
          'display_asc': 'Title a-z',
          'display_desc': 'Title z-a'
        },
        {
          'field': 'http://purl.org/dc/terms/issued',
          'display_asc': 'Oldest',
          'display_desc': 'Newest'
        }
      ],
      sort: [{'http://purl.org/dc/terms/issued': {'order': 'desc'}}
      ],
      default_operator: 'AND',
      default_freetext_fuzzify: '',
      querystr_filtered_chars: ':?',
      no_results_message: 'Your search did not return any results',
      result_display: [],
      add_undefined: true,
      predefined_filters: [
        {'term': {'language': language}},
        {'term': {'http://www.eea.europa.eu/ontologies.rdf#hasWorkflowState':
                    'published'}},
        {'range': {'http://purl.org/dc/terms/issued': {'lte': today}}},
       // {'range': {'http://purl.org/dc/terms/expires': {'gte': today}}},
        {'constant_score': {
          'filter': {
            'or': [
              {'missing': {'field': 'http://purl.org/dc/terms/expires'}},
              {'range': {'http://purl.org/dc/terms/expires': {'gte': today}}}
            ]
          }}
        }
      ],

      hierarchy: appHierarchy,
      pager_on_top: true,
      permanent_filters: true,
      post_search_callback: function() {
        display_results();
        hide_unused_options(blackList, whiteList);
        add_EEA_settings();
        add_iframe();
      },
      linkify: false,
             paging: {
                from: 0,
                size: 20
              }
    });
  });

});
