//  Kondicionali:

if ("prvi uslov") {
  // blok koda za izvrsavanje u slucaju da je zadovoljen prvi uslov
} else if ("drugi uslov") {
  // blok koda za izvrsavanje u slucaju da je zadovoljen drugi uslov
} else {
  // blok koda koji ce se izvrsiti u slucaju da sve prethodno nije zadovoljeno
}

// Ako je broj godina >= 18, neka se ispise poruka "punoletni ste",
// inace neka se ispise poruka maloletni ste

const brojGodina = 26;

if (brojGodina >= 18) {
  console.log("punoletni ste");
} else {
  console.log("maloletni ste");
}

// 2. zadatak
// Na osnovu dve promenljive x i y napisati program koji izracunava i stampa kolicnik x/y, ako je broj y razlicit od nule, a inace ispisuje poruku: Deljenje je nemoguce.

let x = 16;
// let y = 2;
let y = 0;
if (y === 0) {
  console.log("Deljenje je nemoguce.");
} else {
  console.log(x / y);
}
