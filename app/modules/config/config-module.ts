import angular from "angular";

const configModule = angular.module('configModule', []);

export interface IAppConfig {
 apiBaseUrl: string;
};

configModule.value('appConfig', {
    apiBaseUrl: 'https://jsonplaceholder.typicode.com/todos',
});

export default configModule;