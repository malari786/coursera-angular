(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  var myInfo=[];

  service.getCategories = function () {

    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };

  service.getMyInfo = function () {
      console.log('getMyInfo');

    return myInfo;
  };


  service.signUp = function (Config,onSignUpComplete) {
  console.log('SignUp');



    console.log(Config);
    //myInfo.push(Config);


    console.log(myInfo);
//https://malari-restaurant.herokuapp.com/menu_items/SHORT-NAME.json

//https://davids-restaurant.herokuapp.com/menu_items/c1.json
    return $http.get(ApiPath + '/menu_items/'+Config.favmenu+'.json').then(function (res) {
      console.log(res.data);
      Config.description=res.data.description;
      Config.image_present=res.data.description;
      Config.short_name=res.data.short_name;
      Config.menuitemname=res.data.name;
      //myInfo.push(Config);
      myInfo[0]=Config;
       onSignUpComplete(res);
    },function(res)
    {
      console.log(res);
      onSignUpComplete(res);
    });


  };

  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.getShortName = function (short_name) {


    return $http.get(ApiPath + '/categories/'+short_name+'.json').then(function (response) {

      return response.data;
    });

  };

}



})();
