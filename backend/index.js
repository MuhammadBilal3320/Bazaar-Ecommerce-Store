import app from './app.js';
import dotenv from 'dotenv';
import { connectDB } from './DB.js';

dotenv.config({path:"./config/.env"});

// Handling the Uncaught Exception Errors
process.on("uncaughtException", (err)=>{
    console.error(`Uncaught Exception: `, err.message);
    server.close(()=> process.exit(1))
})

connectDB();

const server = app.listen(process.env.PORT_NO, ()=>{
    console.log(`Server is running on port ${process.env.PORT_NO}`);
})

// unhandled Promise Rejection
process.on("unhandledRejection", (err)=>{
    console.error(`Unhandled Promise Rejection: `, err.message);
    server.close(()=> process.exit(1))
})
