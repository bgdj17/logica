const read = require('readline-sync');
var option = '';
option  = read.question('Digita alguma coisa aê parça:  ');
var palavra = option.split('');
for (let i = 0; i < option.length; i++) {
  if(option.charAt(i) ===  'a') {
   //maca = ['m', 'a', 'c', 'a']
    palavra[i] = option.charAt(i).toUpperCase();
  }
}
console.log(palavra.join(''))


   
