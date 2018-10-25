let Geom = function (p) {
    return function (x) {
        if (!Number.isInteger(x)) {
            return 0;
        }
        let dist = Math.pow(p*(1-p), x-1);
        let mean = 1/p;
        let variance = (1 - p)/Math.pow(p,2);
        return {dist,mean,variance};
    }
}
module.exports = Geom;