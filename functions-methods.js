// Added a function to print out result nicely in the console.
// It is using an array and a callback function.
function printOutResult(valueArr, functionToUse) {
  for (let i = 0; i < valueArr.length; i++) {
    console.log(`${valueArr[i]} : ${functionToUse(valueArr[i])}`);
  }
}

// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.

/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com
const getEmailDomainArr = ["n.eeken@novi-education.nl", "t.mellink@novi.nl", "a.wiersma@outlook.com"];

function getEmailDomain(emailAdress) {
  const domainName = emailAdress.split("@")[1];
  return domainName;
}
console.log("Opdracht 1: getEmailDomain");
// print result using array and callback function
printOutResult(getEmailDomainArr, getEmailDomain);

/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"
const typeOfEmailArr = ["n.eeken@novi-education.nl", "t.mellink@novi.nl", "novi.nlaapjesk@outlook.com", "a.wiersma@outlook.com"]

function typeOfEmail(emailAdress) {
  const domainName = getEmailDomain(emailAdress);
  if (domainName.includes("novi-education")) {
    return "Student";
  } else if (domainName.includes("novi")) {
    return "Medewerker";
  } else {
    return "Extern";
  }
}

console.log("\nOpdracht 2: typeOfEmail");
printOutResult(typeOfEmailArr,typeOfEmail);

/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in
const checkEmailValidityArr = ["n.eeken@novi.nl","tessmellink@novi.nl","n.eekenanovi.nl", "n.eeken@novinl.", "tessmellink@novi,nl"];

function checkEmailValidity(emailAddress) {
  const hasComma = emailAddress.includes(",");
  const endsWithPeriod = emailAddress.charAt(emailAddress.length - 1) === ".";
  let hasPeriodInDomainAndAtSymbol;
  // This will check first the @ symbol and based on that there will be an extra validation to check if there is an period before the TLD.
  // I just made this as an extre;  it is not stated in the assignment.
  if (emailAddress.includes("@")) {
    hasPeriodInDomainAndAtSymbol = emailAddress.split("@")[1].includes(".");
  }
  // Return true if the email address is valid (no comma, no period at end, has "@" and period in domain), otherwise it will return false.
  return !(hasComma || endsWithPeriod || !hasPeriodInDomainAndAtSymbol);
}

console.log("\nOpdracht 3: checkEmailValidity");
printOutResult(checkEmailValidityArr,checkEmailValidity);