function guessNumber() {
    let randomNumber = Math.floor(Math.random() * 2); // Số ngẫu nhiên 0 hoặc 1
    let userGuess = -1;

    while (userGuess != randomNumber) {
        userGuess = prompt("Hãy đoán số (0 hoặc 1):");
        if (userGuess == randomNumber) {
            alert("Chúc mừng! Bạn đã đoán đúng.");
        } else {
            alert("Sai rồi! Hãy thử lại.");
        }
    }
}

function guessNumber() {
    let randomNumber = Math.floor(Math.random() * 10) + 1; // Số ngẫu nhiên từ 1 đến 10
    let userGuess = -1;

    while (userGuess != randomNumber) {
        userGuess = prompt("Hãy đoán số (từ 1 đến 10):");
        if (userGuess == randomNumber) {
            alert("Chúc mừng! Bạn đã đoán đúng.");
        } else {
            alert("Sai rồi! Hãy thử lại.");
        }
    }
}

