(function() {
  'use strict';

  angular.module('data')
  .controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['menucategories'];

  function CategoriesController(menucategories) {

    var category = this;
    category.menucategories = menucategories;
    console.log("CATEGORIES", category.menucategories);
   }
})();
