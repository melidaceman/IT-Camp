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
