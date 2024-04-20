function helper(n, a, b) {
    if (n == 0) {
        return a;
    }
    let c = a + b; 
    //console.log(c); 
    return helper(n - 1, b, c);
}

function tail(n, a = 0, b = 1) {
    if (n == 0) {
        return a;
    }
    if (n <= 2) {
        return b;
    } 
    return helper(n, a, b);
}

//n = 7;
//result = tail(n);
//console.log(result);