let newCharacters = "爽坚持临杰夕洒参涂塔映环糊桨愚属灵努负责割武敌瑞祥尺寸迟肖吱卷岩欣赏炎演焦蕉艘驶跨辆洁按鞭修劝灾罐补歉舌亡旱枯批据谅娘圈初雾厚寒砸牌胃勿扰估猬蘑菇模茫芒解悉设柜与闲尤敲嚼甚怀逐庭增优性善惰兰艺队卫束乡仗何扬仪龄少哎哟暗抽屉梁啥盗掩品及铛库唤咂浑缩猛趁扎巧悟恍锋喻瞒蠢肢依嘿";

//let original = "123";
//let easyToGetWrong = "123";
//let newCharacters = "456"

const defaultnumberOfChars = 20;
Render();

document.getElementById("numberOfChars").onchange = () => {
   Render();
}

function Render() {
   let numberOfCharsInput = document.getElementById("numberOfChars");
   let numberOfChars = parseInt(numberOfCharsInput.value);
   if (isNaN(numberOfChars)) {
      numberOfChars = numberOfCharsInput.value = defaultnumberOfChars;
   }
   let randomized = Randomize(newCharacters);
   document.getElementById("main").innerText = randomized.substring(0, numberOfChars);
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