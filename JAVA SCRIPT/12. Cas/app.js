// 1. Prebrojati koliko ima znakova koji su cifre u unetom stringu.
// 1. nacin:
// const recenica = prompt("Unesite neku recenicu:");
// let brojac = 0;
// for (let i = 0; i < recenica.length; i++) {
//   if (
//     recenica[i] === "0" ||
//     recenica[i] === "1" ||
//     recenica[i] === "2" ||
//     recenica[i] === "3" ||
//     recenica[i] === "4" ||
//     recenica[i] === "5" ||
//     recenica[i] === "6" ||
//     recenica[i] === "7" ||
//     recenica[i] === "8" ||
//     recenica[i] === "9"
//   ) {
//     brojac++;
//   }
// }
// console.log(brojac);

// 2. nacin:

// const recenica = prompt("Unesite neku recenicu:");
// let brojac = 0;
// for (let i = 0; i < recenica.length; i++) {
//   if (!isNaN(recenica[i]) && recenica[i] !== " ") {
//     brojac++;
//   }
// }
// console.log(brojac);

// 2.
// Domaci

// 1. Napraviti novu recenicu koja ce imati isti tekst ali bez razmaka.

// 2. Napraviti novu recenicu gde ce umesto slova "a" pisati slovo "t".
// Dok ako se posle slova "a" nalazi slovo "n" pisace "d" umesto "a".

// 3. Na osnovu dqate recenice napraviti i ispisati novu recenicu tako da:

// (i) se svi samoglasnici retvore u velika slova;
// (ii) ostali karakteri se ne menjaju;

// 1.

// const recenica = prompt("Unesite neku recenicu: ");
// let recenica1 = ""; // prazan string
// for (let i = 0; i < recenica.length; i++) {
//   if (recenica[i] === " ") {
//     //ako je razmak
//     // ne dodaj nista,zaobidji ga
//     continue;
//   } else {
//     //inace dodaj ..
//     recenica1 += recenica[i];
//   }
// }
// console.log(recenica1);

// 2. Napraviti novu recenicu gde ce umesto slova "a" pisati slovo "t".
// Dok,ako se posle slova "a" nalazi slovo "n" pisace "d" umesto "a".

const recenica = prompt("Unesite novu recenicu: ");
let recenica1 = "";
for (let i = 0; i < recenica.length; i++) {
  if (recenica[i] === "a" && recenica[i + 1] === "n") {
    recenica1 += "d;";
  } else if (recenica[i] === "a" || recenica[i] === "A") {
    recenica1 += "t";
  } else {
    recenica1 += recenica[i];
  }
}
console.log(recenica1);

// Uvek treba staviti specificniji uslov (veci uslov,opsirniji) u prvom uslovu,da bi se on prvo izvrsavao.
