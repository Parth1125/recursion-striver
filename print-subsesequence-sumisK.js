// print all subsequence whose sum is k
function subsequence(i,ds,s,arr,sum,n){
    if(i == n){
        if(s == sum){
            console.log(ds)
        }
        return
    }
    ds.push(arr[i])
    s+=arr[i]
    subsequence(i+1,ds,s,arr,sum,n)//take
    ds.pop()
    s-=arr[i]
    subsequence(i+1,ds,s,arr,sum,n)//not take
}

// print one subsequence whose sum is k
function subsequence1(i,ds,s,arr,sum,n){
    if(i == n){
        if(s == sum){
            console.log(ds)
            return true
        }
        else return false
    }

    ds.push(arr[i])
    s+=arr[i]
    if(subsequence1(i+1,ds,s,arr,sum,n)==true)return true//take
    ds.pop()
    s-=arr[i]
    if(subsequence1(i+1,ds,s,arr,sum,n)==true)return true//not take
    return false
}


// count subsequence whose sum is k
function subsequence2(i,s,arr,sum,n){
    if(i == n){
        if(s == sum){
            
            return 1
        }
        else return 0
    }

    
    s+=arr[i]
    const l = (subsequence2(i+1,s,arr,sum,n))//take
    
    s-=arr[i]
    const r = (subsequence2(i+1,s,arr,sum,n))//not take
    return l+r
}
const arr1 = [1,2,1]
const sum = 2
const ds = []

n=3
console.log(subsequence2(0,0,arr1,sum,arr1.length))