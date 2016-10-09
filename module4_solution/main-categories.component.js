(function () {
'use strict';

angular.module('MenuApp')
.controller('MainCategoriesController',MainCategoriesController);

//MainCategoriesController.$inject=['MenuDataService'];
MainCategoriesController.$inject=['items'];
//function MainCategoriesController(MenuDataService)
function MainCategoriesController(items)
{

  //var $ctrl=this;


  var MainCategories=this;

  MainCategories.menu_items=[];

  MainCategories.menu_items=items.data;



  // MainCategories.$onInit= function(){
  //   console.log('I am in MainCategoriesController')
  //   var promise = MenuDataService.getAllCategories();
  //   promise.then(function(response){
  //   MainCategories.menu_items=response.data;
  //   console.log(MainCategories.menu_items);
  //   })
  //   .catch(function (error) {
  //     console.log('erorr occured');
  //   });
  //
  // }

  };

})();
