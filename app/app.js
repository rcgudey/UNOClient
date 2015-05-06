/**
 * Created by gudeyr on 5/5/2015.
 */
var uno = angular.module("uno",["ui.router","uno.services", "uno.controllers" ]);

uno.config(function($stateProvider, $urlRouterProvider ){
    $urlRouterProvider.otherwise("/login");

    $stateProvider.
        state("login",{
            url: "/login",
            templateUrl: "partials/login.html",
            controller: "LoginController"
        }).
        state("game",{
            url: "/game",
            templateUrl: "partials/initGame.html",
            controller: "GameController",
            resolve : {
                userState : function(){
                    return {"canCreate": 0, "inGame":2, banned: 1, }
                }
            }


        });
});

uno.run(function($rootScope, $location, $state){

});

