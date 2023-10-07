function subsequence (ind , ds, arr,n ){
    if(ind >=n){
        console.log(ds)
        return
    }
    ds.push(arr[ind])
    subsequence(ind +1,ds,arr,n)
    ds.pop()
    subsequence(ind +1,ds,arr,n)
}
arr1 = [3,1,2]
console.log(subsequence(0,[],arr1,arr1.length))