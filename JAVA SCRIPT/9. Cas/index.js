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

const broj = +prompt("Unesite neki broj: ");
let i = 1;
while (i <= broj) {
  console.log(i ** 2);
  i++;
}
// const broj = +prompt("Unesite neki broj: ");
// let i = 1;
// while (i <= broj) {
//   console.log(i ** 2);
//   i++;
// }
