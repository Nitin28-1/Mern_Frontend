const mongoose=require("mongoose");
require("dotenv").config();

exports.connect=()=>
{
    mongoose.connect(process.env.MONGO_URL)
    .then(()=> {console.log("DataBase Connected SuccessFully")})
    .catch((error)=>
    {
        console.log("DataBase Connection Failed...");
        console.log(error);
        process.exit(1);
    });
}

