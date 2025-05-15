import { StateProvider, Transition, UrlRouterProvider } from "angular-ui-router";
import app from "./app";
import './assets/css/style.css';
import './components/task-input-component';
import './directives/form-error-directive';
import './pages/home/home-controller';
import './pages/login/login-controller';
import './services/loading-service';
import './services/serial-service';
import './services/task-service';
import './components/global-loader-component';

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider: StateProvider, $urlRouterProvider: UrlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'views/pages/home.html',
        params: {
            requiredLogin: true,
        },
        controller: 'HomeController',
    })
    .state('login', {
        url: '/login',
        templateUrl: 'views/pages/login.html',
        controller: 'LoginController',
    });
}]);

app.config(['serialServiceProvider', function (serialServiceProvider: any) {
    serialServiceProvider.setLength(2);
}]);

app.run(['$transitions', function ($transitions: Transition) {
    $transitions.onBefore({}, function (transition) {
        const params = transition.params();
        const requiredLogin = params?.requiredLogin ?? false;

        if (requiredLogin) {
            return transition.router.stateService.target('login');
        } 

        return true;
    });
}])