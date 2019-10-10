module.exports = function zeros(expression) {
  var count = 0;
  var even = 0;
  var number_arr = expression.split('*');

  for(let i = 0; i < number_arr.length; i++) {

    if(number_arr[i][number_arr[i].length - 1] == '!' &&
    number_arr[i][number_arr[i].length - 2] != '!') {
      let number = +number_arr[i].replace('!', '');
  for(let k = 1; k <= number; k++) {

    // find out how many even multipliers
    let t = k;
    while(t%2 == 0) {
      t = t/2;
      even++;
    }

    let j = k;
    while(j%5 == 0) {
      j = j/5;
      count++;
    }
  }

  if(count > even) {
    count = even;
  }

} else {
  
  let number = +number_arr[i].replace(/!/g, '');

  for(let k = number; k > 0; k-=2) {

    let t = k;
    while(t%2 == 0) {
      t = t/2;
      even++;
    }

      if((k%2 == 1) && (k%5 == 0)) {
         count++;

         let j = k/5;

         while(j%5 == 0) {
           j = j/5;
            count++;
         }
         
      }

      if(k%10 == 0) {
        
        let t = k;
        while(t%2 == 0) {
          t = t/2;
          even++;
        }
        
        count++;
        let j = k/5;

      while(j%5 == 0) {
        j = j/5;
         count++;
      }

      }
  }
  
  if(count > even) {
    count = even;
  }

}

}

  return count;
}
