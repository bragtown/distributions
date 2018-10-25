let factiorialize = require('./factorial');

let combo = function (top,bottom) {
    return factiorialize(top) / factiorialize(bottom) / factiorialize(top-bottom);
}

module.exports = combo; 