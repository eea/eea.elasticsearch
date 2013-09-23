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
    $("#facetview_results").append("<thead><tr><th>Country</th><th>Sector</th><th>Projection Scenario</th><th>Name</th><th>Type</th><th>GHG</th><th>Status</th></tr></thead>");
}

function viewReady(){
    replaceNumbers();
    addHeaders();
}

jQuery(document).ready(function($) {
    $('.facet-view-simple').facetview({
        search_url: 'http://centaurus.eea.europa.eu/elasticsearch/pamdata/resources/_search?',
        search_index: 'elasticsearch',
        initial_search: false,
        post_search_callback: viewReady,
        pushstate : false,
        facets: [
            {'field':'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Country_with_EU', 'display': 'Country', 'size':'50', 'order': 'term'},
            {'field':'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Sector_List', 'display': 'Sector', 'size':'50', 'order': 'term'},
            {'field':'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Policy_Type_List', 'display': 'Policy Type', 'size':'50', 'order': 'term'},
            {'field':'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#GHG_affected', 'display': 'GHG Affected', 'size':'50', 'order': 'term'},
            {'field':'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Status', 'display': 'Status', 'size':'50', 'order': 'term'},
            {'field':'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Projections_scenario_in_which_the_PAM_is_included', 'display': 'Scenario', 'size':'50', 'order': 'term'}
        ],

        result_display: [
            [
                {
                    'field': "http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Country",
                    'post': '</td>',
                },
                {
                    'pre': '<td>',
                    'field': "http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Sector_List",
                    'post': '</td>',

                },

                {
                    'pre': '<td>',
                    'field': "http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Projections_scenario_in_which_the_PAM_is_included",
                    'post': '</td>',
                },

                {
                    'pre': '<td><a href="/pam/details?pamid=',
                    'field':'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#PAMID',
                    'post': '">',
                },

                {
                    'field': "http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Name_of_PAM",
                    'post': '</a></td>',
                },
                {
                    'pre': '<td>',
                    'field':'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Policy_Type_List',
                    'post': '</td>',
                },
                {
                    'pre': '<td>',
                    'field':'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#GHG_affected',
                    'post': '</td>',
                },
                {
                    'pre': '<td>',
                    'field':'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Status',
                    'post': '</td>',
                },
            ],
        ],

        paging: {
            from: 0,
            size: 10
        },
/*        predefined_filters: {
            'pamid': {'term':{'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#PAMID':'tra'}}
        }*/
    });
    replaceNumbers(); 
});
