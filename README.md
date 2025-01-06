# Sistema de Cadastro e Login

Este projeto é um sistema de cadastro e login desenvolvido utilizando **Node.js** e **MySQL**. Ele inclui funcionalidades como autenticação de usuários, gerenciamento de sessões e uma interface simples para interagir com as funcionalidades principais do sistema.

## Tecnologias Utilizadas

### Back-end
- **Node.js**: Framework para construir aplicações JavaScript no lado do servidor.
- **Express.js**: Framework para simplificar a criação de rotas e middleware.
- **MySQL**: Banco de dados relacional para armazenar as informações de usuários.
- **bcrypt.js**: Biblioteca para criptografia de senhas.
- **dotenv**: Para gerenciamento de variáveis de ambiente.
- **express-session**: Para gerenciamento de sessões de usuários.

### Front-end
- **HTML5**: Para a estruturação das páginas web.
- **CSS3**: Para estilização e design das páginas.
- **JavaScript**: Para adicionar interatividade e validações no lado do cliente.

## Funcionalidades do Sistema

1. **Cadastro de Usuários**:
   - Permite criar novos usuários com os seguintes dados: nome de usuário, e-mail, telefone e senha.
   - As senhas são armazenadas de forma segura com criptografia usando bcrypt.

2. **Login de Usuários**:
   - Permite que usuários registrados façam login utilizando nome de usuário e senha.
   - Verifica a autenticidade das credenciais com validações seguras no servidor.

3. **Gerenciamento de Sessões**:
   - Usuários autenticados têm sessões gerenciadas para acesso contínuo ao sistema.
   - Logout para encerrar sessões ativas.

4. **Portfólio**:
   - Após o login, o usuário é redirecionado para uma página de portfólio.

5. **Download de Currículo**:
   - Disponibiliza o currículo do desenvolvedor para download.

6. **Página Sobre**:
   - Fornece informações gerais sobre o sistema.

## Como Executar o Projeto

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Configure o arquivo `.env`** com as seguintes variáveis:
   ```env
   DB_HOST=localhost
   DB_USER=seu_usuario
   DB_PASSWORD=sua_senha
   DB_NAME=seu_banco_de_dados
   DB_PORT=3306
   ```

4. **Inicie o servidor**:
   ```bash
   npm start
   ```

5. **Acesse o sistema**:
   Abra o navegador e vá para [http://localhost:3000](http://localhost:3000).

## Habilidades Demonstradas

- Criação de rotas no Express.js.
- Uso de middleware para manipulação de dados do formulário.
- Conexão com banco de dados MySQL e execução de queries.
- Implementação de autenticação segura com bcrypt.
- Gerenciamento de sessões com express-session.
- Configuração e uso de variáveis de ambiente com dotenv.
- Design e estilização de páginas front-end com HTML e CSS.

## Licença

Este projeto é de uso pessoal e não possui uma licença específica. Caso tenha interesse em utilizá-lo, entre em contato com o desenvolvedor.

## Desenvolvedor

**Marley Paranhos**

Entre em contato:
- [LinkedIn](https://www.linkedin.com/in/seu-usuario)
- [E-mail](mailto:seu-email@exemplo.com)
