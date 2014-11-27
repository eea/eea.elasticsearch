$(function($) {
  if (window.hastemplate === undefined) {
    window.hastemplate = true;
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
