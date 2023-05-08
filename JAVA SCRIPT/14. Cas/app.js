const zbirKvadrata = function (a, b) {
  //a,b parametri
  if (a === b) {
    return "Povrsina kvadrata iznosi: " + a * b;
  } else {
    return "Povrsina pravoiugaonika iznosi: " + a * b;
  }
};
console.log(zbirKvadrata(4, 5)); // 4,5 su argumenti
console.log(zbirKvadrata(5, 5));

// Arrow function:
const kvadratBroja = (a) => {
  return a ** 2;
};
console.log(kvadratBroja(4));

// Ako arrow function ima samo jedan parametar, nije neophodno stavljati ga u zagradama.
// Ako funkcija vraca (return) neki jednostavan izraz (prethodno nije bilo dodatnog koda) mozemo izostaviti viticaste zagrade {}, i return keyword.

const kvadratBroja2 = (a) => a ** 2; // kvadratBroja-deklaracija ; a=>a**2 - inicijalizacija

// 1.

// 1. nacin:
// let broj = +prompt("Unesite vrednost: ");
// const brojX = (broj) => {
//   if (broj > 0) {
//     return "Unet je pozitivan broj";
//   } else if (broj < 0) {
//     return "Unet je negativan broj";
//   } else if (broj === 0) {
//     return "Uneta je nula";
//   } else {
//     return "Uneta vrednost nije broj";
//   }
// };
// console.log(brojX(broj));

// // 2. nacin:

// function newFunc() {
//   const broj = prompt("Unesite neki broj: ");
//   if (isNaN(broj)) {
//     return "Niste uneli korektan broj.";
//   } else if (broj > 0) {
//     return "Uneli ste pozitivan broj";
//   } else if (broj < 0) {
//     return "Uneli ste negativan broj";
//   } else {
//     return "Uneli ste nulu";
//   }
// }
// newFunc(); // takodje se izvrsava
// console.log(newFunc()); // ispisujemo u konzoli radi provere

// 2.

function radnoVreme(sat, minut) {
  if (sat >= 9 && sat < 17 && minut >= 0 && minut <= 59) {
    return "Mail je stigao na vreme.";
  } else {
    return "Mail nije stigao na vreme";
  }
}

console.log(radnoVreme(9, 58));

// 3. Napraviti funkciju gde se trazi unos od strane korisnika i vraca poruku da li je uneta vrednost.
