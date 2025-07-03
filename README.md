
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>波動色鑑定</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;600;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="container">
        <h1>哲の波動色鑑定</h1>
        
        <!-- 1. スタート画面 -->
        <div id="start-screen" class="screen">
            <img src="S__19972376.jpg" alt="オーラ鑑定" style="border-radius: 50%; margin-bottom: 20px;">
            <h1>哲の波動色鑑定</h1>
            <p>いくつかの簡単な質問に答えるだけで、あなたの今のオーラの色と隠された才能がわかります。</p>
            <button id="start-btn" class="btn btn-primary">無料で鑑定を始める</button>
        </div>

        <!-- 2. 質問画面 -->
        <div id="question-screen" class="screen hidden">
            <h2 id="question-text">質問文がここに表示されます</h2>
            <div id="choices-container">
                <!-- 選択肢ボタンはJavaScriptで生成されます -->
            </div>
            <div id="progress-bar" style="width: 100%; background-color: #ddd; border-radius: 5px; margin-top: 20px;">
                <div id="progress" style="width: 0%; height: 10px; background-color: var(--secondary-color); border-radius: 5px; transition: width 0.3s;"></div>
            </div>
        </div>

        <!-- 3. 結果画面 -->

        <!-- 3. 結果画面 -->
        <div id="result-screen" class="screen hidden">
            <p>あなたの波動色は...</p>
            <h2 id="result-color-name">〇〇色</h2>
            <div id="result-color-box" class="result-color-box"></div>
            <p id="result-keyword" class="result-keyword"></p>
            <p id="result-description"></p>
            
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 15px; margin: 25px 0; text-align: center; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
                <h3 style="color: white; font-weight: bold; margin-bottom: 10px;">完全版の鑑定結果を無料プレゼント！</h3>
                <p style="margin-bottom: 20px; opacity: 0.9;">あなたの才能を最大限に活かす方法、恋愛・仕事の特別アドバイスは公式LINEでお伝えします。</p>
                <a href="#" id="line-btn" class="btn btn-line" target="_blank" rel="noopener noreferrer">LINEで完全版を見る</a>
            </div>
            
            <button id="copy-btn" class="btn btn-copy">結果をコピーしてThreadsで報告</button>

            <div class="footer">
                <p>※本鑑定はエンターテイメントを目的としたものです。</p>
                <!-- <a href="#">プライバシーポリシー</a> -->
            </div>
        </div>
    </div>

    <script src="config.js"></script>
    <script src="script.js"></script>
</body>
</html>
