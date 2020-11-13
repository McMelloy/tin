function second_lowest_and_greatest(arr){
    var sorted = arr.sort(function(a, b){return a-b});
    console.log(sorted);
    return [sorted[1], sorted[sorted.length - 2]];
}

console.log(second_lowest_and_greatest([4, 5, 1, 90, 23, 45, 5, 7, 102]));