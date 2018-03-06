/**
 * Calculates the next posistion of a racer using the current position
 *
 * @export
 * @param {number} currentPosition
 * @returns {number}
 */
export function calculateRacerPosition(currentPosition: number): number {
	return currentPosition + Math.max(Math.random() * 10);
}