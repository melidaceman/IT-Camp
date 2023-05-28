// Domaci zadaci:

// 1.	Sva velika slova u stringu treba svesti na mala slova. Npr. za uneto 'WEBnSTUDY.com',
// dobija se novi string 'webnstudy.com'. Slova koja se koriste u stringu pripadaju isključivo engleskoj abecedi.

// 2.	Pronaći poziciju poslednjeg razmaka u stringu. Npr. za uneto 'Pera ima devojku', rezultat je 8.

// 3.	Ispisati dužinu prve reči unetog stringa. Npr. za uneto 'Pera ima devojku', rezultat je 4.
// Podrazumeva se da uneti string nema vodeće razmake.

// 1.

let recenica = "WEBnSTUDY.com";
function uppCase(recenica) {
  return recenica.toLowerCase();
}
// console.log(recenica.toLowerCase());
console.log(uppCase("WEBnSTUDY.com"));

// 2.
let recenica2 = "Pera ima devojku";
function space(recenica2) {
  return recenica2.lastIndexOf(" ");
}
console.log(recenica2.lastIndexOf(" "));
console.log(space("Pera ima devojku"));

// 3.

// let recenica3 = "Pera ima devojku";
// function len(recenica3) {
//   return recenica3.indexOf(" ");
// }

// console.log(recenica3.indexOf(" "));
// console.log(len("Pera ima devojku"));

// 2. nacin

const third = (recenica3) => {
  const prviRazmak = recenica3.indexOf(" ");
  const prvaRec = recenica3.slice(0, prviRazmak);
  const duzina = prvaRec.length;
  return duzina;
};
console.log(third("Pera ima devojku"))

