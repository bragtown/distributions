let combo = require('./combo');
let NB = function(r,p) {
    return function (x) {
        let dist = combo(x-1,r-1) * Math.pow(p,r)* Math.pow(1-p, x-r);
        let mean = r/p;
        let variance = r*(1-p)/Math.pow(p,2);
        return {dist,mean,variance};
    }
}
module.exports = NB;