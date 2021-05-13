const express = require("express");
const mongojs = require("mongojs");
const mongoose = require("mongoose");
const logger = require("morgan")
const path = require("path");
const routes = require("./routes")
const app = express();
const PORT = process.env.PORT || 3030;


//mongo
const databaseUrl = "workout";
const collections = ["workouts"];
const db = mongojs(databaseUrl, collections);

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/deep-thoughts',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );


//express
app.use(express.static("public"));
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



db.on("error", error => {
    console.log("Database Error:", error);
});

app.delete("/clearall", (req, res) => {
    db.workouts.remove({}, (error, response) => {
        if (error) {
            res.send(error);
        } else {
            res.send(response);
        }
    });
});



app.use("/",routes);
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
