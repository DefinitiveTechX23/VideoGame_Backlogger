import express from "express";
import cors from "cors";


import gameRouter from "./routes/game.js";
  // import verifyToken from "./middleware/verifyToken.js";  

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());


app.use('/api/games',  gameRouter);


app.get('/api', (req, res) => {
  console.log("API is running");
  res.status(200).json({ success: true, message: "API is running" });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
