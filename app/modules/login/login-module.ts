import angular from "angular";
import '../core';
import 'angular-route';

const loginModule = angular.module('loginModule', ['coreModule', 'ngRoute']);

export default loginModule;
