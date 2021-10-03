let easyToGetWrong = "且中乐争云亲令企休伙似但住佛使便候假偷傍傲兴兵冬冷刀分切刻动劲勤包午卖卡双史吞吵咚咛咬咸响哗啄商啪喘喜因困坏堆塑塞外失姐威娃实容尊尚尽局屋岛岸己幅幸形影必恭息悄惊惭愁愉愧愿扁才扔扮扶报拄担拍拔拜拨拼拾挑挡挣捉捞捧掌排故救散料斧时晴曲曹朝期本材松板极果校株梅棚森椅楚橙次欢止汁汉汗江池汤沟注洗洞活浮海淡深添渐滚炸烦烫爪父狐狠狡猎猴留疑瘸盏盛省真眠瞎砍破硬磨祝福积称稀究穷突窝童竿筋简管箭米糟系纪纷线经结继绳绿缸羽翘聪肃肠育胆胡脖臊节苗茎荚莲萄营蒲虽蚁蚂蚊蛙蛛蜓蜻蝇要警许论诉诚语请调谢豌贪贺赛赶超趟趴跛蹦身躺较输辛辨边达迎还进迷遇遍钩铅铺锯闭闹阴阵降雷青驴驼骆骑鹿麦鼓龟";
let newCharacters = "爽坚持临杰夕洒参涂塔映环糊桨愚属灵努负责割武敌瑞祥尺寸迟肖吱卷岩欣赏炎演焦蕉艘驶跨辆洁按鞭";
//let original = "123";
//let easyToGetWrong = "123";
//let newCharacters = "456"

const defaultNumberOfOldChars = 10;
Render();

document.getElementById("numberOfOldChars").onchange = () => {
   Render();
}

function Render() {
   let numberOfOldCharsInput = document.getElementById("numberOfOldChars");
   let numberOfOldChars = parseInt(numberOfOldCharsInput.value);
   if (isNaN(numberOfOldChars)) {
      numberOfOldChars = numberOfOldCharsInput.value = defaultNumberOfOldChars;
   }
   let randomizedEasyToGetWrong = Randomize(easyToGetWrong);
   let selectedEasyToGetWrong = randomizedEasyToGetWrong.substring(0, numberOfOldChars);
   let randomized = Randomize(selectedEasyToGetWrong + newCharacters);
   document.getElementById("main").innerText = randomized;
}

function Randomize(originalString) {
   let originalArray = GetArrayFromString(originalString);
   for (let i = 0; i < originalArray.length - 1; i++) {
      if (originalArray[i] == originalArray[i + 1]) {
         originalArray.splice(i, 1);
         i--;
      }
   }
   let randomized = "";
   while (originalArray.length > 0) {
      let index = Math.floor(Math.random() * originalArray.length);
      randomized += originalArray[index];
      originalArray.splice(index, 1);
   }
   return randomized;
}

function GetArrayFromString(inputString) {
   let result = [];
   for (let i = 0; i < inputString.length; i++) {
      result.push(inputString.charAt(i));
   }
   result.sort();
   return result;
}
