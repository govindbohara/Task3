const calculateShortestTime = (n, m, a, b, c, d, travelMethod = 'Elevator') => {
	const floorDiff = Math.abs(m - n);
	if (travelMethod === 'Walking') {
		const totalTimeForWalk = n === 0 ? 0 : n * d;

		return totalTimeForWalk;
	}
	if (travelMethod === 'Elevator') {
		const totalTimeForElevator = n === 0 ? 0 : floorDiff * a + b + c + a * n + b;

		return totalTimeForElevator;
	}
	const timeForBoth = d + b + c + m * a + b;

	return timeForBoth;
};

const timeForWalk = calculateShortestTime(4, 3, 2, 3, 4, 5, 'Walking');
const timeForElevator = calculateShortestTime(4, 3, 2, 3, 4, 5, 'Elevator');
const timeForBoth = calculateShortestTime(4, 3, 2, 3, 4, 5, 'Both');
const shortestDistance = Math.min(timeForWalk, timeForElevator, timeForBoth);
console.log(`The shortest time is ${shortestDistance} seconds`);
