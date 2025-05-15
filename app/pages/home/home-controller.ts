import angular, { IQService, IScope, ITimeoutService } from "angular";
import { ITaskService } from "../../services/task-service";

angular.module('app').controller('HomeController', ['$scope', '$timeout', '$q', 'taskService', 
    function($scope: IScope, $timeout: ITimeoutService, $q: IQService, taskService: ITaskService) {
     
        this.greating = "Hello World!";

        this.isLoading = false;

        this.addTask = function(description: string) {
            this.isLoading = true;
            taskService.save(description).then()
        };
}]);

