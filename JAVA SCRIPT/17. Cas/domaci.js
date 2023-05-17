// Proveriti da li je uneti string palindrom (potpuno je isti kada se čita od pozadi).
//  Npr. 'anavolimilovana' je palindrom.

function isPalindrome() {
  let example = prompt("Type the sentence: ");
  let len = example.length;
  let reverse = "";
  for (let i = 0; i < len / 2; i++) {
    if (example[i] !== example[len - 1 - i]) {
      return "It is not a palindrome.";
    } else {
      return "It is palindrome.";
    }
  }
}
console.log(isPalindrome());

// Napisi funkciju koja prima 2 stringa kao argumente i vraca njihovu konkatenaciju.
// Npr. za ulazne vrednosti "Hello" i "World" funkcija treba da vrati "Hello World"

function string() {
  let sentence1 = prompt("Type the first string: ");
  let sentence2 = prompt("Type the second string: ");

  return sentence1.concat(sentence2);
}
console.log(string());
