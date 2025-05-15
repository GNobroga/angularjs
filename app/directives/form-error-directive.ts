import angular, { ICompileService, INgModelController, IScope } from "angular";
import $ from "jquery";
import app from "../app";

const errors: Record<string, string> = {
    'minlength': 'Comprimento inválido',
    'required': "O campo é obrigatório",
}

app.directive('formError', ['$compile', function ($compile: ICompileService) {
    return {
        require: 'ngModel',
        scope: {
            appendTo: '@',
        },
        link(scope: IScope & Record<string, any>, element, attrs, ctrl: INgModelController) {
            let insertElement: JQuery<HTMLElement> | null = null;

            const removeInserted = () => insertElement?.remove();
            
            const insertAfter = (text: string) => {
                insertElement = angular.element(`<p>${text}</p>`).css({
                    color: 'red',
                    fontSize: '13px',
                    backgroundColor: '#eee',
                    padding: '0.4rem',
                    marginTop: '0.2rem',
                });

                if (scope.appendTo) {
                    $('#' + scope.appendTo)
                        .append(insertElement)
                        .fadeIn(400, 'ease-in-out');
                }
            }

            scope.$watch(() => ctrl.$dirty && ctrl.$touched && ctrl.$invalid, (newValue) => {
                removeInserted();
                if (!newValue) return;
                if (ctrl.$valid) return;
                const errorKey = Object.keys(ctrl.$error)[0];
                console.log(errorKey)
                insertAfter(errors[errorKey]);
            });
        }
    };
}])
