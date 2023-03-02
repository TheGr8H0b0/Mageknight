import * as cardLists from '../startingDecks.js'
import {addCardToDeck, formatCardToHTML, removeCardFromDeck, displayCardList, clearCurrentDeck} from '../index.js'

function displayCardObjectList(cardObjectListToDisplay, targetToInsertAt, onclickFunction) {
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

document.addEventListener('DOMContentLoaded', (e) => {
  displayCardList([], document.querySelector('.Current_deck'), "Current Deck")
  document.querySelector('#clearDeck').onclick = () => clearCurrentDeck();
})

// Create the master Card List and inject it into the Modal
let masterCardList = []
createDefaultMasterList()
masterCardList = masterCardList.sort((a, b) => a[Object.keys(a)[0]].cardName.localeCompare(b[Object.keys(b)[0]].cardName));

// ------------–------------------     Modal Functionality   –-----------------–---------------–
// ------------–---------------–---------------–---------------–---------------–---------------–
// ------------–---------------–---------------–---------------–---------------–---------------–
var cardSelectorModal = document.getElementById("cardSelectorModal");
var startingDeckModal = document.getElementById("startingDeckModal");
var addCardButton = document.getElementById("cardAdderButton");
var starterDeckButton = document.getElementById("starterDeck");
var removeCardButton = document.getElementById("cardRemoverButton");
const cardSelectList = document.getElementById('cardSelectionDisplay');
const startingDeckList = document.getElementById('startingDeckDisplay');
const clearIcon = document.querySelector(".clear-icon");
const searchBar = document.querySelector(".search");
var span = document.querySelectorAll(".modal .close");
addCardButton.onclick = () =>  {
  cardSelectList.innerHTML = ""
  cardSelectorModal.style.display = "block";
  cardSelectorModal.classList.add("addCard");
  displayCardObjectList(Object.values(masterCardList), cardSelectList, addCardToDeck)
}
removeCardButton.onclick = () => {
  cardSelectList.innerHTML = ""
  cardSelectorModal.style.display = "block";
  cardSelectorModal.classList.add("removeCard");
  displayCardObjectList(Object.values(masterCardList), cardSelectList, removeCardFromDeck)
}
starterDeckButton.onclick = () => {
  startingDeckModal.style.display = "block";
  displayCardObjectList(Object.values(masterCardList), cardSelectList, removeCardFromDeck)
}
span.forEach(e => e.onclick = function() {
  searchBar.value = "";
  cardSelectorModal.style.display = "none";
  startingDeckModal.style.display = "none";
  cardSelectorModal.classList.remove("removeCard");
  cardSelectorModal.classList.remove("addCard");
})
window.onclick = function(event) {
  if (event.target == cardSelectorModal) {
    searchBar.value = "";
    cardSelectorModal.style.display = "none";
    cardSelectorModal.classList.remove("removeCard");
    cardSelectorModal.classList.remove("addCard");
  } else if (event.target == startingDeckModal) {
    startingDeckModal.style.display = "none";
  }
}
// ------------–---------------–---------------–---------------–---------------–---------------–

searchBar.addEventListener("keyup", () => {
  cardSelectList.innerHTML = ""
  if(searchBar.value) {
    if (clearIcon.style.visibility != "visible") {
      clearIcon.style.visibility = "visible";
    }
    let searchedCardList = masterCardList.filter(f => Object.values(f)[0].cardName.toLowerCase().includes(searchBar.value.toLowerCase())) 
    if (cardSelectorModal.classList.contains("removeCard")) {
      displayCardObjectList(Object.values(searchedCardList), cardSelectList, removeCardFromDeck)
      console.log(removeCardFromDeck)
    } else if (cardSelectorModal.classList.contains("addCard")) {
      displayCardObjectList(Object.values(searchedCardList), cardSelectList, addCardToDeck)
      console.log(removeCardFromDeck)
    }
  } else {
    clearIcon.style.visibility = "hidden";
    if (cardSelectorModal.classList.contains("removeCard")) {
      displayCardObjectList(Object.values(masterCardList), cardSelectList, removeCardFromDeck)
    } else if (cardSelectorModal.classList.contains("addCard")) {
      displayCardObjectList(Object.values(masterCardList), cardSelectList, addCardToDeck)
    }
  }

});

clearIcon.addEventListener("click", () => {
  searchBar.value = "";
  clearIcon.style.visibility = "hidden";
})

displayCardList(cardLists.startingDeck_Goldyx, document.querySelector('#startingDeckDisplay .Goldyx_starting'), "Goldyx Starting Deck")
document.querySelector('#startingDeckDisplay .Goldyx_starting').onclick = () => {
  clearCurrentDeck()
  startingDeckModal.style.display = "none";
  cardLists.startingDeck_Goldyx.forEach(card => addCardToDeck(card))
}
displayCardList(cardLists.startingDeck_Norrowas, document.querySelector('#startingDeckDisplay .Norrowas_starting'), "Norrowas Starting Deck")
document.querySelector('#startingDeckDisplay .Goldyx_starting').onclick = () => {
  clearCurrentDeck()
  startingDeckModal.style.display = "none";
  cardLists.startingDeck_Norrowas.forEach(card => addCardToDeck(card))
}
displayCardList(cardLists.startingDeck_Tovak, document.querySelector('#startingDeckDisplay .Tovak_starting'), "Tovak Starting Deck")
document.querySelector('#startingDeckDisplay .Goldyx_starting').onclick = () => {
  clearCurrentDeck()
  startingDeckModal.style.display = "none";
  cardLists.startingDeck_Tovak.forEach(card => addCardToDeck(card))
}
displayCardList(cardLists.startingDeck_Arythea, document.querySelector('#startingDeckDisplay .Arythea_starting'), "Arythea Starting Deck")
document.querySelector('#startingDeckDisplay .Goldyx_starting').onclick = () => {
  clearCurrentDeck()
  startingDeckModal.style.display = "none";
  cardLists.startingDeck_Arythea.forEach(card => addCardToDeck(card))
}