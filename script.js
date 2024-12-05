$(document).ready(function () {
   const easyWords = [
    { word: "Cat", translation: "кіт", explanation: "Кішка — це домашня тварина." },
    { word: "Dog", translation: "собака", explanation: "Собака — це вірний друг людини." },
    { word: "Apple", translation: "яблуко", explanation: "Яблуко — це плід дерева, який зазвичай має червоний або зелений колір." },
    { word: "House", translation: "будинок", explanation: "Будинок — це місце для проживання людей." },
    { word: "Car", translation: "авто", explanation: "Автомобіль — це транспортний засіб на колесах, що використовується для перевезення людей." },
    { word: "Tree", translation: "дерево", explanation: "Дерево — це рослина з дерев'яним стовбуром." },
    { word: "Book", translation: "книга", explanation: "Книга — це друковане або написане видання, що містить текст, зображення або іншу інформацію." },
    { word: "Pen", translation: "ручка", explanation: "Ручка — це інструмент для написання або малювання." },
    { word: "Sun", translation: "сонце", explanation: "Сонце — це зірка, навколо якої обертається наша планета." },
    { word: "Moon", translation: "місяць", explanation: "Місяць — це природний супутник Землі." }
];
const mediumWords = [
    { word: "Mountain", translation: "гора", explanation: "Гора — це велике підвищення земної поверхні." },
    { word: "Computer", translation: "комп'ютер", explanation: "Комп'ютер — це електронний пристрій для обробки інформації." },
    { word: "Library", translation: "бібліотека", explanation: "Бібліотека — це місце для зберігання книг і інших джерел інформації." },
    { word: "Education", translation: "освіта", explanation: "Освіта — це процес отримання знань, навичок та цінностей." },
    { word: "Environment", translation: "навколишнє середовище", explanation: "Навколишнє середовище — це сукупність природних умов, що оточують людину." },
    { word: "Universe", translation: "всесвіт", explanation: "Всесвіт — це все, що існує, включаючи зірки, планети та галактики." },
    { word: "Scientist", translation: "вчений", explanation: "Вчений — це людина, яка займається науковими дослідженнями." },
    { word: "Technology", translation: "технологія", explanation: "Технологія — це сукупність методів і засобів для виробництва чогось." },
    { word: "Medicine", translation: "медицина", explanation: "Медицина — це наука про здоров'я людини та боротьбу з хворобами." },
    { word: "Economy", translation: "економіка", explanation: "Економіка — це система виробництва, розподілу і споживання товарів і послуг." }
];
const hardWords = [
    { word: "Metaphysics", translation: "метафізика", explanation: "Метафізика — це філософська дисципліна, що вивчає природу реальності, існування та простір." },
    { word: "Quantum", translation: "квантовий", explanation: "Квантовий — це термін, що описує явища, які пов'язані з фізикою мікрочасток, таких як електрони." },
    { word: "Evolution", translation: "еволюція", explanation: "Еволюція — це процес змін, який відбувається в живих організмах протягом тривалого часу." },
    { word: "Cosmology", translation: "космологія", explanation: "Космологія — це наука про походження та структуру Всесвіту." },
    { word: "Neuroscience", translation: "нейронаука", explanation: "Нейронаука — це наука, що вивчає нервову систему та її функціонування." },
    { word: "Antibiotic", translation: "антибіотик", explanation: "Антибіотик — це речовина, що вбиває або пригнічує ріст бактерій." },
    { word: "Philanthropy", translation: "філантропія", explanation: "Філантропія — це діяльність, спрямована на поліпшення благополуччя людей через благодійні дії." },
    { word: "Sociology", translation: "соціологія", explanation: "Соціологія — це наука про суспільство, соціальні відносини та інститути." },
    { word: "Artificial", translation: "штучний", explanation: "Штучний — це створений людиною, на відміну від природного." },
    { word: "Cryptocurrency", translation: "криптовалюта", explanation: "Криптовалюта — це цифрові або віртуальні гроші, що використовують криптографію для забезпечення безпеки транзакцій." }
];
    let words = []; // Масив для поточних слів
    let currentWordIndex = 0;
    let correctCount = 0;
    let incorrectCount = 0;
 // Функція для перемішування масиву
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Обмін елементів
        }
    }
  // Функція для завантаження слів на основі вибраного рівня
    function loadWords(level) {
        switch(level) {
            case "easy":
                words = [...easyWords];
                break;
            case "medium":
                words = [...easyWords, ...mediumWords];
                break;
            case "hard":
                words = [...easyWords, ...mediumWords, ...hardWords];
                break;
        }
        shuffleArray(words); // Перемішуємо слова після вибору рівня
        showWord(); // Показуємо перше слово
    }
