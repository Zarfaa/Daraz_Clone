import dotenv from 'dotenv';
dotenv.config();
import app from "./app";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URL!)

.then(()=>{
    app.listen(process.env.PORT!,()=>{
        console.log(`Server Running on ${process.env.Port}`)
    })

})
.catch(error=>{
    console.log('Mongose Error',error)

});
