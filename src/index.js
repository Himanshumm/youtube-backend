// require('dotenv').config({ path:'./env'})   degrades code consistency

import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()

// since async function returns a promise 
.then( ()=> {
  app.listen(process.env.PORT || 8000,() => {
    console.log('Server is running at PORT : ${ process.env.PORT} ');

  })
})
.catch((err) => {

  console.log("Mongo DB connection failed !!! ", err);

})



/* (
  async () =>{
    try {
      await  mongoose.connect( `${process.env.MONGODB_URI}/${DB_NAME}`)

app.on("ERROR",(error)=> {
    console.log("ERROR",error)
    throw error 
})


app.listen(process.env.PORT,()=>{
    console.log(`App is listening on PORT ${process.env.PORT}`);
})


    } catch (error) {
        console.error("Error:", error)
            throw new Error(`${error}.`);
        
    }
  }
)() */