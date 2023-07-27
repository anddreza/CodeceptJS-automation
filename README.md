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
# Lista todos os processos que estão rodando
sudo netstat -tlpn
# Lista todos os processos que estão rodando na porta 8000
sudo netstat -tlpn | grep 8000
# Mata processo que está rodando na porta 8000
sudo kill -9 `sudo lsof -t -i:8000`
sudo kill -9 $(lsof -t -i:8000)