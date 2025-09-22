import express from "express";
import cors from "cors";

const app = express();
const PORT = 3131;
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Home Page');
});

app.listen(PORT, () => {
  console.log(`App is listening at http://localhost:3131`);
});