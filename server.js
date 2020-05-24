const express = require('express');
const connectDB = require('./config/db');
const helmet = require('helmet');
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');
const cors = require('cors');

const app = express();

//connectDB
connectDB();

//init json middleware
app.use(express.json({ extended: false }));

//set security headers
app.use(helmet());
//prevent XSS attacks
app.use(xss());
//rate limiting
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, //10 min
  max: 100,
});
app.use(limiter);

//prevent hpp param pollution
app.use(hpp());

//Enabling CORS
app.use(cors());

app.get('/', (req, res) => res.json({ msg: 'Contact Book Api' }));

// Defining routes
app.use('/api/v1/users', require('./routes/users'));
app.use('/api/v1/auth', require('./routes/auth'));
app.use('/api/v1/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`App listening on ${PORT}`));
