var subset = function(ind , arr , ds,ans){
    ans.push([...ds])
    for(let i = ind; i<arr.length;i++){
        if(i!=ind && arr[i] == arr[i-1])continue
        ds.push(arr[i])
        subset(i+1,arr,ds,ans)
        ds.pop()
    }
}
var sortnum = function(a,b){
    return a - b
} 
var subsetsWithDup = function(nums) {
    const arr = nums.sort(sortnum)
    const ds = []
    const ans = []
    subset(0,arr,ds,ans)
    return ans
};