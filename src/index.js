const express = require("express");
const corsMiddleware = require("cors");

const costsRoutes = require("./costs/costsRoutes");
const myDb = require("./db");
const PORT = require("./port");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(corsMiddleware());

/*
 * ROUTER
 */
app.get("/", (req, res) => res.json("YES, server WORK=)"));

app.use("/costs", costsRoutes);

/*
 * PORT
 */
myDb.connect(
  "mongodb+srv://Serg:strizg@first-cluster-vklkn.gcp.mongodb.net/test?retryWrites=true",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, database) => {
    if (err) return console.log("ERROR!!! From db: ", err);

    console.log("Conect MongoDB");
  }
);

app.listen(PORT.PORT, () => console.log(PORT.PORT));
