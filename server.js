const express = require('express');
const messages = require('./products')
const {init} = require('./db/fileDB')
const app = express();
const port = 9000;

// init();
app.use(express.json())
app.use('/messages', messages)


app.listen(port, () => {
    console.log(`Server start on http://localhost:9000`);
})
