const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Routes requirements
const {
     blogRouter
} = require('./routes/blogRoutes');
const {
     mainRouter
} = require('./routes/mainRoutes');

// Setting the app default
const app = express();

// Setting up the middleware
app.use(express.json());
app.use(cors());
app.use('/api/blogs', blogRouter);
app.use('/', mainRouter);

// env configuration
dotenv.config();
const PORT = process.env.PORT;
const dbURI = process.env.MONGO_URI;

// Connecting to mongoose database
mongoose
     .connect(dbURI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
     })
     .then((result) => {
          // app.listen(PORT, () => {
               console.log(`SoloBlog's Server is listening at port http://localhost:${PORT}.....`);
          // });
     })
     .catch((error) => console.log(error));

app.listen(PORT, () => {
     console.log(`Offline Server is listening at port ${PORT}.....`);
});