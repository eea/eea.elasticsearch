$(function($) {

    var url = $(location).attr('href');
    var position = url.indexOf('embed=');
    var embed = position > 0 ? true: false;

    console.log(embed);

    if (embed) {
        url = url.substring(0, position-1);
        var button = '<button class="btn btn-primary btn-lg" data-toggle="modal"' +
            'data-target="#myModal">' + 'Embed' + ' </button>';
        var popup = '<div class="modal fade" id="myModal" tabindex="-1"' +
            'role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">' +
            '<div class="modal-dialog">' + '<div class="modal-content">' +
            '<div class="modal-header">' + '<button type="button" class="close"' +
            'data-dismiss="modal" aria-hidden="true">&times;</button>' +
            ' <h4 class="modal-title" id="myModalLabel">Embed code</h4>' +
            '<div class="modal-body"> <textarea style="width:95%" rows="3">' +
            '<iframe width="1856" height="814" src="' + url + '"></iframe>' +
            '</textarea></div></div></div></div></div>';

        $('.facet-embed').append(button + popup);

    }

});
