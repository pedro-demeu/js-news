// For now, it works on web only
const array1 = [5, 12, 50, 130, 44, 350];
const found = array1.findLast((element) => element > 45);
console.log(found);
// expected output: 350