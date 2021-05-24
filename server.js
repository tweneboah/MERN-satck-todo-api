const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const express = require('express');
const { dbConnect } = require('./config/dbConnect');
const { todoRoutes } = require('./routes/todoRoutes');
const {
  notFound,
  errorHandler,
} = require('./middleware/errorMiddlewareHandler');
dbConnect();

const app = express();

//===========================================================
//Middleware
//===========================================================
app.use(cors());
app.use(express.json());

//===============================
// Routes
//===============================
app.use('/api/', todoRoutes);

//Error handlers
// //============================
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log('Server is running'));
