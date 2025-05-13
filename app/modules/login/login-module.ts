import angular from "angular";
import '../core';
import '../shared';
import 'angular-route';

const loginModule = angular.module('loginModule', ['coreModule', 'ngRoute', 'sharedModule']);

export default loginModule;
