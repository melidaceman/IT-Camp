// Korisnik unosi 2 broja:
// Na osnovu toga koji je broj manji, iteracija se vrsi od njega do veceg broja.
// Ispisuju se brojevi od manjeg ka vecem.

// const broj1 = +prompt("Unesite prvi broj: ");
// const broj2 = +prompt("Unesite drugi broj: "); //Number

// if (isNaN(broj1) || isNaN(broj2)) // isNaN - ako je broj nepravilan
//  { console.log("Morate uneti korektne brojeve")
// } else if (broj1 < broj2) {
//     for (let i = broj1; i < broj2; i++) {
//         console.log(i);
//     }
//     else if (broj2 < broj1) {
//         for (let i = broj2; i < broj1; i++) {
//             console.log(i);
//         }
//     }
//         else if (broj1 === broj2) {
// console.log("Uneli ste iste brojeve")
//         }
//     }

// 2.
// console.log(new Date().getDay());
// const getDay = Number(prompt("Type a number 0-6:"));
// switch (new Date().getDay()) {
//   case 0:
//     console.log("Have a nice weekend.");
//     break;
//   case 1:
//     console.log("Today is a work day.");
//     break;
//   case 2:
//     console.log("Today is a work day.");
//     break;
//   case 3:
//     console.log("Today is a work day.");
//     break;
//   case 4:
//     console.log("Today is a work day.");
//     break;
//   case 5:
//     console.log("Today is a work day.");
//   case 6:
//     console.log("Have a nice weekend.");
//   default:
//     console.log("You have entered a wrong number");
// }

// 2. nacin:

// switch (new Date().getDay()) {
//   case 0:
//   case 6:
//     console.log("Ugodno provedite vikend.");
//     break;
//   default:
//     console.log("Danas je radni dan.");
// }

// 3.

// Prebrojati i sabrati brojeve deljive sa 5 u intervalu id 1 do n.
const n = +prompt("Unesite neki prirodan broj:");
let suma = 0;
let brojBrojeva = 0;
for (i = 1; i < n; i++) {
  if (i % 5 === 0) {
    suma += i;
    brojBrojeva += 1;
  }
}
console.log(suma);
console.log(brojBrojeva);

// 1. Neka se izvrsi iteracija od broja 99 do -99.
// Ispisati zbir brojeva deljivog sa 4 i broja 14.

// Ispisuje brojeve 10-1:
// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// 2. Izracunati aritmeeticku sredinu brojeva koji su deljivi sa 3.
// Iteracija se vrsi od 3 do 17.
