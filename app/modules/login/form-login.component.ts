import angular from "angular";

angular.module('loginModule').component('formLogin', {
    template: `
        <form>
            <div ng-transclude></div>
        </form>
    `,
    bindings: {
        title: '@',
    },
    controller() {
        this.name = "Meu";
    },
    controllerAs: 'loginCtrl',
    transclude: true,
});

export {}