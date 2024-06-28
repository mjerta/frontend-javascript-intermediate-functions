// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];
const multipleArr = [grades, [6, 4, 5], [8, 9, 4, 6, 10]]


/* Opdracht  1 - Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6

function amountOfDiplomasCumLaude() {
  const validatedArray = [];
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 8) {
      validatedArray.push(grades[i]);
    }
  }
  return validatedArray.length;
}

console.log("Opdracht 1a: Cum Laude ")
console.log(amountOfDiplomasCumLaude());

/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3


function cumLaude(grades) {
  const validatedArray = [];
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 8) {
      validatedArray.push(grades[i]);
    }
  }
  return validatedArray.length;
}
console.log("\nOpracht 1b - Omschrijven tot een herbruikbare functie")

for (let i = 0; i < multipleArr.length; i++) {
  console.log(cumLaude(multipleArr[i]));
}

/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6.642857142857143

function averageGradeWithoutParameter() {
  let sumOfGrades = 0;
  for (let i = 0; i < grades.length; i++) {
    sumOfGrades += grades[i];
  }
  return sumOfGrades / grades.length;
}

console.log("\nOpracht 2a - Script schrijven")
console.log(averageGradeWithoutParameter());

/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.


// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft 5
// averageGrade([8, 9, 4, 6, 10]) geeft 7.4
function averageGrade(grades) {
  let sumOfGrades = 0;
  for (let i = 0; i < grades.length; i++) {
    sumOfGrades += grades[i];
  }
  return sumOfGrades / grades.length;
}
console.log("\nOpracht 2b- Omschrijven tot een herbruikbare functie")
for (let i = 0; i < multipleArr.length; i++) {
  console.log(`Array number: ${averageGrade(multipleArr[i])}`);
}

/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!

function averageGradeWIthTwoDecimals(grades) {
  let sumOfGrades = 0;
  for (let i = 0; i < grades.length; i++) {
    sumOfGrades += grades[i];
  }
  return Math.round((sumOfGrades / grades.length) * 100) / 100;
}
console.log("\nOpracht 2c- Afronden op twee decimalen")
for (let i = 0; i < multipleArr.length; i++) {
  console.log(`Array number: ${averageGradeWIthTwoDecimals(multipleArr[i])}`);
}

/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 9

function highestGradeWithoutParameter() {
  // This will give the first input as the reference. It will replaced if a higher number has been found.
  let highestNumber = grades[0];
  for (let i = 0; i < grades.length; i++) {
      if (grades[i] > highestNumber) {
        highestNumber = grades[i];
    }
  }
  return highestNumber;
}
console.log("\nOpdracht 3a");
console.log(highestGradeWithoutParameter());

/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10

function highestGrade(grades) {
  // This will give the first input as the reference. It will replaced if a higher number has been found.
  let highestNumber = grades[0];
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] > highestNumber) {
      highestNumber = grades[i];
    }
  }
  return highestNumber;
}

console.log("\nOpracht 3b - Omschrijven tot een herbruikbare functie")
for (let i = 0; i < multipleArr.length; i++) {
  console.log(`Array number: ${highestGrade(multipleArr[i])}`);
}