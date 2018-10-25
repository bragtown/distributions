let zscore = function(z,x,mean,deviation,n) {
    // deviation = Math.pow(Math.pow(deviation,2)/n,.5);
    deviation = deviation/Math.pow(n,.5);


    if (z === undefined) {
        return (x-mean)/deviation
    } else if (x === undefined) {
        return z*deviation + mean;
    } else if (mean === undefined) {
        return -1 * (z*deviation - x)
    } else if (deviation == undefined) {
        return (x-mean)/z;
    }
}

module.exports = zscore;