/* Тем кто дз уже сделал, есть еще одна работа не обязательная но желательно.  */

// Нужно место пробела поставить -


// Сделать только первую букву строки большим



// Сравнить строки если они одинаковые, то
/* в консоли показать good иначе bad */

Пример:
'string' === 'StRiNg' // true
'ABCDe' === 'AbcdW' // false */


let str = "HTML JavaScript Python"; 
console.log(str.replaceAll(' ', '-'));

let strl = 'string not starting with capital'
strl = strl.replace(
    strl[0], strl[0].toUpperCase()
)
console.log(strl);

let strl2 = "КаЖдЫй ОхОтНиК жЕлАеТ зНаТь";  

console.log(strl2.toLowerCase().replace('к', 'К'));

let string = ''
let STRING = ''
console.log(string===STRING);

let ABCDe = ''
let AbcdW = ''

console.log('ABCDe'==='AbcdW');
