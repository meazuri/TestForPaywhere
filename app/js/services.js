'use strict';

/* Services */

    var phonecatServices = angular.module('phonecatApp.phonecatServices', []);
     
    phonecatServices.factory('ProductsAPIService',
    function($http){
        var productAPI ={};
        productAPI.getProducts=function(){
            return $http({
                method :'JSONP',
                url:'http://www.tackthis.com/json/products.php?callback=JSON_CALLBACK&fn=featured&page=1&widgetId=3724'
            });
        }
        return productAPI;
    });

angular.module('F1FeederApp.services', []).
  factory('ergastAPIservice', function($http) {

    var ergastAPI = {};

    ergastAPI.getDrivers = function() {
      return $http({
        method: 'JSONP', 
        url: 'http://www.tackthis.com/json/products.php?callback=JSON_CALLBACK&fn=featured&page=1&widgetId=3724'
      });
    }

    return ergastAPI;
  });

angular.module('F1FeederApp', [
  'F1FeederApp.controllers',
  'F1FeederApp.services'
]);