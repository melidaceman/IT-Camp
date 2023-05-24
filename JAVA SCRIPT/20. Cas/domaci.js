// 1.
// Napraviti funkciju koja ispituje argument.
// Ako se u recenici nadje rec "skola",neka se vrati pozicija prvog pojavljivanja date reci.
// Ako recenica pocinje sa recju "Automobil",neka se vrati boolean true;
// Ako je recenica parne duzine neka se vrati broj pojavljivanja reci "kuca".
// Inace vratiti duzinu datog stringa.

const recenica = "Idem u skolu automobilom,jer je skola daleko od kuce.";

const zadatak = (recenica) => {
  if (recenica.includes("skola")) {
    return recenica.indexOf("skola");
  } else if (recenica.startsWith("Automobil")) {
    return true;
  } else if (recenica.length % 2) {
    return recenica.indexOf("kuca");
  } else {
    return recenica.length;
  }
};
console.log(
  "Pozicija prvog pojavljivanja date reci je: " + recenica.indexOf("skola")
);
console.log(recenica.startsWith("Automobil"));
console.log("Broj pojavljivanja date reci je: " + recenica.indexOf("kuca"));
console.log("Duzina datog stringa je: " + recenica.length);

// 2.
// Prebrojati koliko ima malihj slova u unetom stringu. Slova koja se koriste u stringu
// pripadaju iskljucivo engleskoj abecedi.

let recenica2 = "These methods are very interesting.";

let brojac = 0;
let duzina = recenica2.length;

function countLowerChar() {
  for (let i = 0; i < duzina; i++) {
    if (recenica2[i] >= "a" && recenica2[i] <= "z") brojac++;
  }
  return brojac;
}

console.log("The sum of lowercase characters is: " + countLowerChar());
