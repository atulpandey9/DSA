/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map=new Map();

for(let i=0;i<strs.length;i++) {
    const keys=strs[i].split("").sort().join("");
    if(!map.has(keys)){
        map.set(keys, []);

    }
    const array=map.get(keys)
     array.push(strs[i])
}
return Array.from(map.values());
};