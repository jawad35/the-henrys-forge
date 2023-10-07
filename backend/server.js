const app = require("./app");
const cloudinary = require("cloudinary");
const connectDatabase = require("./config/database");

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  process.exit(1);
});

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "config/config.env" });
}



  //   app.use(express.static(path.join(__dirname,"/frontend/build")))
  
  //   app.get("*",(req,res)=>{
  //     res.sendFile(path.join(__dirname,"frontend","build","index.html"))
  //   })
  // }else{
  //   app.get('/',(req,res)=>{
  //     res.send("Api is running")
  //   })
  // }

// Connecting to database
connectDatabase();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://http://127.0.0.1:${process.env.PORT}`);
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
