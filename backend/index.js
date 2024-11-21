import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";

import { connectDB } from "./db/connectDB.js";

import authRoutes from "./routes/auth.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(express.json()); // allows us to parse incoming requests:req.body
app.use(cookieParser()); // allows us to parse incoming cookies

app.use("/api/auth", authRoutes);

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/vite-project/dist")));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "vite-project", "dist", "index.html"));
	});
}

app.listen(PORT, () => {
	connectDB();
	console.log("Server is running on port: ", PORT);
});








// // const express = require('express');
// // const cors = require('cors');
// // const app = express();
// import { MongoClient } from 'mongodb';


// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import cookieParser from "cookie-parser";
// import path from "path";

// import { connectDB } from "./db/connectDB.js";

// import authRoutes from "./routes/auth.route.js";

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;
// const __dirname = path.resolve();

// app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// app.use(express.json()); // allows us to parse incoming requests:req.body
// app.use(cookieParser()); // allows us to parse incoming cookies




// const uri = 'mongodb+srv://bkanza559:asjkrm221679@cluster0.8jtra.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// let db, collection;

// // MongoDB connection
// MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(client => {
//     db = client.db('demo-video');
//     collection = db.collection('Detections');
//     console.log('Connected to MongoDB');
//   })
//   .catch(err => console.error('MongoDB connection failed', err));






// app.use("/api/auth", authRoutes);

// if (process.env.NODE_ENV === "production") {
// 	app.use(express.static(path.join(__dirname, "/vite-project/dist")));

// 	app.get("*", (req, res) => {
// 		res.sendFile(path.resolve(__dirname, "vite-project", "dist", "index.html"));
// 	});
// }



// // / POST route to log data to MongoDB
// app.post('/log', (req, res) => {
//     const { videoPath, detectionType, date, time } = req.body;

//     if (videoPath && detectionType && date && time) {
//       collection.insertOne({
//         videoPath: videoPath,
//         detectionType: detectionType,
//         date: date,
//         time: time
//       })
//       .then(() => {
//         res.status(200).json({ message: "Logged successfully" });
//       })
//       .catch(err => {
//         console.error('Failed to log data', err);
//         res.status(500).json({ error: 'Failed to log data' });
//       });
//     } else {
//       res.status(400).json({ error: "Invalid data received" });
//     }
// });

// // Get route to fetch all logged videos
// app.get('/videos', (req, res) => {
//     collection.find({}).toArray()
//     .then(videos => {
//         res.status(200).json(videos); // Send the video data as JSON
//     })
//     .catch(err => {
//         console.error('Failed to fetch videos', err);
//         res.status(500).json({ error: 'Failed to fetch videos' });
//     });
// });





// app.listen(PORT, () => {
// 	connectDB();
// 	console.log("Server is running on port: ", PORT);
// });