const isSunny = true;
if (!isSunny) {
  //! - is not
  // === true
  console.log("Napolju je suncano.");
} else {
  console.log("Napolju nije suncano.");
}

// Postoji 8 FALSY vrednosti, to su:

// 1. false
// 2. "" - string (ako bar ima razmak,zadovoljice uslov i bice truthy,ako nema nista u stringu onda ce biti false)
// 3. 0
// 4. -0
// 5. 0n
// 6. NaN  - (number tip podatka,tj. primitivni)
// 7. undefined
// 8. null

// 1.
// Napraviti funkciju koja trazi unos od korisnika i vraca poruku da li je uneta vrednost truthy ili falsy.

// const userName = prompt("Type username: ");
// if (userName.length > 2 && userName.length < 15) {
//   console.log(alert("TRUTHY VALUE"));
// } else {
//   console.log(alert("FALSY VALUE"));
// }

// function newFunc() {
//   const userName = prompt("Type username: ");
//   if (userName.length > 2 && userName.length < 15) {
//     return "TRUTHY VALUE";
//   } else {
//     return "FALSY VALUE";
//   }
// }
// console.log(alert(newFunc()));

function isTruthy() {
  const userInput = prompt("Unesite neku poruku: "); // prompt je string tipa
  if (userInput) {
    return "Uneli ste TRUTHY vrednost.";
  } else {
    return "Uneli ste FALSY vrednost.";
  }
}
console.log(isTruthy());
// Uvek saljemo string,sta god da unesemo. Kada posaljemo prazan string (nista),onda ce biti falsy.

// 2. Ako korisnik unosi broj:

function isTrue() {
  const trueNumber = +prompt("Type a number: ");
  if (trueNumber) {
    return "TRUTHY";
  } else {
    return "FALSY";
  }
}
console.log(isTrue());

// 3. Trazi se unos od strane korisnika sve dok ne unese bilo sta:
let recenica = "";
while (!recenica) {
  recenica = prompt("Unesite neku recenicu.");
}
