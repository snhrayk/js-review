// const num1 = 8;
// const num2 = 2;
// const calc = "a";
// let ans = 0;

// if(calc == "a"){
//   ans = num1 + num2;
// }
// else if(calc == "b"){
//   ans = num1 - num2;
// }
// else if(calc == "c"){
//   ans = num1 * num2;
// }
// else if(calc == "d"){
//   ans = num1 / num2;
// }
// else{
//   ans = "error!";
// }

const num1 = 8;
const num2 = 2;
const calc = "a";
let ans = 0;

switch (calc) {
  case "a":
    ans = num1 + num2
    break;
  case "b":
    ans = num1 - num2
    break;
  case "c":
    ans = num1 * num2
    break;
  case "d":
    ans = num1 / num2;
    break;
  default:
    ans = "error!"
    break;
}

console.log(ans);