"use strict";

const multiplesOf3and5 = (number) => {
    let arrs = [...Array(number - 1).keys()].map(arr => {
        return arr + 1;
    });

    return arrs.filter(arr => arr % 3 === 0 || arr %5 === 0).reduce((a, b) => a + b)

    
    
}
  
  
  console.log(multiplesOf3and5(1000));


  