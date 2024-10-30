import express from "express"; 
import { fetchInformation } from "./scraper.js";
import { join } from "path";
import cors from "cors";
import 'dotenv/config'


const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

const url = "https://news.ycombinator.com/";



app.get("/api/challenge", async (req, res) => {
  try {
    const challenge = await fetchInformation(url);
    res.json({ challenge });
  } catch (error) {
    res.status(500).json({ error: "eeror" });
  }
});

app.listen(PORT, () => {
  console.log(`We are listening on port ${PORT}`);
});
