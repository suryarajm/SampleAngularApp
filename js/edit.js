
$(document).ready(function(){
   $(".editform").hide();
   $("#rowEditform").hide();
});

$(document).on("click", "#addEmployee", function() {
   $(".editform").show();
   $("#rowEditform").hide();
});
$(document).on("click", "#addCancel", function() {
   $(".editform").hide();
});
$(document).on("click", "#editCancel", function() {
   $("#rowEditform").hide();
});
$(document).on("click", "#backToIndex", function() {
   window.location = "index.html"
});


/**-------------Controller for index page-----------------**/
 var empStaticApp = angular.module('staticTableApp',[]);
       empStaticApp.controller('empDataController',function($scope){     
       	  	 $scope.employees = [{empId:"101",name:"Jose",position:"Engineer",mobile:"9012345678"},
                              {empId:"102",name:"John",position:"Engineer",mobile:"9210345678"},
                              {empId:"103",name:"Jacob",position:"Tester",mobile:"9301245678"},
                              {empId:"104",name:"James",position:"HR",mobile:"9412305678"},
                              {empId:"105",name:"Jain",position:"HR",mobile:"9512340678"},
                              {empId:"106",name:"Jijo",position:"Tester",mobile:"9210345678"}];
 });


/**-------------Controller for edit page-----------------**/
  var empDynamicApp = angular.module('dynamicTableApp',[]);
       empDynamicApp.controller('empEditController',function($scope){
          $scope.employees = [{empId:"101",name:"Jose",position:"Engineer",mobile:"9012345678"},
                              {empId:"102",name:"John",position:"Engineer",mobile:"9210345678"},
                              {empId:"103",name:"Jacob",position:"Tester",mobile:"9301245678"},
                              {empId:"104",name:"James",position:"HR",mobile:"9412305678"},
                              {empId:"105",name:"Jain",position:"HR",mobile:"9512340678"},
                              {empId:"106",name:"Jijo",position:"Tester",mobile:"9210345678"}];
          $scope.addRow = function(){   
  $scope.employees.push({ 'empId':$scope.empId, 'name': $scope.name, 'position':$scope.position, 'mobile':$scope.mobile});
  $scope.empId='';
  $scope.name='';
  $scope.position='';
  $scope.mobile='';
   $(".editform").hide();
 };
 $scope.editEmployee = function(employee,$index){
/* 	alert("empId:"+employee.empId+",name:"+employee.name+",position:"+employee.position+",mobile:"+employee.mobile+",index:"+$index);*/
 	$("#rowEditform").show();
 	$(".editform").hide();
 	$scope.empIdedit = employee.empId;
 	$scope.nameedit = employee.name;
 	$scope.positionedit = employee.position;
 	$scope.mobileedit = employee.mobile;
 	$scope.editRowSubmit = function(){
       employee.empId = $scope.empIdedit;
 	   employee.name = $scope.nameedit;
 	   employee.position = $scope.positionedit;
 	   employee.mobile = $scope.mobileedit;
 	   $("#rowEditform").hide();
 	}
 };
});