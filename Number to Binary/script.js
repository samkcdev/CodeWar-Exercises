//My solution

let inputFirstNum = document.querySelector(".inputFirstNum");
let inputSecondNum = document.querySelector(".inputSecondNum");

let additionResult = document.querySelector("#addition-result");
let binaryResult = document.querySelector("#addition-result-binary");

let submitBtn = document.querySelector("button");

submitBtn.addEventListener("click", function() {
  return addBinary(inputFirstNum.value, inputSecondNum.value);
});

function addBinary(a, b) {
  let sumVal = parseInt(a) + parseInt(b);
  additionResult.innerText = sumVal;
  let toBinary = sumVal;
  let remainder = [];

  while (toBinary > 0) {
    remainder.push(toBinary % 2);
    toBinary = Math.floor(toBinary / 2);
  }
  return (binaryResult.innerText = remainder.reverse().join(""));
}

//alternative solution

// function addBinary(a, b) {
//   let sumVal = a + b;
//   let toBinary = sumVal;
//   let remainder = "";

//   while (toBinary > 0) {
//     remainder = (toBinary % 2) + remainder;
//     console.log("after", remainder);
//     toBinary = Math.floor(toBinary / 2);
//   }
//   return remainder;
// }

// console.log(addBinary(6, 6));

//alternative solution
//toString method takes in number as argument base value.
// function addBinary(a, b) {
//   return (a + b).toString(2);
// }

// console.log(addBinary(6, 6));
