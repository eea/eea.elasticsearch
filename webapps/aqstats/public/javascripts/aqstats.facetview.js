function addHeaders(){
    $("#facetview_results").append("<thead>" +
                                        "<tr>" +
                                            "<th>Details</th>"+
                                            "<th>observationVerification</th>"+
                                            "<th>samplingPoint</th>"+
                                            "<th>endPosition</th>"+
                                            "<th>aggregationType</th>"+
                                            "<th>station</th>"+
                                            "<th>sample</th>"+
                                            "<th>datacapturePct</th>"+
                                            "<th>airqualityValue</th>"+
                                            "<th>observationValidity</th>"+
                                            "<th>inspireNamespace</th>"+
                                            "<th>procedure</th>"+
                                            "<th>inserted</th>"+
                                            "<th>beginPosition</th>"+
                                            "<th>pollutant</th>"+
                                        "</tr>"+
                                    "</thead>");
}

function fixQueries(){
    $(".detail_link").each(function(idx, detail_link){
        var href = $(detail_link).attr("href");
        var base = href.split("=")[0];
        var aqstatid = href.split("=")[1];
        $(detail_link)
            .attr("href", base + "=" + encodeURIComponent(aqstatid));
    })
}

function viewReady(){
    addHeaders();
    fixQueries();
}

jQuery(document).ready(function($) {
    $('.facet-view-simple').facetview({
        search_url: 'http://' + es_host + es_path,
        search_index: 'elasticsearch',
        initial_search: false,
        enable_rangeselect: true,
        post_search_callback: viewReady,
        pushstate : false,
        include_id : true,
        id_label : "aqstat_id",
        facets: [
            {'field':field_base + 'observationVerification', 'display': 'Observation Verification', 'size':'50', 'order': 'term'},
            {'field':field_base + 'samplingPoint', 'display': 'Sampling Point', 'size':'50', 'order': 'term'},
            {'field':field_base + 'aggregationType', 'display': 'aggregationType', 'size':'50', 'order': 'term'},
            {'field':field_base + 'station', 'display': 'Station', 'size':'50', 'order': 'term'},
            {'field':field_base + 'sample', 'display': 'Sample', 'size':'50', 'order': 'term'},
            {'field':field_base + 'datacapturePct', 'display': 'datacapturePct', 'size':'50', 'order': 'term'},
            {'field':field_base + 'airqualityValue', 'display': 'airqualityValue', 'size':'50', 'order': 'term'},
            {'field':field_base + 'observationValidity', 'display': 'Observation Validity', 'size':'50', 'order': 'term'},
            {'field':field_base + 'inspireNamespace', 'display': 'Inspire Namespace', 'size':'50', 'order': 'term'},
            {'field':field_base + 'procedure', 'display': 'Procedure', 'size':'50', 'order': 'term'},
            {'field':field_base + 'pollutant', 'display': 'Pollutant', 'size':'50', 'order': 'term'},
        ],


        result_display: [
            [
                {
                    'pre':'<a class="detail_link" href="' + base_path + 'details?aqstatid=',
                    'field': 'aqstat_id',
                    'post': '">Details</a></td>'
                },
                {
                    'pre': '<td>',
                    'field': field_base + "observationVerification",
                    'post': '</td>'
                },
                {
                    'pre': '<td>',
                    'field': field_base + "samplingPoint",
                    'post': '</td>'
                },
                {
                    'pre': '<td>',
                    'field': field_base + "endPosition",
                    'post': '</td>'
                },
                {
                    'pre': '<td>',
                    'field': field_base + "aggregationType",
                    'post': '</td>'
                },
                {
                    'pre': '<td>',
                    'field': field_base + "station",
                    'post': '</td>'
                },
                {
                    'pre': '<td>',
                    'field': field_base + "sample",
                    'post': '</td>'
                },
                {
                    'pre': '<td>',
                    'field': field_base + "datacapturePct",
                    'post': '</td>'
                },
                {
                    'pre': '<td>',
                    'field': field_base + "airqualityValue",
                    'post': '</td>'
                },
                {
                    'pre': '<td>',
                    'field': field_base + "observationValidity",
                    'post': '</td>'
                },
                {
                    'pre': '<td>',
                    'field': field_base + "inspireNamespace",
                    'post': '</td>'
                },
                {
                    'pre': '<td>',
                    'field': field_base + "procedure",
                    'post': '</td>'
                },
                {
                    'pre': '<td>',
                    'field': field_base + "inserted",
                    'post': '</td>'
                },
                {
                    'pre': '<td>',
                    'field': field_base + "beginPosition",
                    'post': '</td>'
                },
                {
                    'pre': '<td>',
                    'field': field_base + "pollutant",
                    'post': '</td>'
                },

            ]
        ],

        paging: {
            from: 0,
            size: 10
        }
    });
    var clean_base = field_base.replace(/\./gi,'_').replace(/\:/gi,'_');

    $('[id="facetview_' + clean_base + 'airqualityValue"]').addClass("facet_range_only");
    $('[id="facetview_' + clean_base + 'datacapturePct"]').addClass("facet_range_only");

    $(".facet_range_only").delegate("a.facetview_filtershow","click", function(event){
        var tmp_facet = $(event.target).closest("table");
        if (tmp_facet.find("a.facetview_filtershow").hasClass("facetview_open")){
            tmp_facet.find("a.facetview_facetrange").click();
        }
        else{
            var facet_title = tmp_facet.find("a.facetview_filtershow").text().trim();
            $('.facetview_rangecontainer').each(function(idx, facetrange){
                var range_title = $(facetrange).children("h3").text().trim();
                if (range_title === facet_title){
                    $(facetrange).find('.facetview_facetrange_remove').click();
                }
            });
        }
    });

    $('#facetview').delegate(".facetview_rangecontainer","click",function(){
        var range_title = $(event.target).closest(".facetview_rangecontainer").children("h3").text().trim();
        $(".facetview_open").each(function(idx, facet){
            var facet_title = $(facet).text().trim();
            if (facet_title === range_title){
                $(facet).removeClass("facetview_open");
                $(facet).children('i').removeClass('icon-minus');
                $(facet).children('i').addClass('icon-plus');

            }
        })
    });
});
