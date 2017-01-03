(function (){
  'use strict';

  angular.module('data')
  .service('MenuDataService', MenuDataService);

  MenuDataService.$inject =['$http','$q','$timeout'];


  function MenuDataService($http, $q, $timeout) {
    var service = this;

    service.getAllCategories = function() {
        return $http({
        method: "GET",
        url: "https://davids-restaurant.herokuapp.com/categories.json"
      })
      .then(function(response) {
        return response.data;
      });
    };

    service.getItemsForCategory = function(categoryShortName) {
      // console.log("In service");
      var itemsUrl = "https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName;
      return $http({
        method: "GET",
        url: itemsUrl
      })
      .then(function(response) {
        // console.log("Returning from service", response.data.menu_items);
        return response.data.menu_items;
      });
    }
  }
})();
