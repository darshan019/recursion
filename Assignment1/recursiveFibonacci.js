let r = []
function fib(n) {
    if(n == 2) {
        r.push(0,1)
        return r
    }
    fib(n-1)
    let a = r[r.length-1]+r[r.length-2]
    r.push(a)
    return r
}
console.log(fib(15))    // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377
