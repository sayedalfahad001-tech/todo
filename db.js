const mongoose = require("mongoose");

  mongoose
    .connect(
      "mongodb+srv://sayedalfahad001_31:Iknock3317@cluster0.xksxjno.mongodb.net/?appName=Cluster0",
    )
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));