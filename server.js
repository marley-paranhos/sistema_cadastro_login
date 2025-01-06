// Importa as bibliotecas necessárias
const express = require('express');  // Framework web para criar aplicações em Node.js
const mysql = require('mysql2');  // Biblioteca para conectar e manipular bancos de dados MySQL
const dotenv = require('dotenv');  // Biblioteca para carregar variáveis de ambiente de um arquivo .env
const path = require('path');  // Biblioteca para manipular caminhos de arquivos e diretórios
const bcrypt = require('bcryptjs');  // Biblioteca para criptografar e comparar senhas
const session = require('express-session');  // Biblioteca para gerenciar sessões de usuário

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

// Cria o aplicativo Express
const app = express();

// Configurações de middleware para lidar com dados de formulários e arquivos estáticos
app.use(express.urlencoded({ extended: true }));  // Para interpretar dados de formulários (form-urlencoded)
app.use(express.json());  // Para interpretar dados no formato JSON
app.use(express.static(path.join(__dirname, 'public')));  // Define a pasta 'public' para servir arquivos estáticos (CSS, JS, imagens, etc.)

// Configuração de sessão
app.use(session({
  secret: '170899',  // Defina uma chave secreta para a sessão
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }  // Defina como true em um ambiente de produção com HTTPS
}));

// Configuração da conexão com o MySQL
const db = mysql.createConnection({
  host: process.env.DB_HOST,  // Obtém o host do banco de dados do arquivo .env
  user: process.env.DB_USER,  // Obtém o nome de usuário do arquivo .env
  password: process.env.DB_PASSWORD,  // Obtém a senha do arquivo .env
  database: process.env.DB_NAME,  // Obtém o nome do banco de dados do arquivo .env
  port: process.env.DB_PORT || 3306  // Obtém a porta do banco de dados ou usa a porta padrão 3306
});

// Conecta ao banco de dados
db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados: ' + err.stack);  // Loga erros de conexão
    return;
  }
  console.log('Conectado ao banco de dados como ID ' + db.threadId);  // Exibe o ID da conexão ativa
});

// Rota principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Rota de cadastro - retorna o formulário de cadastro
app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'register.html'));
});

// Rota de login - retorna o formulário de login
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

// Rota para registrar um usuário
app.post('/register', async (req, res) => {
  const { username, password, email, telefone } = req.body;  // Extrai os dados enviados no corpo da requisição

  // Verifica se todos os campos foram preenchidos
  if (!username || !password || !email) {
    return res.send(`<script>alert('Todos os campos são obrigatórios.'); window.location.href='/register';</script>`);
  }

  try {
    // Criptografa a senha antes de salvá-la no banco de dados
    const hashedPassword = await bcrypt.hash(password, 10);  // 10 define o número de rounds para gerar o hash

    // Cria a query para inserir o usuário no banco de dados
    const query = 'INSERT INTO users (username, password, email, telefone) VALUES (?, ?, ?, ?)';

    // Executa a query para salvar o usuário no banco
    db.query(query, [username, hashedPassword, email, telefone], (err, results) => {
      if (err) {
        console.error('Erro ao cadastrar usuário: ' + err.stack);  // Loga o erro, se ocorrer
        return res.send(`<script>alert('Erro ao cadastrar usuário.'); window.location.href='/register';</script>`);
      }
      res.send(`<script>alert('Usuário cadastrado com sucesso!'); window.location.href='/login';</script>`);
    });
  } catch (error) {
    console.error('Erro ao criptografar a senha:', error);  // Loga erros de criptografia
    res.send(`<script>alert('Erro ao criptografar a senha.'); window.location.href='/register';</script>`);
  }
});

// Rota para login de um usuário
app.post('/login', async (req, res) => {
  const { username, password } = req.body;  // Extrai os dados enviados no corpo da requisição

  // Verifica se todos os campos foram preenchidos
  if (!username || !password) {
    return res.send(`<script>alert('Todos os campos são obrigatórios.'); window.location.href='/login';</script>`);
  }

  try {
    // Busca o usuário pelo nome de usuário no banco
    const query = 'SELECT * FROM users WHERE username = ?';
    db.query(query, [username], async (err, results) => {
      if (err) {
        console.error('Erro ao fazer login: ' + err.stack);  // Loga erros na consulta ao banco
        return res.send(`<script>alert('Erro ao fazer login.'); window.location.href='/login';</script>`);
      }

      // Se o usuário não for encontrado
      if (results.length === 0) {
        return res.send(`<script>alert('Usuário não encontrado.'); window.location.href='/login';</script>`);
      }

      // Compara a senha fornecida com a senha armazenada no banco
      const isMatch = await bcrypt.compare(password, results[0].password);

      // Se a senha não corresponder
      if (!isMatch) {
        return res.send(`<script>alert('Credenciais inválidas.'); window.location.href='/login';</script>`);
      }

      // Cria a sessão para o usuário logado
      req.session.user = { id: results[0].id, username: results[0].username };

      // Se o login for bem-sucedido
      res.send(`<script>alert('Login bem-sucedido!'); window.location.href='/portfolio';</script>`);
    });
  } catch (error) {
    console.error('Erro ao comparar a senha:', error);  // Loga erros de comparação de senha
    res.send(`<script>alert('Erro ao fazer login.'); window.location.href='/login';</script>`);
  }
});

// Rota para o portfólio
app.get('/portfolio', (req, res) => {
  if (!req.session.user) {
    return res.send(`<script>alert('Você precisa fazer login primeiro.'); window.location.href='/login';</script>`);
  }
  res.sendFile(path.join(__dirname, 'views', 'portfolio.html'));
});

// Rota para download do currículo
app.get('/download', (req, res) => {
  const filePath = path.join(__dirname, 'public/files/cv_marley_paranhos.pdf');
  res.download(filePath, 'Curriculo-Marley-Paranhos.pdf', (err) => {
      if (err) {
          console.error('Erro ao baixar o arquivo:', err);
          res.status(500).send('Erro ao baixar o arquivo.');
      }
  });
});

// Rota para logout de usuário
app.get('/logout', (req, res) => {
  if (req.session) {
    req.session.destroy(err => {
      if (err) {
        console.error('Erro ao encerrar a sessão:', err);
        return res.status(500).send('Erro ao encerrar a sessão.');
      }
      res.send(`<script>alert('Logout realizado com sucesso! Volte sempre!'); window.location.href='/';</script>`);
    });
  } else {
    res.send(`<script>alert('Você já está deslogado. Até a próxima!'); window.location.href='/';</script>`);
  }
});

// Rota para página sobre
app.get('/sobre', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'sobre.html')); // Envia o arquivo HTML da página sobre
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');  // Loga a mensagem indicando que o servidor está ativo
});
