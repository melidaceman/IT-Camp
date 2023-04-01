// Za komunikacijus sa korisnikom koristimo prompt metodu:

const ime = prompt("Unesite vase ime:");

console.log(ime);

const brojGodina = prompt("Unesite broj godina:");
console.log(brojGodina);
console.log(typeof brojGodina);

// Posto je vrednost dobijena preko prompt metode uvek string,otuda potreba da pretvorimo taj string u number tip podatka.

// Pomenucemo 2 nacina za prevodjenje stringa u broj:

// 1. Number (string)
const brojGodina2 = Number(brojGodina);
console.log(brojGodina2);
console.log(typeof brojGodina2);

// 2. +string => number
const brojGodina3 = +brojGodina;
console.log(brojGodina3);
console.log(typeof brojGodina3); //U konzoli pise number,a to oznacava tip podatka.

// Unesite vasu visinu:
const visina = Number(prompt("Unesite vasu visinu:"));
// const visina = +prompt ("Unesite vasu visinu:")
console.log(visina);
console.log(typeof visina);

// isNaN ispituje da li je vrednost nekog broja NaN. Da li je broj korektan ili nekorektan (Ispravan).
console.log(isNaN("56")); //false
console.log(isNaN("5asdsfdgdgdfg6")); //true

const brojGodina4 = +prompt("Unesite broj vasih godina:");
if (isNaN(brojGodina4)) {
  console.log("Niste uneli broj godina");
} else if (brojGodina4 > 0 && brojGodina4 < 12) {
  console.log("Vi ste decijeg doba");
} else if (brojGodina4 >= 12 && brojGodina4 < 18) {
  console.log("Vi ste maloletni");
} else if (brojGodina4 >= 18 && brojGodina4 < 40) {
  console.log("Vi ste punoletni");
} else if (brojGodina4 >= 40) {
  console.log("Vi ste zrela osoba");
} else {
  console.log("Broj godina ne moze biti negativan ili 0");
}

console.log(5 + "4");
console.log(5 - "4");
// Prazan string => number = 0
console.log(Number(""));
