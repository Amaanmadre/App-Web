//require modules
const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const app = express();
const morgan = require('morgan');
const path = require('path');

//Morgan - middleware
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname,'/public/')));

// to serve the '/' request
app.get('/', (req,res) => {
    res.send('hello world');
});
// start the server on port 3000
app.listen(3000, () =>{
    debug(`listening on port ${chalk.green(3000)}`);
    //console.log('server is listening on port'+ chalk.green('3000'));
});