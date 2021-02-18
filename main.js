function palindrome(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
  }
  
  //Test
  console.log("¿Es oro una palabra palindroma? : ",palindrome("oro"))
  
  function exprimo(n){
    if(n%2==0) return true
    return false
  }
  
  console.log("está apertando o número?: ",exprimo(10)?"sim":"ñao")
  
  