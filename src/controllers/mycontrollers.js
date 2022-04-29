function coinFlip() {
    let x = Math.floor(Math.random() * 2)
    var result = ""
    if(x < 1) {
      result = "heads"
    }
    else {
      result = "tails"
    }
    return result
  }
  
  function coinFlips(flips) {
    const f = []
    for (let i = 0; i < flips; i++) {
      f[i] = coinFlip()
    }
    return f
  }
  
  function countFlips(array) {
    var x = 0
    var y = 0
    for(let i = 0; i < array.length; i++) {
      if(array[i] == "heads") {
        x++
      }
      else if(array[i] == "tails") {
        y++
      }
    }
    const result = {"tails":y,"heads":x};
    return result;
  }
  
  function flipACoin(c) {
    let f = coinFlip();
    var r = "";
    if(c == f) {
      r = "win"
    }
    else {
      r = "lose"
    }
    const message = {"call":c, "flip":f, "result":r};
    return message;
  }

  export { coinFlip, coinFlips, countFlips, flipACoin };