// scripts.js
var a = 1;
var b = 3;

var value = (a * a) - (2 * a * b) - (b * b);
console.log('Wynik wynosi:' + value)

if (value < 0) {
  console.log('Wynik ujemny')
} if (value >= 1) {
  console.log('Wynik dodatni')
} if (value != 0 ) {
  console.log('Wynik nie jest równy zero')
} if (value == 0 ) {
  console.log('Wynik jest równy zero')
}