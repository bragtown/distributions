module.exports = function factorialize (num) {
    if (num === 0) return 1;
    else {
        let smallerNum = num-1;
        return num * factorialize(smallerNum)
    }
  }