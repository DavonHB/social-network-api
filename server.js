// import dependencies 
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('./routes'));

// connect to mongoose 
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// log mongoose queries
mongoose.set('debug', true);

app.listen(PORT, () => console.log(`Listening on localhost${PORT}`));