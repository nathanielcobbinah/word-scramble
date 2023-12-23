const words = [
    {
        word: "javascript", 
        hint: "A programming language used for the web"
    },
    {
        word: "html",
        hint: "Markup language for creating web pages"
    },
    {
        word: "css",
        hint: "Style sheet language for describing the look and formatting of a document"
    }
];

let currentWordIndex = 0;
let score = 0;
let timer;

function scrambleWord(word) {
    return word.split('').sort(() => Math.random() - 0.5).join('');
}

function displayWord() {
    const wordContainer = document.getElementById('word-container');
    const hintContainer = document.getElementById('hint-container');
    const scoreContainer = document.getElementById('score-container');
    const timerContainer = document.getElementById("timer-container");
    const highestScoreContainer = document.getElementById('highest-score-container'); 


    const currentWord = words[currentWordIndex];
    const scrambledWord = scrambleWord(currentWord.word);
    scoreContainer.textContent = `Score: ${score}`; 
    wordContainer.textContent = scrambledWord;
    hintContainer.textContent = `Hint: ${currentWord.hint}`;
    highestScoreContainer.textContent = `Highest Score: ${getHighestScore()}`; 
    
    let timeLimit = 20; // in seconds
    timerContainer.textContent = `Time: ${timeLimit}`;

    // Start the timer countdown
    timer = setInterval(function () {
        timeLimit--;
        timerContainer.textContent = `Time: ${timeLimit}`;
        
        // Check if time is up
        if (timeLimit <= 0) {
            clearInterval(timer);
            showPopup('Time is up! Try the next word.');
            score -= 5; // Deduct points for running out of time
            displayWord(); // Move to the next word
        }
    }, 1000);
    
}

function scramble() {
    clearInterval(timer);
    currentWordIndex = (currentWordIndex + 1) % words.length;
    displayWord();
}
displayWord();

    function getHighestScore() {
        return localStorage.getItem('highestScore') || 0;
    }

    // Function to set the highest score in local storage
    function setHighestScore(newScore) {
        localStorage.setItem('highestScore', newScore);
    }

function showPopup(message) {
    const popup = document.getElementById('popup');
    const popupContent = document.getElementById('popup-content');
    const closeBtn = document.getElementById('close-btn');

    popupContent.textContent = message;
    popup.style.display = 'block';

    closeBtn.onclick = function() {
        popup.style.display = 'none';
        guessInput.value = '';
        scramble();
    };
}

function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const userGuess = guessInput.value.toLowerCase();
    const currentWord = words[currentWordIndex].word;

    if (userGuess === currentWord) {
        clearInterval(timer); // Clear the timer for the correct guess
        showPopup('Correct! Well done.');
        score += 10;

        if (score > getHighestScore()) {
            setHighestScore(score);
        }
        
    } else {
        showPopup('Incorrect. Try again!');
        score -= 5;
    }

    displayWord(); // Display the next word after checking the guess
}





