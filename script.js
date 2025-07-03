// --- ここから下はシステムの動作部分です (通常は編集不要) ---

document.addEventListener('DOMContentLoaded', () => {
    const startScreen = document.getElementById('start-screen');
    const questionScreen = document.getElementById('question-screen');
    const resultScreen = document.getElementById('result-screen');
    
    const startBtn = document.getElementById('start-btn');
    const questionText = document.getElementById('question-text');
    const choicesContainer = document.getElementById('choices-container');
    const progressBar = document.getElementById('progress');

    const resultColorName = document.getElementById('result-color-name');
    const resultColorBox = document.getElementById('result-color-box');
    const resultKeyword = document.getElementById('result-keyword');
    const resultDescription = document.getElementById('result-description');
    const copyBtn = document.getElementById('copy-btn');
    const lineBtn = document.getElementById('line-btn');
    
    let currentQuestionIndex = 0;
    let scores = { A: 0, B: 0, C: 0, D: 0 };
    let finalResultType = '';

    // 鑑定開始
    startBtn.addEventListener('click', () => {
        startScreen.classList.add('hidden');
        questionScreen.classList.remove('hidden');
        displayQuestion();
    });
    
    // 質問を表示する関数
    function displayQuestion() {
        const question = questions[currentQuestionIndex];
        questionText.textContent = `Q${currentQuestionIndex + 1}. ${question.text}`;
        choicesContainer.innerHTML = ''; // 選択肢をクリア
        
        question.choices.forEach(choice => {
            const button = document.createElement('button');
            button.textContent = choice.text;
            button.classList.add('btn', 'btn-choice');
            button.addEventListener('click', () => handleChoice(choice.type));
            choicesContainer.appendChild(button);
        });
        
        // プログレスバー更新
        const progressPercentage = (currentQuestionIndex / questions.length) * 100;
        progressBar.style.width = `${progressPercentage}%`;
    }

    // 選択肢が選ばれた時の処理
    function handleChoice(type) {
        scores[type]++;
        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            displayQuestion();
        } else {
            showResult();
        }
    }
    
    // 結果を表示する関数
    function showResult() {
        progressBar.style.width = '100%';
        
        // スコアの高い順にソート
        const sortedScores = Object.entries(scores).sort((a, b) => b[1] - a[1]);

        // 1位と2位のスコアをチェック
        if (sortedScores.length > 1 && sortedScores[0][1] === sortedScores[1][1]) {
            // 同点1位が複数ある場合、タイプ名をアルファベット順にソートして組み合わせる
            const topTypes = sortedScores.filter(entry => entry[1] === sortedScores[0][1]).map(entry => entry[0]).sort();
            const combination = topTypes.join(''); // 例: "AB", "AC"など

            // 組み合わせに対応する結果を決定
            switch (combination) {
                case 'AB': finalResultType = 'E'; break;
                case 'AC': finalResultType = 'F'; break;
                case 'AD': finalResultType = 'G'; break;
                case 'BC': finalResultType = 'H'; break;
                case 'BD': finalResultType = 'I'; break;
                case 'CD': finalResultType = 'J'; break;
                default: // 3つ以上が同点などのレアケース。最初のタイプを優先
                    finalResultType = sortedScores[0][0];
            }
        } else {
            // 1位が単独の場合
            finalResultType = sortedScores[0][0];
        }

        const resultData = results[finalResultType];
        
        // 結果を画面に反映
        resultColorName.textContent = resultData.name;
        resultColorBox.style.backgroundColor = resultData.color;
        resultKeyword.textContent = `【キーワード】${resultData.keyword}`;
        resultDescription.textContent = resultData.description;
        
        // 画面切り替え
        questionScreen.classList.add('hidden');
        resultScreen.classList.remove('hidden');
        
        // LINEボタンのURLを更新
        lineBtn.href = LINE_URL;
    }
    
    // 結果コピーボタンの処理
    copyBtn.addEventListener('click', () => {
        const resultName = results[finalResultType].name;
        const textToCopy = `${SHARE_TEXT_CONFIG.message}【${resultName}】でした！\nあなたもやってみて！\n${SHARE_TEXT_CONFIG.hashtag}`;
        
        navigator.clipboard.writeText(textToCopy).then(() => {
            copyBtn.textContent = 'コピーしました！';
            setTimeout(() => {
                copyBtn.textContent = '結果をコピーしてThreadsで報告';
            }, 2000);
        }).catch(err => {
            alert('コピーに失敗しました。');
        });
    });
});