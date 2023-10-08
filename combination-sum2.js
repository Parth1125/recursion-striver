var findcombination = function(ind,arr,target,ds,ans){
    if(target == 0){
        ans.push([...ds])
        return
    }
    for(let i = ind ; i<arr.length;i++){
        if(i>ind && arr[i]==arr[i-1])continue
        if(arr[i]>target)break
        ds.push(arr[i])
        findcombination(i+1,arr,target-arr[i],ds,ans)
        ds.pop()
    }
} 
function compareNumbers(a, b) {
  return a - b;
}
var combinationSum2 = function(candidates, target) {
    const ind = 0
    const ds = []
    const ans = []
    const arr = candidates.sort(compareNumbers)
    console.log(arr)
    findcombination(ind,arr,target,ds,ans)
    return ans
};
console.log('hello world')