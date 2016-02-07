function initStates($stateProvider, $ocLazyLoadProvider) {

    $stateProvider
        .state('index', {
            abstract: true,
            data: {
                css: ['/css/pnotify-custom.css']
            },
            views: {
                layout: {
                    controller: 'AppCtrl',
                    templateUrl: '/app/modules/App/view/index.html',
                    resolve: resolveModule([ 'mainConfig', 'authProvider', 'AppCtrl', 'pnotify', 'selectboxDirective' ])
                }
            }
        })
        .state('inner', {
            abstract: true,
            data: {
                isPublic: false,
                css: ['/css/inner/style-inner.css', '/css/pnotify-custom.css']
            },
            views: {
                layout: {
                    controller: 'AppCtrl',
                    templateUrl: '/app/views/inner/Layouts/index.html',
                    resolve: resolveModule([ 'mainConfig', 'socialLib', 'authProvider', 'AppCtrl', 'pnotify',
                        'momentJs', 'selectboxDirective', 'accordionDirective', 'confirmDirective'  ])
                }
            }
        })
        .state('home', {
            url: '/',
            parent:'index',
            data: {
                isPublic: true
            },
            views: {
                'content': {
                    controller: 'AppCtrl',
                    templateUrl: '/app/views/public/home.html',
                    resolve: resolveModule([ 'UserCtrl', 'authProvider' ])
                }
            }
        })
        .state('userActivation', {
            parent:'index',
            data: {
                isPublic: true
            },
            url: '/user/activate/:hash',
            views: {
                'content': {
                    controller: 'UserCtrl',
                    templateUrl: '/app/views/public/pages/home.html',
                    resolve: resolveModule(['UserCtrl'])
                }
            }
        })
        .state('client-manager', {
            parent:'inner',
            data: {
                isPublic: false
            },
            url: '/client-manage',
            views: {
                content: {
                    controller: 'ClientsCtrl',
                    templateUrl: '/app/modules/Clients/view/client-manager.html',
                    resolve: resolveModule(['ClientsModule', 'checkListModel'])
                }
            }
        })
        .state('dashboard', {
            parent:'inner',
            data: {
                isPublic: false
            },
            url: '/dashboard',
            views: {
                content: {
                    templateUrl: '/app/views/inner/pages/dashboard.html'
                }
            }
        })
        .state('analytics', {
            parent:'inner',
            data: {
                isPublic: false,
                css:[
                    '/app/vendors/bootstrap-daterangepicker/daterangepicker.css',
                    '/app/vendors/bootstrap/dist/css/bootstrap.css'
                ]
            },
            url: '/analytics',
            views: {
                content: {
                    templateUrl: '/app/modules/Analytics/view/analytics.html',
                    controller: 'AnalyticsCtrl',
                    resolve: resolveModule([
                        'clientsProvider', 'analyticsProvider', 'AnalyticsCtrl',
                        'dateRangePickerBootstrap', 'googleChart', 'dateRangePicker'
                    ])
                }
            }
        })
        .state('serp', {
            parent:'inner',
            data: {
                isPublic: false
            },
            url: '/serp',
            views: {
                content: {
                    templateUrl: '/app/modules/Serp/view/serp.html',
                    controller: 'SerpCtrl',
                    resolve: resolveModule([
                        'clientsProvider', 'serpProvider', 'SerpCtrl', 'replace', 'serpTableDirective', 'editSectionDirective'
                    ])
                }
            }
        })
        .state('social', {
            parent:'inner',
            data: {
                isPublic: false
            },
            url: '/social',
            views: {
                content: {
                    templateUrl: '/app/modules/Social/view/social.html',
                    controller: 'socialCtrl',
                    resolve: resolveModule([
                        'clientsProvider', 'socialProvider', 'socialInit', 'SocialCtrl'
                    ])
                }
            }
        })
        .state('reputation', {
            parent:'inner',
            data: {
                isPublic: false
            },
            url: '/reputation',
            views: {
                content: {
                    templateUrl: '/app/modules/Reputation/view/reputation.html',
                    controller: 'ReputationCtrl',
                    resolve: resolveModule([
                        'clientsProvider', 'ReputationCtrl', 'editSectionDirective', 'reputationProvider', 'ratingDirective', 'googleChart', 'reviewModalDirective',
                    ])
                }
            }
        })
        .state('listing', {
            parent:'inner',
            data: {
                isPublic: false
            },
            url: '/listing',
            views: {
                content: {
                    templateUrl: '/app/views/inner/pages/listing.html',
                    controller: 'ReputationCtrl',
                    resolve: resolveModule([
                        'clientsProvider', 'ReputationCtrl', 'editSectionDirective', 'reputationProvider', 'ratingDirective', 'googleChart', 'reviewModalDirective',
                    ])
                }
            }
        })
        .state('webmaster', {
            parent:'inner',
            data: {
                isPublic: false,
                css:[
                    '/app/vendors/bootstrap-daterangepicker/daterangepicker.css',
                    '/app/vendors/bootstrap/dist/css/bootstrap.css'
                ]
            },
            url: '/webmaster',
            views: {
                content: {
                    templateUrl: '/app/modules/Webmaster/view/webmaster.html',
                    controller: 'WebmasterCtrl',
                    resolve: resolveModule([
                        'clientsProvider',
                        'WebmasterCtrl', 'webmasterProvider', 'googleChart'
                    ])
                }
            }
        })
        .state('adwords', {
            parent:'inner',
            data: {
                isPublic: false
            },
            url: '/adwords',
            views: {
                content: {
                    templateUrl: '/app/views/inner/pages/adWords.html'
                }
            }
        })
        .state('pageGenerator', {
            parent:'inner',
            data: {
                isPublic: false
            },
            url: '/pageGenerator',
            views: {
                content: {
                    templateUrl: '/app/views/inner/pages/pageGenerator.html'
                }
            }
        })
        .state('urlAnalysis', {
            parent:'inner',
            data: {
                isPublic: false
            },
            url: '/urlAnalysis',
            views: {
                content: {
                    templateUrl: '/app/views/inner/pages/urlAnalysis.html'
                }
            }
        })
        .state('scheduling', {
            parent:'inner',
            data: {
                isPublic: false
            },
            url: '/scheduling',
            views: {
                content: {
                    templateUrl: '/app/views/inner/pages/scheduling.html'
                }
            }
        })
        .state('settings', {
            parent:'inner',
            data: {
                isPublic: false
            },
            url: '/settings',
            views: {
                content: {
                    templateUrl: '/app/modules/Settings/view/settings.html',
                    controller: 'SettingsCtrl',
                    resolve: resolveModule([
                        'SettingsCtrl', 'settingsProvider', 'adminProvider', 'AdminCtrl', 'checkListModel'
                    ])
                }
            }
        });
    //.state('administration', {
    //    parent:'inner',
    //    data: {
    //        isPublic: false
    //    },
    //    url: '/administration',
    //    views: {
    //        content: {
    //            templateUrl: '/app/views/inner/pages/admin.html'
    //        }
    //    }
    //});
    function resolveModule(moduleName) {
        return {
            loadModules: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load(moduleName);
            }]
        }
    }
}
