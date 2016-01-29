
function ProviderCtrl($scope, helloWorld, helloWorldFromService) {
    
    $scope.hellos = [
        helloWorld.sayHello(),
        helloWorldFromService.sayHello()];
}