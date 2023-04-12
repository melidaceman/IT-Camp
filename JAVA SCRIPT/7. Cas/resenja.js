// 1. Neka se izvrsi iteracija od broja 99 do -99.
// Ispisati zbir brojeva deljivog sa 4 i broja 14.

// Ispisuje brojeve 10-1:
// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// 2. Izracunati aritmeticku sredinu brojeva koji su deljivi sa 3.
// Iteracija se vrsi od 3 do 17.

// // 1. Neka se izvrsi iteracija od broja 99 do -99.
// Ispisati zbir brojeva deljivog sa 4 i broja 14.

zbir = 0;
for (let i = 99; i >= -99; i--) {
  if (i % 4 === 0) {
    zbir += i;
  }
  {
    console.log(zbir + 14);
  }
}

// 2. Izracunati aritmeticku sredinu brojeva koji su deljivi sa 3.
// Iteracija se vrsi od 3 do 17.

// suma = 0;
// br = 0;

// for (let i = 3; i <= 17; i++) {
//   if (i % 3 === 0) {
//     suma += i;
//     br++;
//   }

//   {
//     console.log(suma / br);
//   }
// }
