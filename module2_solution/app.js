(function(){
  'use strict'
var ShoppingList=['Milk','Donut','Cookie','Chicken','ice Cream','Burger','Coffee'];
var ShoppingCart=
[
  {item : 'Milk',quantity :3},{item : 'Donut' ,quantity :4},{item : 'Cookie' ,quantity :6},{item : 'Chicken' ,quantity :5}
];




angular.module('ShoppingListCheckOff',[])

.controller('ShoppingListcontroller',ShoppingListcontroller)
.controller('ShoppingListServicecontroller',ShoppingListServicecontroller)
.controller('ShoppingListShowcontroller',ShoppingListShowcontroller)
.controller('ToBuyShoppingController',ToBuyShoppingController )
.controller('AlreadyBoughtShoppingController',AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService)


ShoppingListcontroller.$inject=['$scope','$filter'];
ShoppingListServicecontroller.$inject=['ShoppingListCheckOffService'];
ShoppingListShowcontroller.$inject=['ShoppingListCheckOffService'];
ToBuyShoppingController.$inject=['ShoppingListCheckOffService'];
AlreadyBoughtShoppingController.$inject=['ShoppingListCheckOffService'];


function ShoppingListcontroller($scope,$filter){
  $scope.ShoppingList=ShoppingList;
  $scope.ShoppingCart=ShoppingCart;
  $scope.message = function(){
    var msg= 'Hello Mr Mohammad Ahmad lari';
    var output= $filter('uppercase')(msg)
    return output;
  };

  $scope.AddToList = function () {

  var newItem = {

    item : $scope.newItemName ,
    quantity : $scope.newItemQuantity
  };

  $scope.ShoppingCart.push(newItem);

  };

};

function ToBuyShoppingController(ShoppingListCheckOffService) {

var showBuyList=this;

showBuyList.items=ShoppingListCheckOffService.getBuyinglist();

  showBuyList.buyItem= function(itemIndex){
  ShoppingListCheckOffService.buyItem(itemIndex);
};

};

function AlreadyBoughtShoppingController(ShoppingListCheckOffService){
  var ShowBoughtList = this;
  ShowBoughtList.items=ShoppingListCheckOffService.getBoughtItems();

};

function ShoppingListServicecontroller(ShoppingListCheckOffService) {
  var itemAdder=this;
   itemAdder.itemName='';
   itemAdder.quantity='';
   itemAdder.addItem = function(){

     ShoppingListCheckOffService.addItem(itemAdder.itemName,itemAdder.quantity);

   };


};

function ShoppingListShowcontroller(ShoppingListCheckOffService) {

var showList=this;
showList.items=ShoppingListCheckOffService.getItems();

showList.removeItem=function (itemIndex) {
  ShoppingListCheckOffService.removeItem(itemIndex);
};


};

function ShoppingListCheckOffService()
{
  var service = this;

  var items=[];
  service.addItem= function (itemName,quantity) {
    var item ={
      name : itemName,
      quantity : quantity

    };
    items.push(item);

  };

  service.removeItem=function(itemIndex){
    items.splice(itemIndex,1);
  };

  service.getItems = function () {

    return items;

  };

  var ListToBuy=
  [
    {name : 'Milk(s)',quantity :1},
    {name : 'Donut(s)',quantity :2},
    {name : 'Cookie(s)',quantity :3},
    {name : 'Jam(s)',quantity :2},
    {name : 'Chicken(s)',quantity :1},
    {name : 'Ice Cream(s)',quantity :4},
    {name : 'Burger(s)',quantity :2},
    {name : 'Coffee(s)',quantity :1}
  ];

  var boughtList=[

    // {name : 'Milk(s)',quantity :1},
    // {name : 'Donut(s)',quantity :2},
    // {name : 'Cookie(s)',quantity :3},
    // {name : 'Jam(s)',quantity :2}

  ];

  service.getBuyinglist = function () {

    return ListToBuy;
  };

  service.buyItem = function (ItemIndex) {
   boughtList.push(ListToBuy[ItemIndex]);
  // console.log(boughtList);
  ListToBuy.splice(ItemIndex,1);

  };

  service.getBoughtItems = function () {

  return boughtList;

  };
};

})();
