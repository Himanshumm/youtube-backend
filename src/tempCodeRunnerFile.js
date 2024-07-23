(
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
)()