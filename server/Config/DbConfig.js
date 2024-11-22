const mongoose = require("mongoose");

// Retrieve the connection string from environment variables
let connectionString = process.env.MONGO_URL;

try {
    // Attempt to connect to MongoDB using Mongoose
    mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("MongoDB connected successfully!");
        })
        .catch((error) => {
            console.error("Error connecting to MongoDB:", error);
        });
} catch (error) {
    console.error("Error occurred during connection attempt:", error);
}
