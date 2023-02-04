const express = require('express');
const PORT = process.env.PORT || 5000;
const db = require('./db');
const pg = require('pg');
const router = require('./routes/user-routes');

const app = express();

const start = () => {
    try {
        app.listen(PORT, () => {
            console.log(`server start on port ${PORT}`);
        });
    } catch (e) {
        console.log(e);
    }
}

// app.get('/', (req, res) => {
//     res.send(db);
// });
app.use(express.json());
app.use('/api', router);

start();