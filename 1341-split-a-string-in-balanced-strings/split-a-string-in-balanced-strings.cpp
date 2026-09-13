class Solution {
public:
    int balancedStringSplit(string s) {
    int right=0;
    int  left=0;
    int result=0;

    for(char c:s){
        if(c=='R'){
            right++;
        }else{
            left++;
        }
    if(right==left) result++;
    }
     return result;
    }
   
};