const express = require("express")
const app = express();
const dotenv = require("dotenv").config()
const cors = require('cors')
const errorHandler = require("./middleware/errorHandler")
const PORT = process.env.PORT || 5001
const connectDb = require("./config/dbConnection")

connectDb();
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'] 
  }));

app.use(express.json());
app.use("/api/users" , require("./routes/authRoutes") , require("./routes/userRoutes"))
app.use("/api/blog" , require("./routes/blogRoutes")) 
app.use("/api/category" , require("./routes/categoryRoutes"))
app.use("/api/search?q=query" , require("./routes/searchRoutes"))
app.use(errorHandler)

app.listen(PORT, console.log(`The server is running of port ${PORT}`))