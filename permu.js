const factorialize = require('./factorial');
let permu = function (n,k) {
    return factorialize(n)/ factorialize(n-k);

}
module.exports = permu;