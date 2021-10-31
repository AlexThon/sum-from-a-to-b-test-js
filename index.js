
function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  // base case: a == b
  
  if(fromN === toN){
    return fromN;
  } while (fromN <= toN){
    return fromN + sum(fromN+1,toN);
  }
}

console.log(sum(2,7));
module.exports = sum;