// 1;
// const x = 8;
// const y = 7;

// if (x === y) {
//   console.log(x * y);
// } else if (x != y) {
//   console.log(x * y);
// }

// 2.

// x = 24;
// y = 4;
// const kolicnik = y;
// switch (kolicnik) {
//   case 4:
//     console.log(x / y);
//     break;

//   default:
//     console.log("Deljenje je nemoguce");
// }

// const br1 = +prompt("Unesite prvi broj:");
// const br2 = +prompt("Unesite drugi broj:"); // = Number(prompt ("Unesite drugi broj:")); mozemo raditi na oba nacina.

// if (isNaN(br1) || isNaN(br2)) {
// }
// console.log("Uneti brojevi moraju biti ispravni");...

// 2.
const x = +prompt("Unesite prvi broj:");
const y = Number(prompt("Unesite drugi broj:"));

switch (y) {
  case 0:
    console.log("Deljenje nulom nije moguce.");
    break;
  default:
    console.log("Kolicnik unetih brojeva je: " + x / y);
}
