var field_base = 'http://semantic.eea.europa.eu/project/pam/pam.csv#';


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
                var shouldReplace = false
                var replacedText = jQuery(elem).html()
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
    $("#facetview_results").append("<thead><tr><th>Country</th><th>Link to EU Emissions Trading Scheme (EU ETS)</th><th>Sector</th><th>Name</th><th>Status</th><th>Projection Scenario</th><th>Total GHG savings by 2020 (in kt CO2 equivalent)</th></tr></thead>");
}

function viewReady(){
    replaceNumbers();
    addHeaders();
}

jQuery(document).ready(function($) {
    $('.facet-view-simple').facetview({
        search_url: 'http://centaurus-dev.eea.europa.eu/elasticsearch/pamdata/resources/_search?',
        search_index: 'elasticsearch',
        initial_search: false,
        post_search_callback: viewReady,
        pushstate : false,
        facets: [
            {'field':field_base + 'Country', 'display': 'Country', 'size':'50', 'order': 'term'},
            {'field':field_base + 'Link_to_EU_Emissions_Trading_Scheme_EU_ETS', 'display': 'Link to EU Emissions Trading Scheme (EU ETS)', 'size':'50', 'order': 'term'},
            {'field':field_base + 'Sector_List', 'display': 'Sector', 'size':'50', 'order': 'term'},
            {'field':field_base + 'GHG_affected', 'display': 'GHG Affected', 'size':'50', 'order': 'term'},
            {'field':field_base + 'Status', 'display': 'Status', 'size':'50', 'order': 'term'},
            {'field':field_base + 'Projections_scenario_in_which_the_PAM_is_included', 'display': 'Projection Scenario', 'size':'50', 'order': 'term'},
            {'field':field_base + 'Policy_Type_List', 'display': 'Policy Type', 'size':'50', 'order': 'term'},
            {'field':field_base + 'Related_EU_policies', 'display': 'Related EU Policies', 'size':'50', 'order': 'term'},
            {'field':field_base + 'Implementing_entities_List', 'display': 'Implementing entities', 'size':'50', 'order': 'term'},
        ],


        result_display: [
            [
                {
                    'field': field_base + "Country",
                    'post': '</td>',
                },
                {
                    'pre': '<td>',
                    'field': field_base + "Link_to_EU_Emissions_Trading_Scheme_EU_ETS",
                    'post': '</td>',
                },
                {
                    'pre': '<td>',
                    'field': field_base + "Sector_List",
                    'post': '</td>',
                },
                {
                    'pre': '<td><a href="/pam/details?pamid=',
                    'field':field_base + 'PAMID',
                    'post': '">',
                },

                {
                    'field': field_base + "Name_of_PAM",
                    'post': '</a></td>',
                },
                {
                    'pre': '<td>',
                    'field':field_base + 'Status',
                    'post': '</td>',
                },

                {
                    'pre': '<td>',
                    'field': field_base + "Projections_scenario_in_which_the_PAM_is_included",
                    'post': '</td>',
                },
                {
                    'pre': '<td>',
                    'field':field_base + '2020_total_kt_CO2',
                    'post': '</td>',
                },
            ],
        ],

        paging: {
            from: 0,
            size: 10
        },
/*        predefined_filters: {
            'pamid': {'term':{field_base + 'PAMID':'tra'}}
        }*/
    });
    replaceNumbers(); 
});
