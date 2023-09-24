export function checkCollision(elem1, elem2, expandTop = 40) {
	if (elem1 && elem2) {
		const rect1 = elem1.getBoundingClientRect();
		const rect2 = elem2.getBoundingClientRect();

		const check = !(
			rect1.right < rect2.left ||
			rect1.left > rect2.right ||
			rect1.bottom < rect2.top ||
			rect1.top + expandTop > rect2.bottom
		);

		return check;
	}
	return false;
}
