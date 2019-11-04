# Cadastro-de-ativiades-de-projetos - BACK


### Tecnologias utilizadas

NodeJS v. 10.15.3;
Mysql;
Postman.


### Guia
1. clone o repositorio
2. Entre na pasta do projeto
3. Instalar as dependencias

```
  npm install
```
```
  npm install nodemon
  ```
  
  
4. Crie um Banco de dados
    - Nome do DB = cap
    - Importa as tabelas no DB, que está na pasta raiz do projeto DB/cap.sql
  
5. Subir a aplicação

```
  nodemon index.js  
```
6. Login

Acesse com:
- email:test@nextem.com.br
- senha:1234

 
 ### Configurações para Postman
 
 1. Listagem de Projeto:  GET:localhost:4000/projeto
 2. Create de Projeto:   POST:localhost:4000/projeto
 3. Detete de Projeto: DELETE:localhost:4000/projeto/1
 4. Update de projeto: PUT:localhost:4000/projeto
 
 
 segue o padrão para demais tabelas
 
 
 
