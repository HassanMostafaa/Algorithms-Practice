const recursionFactorialNum = (n) => {
	if(n === 0){
		return 1;
	}
	return n * recursionFactorialNum(n-1)
}

/* n(5)
5 x n(4)
5 x 4 x n(3)
5 x 4 x 3 x n(2)
5 x 4 x 3 x 2 x n(1)
5 x 4 x 3 x 2 x 1 x [n(0) === returns 1;]
5 x 4 x 3 x 2 x 1 x 1 = 120
*/