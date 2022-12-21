console.log("Hello world.");
document.write("I am okay.");
console.warn("This is warning.");
console.error("THis is error.");

var number1 = 45;
var number2 = 67;
console.log(number1 + number2);

var str1 = "ram";
var str2 = "hari";

var marks = {
  ravi: 34,
  abhi: 67,
  bijay: 34,
};
console.log(str1, str2, marks);

var und;
console.log(und);

var n = null;
console.log(n);

function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}
let iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("Yay, I love chocolate ice cream!");
} else {
  alert("Awwww, but chocolate is my favorite…");
}

  document.querySelector("#firstContainer").addEventListener("click", () => {
    alert("stop clicking to button.");
  })
  document.querySelector(".container").addEventListener("click", () => {
    alert("you mf.");
  })
