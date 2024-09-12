const express = require("express");
const app = express();

// initialize middleware
app.use(express.json());

// connect to the database
const connectDb = require("./config/connectDB");
connectDb();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

// add routes
const blogs = require("./routes/blogs");
app.use("/api/v1", blogs);

app.listen(PORT, ()=>{
    console.log(`App listening on port no ${PORT}`);
})

app.get("/", (req, res) => {
    res.send("This is my BlogWebsite");
})
