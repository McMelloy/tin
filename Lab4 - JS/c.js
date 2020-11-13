function palindrome_string(str){
    var origStr = str.toLowerCase().replace(/[\W]/g, '');
    console.log(origStr);
    var reverseStr = origStr.split('').reverse().join(''); 
    console.log(reverseStr);
    return origStr === reverseStr;
}

console.log(palindrome_string("never odd or even"));