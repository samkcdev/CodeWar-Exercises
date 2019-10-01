function f(n) {
  let result = 0;
  if (n > 0) {
    for (let i = 1; i <= 100; i++) {
      console.log(i);
      result = result + i;
    }
  }
  return result;
}

console.log(f(100));
