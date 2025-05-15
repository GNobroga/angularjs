import angular from "angular";
import 'angular-ui-router';
import 'angular-material/angular-material';
import 'angular-animate/angular-animate';
import 'angular-aria/angular-aria';
import 'angular-material/angular-material.css';

const app = angular.module('app', ['ui.router', 'ngMaterial', 'ngAnimate', 'ngAria']);

export default app;
