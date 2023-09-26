let Photoshop = prompt("Photoshopの点数は?");
let Illustrator = prompt("Illustratorの点数は?");
Photoshop = Number(Photoshop);
Illustrator = Number(Illustrator);

console.log(`Photoshopは${Photoshop}ね、Illustratorは${Illustrator}ね、平均は${(Photoshop+Illustrator)/2}`);
if ((Photoshop+Illustrator)/2 >= 0 && (Photoshop+Illustrator)/2 <= 30) {
    console.log("がんばりなさい");
}
else if ((Photoshop+Illustrator)/2 >= 31 && (Photoshop+Illustrator)/2 <= 60) {
    console.log("まずまずね");
}
else if((Photoshop+Illustrator)/2 >= 61 && (Photoshop+Illustrator)/2 <= 100){
    console.log("頑張ったね");
}
else{
    console.log("嘘つくんじゃない");
}