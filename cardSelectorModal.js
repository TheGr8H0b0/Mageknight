import * as cardLists from '../startingDecks.js'

function displayCardList(cardObjectListToDisplay, targetToInsertAt) {
  const cardList = document.createElement('div')
  cardList.classList.add('cardList')
  cardObjectListToDisplay.forEach(cardObject => {
    let card = cardObject[Object.keys(cardObject)[0]]
    let newDiv = document.createElement('div')
    newDiv.innerHTML = formatCardToHTML(card)
    cardList.append(newDiv)
  })
  targetToInsertAt.append(cardList)
}

function formatCardToHTML(card) {
  let cardAbilities = card.abilities.map(ability => 
        `<tr class="${"ability cost_" + ability.crystalCost}">
          <td>
            ${ability.effect}
          </td>
        </tr>`
      ).join('')
  if (card.cardType != 'Unit') {
    return `<table class="${"basicCardDisplay " + card.cardName.split(' ').join('_')}">
    <tbody>
      <tr class="title">
        <td>
          ${card.cardName}
        </td>
      </tr>
      ${cardAbilities}
      </tbody>
    </table>`
    } else {
      return `<table class="${"unitCardDisplay " + card.cardName.split(' ').join('_')}">
      <tbody>
      <tr class="title">
        <td>
          ${card.cardName}
        </td>
      </tr>
      <tr class="unit_info">
        <td>
          L: ${card.level}, I: ${card.influence}, A: ${card.armor}
        </td>
      </tr>
      <tr class="unit_resistance">
        <td>
          ${card.resistances.length > 0 ? "Resists: " + card.resistances.join(', ') : "No Resistances"}
        </td>
      </tr>
      <tr class="unit_recruitment">
        <td>
          ${card.recruitmentAreas.length > 0 ? "Recruited at: " + card.recruitmentAreas.join(', ') : "Nowhere"}
        </td>
      </tr>
      ${cardAbilities}
      </tbody>
    </table>`
    }
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
displayCardList(Object.values(masterCardList), document.getElementById('cardSelectionDisplay'))

// ------------–------------------     Modal Functionality   –-----------------–---------------–
// ------------–---------------–---------------–---------------–---------------–---------------–
// ------------–---------------–---------------–---------------–---------------–---------------–
var cardSelectorModal = document.getElementById("cardSelectorModal");
var btn = document.getElementById("cardSelectorModalButton");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  cardSelectorModal.style.display = "block";
}
span.onclick = function() {
  cardSelectorModal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == cardSelectorModal) {
    cardSelectorModal.style.display = "none";
  }
}
// ------------–---------------–---------------–---------------–---------------–---------------–