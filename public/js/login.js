// Seleciona o formulário pelo ID
const loginForm = document.getElementById('loginForm');

// Adiciona o evento de 'submit' ao formulário
loginForm.addEventListener('submit', async (event) => {
  // Previne o recarregamento da página
  event.preventDefault();

  // Coleta os dados do formulário
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  try {
    // Faz uma requisição POST para o servidor
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    // Converte a resposta para JSON
    const result = await response.json();

    // Lida com a resposta do servidor
    if (result.success) {
      alert('Login realizado com sucesso!');
      window.location.href = '/dashboard'; // Redireciona para o dashboard
    } else {
      alert('Erro ao realizar login: ' + result.message);
    }
  } catch (error) {
    console.error('Erro:', error);
    alert('Erro ao realizar login. Tente novamente.');
  }
});
