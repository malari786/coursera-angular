(function () {
"use strict";

angular.module('public')
.controller('SignupController',SignupController);



SignupController.$inject = ['MenuService','$http'];
function SignupController(MenuService,$http) {
  console.log('SignupController');
  var reg = this;


 function onSignUpComplete(res)
 {
   console.log(typeof(res.status));
   if(Number(res.status) === 200)
   {
     console.log(res.data);
     reg.completed=true;


   }
  else{
    console.log(res.status);
    //do anything you want here..
    console.log(res);
     reg.completed=false;
   }
 }

  //reg.signUpInf=SignUpInformation;
  reg.submit= function () {

    var config =  {

        'name' : reg.user.username,
        'email' : reg.user.email,
        'phone' : reg.user.phone,
        'favmenu' : reg.user.favmenu

      };

    console.log(config);
    reg.x= MenuService.signUp(config,onSignUpComplete);





  };

}

})();
