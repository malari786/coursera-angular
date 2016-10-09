(function () {
'use strict';

angular.module('MenuApp')
.controller('MainItemsController',MainItemsController);


//MainItemsController.$inject=['MenuDataService'];

MainItemsController.$inject=['items'];

//function MainItemsController(MenuDataService)
function MainItemsController(items)
{
  //var $ctrl=this;
  var MainItems=this;

  MainItems.menu_items=[];
  MainItems.menu_items=items.data.menu_items;


  // MainItems.$onInit= function(){
  //   console.log('I am in MainItemsController')
  //   var promise = MenuDataService.getItemsForCategory('C');
  //   promise.then(function(response){
  //   MainItems.menu_items=response.data.menu_items;
  //   console.log(response.data);
  //   console.log(MainItems.menu_items);
  //   })
  //   .catch(function (error) {
  //     console.log('erorr occured');
  //   });
  //
  // };

};

})();
