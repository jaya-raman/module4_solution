(function() {
  'use strict';

  angular.module('data')
  .component('categoriesList',{
    templateUrl: 'src/templates/categories.component.html',
    bindings: {
      categories: '<'
    }
  });
})();
