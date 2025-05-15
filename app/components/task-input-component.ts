import { IScope } from "angular";
import app from "../app";

app.component('taskInput', {
    templateUrl: 'views/components/task-input.html',
    bindings: {
        onAdd: '&',
    },
    controller() {
        this.add = function () {
            if (this.form.$valid) {
                this.onAdd( { description: this.description });
            }
        }
    }
});