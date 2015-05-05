/**
 * Created by gudeyr on 5/5/2015.
 */
var services = angular.module("uno.services",[]);

services.factory("LoginService", function($rootScope){
    const usersList = [
        "gopi.perumalla@cdk.com",
        "rakesh.gudey@cdk.com",
        "subramanyasastry.devarakonda@cdk.com",
        "vijay.gummadi@cdk.com"
    ];

    var LoginService = {
        isValidUser : function(user){
            isValid = false, i = 0;
            while(!isValid){
                if(i >= usersList.length) break;
                if(user.email.match(usersList[i])){
                    isValid = true;
                    break;
                }
                i++;
            }
            return isValid;
        }
    }
    return LoginService;

})
