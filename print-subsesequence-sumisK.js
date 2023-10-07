function subsequence(i,ds,s,arr,sum,n){
    if(i == n){
        if(s == sum){
            console.log(ds)
        }
        return
    }
    ds.push(arr[i])
    s+=arr[i]
    subsequence(i+1,ds,s,arr,sum,n)
    ds.pop()
    s-=arr[i]
    subsequence(i+1,ds,s,arr,sum,n)
}
const arr1 = [1,2,1]
const sum = 2
const ds = []

n=3
console.log(subsequence(0,ds,0,arr1,sum,arr1.length))