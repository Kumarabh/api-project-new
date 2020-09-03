const express = require('express');
const dotenv = require('dotenv');
// const logger = require('./middleware/logger');
const morgan = require('morgan');

const connectDB = require('./config/db');
// load env files
dotenv.config({path: './config/config.env'});

//connect to database 
connectDB();
//Route files
const bootcamps = require('./routes/bootcamps');

const app = express();

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

//Middlewares
app.use('/api/v1/bootcamps',bootcamps);
// app.use(logger);


const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, console.log(`Server running on port ${PORT}`));

//handle unhandled promise rejection
process.on('unhandledRejection', (err, promise) =>{
console.log(`Error ${err.messaage}` )
server.close(() => process.exit(1));
})
