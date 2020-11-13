function type(obj){
    return typeof(obj);
}

console.log(type(1));
console.log(type("qwer"));
var x = function is_prime(num){
    if (num % 2 == 0 || num === 1)
        return false;
    for(var i = 3; i < num/2; i+=2)
        if (num % i == 0)
            return false;
    return true;
};
console.log(type(x));