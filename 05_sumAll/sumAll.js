const sumAll = function(start, end) {
     
  if ( !isValidInput(start, end)  ) { 
    return "ERROR";

  } else if( start > end ) {
        temp = start ;
        start = end ;
        end = temp ;
    }
    result = start ;


    for (var i = start +1 ; i < end + 1; i++) {
        result += i
    }
  
    return result ;
};

 function isValidInput( first, second ) {
    if  // (Number.isNaN(first) || Number.isNaN(second) ) {
     (!Number.isInteger(first) || !Number.isInteger(second)){
     console.log("entered NAN section ") ;  
    return false ;

    }else if ( first < 0  || second < 0 ) { 
        return false ;
        
        } else return true ;
    
   
 }

// Do not edit below this line
module.exports = sumAll;
