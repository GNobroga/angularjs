import angular, { route } from "angular";
import 'angular-route';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import "./modules/login";
import './modules/shared';

const appModule = angular.module('appModule', ['ngRoute', 'loginModule', 'sharedModule']);

appModule.config(['$routeProvider', function ($routeProvider: route.IRouteProvider) {
    $routeProvider  
        .when('/', {
            redirectTo: '/login',
        })
        .when('/login', {
            templateUrl: 'views/login.html',
        })
        .when('/sign-up', {
            templateUrl: 'views/sign-up.html',
        });
}]);

