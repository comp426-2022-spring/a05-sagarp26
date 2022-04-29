const coin = require('../controllers/mycontrollers.js')

// check middleware
function check(req, res) {
        res.writeHead( 200, { 'Content-Type' : 'text/plain' });
        res.end(200 + ' OK')
}

// flip one coin 
function flip(req, res) {
    res.status(200).json({ "flip" : coin.coinFlip() })
}

// flip many coins Get
function flipsGet(req, res) {
    const flips = coin.coinFlips(req.params.number)
    res.status(200).json({"raw":flips,"summary":countFlips(flips)})
}

// flip many coins POST
function flips(req, res) {
    const flips = coin.coinFlips(req.body.number)
    res.status(200).json({"raw":flips,"summary":countFlips(flips)})
}

// guess flip GET
function guessGet(req, res) {
    res.status(200).json(coin.flipACoin(req.params.guess))
}

// guess flip POST
function guess(req, res) {
    res.status(200).json(coin.flipACoin(req.body.guess))
}