(function(){
  'use strict';
  angular.module('MenuApp')
  //.controller('MenuAppController',MenuAppController)
  .component('categories', {
    templateUrl: 'template/categories.html',
    controller: categoriesComponentController,
    bindings: {
      items: '<',

    }
  });

categoriesComponentController.$inject=['MenuDataService'];
  function categoriesComponentController(MenuDataService)
  {

    var $ctrl=this;
    $ctrl.menu_items=[];


    $ctrl.$onInit= function(){
      console.log('I am in categoriesComponentController');

      // var promise = MenuDataService.getAllCategories();
      // promise.then(function(response){
      // $ctrl.menu_items=response.data;
      // console.log($ctrl.menu_items);
      // })
      // .catch(function (error) {
      //   console.log('erorr occured');
      // });

  }
};

})();
