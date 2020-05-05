const read = require('readline-sync');
var palavra  = read.question('Digita o numero.');
var letra = palavra.charAt();
for (let i = 0; i < option.length; i++) {
  if(option.charAt(i) ===  'a') {
   //maca = ['m', 'a', 'c', 'a']
    palavra[i] = option.charAt(i).toUpperCase();
  }
}
console.log(palavra.join(''))


   
