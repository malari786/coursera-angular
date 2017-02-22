(function () {
"use strict";

angular.module('public')
.controller('MyInfoController',MyInfoController);


MyInfoController.$inject = ['myInformation','ApiPath'];
function MyInfoController(myInformation,ApiPath) {
  console.log('MyInfoController');
  var $ctrl = this;
  $ctrl.myInf=myInformation;
  $ctrl.basePath=ApiPath;



}

})();
