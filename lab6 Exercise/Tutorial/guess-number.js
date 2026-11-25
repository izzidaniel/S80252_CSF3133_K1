
//wajib match dengan nama function dalam html
function playgame() {

    // Math.floor = buang perpuluhan
    // Math.random = nombor rawak
    //*10 sebab 10...kalau sampai 50 buat * 50
    // takdok 1 = 0 - 9
    //ada + 1 = 1 - 10

    const randomNumber = Math.floor(Math.random() * 10) + 1; // Generate a random number between 1 and 10

    //10 untuk baca decimal number
    const userGuess = parseInt(prompt("Guess a number between 1 and 10!"),10);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        alert("Please enter a valid number between 1 and 10.");
        return;
    }

    if (userGuess === randomNumber) {
        alert("Good Work! You guessed it right");
    } else {
        alert(`Not matched! The correct number was "${randomNumber}"`);
    }

    //promp..
    //masukkn kalau if (gagal) alert("Not matched! The correct number was " + randomNumber);

}