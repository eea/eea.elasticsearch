function replaceNumbers(){
    var possibleContainers = ['a', 'td', 'th'];
    var chemsMapping = {'CH4':'CH<sub>4</sub>',
                        'CO2':'CO<sub>2</sub>',
                        'N2O':'N<sub>2</sub>O',
                        'SF6':'SF<sub>6</sub>'};
    jQuery.each(possibleContainers, function(idx, container){
        var elems = jQuery(container);
        jQuery.each(elems, function(idx, elem){
            if ((jQuery(elem).children().length === 0) || (container === 'a')){
                var shouldReplace = false;
                var replacedText = jQuery(elem).html();
                jQuery.each(chemsMapping, function(key, value){
                    if (replacedText.indexOf(key) !== -1){
                        replacedText = replacedText.replace(key, value);
                        shouldReplace = true;
                    }
                });
                if (shouldReplace){
                    jQuery(elem).html(replacedText);
                }
            }
        });
    });
}

function addHeaders(){
    $("#facetview_results").append("<thead><tr><th>Country</th><th>Link to EU Emissions Trading Scheme (ETS)</th><th>Targeted sectors</th><th>Name</th><th>Status</th><th>Projection scenario in which the PAM is included</th><th>Total GHG savings by 2020 (in kt CO2 equivalent)</th></tr></thead>");
}

function viewReady(){
    replaceNumbers();
    addHeaders();
}

jQuery(document).ready(function($) {
    $('.facet-view-simple').facetview({
        search_url: 'http://' + es_host + es_path,
        search_index: 'elasticsearch',
        initial_search: false,
        enable_rangeselect: true,
        post_search_callback: viewReady,
        pushstate : false,
        facets: [
            {'field':field_base + 'Country', 'display': 'Country', 'size':'50', 'order': 'term'},
            {'field':field_base + 'Link_to_EU_Emissions_Trading_Scheme_ETS', 'display': 'Link to EU Emissions Trading Scheme (ETS)', 'size':'50', 'order': 'term'},
            {'field':field_base + 'Targeted_sectors', 'display': 'Targeted sectors', 'size':'50', 'order': 'term'},
            {'field':field_base + 'Affected_GHG', 'display': 'Affected GHG', 'size':'50', 'order': 'term'},
            {'field':field_base + 'Status', 'display': 'Status', 'size':'50', 'order': 'term'},
            {'field':field_base + 'Projection_scenario_in_which_the_PAM_is_included', 'display': 'Projection scenario in which the PAM is included', 'size':'50', 'order': 'term'},
            {'field':field_base + 'Type_of_instrument', 'display': 'Type of instrument', 'size':'50', 'order': 'term'},
            {'field':field_base + 'Related_EU_policies', 'display': 'Related EU Policies', 'size':'50', 'order': 'term'},
            {'field':field_base + 'Type_of_implementing_entities', 'display': 'Type of implementing entities', 'size':'50', 'order': 'term'},
            {'field':field_base + '2020_total_kt_CO2', 'display': 'Total GHG savings by 2020 (in kt CO2 equivalent)', 'size':'1600', 'order': 'term'}
        ],


        result_display: [
            [
                {
                    'field': field_base + "Country",
                    'post': '</td>'
                },
                {
                    'pre': '<td>',
                    'field': field_base + "Link_to_EU_Emissions_Trading_Scheme_ETS",
                    'post': '</td>'
                },
                {
                    'pre': '<td>',
                    'field': field_base + "Targeted_sectors",
                    'post': '</td>'
                },
                {
                    'pre': '<td><a href="' + base_path + 'details?pamid=',
                    'field':field_base + 'PAMID',
                    'post': '">'
                },

                {
                    'field': field_base + "Name",
                    'post': '</a></td>'
                },
                {
                    'pre': '<td>',
                    'field':field_base + 'Status',
                    'post': '</td>'
                },

                {
                    'pre': '<td>',
                    'field': field_base + "Projection_scenario_in_which_the_PAM_is_included",
                    'post': '</td>'
                },
                {
                    'pre': '<td>',
                    'field':field_base + '2020_total_kt_CO2',
                    'post': '</td>'
                }
            ]
        ],

        paging: {
            from: 0,
            size: 10
        }
    });
    replaceNumbers(); 
    $('[id="facetview_http_//semantic_eea_europa_eu/project/pam/pam_csv#2020_total_kt_CO2"]').delegate("a.facetview_filtershow","click", function(event){
        if ($('[id="facetview_http_//semantic_eea_europa_eu/project/pam/pam_csv#2020_total_kt_CO2"]').find("a.facetview_filtershow").hasClass("facetview_open")){
            $('[id="facetview_http_//semantic_eea_europa_eu/project/pam/pam_csv#2020_total_kt_CO2"]').find("a.facetview_facetrange").click();
        }
        else{
            $('.facetview_facetrange_remove').click();
        }
    });
});
