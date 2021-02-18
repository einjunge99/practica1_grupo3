function palindrome(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
  }
  
//Test
  console.log("¿Es oro una palabra palindroma? : ",palindrome("oro"))
  
//Funcionalidad aún no válida
  
  