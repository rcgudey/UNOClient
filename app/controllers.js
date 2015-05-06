/**
 * Created by gudeyr on 5/5/2015.
 */
var unoControllers = angular.module("uno.controllers",["uno.services","ngCookies"]);

unoControllers.controller('LoginController', function($scope, LoginService, $location, $cookieStore ){
    $scope.errorMessage = "";
    //$scope.isErrored = false;
    $scope.doLogin = function(user) {
        console.log("in Join Methods");
        if (user === undefined) {
            console.log("email ID needed to proceed");
            $scope.errorMessage = "Error, Try Again with proper Email ID";
            $scope.isErrored = true;
        }else {
            if(LoginService.isValidUser(user)){
                console.log("can go to game " + user.email);
                var now = new Date();
                var time = now.getTime();
                time += 1*30*60*1000;
                now.setTime(time);
                $cookieStore.put("username",user,{'expires': now});
                $location.path("/game");
            }else{
                console.log("cannot play " + user.email);
                $scope.errorMessage = "Login error, User not allowed for Uno, Contact Developers";
                $scope.isErrored = true;
            }
        }
    }
});

unoControllers.controller('GameController', function($scope, userState){
    $scope.startGame = function(){
        if(!userState.canCreate)
        alert("you are already a part of Game, Can't Create/Join Multiple Game");
    }
    $scope.userState = userState;
    $scope.gamelist = [
        {id: "1","startedBy" : "Rakesh", "noOfPlayers": "3"},
        {id: "2","startedBy" : "Gopi", "noOfPlayers": "5"},
        {id: "3","startedBy" : "Vijay", "noOfPlayers": "2"},
        {id: "4","startedBy" : "Sastry", "noOfPlayers": "6"},
    ]
   $scope.joinGame = function(user){

   }
});