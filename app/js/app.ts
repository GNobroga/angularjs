import 'bootstrap/dist/css/bootstrap.css';
import angular, { route } from "angular";
import 'angular-route';
import '../style.css';

angular.module('app', ['ngRoute']) 

angular.module('app').controller('appCtrl', function ($scope) {
    $scope.message = "Hello World!";
});

angular.module('app').config(($routeProvider: route.IRouteProvider) => {
    $routeProvider
        .when('/', {
            redirectTo: '/login'
        })
        .when('/sign-up', {
            templateUrl: 'view/sign-up.html',
        })
        .when('/login', {
            templateUrl: 'view/login.html',
        });
});