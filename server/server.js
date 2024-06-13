const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para servir arquivos estáticos (CSS, JS, etc.)
app.use(express.static('public'));

// Middleware para parsing de JSON e form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rotas
app.use('/', routes);

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
