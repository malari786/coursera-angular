angular.module('data')
//.controller('MenuDataServiceController',MenuDataServiceController)
.service('MenuDataService',MenuDataService)
.constant('ApiBasePath',"https://davids-restaurant.herokuapp.com");


MenuDataService.$inject=['$http','ApiBasePath'];
function MenuDataService($http,ApiBasePath)
{
var dataService=this;
dataService.getAllCategories = function(){

  var response= $http({

        method : 'GET',
        //url : ('http://davids-restaurant.herokuapp.com/categories.json')
        url : (ApiBasePath +"/categories.json")
      }


      );
      return response;
};
dataService.getItemsForCategory=function(categoryShortName){
  var response= $http({

        method : 'GET',
        url : (ApiBasePath +"/menu_items.json"),
        params :{

          category : categoryShortName

        }
      }


      );
      console.log('I was in getItemsForCategory ');
      return response;
};

}
