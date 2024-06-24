const express = require('express');
const app = express();
const cors = require('cors')
const router = require('./routes');
require('./config/db');

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});