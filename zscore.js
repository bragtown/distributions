let zscore = function(z,x,mean,deviation) {
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