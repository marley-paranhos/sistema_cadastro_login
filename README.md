# Sistema de Cadastro e Login

Este projeto é um sistema completo de **Cadastro e Login** desenvolvido com **Node.js** e **MySQL**, que combina boas práticas de desenvolvimento para garantir segurança, escalabilidade e uma experiência de usuário agradável. O sistema inclui autenticação de usuários, gerenciamento de sessões e funcionalidades adicionais para personalização, como exibição de portfólio e download de currículo.

## 🎯 Objetivo do Projeto

O objetivo principal deste sistema é demonstrar a criação de um fluxo de autenticação funcional e seguro, utilizando tecnologias modernas do ecossistema JavaScript. Ele pode ser adaptado para diversas finalidades, como sistemas corporativos ou projetos pessoais.

---

## 🚀 Tecnologias Utilizadas

### **Back-end**
- **Node.js**: Plataforma JavaScript para execução no lado do servidor.
- **Express.js**: Framework para criar APIs e gerenciar rotas.
- **MySQL**: Banco de dados relacional para armazenamento de informações.
- **bcrypt.js**: Biblioteca para hash seguro de senhas.
- **dotenv**: Gerenciamento seguro de variáveis de ambiente.
- **express-session**: Gerenciamento de sessões de usuários.

### **Front-end**
- **HTML5**: Estruturação de páginas web.
- **CSS3**: Estilização e design das páginas.
- **JavaScript**: Validação e interatividade no cliente.

---

## 📑 Funcionalidades

1. **Cadastro de Usuários**:
   - Permite registrar novos usuários com os campos: nome, e-mail, telefone e senha.
   - As senhas são armazenadas com hash criptográfico, garantindo segurança.

2. **Login de Usuários**:
   - Validação de credenciais com feedback em tempo real.
   - Login seguro com sessões de usuário.

3. **Gerenciamento de Sessões**:
   - Sessões autenticadas com gerenciamento eficiente.
   - Opção de logout para encerrar sessões.

4. **Portfólio Personalizado**:
   - Página de portfólio redirecionada após o login.
   - Currículo disponível para download.

5. **Página Sobre**:
   - Informações adicionais sobre o sistema e o desenvolvedor.

---

## 🛠️ Como Configurar e Executar

1. **Clone o Repositório**:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio

2. Instale as Dependências:
npm install

3. Configure as Variáveis de Ambiente: Crie um arquivo .env na raiz do projeto com as seguintes configurações:
   DB_HOST=localhost
   DB_USER=seu_usuario
   DB_PASSWORD=sua_senha
   DB_NAME=seu_banco_de_dados
   DB_PORT=3306

4. Inicie o Servidor:
npm start

5. Acesse o Sistema: Abra o navegador e vá para http://localhost:3000.

💡 Habilidades Demonstradas
Autenticação e Segurança:

Implementação de login seguro com hash de senhas usando bcrypt.js.
Gerenciamento de sessões com express-session.
Back-end Estruturado:

Criação de rotas no Express.js.
Integração com banco de dados MySQL utilizando queries eficientes.
Frontend Responsivo:

Estilização e estruturação com HTML5 e CSS3.
Validação de formulários com JavaScript.
Configuração de Ambiente:

Uso de variáveis de ambiente com dotenv para segurança.
📂 Licença
Este projeto foi desenvolvido como parte de um estudo prático. O uso é permitido para fins acadêmicos e pessoais, com créditos ao desenvolvedor.

📞 Contato do Desenvolvedor
Marley Paranhos

LinkedIn: linkedin.com/in/marley-paranhos
E-mail: mpsvideos.marley@gmail.com