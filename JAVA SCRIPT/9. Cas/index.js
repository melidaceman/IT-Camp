// for(let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// while petlja se takodje koristi za iteraciju kroz neki objekat i izvrsavanje odredjenog koda.
// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// do while petlja se koristi za iteraciju kroz neki objekat, s tim sto u ovakvoj petlji imamo prvo izvrsavanje koda pa tek onda ispitivanje uslova.
// let broj = 15;
// do {
//   console.log(broj);
//   broj++;
// } while (broj <= 10);

// 1.Traziti od korisnika da unese neki broj. Na osnovu te vrednosti izvrsiti ispis kvadrata brojeva od 1 do tog unetog broja:

// const broj = +prompt("Unesite neki broj: ");
// let i = 1;
// while (i <= broj) {
//   console.log(i ** 2);
//   i++;
// }

// 2. Traziti unos brojeva od korisnika sve dok ne unese nulu:
// let i = 1; //sve sem nule
// while (i !== 0) {
//   i = +prompt("Unesite neki broj: ");
// }

// 1. Ispisati sve brojeve od 1 do 10 koji su parni. (koristeci while petlju)
// 2. Korisnik unosi 2 broja:
// Na osnovu toga koji je broj manji,iteracija se vrsi od njega do veceg broja. Ispisuju se brojevi od manjeg ka vecem.

let broj1 = +prompt("Unesite prvi broj: ");
let broj2 = +prompt("Unesite drugi broj: ");
if (isNaN(broj1) || isNaN(broj2)) {
  console.log("Niste uneli korektne vrednosti.");
} else if (broj1 < broj2) {
  while (broj1 <= broj2) {
    console.log(broj1);
    broj1++;
  }
} else if (broj2 < broj1) {
  while (broj2 <= broj1) {
    console.log(broj2);
    broj2++;
  }
} else {
  console.log("Uneli ste iste brojeve.");
}

// 1.
// let k = 1;
// while (k <= 10) {
//   if (k % 2 === 0) {
//     console.log(k);
//   }
// }

// 2.
