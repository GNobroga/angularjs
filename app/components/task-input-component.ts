import { IScope } from "angular";
import app from "../app";

app.component('taskInput', {
    templateUrl: 'views/components/task-input.html',
    bindings: {
        onAdd: '&',
    },
    controller($scope: IScope & Record<string, any>) {
        this.add = function () {
            if ($scope.form.$valid) {
                this.onAdd( { description: $scope.description });
            }
        }
    }
});