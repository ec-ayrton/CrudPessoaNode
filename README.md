# CrudPessoaNode
Aprendendo o básico de Node com Express
## Tecnologias usadas
- Knex
- Express
- Node v16
- Npm 8.3
- Postgres 12
- body-parser
- Router

### Endpoints
#### Pessoa
- GET - localhost:3000/pessoas
> Retorna todas as pessoas cadastradas. Atributos exibidos são: Id, Nome, Cpf e Email.
- POST - localhost:3000/pessoas
> Cadastra uma pessoa no banco de dados. Deve ser informado apenas os campos : Nome, cpf e Email.<br />
> O Retorno é o id e o nome da pessoa cadastrada.
> - Todos os três campos são obrigatórios.
> - CPF é campo único.
