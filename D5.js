/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
/*const pets = ["dog", "cat", "hamster", "redfish"];
console.log(pets);

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
/*let sortedNames = pets.sort();
console.log(sortedNames);
/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
//let reversepets = pets.reverse();
//console.log(reversepets);
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
/*pets.push(pets.splice(0, 1));
console.log(pets);
/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];
/*for (let i = 0; i < cars.length; i++) {
  cars[i].licenceplate = "ABCDE";
}
console.log(cars);
/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
cars.push({
  brand: "fiat",
  model: "panda",
  color: "black",
  trims: ["life", "style", "r-line"],
});
console.log(cars);

/*for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop();
}
console.log(cars);
/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];
for (let i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims.shift(0, 1));
}

console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for (let i = 0; i < cars.length; i++) {
  if (cars[i].color.charAt() === "b") {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
/* const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];
let i = 0;
while (i < numericArray.length)
  if (numericArray[i] == 32) {
    console.log(numericArray[i]);
    break;
  } else {
    console.log(numericArray[i]);
    i++;
  } */
/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = [
  "l",
  "t",
  "c",
  "d",
  "e",
  "y",
  "x",
  "s",
  "i",
  "j",
  "k",
  "a",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "h",
  "b",
  "u",
  "v",
  "w",
  "g",
  "f",
  "z",
];
const numeredAlphabet = [];
for (let i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i]) {
    case "a":
      numeredAlphabet.push(1);
  }
  switch (charactersArray[i]) {
    case "b":
      numeredAlphabet.push(2);
  }
  switch (charactersArray[i]) {
    case "c":
      numeredAlphabet.push(3);
  }
  switch (charactersArray[i]) {
    case "d":
      numeredAlphabet.push(4);
  }
  switch (charactersArray[i]) {
    case "e":
      numeredAlphabet.push(5);
  }
  switch (charactersArray[i]) {
    case "f":
      numeredAlphabet.push(6);
  }
  switch (charactersArray[i]) {
    case "g":
      numeredAlphabet.push(7);
  }
  switch (charactersArray[i]) {
    case "h":
      numeredAlphabet.push(8);
  }
  switch (charactersArray[i]) {
    case "i":
      numeredAlphabet.push(9);
  }
  switch (charactersArray[i]) {
    case "j":
      numeredAlphabet.push(10);
  }
  switch (charactersArray[i]) {
    case "k":
      numeredAlphabet.push(11);
  }
  switch (charactersArray[i]) {
    case "l":
      numeredAlphabet.push(12);
  }
  switch (charactersArray[i]) {
    case "m":
      numeredAlphabet.push(13);
  }
  switch (charactersArray[i]) {
    case "n":
      numeredAlphabet.push(14);
  }
  switch (charactersArray[i]) {
    case "o":
      numeredAlphabet.push(15);
  }
  switch (charactersArray[i]) {
    case "p":
      numeredAlphabet.push(16);
  }
  switch (charactersArray[i]) {
    case "q":
      numeredAlphabet.push(17);
  }
  switch (charactersArray[i]) {
    case "r":
      numeredAlphabet.push(18);
  }
  switch (charactersArray[i]) {
    case "s":
      numeredAlphabet.push(19);
  }
  switch (charactersArray[i]) {
    case "t":
      numeredAlphabet.push(20);
  }
  switch (charactersArray[i]) {
    case "u":
      numeredAlphabet.push(21);
  }
  switch (charactersArray[i]) {
    case "v":
      numeredAlphabet.push(22);
  }
  switch (charactersArray[i]) {
    case "w":
      numeredAlphabet.push(23);
  }
  switch (charactersArray[i]) {
    case "x":
      numeredAlphabet.push(24);
  }
  switch (charactersArray[i]) {
    case "y":
      numeredAlphabet.push(25);
  }
  switch (charactersArray[i]) {
    case "z":
      numeredAlphabet.push(26);
  }
}

console.log(numeredAlphabet);
