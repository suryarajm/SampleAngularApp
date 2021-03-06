/**-------------Controller for edit page-----------------**/
  var empDynamicApp = angular.module('dynamicTableApp',[]);

//$httpprovider Example
empDynamicApp.factory('timestampMarker', [function() {
        var timestampMarker = {
            request: function(config) {
                config.requestTimestamp = new Date().getTime();
                return config;
            },
            response: function(response) {
                response.config.responseTimestamp = new Date().getTime();
                return response;
            }
        };
        return timestampMarker;
    }]);

    empDynamicApp.config(['$httpProvider', function($httpProvider) {
        $httpProvider.interceptors.push('timestampMarker'); 
    }]);



       empDynamicApp.controller('empEditController', ['$scope', '$http', function($scope,$http){

          $scope.requestTime = '0.3';

          $http.get('../json/employee.json').success(function(response){
             $scope.employees =  response.Employees;  

              var time = response.config.responseTimestamp - response.config.requestTimestamp;
               $scope.requestTime = (time / 1000);              
          });          
          
          $scope.loadStyling = function(){
            $scope.tableDivclass = "inCenter";
            $scope.addEmployeeclass = "addEmployeeWithoutForm";
            $scope.addFormShow = "false";
            $scope.editFormShow = "false";            
          };
          $scope.addStyling = function(){
              $scope.tableDivclass = "inLeft";
              $scope.addEmployeeclass = "addEmployeeWithForm";
              $scope.addFormShow = "true";
              $scope.editFormShow = "false";
              $(".editform").show();
              $("#rowEditform").hide();
          };

          $scope.addCancelling = function(){
            $scope.tableDivclass = "inCenter";
            $scope.addEmployeeclass = "addEmployeeWithoutForm";
            $scope.addFormShow = "false";
            $("#rowEditform").hide();
            $(".editform").hide();
          };
          $scope.editCancelling = function(){
            $scope.tableDivclass = "inCenter";
            $scope.addEmployeeclass = "addEmployeeWithoutForm";
            $scope.editFormShow = "false";
            $("#rowEditform").hide();
              $(".editform").hide();
          };
          $scope.addRow = function(){   
            if($scope.addForm.$valid){
              $scope.employees.push({ 'empId':$scope.empId, 'name': $scope.name, 'position':$scope.position, 'mobile':$scope.mobile});
              $scope.empId=' ';
              $scope.name=' ';
              $scope.position=' ';
              $scope.mobile=' ';
              $(".editform").hide();
              $scope.addFormShow = "false";
              $scope.tableDivclass = "inCenter";
              $scope.addEmployeeclass = "addEmployeeWithoutForm";
            }
            else{
              alert("Please fill all input fields");
            }
              
          };

         $scope.editEmployee = function(employee,$index){ 
              $scope.tableDivclass = "inLeft";
              $scope.addEmployeeclass = "addEmployeeWithForm";
              $scope.editFormShow = "true"; 
              $scope.addFormShow = "false";      
             	$("#rowEditform").show();
             	$(".editform").hide();
             	$scope.empIdedit = employee.empId;
             	$scope.nameedit = employee.name;
             	$scope.positionedit = employee.position;
             	$scope.mobileedit = employee.mobile;
             	$scope.editRowSubmit = function(){
                if($scope.rowEditForm.$valid){
                   employee.empId = $scope.empIdedit;
                   employee.name = $scope.nameedit;
                   employee.position = $scope.positionedit;
                   employee.mobile = $scope.mobileedit;
                   $("#rowEditform").hide();
                   $scope.tableDivclass = "inCenter";
                   $scope.addEmployeeclass = "addEmployeeWithoutForm";
                }
                else{
                   alert("Please fill all input fields");                 
             	     }
                }
         };
}]);