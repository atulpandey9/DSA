/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
     const freqMap = new Map();
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
 
    for (const char of s) {
        freqMap.set(char, (freqMap.get(char) || 0) + 1);
    }
    
    let maxVowel = 0;
    let maxConsonant = 0;
 
    for (const [char, count] of freqMap.entries()) {
        if (vowels.has(char)) {
            maxVowel = Math.max(maxVowel, count);
        } else {
            maxConsonant = Math.max(maxConsonant, count);
        }
    }
    
    return maxVowel + maxConsonant;


};