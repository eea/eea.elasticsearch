$(function($) {

  var blackList = {
    'http://www.w3.org/1999/02/22-rdf-syntax-ns#type' : []};

  var whiteList = false;
  var appHierarchy = {
    'http://www.w3.org/1999/02/22-rdf-syntax-ns#type' :
      [{
        'News and Announcements' : [
                'Highlight', 'Press Release', 'Event', 'Promotion'
        ],
        'Articles and Summaries' : ['Article', 'Eco-Tip'],
        'Audiovisuals': ['Image', 'Video'],
        'Publications' : ['Report'],
        'Data and Indicators' :
          ['Data',
            {'Data Visualisations': ['Data Visualisation'],
              'Indicators' : [
                'Indicator Specification',
                'Indicator factsheet',
                'Indicator assessment']}],
          'Generic' : ['Page', 'Link', 'Data File'],
          'Assessment part' : [],
          'Dataset' : [],
          'Distribution' : [],
          'EEA Job Vacancy' : [],
          'Epub File' : [],
          'External Data Reference' : [],
          'Eyewitness story' : [],
          'Figure File' : [],
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
          'http://purl.org/dc/terms/spatial' : []
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

  function display_results() {
    $('.eea-tile').remove();
    var data = $.fn.facetview.options.data;
    var prependto = $('.facetview_metadata');
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
          'operator': 'OR'
        },
        {
          'field': 'http://www.eea.europa.eu/portal_types#topic',
          'display': 'EEA Topic',
          'size': '100',
          'min_size': '10',
          'order': 'term',
          'operator': 'AND'
        },
        {
          'field': 'http://purl.org/dc/terms/spatial',
          'display': 'Spatial coverage',
          'size': '100',
          'min_size': '10',
          'order': 'count',
          'operator': 'AND'
        }
      ],
      search_sortby: [
        {
          'field': 'http://purl.org/dc/terms/title',
          'display': 'Title'
        },
        {
          'field': 'http://purl.org/dc/terms/issued',
          'display': 'Publishing date'
        }
      ],
      sort: [{'http://purl.org/dc/terms/issued': {'order': 'desc'}}
      ],
      result_display: [],
      add_undefined: true,
      predefined_filters: [
        {'term': {'language': language}},
        {'range': {'http://purl.org/dc/terms/issued': {'lte': today}}},
       // {'range': {'http://purl.org/dc/terms/expires': {'gte': today}}},
        {'constant_score': {
          'filter': {
            'or': [
              {'missing': {'field': 'http://purl.org/dc/terms/expires'}},
              {'range': {'http://purl.org/dc/terms/expires': {'gte': today}}}
            ]
          }}
        },
        {'constant_score': {
          'filter': {
            'or': [
              {'term': {
                'http://www.eea.europa.eu/ontologies.rdf#hasWorkflowState':
                  'published'}
              },
              {'missing': {'field':
                'http://www.eea.europa.eu/ontologies.rdf#hasWorkflowState'}}
            ]
          }
        }}
      ],

      hierarchy: appHierarchy,
      permanent_filters: true,
      post_search_callback: function() {
        display_results();
        window.hide_unused_options(blackList, whiteList);
        window.add_iframe();
      },
      linkify: false,
             paging: {
                from: 0,
                size: 20
              }
    });
  });

});
