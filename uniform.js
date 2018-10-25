let uniform = function(a,b) {
    return function (x) {
        if (a < x && x < b) {
            let dist = 1/(b-a);
            console.log(b-a, x)
            let mean = (a+b)/2;
            let uncertainty = Math.pow(b-a, 2)/12;
            return {dist,mean,uncertainty}
        } else {
            return 0
        }

    }
}
module.exports = uniform;