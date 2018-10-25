let factiorialize = require('./factorial');
let combo = function(top,bottom) {
    return factiorialize(top) / factiorialize(bottom) / factiorialize(top-bottom);
}
let hypergeometric = function(N,R,n) {
    return function (x) {
        let dist = combo(R,x) * combo(N-R, n-x) / combo(N,n);
        let mean = n*R/N;
        let variance = n*(R/N)*(1-R/N)*((N-n)/(N-1));
        return {dist,mean,variance};
    }
}
module.exports = hypergeometric;
