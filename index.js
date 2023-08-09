const express = require('express');
const app = express();


const port = 3000;


const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');

app.use(expressLayouts);

app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static('./assets')); 

app.set("view engine", "ejs");
app.set("views", "./views");

app.use('/', require('./routes'))

app.listen(port, function(err) {
    if(err) {
        console.log('Error', err);
        return;
    }
    console.log(`Server running on port: http://localhost:${port}`);

});