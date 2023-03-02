import * as cardLists from '../startingDecks.js'
import {addCardToDeck, formatCardToHTML, removeCardFromDeck} from '../index.js'

function displayCardList(cardObjectListToDisplay, targetToInsertAt, onclickFunction) {
  const cardList = document.createElement('div')
  cardList.classList.add('cardList')
  cardObjectListToDisplay.forEach(cardObject => {
    let card = cardObject[Object.keys(cardObject)[0]]
    let newDiv = document.createElement('div')
    newDiv.innerHTML = formatCardToHTML(card)
    newDiv.onclick = () => onclickFunction(card);
    cardList.append(newDiv)
  })
  targetToInsertAt.append(cardList)
}

function appendToMasterList(cardList) {
  cardList.forEach(card => {
    function isCardInList(cardObject) {
      return Object.keys(cardObject)[0] == card.cardName;
    }

    if (masterCardList.length == 0) {
      masterCardList.push({[card.cardName]: card})
    }
    else if (!masterCardList.some(isCardInList)) {
      masterCardList.push({[card.cardName]: card})
    }
  });
}

function createDefaultMasterList() {
  appendToMasterList(cardLists.startingDeck_Goldyx)
  appendToMasterList(cardLists.startingDeck_Norrowas)
  appendToMasterList(cardLists.startingDeck_Tovak)
  appendToMasterList(cardLists.startingDeck_Arythea)
  appendToMasterList(cardLists.advancedActions)
  appendToMasterList(cardLists.spells)
  appendToMasterList(cardLists.artifacts)
  appendToMasterList(cardLists.Wounds)
  appendToMasterList(cardLists.silverUnits)
  appendToMasterList(cardLists.GoldUnits)
}

// Create the master Card List and inject it into the Modal
let masterCardList = []
createDefaultMasterList()
masterCardList = masterCardList.sort((a, b) => a[Object.keys(a)[0]].cardName.localeCompare(b[Object.keys(b)[0]].cardName));

// ------------–------------------     Modal Functionality   –-----------------–---------------–
// ------------–---------------–---------------–---------------–---------------–---------------–
// ------------–---------------–---------------–---------------–---------------–---------------–
var cardSelectorModal = document.getElementById("cardSelectorModal");
var addCardButton = document.getElementById("cardAdderButton");
var removeCardButton = document.getElementById("cardRemoverButton");
const cardSelectList = document.getElementById('cardSelectionDisplay')
var span = document.getElementsByClassName("close")[0];
addCardButton.onclick = () =>  {
  cardSelectList.innerHTML = ""
  cardSelectorModal.style.display = "block";
  cardSelectorModal.classList.add("addCard");
  displayCardList(Object.values(masterCardList), cardSelectList, addCardToDeck)
}
removeCardButton.onclick = () => {
  cardSelectList.innerHTML = ""
  cardSelectorModal.style.display = "block";
  cardSelectorModal.classList.add("removeCard");
  displayCardList(Object.values(masterCardList), cardSelectList, removeCardFromDeck)
}
span.onclick = function() {
  cardSelectorModal.style.display = "none";
  cardSelectorModal.classList.remove("removeCard");
  cardSelectorModal.classList.remove("addCard");
}
window.onclick = function(event) {
  if (event.target == cardSelectorModal) {
    cardSelectorModal.style.display = "none";
    cardSelectorModal.classList.remove("removeCard");
    cardSelectorModal.classList.remove("addCard");
  }
}
// ------------–---------------–---------------–---------------–---------------–---------------–



const clearIcon = document.querySelector(".clear-icon");
const searchBar = document.querySelector(".search");

searchBar.addEventListener("keyup", () => {
  cardSelectList.innerHTML = ""
  if(searchBar.value) {
    if (clearIcon.style.visibility != "visible") {
      clearIcon.style.visibility = "visible";
    }
    let searchedCardList = masterCardList.filter(f => Object.values(f)[0].cardName.toLowerCase().includes(searchBar.value)) 
    if (cardSelectorModal.classList.contains("removeCard")) {
      displayCardList(Object.values(searchedCardList), cardSelectList, removeCardFromDeck)
      console.log(removeCardFromDeck)
    } else if (cardSelectorModal.classList.contains("addCard")) {
      displayCardList(Object.values(searchedCardList), cardSelectList, addCardToDeck)
      console.log(removeCardFromDeck)
    }
  } else {
    clearIcon.style.visibility = "hidden";
    if (cardSelectorModal.classList.contains("removeCard")) {
      displayCardList(Object.values(masterCardList), cardSelectList, removeCardFromDeck)
    } else if (cardSelectorModal.classList.contains("addCard")) {
      displayCardList(Object.values(masterCardList), cardSelectList, addCardToDeck)
    }
  }

});

clearIcon.addEventListener("click", () => {
  searchBar.value = "";
  clearIcon.style.visibility = "hidden";
})