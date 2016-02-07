(function() {
    angular.module('controller.UserCtrl', []).controller('UserCtrl', [
        '$scope',
        '$state',
        'authProvider',
        function($scope, $state, authProvider) {

            $scope.signUp = function(user) {
                authProvider.signUp(user).$promise.then(function(response) {
                    $scope.hideValidationErrors('signUp');
                    $scope.user = {};
                    $scope.notice(response.message);
                }, function(reason) {
                    $scope.showValidationErrors(reason.data.errors, 'signUp');
                });
            };

            $scope.signIn = function(user) {
                authProvider.signIn(user).$promise.then(function(response) {
                    $scope.getUserInfo();
                    $state.go('dashboard', {reload: true});
                }, function(reason) {
                    $scope.notice('Wrong credentials', 'error');
                });
            };

            $scope.activate = function(hash) {
                authProvider.activate(hash).$promise.then(function(response) {
                    $state.go('dashboard', {reload: true});
                    $scope.notice('Activated successfully');
                }, function(reason) {
                    $scope.notice('Hash not correct', 'error');
                });
            };

            if ($state.params.hash) {
                $scope.activate($state.params.hash);
            }
        }
    ]);
})();