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
            template: "<h3> Welcome to Game Page</h3>"
        });
});

uno.run(function($rootScope, $location, $state){

});

