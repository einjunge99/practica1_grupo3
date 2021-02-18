function fibonacci(n) {
	return n < 1 ? 0 : n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(9)); // test completado

function nPrimo(n) {
	if (n == 0 || n == 1 || n == 4) return false;
	for (let x = 2; x < n / 2; x++) {
		if (n % x == 0) return false;
	}
	return true;
}
console.log(" 5 es primo? : " , nPrimo(5));

//Potencia
function potenciaCubo(n){
	return Math.pow(n,3);
}

console.log("La potencia al cubo del número es: ", potenciaCubo(69))
//Prueba segundo numero
console.log("La potencia al cubo del segundo número es: ", potenciaCubo(33))
//Prueba tercer numero
console.log("La potencia al cubo del tercer número es: ", potenciaCubo(12))

// obrigadoW
function raizCubica(n){
	return Math.cbrt(n);
  }
//poco portugues  
console.log("a raiz cúbica é: ", raizCubica(64));


function multiplicacion(a,b){
	return a*b;
}

console.log("Multiplicacion 5*3: ", multiplicacion(5,3));

function division(a,b){
	if(b != 0)return a/b;
	return "Error, división entre cero indefinida.";
}

console.log("Division 10/2: ", division(10,2));