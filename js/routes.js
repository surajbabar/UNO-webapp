unoApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/',{
          templateUrl: "html/login.html",
          controller: 'loginController'
         })
        .when('/app',{
          templateUrl: "html/app.html",
          controller: 'appController'
         })
    
}]);
