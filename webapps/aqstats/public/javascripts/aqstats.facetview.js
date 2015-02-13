function addHeaders(){
    $("#facetview_results").append("<thead>" +
                                        "<tr>" +
                                            "<th>Details</th>"+
                                            "<th>Namespace</th>"+
                                            "<th>Station</th>"+
                                            "<th>AggregationType</th>"+
                                            "<th>ReportingMetric</th>"+
                                            "<th>Year</th>"+
                                            "<th>Pollutant</th>"+
                                            "<th>AQvalue</th>"+
                                            "<th>DataCapture</th>"+
                                            "<th>ValidityFlag</th>"+
                                            "<th>VerificationFlag</th>"+
                                            "<th>StationType</th>"+
                                            "<th>StationArea</th>"+
                                            "<th>StationLatitude</th>"+
                                            "<th>StationLongitude</th>"+
                                            "<th>AnalyticalTechnique</th>"+
                                            "<th>MeasurementType</th>"+
                                            "<th>InletHeight</th>"+
                                            "<th>KerbDistance</th>"+
                                            "<th>Zone</th>"+
                                            "<th>ZoneLabel</th>"+
                                            "<th>ZoneType</th>"+
                                            "<th>ZoneCountryLabel</th>"+
                                            "<th>SamplingPoint</th>"+
                                            "<th>Sample</th>"+
                                            "<th>Procedure</th>"+
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
        default_sort:{'field':field_base + 'inspireNamespace', order:'asc'},
        facets: [
            {'field':field_base + 'inspireNamespace', 'display': 'Namespace', 'size':'50', 'order': 'term'},
            {'field':field_base + 'beginPosition_year', 'display': 'Year', 'size':'50', 'order': 'term'}, //?
            {'field':field_base + 'pollutant', 'display': 'Pollutant', 'size':'50', 'order': 'term'},
            {'field':field_base + 'aggregationType', 'display': 'AggregationType', 'size':'50', 'order': 'term'},
            {'field':field_base + 'airqualityValue_aqvalue', 'display': 'AQvalue', 'size':'10000000', 'order': 'term'},
            {'field':field_base + 'datacapturePct_datacapture', 'display': 'DataCapture', 'size':'10000000', 'order': 'term'},
            {'field':field_base + 'samplingPoint_stationtype', 'display': 'StationType', 'size':'50', 'order': 'term'},
            {'field':field_base + 'station_stationarea', 'display': 'StationArea', 'size':'50', 'order': 'term'},
            {'field':field_base + 'procedure_analyticaltechnique', 'display': 'AnalyticalTechnique', 'size':'50', 'order': 'term'},
            {'field':field_base + 'samplingPoint_zone', 'display': 'Zone', 'size':'50', 'order': 'term'},
            {'field':field_base + 'samplingPoint_zoneCountryLabel', 'display': 'ZoneCountryLabel', 'size':'50', 'order': 'term'},
        ],


        result_display: [
            [
                {
                    'pre':'<a class="detail_link" href="' + base_path + 'details?aqstatid=',
                    'field': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#about',
                    'post': '">Details</a></td>'
                },
                {
                    'pre': '<td>',
                    'field': field_base + "inspireNamespace",
                    'post': '</td>'
                },
                {
                    'pre': '<td>',
                    'field': field_base + "station",
                    'post': '</td>'
                },
                {
                    'pre': '<td>',
                    'field': field_base + "aggregationType",
                    'post': '</td>'
                },
                {
                    'pre': '<td>',
                    'field': field_base + "aggregationType_reportingmetric",
                    'post': '</td>'
                },
                {
                    'pre': '<td>',
                    'field': field_base + "beginPosition_year",
                    'post': '</td>'
                },
                {
                    'pre': '<td>',
                    'field': field_base + "pollutant",
                    'post': '</td>'
                },
                {
                    'pre': '<td>',
                    'field': field_base + "airqualityValue_aqvalue",
                    'post': '</td>'
                },
                {
                    'pre': '<td>',
                    'field': field_base + "datacapturePct_datacapture",
                    'post': '</td>'
                },
                {
                    'pre': '<td>',
                    'field': field_base + "observationValidity",
                    'post': '</td>'
                },
                {
                    'pre': '<td>',
                    'field': field_base + "observationVerification",
                    'post': '</td>'
                },
                {
                    'pre': '<td>',
                    'field': field_base + "samplingPoint_stationtype",
                    'post': '</td>'
                },
                {
                    'pre': '<td>',
                    'field': field_base + "station_stationarea",
                    'post': '</td>'
                },
                {
                    'pre': '<td>',
                    'field': field_base + "station_lat_stationlatitude",
                    'post': '</td>'
                },
                {
                    'pre': '<td>',
                    'field': field_base + "station_lon_stationlongitude",
                    'post': '</td>'
                },
                {
                    'pre': '<td>',
                    'field': field_base + "procedure_analyticaltechnique",
                    'post': '</td>'
                },
                {
                    'pre': '<td>',
                    'field': field_base + "procedure_measurementtype",
                    'post': '</td>'
                },
                {
                    'pre': '<td>',
                    'field': field_base + "sample_inletHeight",
                    'post': '</td>'
                },
                {
                    'pre': '<td>',
                    'field': field_base + "sample_kerbdistance",
                    'post': '</td>'
                },
                {
                    'pre': '<td>',
                    'field': field_base + "samplingPoint_zone",
                    'post': '</td>'
                },
                {
                    'pre': '<td>',
                    'field': field_base + "samplingPoint_zoneLabel",
                    'post': '</td>'
                },
                {
                    'pre': '<td>',
                    'field': field_base + "samplingPoint_zoneType",
                    'post': '</td>'
                },
                {
                    'pre': '<td>',
                    'field': field_base + "samplingPoint_zoneCountryLabel",
                    'post': '</td>'
                },
                {
                    'pre': '<td>',
                    'field': field_base + "samplingPoint_samplingPoint",
                    'post': '</td>'
                },
                {
                    'pre': '<td>',
                    'field': field_base + "sample_sample",
                    'post': '</td>'
                },
                {
                    'pre': '<td>',
                    'field': field_base + "procedure_procedure",
                    'post': '</td>'
                }

            ]
        ],

        paging: {
            from: 0,
            size: 10
        }
    });
    var clean_base = field_base.replace(/\./gi,'_').replace(/\:/gi,'_');

    $('[id="facetview_' + clean_base + 'airqualityValue_aqvalue"]').addClass("facet_range_only");
    $('[id="facetview_' + clean_base + 'datacapturePct_datacapture"]').addClass("facet_range_only");

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
