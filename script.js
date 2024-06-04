let words = [
    { word: "elephant", hint: "Large mammal with a trunk" },
    { word: "sunflower", hint: "Yellow flower that faces the sun" },
    { word: "keyboard", hint: "Input device for computers" },
    { word: "guitar", hint: "Musical instrument with strings" },
    { word: "mountain", hint: "Tall landform with peaks" },
    { word: "butterfly", hint: "Insect with colorful wings" },
    { word: "telephone", hint: "Device used for communication" },
    { word: "umbrella", hint: "Protects from rain or sun" },
    { word: "camera", hint: "Device used to capture images" },
    { word: "piano", hint: "Musical instrument with black and white keys" },
    { word: "cupcake", hint: "Small cake often topped with icing" },
    { word: "tiger", hint: "Striped feline predator" },
    { word: "ocean", hint: "Vast body of saltwater" },
    { word: "bicycle", hint: "Two-wheeled vehicle" },
    { word: "fireworks", hint: "Colorful explosions in the sky" },
    { word: "pizza", hint: "Italian dish with cheese and toppings" },
    { word: "ballet", hint: "Form of dance characterized by grace and precision" },
    { word: "volcano", hint: "Mountain that erupts with lava and ash" },
    { word: "moonlight", hint: "Light from the moon" },
    { word: "chocolate", hint: "Sweet brown treat made from cacao" },
    { word: "butterfly", hint: "Insect with colorful wings" },
    { word: "telephone", hint: "Device used for communication" },
    { word: "umbrella", hint: "Protects from rain or sun" },
    { word: "camera", hint: "Device used to capture images" },
    { word: "piano", hint: "Musical instrument with black and white keys" },
    { word: "cupcake", hint: "Small cake often topped with icing" },
    { word: "tiger", hint: "Striped feline predator" },
    { word: "ocean", hint: "Vast body of saltwater" },
    { word: "bicycle", hint: "Two-wheeled vehicle" },
    { word: "fireworks", hint: "Colorful explosions in the sky" },
    { word: "pizza", hint: "Italian dish with cheese and toppings" },
    { word: "ballet", hint: "Form of dance characterized by grace and precision" },
    { word: "volcano", hint: "Mountain that erupts with lava and ash" },
    { word: "moonlight", hint: "Light from the moon" },
    { word: "chocolate", hint: "Sweet brown treat made from cacao" },
    { word: "butterfly", hint: "Insect with colorful wings" },
    { word: "telephone", hint: "Device used for communication" },
    { word: "umbrella", hint: "Protects from rain or sun" },
    { word: "camera", hint: "Device used to capture images" },
    { word: "piano", hint: "Musical instrument with black and white keys" },
    { word: "cupcake", hint: "Small cake often topped with icing" },
    { word: "tiger", hint: "Striped feline predator" },
    { word: "ocean", hint: "Vast body of saltwater" },
    { word: "bicycle", hint: "Two-wheeled vehicle" },
    { word: "fireworks", hint: "Colorful explosions in the sky" },
    { word: "pizza", hint: "Italian dish with cheese and toppings" },
    { word: "ballet", hint: "Form of dance characterized by grace and precision" },
    { word: "volcano", hint: "Mountain that erupts with lava and ash" },
    { word: "moonlight", hint: "Light from the moon" },
    { word: "chocolate", hint: "Sweet brown treat made from cacao" },
    { word: "butterfly", hint: "Insect with colorful wings" },
    { word: "telephone", hint: "Device used for communication" },
    { word: "umbrella", hint: "Protects from rain or sun" },
    { word: "camera", hint: "Device used to capture images" },
    { word: "piano", hint: "Musical instrument with black and white keys" },
    { word: "cupcake", hint: "Small cake often topped with icing" },
    { word: "tiger", hint: "Striped feline predator" },
    { word: "ocean", hint: "Vast body of saltwater" },
    { word: "bicycle", hint: "Two-wheeled vehicle" },
    { word: "fireworks", hint: "Colorful explosions in the sky" },
    { word: "pizza", hint: "Italian dish with cheese and toppings" },
    { word: "ballet", hint: "Form of dance characterized by grace and precision" },
    { word: "volcano", hint: "Mountain that erupts with lava and ash" },
    { word: "moonlight", hint: "Light from the moon" },
    { word: "chocolate", hint: "Sweet brown treat made from cacao" },
    { word: "giraffe", hint: "Tall African mammal with a long neck" },
    { word: "rainbow", hint: "Colorful arc in the sky after rain" },
    { word: "butter", hint: "Yellow dairy product made from cream" },
    { word: "diamond", hint: "Hard, precious stone often used in jewelry" },
    { word: "zeppelin", hint: "Large airship used for transport" },
    { word: "dragon", hint: "Mythical creature with wings and fire breath" },
    { word: "beach", hint: "Sandy shore by the sea" },
    { word: "sunrise", hint: "Dawn; the time when the sun appears above the horizon" },
    { word: "waterfall", hint: "Flowing cascade of water" },
    { word: "octopus", hint: "Sea creature with eight tentacles" },
    { word: "candle", hint: "Wax stick with a wick that is lit for illumination" },
    { word: "basketball", hint: "Sport played with a round ball and hoop" },
    { word: "jungle", hint: "Thick, tropical forest" },
    { word: "rocket", hint: "Vehicle used for space travel" },
    { word: "treasure", hint: "Valuable items hidden or buried" },
    { word: "moonshine", hint: "Illegally distilled alcohol" },
    { word: "castle", hint: "Fortified medieval building" },
    { word: "blossom", hint: "Flower in bloom" },
    { word: "planet", hint: "Large celestial body that orbits a star" },
    { word: "garden", hint: "Area of land planted with flowers or vegetables" },
    { word: "paradise", hint: "Perfect place of happiness and bliss" },
    { word: "robot", hint: "Mechanical device capable of performing tasks automatically" },
    { word: "shark", hint: "Predatory fish with sharp teeth" },
    { word: "raindrop", hint: "Single drop of rain" },
    { word: "carousel", hint: "Merry-go-round amusement ride" },
    { word: "unicorn", hint: "Mythical horse-like creature with a horn" },
    { word: "harmony", hint: "Agreement in feeling or opinion" },
    { word: "cactus", hint: "Spiny desert plant" },
    { word: "penguin", hint: "Flightless bird found in the Southern Hemisphere" },
    { word: "breeze", hint: "Gentle wind" },
    { word: "echo", hint: "Repetition of sound caused by reflection" },
    { word: "glacier", hint: "Large mass of ice moving slowly down a slope" },
    { word: "comet", hint: "Celestial object with a tail, often seen in the night sky" },
    { word: "sunset", hint: "The time when the sun disappears below the horizon" },
    { word: "dragonfly", hint: "Insect with long body and transparent wings" },
    { word: "volleyball", hint: "Sport played with a ball over a net" },
    { word: "campfire", hint: "Outdoor fire used for warmth or cooking" },
    { word: "sunshine", hint: "Light and warmth from the sun" },
    { word: "butterfly", hint: "Insect with colorful wings" },
    { word: "telephone", hint: "Device used for communication" },
    { word: "umbrella", hint: "Protects from rain or sun" },
    { word: "camera", hint: "Device used to capture images" },
    { word: "piano", hint: "Musical instrument with black and white keys" },
    { word: "cupcake", hint: "Small cake often topped with icing" },
    { word: "tiger", hint: "Striped feline predator" },
    { word: "ocean", hint: "Vast body of saltwater" },
    { word: "bicycle", hint: "Two-wheeled vehicle" },
    { word: "fireworks", hint: "Colorful explosions in the sky" }
  ];
  




