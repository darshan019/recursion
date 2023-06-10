function fibs(n){
    let result = []
    let a = 0
    let b = 1
    result.push(a,b)
    for(let i = 2; i <= n; i++){
        let c = a + b;
        a = b
        b = c
        result.push(c)
    }
    return result
    
}
console.log(fibs(8))