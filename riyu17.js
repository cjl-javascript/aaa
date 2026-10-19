document.addEventListener('DOMContentLoaded', () => {

    $.getJSON('https://3g.sakurajp.com.cn/lxm/riyu.json', function (data) {
        var parsedMsg = JSON.stringify(data);
        var msg = JSON.parse(parsedMsg)
        // // 生成2000个单词的模拟数据
        function generateDummyData(count) {
            const data = [];
            const sampleData = [];
            for (let i = 0; i < count; i++) {
                const firstExampleJapanese = msg[i]?.examples?.[0]?.japanese;
                const firstExampleJapanese2 = msg[i]?.examples?.[0]?.translation;
                const firstExampleJapanese3 = msg[i]?.examples?.[1]?.japanese;
                const firstExampleJapanese4 = msg[i]?.examples?.[1]?.translation;
                sampleData.push({
                    id: msg[i].id,
                    kana: msg[i].kana,
                    kanji: msg[i].kanji,
                    meaning: msg[i].meaning,
                    examples: firstExampleJapanese, // 直接存储日文字符串
                    examples2: firstExampleJapanese2,
                    examples3: firstExampleJapanese3, // 直接存储日文字符串
                    examples4: firstExampleJapanese4
                });

                const sample = sampleData[i % sampleData.length];
                data.push({
                    ...sample,
                    word: `${sample.word}${i}`,
                    // 真实场景下，每个单词都应有唯一ID
                    id: msg[i].id
                });
            }
            return data;
            
        }

        const vocabulary = generateDummyData(msg.length);

        // --- 获取 DOM 元素 ---
        const homeScreen = document.getElementById('home-screen');
        const flashcardScreen = document.getElementById('flashcard-screen');
        const backToHomeBtn = document.getElementById('back-to-home-btn');
        const wordList = document.getElementById('word-list');
        const searchInput = document.getElementById('search-input');
        const noResults = document.getElementById('no-results');

        const flashcard = document.getElementById('flashcard');
        const flashcard2 = document.getElementById('flashcard2');
        const wordDisplay = document.getElementById('word-display');
        const wordDisplay2 = document.getElementById('word-display2');
        // const readingDisplay = document.getElementById('reading-display');
        const meaningDisplay = document.getElementById('meaning-display');
        const exampleDisplay = document.getElementById('example-display');
        const exampleDisplay2 = document.getElementById('example-display2');
        const exampleDisplay3 = document.getElementById('example-display3');
        const exampleDisplay4 = document.getElementById('example-display4');

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
            if (words.length === 0) {
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
                        <p class="text-lg font-bold">${item.id}.${item.kana}</p>
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
            wordDisplay.textContent = currentWord.kana;
            wordDisplay2.textContent = currentWord.kana;
            // readingDisplay.textContent = currentWord.kana;
            meaningDisplay.textContent = currentWord.meaning;
            exampleDisplay.textContent = currentWord.examples;
            exampleDisplay2.textContent = currentWord.examples2;
            exampleDisplay3.textContent = currentWord.examples3;
            exampleDisplay4.textContent = currentWord.examples4;


            const listIndex = currentWordList.findIndex(item => item.id === currentWord.id);
            cardCounter.textContent = `${listIndex + 1} / ${currentWordList.length}`;
            const progressPercent = ((listIndex + 1) / currentWordList.length) * 100;
            progressBar.style.width = `${progressPercent}%`;

            prevBtn.disabled = listIndex === 0;
            nextBtn.disabled = listIndex === currentWordList.length - 1;

            if (isFlipped) {
                flipCard();
            }

             
            const videoPlayer = videojs('video-player');
            const timestamp = Date.now();
            function changeVideoSource(newVideoUrl, videoType = 'video/mp4') {
                // 构造源对象
                const player = videojs.getPlayer('video-player');
                var newSource = {
                    src: newVideoUrl,
                    type: videoType
                };
                videoPlayer.src(newSource);
                videoPlayer.load(); // 重要：需要调用 load() 来加载新源
                videoPlayer.play(); // 可选：自动播放
                // videoPlayer.volume(0.5);

            }
            changeVideoSource(`https://3g.sakurajp.com.cn/lxm/video/${currentWord.id}.mp4#t=${timestamp}`, 'video/mp4');
        }

        // 翻转卡片的函数
        function flipCard() {
            isFlipped = !isFlipped;
            flashcard.classList.toggle('is-flipped');
        }
        
          
       
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.trim();

            if (!searchTerm) {
                currentWordList = vocabulary;
                renderWordList(vocabulary);
                return;
            }

            const searchTermLower = searchTerm.toLowerCase();

            const filteredWords = vocabulary.filter(item => {
                // 搜索编号（精确匹配）
                const displayId = item.id;

                if (displayId.toString() === searchTerm) {
                    return true;
                }

                // 搜索编号（包含匹配）
                if (displayId.toString().includes(searchTerm)) {
                    return true;
                }

                // 搜索假名
                if (item.kana.toLowerCase().includes(searchTermLower)) {
                    return true;
                }

                // 搜索中文意思
                if (item.meaning.toLowerCase().includes(searchTermLower)) {
                    return true;
                }
                return false;
            });

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
            // videoPlayer.pause();
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



});


