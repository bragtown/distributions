let lnZscore = function(z,x,mean,deviation) {
    if (z === undefined) {
        return (Math.log(x)-mean)/deviation
    }
    //  else if (x === undefined) {
    //     return z*deviation + mean;
    // } else if (mean === undefined) {
    //     return -1 * (z*deviation - x)
    // } else if (deviation == undefined) {
    //     return (x-mean)/z;
    // }
}

//need to update
module.exports = lnZscore