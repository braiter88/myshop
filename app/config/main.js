var CONST = (function () {
    var params = {
        apiUrl: 'http://shop.backend'
    };
    return {
        get: function (param) {
            if (!params[param]) {
                return false;
            }
            return params[param];
        }
    };
})();