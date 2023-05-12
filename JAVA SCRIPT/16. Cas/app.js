const prom1 =
  "Sta ako zelimo da se data recenica ispise u \n dva odvojena reda";
console.log(prom1);

const prom2 =
  "Sta ako zelimo da se data recenica ispise u dva odvojena reda kada kucamo, \
   ali njen prikaz ce izgledati u jednom redu."; // kada pritisnemo enter nakon unosa back-slash (\),nece se izbrisati prilikom cuvanja koda
console.log(prom2);

// const prom3 =
// "Sta ako zelimo da se data recenica ispise u dva odvojena reda kada kucamo, \
// ali njen prikaz ce izgledati u jednom redu.";"
//"sdfsdfsdfsd"

let br1 = 7;
let br2 = 13;
console.log("Zbir brojeva " + 7 + " i " + 13 + " je " + (br1 + br2));

// Resenje preko back-ticks

console.log(`Zbir brojeva ${br1} i ${br2} je ${br1 + br2}`);

// Zapisivanje navodnika se vrsi bez ikakvih problema kroz back-ticks sintaksu.

// Zapisivanje stringa u vise redova je ispravna sintaksa kroz back-ticks navode.

let recenica = "Zelimo zameniti rec 'promenljivo' sa recju 'lepse'";

// replace () metoda menja specifican karakter (niz karaktera) nekim drugim (koji saljemo kroz drugi argument).
// To se postize pravljenjem novog stringa.
// console.log(recenica.replace("promenljivo", "lepse"));
let recenica2 = recenica.replace("promenljivo", "lepse");
console.log(recenica);

let recenica3 =
  "Zelimo zameniti rec 'promenljivo' sa recju 'lepse'. Sta ako se rec promenljivo nadje na jos nekom mestu?";

let recenica4 = recenica3.replace("promenljivo", "lepse");
console.log(recenica4);

// replace () metoda menja samo prvi pronadjeni argument u datom stringu.
// Medjutim,koriscenjem tzv. regular expression mozemo zameniti dati argument gde god se nadje u stringu novim.

//  Sintaksa:

// Regular Expression g (global) menja sve reci u stringu, nekom novom.

let recenica5 = recenica3.replace(/promenljivo/g, "lepse"); //g - global (gde god se nadje...)
console.log(recenica5);

// Regular Expression i (insensitive) menja rec drugom bez obzira na njen zapis (bilo da je ispisana velikim ili malim slovima).

let recenica6 =
  "Zelimo zameniti rec 'PromenljivO' sa recju 'lepse'. Sta ako se rec promenljivo nadje na jos nekom mestu?";

let recenica7 = recenica6.replace(/promenljivo/gi, "lepse"); // g - global / i - insensitive (case insensitive)
console.log(recenica7);

// toUpperCase() metoda pretvara ceo string u velika slova, bez obzira na to kako je prethodno ispisan i koliko ima karaktera.

console.log("Data recenica treba biti ispisana velikim slovima.".toUpperCase());

// toLowerCase() metoda pretvara ceo string u mala slova, bez obzira na to kako je prethodno ispisan i koliko ima karaktera.

console.log("Data recenica treba biti ispisana MalIM slovima.".toLowerCase());

// concat() metoda spaja dva ili vise stringova u jedan.
// Nismo ograniceni slanjem argumenata.
// Dodavanje se vrsi onim redosledom kako saljemo argumente.

let a = "Prvi deo ";
let b = "nase recenice";
let b2 = ".";
let c = a.concat(b, b2);
console.log(c);

// Sve metode za stringove prave novi string,ne vrsi se modifikacija postojeceg.

// 1.
// Napraviti funkciju koja kod stringa koji predstavlja argument funkcije ispituje sledece:
// Ako dati string ima vecu duzinu od 9:
// pravi novi string gde menjamo sva mala slova "a" sa "B" i funkcija ce vratiti novi string koji je sastavljen od "Ovo je novodobijena recenica, "
//  + novaRecenica
// ako string ima duzinu <= 9:
// Funkcija treba vratiti poruku:
// Recenica + {njena duzina} + "je nedovoljne duzine za dalje ispitivanje".

// let recenica9 = "Data recenica treba biti ispisana velikim slovima.";
// function myFunc(recenica9) {
//   if (recenica9.length <= 9) {
//     return recenica9.length + "je nedovoljne duzine za dalje ispitivanje.";
//   } else {
//     recenica9.length >= 9;
//   }
//   return recenica9.replace(/a/gi, "B");
// }

// console.log(myFunc(recenica9));

// 2. nacin:
function myFunc(recenica) {
  const duzina = recenica.length;
  if (duzina > 9) {
    const novaRecenica = recenica.replace(/a/g, "B");
    return "Ovo je novodobijena recenica ".concat(novaRecenica);
  } else {
    return "Recenica je nedovoljne duzine za dalje ispitivanje.";
  }
}
console.log(myFunc("Recenica za modifikaciju."));
console.log(myFunc("Nije do"));
