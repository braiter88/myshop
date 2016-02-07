function initModules($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
        modules: [

            /* Modules */
            /*App*/
            {
                name: 'AppCtrl',
                files: ['/app/modules/App/AppCtrl.js' ]
            },

            /*Admin*/
            {
                name: 'AdminCtrl',
                files: ['/app/modules/Admin/AdminCtrl.js']
            },
            {
                name: 'adminProvider',
                files: ['/app/modules/Admin/service/adminProvider.js']
            },

            /*Analytics*/
            {
                name: 'AnalyticsCtrl',
                files: ['/app/modules/Analytics/AnalyticsCtrl.js']
            },
            {
                name: 'analyticsProvider',
                files: ['/app/modules/Analytics/service/analyticsProvider.js']
            },

            /*Clients*/
            {
                name: 'ClientsCtrl',
                files: ['/app/modules/Clients/ClientsCtrl.js']
            },
            {
                name: 'ClientsModule',
                files: ['/app/modules/Clients/service/clientsProvider.js', '/app/modules/Clients/ClientsCtrl.js' ]
            },
            {
                name: 'clientsProvider',
                files: ['/app/modules/Clients/service/clientsProvider.js']
            },

            /*User*/
            {
                name: 'UserCtrl',
                files: ['/app/modules/User/UserCtrl.js']
            },


            /*Reputation*/
            {
                name: 'ReputationCtrl',
                files: ['/app/modules/Reputation/ReputationCtrl.js']
            },
            {
                name: 'reputationProvider',
                files: ['/app/modules/Reputation/service/reputationProvider.js']
            },

            /*Serp*/
            {
                name: 'SerpCtrl',
                files: ['/app/modules/Serp/SerpCtrl.js']
            },
            {
                name: 'serpProvider',
                files: ['/app/modules/Serp/service/serpProvider.js']
            },
            {
                name: 'serpTableDirective',
                files: ['/app/modules/Serp/directive/serpTableDirective.js']
            },

            /*Settings*/
            {
                name: 'SettingsCtrl',
                files: ['/app/modules/Settings/SettingsCtrl.js']
            },
            {
                name: 'settingsProvider',
                files: ['/app/modules/Settings/service/settingsProvider.js']
            },

            /*Social*/
            {
                name: 'SocialCtrl',
                files: ['/app/modules/Social/SocialCtrl.js']
            },
            {
                name: 'socialInit',
                files:['/app/modules/Social/service/socialInitProvider.js']
            },
            {
                name: 'socialProvider',
                files: ['/app/modules/Social/service/socialProvider.js']
            },

            /*Webmaster*/
            {
                name: 'WebmasterCtrl',
                files: ['/app/modules/Webmaster/WebmasterCtrl.js']
            },
            {
                name: 'webmasterProvider',
                files: ['/app/modules/Webmaster/service/webmasterProvider.js']
            },



            /* Services  */

        /**
         * Auth
         */
            {
                name: 'authProvider',
                files: ['/app/services/authProvider.js']
            },


            /* Directives */
            {
                name: 'replace',
                files: ['/app/directives/includeReplaceDirective.js']
            },
            {
                name: 'ratingDirective',
                files: ['/app/directives/rating.js']
            },
            {
                name: 'reviewModalDirective',
                files: ['/app/directives/reviewModalDirective.js']
            },
            {
                name: 'selectboxDirective',
                files: ['/app/directives/selectbox.js', '/js/jquery.selectbox.js' ]
            },
            {
                name: 'checkListModel',
                files: ['/app/vendors/checklist-model/checklist-model.js']
            },
            {
                name: 'Chart',
                files: ['/app/vendors/angular-chart.js/dist/angular-chart.js']
            },
            {
                name: 'confirmDirective',
                files: ['/app/directives/confirmDirective.js', '/app/vendors/pnotify/pnotify.confirm.js' ]
            },
            {
                name: 'accordionDirective',
                files: ['/app/directives/accordion.js']
            },
            {
                name: 'editSectionDirective',
                files: ['/app/directives/editSection.js']
            },
            /* Modules */
            {
                name: 'momentJs',
                files: ['/app/vendors/moment/min/moment.min.js']
            },
            {
                name: 'dateRangePickerBootstrap',
                files: ['/app/vendors/bootstrap-daterangepicker/daterangepicker.js',]
            },
            {
                name: 'dateRangePicker',
                files: [
                    '/app/vendors/angular-daterangepicker/js/angular-daterangepicker.min.js',
                ]
            },

            /*  Libs  */
            {
                name: 'require',
                files: ['/node_modules/requirejs/require.js']
            },
            {
                name: 'mainConfig',
                files: ['/app/config/main.js']
            },
            {
                name: 'socialLib',
                files: ['/app/config/socials.js']
            },
            {
                name: 'socials',
                files: ['http://connect.facebook.net/en_US/all.js', '/js/codebird.js']
            },
            {
                name: 'pnotify',
                files: [ '/app/vendors/pnotify/pnotify.core.js' ]
            },
            {
                name: 'raphaelCharts',
                files: ['/js/raphael-min.js', '/js/g.raphael-min.js', '/js/g.pie.js' ]
            },
            {
                name: 'googleChart',
                files: [ '/app/vendors/angular-google-chart/ng-google-chart.js' ]
            }
        ]
    });
}
