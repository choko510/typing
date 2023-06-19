const word = [
  "メロンパンってメロン入ってないらしいで",
  "meronpannttemeronhaittenairasiide",
  "隣の客は良く柿食う客だ",
  "tonarinokyakuhayokukakikuukyakuda",
  "チョコチップメロンパンは高い方が美味しいらしい",
  "tyokottippumeronnpanhatakaihougaoisiirasii",
  "コンセントにさす",
  "konsentonisasu",
  "蚊取り閃光",
  "katorisenkou"
]

let nanmozime; // 現在の引用文のインデックス
let tangomozisu; // 現在の単語のインデックス
let nowword; // 現在の単語
let alltype; // 入力された文字列
let miss; // 　ミスタイプ数

var nownum = 0
function gamestart(){
  var nownum = randomnumber(nownum);
  nowword = word[nownum];
  nanmozime = 0
  document.getElementById('text').textContent = word[nownum-1];
  document.getElementById('romazi').textContent = nowword;
}

function randomnumber(nownum) {
  var maxValue = word.length - 1;
  var randomNumber = Math.floor(Math.random() * maxValue) + 1; // 1からmaxValueまでのランダムな数を生成

  while (randomNumber === nownum || randomNumber % 2 === 0) {
      randomNumber = Math.floor(Math.random() * maxValue) + 1; // もう一度ランダムな数を生成
  }

  return randomNumber;
}

function handleKeyDown(event) {
  var tangomozisu = nowword.length
  if (event.key == nowword[nanmozime]) {
      nanmozime = nanmozime + 1;
      alltype = alltype + 1;
      
      document.getElementById('romazi').innerHTML  = '<span class="green">'+nowword.substring(0, nanmozime)+'</span>'+nowword.substring(nanmozime,tangomozisu)
      if(tangomozisu == nanmozime) {
          gamestart()
      }
  }else{
      miss = miss + 1;
      document.getElementById('romazi').innerHTML  = '<span class="green">'+nowword.substring(0, nanmozime)+'</span><span class="red">'+nowword.substring(nanmozime,nanmozime+1)+'</span>'+nowword.substring(nanmozime+1,tangomozisu)
  }
}



document.addEventListener('keydown', handleKeyDown);
gamestart();