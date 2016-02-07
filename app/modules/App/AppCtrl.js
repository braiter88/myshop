(function() {
    angular.module('controller.AppCtrl', []).controller('AppCtrl', [
        '$scope',
        '$state',
        'authProvider',
        function($scope, $state, authProvider) {

            $scope.getUserInfo = function()  {
                $scope.Auth = authProvider.get();
            };

            $scope.signOut = function() {
                $scope.Auth = {};
                authProvider.signOut();
                $state.go('home', {reload: true});
            };

            if (authProvider.isAuthorized()) {
                $scope.getUserInfo();
                if ($state.current.data.isPublic) {
                    $state.go('dashboard', {reload: true});
                }
            } else if (!$state.current.data.isPublic){
                $state.go('home', {reload: true});
            }

            $scope.hideModal = function() {
                angular.element('.modal').fadeOut();
            };

            $scope.openModal = function() {
                angular.element('.modal').fadeIn();
            };

            /**
             * @param text
             * @param title
             * @param type {success, error}
             */
            $scope.notice = function(text, type, title) {
                new PNotify({
                    title: title || '',
                    text: text || '',
                    type : type || 'warning'
                });
            };

            $scope.showValidationErrors = function(errors, form) {
                angular.element('#' + form + ' .error-message').remove();
                angular.forEach(errors, function(error, field) {
                    angular.forEach(error, function(message, reason) {
                        var errorObj = angular.element('<span>', {'class': 'error-message'}).html(message);
                        angular.element('#' + form).find('*[name="' + field + '"]').after(errorObj);
                    });
                });
            };

            $scope.hideValidationErrors = function(form) {
                angular.element('#' + form + ' .error-message').remove();
            }
        }
    ]);
})();