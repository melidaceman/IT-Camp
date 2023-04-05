// 1.
// Neparni brojevi od 1-20:
//1. nacin:

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 != 0) {
//     console.log(i);
//   }
// }

// 2. nacin:
// for (let i = 1; i < 21; i += 2) {
//   console.log(i);
// }

// 2.
// 50-100 koji su deljivi sa 5:

// for (let i = 50; i <= 100; i++) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }

// 4.
// Suma prirodnih neparnih brojeva 10-20:

// let suma = 0;
// for (let i = 10; i <= 20; i++) {
//   if (i % 2 != 0) {
//     suma += i;
//   }
//   {
//     console.log(suma);
//   }
// }

for (let i = 10; i <= 20; i += 2) {
  if (i % 2 != 0) {
    console.log(i);
  }
}
