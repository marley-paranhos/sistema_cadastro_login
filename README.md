# Sistema de Cadastro e Login

Este repositório contém um sistema simples de cadastro e login, desenvolvido com o objetivo de demonstrar conceitos básicos de desenvolvimento web utilizando Python (Flask), HTML, CSS e MySQL.

---

## Estrutura do Projeto

```
projeto/
├── app.py
├── requirements.txt
├── static/
│   ├── css/
│   │   └── style.css
│   ├── js/
│       └── script.js
├── templates/
│   ├── index.html
│   ├── cadastro.html
│   └── login.html
└── README.md
```

### Arquivos Principais:
- `app.py`: Arquivo principal com o código do back-end.
- `static/`: Diretório para arquivos estáticos, como CSS e JavaScript.
- `templates/`: Diretório para arquivos HTML.

---

## Como Executar o Projeto

### 1. Configuração do Ambiente
1. Certifique-se de que você possui o **Python 3.8** ou superior instalado.
2. Instale o MySQL Server e crie um banco de dados com as tabelas descritas na seção de **Banco de Dados**.

### 2. Instalação
1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```
2. Entre no diretório do projeto:
   ```bash
   cd projeto
   ```
3. Instale as dependências:
   ```bash
   pip install -r requirements.txt
   ```

### 3. Execução do Servidor
Inicie o servidor Flask:
```bash
python app.py
```
O sistema estará disponível em `http://127.0.0.1:5000`.

---

## Banco de Dados

### Estrutura das Tabelas:

#### `users`
| Campo         | Tipo        | Descrição                   |
|---------------|-------------|-------------------------------|
| id            | INT (PK)    | Identificador único.         |
| username      | VARCHAR(50) | Nome de usuário.             |
| password      | VARCHAR(255)| Senha (hash).                |
| email         | VARCHAR(100)| Endereço de e-mail.          |
| telefone      | VARCHAR(15) | Telefone de contato.         |
| created_at    | TIMESTAMP   | Data de criação do cadastro. |

#### `profiles`
| Campo            | Tipo        | Descrição                  |
|------------------|-------------|-----------------------------|
| user_id          | INT (FK)    | Chave estrangeira para `users`. |
| data_nascimento  | DATE        | Data de nascimento.        |
| foto_perfil      | VARCHAR(255)| Caminho para a foto.       |

---

## Tecnologias Utilizadas

- **Python**: Back-end.
- **Flask**: Framework web.
- **HTML/CSS/JS**: Front-end.
- **MySQL**: Banco de dados.

---

## Funcionalidades

1. Cadastro de novos usuários.
2. Login com autenticação de credenciais.
3. Atualização de perfil com data de nascimento e upload de foto.

---

## Contribuições

São bem-vindas melhorias e novas funcionalidades! Para contribuir:
1. Faça um fork deste repositório.
2. Crie uma branch com a sua funcionalidade.
3. Submeta um pull request.

---

## Contato
Em caso de dúvidas ou sugestões, entre em contato pelo e-mail: mpsvideos,marley@gmail.com.
