const express = require('express');
const router = express.Router();

// Rota para login
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (email === 'teste@teste.com' && password === '123456') {
    res.status(200).json({ message: 'Login bem-sucedido!' });
  } else {
    res.status(401).json({ message: 'Credenciais inválidas' });
  }
});

// Rota para cadastro
router.post('/register', (req, res) => {
  const { name, email, password } = req.body;

  // Simples validação de exemplo
  if (name && email && password) {
    res.status(200).json({ message: 'Cadastro bem-sucedido!' });
  } else {
    res.status(400).json({ message: 'Todos os campos são obrigatórios' });
  }
});

module.exports = router;
