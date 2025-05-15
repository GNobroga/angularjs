import { IQService } from "angular";
import app from "../app";
import { ILoadingService } from "./loading-service";
import { ISerialService } from "./serial-service";

export interface ITask {
    id: string;
    description: string;
};

export interface Pagination {
    page: number;
    size: number;
};

export interface ITaskService {
    save(description: string): Promise<ITask>;
    deleteById(id: string): boolean;
    listAll(pagination?: Pagination): Promise<ITask[]>;
}

const tasks = [] as ITask[];

app.factory('taskService', ['loadingService', 'serialService', '$q', function (loadingService: ILoadingService, serialService: ISerialService, $q: IQService) {

    return {
        listAll(pagination: Pagination = { page: 1, size: 10 }) {
            const { page, size } = pagination;

            return Promise.resolve(tasks);
        },
        save(description: string) {
            const defer = $q.defer();
            loadingService.show();
            if (description?.length != 0) {
                const newTask: ITask = {
                    id: serialService.generate(),
                    description
                };
                tasks.push(newTask);
                setTimeout(() => {
                    defer.resolve(newTask);
                    loadingService.hide();
                }, 500);
            }
            return defer.promise;
        },
        deleteById(id: string) {
            const lastLength = tasks.length;
            const copyTasks = [...tasks];
            tasks.length = 0;
            tasks.push(...copyTasks.filter(task => task.id !== id));
            return lastLength != tasks.length;
        }
    } 
}]);