// Search metode:

const recenica = "Danas je lep dan.";

// indexOf() metoda nam vraca poziciju karaktera (niza karaktera) koje smo poslali kao argument.
// Ako se taj neki argument nalazi vise puta unutar stringa dobijamo poziciju prvog pojavljivanja tog argumenta.
// Ako se argument ne nadje rezultat ce biti -1.

console.log(recenica.indexOf("d"));
console.log(recenica.indexOf("dan"));
console.log(recenica.indexOf("noc"));
console.log(recenica.indexOf("nas"));


// lastIndexOf() metoda nam vraca poziciju poslednjeg pojavljivanja karaktera (niza karaktera) koje smo poslali kao argument.
// Ako se argument ne nadje rezultat ce biti -1.

console.log(recenica.lastIndexOf("a"))
console.log(recenica.lastIndexOf("lep"))
console.log(recenica.lastIndexOf("noc"))

// Obe metode prihvataju drugi argument, koji oznacava poziciju od koje pocinje trazenje.
// Napomena. Brojac se ne resetuje, ako krenemo od drugog argumenta da trazimo, i brojanje ide od drugog argumenta,tj nastavlja se.

console.log(recenica.indexOf("dan", 6))
console.log(recenica.indexOf("danas", 6)) // dobijamo rezultat -1,jer smo ga zaobisli,time sto smo krenuli da trazimos a 6 pozicije.

// search() metoda takodje vraca poziciju trazenog stringa, s tim sto kod ove metode ne mozemo
// poslati drugi argument. // Ako se argument ne nadje unutar stringa, rezultat ce biti -1.

console.log(recenica.search("dan"))
console.log(recenica.search("noc"))

// startsWith() metoda proverava da li neki string pocinje argumentom koji joj saljemo. Vraca boolean(true ili false).
// Opciono mozemo poslati drugi argument koji ce da bude index od kojeg zelimo da trazimo poziciju nekog stringa.

console.log(recenica.startsWith("Danas"))
console.log(recenica.startsWith("danas")) 
console.log(recenica.startsWith("je", 6)) 

// endsWith() metoda proverava da li neki string zavrsava argumentom koji joj saljemo. Vraca boolean(true ili false).
// Opciono mozemo poslati drugi argument koji predstavlja ukupnu duzina posmatranja datog stringa.

console.log(recenica.endsWith("Dan"))
console.log(recenica.endsWith("dan."))
console.log(recenica.endsWith("dan", 15)); // false
console.log(recenica.endsWith("dan", 16)); // true

// 1.
// Izdvajanje podstringa
// Napisi funkciju koja prima 3 argumenta: originalni string, pocetni indeks i krajnji indeks. Funkcija treba da izdvoji podstring iz originalnog stringa
//  koji se nalazi izmedju pocetnog i krajnjeg indeksa (ukljucujuci oba indeksa) i vrati taj podstring. Npr, za ulazne vrednosti "Hello, World!" 
// 7 i 11 funkcija treba da vrati "World".

const deoStringa = (string, pocetak, kraj) => {
    return string.slice(pocetak, kraj + 1)
}
console.log(deoStringa("Hello, World!", 7, 11))

// 2. nacin: sa substr
const deoStringa1 = (string, pocetak, kraj) => {
    return string.substr(pocetak, kraj + 1 - pocetak)
}
console.log(deoStringa1("Hello, World!", 7, 11))

// 3. nacin:

const deoStringa2 = (string, pocetak, kraj) => {
    let noviString = ""
    for(let i = pocetak; i<= kraj; i++){
        noviString += string[i]
    }
    return noviString;
}
console.log(deoStringa2("Hello, World!", 7, 11))