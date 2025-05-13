# Modules and Controllers

## Modules

Um módulo define o contêiner principal para diferentes partes de uma aplicação AngularJS, como controladores, serviços, diretivas, entre outros.

```js
    const app = angular.module('app', []);
```

- `app` é o nome do modulo.
- O segundo argumento `([])` é a lista de dependencias.


## Run Block

O `run` é executado depois que o módulo foi configurado

Ele é usado para executar lógica de inicialização da aplicação, como:

- Verificações de autenticação

- Registro de eventos globais

- Redirecionamentos

- Inicialização de serviços

`$templateCache` armazena templates HTML já carregados, para que o AngularJS não precise fazer uma nova requisição HTTP para buscá-los novamente.

```js
    angular.module('App').run(function ($templateCache) {
        $templateCache.put("view/accordtion.html", `
            <div>
                Meu template {{ message }}
            </div>
        `);
    });
```
