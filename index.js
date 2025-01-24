function diceRoller() {
	const numOfDice = document.getElementById("numOfDice").value;
	const diceResult = document.getElementById("diceResult");
	const diceImage = document.getElementById("diceImages");
    const sumOfDice = document.getElementById("sumOfDice");
	const values = [];
	const images = [];
    let sum = 0;

	for (i = 0; i < numOfDice; i++) {
		const value = Math.floor(Math.random() * 6) + 1;
		values.push(value);
		images.push(`<img src="dice_images/${value}.png" alt="Dice ${value}">`);
	}

    values.forEach((item) => {
        sum += item;
    });
    
    sumOfDice.innerHTML = `Total sum: ${sum}`;
    diceResult.textContent = `Dice: ${values.join(" - ")}`;
	diceImage.innerHTML = images.join("");
}

