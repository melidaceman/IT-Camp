// Domaci:

// Napraviti funkciju koja uzima neki trocifren broj za argument i vraca zbir cifara tog broja.
// Npr, za argument 234, rezultat treba biti 9 (2+3+4);
// Pretvaranje broja u string se vrsi preko toString() metoda.

function getSum(num) {
  return String(num)
    .split("")
    .reduce((accumulator, digit) => {
      return accumulator + Number(digit);
    }, 0);
}
console.log(getSum(256));

// 2. nacin:

function zbirCifara(a) {
  let jedinica = a % 10; // npr.
  let desetica = Math.floor((a / 10) % 10);
  let stotina = Math.floor(a / 100);
  return jedinica + desetica + stotina;
}
console.log(zbirCifara(379));

// 3. nacin:

function zbirCifara2(broj) {
  const brString = broj.toString();
  const brNiz = brString.split("");
  let brojac = 0;
  for (let i = 0; i < brNiz.length; i++) {
    brojac += Number(brNiz[i]);  // Number-pretvara string u broj
  }
  return brojac;
}
console.log(zbirCifara2(379));
