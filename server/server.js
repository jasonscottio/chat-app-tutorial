/**
 * Created by jay on 4/23/17.
 */

const express = require('express');
const path = require('path');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

let app = express();

app.use(express.static(publicPath));

app.get('/', (req, res) => {

});

app.listen(3000, () => {
    console.log(`Server is running on ${port}`);
});