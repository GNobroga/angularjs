import angular from "angular";
import { IAuthService } from "../core/services/auth-service";

angular.module('loginModule').component('loginComponent', {
    templateUrl: 'views/login.html',
    controller(authService: IAuthService) {
    
        this.login = (username: string, password: string) => {
            console.log(username, password);
        }
    }
});

export {};