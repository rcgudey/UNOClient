/**
 * Created by gudeyr on 5/5/2015.
 */
var unoControllers = angular.module("uno.controllers",["uno.services"]);

unoControllers.controller('LoginController', function($scope, LoginService, $location){
    $scope.errorMessage = "";
    //$scope.isErrored = false;
    $scope.joinGame = function(user) {
        console.log("in Join Methods");
        if (user === undefined) {
            console.log("email ID needed to proceed");
            $scope.errorMessage = "Error, Try Again with proper Email ID";
            $scope.isErrored = true;
        }else {
            if(LoginService.isValidUser(user)){
                console.log("can go to game " + user.email);
                $location.path("/game");
            }else{
                console.log("cannot play " + user.email);
                $scope.errorMessage = "Login error, User not allowed for Uno, Contact Developers";
                $scope.isErrored = true;
            }
        }
    }
});
