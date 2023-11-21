Comandos para instalação:

1. Dentro da pasta de projects:
npx create-codeceptjs .
npx codecept init

Rodado os comandos acima serão realizados algumas perguntas cujas respostas são
No Typescript
./*_test.js
Playwright
./output
Localization English
http://localhost:3000
Show browser window? Y
Browser: chromium

2. Depois de baixado o projeto:
Entrar dentro da pasta markL/api
npm install 
Caso node desatualizado: nvm use 18.12.1
npm run db:init (ele cria aqui a estrutura de dados sqlight)
npm run dev (aqui ele coloca a api no ar)

Entrar depois na pasta markL/web
npm install 
npm run dev

3. Tive que matar um processo que estava rodando na 8080, usei como base esse site:
https://valchan.com.br/kill-process-running-on-port/

3.1 Lista todos os processos que estão rodando
sudo netstat -tlpn

3.2 Lista todos os processos que estão rodando na porta 8000
sudo netstat -tlpn | grep 8000

3.3 Mata processo que está rodando na porta 8000
sudo kill -9 `sudo lsof -t -i:8080`
sudo kill -9 $(lsof -t -i:8080)

## Módulo 3
#### Aula 1: Meu primeiro teste em CodeceptJS 
Para rodar o teste necessário no terminal de comando inserir
```
npx codeceptjs run
```


#### Aula 3: Scaffold tests

Um recurso interessate de usar é
```
npx codeceptjs gt 
```
(o terminal irá perguntar qual feat será usada para teste)

#### Aula 6; Validando o comportamento esperado
	I.see(taskName, '.task-item') -> inspecionando o elemento exatamente onde está localizado


#### Aula 7: Massa de testes dinâmica com Faker
Importou a biblioteca 
const { faker } = require('@faker-js/faker');


## Módulo 4: Avançando na automação
#### Aula 1: API Helper e Insomnia Rest

1. Baixou o Insomnia para testar as rotas corretamente
2. DELETE > http://localhost:3333/helper/tasks/Fazer compras


#### Aula 6. Testes independentes
POST http://localhost:3333/tasks

{
	"name": "Ler um livro de JS",
	"is_done": false
}

#### Aula 7. Page Objects
```
npx codeceptjs gpo
```

## Módulo 5. Configurações & Boas práticas
#### Aula 2. Executando por tags
```
npx codeceptjs run --grep 'critical' [esse critical é como voce nomeou a tag]
```

### Aula 3. Report em HTML
https://codecept.io/reports/#html
```
npm i mochawesome mocha -D
```

```
npx codeceptjs run --reporter mochawesome
```