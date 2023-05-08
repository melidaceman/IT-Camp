// Domaci:

// 1. Napraviti funkciju koja vraca zbir kvadrata dva broja. Ako se izostavi argument,funkcija ga racuna kao 0.

// 2. Napraviti funkciju koja vraca aritmeticku sredinu 3 broja. Sa defaultnim vrednostima.

// 3.

// 1.
function zbirDvaBroja(x, y = 0) {
  return x ** 2 + y ** 2;
}
console.log(zbirDvaBroja(3));

// // 2.
function aritmetickaSredina(x, y, z = 0) {
  return (x + y + z) / 3;
}
console.log(aritmetickaSredina(9, 9, 9));

// 3. Napraviti funkciju povrsina koja uzima dve vrednosti. Ako su te vrednosti jednake, da vraca povrsinu kvadrata uz odredjenu poruku,dok,ako su razlicite vrednosti,da vraca povrsinu pravougaonika uz odredjenu poruku.

let x = +prompt("Unesite prvu vrednost: ");
let y = +prompt("Unesite drugu vrednost: ");

function povrsina(x, y) {
  if (x === y) {
    return "Vrednosti su jednake,i povrsina kvadrata datih brojeva je:" + x * y;
  } else if (x != y) {
    return (
      "Vrednosti nisu jednake,i povrsina pravougaonika datih brojeva je:" +
      x * y
    );
  }
}
console.log(povrsina(x, y));

// 4. Na osnovu date recenice napraviti i ispisati novu recenicu tako da:

// (i) se svi samoglasnici retvore u velika slova;
// (ii) ostali karakteri se ne menjaju;

const ex1 = prompt("Type the sentence: ");
let ex2 = " ";
for (let i = 0; i < ex1.length; i++) {
  if (
    ex1[i] === "a" ||
    ex1[i] === "e" ||
    ex1[i] === "i" ||
    ex1[i] === "o" ||
    ex1[i] === "u"
  ) {
    ex2 += ex1[i].toUpperCase();
  } else {
    ex2 += ex1[i];
  }
}
console.log(ex2);
