import express from "express";
import path from "path";
import { requestTime, logger } from "./middleware/middleware.js";

const __dirname = path.resolve();
const PORT = process.env.PORT ?? 3000;
const app = express();

app.set("views", path.resolve(__dirname, "ejs"));
app.set("view engine", "ejs");
console.log(app.get("views"));

app.get("/", (req, res) => {
  res.render("index", { title: "Main Page", active: "main" });
});
app.get("/features", (req, res) => {
  res.render("features", { title: "Features Page T", active: "features" });
});
app.use(express.static(path.resolve(__dirname, "static")));

app.use(requestTime);
app.use(logger);

// app.get("/download", (req, res) => {
//   res.download(path.resolve(__dirname, "static", "index.html"));
// });

app.listen(PORT, () => {
  console.log(`server has been planted on PORT ${PORT}...`);
});
