const mongoose = require("mongoose");
require("dotenv").config()

const connectDB = () => {
    try {
        const conn = mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
        //   console.log(`Mongo connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}


  
module.exports =  connectDB;