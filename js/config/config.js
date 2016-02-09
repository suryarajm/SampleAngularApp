/**$$httpProvider and $routeProvider**/
empDynamicApp.config(['$httpProvider','$routeProvider',function($httpProvider,$routeProvider){
       $httpProvider.interceptors.push('timestampMarker');
       
       $routeProvider.when('/Dashboard',{
            templateUrl: 'views/dashboard.html',
            controller: "empEditController"
        }).when('/EmployeeManagement',{
          templateUrl: 'views/employeeEdit.html',
            controller: "empEditController"
        }).when('/googleMap',{
          templateUrl: 'views/map.html',
          controller: "MapCtrl"
        }).when('/',{
            templateUrl: 'views/home.html',
            controller: "empEditController"
        }).otherwise({
             redirectTo: '/'
         });
}]);

/**$anchorScrollProvider**/
anchorapp.config(function ($anchorScrollProvider) {
    $anchorScrollProvider.disableAutoScrolling();
});


/**$animateProvider**/
 animateapp.config(function($animateProvider) {
    $animateProvider.classNameFilter(/ng-animate-enabled/);
  });



 /**Provider Creation**/
 //we can configure a provider!            
providerapp.config(function(helloWorldProvider){
    helloWorldProvider.setName('World');
});