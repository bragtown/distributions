let bernoulli = function(p) {
    return function (x) {
        let mean = p;
        let variance = p*(1-p);
        let uncertainty = Math.pow(variance, .5);
        let dist = p;
    }
}
module.exports = bernoulli;