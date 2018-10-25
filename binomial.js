let factorialize = function (num) {
  if (num === 0) return 1;
  else {
      let smallerNum = num-1;
      return num * factorialize(smallerNum)
  }
}

let binomial = function (n,p,x) {
    let bias = 0;
    let uncertainty;
    if(p === undefined) {
        p = x/n;
        uncertainty = Math.pow(p*(1-p)/n, .5);

    }
    let dist = factorialize(n)/factorialize(x)/factorialize(n-x)*(Math.pow(1-p, n-x))*Math.pow(p,x);
    let mean = n*p;
    let variance = n*p*(1-p);
    if (uncertainty === undefined) {
        uncertainty = Math.pow(variance, .5);
    }
    return {dist,mean,variance,bias,uncertainty};

}

console.log(binomial(1,0.4,10));


// x <= 5 -
// x <= 3 +
// x 3