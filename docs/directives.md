## Directives

Diretivas permitem adicionar comportamento extra a um elemento, semelhante ao Angular 2+.

- **ng-controller:** é usada para associar um controlador a um elemento HTML (geralmente a uma seção específica de sua página). Isso significa que a lógica e os dados definidos no controlador estarão disponíveis para os elementos HTML dentro desse escopo.

```html
    <div ng-controller="appCtrl">
       {{ message }}
    </div>
```


- **ng-app:** é usada para iniciar e definir o módulo da aplicação AngularJS. Ela é a porta de entrada para o framework e é fundamental para informar ao AngularJS onde ele começa a aplicar seu comportamento em uma página HTML.

```html
    <html ng-app="app">

    </html>
```
- **ng-bind:** Diretiva que vincula (faz data binding) o valor de uma variável do controller diretamente a um elemento HTML. Funciona como alternativa à interpolação com {{ }}, sendo útil para evitar o "piscar" de conteúdo antes da renderização (flickering).

- **ng-repeat:** Utilizada para iterar sobre uma lista de itens (como um array ou objeto) e repetir um trecho de HTML para cada item da lista. 

```html
    <div ng-repeat="contact in contacts">
       <span ng-bind="contact.name"></span>
       <span ng-repeat="(key, valye) in contacts">
            {{ key + " - " + value }}
       </span>
    </div>
```

- **ng-model:** Usada para vincular o valor de um campo de entrada de formulário (input) a uma variável no controlador.

```html 
    <div>
        <input type="text" ng-model="name">
        <span>Seu nome é {{ name }}</span>
    </div>
```

**ng-click:** Adiciona evento de click, parecido com o (click) do Angular 2+.

```html
    <div ng-click="onClick($event)">
        Click Here!
    </div>
```


**ng-disabled:** Desabilita um elemento HTML dinamicamente.

```html
    <button ng-disabled="condition">
        Disable
    </button>
```

**ng-options:** Renderiza as opções de um select

```html
    <select ng-model="country" ng-options="option.property for option in options">
        <option value="" selected>Sem opção selecionada</option>
    </select>

    <!-- No exemplo abaixo o option.property1 é o value o property2 é a label do option -->
    <!-- <select ng-model="country" ng-options="option.property1 as option.property2 for option in options">
        <option value="" selected>Sem opção selecionada</option>
    </select> -->


    <!-- Utilizando Group By para Agoupar as options em optgroup -->
    <select ng-model="country" ng-options="option.property1 group by option.property2 for option in options">
        <option value="" selected>Sem opção selecionada</option>
    </select> 

```

**ng-class e ngStyle:** Aplica classes CSS e estilos dinamicamente 


```html
    <button ng-class="{ active: isActive }">
        Disable
    </button>

     <button ng-style="{ 'background-color': backgroundColor }">
        Disable
    </button>
```

**ng-show, ng-hide, ng-if:** Permite exibir um elemento condicionalmente

```html
    <!-- Exibe o elemento, mas não o remove do fluxo -->
    <button ng-show="canShow">
        Show
    </button>

    <!-- Ocultado o elemento, mas não o remove do fluxo -->
    <button ng-hide="canHide">
        Hide
    </button>

    <!-- Trabalha apenas na visibilidade retirando do fluxo do html -->
    <button ng-if="canShow">
        Show 2
    </button>
```

**ng-include:** Permite incluir conteúdo html dinâmicamente.

```html
    <div ng-include="'footer.html'"></div>
```


**ng-required:** 

```html
    <form name="contactForm">
        <input type="text" name="name" ng-required="true">
    </form>

   Is valid {{ contactForm.$invalid}} ?
```

## Create a Directive


### Chapter 1

- **template:** Parecido com template no Angular 2+

- **templateUrl:** Permite especificar um arquivo pra ser o template da diretiva.

- **replace:** Substitui o elemento original pelo template

- **restrict:** Restringe o modo de utilização da diretiva ao atributo, elemento, classe e comentário ou ainda uma combinação deles. Caso não seja definido, o padrão é que a diretiva seja atribuída pelo atributo.


```js
    // A - Atributo
    // E - Elemento
    // C - Classe 
    // M - Comentário
```

