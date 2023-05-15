// 1.
function first() {
  const recenica = prompt("Unesite neku recenicu: ");
  const recenica1 = recenica.toUpperCase();
  const recenica2 = recenica.toLowerCase();

  const duzinaRecenice = recenica.length;
  let recenica3 = "";
  for (let i = 0; i < duzinaRecenice; i++) {
    if (i <= duzinaRecenice / 2) {
      recenica3 += recenica[i].toUpperCase();
    } else {
      recenica3 += recenica[i].toLowerCase();
    }
  }
  const recenica4 = recenica.replace(/skola/gi, "fakultet");

  return `${recenica1} \n
 ${recenica2} \n
 ${recenica3} \n
 ${recenica4} \n
`;
}
console.log(first());

// $ koristimo ako ce unutar stringa da se nadje promenljiva.
// \n za novi red

// 2.
const second = (recenica, rec) => recenica.replace(rec, "#");

console.log(second("Danas je lep dan ", "lep"));

// 3.
const third = (recenica) => {
  let brojac = 0;
  for (let i = 0; i < recenica.length; i++) {
    if (recenica[i] !== " ") {
      brojac++;
    }
  }
  return brojac;
};
console.log(third("Koliko ima karaktera"));

// ako je karakter recenice razlicit od space-a,neka se brojac poveca za 1.
