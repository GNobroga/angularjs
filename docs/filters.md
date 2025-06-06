# Filters

Filtros são os `pipes` do Angular 2+.

- **uppercase**

```html
    <div> {{ name | uppercase }}</div>
```

- **lowercase**

- **date**

- **currency** 

- **number** 

- **limitTo:** Permite limitar uma coleção ou uma string. 

- **filter:**  Permite filtrar uma coleção


```html
    <div ng-repeat="contact in contacts | filter: property"> {{ name | uppercase }}</div>


    <div ng-repeat="contact in contacts | filter: { nome: property }"> {{ name | uppercase }}</div>
```

- **orderBy** - Permite ordenar uma coleção

```html
    <div ng-repeat="contact in contacts | orderBy: 'nome',true"> {{ name | uppercase }}</div>
```

**Obs:** É possui aplicar os pipes diretamente no controlador injetando o **$filter**, isso é muito mais perfomatico.

```js

    angular.module('App').controller('AppCtrl', function ($scope, $filter, uppercaseFilter) {
        $scope.collection = [
            {
                name: $filter('uppercase')('Gabriel')
            }
        ]
    });
```

## Create a Filter

Transform o resultado de uma expressão, realizando operações como formatação de data, a conversão de moeda e a ordenação de Array.


```js
    angular.module('App').filter('myFilter', function() {
        return function (input, arg2, arg3) {
            return input + "Filtered";
        }
    });
```
