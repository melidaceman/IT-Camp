// JavaScript Switch naredba //

// Switch naredbu koristimo kada imamo slucajeve koji preciziraju vrednost nekog izraza:

// switch (izraz) {
// case vrednost1:
// blok koda za izvrsavanje u slucaju da je izraz === vrednost1
// break;
// case vrednost2:
// blok koda za izvrsavanje u slucaju da je izraz === vrednost2
// break;
// default:
// blok koda za izvrsavanje u slucaju da izraz === nije jednak prethodnim case - ovima.
//  break; nije neophodno koristiti break na poslednjem case-u / slucaju.
// }

//  break keyword daje naredbu prestanka switch naredbe.
// break se ne sme izostaviti na kraju nekog slucaja (sem zadnjeg).
// Ako izostavimo break u slucaju koji je zadovoljen,izvrsice se i sledeci slucaj koji nije zadovoljen.

// Korisnik unosi broj:
// Ako je uneo broj izmedju 12 i 15 (ukljucujuci oba) neka se ispise poruka "uneli ste vrednostBroja"
// Defaultno:Niste uneli broj iz trazenog opsega

const broj = Number(prompt("Unesite broj iz segmenta [12,15] "));
switch (broj) {
  case 12:
    console.log("Uneli ste broj " + broj); // Izbegavamo da upisujemo pod znacima navoda,rucno 12 ..., vec posle toga + broj (predstavlja neku promenljivu,i tako ce da se ispise njegova vrednost u konzoli).
    break;
  case 13:
    console.log("Uneli ste broj " + broj);
    break;
  case 14:
    console.log("Uneli ste broj " + broj);
    break;
  case 15:
    console.log("Uneli ste broj " + broj);
    break;
  default:
    console.log("Niste uneli broj iz trazenog opsega");
}
