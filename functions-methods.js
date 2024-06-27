// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.

/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com

function getEmailDomain(email, domainName) {
  const fullEmailAdress = `${email}@${domainName}`;
  return fullEmailAdress;
}

const emailOne = getEmailDomain("maarten.postma1000", "gmail.com")
console.log(emailOne);

/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"

function typeOfEmail(emailAdress) {
  const domainName = emailAdress.split("@")[1];
  if (domainName.includes("novi-education")) {
    return "Student";
  } else if (domainName.includes("novi")) {
    return "Medewerker";
  } else {
    return "Extern";
  }
}

let emailCheck = typeOfEmail("maarten.postma1000@novi.com");
console.log(emailCheck);

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

function checkEmailValidity(emailAddress) {
  const hasComma = emailAddress.includes(",");
  const endsWithPeriod = emailAddress.charAt(emailAddress.length - 1) === ".";
  let hasPeriodInDomainAndAtSymbol;
  if (emailAddress.includes("@")) {
    hasPeriodInDomainAndAtSymbol = emailAddress.split("@")[1].includes(".");
  }
  // Return true if the email address is valid (no comma, no period at end, has "@" and period in domain), otherwise it will return false.
  return !(hasComma || endsWithPeriod || !hasPeriodInDomainAndAtSymbol);
}

const arrEmails = ["n.eeken@novi.nl","tessmellink@novi.nl", "n.eekenanovi.nl", "n.eeken@novinl.", "tessmellink@novi,nl"]
for (let i = 0; i < arrEmails.length; i++) {

  emailCheck = checkEmailValidity(arrEmails[i]);
  console.log(emailCheck);
}
