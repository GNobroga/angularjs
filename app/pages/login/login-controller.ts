import { StateService } from "angular-ui-router";
import app from "../../app";

app.controller('LoginController', ['$state', function ($state: StateService) {
    $state.go('home');
}]);