let shuffledWords = shuffleArray([...words]); // Randomly shuffle the words array
let currentWordIndex = 0;
let score = 0;
let timer;  

function shuffleArray(words) {
    return words.sort(() => Math.random() - 0.5);
}

function scrambleWord(word) {
    return word.split('').sort(() => Math.random() - 0.5).join('');
}   


const startBtn = document.getElementById('start-btn');
startBtn.addEventListener('click', startGame);

function startGame() {
    // Disable the start button to prevent multiple game sessions
    // document.body.className = 'light-theme';
    setTheme('default-theme');

    startBtn.disabled = true;
    // Reset the game by displaying the first word
    resetGame();
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
                // currentWordIndex = (currentWordIndex + 1) % shuffledWords.length;
                resetTimer(); // Reset the timer and move to the next word
            }
        }, 1000);
    }

    wordContainer.classList.add('fadeInOut');
}

function resetGame() {
    // Enable the start button for a new game session
    startBtn.disabled = false;

    // document.body.className = 'light-theme';
    setTheme('default-theme');


    
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
    } else if (userGuess == '') {
        showPopup('Please input a word');
    } else {
        showPopup('Incorrect. Try again!');
        score -= 5;
    }

    // displayWord(); 
}





// Add the event listener for the "Check Word" button
    const checkWordBtn = document.getElementById('check-word');
    checkWordBtn.addEventListener('click', checkWord);

    // New function to check the current word
    function checkWord() {
        const currentWord = shuffledWords[currentWordIndex].word;
        showPopup(`The correct word is "${currentWord}".`);
    }






// Add this function to toggle between themes
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('light-theme');
    body.classList.toggle('dark-theme');
}


function setTheme(theme) {
    document.body.className = theme;
}