const mongoose2 = require("mongoose");
require("dotenv").config()

const connectDB = async () => {
    try {
         mongoose2.connect(process.env.MONGO_URI, {
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