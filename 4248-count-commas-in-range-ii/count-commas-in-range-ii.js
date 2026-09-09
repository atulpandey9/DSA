/**
 * @param {number} n
 * @return {number}
 */
var countCommas = function(n) {
   let p=1000;
   let count=0;
   while(p<=n){
count+=n-p+1;
p*=1000;
   }
   return count
};