// function countingLetters(str) {
//   let splitStrArr = str.split("");
//   let finalObj = {};
//   let counter = 0;
//   // for (let i = 0; i < splitStrArr.length; i++) {
//   //   if (splitStrArr.indexOf(splitStrArr[i]) !== -1) {
//   //     console.log(splitStrArr[i]);
//   //     finalObj[splitStrArr[i]] = ++splitStrArr[i];
//   //   } else {
//   //     finalObj[splitStrArr[i]] = 1;
//   //   }
//   // }

//   splitStrArr.forEach(element => {
//     finalObj[element] = finalObj[element] ? ++finalObj[element] : 1;
//   });

//   return finalObj;
// }

console.log(countingLetters("aabbcce"));

// const countLetters = word => {
//   const count = {};

//   word.split("").forEach(letter => {
//     count[letter] = count[letter] ? ++count[letter] : 1;
//   });

//   return count;
// };

function countingLetters(str) {
  let splitStrArr = str.split("");
  let finalObj = {};

  for (let i = 0; i < splitStrArr.length; i++) {
    console.log("splitStrArr[i]", splitStrArr[i]);
    console.log("finalObj at first", finalObj[splitStrArr[i]]);
    if (!finalObj[splitStrArr[i]]) {
      finalObj[splitStrArr[i]] = 1;
    } else {
      console.log("finalObj inside", finalObj[splitStrArr[i]]);
      finalObj[splitStrArr[i]]++;
    }
  }
  return finalObj;
}
