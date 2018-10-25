let zscore = require('./lnZscore');
let lognormal = function (mew, sigma) {
    return function(x) {
        let dist = Math.pow(Math.pow(sigma*x*Math.pow(2*Math.PI, .5), -1), -1/2/Math.pow(sigma, 2)*Math.pow(Math.log(x) - mew,2));
        let mean = Math.pow(Math.E, mew + Math.pow(sigma, 2)/2);
        let variance = Math.pow(Math.E, 2*mew + 2*Math.pow(sigma, 2)) - Math.pow(Math.E, 2*mew + Math.pow(sigma, 2));
        let uncertainty = Math.pow(variance, .5);
        let z = zscore(undefined,x,mew,sigma)
        return{dist,mean,variance,uncertainty,z};
    }
}
module.exports = lognormal;