const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Teste do servidor" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});