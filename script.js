let words = [
    {
        word: "coffee",
        hint: "A popular beverage made from roasted coffee beans"
    },
    {
        word: "book",
        hint: "A set of written or printed pages, usually bound with a protective cover"
    },
    {
        word: "phone",
        hint: "An electronic device used for making calls, sending messages, and more"
    },
    {
        word: "music",
        hint: "Art form and cultural activity whose medium is sound"
    },
    {
        word: "friend",
        hint: "A person whom one knows and with whom one has a bond of mutual affection"
    },
    {
        word: "work",
        hint: "Activity involving mental or physical effort done to achieve a purpose"
    },
    {
        word: "home",
        hint: "A place where one lives, especially as a member of a family or household"
    },
    {
        word: "food",
        hint: "Any nutritious substance that people or animals eat or drink to maintain life and growth"
    },
    {
        word: "travel",
        hint: "To go on a trip or journey, typically for leisure or vacation"
    },
    {
        word: "sun",
        hint: "The star around which Earth and other planets orbit, providing light and heat"
    },
    {
        word: "love",
        hint: "An intense feeling of deep affection or a great interest and pleasure in something"
    },
    {
        word: "smile",
        hint: "A pleased, kind, or amused facial expression, typically with the corners of the mouth turned up"
    },
    {
        word: "park",
        hint: "A large public green area in a town, used for recreation"
    },
    {
        word: "family",
        hint: "A group consisting of parents and children living together in a household"
    },
    {
        word: "game",
        hint: "An activity that one engages in for amusement or fun"
    },
    {
        word: "weather",
        hint: "The state of the atmosphere at a place and time as regards heat, dryness, sunshine, wind, rain, etc."
    },
    {
        word: "dance",
        hint: "To move rhythmically to music, typically following a set sequence of steps"
    },
    {
        word: "holiday",
        hint: "A day of festivity or recreation when no work is done"
    },
    {
        word: "movie",
        hint: "A story or event recorded by a camera as a set of moving images and shown in a theater or on television"
    },
    {
        word: "health",
        hint: "The state of being free from illness or injury"
    },
    {
        word: "coffee",
        hint: "A popular beverage made from roasted coffee beans"
    },
    {
        word: "book",
        hint: "A set of written or printed pages, usually bound with a protective cover"
    },
    {
        word: "phone",
        hint: "An electronic device used for making calls, sending messages, and more"
    },
    {
        word: "music",
        hint: "Art form and cultural activity whose medium is sound"
    },
    {
        word: "friend",
        hint: "A person whom one knows and with whom one has a bond of mutual affection"
    },
    {
        word: "work",
        hint: "Activity involving mental or physical effort done to achieve a purpose"
    },
    {
        word: "home",
        hint: "A place where one lives, especially as a member of a family or household"
    },
    {
        word: "food",
        hint: "Any nutritious substance that people or animals eat or drink to maintain life and growth"
    },
    {
        word: "travel",
        hint: "To go on a trip or journey, typically for leisure or vacation"
    },
    {
        word: "sun",
        hint: "The star around which Earth and other planets orbit, providing light and heat"
    },
    {
        word: "love",
        hint: "An intense feeling of deep affection or a great interest and pleasure in something"
    },
    {
        word: "smile",
        hint: "A pleased, kind, or amused facial expression, typically with the corners of the mouth turned up"
    },
    {
        word: "park",
        hint: "A large public green area in a town, used for recreation"
    },
    {
        word: "family",
        hint: "A group consisting of parents and children living together in a household"
    },
    {
        word: "game",
        hint: "An activity that one engages in for amusement or fun"
    },
    {
        word: "weather",
        hint: "The state of the atmosphere at a place and time as regards heat, dryness, sunshine, wind, rain, etc."
    },
    {
        word: "dance",
        hint: "To move rhythmically to music, typically following a set sequence of steps"
    },
    {
        word: "holiday",
        hint: "A day of festivity or recreation when no work is done"
    },
    {
        word: "movie",
        hint: "A story or event recorded by a camera as a set of moving images and shown in a theater or on television"
    },
    {
        word: "health",
        hint: "The state of being free from illness or injury"
    },
    {
        word: "car",
        hint: "A road vehicle, typically with four wheels, powered by an internal combustion engine and able to carry a small number of people"
    },
    {
        word: "water",
        hint: "A transparent, tasteless, odorless, and nearly colorless chemical substance that is essential for all known forms of life"
    },
    {
        word: "computer",
        hint: "An electronic device for storing and processing data, typically in binary form, according to instructions given to it in a variable program"
    },
    {
        word: "watch",
        hint: "A small timepiece worn typically on a strap on one's wrist"
    },
    {
        word: "school",
        hint: "An institution for educating children"
    },
    {
        word: "money",
        hint: "A current medium of exchange in the form of coins and banknotes; coins and banknotes collectively"
    },
    {
        word: "garden",
        hint: "A piece of ground, often near a house, used for growing flowers, fruit, or vegetables"
    },
    {
        word: "sleep",
        hint: "A condition of body and mind that typically recurs for several hours every night, in which the nervous system is inactive, the eyes closed, the postural muscles relaxed, and consciousness practically suspended"
    },
    {
        word: "bag",
        hint: "A flexible container with an opening at the top, used for carrying things"
    },
    {
        word: "birthday",
        hint: "The anniversary of the day on which a person was born"
    }
];




