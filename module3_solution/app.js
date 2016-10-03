(function(){
'use strict';
angular.module('NarrowItDownApp',[])
.controller('NarrowItDownController',NarrowItDownController)
.directive('foundItems',FoundItems)
.service('MenuSearchService',MenuSearchService);




function FoundItems()
{
  var ddo =
  {


    templateUrl : 'founditem.html',

    scope : {
      swcont : '<myList',

    }
  };
  return ddo;
}


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
var swcont= this;
swcont.found  =[];




//swcont.message='hey get lost';
//swcont.message=wsService.message;

// var promise = wsService.getMenuCategories();
// promise.then(function(response){
// swcont.menu_items=response.data;
// console.log(swcont.menu_items);
// })
// .catch(function (error) {
//   console.log('erorr occured');
// });



swcont.removeItem= function (index) {
  swcont.found .splice(index,1)

};




swcont.filterResult = function(criteria){

swcont.found =[];
  var promise = MenuSearchService.getMatchedMenuItems();
  promise.then(function(response){
  swcont.menu_items=response.data.menu_items;
  console.log(criteria);
    for ( var i=0;i<swcont.menu_items.length;i++)
    {

      if(swcont.menu_items[i].description.toLowerCase().indexOf(criteria.toLowerCase())>=0)
      {
        swcont.found.push(swcont.menu_items[i]);
      console.log("Added");
      }
    }

  })
  .catch(function (error) {
    console.log('erorr occured');



  });

};

}

MenuSearchService.inject=['$http'];
function MenuSearchService($http)
{
  var service = this;
  //service.message='hey there';
  var result=[];
  service.getMatchedMenuItems= function()
  {
    var response= $http({

      method : 'GET',
      //url : ('http://davids-restaurant.herokuapp.com/categories.json')
      url : ('http://davids-restaurant.herokuapp.com/menu_items.json')
    }


    );
    return response;
  };

  service.getMenuCategories= function(criteria)
  {

    var response= $http({

      method : 'GET',
      url : ('http://davids-restaurant.herokuapp.com/menu_items.json'),
      // params :{
      //
      //   category : criteria
      //
      // }
    }


    );

    return response;
  };
};

})();
