//$httpprovider Example
empDynamicApp.factory('timestampMarker', [function() {
        var timestampMarker = {
            request: function(config) {
                config.requestTimestamp = new Date().getTime();
                return config;
            },
            response: function(response) {
                response.config.responseTimestamp = new Date().getTime();
               response.Employees = response.Employees;
                return response;
            }
        };
        return timestampMarker;
    }]);