let shuffledWords = shuffleArray([...words]); // Randomly shuffle the words array
let currentWordIndex = 0;
let score = 0;
let timer;  

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

function scrambleWord(word) {
    return word.split('').sort(() => Math.random() - 0.5).join('');
}


const startBtn = document.getElementById('start-btn');
startBtn.addEventListener('click', startGame);

function startGame() {
    // Disable the start button to prevent multiple game sessions
    startBtn.disabled = true;
    
    // Start the game by displaying the first word
    displayWord();
}



function displayWord() {
    const wordContainer = document.getElementById('word-container');
    const hintContainer = document.getElementById('hint-container');
    const scoreContainer = document.getElementById('score-container');
    const timerContainer = document.getElementById("timer-container");
    const highestScoreContainer = document.getElementById('highest-score-container');

    // Shuffle the array only when all words have been shown
    if (currentWordIndex === 0) {
        shuffledWords = shuffleArray([...words]);
    }

    const currentWord = shuffledWords[currentWordIndex];
    const scrambledWord = scrambleWord(currentWord.word);
    scoreContainer.textContent = `Score: ${score}`;
    wordContainer.textContent = scrambledWord;
    hintContainer.textContent = `Hint: ${currentWord.hint}`;
    highestScoreContainer.textContent = `Highest Score: ${getHighestScore()}`;

    if (timer === undefined) {
        let timeLimit = 20; // in seconds
        timerContainer.textContent = `Time: ${timeLimit}`;

        // Start the timer countdown
        timer = setInterval(function () {
            timeLimit--;
            timerContainer.textContent = `Time: ${timeLimit}`;

            // Check if time is up
            if (timeLimit <= 0) {
                clearInterval(timer);
                showPopup(`Time is up! The correct word was "${currentWord.word}". Try the next word.`);
                score -= 5; // Deduct points for running out of time
                currentWordIndex = (currentWordIndex + 1) % shuffledWords.length;
                resetTimer(); // Reset the timer and move to the next word
            }
        }, 1000);
    }

    wordContainer.classList.add('fadeInOut');
}

function resetGame() {
    // Enable the start button for a new game session
    startBtn.disabled = false;
    
    // Reset game variables
    clearInterval(timer);
    timer = undefined;
    currentWordIndex = 0;
    score = 0;
    displayWord(); // Display the first word
}


function scramble() {
    clearInterval(timer);
    currentWordIndex = (currentWordIndex + 1) % shuffledWords.length;
    displayWord();
}

function resetTimer() {
    clearInterval(timer);
    timer = undefined;
    if (currentWordIndex < shuffledWords.length) {
        displayWord(); // Display the next word
    } else {
        // End of the game, show a congratulatory message or perform other end-of-game actions
        showPopup(`Congratulations! You completed the game with a score of ${score}.`);
        resetGame(); // Reset the game for a new session
    }
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
        resetTimer();
    };
    popup.classList.add('fadeInOut');
}

function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const userGuess = guessInput.value.toLowerCase();
    const currentWord = shuffledWords[currentWordIndex].word;

    if (userGuess === currentWord) {
        clearInterval(timer);
        showPopup('Correct! Well done.');
        score += 10;

        if (score > getHighestScore()) {
            setHighestScore(score);
        }
        
    } else {
        showPopup('Incorrect. Try again!');
        score -= 5;
    }

    displayWord(); 
}