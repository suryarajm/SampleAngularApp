empDynamicApp.config(['$httpProvider','$routeProvider',function($httpProvider,$routeProvider){
       $httpProvider.interceptors.push('timestampMarker');
       $routeProvider.when('/Dashboard',{
            templateUrl: 'views/dashboard.html'
        }).when('/EmployeeManagement',{
          templateUrl: 'views/employeeEdit.html'
        }).when('/',{
            templateUrl: 'views/home.html'
        }).otherwise({
             redirectTo: '/'
         });
}]);