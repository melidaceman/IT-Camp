// 1.	Izdvojiti N znakova sa desne strane (poslednjih N znakova) unetog stringa.
// Npr. za string 'Pera ima devojku' i N=5, dobija se 'vojku'.

const string = "Pera ima devojku";
const shortForm = (string, N) => {
  return string.slice(-5);
};
console.log(shortForm("Pera ima devojku", 5));
