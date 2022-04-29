import { coinFlip, coinFlips, countFlips, flipACoin } from '../controllers/coin.mjs'

// check middleware
function check(req, res) {
        res.writeHead( 200, { 'Content-Type' : 'text/plain' });
        res.end(200 + ' OK')
}

// flip one coin 
function flip(req, res) {
    res.status(200).json({ "flip" : coinFlip() })
}

// flip many coins Get
function flipsGet(req, res) {
    const flips = coinFlips(req.params.number)
    res.status(200).json({"raw":flips,"summary":countFlips(flips)})
}

// flip many coins POST
function flips(req, res) {
    const flips = coinFlips(req.body.number)
    res.status(200).json({"raw":flips,"summary":countFlips(flips)})
}

// guess flip GET
function guessGet(req, res) {
    res.status(200).json(flipACoin(req.params.guess))
}

// guess flip POST
function guess(req, res) {
    res.status(200).json(flipACoin(req.body.guess))
}

export { check, flip, flipsGet, flips, guessGet, guess }