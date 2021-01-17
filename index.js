import express from "express";
import path from "path";
import { requestTime, logger } from "./middleware/middleware.js";
import serverRoutes from "./routes/server.js";

const __dirname = path.resolve();
const PORT = process.env.PORT ?? 3000;
const app = express();

app.set("views", path.resolve(__dirname, "ejs")); // change path from default dir views to dir ejs
app.set("view engine", "ejs"); // reset var view engine to ejs
console.log(app.get("views"));

app.get("/", (req, res) => {
  res.render("index", { title: "Main Page", active: "main" });
});
app.get("/features", (req, res) => {
  res.render("features", { title: "Features Page T", active: "features" });
});

// Middleware
app.use(express.static(path.resolve(__dirname, "static")));
app.use(requestTime);
app.use(logger);
app.use(serverRoutes);

app.listen(PORT, () => {
  console.log(`server has been planted on PORT ${PORT}...`);
});
