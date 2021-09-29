let original="属灵努负责割武敌瑞祥尺寸迟肖吱爽坚持临杰夕洒参涂塔映环糊桨愚输息雷拨迎营幸咚积愁切塞淡校失便使史尊称较童诚注瘸育曹捧商尚株警豌阴筋蛛莲纷硬惊岸翘胡骑拄形达活";
//let original = "123";
let originalArray = [];
for (let i=0; i< original.length; i++) {
   originalArray.push(original.charAt(i));
}

originalArray.sort();
for (let i=0; i < originalArray.length - 1; i++) {
   if (originalArray[i] == originalArray[i+1]) {
        originalArray.splice(i,1);
       i--;
   }
}
let randomized="";
while (originalArray.length > 0) {
    let index = Math.floor(Math.random() * originalArray.length);
    randomized += originalArray[index] + "  ";
    originalArray.splice(index,1);
}

document.getElementById("main").innerText = randomized;