function nth_fibonacci(n){
    if (n===0)
        return 0;
    if (n===1)
        return 1;
    return nth_fibonacci(n-1) + nth_fibonacci(n-2);
}

console.log(nth_fibonacci(7));