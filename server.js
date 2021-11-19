const express = require('express');
const app = express();
const port = 3001;

const userRouters = require('./app/routes/user.route');
const itemsRouters = require('./app/routes/items.route');
const uploadFiles = require('./app/routes/upload.route');


const db = require('./config/db');
const bodyParser = require('body-parser');

app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: true}));
app.use(userRouters);
app.use(itemsRouters);
app.use(uploadFiles);

app.listen(port, () => {
    console.log('The app is running');
});

db();
