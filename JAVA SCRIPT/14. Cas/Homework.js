// 1. Napraviti funkciju gde se trazi unos od strane korisnika i vraca poruku da li je uneta vrednost.

function userName() {
  const name = prompt("Type your name here:");
  if (name.length > 2 && name.length < 15) {
    return "You have entered the name correctly.";
  } else {
    return "You have entered the wrong value.";
  }
}
userName();
console.log(userName());
