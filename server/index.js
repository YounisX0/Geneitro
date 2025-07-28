import cors from "cors";
import * as dotenv from "dotenv";
import mongoose, { connect } from "mongoose";
import express from "express";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({extended: true}));


app.use((err,req,res,next)=> {
  const status=err.status || 500;
  const message=err.message || "Internal Server Error";
  return res.status(status).json({
    success: false,
    status,
    message
  });
});

//Default get

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to Geneitro Server !",
    });
});

const connectDB= ()=> {
  mongoose.set("strictQuery", true);
  mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
      console.log("Connected to MongoDB");
  })
  .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
      process.exit(1); // Exit the process if connection fails
  });


}

const startServer = async () => {
    try {
        connectDB();
        app.listen(8080, () => {
            console.log(`Server is running on port ${8080}`);
        });
    } catch (error) {
        console.error("Error connecting to server", error);
    }
};

startServer();
