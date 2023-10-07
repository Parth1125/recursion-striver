// REVERSE ARRAY
// using two pointers recursion
function reverse(l,r){
    if(l>=r)return
    [l,r]= [r,l]
    reverse(l+1 , r-1)
}
//using one pointer
function reverse1(i,arr,n){
    if(i> n/2)return
    [arr[i] , arr[n-i-1]]= [arr[n-i-1], arr[i]]
    reverse1(i+1,arr,n)
}

// STRING PALINDROME
