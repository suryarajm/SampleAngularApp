
  var branches = "";
  var my_url = "../json/branchDetails.json";
$.getJSON(my_url, function(json) {
  branches = branches+JSON.stringify(json);
  console.log("branches: "+branches);
  // here you have the value
});
    console.log("branches3: "+branches);    
          empDynamicApp.controller('MapCtrl', function ($scope) {

              var mapOptions = {
                  zoom: 2,
                  center: new google.maps.LatLng(8.5031,76.96),
                  mapTypeId: google.maps.MapTypeId.TERRAIN
              }

              /*$http.get('../json/branchDetails.json').success(function(response) {
                alert("response:"+$scope.response);
                    $scope.branches =  response.branches; 
                     alert("branch:"+$scope.branches);
              });*/

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
   /*           angular.forEach($scope.branches, function(branch) {
  createMarker(branch);

});*/

              $scope.openInfoWindow = function(e, selectedMarker){
                  e.preventDefault();
                  google.maps.event.trigger(selectedMarker, 'click');
              }

          });