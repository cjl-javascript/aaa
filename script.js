document.addEventListener('DOMContentLoaded', () => {
    // --- 数据生成 ---
    // 原始数据样本
    const sampleData = [
        { word: "こんにちは", reading: "konnichiwa", meaning: "你好", example: "こんにちは、田中さん。", videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" },
        { word: "ありがとう", reading: "arigatou", meaning: "谢谢", example: "プレゼントをありがとう。", videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" },
        { word: "さようなら", reading: "sayounara", meaning: "再见", example: "先生、さようなら。", videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" },
        { word: "すみません", reading: "sumimasen", meaning: "不好意思", example: "すみません、道を教えてください。", videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" },
        { word: "はい", reading: "hai", meaning: "是", example: "はい、分かりました。", videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
        { word: "いいえ", reading: "iie", meaning: "不", example: "いいえ、違います。", videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" },
        { word: "おはよう", reading: "ohayou", meaning: "早上好", example: "おはようございます。", videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4" },
        { word: "おやすみ", reading: "oyasumi", meaning: "晚安", example: "おやすみなさい。", videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" },
        { word: "食べる", reading: "taberu", meaning: "吃", example: "ご飯を食べる。", videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4" },
        { word: "飲む", reading: "nomu", meaning: "喝", example: "水を飲む。", videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" }
    ];

    // 生成2000个单词的模拟数据
    function generateDummyData(count) {
        const data = [];
        for (let i = 0; i < count; i++) {
            const sample = sampleData[i % sampleData.length];
            data.push({
                ...sample,
                word: `${sample.word}${i + 1}`,
                // 真实场景下，每个单词都应有唯一ID
                id: i 
            });
        }
        return data;
    }
    
    const vocabulary = generateDummyData(2000);

    // --- 获取 DOM 元素 ---
    const homeScreen = document.getElementById('home-screen');
    const flashcardScreen = document.getElementById('flashcard-screen');
    const backToHomeBtn = document.getElementById('back-to-home-btn');
    const wordList = document.getElementById('word-list');
    const searchInput = document.getElementById('search-input');
    const noResults = document.getElementById('no-results');
    
    const flashcard = document.getElementById('flashcard');
    const wordDisplay = document.getElementById('word-display');
    const readingDisplay = document.getElementById('reading-display');
    const meaningDisplay = document.getElementById('meaning-display');
    const exampleDisplay = document.getElementById('example-display');
    const videoPlayer = document.getElementById('video-player');
    const cardCounter = document.getElementById('card-counter');
    const progressBar = document.getElementById('progress-bar');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const flipBtn = document.getElementById('flip-btn');
    const flashcardContainer = document.getElementById('flashcard-container');

    // --- 状态变量 ---
    let currentIndex = 0;
    let isFlipped = false;
    let currentWordList = [...vocabulary];

    // --- 函数 ---

    // 渲染首页单词列表的函数
    function renderWordList(words) {
        wordList.innerHTML = '';
        if(words.length === 0){
            noResults.classList.remove('hidden');
        } else {
            noResults.classList.add('hidden');
        }

        words.forEach(item => {
            const li = document.createElement('li');
            li.className = 'p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors';
            // 使用真实数据中的唯一标识（此处用id模拟）
            li.dataset.id = item.id;
            li.innerHTML = `
                <div>
                    <p class="text-lg font-bold">${item.word}</p>
                    <p class="text-sm text-gray-500 dark:text-gray-400">${item.meaning}</p>
                </div>
                <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
            `;
            wordList.appendChild(li);
        });
    }

    // 更新卡片内容的函数
    function updateCard() {
        const currentWord = vocabulary[currentIndex];
        wordDisplay.textContent = currentWord.word;
        readingDisplay.textContent = currentWord.reading;
        meaningDisplay.textContent = currentWord.meaning;
        exampleDisplay.textContent = currentWord.example;
        videoPlayer.src = currentWord.videoUrl;
        videoPlayer.poster = `https://placehold.co/600x400/a78bfa/ffffff?text=${currentWord.word}`;
        
        const listIndex = currentWordList.findIndex(item => item.id === currentWord.id);
        cardCounter.textContent = `${listIndex + 1} / ${currentWordList.length}`;
        const progressPercent = ((listIndex + 1) / currentWordList.length) * 100;
        progressBar.style.width = `${progressPercent}%`;

        prevBtn.disabled = listIndex === 0;
        nextBtn.disabled = listIndex === currentWordList.length - 1;

        if (isFlipped) {
            flipCard();
        }
    }

    // 翻转卡片的函数
    function flipCard() {
        isFlipped = !isFlipped;
        flashcard.classList.toggle('is-flipped');
    }

    // --- 事件监听器 ---

    // 搜索功能
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();
        const filteredWords = vocabulary.filter(item => 
            item.word.toLowerCase().includes(searchTerm) ||
            item.reading.toLowerCase().includes(searchTerm) ||
            item.meaning.toLowerCase().includes(searchTerm)
        );
        currentWordList = filteredWords;
        renderWordList(filteredWords);
    });

    // 导航事件
    wordList.addEventListener('click', (e) => {
        const listItem = e.target.closest('li');
        if (listItem && listItem.dataset.id) {
            // 从主词汇表中找到对应单词的索引
            const wordId = parseInt(listItem.dataset.id, 10);
            currentIndex = vocabulary.findIndex(item => item.id === wordId);
            
            homeScreen.classList.add('hidden');
            flashcardScreen.classList.remove('hidden');
            updateCard();
        }
    });

    backToHomeBtn.addEventListener('click', () => {
        flashcardScreen.classList.add('hidden');
        homeScreen.classList.remove('hidden');
        videoPlayer.pause();
    });

    // 闪卡事件
    flipBtn.addEventListener('click', flipCard);
    flashcard.addEventListener('click', (e) => {
        if (e.target.tagName.toLowerCase() !== 'video') {
            flipCard();
        }
    });

    nextBtn.addEventListener('click', () => {
        const currentListIndex = currentWordList.findIndex(item => item.id === vocabulary[currentIndex].id);
        if (currentListIndex < currentWordList.length - 1) {
            const nextWordInList = currentWordList[currentListIndex + 1];
            currentIndex = vocabulary.findIndex(item => item.id === nextWordInList.id);
            updateCard();
        }
    });

    prevBtn.addEventListener('click', () => {
        const currentListIndex = currentWordList.findIndex(item => item.id === vocabulary[currentIndex].id);
        if (currentListIndex > 0) {
            const prevWordInList = currentWordList[currentListIndex - 1];
            currentIndex = vocabulary.findIndex(item => item.id === prevWordInList.id);
            updateCard();
        }
    });
    
    // --- 初始化 ---
    renderWordList(vocabulary);
});

