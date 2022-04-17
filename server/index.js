// import express from "express";
// import bodyParser from "body-parser";
// import mongoose from "mongoose";
// import cors from "cors";
// import postRoutes from "../server/routes/post.js";

// const app = express();

// app.use('/posts', postRoutes);

// app.use(bodyParser.json({ limit: "30mb", extended: true }));
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
// app.use(cors());

// const CONNECTION_URL =
//   "mongodb+srv://Dk123:Dk123@cluster0.6cihs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// const PORT = process.env.PORT || 5000;

// mongoose
//   .connect(CONNECTION_URL, {
//     useNewURlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() =>
//     app.listen(PORT, () => {
//       console.log(`Server running on port ${PORT}`);
//     })
//   )
//   .catch((err) => console.log(err.message));





require("dotenv").config();
const express = require("express");
const app = express();
const flatController = require("./controllers/flats.controller");
const residentController = require("./controllers/resident.controller");
const connect = require("./configs/db");
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/flats", flatController);
app.use("/residents", residentController);



//listening on the port
app.listen(PORT, async function () {
  try {
    await connect();
    console.log(`Listening on Port ${PORT}`);
  } catch (e) {
    console.log("error", e.message);
  }
});
