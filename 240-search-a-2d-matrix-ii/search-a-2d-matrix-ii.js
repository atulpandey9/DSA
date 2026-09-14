/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
 let row=0;
 let col=matrix[0].length-1;

 while(row<matrix.length && col>=0){
    const current=matrix[row][col];

    if(current===target){
        return true;
    }
    else if(current>target){
        col--;
    }
    else{
        row++;
    }
 }
 return false;
};