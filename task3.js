const calculateShortestTime = (n, m, a, b, c, d, _case, travelMethod = 'Elevator') => {
	_case && console.log(`=================${_case}==============`);
	const floorDiff = Math.abs(m - n);
	if (travelMethod === 'Walking') {
		const totalTimeForWalk = n === 0 ? 0 : n * d;
		return console.log(`Total time for walking : ${totalTimeForWalk} Seconds`);
	}
	if (travelMethod === 'Elevator') {
		const totalTimeForElevator = n === 0 ? 0 : floorDiff * a + b + c + a * n + b;
		return console.log(`Total time for elevator : ${totalTimeForElevator} seconds`);
	}
	const timeForBoth = d + b + c + m * a + b;
	console.log(`Time for both walk and elevator combined : ${timeForBoth}`);
};
calculateShortestTime(4, 5, 1, 2, 3, 10, 'Case 1');
calculateShortestTime(0, 5, 1, 2, 3, 10, 'Case 2');
calculateShortestTime(4, 3, 2, 3, 4, 5, 'Case 3', 'Walking');
calculateShortestTime(7, 6, 3, 1, 1, 4, 'Case 4', 'Elevator');
calculateShortestTime(7, 6, 3, 1, 1, 4, 'Case 5', 'Both');
calculateShortestTime(7, 6, 3, 1, 1, 4, 'Case 6', 'Walking');
calculateShortestTime(7, 6, 3, 1, 1, 4, 'Case 6', 'Elevator');
