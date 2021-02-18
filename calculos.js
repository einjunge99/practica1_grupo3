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