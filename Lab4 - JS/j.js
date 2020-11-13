function bin_search_intervals(x, arr, start, end){
    if (start > end) return false; 
    let mid=Math.floor((start + end)/2); 
    if (arr[mid]===x) return true; 
    if(arr[mid] > x)  
        return bin_search_intervals(x, arr, start, mid-1); 
    else
        return bin_search_intervals(x, arr, mid+1, end); 
}

function bin_search(x, arr){
    arr = arr.sort(function(a,b) {return a-b;});
    return bin_search_intervals(x, arr, 0, arr.length-1);
}

console.log(bin_search(66, [1, 9, 30, 66, 567]));