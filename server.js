const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Dashboard API</title>
      <style>
        body { font-family: Arial; text-align: center; margin-top: 50px; }
        button { padding: 15px; font-size: 16px; }
      </style>
    </head>
    <body>
      <h1>Dashboard API</h1>
      <button onclick="carregar()">Consultar Mensagem</button>
      <h2 id="resultado"></h2>

      <script>
        async function carregar() {
          const response = await fetch("https://alo-mundo-api-git-vac-testes.apps.ocp-dev.i.tj.pa.gov.br/api/alo");
          const data = await response.json();
          document.getElementById("resultado").innerText = data.mensagem;
        }
      </script>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log("Dashboard rodando na porta " + PORT);
});
