# Be-The-Hero

### Iniciar um projeto no back:
    npm init -y
    npm install express
    criar um index.js na raiz do projeto (responsavel por armazenar a parte principal da aplicação)

### Instalando o nodemon
    npm install nodemon -D (-D é ultilizado para indicar que esta ferramente sera ultilizada apenas como dependencia de desenvolvimento, ou seja, mais tarde ela nao sera necessaria)
    Configurando o nodemon: No package.json substitua a parte do "scripts" com o codigo abaixo:

     "scripts": {
        "start": "nodemon index.js"
       },

     Para executar o servidor com o nodemon instalado digite:
      "npm start"

### Instalando o knex.js
  #### O que é ?
      Um Query Builder, ultilizado para a manipulação do MySQL usando notação JavaScript
      Para instalar o knex:
        npm install knex
  
  #### Precisamos identificar qual banco vamos usar com o knex, nesse caso usaremos Sqlite3.
  #### Para instalar o sqlite execute o comando:
      npm install sqlite3

### Inicializando o knex:
    Digitar o comando npx knex init (comando cria um arquivo que realiza toda a conexão e configuração com o banco de dados)
    npx =  (Executa um pacote externo sem a necessidade de instalar ele de forma global na maquina)

### Usando o knext.js para criar migrations:
    Migrations sao como uma forma de voce deixar as tabelas no banco de uma maneira que os outros devs possam usar apênas um comando         para instalá-las ao invêz de criar as tabelas manualmente. 
    Antes de tudo, vá no arquivo knext.js e logo abaixo de connection adicionar o seguinte codigo: (esse codigo indica que, as               migrations ao serem criadas automaticamente, vao ser criadas dentro dessa pasta.
      migrations: {
          directory: "./src/database/migrations"
        }
        
### Criar uma pasta database em "src"
      Dentro de database criar uma pasta "migrations"
      Para criar a primeira migfration vamos usar o comando: npx knex migrate:make create_ongs

### Para rodar a primeira migration use o comando:
      npx knex migrate:latest

### Para desfazer uma migration ja criada use o comando:
      npx knex migrate:rollback

### Para criarmos um projeto no React usaremos o comando:
      npx create-react-app nomedoprojeto (nomedoprojeto: é um nome opicional que você escolhe para o projeto)

### Bom, quando a estrutura é gerada, temos alguns arquivos que não ultilizaremos entao podemos apaga-los
      Apague os seguintes arquivos:
       REAME-ME.txt
       App.css
       App.test.js
       index.css
       logo.svg
       serviceWorker.js
       setupTests.js

       Remover as importações denecessarias nos outros arquivos !

### Para estartarmos o projeto usamos o comando:
      npm start (dentro da pasta do projeto)

### O que é um componente no React:
      Componente no React são funções que recebem valores como parametro, 
      eles sao chamados de Componentes Funcionais (Stateless Components), 
      resumindo eles apenas renderizam dados, eles não se preocupam em 
      gerenciar estados como o componente de Classe
    
  
### Más não temos apenas componente de Função no React, tambem temos Componentes de Classe
    O que é um componente de Classe:
      Componente de Classe, conhecido como (...) são componentes que 
      gerenciam os estados da aplicação e lidam com o ciclo de vida no React, são muito
      importantes para a manipulçao de dados e gerenciamento de informações.

### Explicar como funciona a renderização de um componente no React:
    Para realizar a renderização de componentes no react nos temos um arquivo chamados
    "index.js", ele usa uma biblioteca chamada "ReactDOM", com ela podemos renderizar todos
    os nossos componentes.
    Para que isso aconteça o comando "create-react-app" cria um arquivo na raiz do projeto
    chamado "App.js", tranformamos ele em um componente e passamos como parametro para o nossos
    "index.js" e pronto, o <App /> será o nosso componente principal.

### O que é JSX:
    O conceito de JSX permite realizar a escrita de códigos javascript e html no mesmo código,
    isso da um controle maior sobre a aplicação e permite você deixa-la mais manipulavel e concisa.

### O que são as props no React:
    Um conceito muito importante, 'props' (Properties) no React são dados que podem ser repassadas
    a algum componente no React para serem ultilizadas em um determinado momento na aplicação.
    Se voce tem por exemplo um componente que renderiza um titulo, mas o titulo é recebido por props, ou seja,
    ele vem de outro componente por exemplo, estamos passando o titulo via 'props' de um componente Pai para um,
    componente filho, 

### O que é um state no React:
    'state' no React sao dados ultilizados por algum componente em algum determinado momento, a diferença dele para
    as 'props' é que o 'state' é privado, ou seja, apênas o componente que o recebe pode controla-lo, não permitindo
    por exemplo manda-lo para outro componente.
