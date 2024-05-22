import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import jobRouter from "./routes/jobRoutes.js";
import userRouter from "./routes/userRoutes.js";
import applicationRouter from "./routes/applicationRoutes.js";
import { config } from "dotenv";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";

const app = express();
config({ path: "./config/config.env" });

// // Define allowed origins
// const allowedOrigins = [
//   'http://localhost:5173', // Local development URL
//   'https://medconnect-pi.vercel.app',
//   'https://medconnect-pi.vercel.app/',
//   'https://medconnect-7d0l21meg-medconnect-edu-ng.vercel.app/' // Production frontend URL
// ];

// // // CORS configuration
// // const corsOptions = {
// //   origin: function (origin, callback) {
// //     // Allow requests with no origin (like mobile apps, curl requests)
// //     if (!origin) return callback(null, true);
// //     if (allowedOrigins.indexOf(origin) !== -1) {
// //       callback(null, true);
// //     } else {
// //       callback(new Error('Not allowed by CORS'));
// //     }
// //   },
// //   methods: ["GET", "POST", "DELETE", "PUT", "OPTIONS"],
// //   credentials: true, // Allow cookies and other credentials to be sent
// //   allowedHeaders: ["Content-Type", "Authorization"], // Add other headers as needed
  
// //   preflightContinue: false,
// //   optionsSuccessStatus: 204 // Ensure preflight requests return 204
// // };

// Apply CORS middleware
app.use(cors({
  origin: 'https://medconnect-7d0l21meg-medconnect-edu-ng.vercel.app', // Your frontend URL
  methods: ['GET', 'POST'], // Allowed methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/job", jobRouter);
app.use("/api/v1/application", applicationRouter);
dbConnection();

app.use(errorMiddleware);
export default app;
