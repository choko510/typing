
  const quotes = [

"retasu",
"komatuna",
"hourensou",
"rennkonn",
"tamanegi",
// 他の引用文を追加
];

let quoteIndex; // 現在の引用文のインデックス
let currentWordIndex; // 現在の単語のインデックス
let currentWord; // 現在の単語
let typedWord; // 入力された文字列

function startGame() {
  quoteIndex = Math.floor(Math.random() * quotes.length); // ランダムな引用文のインデックスを設定
  currentWordIndex = 0; // 最初の単語のインデックスを設定
  currentWord = quotes[quoteIndex].split(' ')[currentWordIndex]; // 現在の単語を設定
  typedWord = ''; // 入力された文字列を初期化

  document.getElementById('quote').textContent = quotes[quoteIndex]; // 引用文を表示
  document.getElementById('input').textContent = ''; // 入力文字列を初期化
  document.getElementById('result').textContent = 'スペースキーを押してスタート'; // ゲームのスタートメッセージを表示

  document.addEventListener('keydown', handleKeyDown); // キーボードのキーを監視するイベントリスナーを追加
}

function handleKeyDown(event) {
  if (event.key === ' ') {
    return; // スペースキーが押された場合は処理を中断
  }

  typedWord += event.key; // 入力された文字を追加
  updateInputDisplay(); // 入力文字列の表示を更新

  if (typedWord === currentWord) { // 入力文字列が現在の単語と一致する場合
    document.getElementById('input').classList.remove('incorrect'); // 'incorrect'クラスを削除
    document.getElementById('input').classList.add('correct'); // 'correct'クラスを追加
    typedWord = ''; // 入力文字列を初期化
    currentWordIndex++; // 次の単語のインデックスに進める

    if (currentWordIndex >= quotes[quoteIndex].split(' ').length) { // 現在の引用文のすべての単語を入力した場合
      quoteIndex++; // 次の引用文のインデックスに進める

      if (quoteIndex >= quotes.length) { // すべての引用文を入力した場合
        endGame(); // ゲーム終了
        return;
      }

      currentWordIndex = 0; // 次の引用文の最初の単語のインデックスにリセット
      currentWord = quotes[quoteIndex].split(' ')[currentWordIndex]; // 次の単語を設定
      document.getElementById('quote').textContent = quotes[quoteIndex]; // 次の引用文を表示
    } else {
      currentWord = quotes[quoteIndex].split(' ')[currentWordIndex]; // 次の単語を設定
    }

    updateInputDisplay(); // 入力文字列の表示を更新
  } else {
    document.getElementById('input').classList.add('incorrect'); // 入力文字列が正しくない場合、'incorrect'クラスを追加
  }
}

function updateInputDisplay() {
  const inputElement = document.getElementById('input');
  const correctTypedWord = typedWord.length <= currentWord.length ? typedWord : typedWord.slice(0, -1); // 正しく入力された文字列
  const remainingWord = currentWord.slice(correctTypedWord.length); // 残りの文字列

  inputElement.innerHTML = `<span class="correct">${correctTypedWord}</span><span class="remaining">${remainingWord}</span>`; // 入力文字列を更新して表示
}

function endGame() {
  document.getElementById('input').classList.remove('correct', 'incorrect'); // 'correct'および'incorrect'クラスを削除
  document.getElementById('input').textContent = ''; // 入力文字列を初期化
  document.getElementById('result').textContent = 'ゲーム終了！'; // ゲーム終了メッセージを表示
  document.removeEventListener('keydown', handleKeyDown); // キーボードのキー監視イベントリスナーを削除
}

startGame()