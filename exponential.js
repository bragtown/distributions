let average = require('./basics')
let Exp = function (lambda,arr) {
    return function (x) {
        let uncertainty, variance;
        if(lambda === undefined && arr.length > 0) {
            let avg = average(arr).mean;
            console.log(avg);
            lambda = arr.length/avg/(arr.length + 1);
            uncertainty = 1/avg/Math.pow(arr.lengh,.5);
            variance = Math.pow(uncertainty, 2);
        } else {
            variance = 1/Math.pow(lambda,2);
            uncertainty = Math.pow(variance,.5);
        }
        let expdist = Math.pow(lambda * Math.E, -1 * lambda * x);
        let cumDist = 1-Math.pow(Math.E, -1 * lambda * x);
        let mean = 1/lambda;
        return {expdist,cumDist, mean,variance,uncertainty,lambda}
    }
}
module.exports = exp;