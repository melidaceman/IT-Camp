// 1. Fudbalski teren.
// Fudbalski teren dimenzija  dxs treba ograditi pravougaonom ogradom,tako da je rastojanje stranica ograde
// od linije terena r. Napisi program koji odredjuje duzinu ograde.
// Ulaz: U tri reda standardnog ulaza nalaze se tri cela broja:

// d - duzina terena u metrima (90< d < 120)
// s - sirina terena u metrima(45 < s < 90)
// r - rastojanje ograde od terena u metrima (2 < r < 10)

// const s = +prompt("Unesite sirinu terena: ");
// const d = +prompt("Unesite duzinu terena: ");
// const r = +prompt("Unesite rastojanje terena");
// if (s < 45 || s > 90) {
//   console.log("Uneli ste neodgovarajucu sirinu.");
// } else if (d < 90 || d > 120) {
//   console.log("Uneli ste neodgovarajucu duzinu.");
// } else if (r < 2 || r > 10) {
//   console.log("Uneli ste neodgovarajuce rastojanje.");
// } else if (isNaN(s) || isNaN(d) || isNaN(r)) {
//   console.log("Uneli ste neodgovarajuce vrednosti.");
// } else {
//   console.log("Uneli ste netacne vrednosti.");
// }
// const duzinaOgrade = 2 * s + 2 * d + 8 * r;
// console.log("Treba nam " + duzinaOgrade + " metara za ogradjivanje terena");

// Osnove o stringovima:
// const recenica = "Necemo matematicke zadatke!";
// console.log(recenica);
// console.log(recenica[0]); // u kvadratnim zagradama zapisujemo broj karaktera koji zelimo da promenimo
// console.log(recenica[7]);

// Pristupanje nekom karakteru ide preko indeksa!
// Indeksiranje ide od 0!
// Poslednji karakter u stringu ima index (cela duzina stringa -1)!

//  Za izracunavanje duzine nekog stringa se koristi length metoda:

// const duzina = recenica.length;
// console.log(duzina);

// Ispisivanje poslednjeg karatktera stringa:
// console.log(recenica[duzina - 1]);
// console.log(recenica[recenica.length - 1]);

//Domaci zadaci:
// 1.Zavrsiti zadatak za rastojanje sa uslovima

// 2. Korisnik unosi broj iz intervala (12,16).
// Na osnovu unetog broja,iteracija se vrsi od njega do 1 (ukljucujuci).
// Ispisati svaki broj iz iteracije,njegov kvadrat i vrednost broja umanjenu za 25.

// let broj = +prompt("Unesi broj 12-16: ");

// if (broj >= 12 && broj <= 16) {
//   while (broj >= 1) {
//     console.log(broj);
//     console.log(broj**2);
//     console.log(broj-25);
//   }
// } else {
//   console.log("Uneli ste pogresnu vrednost.");
// }

//2. nacin:
// const broj = +prompt("Unesi broj 12-16: ");
// if (isNaN(broj) || broj < 12 || broj >= 16) {
//   console.log("Uneli ste pogresnu vrednost.");
// }
// for (let i = broj; i >= 1; i--) {
//   console.log(i, i ** 2, i - 25);
// }