// Функція для показу слова
    function showWord() {
        const wordData = words[currentWordIndex];
        $('#word').text(wordData.word);
        $('#translation').val('');
        $('#word-card').removeClass('show');
        setTimeout(function () {
            $('#word-card').addClass('show');
        }, 300);
    }
   // Функція для перемішування слів
    function shuffleWords() {
        words.sort(() => Math.random() - 0.5);
    }
    // Функція для показу слова
    function showWord() {
        const wordData = words[currentWordIndex];
        $('#word').text(wordData.word);
        $('#translation').val('');
        $('#word-card').removeClass('show');
        setTimeout(function () {
            $('#word-card').addClass('show');
        }, 300);
    }

   // Перевірка перекладу
    $('#check-btn').click(function () {
        const inputTranslation = $('#translation').val().trim();
        const correctTranslation = words[currentWordIndex].translation;

        if (inputTranslation === "") {
            alert("Будь ласка, введіть переклад перед перевіркою!");
            return;
        }

        if (inputTranslation.toLowerCase() === correctTranslation.toLowerCase()) {
            correctCount++;
            $('#correct-count').text(correctCount);
        } else {
            incorrectCount++;
            $('#incorrect-count').text(incorrectCount);
        }

        const progressPercentage = ((currentWordIndex + 1) / words.length) * 100;
        $('#progress-bar').css('width', `${progressPercentage}%`);

        currentWordIndex++;
if (currentWordIndex < words.length) {
    showWord();
} else {
    showResults(correctCount, $('#difficulty').val(), words.length); 
}

    });

 // Функція для визначення рівня знань
function calculateLevel(correctAnswers, difficultyLevel) {
    let level;

    if (difficultyLevel === "easy") { 
        if (correctAnswers <= 3) {
            level = "Початківець";
        } else if (correctAnswers <= 7) {
            level = "Середній";
        } else {
            level = "Просунутий";
        }
    } else if (difficultyLevel === "medium") { 
        if (correctAnswers <= 6) {
            level = "Початківець";
        } else if (correctAnswers <= 13) {
            level = "Середній";
        } else {
            level = "Просунутий";
        }
    } else if (difficultyLevel === "hard") { 
        if (correctAnswers <= 9) {
            level = "Початківець";
        } else if (correctAnswers <= 19) {
            level = "Середній";
        } else {
            level = "Просунутий";
        }
    } 
    return level;
}

function showResults(correctAnswers, difficultyLevel, totalWords) {
    const resultMessage = `Ви відповіли ${correctAnswers} з ${totalWords} слів!`;
    const levelMessage = `Рівень знань: ${calculateLevel(correctAnswers, difficultyLevel)}`;
    $('#result-message').text(resultMessage);
    $('#level-message').text(levelMessage); 
    $('#modal').show();
}





   
    $('#restart-btn').click(function () {
		shuffleWords(); // Перемішуємо слова
        currentWordIndex = 0;
        correctCount = 0;
        incorrectCount = 0;
        $('#correct-count').text(correctCount);
        $('#incorrect-count').text(incorrectCount);
        $('#progress-bar').css('width', '0%');
        $('#modal').hide();
        showWord();
    });
 // Почати гру заново
    $('#restart-btn1').click(function () {
		shuffleWords(); // Перемішуємо слова
        currentWordIndex = 0;
        correctCount = 0;
        incorrectCount = 0;
        $('#correct-count').text(correctCount);
        $('#incorrect-count').text(incorrectCount);
        $('#progress-bar').css('width', '0%');
        $('#modal').hide();
        showWord();
    });
// Початкове завантаження слів при виборі рівня
    $('#difficulty').change(function() {
        const selectedDifficulty = $(this).val();
        loadWords(selectedDifficulty);
    });
	 // Завантажити слова для початкового рівня
    loadWords($('#difficulty').val());  // Завантажуємо вибраний рівень при старті
    // Відкриття списку слів
    $('#open-list-btn').click(function () {
        $('#word-list-modal').show();
        const wordList = $('#word-list');
        wordList.empty();

        words.forEach(word => {
            const listItem = $('<li></li>');
            listItem.append(`<span>${word.word}</span><p>${word.explanation}</p>`);
            wordList.append(listItem);
        });
    });

    // Закрити список слів
    function closeWordList() {
        $('#word-list-modal').hide();
    }

    // Подія для кнопки закриття
    $('#word-list-modal button').click(function () {
        closeWordList();
    });

    // Початкове слово
    showWord();
	 shuffleWords(); // Перемішуємо слова
});
