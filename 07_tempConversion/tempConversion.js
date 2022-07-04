const ftoc = function(temperature) {
      let answer = ((temperature -32) * 5/9).toFixed(1) ;
      
      return  parseFloat(answer)


};

const ctof = function(temperature) {
     let answer = ((temperature * 9/5) + 32).toFixed(1) ;
  return parseFloat(answer );
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
