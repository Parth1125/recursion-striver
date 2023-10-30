// palindrome partition (leetcode 131)
var isPalindrome = function(s,start,end){
    while(start<=end){
        if(s[start++]!= s[end--])return false
        return true
    }
}
var mainfunc= function(index,s, path ,res){
    if(index == s.length){
        res.push([...path])
        return
    }
    for(let i = index ;i<s.length;i++){
        if(isPalindrome(s,index,i)){
            path.push(s.substr(index,i-index+1))
            mainfunc(i+1,s,path,res)
            path.pop()
        }
    }
} 
var partition = function(s) {
    const res = []
    const path = []
    mainfunc(0,s,path,res)
    return res
};
