import 'bootstrap/dist/css/bootstrap.css';
import angular from "angular";

angular.module('app', []);

angular.module('app').controller('appCtrl', $scope => {
    $scope.message = 'Hello World';
});