// gfg
// subset sum 1

function subsetrec(ind,arr,sum,sumset,n){
    if(ind == n){
        sumset.push(sum)
        return
    }
   
    subsetrec(ind + 1,arr,  sum + arr[ind],sumset,n)
    
    subsetrec(ind+1,arr,sum,sumset,n)
}

function compareNumbers(a, b) {
return a - b;
}
class Solution {

subsetSums(arr,n){
   //code here 
   const sumset = []
   subsetrec(0,arr,0,sumset,n)
   return sumset.sort(compareNumbers)
}
}