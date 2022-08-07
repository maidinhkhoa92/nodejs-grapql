import mongoose from "mongoose"

export const database = async () => {
  try {
      // Connect to the MongoDB cluster
      if (!process.env.db_url) {
        return
      }
      await mongoose.connect(process.env.db_url);
      console.log("Connected to mongoDB");
  } catch (e) {
      console.error(e);
  }
}
