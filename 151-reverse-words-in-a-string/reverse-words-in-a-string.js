/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {

let text=s.replace(/\s+/g," ").trim();
let result=text.split(" ").reverse().join(" ");

return result;

};