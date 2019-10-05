module.exports = function zeros(expression) {
   var number_arr = expression.split('*');
// получается массив строк вида '8!' и '12!!'
  var count = 0;

  for(let i = 0; i < number_arr.length; i++) {

    if(number_arr[i][number_arr[i].length - 1] == '!' &&
    number_arr[i][number_arr[i].length - 2] != '!') {
      let number = +number_arr[i].replace('!', '');
  for(let k = 2; k <= number; k++) {
    let j = k;
    while(j%5 == 0) {
      j = j/5;
      count++;
    }
  }
}
if(number_arr[i][number_arr[i].length - 1] == '!' &&
number_arr[i][number_arr[i].length - 2] == '!') {
  let number = +number_arr[i].replace('!', '');
    for(let k = number; k > 0; k-=2) {
      let j = k;
      while(j%5 == 0) {
        j = j/5;
        count++;
      }
    }

  }

}

  return count;
}
