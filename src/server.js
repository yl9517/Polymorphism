import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`Hello World! It's version port : ${PORT}`);
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
