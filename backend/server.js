const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const mongoURL = process.env.MONGO_URI;
const app = express({
  origin : "https://hms-anas-123.vercel.app"
});
const PORT = process.env.PORT || 5000;

app.use(cors()); 
app.use(express.json());

mongoose
  .connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

app.use('/api/signup', require('./routes/signup'));
app.use('/api/login', require('./routes/login'));
app.use('/api/admin', require('./routes/admin'));
app.use('/api/doctor', require('./routes/doctor'));
app.use('/api/patient', require('./routes/patient'));

app.get('/', (req, res) => {
  res.send('Welcome to the Hospital Management System API');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
