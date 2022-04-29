const args = require('minimist')(process.argv.slice(2));

args['port'];
args['help'];
args['debug'];
args['log'];

const help = `index.js [options]
        --port	Set the port number for the server to listen on. Must be an integer between 1 and 65535.
        --debug	If set to \`true\`, creates endpoints /app/log/access/ which returns
                    a JSON access log from the database and /app/error which throws 
                    an error with the message \"Error test successful.\" Defaults to 
                    \`false\`.
        --log		If set to false, no log files are written. Defaults to true.
                    Logs are always written to database.
        --help	Return this message and exit.`;

if(args.help||args.h){
    console.log(help);
    process.exit(0);
}

const express = require('express')
const morgan = require('morgan')
const fs = require('fs')
const coinsRoute = require('./src/routes/coinsRoute.js')
const debuggingRoute = require('./src/routes/debuggingRoute.js')
const logging = require('./src/middleware/logging.js')

let app = express()

const port = args.port || process.env.port || 5000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./public')) 

const server = app.listen(port, () => {
    console.log('App listening on port %PORT%'.replace('%PORT%',port))
});

if (args.log == true) {
    const accesslog = fs.createWriteStream('./data/log/access.log', { flags: 'a' });
    app.use(morgan('combined', { stream: accesslog }));
    app.use(logging.log(req, res, next))
}

if (args.debug) {
    app.use(debuggingRoute)
}

app.use(coinsRoute)

app.use((req, res) => {
  res.status(404).send('404 NOT FOUND')
});