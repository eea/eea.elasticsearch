function addheaders(){
    $("#facetview_results").append("<thead><tr><th>Country</th><th>Sector</th><th>Projection Scenario</th><th>Name</th><th>Type</th><th>GHG</th><th>Status</th><th></th></tr></thead>");
}
jQuery(document).ready(function($) {
    $('.facet-view-simple').facetview({
        search_url: 'http://centaurus.eea.europa.eu/elasticsearch/rdfdata/_search?',
        search_index: 'elasticsearch',
        initial_search: false,
        post_search_callback: addheaders,
        facets: [
            {'field':'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Country_with_EU', 'display': 'Country', 'size':'50', 'order': 'term'},
            {'field':'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Sector_List', 'display': 'Sector'},
            {'field':'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Policy_Type_List', 'display': 'Policy Type'},
            {'field':'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#GHG_affected', 'display': 'GHG Affected'},
            {'field':'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Status', 'display': 'Status'},
            {'field':'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Projections_scenario_in_which_the_PAM_is_included', 'display': 'Scenario'}
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
                    'pre': '<td>',
                    'field': "http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Name_of_PAM",
                    'post': '</td>',
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
                {
                    'pre': '<td><a href="/details?pamid=',
                    'field':'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#PAMID',
                    'post': '">Details</a>',
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
});
