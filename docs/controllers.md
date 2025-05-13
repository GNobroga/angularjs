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