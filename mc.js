function trial() {
    var count = 0, sum = 0;
    while (sum <= 1) {
	sum += Math.random();
	count++;
    }
    return count;
}

function monteCarlo(n) {
    var total = 0;
    for (var i = 0; i < n; i++) {
	total += trial();
    }
    return total / n;
}

console.log(monteCarlo(1000000));
