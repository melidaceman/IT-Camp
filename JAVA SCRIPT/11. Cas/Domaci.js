// Domaci:
//1.  Ispisati novu recenicu gde ce svaka rec da se zavrsava velikim slovom.
// 2. Prebrojati koliko se puta u unetom stringu pojavljuje slovo "M" (i veliko i malo).
// Npr za string "Mama ima momu, dobija se rezultat"

// 1.
// const recenica = "The weather is getting better and better ";
// let recenica1 = "";
// for (let i = 0; i < recenica.length; i++) {
//   if (i === -1) {
//     recenica1 += recenica[i].toUpperCase();
//   } else if (recenica[i + 1] === " ") {
//     recenica1 += recenica[i].toUpperCase();
//   } else {
//     recenica1 += recenica[i];
//   }
// }
// console.log(recenica1);
// const recenica3 = "n sfh dmfh mdhf ";
// let recenica4 = "";
// for (let i = 0; i < recenica3.length; i++) {
//   if (i === 0) {
//     recenica4 += recenica3[i].toUpperCase();
//   } else if (recenica3[i - 1] === " ") {
//     recenica4 += recenica3[i].toUpperCase();
//   } else {
//     recenica4 += recenica3[i];
//   }
// }
// console.log(recenica4);

// 3. ovo je prva recenica ispravak
// const recenica =
//   " treba nam nova recenica gde ce svaka rec da se zavrsava velikim slovom";
// let recenica2 = "";

// for (let i = 0; i < recenica.length; i++) {
//   if (i === recenica.length - 1) {
//     recenica2 += recenica[i].toUpperCase();
//   } else if (recenica[i + 1] === " ") {
//     recenica2 += recenica[i].toUpperCase();
//   } else {
//     recenica2 += recenica[i];
//   }
// }
// console.log(recenica2);

// 2.
const recenica3 = prompt("Unesite neki string:");
let brojac = 0;
for (let i = 0; i < recenica3.length; i++) {
  if (recenica3[i] === "M" || recenica3[i] === "m") {
    brojac++;
  }
}
console.log(brojac);
