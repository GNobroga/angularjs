## Directives

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