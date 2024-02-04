import express, { response } from "express";
import cors from "cors";

const app = express();

app.get("/", function (req, res) {
  res.send(`Hello you're looking at my route.`);
});

app.listen("4040", () => {
  console.log("the server started on 4040");
});
