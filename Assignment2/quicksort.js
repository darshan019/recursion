//A quicksort algorithm made for practicing recursion

function sort(arr){
    if(arr.length < 2){
        return arr
    }
    let pivot = arr[Math.floor(Math.random()*arr.length)]
    
    let left = []
    let right = [pivot]
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }
        else if(arr[i] > pivot) {
            right.push(arr[i])
        }
    }
    return [...sort(left), ...sort(right)]
    
}

console.log(sort([10,5,74,69,25,45,62]))
