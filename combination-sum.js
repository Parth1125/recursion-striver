// Leetcode problem 39
// combination sum
var findcombination = function(ind,arr,target, ans , ds,n){
    if(ind == n){
        if(target == 0){
            ans.push([...ds])
            
        }
        return 
    }
    if(arr[ind]<=target){
        ds.push(arr[ind])
        findcombination(ind,arr,target-arr[ind],ans,ds,n)
        ds.pop()
    }
        findcombination(ind + 1,arr,target,ans,ds,n)
   
    
}
var combinationSum = function(candidates, target) {
    const ind = 0
    const ans = []
    const ds = []
    const n = candidates.length
    
     findcombination(ind,candidates,target,ans,ds,n)
     return ans
};