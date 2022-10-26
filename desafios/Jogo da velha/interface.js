document.addEventListener("DOMContentLoaded", () => {
	let squares = document.querySelectorAll(".square");

	squares.forEach((square) => {
		square.addEventListener("click", handleClick);
	});
});

function handleClick(event) {
	let square = event.target;
	let position = square.id;

	console.log(playerTime);

	if (handleMove(position)) {
		setTimeout(() => {
			if (playerTime == 1) {
				alert("Swords win!");
			} else if (playerTime == 0) {
				alert("Shields wins!");
			}
		}, 10);
	}
	updateSquare(position);
}

function updateSquare(position) {
	let square = document.getElementById(position.toString());
	let symbol = board[position];
	square.innerHTML = `<div class='${symbol}'></div>`;
}
