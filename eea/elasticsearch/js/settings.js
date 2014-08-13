$(function($) {

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

  if (window.hastemplate === undefined) {
    window.hastemplate = true;
    add_iframe();
    $.get('external_templates/head.html', function(data) {
      $('head').append(data);
    });
    $.get('external_templates/header.html', function(data) {
      $('body').prepend($(data).filter('#header-holder'));
      $('head').append($(data).filter('script'));
    });

    $.get('external_templates/footer.html', function(data) {
      $('.footer').append(data);
    });
  }

});
