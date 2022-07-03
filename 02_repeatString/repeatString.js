const repeatString = function( inputString, repeatCount ) {
   let outputString = "" ;
   
    // if ( !isBlankString(inputString)) {
        
        if( repeatCount < 0 ) {
            outputString = "ERROR"

        }else {
                    for (let i = 0; i < repeatCount; i++) {
                    outputString += inputString ;
                    }
                }
        // }
  return outputString 

};

function isBlankString(string) {
    return (string.length === 0 || !string.trim()) ;
}

// console.log(isBlankString("Hello Javascript"))
// console.log(isBlankString(""))
// console.log(isBlankString("    "))

// Do not edit below this line
module.exports = repeatString;
