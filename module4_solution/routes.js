(function () {
  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

 $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home',{
    url : '/',
    templateUrl : '/template/home.html'


  })

  .state('categories',{
    url : '/categories',
    templateUrl :'/template/main-categories.template.html',
    controller: 'MainCategoriesController as MCC',
    resolve : {
      items :
      ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('item',{
    url : '/items/{short_name}',
    templateUrl :'/template/main-items.template.html',
    controller : 'MainItemsController as MIC',
    resolve : {
      items : ['$stateParams','MenuDataService', function ($stateParams,MenuDataService) {
        //console.log($stateParams);
        return MenuDataService.getItemsForCategory($stateParams.short_name);

      }

      ]

    }

  });
}

})();
