// Primer 1. Svaki karakter neke recenice neka se ispise jedan ispod drugog.

// const recenica =
//   "U ponedeljak je neradni dan, to znaci da je nas sledeci cas u sredu.";

// for (
//   let i = 0;
//   i < recenica.length;
//   i++ //Prvi karakter ima index: 0,a poslednji ima index: -1. Da je i<=length,znacilo bi uzmi mi i duzinu. U ovom slucaju,nismo ukljucili duzinu. Vec slova idu jedno ispod drugog.
// ) {
//   console.log(recenica[i]);
// }

// 2. Na osnovu unete recenice od strane korisnika,ispisati recenicu tako da svaki karakter ide jedan ispod drugog.
// Dok ako je neki karakter = "a",neka se ispise broj 5.
// A u slucaju da je karakter jednak "s",neka se ne ispise nista.

const recenica2 = prompt("Unesite neku recenicu: "); //+prompt je za broj a samo "prompt" za recenicu.
// const duzina = recenica2.length;
for (let i = 0; i < recenica2.length; i++) {
  if (recenica2[i] === "a") {
    console.log(5);
  } else if (recenica2[i] === "s") {
    continue;
  } else {
    console.log(recenica2[i]);
  }
}

// Metoda toLowerCase() pretvara ceo string u mala slova:

console.log("NEKI STRING ZA PRETVARANJE U MALA SLOVA.".toLowerCase());

// Metoda toUpperCase() pretvara ceo string u velika slova:
console.log("neki string za pretvaranje u velika slova.".toUpperCase());

const recenica0 =
  "Zelimo DATu reCenICu priKaZaTi MALIM, isto taKO i VELikim slovima.";
console.log(recenica0.toUpperCase(), recenica0.toLowerCase());

// 3. Ispisati novu recenicu gde ce svaka rec pocinjati velikim slovom.

const recenica3 =
  "treba nam nova recenica gde svaka rec pocinje velikim slovom";

let recenica4 = "";
for (let i = 0; i < recenica3.length; i++) {
  if (i === 0) {
    recenica4 += recenica3[i].toUpperCase();
  } else if (recenica3[i - 1] === " ") {
    recenica4 += recenica3[i].toUpperCase();
  } else {
    recenica4 += recenica3[i];
  }
}
console.log(recenica4);
//" " space
//indeksiranje ide od 0
