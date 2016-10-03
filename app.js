(function(){
'use strict';
angular.module('myFirstApp',[])
.controller('myFirstController', function($scope){
  $scope.name='lari';
  $scope.sayGreetings= function () {

    return 'Welcome to Angular!';

  };


});

})();