```js

    // Diretiva de elementos
    angular.module('myApp', [])
        .directive('minhaDiretiva', function() {
            return {
            restrict: 'AE', // Tipo de uso: E = elemento, A = atributo, C = classe, M = comentário
            template: '<h3>Olá, sou uma diretiva!</h3>'
        };
  });

    // Diretiva de atributos
    angular.module('myApp', [])
        .directive('destaque', function() {
            return {
                tempalate: '<div>{{ name }}</div>',
                restrict: 'E', // A = atributo,
                scope: {
                    name: 'Hello World',
                }
            }
        };
    );


```

Por padrão, uma diretiva compartilha o mesmo scope de onde é utilizada, ou seja, do controller no qual ela está sendo utilizada.

A propriedade `$id` permite identificar o scope.

```html
    <div>{{ $id }}</div>
```

Caso eu defina um scope na diretiva, o padrão será substituído.

```js

    <div my-directive title="hello world">

    </div>

    // view/alert.html
    <div>
        {{ title }}
    </div>

    // Novo scope
    angular.module('myApp', [])
        .directive('myDirective', function() {
            return {
                templateUrl: 'view/alert.html',
                replace: true,
                scope: {
                    topic: '@title' // Isso vincula o atributo passado na diretiva com essa propriedade no scope, ou seja, o valor de topic é o valor do title que foi passado no atributo da diretiva.,
                    title: '@' // Se o atributo de propriedade foram iguais eu posso utilizar esse shorthand, pra ligar os dois.,
                    property: '=attribute' // faz o Two-way-databinding
                }
            }
        };
    );
```

`@` Vincula o valor do a tributo diretamente a uma propriedade do scope da diretiva.

`=` Cria um vínculo bi-direcional entre uma propriedade do scope do template a uma propriedade do scope da diretiva, é o famoso **two-way-databinding**.

- **tansclude:** Permite projetar conteúdo para dentro do template da diretiva, ele usa o scopo externo.

```html
    <!-- Usando a diretiva my-directive  -->
    <div my-directive title="hello world">
        <span>Hello World, I am here!</span>
    </div>


    <!-- Agora dentro da diretiva, isso fará a projeção do conteúdo -->
    <div ng-transclude></div>
```

### Chapter 2

- **link:** Executada depois do template ter sido compilado, podemos utilizá-lo para interagir com a DOM, tratando eventos ou mesmo para definir o comportamento associado com a lógica da diretiva.


- **require:** Permite ter acesso a outra diretiva dentro de uma diretiva.

```js
    angular.module('App', [])
        .directive('myDirective', function() {
            return {
                // scope por padrão é o mesmo do controller caso a diretiva não tenha um scope isolado.
               required: 'ngModel',
               link: function($scope, element, attrs, ctrl) {
                    element.bind('keyup', function () {
                        // ctrl.$setViewValue()
                        // console.log(ctrl.$viewValue)
                        //ctrl.$render() // vai renderizar o nome valor setado no ngModel

                        // ctrl.$parsers.push(function (value) { // Permite adicionar interceptores para manipular o value antes de ir pro scope do ngModel. 
                        //  return value;
                        //})
                    }); 
               }
            }
        };
    );
```


- **controller** O controller em uma diretiva é uma função JavaScript (tipo factory/construtor) que pode expor uma API pública (via this) para ser usada por outras diretivas (via require), ou pela própria diretiva.

```js
    // Diretiva pai
    angular.module('App', [])
        .directive('myFather', function() {
            return {
                // scope por padrão é o mesmo do controller caso a diretiva não tenha um scope isolado.
                controller: function ($scope, $element, $attrs) {
                    this.helloWorld = function() {
                        console.log('oii');
                    };
                }
               
            }
        };
    );


     angular.module('App', [])
        .directive('myFather', function() {
            return {
                // scope por padrão é o mesmo do controller caso a diretiva não tenha um scope isolado.
                require: '^myFather',
                link: function(scope, element, attrs, fatherCtrl) {
                    fatherCtrl.digaOi(); // chama função exposta pelo controller da diretiva pai
                }
            }
        };
    );
```