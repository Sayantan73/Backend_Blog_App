const mongoose = require("mongoose");
require("dotenv").config();

const connectDb = () => {
    mongoose.connect(process.env.DATABASE_URL, {})
    .then(()=>{console.log("database connection successful");})
    .catch((e) =>{console.log("error in database connection"); console.error(e.message); process.exit(1);})
}

module.exports = connectDb;