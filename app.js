'use strict'
const str = 'Он сказал: \'Hi, I\'m Greek geek from Geekbrains\'; Я ответил: \'Привет, я ничего не понимаю.\'' +
            ' They aren\'t speak English!  \'No, I\'m not!\'';

// вроде должен страбатывать только на пару ', за которыми не стоят маленькие буквы м и т, что бы исключить 
// "I'm"  "aren't"   
const reg1 = /'(?!t|m)(.+?)'(?!t|m)/gi;

console.log(str.replace(reg1, '"$1"'));