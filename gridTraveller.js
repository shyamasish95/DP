// A traveller on a 2d grid, begin in the to-left corner and your goal is to reach bottom -right corner. You only move in
// down or right.

//In how many ways can you travel to the goal on a grid with dimensions
// of m*n?

/*NON MEMOIZED  */
const gridTraveller = (m, n) => {
	if (m === 1 && n === 1) return 1;
	if (m === 0 || n === 0) return 0;
	return gridTraveller(m - 1, n) + gridTraveller(m, n - 1);
}
//console.log(gridTraveller(3, 3))

/* MEMOIZED */

const gridTravellerMemo = (m, n, memo = {}) => {
	const key = m + '-' + n;
	// are the arguments in the memo
	if (key in memo) return memo[key];
	if (m === 1 && n === 1) return 1;
	if (m === 0 || n === 0) return 0;
	memo[key] = gridTravellerMemo(m - 1, n, memo) + gridTravellerMemo(m, n - 1, memo);
	return memo[key];
}
console.log(gridTravellerMemo(18, 18)); //2333606220