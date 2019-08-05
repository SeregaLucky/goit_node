console.log(777);

const express = require("express");
const corsMiddleware = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

const costsRoutes = require("./costs/costsRoutes");

app.use(express.json());
app.use(corsMiddleware());

/*
 * РОУТИНГ
 */
app.get("/", (req, res) => {
  res.json("YES, server WORK=)");
});

app.use("/costs", costsRoutes);

/*
 * USE
 */
app.use((req, res, next) => {
  const err = new Error("Not found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json("ERROR");
});

/*
 * PORT
 */
app.listen(PORT, () => {
  console.log(PORT);
});
