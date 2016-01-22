
$(document).ready(function(){
   $(".editform").hide();
});

$(document).on("click", "#addEmployee", function() {
   $(".editform").show();
});


  var empDynamicApp = angular.module('dynamicTableApp',[]);
       empDynamicApp.controller('empEditController',function($scope){
          $scope.employees = [{empId:"101",name:"Jose",position:"Engineer",mobile:"9012345678"},
                              {empId:"102",name:"John",position:"Engineer",mobile:"9210345678"},
                              {empId:"103",name:"Jacob",position:"Tester",mobile:"9301245678"},
                              {empId:"104",name:"James",position:"HR",mobile:"9412305678"},
                              {empId:"105",name:"Jain",position:"HR",mobile:"9512340678"},
                              {empId:"106",name:"Jijo",position:"Tester",mobile:"9210345678"}];
          $scope.addRow = function(){   
  $scope.employees.push({ 'empId':$scope.empId, 'name': $scope.name, 'position':$scope.position, 'mobile':$scope.mobile });
  $scope.empId='';
  $scope.name='';
  $scope.position='';
  $scope.mobile='';
   $(".editform").hide();
 };
});