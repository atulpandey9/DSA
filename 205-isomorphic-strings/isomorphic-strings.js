/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const smap=new Map();
    const tmap=new Map();

    for(let i=0;i<s.length;i++){
        const a=s[i];
        const b=t[i];

        if(smap.has(a) && smap.get(a)!==b){
            return false;

        }
        if(tmap.has(b) && tmap.get(b)!==a){
            return false;

        }
        smap.set(a,b);
        tmap.set(b,a);
    }
return true;
};