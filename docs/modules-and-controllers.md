# Modules and Controllers

## Modules

Um módulo define o contêiner principal para diferentes partes de uma aplicação AngularJS, como controladores, serviços, diretivas, entre outros.

```js
    const app = angular.module('app', []);
```

- `app` é o nome do modulo.
- O segundo argumento `([])` é a lista de dependencias.


## Controllers

Um controller é um função que adiciona comportamento para o escôpo. Ele é usado para expor dados para a View.

```js
    app.controller('MainController', function($scope) {
        $scope.message = "Hello from the controller!";
    });

```

- `MainController` é o nome do controlador.
- `$scope.message` pode ser usado na view com data binding.

```html
    <body ng-app="app" ng-controller="MainController">
        <p>{{ message }}</p>
    </body>
```