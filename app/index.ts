import { StateProvider, UrlRouterProvider } from "angular-ui-router";
import app from "./app";
import './assets/css/style.css';
import './pages/home/home-controller';
import './components/task-input-component';
import './services/serial-service';
import './services/task-service';
import './directives/form-error-directive';
import './services/loading-service';
import './services/serial-service';

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider: StateProvider, $urlRouterProvider: UrlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'views/pages/home.html',
        params: {
            requiredLogin: true,
        },
        controller: 'HomeController',
        controllerAs: 'vm'
    });
}]);

app.config(['serialServiceProvider', function (serialServiceProvider: any) {
    serialServiceProvider.setLength(2);
}]);