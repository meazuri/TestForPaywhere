

    function FetchCtrl($scope, $http, $templateCache) {
    $scope.method = 'GET';
    $scope.url = 'http://www.tackthis.com/json/products.php?fn=featured&widgetId=3724';
     
    $scope.fetch = function() {
    $scope.code = null;
    $scope.response = null;
     
    $http({method: $scope.method, url: $scope.url, cache: $templateCache}).
    success(function(data, status) {
    $scope.status = status;
    $scope.data = data;
    }).
    error(function(data, status) {
    $scope.data = data || "Request failed";
    $scope.status = status;
    });
    };
     
    $scope.updateModel = function(method, url) {
    $scope.method = method;
    $scope.url = url;
    };
    }

