(function() {
  'use strict';

  angular.module('data')
  .controller('ItemsController', ItemsController);

  ItemsController.$inject = ['items'];

  function ItemsController(items) {
    var Categoryitems = this;

    Categoryitems.items = items;

    console.log("ITEMS:", Categoryitems.items);

  }
})();
