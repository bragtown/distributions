let factorialize = require('./factorial.js');

let Poisson = function(lambda,t) {
    return function (x) {
            
        if(lambda == undefined && t != undefined) {
            lambda = x/t;
        }
        if (!Number.isInteger(x) ||  x < 0) {
            return 0;
        }
        if (t === undefined) {
            t = 1;
        }
        let dist = Math.pow(Math.E, (-1 *lambda)) * Math.pow(lambda, x) / factorialize(x);
        let uncertainty = Math.pow(lambda/t, .5);
        let mean = lambda;
        let variance = lambda;
        return {dist,uncertainty,mean,variance}
    }
}

module.exports = Poisson;
