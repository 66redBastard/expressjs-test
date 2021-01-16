import express from "express";
import path from "path";

const __dirname = path.resolve();
const PORT = process.env.PORT ?? 3000;
const app = express();

app.get("/", (request, response) => {
  response.sendFile(path.resolve(__dirname, "static", "index.html"));
});
app.get("/features", (request, response) => {
  response.sendFile(path.resolve(__dirname, "static", "features.html"));
});

app.listen(PORT, () => {
  console.log(`server has been planted on PORT ${PORT}...`);
});
