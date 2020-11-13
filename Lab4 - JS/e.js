function longest_word(str){
    var arr_str = str.split(/[ ,.]/g);
    console.log(arr_str);
    return arr_str.reduce(
        function (a, b) {
            return a.length > b.length ? a : b;
        }
    );
}

console.log(longest_word("This will make a fine addition to my collection"));