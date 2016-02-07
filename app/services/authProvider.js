(function() {
    angular.module('auth', []).
        factory('authProvider', ['$resource', function ($resource) {
            var Auth = {
                isAuthorized: false,
                getClaimsFromToken: function() {
                    var token = localStorage.token;
                    var user = {};
                    if (typeof token !== 'undefined') {
                        var encoded = token.split('.')[1];
                        user = JSON.parse(urlBase64Decode(encoded));
                    }
                    return user;
                },
                resource: $resource(CONST.get('apiUrl') + '/users/:action/:id' + '.json', {action: '@action', id: '@id'}, {
                    signIn: {
                        method: 'POST',
                            params:  {action: 'login'},
                        transformResponse: function (response) {
                            var data = JSON.parse(response);
                            if (data.token) {
                                localStorage.setItem('token', data.token);
                            }
                            return data;
                        }
                    },
                    signUp: {
                        method: 'POST',
                        params:  {action: 'signUp'},
                        transformResponse: function (response) {
                            return  data = JSON.parse(response);
                        }
                    },
                    activate: {
                        method: 'POST',
                        params:  {action: 'activate'},
                        transformResponse: function (response) {
                            var data = JSON.parse(response).data;
                            if (data.token) {
                                localStorage.setItem('token', data.token);
                            }
                            return data;
                        }
                    },
                    edit: {
                        method: 'POST',
                        params:  {action: 'edit'},
                        transformResponse: function (response) {
                            return JSON.parse(response);
                        }
                    },
                    get: {
                        method: 'GET',
                        params:  {action: 'view'},
                        transformResponse: function (response) {
                            return JSON.parse(response);
                        }
                    },

                })
            };

            return {
                signIn: function (user) {
                    return Auth.resource.signIn(user);
                },
                signOut: function () {
                    localStorage.removeItem("token");
                },
                signUp: function (user) {
                    return Auth.resource.signUp(user);
                },
                activate: function(hash) {
                    return Auth.resource.activate({id: hash});
                },
                get: function () {
                    return Auth.resource.get();
                },
                edit: function (user) {
                    return Auth.resource.edit(user);
                },
                isAuthorized: function () {
                    return !angular.isUndefined(localStorage.token);
                },
                getClaimsFromToken: function() {
                    return Auth.getClaimsFromToken();
                }

            };
        }]);
})();