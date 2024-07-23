import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";


const app=express()
app.use(cors(                       // this is for cors at production level - normally app.use(cors())
    {origin : process.env.CORS_ORIGIN,
        credentials : true
     }))

     app.use(express.json( { limit: "16kb" })) //accepting json into express

app.use (express.urlencoded({  extended : true,limit  : "16kb"}))   // allowing nested objects in URL-encoded data using extended

app.use (express.static("public"))                              // serving static files from public folder - locally storing files and folders into the server's memory - for production level use a cloud storage service like AWS S3 or Google Cloud Storage, which will store your data in their servers' memory instead of your local computer's memory.

app.use(cookieParser())

export default app;

