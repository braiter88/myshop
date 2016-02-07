(function() {
    angular.module('directive.selectbox', [])
        .directive('selectbox', ['$timeout', function($timeout) {
            return {
                scope: {
                    selectBoxParams: '&params',
                    data: '=selectboxValues',
                },
                link: function(scope, element, attrs) {
                    angular.element(element).selectbox(scope.selectBoxParams());
                    scope.$watch('data', function(oldValue, newValue) {
                        $timeout(function() {
                            angular.element(element).trigger('refresh');
                        });
                    }, true);
                }
            };
        }]);
})();