function factorial_recursive(x) 
{ 

  if (x === 0)
 {
    return 1;
 }
  return x * factorial_recursive(x-1);
         
}

function factorial_iterative(x) 
{ 
  for(var i = x-1; i>0; i--){
    x = x * i;
  }
  return x;  
}

console.log(factorial_recursive(5));
console.log(factorial_iterative(5));
