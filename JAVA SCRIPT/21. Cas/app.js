// Ispitati da li u stringu ima vise unetih malih ili velikih slova.
// Slova iskljucivo pripadaju engleskoj abecedi.

const recenica = "Programming is very interesting.";
let duzina = recenica.length;
let brojac1 = 0;
let brojac2 = 0;

// function countChar (recenica) => {
//     for(let i = 0; i < duzina; i++) {
//         if(recenica[i] >= "a" && recenica[i] <= "z") {
//             brojac1++
//         }
//         else if(recenica[i] >= "A" && recenica[i] <= "Z" ) {
//             brojac2++
//         } if(brojac1 < brojac2 || brojac2 < brojac1)
//     }
// }

// 2. nacin

function kojihJeVise(recenica) {
  let brVelikih = 0;
  let brMalih = 0;
  for (let i = 0; i < recenica.length; i++) {
    if (recenica[i] >= "a" && recenica[i] <= "z") {
      brMalih++;
    } else if (recenica[i] >= "A" && recenica[i] <= "Z") {
      brVelikih++;
    }
  }
  if (brVelikih > brMalih) {
    return `U datoj recenici ima vise velikih slova. Ima ih ${brVelikih}, dok malih slova ima ${brMalih}.`;
  } else if (brMalih > brVelikih) {
    return `U datoj recenici ima vise malih slova. Ima ih ${brMalih}, dok velikih slova ima ${brVelikih}.`;
  } else {
    return `Dati string ima jednak broj malih i velikih slova, ${brMalih}.`;
  }
}
console.log(kojihJeVise("Treba imati VISE malih SLova."));
console.log(kojihJeVise("TREBA IMATI VISE velikih SLova."));
console.log(kojihJeVise("mala i VELIKA s."));

// var b = 7;

// let a = 4;

// const c = 9;

// Cesto u literaturi cemo naici na tvrdnju da je JavaScript interpreterski jezik,ali to nije bas tako. U pozadini stoji JS masina koja
// vrsi pozadinsko kompajliranje pre izvrsavanja koda. Stoga nije pogresno reci da je JS kompajliran jezik.

// Pojam hoisting u JS predstavlja izvlacenje svih deklaracija na vrhu skripte (fajla).

d = 11;
console.log(d);

// Kasnije deklarisanje neke promenljive je moguce preko var keyword, dok preko let i const niej dozvoljeno.

// var d;
// let d;
// const d;
