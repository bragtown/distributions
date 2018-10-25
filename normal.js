let normal = function(mew,sigmaSq) {
    return function (x) {
        let mean = mew;
        let variance = sigmaSq;
        let uncertainty = Math.pow(sigmaSq,.5);
        let dist = 1/uncertainty/Math.pow(2*Math.PI,.5)*Math.pow(Math.E,-1*Math.pow(x-mew,2)/2/sigmaSq)

        return {dist,mean,variance,uncertainty};

    }
}
module.exports = normal;