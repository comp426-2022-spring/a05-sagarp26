import db from '../services/database.js'

function log(req, res) {
    try{
        const logData = db.prepare('SELECT * FROM accesslog').all();
        res.status(200).json(logData);
    } catch(e){
        console.error(e);
    }
}

function error(req, res) {
    throw new Error('Error Test Successful');
}

modules.export = { log, error}