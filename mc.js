// How many times should a random number from [0, 1] be drawn to have it sum over 1?

function trial() {
    var count = 0;
    var sum = 0;
    while (sum <= 1) {
	sum += Math.random();
	count++;
    }
    return count;
}

function monteCarlo(x) {
    var total = 0;
    for (var i = 0; i < x; i++) {
	total += trial();
    }
    return total / x;
}

console.log(monteCarlo(1000000));
