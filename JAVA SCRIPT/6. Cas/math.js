// 1.
// Neparni brojevi od 1-20:
//1. nacin:

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 != 0) {
//     console.log(i);
//   }
// }

// 2. nacin:
// for (let i = 1; i < 21; i += 2) // i += 2 (i + 2){
//   console.log(i);
// }

// 2.
// 50-100 koji su deljivi sa 5:

// for (let i = 50; i <= 100; i++) // i++ = i se povecava za 1{
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

// 2. nacin:
let zbir = 0; //const ne menja vrednost i zato koristimo let
for (let i = 11; i < 20; i += 2) {
  zbir += i;
}
console.log(zbir);
