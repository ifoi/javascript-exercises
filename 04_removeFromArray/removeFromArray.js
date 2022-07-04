const removeFromArray = function(array, ...args) {
    // index = array.indexOf(item);
    // if (index !== -1) {
    //     array.splice(index, 1);
    // }
       
    return array.filter( item => !args.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
