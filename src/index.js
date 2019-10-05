module.exports = function zeros(expression) {

  var count = 0;

  var number_arr = expression.split('*');
// получается массив строк вида '8!' и '12!!'

  for(let i = 0; i < number_arr.length; i++) {

    if(number_arr[i][number_arr[i].length - 1] == '!' &&
    number_arr[i][number_arr[i].length - 2] != '!') {
      let number = +number_arr[i].replace('!', '');
  for(let k = 1; k <= number; k++) {
    let j = k;
    while(j%5 == 0) {
      j = j/5;
      count++;
    }
  }

} else {
  let number = +number_arr[i].replace(/!/g, '');
  for(let k = number; k > 0; k-=2) {

      if((k > 4) && (k%2 == 1) && (k%5 == 0)) {
          count++;
      }


     
      if(k%10 == 0 && number%2 == 0) {
        count++;
         let j = k/5;
      while(j%5 == 0) {
        j = j/5;
        count++;
      }
      }
  }

}

}

  return count;
}
