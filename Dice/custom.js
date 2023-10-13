document.getElementById("player1").disabled = false
document.getElementById("player2").disabled = true

function roll(e) {
    console.log(e)
    let currentImageIndex = 0;
    const images = document.querySelectorAll('.image');
    let intervalId = null;
    let totalScore;


    function hideCurrentImage() {
        images[currentImageIndex].classList.add('hidden');
    }

    function showNextImage() {
        hideCurrentImage();
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].classList.remove('hidden');
    }
    startImageRotation()

    function startImageRotation() {
        // Start the image rotation with a one-second interval
        intervalId = setInterval(showNextImage, 200);

    }

    setTimeout(stopImageRotation, 2000);

    function stopImageRotation() {
        // Stop the image rotation by clearing the interval
        clearInterval(intervalId);
        images[currentImageIndex].classList.add('hidden');

        rndInt = Math.floor(Math.random() * 6) + 1
        console.log(rndInt)
        document.getElementById(rndInt).className = "image"
        if (e.value == 1) {
            playerScore = +document.getElementById("playerScore1").innerHTML
            totalScore = document.getElementById("playerScore1").innerHTML = playerScore + rndInt
            document.getElementById("player1").disabled = true
            document.getElementById("player2").disabled = false
        } else {
            playerScore = +document.getElementById("playerScore2").innerHTML
            totalScore = document.getElementById("playerScore2").innerHTML = playerScore + rndInt
            document.getElementById("player2").disabled = true
            document.getElementById("player1").disabled = false
        }

        setTimeout(() => {
            document.getElementById(rndInt).className = "image hidden"
            console.log(totalScore)
            if (totalScore >= 30) {
                let winnerField = document.getElementById("diceField")
                winnerField.innerHTML = e.value == 1 ? "Player 1 is the winner" : "Player 2 is the winner"
                winnerField.style.fontSize = "30px"
                winnerField.style.fontWeight = "bolder"
                winnerField.style.paddingTop = "115px"
                winnerField.style.textAlign = "center"
                document.getElementById("player2").disabled = true
                document.getElementById("player1").disabled = true
                document.getElementById("resetButton").style.display = "block"

            }
        }, 1000);


    }



}

function reloadFunction(){
    window.location.reload();
}