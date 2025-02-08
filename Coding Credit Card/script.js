// existedCard ={
// cardType,
// cardNumber,
// cvvCard,
// cardDate,
// }


const existedCards = [];
const existedCard = document.getElementById("existedCard");


function printExistedCards() {
  existedCard.innerHTML = "";
  for (const element of existedCards) {
    for (const key in element) {
      if (element.hasOwnProperty( key)) {
        console.log(element[key]);
        const newElement = document.createElement("p")
        newElement.textContent = `${key}: ${element[key]}`;
        existedCard.appendChild(newElement);
        existedCard.classList.toggle('existedCard')
        
      }
    }

  }
}

//
function makeCard() {
  const cardType = document.getElementById("cardType").value;
  // //////////////////////////////////////
  const cardNumber = document.getElementById("cardNumbers").value;

  // ///////////////////////////////////////////
  const cvvNumber = document.getElementById("cvvNumber").value;
  console.log(cvvNumber.value);
  /////////////////////////////////////
  const cardDate = document.getElementById("dateInput").value;

  ////////////////////////
  existedCards.push({
    cardType,
    cardNumber,
    cvvNumber,
    cardDate,
  });
  printExistedCards();
}


