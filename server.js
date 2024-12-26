// Importa as bibliotecas necessárias
const express = require('express');  // Framework web para criar aplicações em Node.js
const mysql = require('mysql2');  // Biblioteca para conectar e manipular bancos de dados MySQL
const dotenv = require('dotenv');  // Biblioteca para carregar variáveis de ambiente de um arquivo .env
const path = require('path');  // Biblioteca para manipular caminhos de arquivos e diretórios
const bcrypt = require('bcryptjs');  // Biblioteca para criptografar e comparar senhas

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

// Cria o aplicativo Express
const app = express();

// Configurações de middleware para lidar com dados de formulários e arquivos estáticos
app.use(express.urlencoded({ extended: true }));  // Para interpretar dados de formulários (form-urlencoded)
app.use(express.json());  // Para interpretar dados no formato JSON
app.use(express.static(path.join(__dirname, 'public')));  // Define a pasta 'public' para servir arquivos estáticos (CSS, JS, imagens, etc.)

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
  // res.send('Bem-vindo ao Sistema de Cadastro e Login!');  // Responde com uma mensagem simples
  res.sendFile(path.join(__dirname, 'views', 'index.html'))
});

// Rota de cadastro - retorna o formulário de cadastro
app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'register.html'));  // Retorna o arquivo HTML de cadastro
});

// Rota de login - retorna o formulário de login
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'login.html'));  // Retorna o arquivo HTML de login
});

// Rota para registrar um usuário
app.post('/register', async (req, res) => {
  const { username, password, email, telefone } = req.body;  // Extrai os dados enviados no corpo da requisição

  // Verifica se todos os campos foram preenchidos
  if (!username || !password || !email) {
    return res.status(400).send('Todos os campos são obrigatórios.');  // Retorna um erro se faltar algum campo
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
        return res.status(500).send('Erro ao cadastrar usuário.');  // Retorna um erro genérico
      }
      // res.send('Usuário cadastrado com sucesso!');  // Retorna uma mensagem de sucesso
      res.sendFile(path.join(__dirname, 'views', 'login.html'))
    });
  } catch (error) {
    console.error('Erro ao criptografar a senha:', error);  // Loga erros de criptografia
    res.status(500).send('Erro ao criptografar a senha.');  // Retorna um erro genérico
  }
});

// Rota para login de um usuário
app.post('/login', async (req, res) => {
  const { username, password } = req.body;  // Extrai os dados enviados no corpo da requisição

  // Verifica se todos os campos foram preenchidos
  if (!username || !password) {
    return res.status(400).send('Todos os campos são obrigatórios.');  // Retorna um erro se faltar algum campo
  }

  try {
    // Busca o usuário pelo nome de usuário no banco
    const query = 'SELECT * FROM users WHERE username = ?';
    db.query(query, [username], async (err, results) => {
      if (err) {
        console.error('Erro ao fazer login: ' + err.stack);  // Loga erros na consulta ao banco
        return res.status(500).send('Erro ao fazer login.');  // Retorna um erro genérico
      }

      // Se o usuário não for encontrado
      if (results.length === 0) {
        return res.status(404).send('Usuário não encontrado.');  // Retorna um erro se o usuário não existe
      }

      // Compara a senha fornecida com a senha armazenada no banco
      const isMatch = await bcrypt.compare(password, results[0].password);

      // Se a senha não corresponder
      if (!isMatch) {
        return res.status(401).send('Credenciais inválidas.');  // Retorna erro de autenticação
      }

      // Se o login for bem-sucedido
      // res.send('Login bem-sucedido!');  // Retorna mensagem de sucesso
      res.sendFile(path.join(__dirname, 'views', 'portfolio.html'))
    });
  } catch (error) {
    console.error('Erro ao comparar a senha:', error);  // Loga erros de comparação de senha
    res.status(500).send('Erro ao fazer login.');  // Retorna um erro genérico
  }
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');  // Loga a mensagem indicando que o servidor está ativo
});
