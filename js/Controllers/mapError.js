/*var cities = [
              {
                  city : 'India',
                  desc : 'This is the best country in the world!',
                  lat : 23.200000,
                  long : 79.225487
              },
              {
                  city : 'New Delhi',
                  desc : 'The Heart of India!',
                  lat : 28.500000,
                  long : 77.250000
              },
              {
                  city : 'Mumbai',
                  desc : 'Bollywood city!',
                  lat : 19.000000,
                  long : 72.90000
              },
              {
                  city : 'Kolkata',
                  desc : 'Howrah Bridge!',
                  lat : 22.500000,
                  long : 88.400000
              },
              {
                  city : 'Chennai  ',
                  desc : 'Kathipara Bridge!',
                  lat : 13.000000,
                  long : 80.250000
              }
          ];*/

          //Angular App Module and Controller
          /*var branches = ""; */
/*
         var branches = [
  {"city":"Vazhuthacaud - Trivandrum","address":"4th Floor, Artech Magnet, Vazhuthacaud,Trivandrum - 695014",
   "employeeCount":"160","lat":"8.5031","long":"76.96"},
  {"city":"Thejaswini - Technopark","address":"C22, Thejaswini,Technopark,Trivandrum - 695581",
   "employeeCount":"140","lat":"8.5567","long":"76.8821"},
  {"city":"Pattom - Trivandrum","address":"3rd Floor, Leela Towers,Pattom,Trivandrum - 695004",
   "employeeCount":"100","lat":"8.5279844","long":"76.9394392"},
  {"city":"Ganga - PhaseIII","address":"3rd Floor, 7th Floor, Ganga, Phase III Campus, Technopark, Trivandrum - 695583",
   "employeeCount":"250","lat":"8.4973","long":"76.9485"},
  {"city":"Infopark - Cochin","address":"9th Floor, 9-A, Phase 4, Carnival Infopark, Cochin - 682030",
   "employeeCount":"200","lat":"10.01475","long":"76.3632975"},
  {"city":"Infopark - Koratty","address":"Nisagandhi, Infopark,Koratty,Trissur - 680308",
   "employeeCount":"100","lat":"10.2685969","long":"76.3538473"},
  {"city":"Calicut - Kerala","address":"5th Floor, C.M Mathew Brothers Arcade, Calicut - 673005",
   "employeeCount":"200","lat":"11.2764283","long":"75.7721887"},
  {"city":"Perungudi - Chennai","address":"1st Floor, Block A, SP Info City, #40 MGR Salai, Perungudi, Chennai - 600096",
   "employeeCount":"100","lat":"12.9797","long":"80.2419"},
  {"city":"Australia - Sydney","address":"126 Marsden Street, Parramatta, NSW 2150",
   "employeeCount":"150","lat":"-33.8169308","long":"151.0009176"},
  {"city":"Temasek Boulevard","address":"8 Temasek Boulevard,#42-01, Suntec Tower Three, Singapore 038988",
   "employeeCount":"100","lat":"1.2952","long":"103.8595"}
  ];*/
  /*var branches = "";
  var my_url = "../json/branchDetails.json";
$.getJSON(my_url, function(json) {
  branches = branches+JSON.stringify(json);
  console.log("branches: "+branches);
  // here you have the value
});*/
  //  console.log("branches3: "+branches);    
          googleMapApp.controller('MapCtrl',['$scope','$http', function ($scope,$http) {

              var mapOptions = {
                  zoom: 2,
                  center: new google.maps.LatLng(8.5031,76.96),
                  mapTypeId: google.maps.MapTypeId.TERRAIN
              }

              $scope.branches = "";
              $http.get('../json/branchDetails.json').success(function(response) {               
                    $scope.branches =  JSON.stringify(response); 
                     alert("branch:"+$scope.branches);
              });

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
              
             console.log("branches2: "+$scope.branches);
              for (i = 0; i < $scope.branches.length; i++){
                  createMarker($scope.branches[i]);
              }
   /*           angular.forEach($scope.branches, function(branch) {
  createMarker(branch);

});*/

              $scope.openInfoWindow = function(e, selectedMarker){
                  e.preventDefault();
                  google.maps.event.trigger(selectedMarker, 'click');
              }

          }]);