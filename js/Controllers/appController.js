 

       empDynamicApp.controller('empEditController', ['$scope', '$http', function($scope,$http){

          $scope.requestTime = 'waiting';

          $http.get('json/employee.json').then(function(response){
              

              var time = response.config.responseTimestamp - response.config.requestTimestamp;
               $scope.requestTime = (time / 1000);              
          });
          $http.get('json/employee.json').success(function(response) {
              $scope.employees =  response.Employees; 
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


         //For google map
         /*var mapOptions = {
                  zoom: 2,
                  center: new google.maps.LatLng(8.5031,76.96),
                  mapTypeId: google.maps.MapTypeId.TERRAIN
              }

         $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

         $scope.markers = [];
              
         var infoWindow = new google.maps.InfoWindow();

         var createMarker = function (info){
                  
                  var marker = new google.maps.Marker({
                      map: $scope.map,
                      position: new google.maps.LatLng(info.lat, info.long),
                      title: info.city
                  });
                  marker.content = '<div class="infoWindowContent">' +info.address +'<br><b>Number of Employess:'+info.employeeCount + '</b></div>';
                  
                  google.maps.event.addListener(marker, 'click', function(){
                      infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
                      infoWindow.open($scope.map, marker);
                  });
                  
                  $scope.markers.push(marker);
                  
              }  
              
             console.log("branches2: "+branches);
              for (i = 0; i < branches.length; i++){
                  createMarker(branches[i]);
              }
   
              $scope.openInfoWindow = function(e, selectedMarker){
                  e.preventDefault();
                  google.maps.event.trigger(selectedMarker, 'click');
              }*/

       
}]);