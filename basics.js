let data = require('./midterm');
let calc = function(arr) {
    let mean,variance,uncertainty;
    mean = arr.reduce((acc,num)=>acc+num)/arr.length;
    arr.unshift(0);
    variance = arr.reduce((acc,num)=>acc + Math.pow(num-mean,2))/arr.length;
    uncertainty = Math.pow(variance,.5);
    return {mean,variance,uncertainty};
}
console.log(calc(data));
module.exports = calc