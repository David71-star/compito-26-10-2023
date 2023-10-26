/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

let crazySum = function (a, b) {
  if (a === b) {
    return (a + b) * 3;
  } else {
    return a + b;
  }
};

let risultato = crazySum(10, 10);

console.log(risultato);

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

let boundary = function (numero) {
  if ((numero > 20 && numero <= 100) || numero === 400) {
    return true;
  } else {
    return false;
  }
};

let vaBene = boundary(399);
console.log(vaBene);

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

let reverseString = function (stringa) {
  let stringaSplit = stringa.split("");
  let contrario = "";

  for (let i = stringaSplit.length - 1; i >= 0; i--) {
    contrario += stringaSplit[i];
  }
  return contrario;
};

let conversione = reverseString("ciao a tutti");
console.log(conversione);

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

// let upperFirst = function (nome) {
//   const parole = nome.split(" ");
//   let finale = "";
//   for (let i = 0; i < parole.length; i++) {
//     finale += parole[i].charAt(0).toUpperCase() + parole[i].slice(1);
//   }

//   return finale;
// };

// upperFirst("david hernando cortes");
// console.log(upperFirst("david hernando cortes"));

let upperFirst = function (nome) {
  const parole = nome.split(" ");

  for (let i = 0; i < parole.length; i++) {
    parole[i] = parole[i].charAt(0).toUpperCase() + parole[i].slice(1);
  }

  return parole.join(" ");
};

let formaCorretta = upperFirst("david hernando cortes");
console.log(formaCorretta);

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

let giveMeRandom = function (n) {
  const randomNumbers = [];

  for (let i = 0; i < n; i++) {
    const random = Math.floor(Math.random() * 10);
    randomNumbers.push(random);
  }

  return randomNumbers.join(" ");
};
let spam = giveMeRandom(3);
console.log(spam);

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

let area = function (l1, l2) {
  let operazione = "";
  operazione += l1 * l2;
  return operazione;
};
let calcolo = area(5, 7);

console.log(calcolo);

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

const crazyDiff = function (assegnaNumero) {
  let sottrazione = assegnaNumero - 19;
  if (sottrazione > 19) {
    sottrazione *= 3;
  } else {
  }
  return sottrazione;
};

let differenza = crazyDiff(40);
console.log(differenza);

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

// const codify = function (parolaUno) {
//   if (parolaUno.startsWith("code")) {
//     return parolaUno;
//   } else {
//     return "code" + parolaUno;
//   }
// };
// let modifiche = codify("Minecraft");
// console.log(modifiche);

const codify = function (parolaUno) {
  nomiGiochi = parolaUno.split(" ");
  let change = "";
  for (let i = 0; i < nomiGiochi.length; i++) {
    if (nomiGiochi[i].startsWith("code")) {
      change += nomiGiochi[i];
    } else {
      change += "code" + nomiGiochi[i];
    }
  }
  return change;
};
let modifiche = codify("Minecraft code777");
console.log(modifiche);

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

let check3and7 = function (numeroIntero) {};
let check = check3and7(5);

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

let cutString = function (parolaCompleta) {
  let oll = parolaCompleta.split(" ");
  omg =
    parolaCompleta.slice(1) +
    parolaCompleta.slice(1).replace(parolaCompleta.charAt(oll.length, "6"));

  console.log(omg);
};
let parolaIncompleta = cutString("&David&");
//console.log(parolaIncompleta);
