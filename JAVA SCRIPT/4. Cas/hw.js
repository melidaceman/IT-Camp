const brojGodina = 40;

if (brojGodina < 12) {
  console.log("Vi ste decijeg doba");
} else if (brojGodina >= 12 && brojGodina < 18) {
  console.log("Vi ste maloletni");
} else if (brojGodina >= 18 && brojGodina < 40) {
  console.log("Vi ste punoletni");
}
// } else if (brojGodina >= 40)
else {
  console.log("Vi ste zrela osoba");
}
