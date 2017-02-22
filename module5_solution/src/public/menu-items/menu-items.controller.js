(function () {
"use strict";

angular.module('public')
.controller('MenuItemsController', MenuItemsController);

MenuItemsController.$inject = ['menuItems',];
function MenuItemsController(menuItems) {
  var $ctrl = this;
  console.log(menuItems);
  $ctrl.menuItems = menuItems;
}

})();
