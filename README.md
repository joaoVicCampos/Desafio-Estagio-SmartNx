# Desafio-Estagio-SmartNx

Após realizar o clone do repositório, siga os passos abaixo para executar os desafios.

## Desafios

Para executar os desafios basta seguir os seguintes passos:

Entrar na pasta dos desafios:

```bash
cd desafios
```

Executar o arquivo desejado:

```bash
node e1.ts
```

Exemplo:

```bash
node e2.ts
```

---

# Desafio principal

Para executar o desafio principal siga os seguintes passos:

Entrar na pasta do projeto:

```bash
cd desafio-principal
```

Instalar as dependências:

```bash
npm install
```

Criar um arquivo `.env` na raiz do projeto e configurar as variáveis de ambiente de acordo com sua máquina:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=desafio-smart
```

Criar o banco de dados MySQL:

```sql
CREATE DATABASE `desafio-smart`;
```

Executar o projeto:

```bash
npm run dev
```

O servidor irá rodar em:

```txt
http://localhost:3000
```

---

# Rotas

## Posts

Criar post:

```http
POST /posts
```

Listar posts:

```http
GET /posts
```

Deletar post:

```http
DELETE /posts/:id
```

---

## Comentários

Adicionar comentário em um post:

```http
POST /posts/:postId/comentarios
```

Deletar comentário de um post:

```http
DELETE /posts/:postId/comentarios/:comentarioId
```