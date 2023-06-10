function fibsRec(n) {
    let results = []

    function recursion(n){
        if(n === 2){
            results.push(0,1)
            return results
        }
        recursion(n-1)
        let fibVal = results[results.length - 1] + results[results.length - 2];
        results.push(fibVal)
        return results
    }
    recursion(n)
    return results
}
  
console.log(fibsRec(5));