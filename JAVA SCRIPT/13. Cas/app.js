// Traziti unos korisnickog imena, sve dok korisnik ne unese ispravno korisnicko ime.
// (Npr. duzina korisnickog imena mora biti najmanje 6 karaktera)

let username = "";
while (username.length < 6) {
  username = prompt("Unesite ispravan username:");
  console.log(username, username.length); //provera
}

// FUNKCIJE U JAVASCRIPTU
// DRY - DO NOT REPEAT YOURSELF IN CODING

// Funkcije predstavljaju deo koda koji ce se izvrsiti samo u slucaju njihovog pozivanja. Koristimo ih da bi nas kod bio reusable (isti kod resava vise problema slicnog tipa).

// Funkciju mozemo napraviti na 2 nacina:
// 1. Preko function keyword;
// 2. Arrow function.

// 1.
function myFunc() {
  // kod unutar funkcije
}

// 2.
const myFunc2 = () => {
  // kod unutar funkcije
};

// Funkcija koja ispisuje zdravo
function greeting() {
  //unutar ovih zagrada stoje parametri
  console.log("Zdravo");
}
greeting();

// Parametar funkcija predstavlja deo koji se nalaze u zagradama prilikom .definisanja funcija
// Prilikom definisanja funcije mozemo joj proslediti parametre koji su neophodni za izvrsavanje koda date funkcije.

// Dok prilikom pozivanja funkcije to sto saljemo funkciji se zovu argumenti.

function greeting2(ime) {
  console.log("Zdravo " + ime);
}
greeting2("Tarike");

// Napraviti funkciju koja nam vraca zbir 3 i 5.

function zbirTriPet() {
  const prom1 = 3;
  const prom2 = 5;
  // kada se izvrsi cela logika funkcije, krajnji rezultat treba vratiti u return keyword (rezervisanoj reci)
  return prom1 + prom2;
  //   console.log("nesto") kod koji se nadje nakon return u function scope se nece primeniti
}

function zbirBrojeva(a, b) {
  return a + b;
}
console.log(zbirBrojeva(10, 5));

// Ako zelimo da vidimo je li tacno u konzoli,moramo to premestiti u console.log dodavanjem jos jednog para zagrada.

// Dodeljivanje defaultne vrednosti se moze izvrsiti na dva nacina:

// 1.
// function zbirDvaBroja(br1, br2) {
//   if (br2 === undefined) {
//     return br1;
//   } else {
//     return br1 + br2;
//   }
// }
// console.log(zbirDvaBroja(34));

// 2.
function zbirDvaBroja2(br1, br2 = 0) {
  return br1 + br2;
}
console.log(zbirDvaBroja2(15));
console.log(zbirDvaBroja2(15, 12));

// Domaci:

// 1. Napraviti funkciju koja vraca zbir kvadrata dva broja. Ako se izostavi argument,funkcija ga racuna kao 0.

// 2. Napraviti funkciju koja vraca aritmeticku sredinu 3 broja. Sa defaultnim vrednostima.

// 3.

// 1.
