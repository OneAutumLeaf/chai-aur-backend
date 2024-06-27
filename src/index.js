import dotenv from "dotenv/config";
import connectDB from "./db/index.js";

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
    app.on("error", (error) => {
      console.log("Error: ", error);
      throw error;
    });
  })
  .catch((error) => {
    console.log("MongoDB error: ", error);
    process.exit(1);
  });

/*
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_name}`);
    app.on("error", (error) => {
      console.log("Error:", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
})(); 
*/
