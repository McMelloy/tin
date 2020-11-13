function toCoins(money, coins){
    let res = [];
    while(money > 0){
        if(money - coins[0] >= 0){
            res.push(coins[0]);
            money -= coins[0];
        }
        else if(coins.length != 0)
            coins.shift();
        else
            return "Unable to convert";
    }
    return res;
}

console.log(toCoins(48, [25,10,5,2,1]));