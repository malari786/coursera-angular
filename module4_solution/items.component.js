(function(){
  'use strict';
  angular.module('MenuApp')
  //.controller('MenuAppController',MenuAppController)
  .component('items', {
    templateUrl: 'template/items.html',
    controller: itemssComponentController,
    bindings: {
      items: '<',

    }
  });

  function itemssComponentController()
  {

    var $ctrl=this;

    $ctrl.$onInit = function(){
      console.log('hey itemssComponentController');
    };
  }

})();
