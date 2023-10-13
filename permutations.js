// permutations (leetcode 46)

// solution is correct just swap is not working properly

function swap ( x, y){
    let temp = x;
    x = y;
    y = temp;
 }
 var permutation = function(ind,nums,ans){
     if(ind == nums.length){
         ans.push(nums)
         return
     }
     for(let i = ind ;i<nums.length;i++){
         swap(nums[ind],nums[i])
         permutation(ind+1,nums,ans)
         swap(nums[ind],nums[i])
     }
 }
 var permute = function(nums) {
     const ans = []
     permutation(0,nums,ans)
     return ans
 };