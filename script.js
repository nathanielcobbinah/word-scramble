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

function scrambleWord(word) {
    return word.split('').sort(() => Math.random() - 0.5).join('');
}

function displayWord() {
    const wordContainer = document.getElementById('word-container');
    const hintContainer = document.getElementById('hint-container');

    const currentWord = words[currentWordIndex];
    const scrambledWord = scrambleWord(currentWord.word);

    wordContainer.textContent = scrambledWord;
    hintContainer.textContent = `Hint: ${currentWord.hint}`;
}

function scramble() {
    currentWordIndex = (currentWordIndex + 1) % words.length;
    displayWord();
}
displayWord();


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
        showPopup('Correct! Well done.');
    } else {
        showPopup('Incorrect. Try again!');
    }
}

