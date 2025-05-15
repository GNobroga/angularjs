import app from "../app";


export interface ILoadingService {
    hide(): void;
    show(): void;
    isLoading(): boolean;
}

app.factory('loadingService', function () {
    return {
       loading: false,
       hide(){
            this.loading = false;
        },

        show() {
            this.loading = true;
        },
        isLoading() {
            return this.loading;
        }
    };
});