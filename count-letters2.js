var countLetters = function(letters) {
  let index = 0;
  let obj = {};
  let lower = letters.toLowerCase();
  for (i of lower) {
    if (i !== ' '){
      if (obj[i] && obj[i] !== ' ') {
        obj[i].push(index);
      }
      else
        obj[i] = [index];
    }
    index += 1;
  }
  return obj;
};
console.log(countLetters('dsa o aowkp'));