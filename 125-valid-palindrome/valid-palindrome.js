/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let trim = s.toLowerCase().replace(/[^a-z0-9]/g, "");

   let l=0;
   let r=trim.length - 1;

   while(l<r){
    if(trim.charAt(l)===trim.charAt(r)){
        l++;
        r--;
    }else{
        return false;
    }
   }
   return true;
};