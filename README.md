# CRUD-NODE
Repositório usado para o back-end do teste da Secretaria de Estado da Cultura - SECULT.

## O que?
Uma API que pode ser utilizada para gerenciar as operações referentes a controle de estoque.


## Como Utilizar?
Em http://localhost:5000/stock/ podem ser realizadas as seguintes operações:
1. POST, que cria um novo item no stock a partir de um objeto json que segue as especificações abaixo.


2. GET, que retorna todos os itens contidos no stock num array de objetos json.

Alem desses pode se utilizar as seguintes operações em http://localhost:5000/stock/ caso informado a id do item após a barra:


1. PUT, que atualiza o item no stock referenciado pelo id, partir de um objeto json que segue as especificações abaixo.


2. GET, que retorna o item do stock referenciado pelo id num formato de objeto json.

3. DELETE, que apaga o item do stock referenciado pelo id.

## Dicionario de dados
Para realisar operações com os dados do banco é necessario que a informação recebida no corpo da mensagem alem da formatação JSON use as seguintes nomenclaturas :


item_name - Nome do item, recebe uma string.

item_quantity - Quantidade do item no estoque, recebe um numero inteiro.

item_value - Valor do item, recebe um numero real.


## Tecnologia utilizada na API
Node.js, Express, PostgreSQL

## Instruções de Execução do Projeto
1. Instalar o Node.js disponivel no link ao lado <a href='https://nodejs.org/en/'>Download</a>
2. Instalar o banco PostgreSql disponivel no link ao lado <a href='https://nodejs.org/en/'>Download</a>
3. criar um banco a partir do arquivo 'database.sql' [Link para o arquivo](desafio.sql)

4. Editar o arquivo 'db.js' com as informações do banco criado no passo anterior.
5. Executar o comando Node index num prompt de comando dentro do diretorio clonado 