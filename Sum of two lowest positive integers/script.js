// function sumTwoSmallestNumbers(numbers) {
//   let smallValOne, smallValTwo;
//   smallValOne = numbers[0];
//   smallValTwo = numbers[0];

//   numbers.forEach(element => {
//     if (element < smallValOne) {
//       smallValTwo = smallValOne;
//       smallValOne = element;
//     } else if (element < smallValTwo && element != smallValOne) {
//       smallValTwo = element;
//     }
//   });
//   console.log(smallValOne);
//   console.log(smallValTwo);
//   return smallValOne + smallValTwo;
// }

// console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));

function sumTwoSmallestNumbers(numbers) {
  //sort method we can pass a function to sort numbers numerically
  let getSortArr = numbers.sort(function(a, b) {
    return a - b;
  });
  let result = 0;
  for (i = 0; i < getSortArr.length; i++) {
    if (i === 0) {
      result += getSortArr[0];
    }
    if (i === 1) {
      result += getSortArr[1];
    }
  }
  return result;
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));
