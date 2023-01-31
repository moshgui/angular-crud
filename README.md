
# Web App - CRUD Angular 🖥️ 
Pequeno projeto desenvolvido para fins de treinamento. Com escalabilidade, podendo receber novas funcionalidades. Atualmente opera realizando requisições básicas ao banco de dados.


## Tecnologias utilizadas 🚀
- Angular
- [Angular Material](https://material.angular.io/)
- [JSON Server](https://github.com/typicode/json-server)


## Documentação da API 📚

Métodos HTTP que fazem requisições através do Client Angular utilizando a seguinte variável

### baseURL = 'http://localhost:3000/products/';

#### Retorna todos os produtos

```http
  GET /products/
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `products` | `string` | Lista todos os produtos cadastrados no Back-End |

#### Lista um produto específico que está cadastrado no Back-End

```http
  GET /products/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Obrigatório**. O ID do item que você quer |


#### Atualizar um produto

```http
  PUT /products/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Obrigatório**. O ID do item que você quer |


#### Deletar um produto

```http
  DELETE /products/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Obrigatório**. O ID do item que você quer |


## Deploy

Para inicialiar o Back-End com JSON Server

```bash
  npm start
```

Para inicialiar o Front-End com Angular

```bash
  ng serve
```