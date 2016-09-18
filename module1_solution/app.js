(function(){
'use strict'
angular.module('LunchCheck',[])
.controller('LunchCheckController',LunchCheckController);
LunchCheckController.$inject = ['$scope','$filter','$window'];
function LunchCheckController($scope,$filter,$window){
  $scope.lunchItems='';
  $scope.message='';
  $scope.upper= function(){
  var upCase= $filter('uppercase');
  $scope.name=upCase($scope.lunchItems);


    };
    $scope.checkIfTooMuch= function(){
      if ($scope.lunchItems=='' || $scope.lunchItems=='undefined') {
        $scope.message='Please Enter Data first';
        //$window.alert('Please Enter Data');

  }
  else {
    var count = $scope.lunchItems.split(',');
    if(count.length<=3){
      $scope.message='Enjoy!'
      //$window.alert(count.length);
    }
    else {
      $scope.message='Too much!'
      //$window.alert('Too much');
    }
  }

};
}

})();
