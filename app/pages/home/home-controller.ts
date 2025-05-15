import angular, { IQService, IScope, ITimeoutService } from "angular";
import { ITaskService } from "../../services/task-service";

angular.module('app').controller('HomeController', ['$scope', '$timeout', '$q', 'taskService', 
    function($scope: IScope, $timeout: ITimeoutService, $q: IQService, taskService: ITaskService) {
     
        this.tasks = [];

        const loadTasks = () => {
            taskService.listAll().then(tasks => {
               this.tasks = tasks;
            });
        }

        loadTasks();
      
        this.addTask = function(description: string) {
            taskService.save(description).then(() => {
                loadTasks();
            });
        };

        this.removeTask = function (id: string) {
            if (taskService.deleteById(id)) {
                loadTasks();
            } 
        }

    
}]);

