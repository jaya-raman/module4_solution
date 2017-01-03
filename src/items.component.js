(function() {
  'use strict';

  angular.module('data')
  .component('itemsList', {
    templateUrl: 'src/templates/items.component.html',
    bindings: {
      items: '<'
    }
  });
})();
