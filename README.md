# API de Gerenciamento de Usuários

Esta API foi desenvolvida utilizando **Node.js**, **PostgreSQL**, **TypeORM** e **Express**. Ela permite a criação, edição, visualização, exclusão de usuários e busca por ID.

## Funcionalidades

- Criar um usuário
- Editar um usuário
- Visualizar todos os usuários
- Excluir um usuário
- Buscar um usuário por ID

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/en/download/)
- [PostgreSQL](https://www.postgresql.org/download/)
- [Git](https://git-scm.com/)

## Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/VictorRodrigues16/api_simples-cadastro-usuarios.git
```

### 2. Entre no diretório

```bash
cd api_simples-cadastro-usuarios.git
```

### 3. Instale as depencias

```bash
npm install
```

### 4. Configure as variáveis de ambiente.

```bash
TYPE_DATABASE=postgres
HOST_DATABASE=localhost
PORT_DATABASE=5432
USERNAME_DATABASE=seu-usuario
PASSWORD_DATABASE=sua-senha
DATABASE=cadastro_user

NODE_ENV=development
```

### 5. Inicie o Projeto.

```bash
npm run dev
```


