# Services

- **$http** - Semelhante ao http client do Angular 2+,
    `get, post, put, delete, head e jsonp`.

```js
    angular.module('App').controller('AppCtrl', function ($scope, $http) {

        const loadData = function() {
            $http.get('url').success(function(data, status) {
                $scope.contacts = data;
            }); 
        }

    });
```


## Create a Service

- **factory**: Permite criar serviços através de uma fábrica de objetos (retornando um objeto com métodos e propriedades).

```js
    angular.module('App').factory('myService', function () {
        return {
            getData() {
                return ['Ok']
            }
        }
    });
```

- **service**: Permite criar serviços usando uma função construtora (usando this para definir os métodos e propriedades).


```js
    angular.module('App').service('myService', function () {
       this.getData = function() {
        return ['oi'];
       }
    });
```

- **provider**: Permite criar serviços configuráveis durante a fase de configuração da aplicação, usando um método $get() que retorna o serviço final.


```js
    angular.module('App').service('myServiceProvider', function () {
      let prefix = 'Default';

      this.setPrefix = function(prefix) {
        this.prefix = prefix;
      };

      this.$get = function() {
        return {
            getFullPrefix: () => {
                return this.prefix + ' Gabriel';
            }
        }
      }
    });

    // Configurando o service do tipo provider
    angular.module('App').config(function (myServiceProvider) {
        myServiceProvider.setPrefix("Hello World");
    });
```


Para fazer a injeção desse service, basta adicionar o nome dele no parâmetro do **controller**.

## Config Services (Values e Constant)

### Value

Um método para registrar um valor simples (como número, string, objeto, array, etc.) que pode ser injetado em controllers, services, directives, etc. Armazenar configurações, constantes de ambiente ou qualquer dado que você queira compartilhar pelo app.

```js
    angular.module('App').value('apiConfig', {
        baseUrl: 'http://localhost:8080',
    });
```


### Constant

A diferença do service do tipo `value` e `constant` é que o **constant** pode ser injetado em serviços do tipo provider.

```js
    angular.module('App').constant('apiConfig', {
        baseUrl: 'http://localhost:8080',
    });
```
