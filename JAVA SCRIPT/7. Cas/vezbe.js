//1. Ako je broj godina >= 18, neka se ispise poruka "punoletni ste",
// inace neka se ispise poruka maloletni ste

// let brojGodina = 20;

// if (brojGodina >= 18) {
//   console.log("Punoletni ste.");
// } else {
//   console.log("Maloletni ste.");
// }

// 2. zadatak
// Na osnovu dve promenljive x i y napisati program koji izracunava i stampa kolicnik x/y, ako je broj y razlicit od nule, a inace ispisuje poruku: Deljenje je nemoguce.
// let x = 4;
// let y = 2;

// if (y != 0) {
//   console.log(x / y);
// } else {
//   console.log("Deljenje je nemoguce.");
// }

//3. Korisnik unosi broj:
// Ako je uneo broj izmedju 12 i 15 (ukljucujuci oba) neka se ispise poruka "uneli ste vrednostBroja"
// Defaultno:Niste uneli broj iz trazenog opsega
// const broj = +prompt("Unesite zeljeni broj: ");
// if (isNaN(broj)) {
//   console.log("Niste uneli vrednost broja.");
// } else if (broj >= 12 && broj <= 15) {
//   console.log("Uneli ste vrednost broja.");
// } else {
//   console.log("Niste uneli broj iz trazenog opsega.");
// }

//4. Ispisati brojeve od 1 do 10,izuzev broja 2 i broja 5.
// let i = 0;
// for (i = 1; i <= 10; i++) {
//   if (i != 2 && i != 5) {
//     console.log(i);
//   }
// }

// 5. // Ispisati sve brojeve od 1 do 10. Ako je neki broj deljiv sa 7 neka se prekine petlja.
// let i = 0;
// for (i = 1; i <= 10; i++) {
//   if (i % 7 === 0) {
//     break;
//   }
//   console.log(i);
// }

// 6. // Ispisati parne brojeve od 1 do 20 na dva nacina.
//i % 2 === ostatak i pri deljenju je jednak nuli,onda dobijamo parne brojeve.

// let i = 0;
// for (i = 2; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// let i = 0;
// for (i = 1; i < 21; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// 7. Ispisati dvostruku vrednost prirodnih brojeva od 6 do 14.
// let i = 0;
// for (i = 6; i <= 14; i++) {
//   console.log(i * 2);
// }

// 8. // Korisnik unosi 2 broja:
// Na osnovu toga koji je broj manji, iteracija se vrsi od njega do veceg broja.
// Ispisuju se brojevi od manjeg ka vecem.
// const broj1 = +prompt("Unesite prvi broj: ");
// const broj2 = +prompt("Unesite drugi broj: ");
// if (isNaN(broj1) || isNaN(broj2)) {
//   console.log("Morate uneti korektne brojeve.");
// } else if (broj1 < broj2) {
//   for (let i = broj1; i < broj2; i++) {
//     console.log(i);
//   }
// } else if (broj2 < broj1) {
//   for (let i = broj2; i < broj1; i++) {
//     console.log(i);
//   }
// } else if (broj1 === broj2) {
//   console.log("Uneli ste iste brojeve.");
// }

// 9. Switch naredba
// console.log(new Date().getDay());
// getDay() daje vrednost od 0-6
// switch (new Date().getDay())...

// Na osnovu vrednosti koju nam daje izraz iz switch naredbe,kroz case-ove i eventualno default
// Danas je radni dan.
// Ugodno provedite vikend.
const getDate = +prompt("Unesite broj 0-6: ");
switch (new Date().getDate()) {
  case 0:
  case 6:
    console.log("Ugodno provedite vikend.");

    break;
  default:
    console.log("Danas je radni dan.");
}

// 10. // Prebrojati i sabrati brojeve deljive sa 5 u intervalu od 1 do n.
// let i = 0;
// br = 0;
// zbir = 0;
// const n = +prompt("Unesite broj: ");
// for (let i = 1; i <= n; i++) {
//   if (i % 5 === 0) {
//     zbir += i;
//     br++;
//   }
//   {
//     console.log(zbir);
//   }
// }
