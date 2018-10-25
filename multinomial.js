let factorialize = require('./factorial');
let MN = function (n, pArr) {
    return function (xArr) {
        let pTotal = 1;
        pArr.forEach((p,index,arr)=>pTotal *= Math.pow(p, xArr[index]));
        let bottom = 1
        xArr.forEach((x) => {
             bottom *= factorialize(x)
        })
        let dist = factorialize(n)/ bottom * pTotal;
        return {dist}
    }
}
module.exports = MN;