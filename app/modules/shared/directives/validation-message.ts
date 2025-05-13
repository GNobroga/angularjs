import angular from "angular";

angular.module('sharedModule').directive('validationMessage', function () {
    return {
        restrict: 'E',
        template: `
            <span class="text-danger" ng-bind="fieldName"></span>
        `,
        scope: {
            fieldName: '@field'
        },
        require: 'ngModel',
        controller($scope, $element, $attrs, ctrl) {
            console.log($element);
        },
    };
});