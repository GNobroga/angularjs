import { StateService } from "angular-ui-router";
import app from "../../app";
import { IFilterService } from "angular";

app.controller('LoginController', ['$state', '$filter', function ($state: StateService, $filter: any) {
   // $state.go('home');
   console.log($filter('toUppercase')('Name'));
}]);