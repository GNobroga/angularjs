import app from "../app";
import { ILoadingService } from "../services/loading-service";

app.component('globalLoader', {
    template: `
        <style>
            span {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
            }
        </style>
        
        <span ng-if="$ctrl.loading">
            <md-progress-linear md-mode="indeterminate"></md-progress-linear>
        </span>
    `,
    controller(loadingService: ILoadingService) {
        this.loading = loadingService.isLoading();
    },
});