import * as cardLists from '../startingDecks.js'

export function addCardToDeck(card) {
  let newDiv = document.createElement('div')
  newDiv.innerHTML = formatCardToHTML(card)
  let cardList = document.querySelector('.Current_deck .cardList')
  if (cardList) {
    cardList.append(newDiv)
  }
}

export function removeCardFromDeck(card) {
  let cardList = document.querySelector('.Current_deck .cardList')
  if (cardList) {
    let selectedCard = cardList.querySelector(`.${card.cardName.split(' ').join('_')}`)
    if (selectedCard) {
      selectedCard.parentElement.remove()
    }
  }
}

function clearCurrentDeck() {
  document.querySelector('.Current_deck .cardList').innerHTML = ""
}

document.addEventListener('DOMContentLoaded', (e) => {
  displayCardList([], document.querySelector('.Current_deck'), "Current Deck")
  document.querySelector('#clearDeck').onclick = () => clearCurrentDeck();

  displayCardList(cardLists.startingDeck_Goldyx, document.querySelector('.Goldyx_starting'), "Goldyx Starting Deck")
  displayCardList(cardLists.startingDeck_Norrowas, document.querySelector('.Norrowas_starting'), "Norrowas Starting Deck")
  displayCardList(cardLists.startingDeck_Tovak, document.querySelector('.Tovak_starting'), "Tovak Starting Deck")
  displayCardList(cardLists.startingDeck_Arythea, document.querySelector('.Arythea_starting'), "Arythea Starting Deck")
  
  displayCardList(cardLists.advancedActions, document.querySelector('.advanced_actions'), "Advanced Actions")
  displayCardList(cardLists.spells, document.querySelector('.spells'), "Spells")
  displayCardList(cardLists.artifacts, document.querySelector('.artifacts'), "Artifacts")
  displayCardList(cardLists.Wounds, document.querySelector('.wounds'), "Wounds")
  displayCardList(cardLists.silverUnits, document.querySelector('.silver_units'), "Silver Units")
  displayCardList(cardLists.GoldUnits, document.querySelector('.gold_units'), "Gold Units")
})

function displayCardList(cardListToDisplay, targetToInsertAt, cardListTitle="Card List of Unknown") {
  const listTitle = document.createElement('div')
  listTitle.innerHTML = cardListTitle
  listTitle.classList.add('center')
  listTitle.classList.add('cardListName')
  const cardList = document.createElement('div')
  cardList.classList.add('cardList')
  cardListToDisplay.forEach(card => {
    let newDiv = document.createElement('div')
    newDiv.innerHTML = formatCardToHTML(card)
    cardList.append(newDiv)
  })
  targetToInsertAt.append(listTitle)
  targetToInsertAt.append(cardList)
}

export function formatCardToHTML(card) {
  let cardAbilities = card.abilities.map(ability => 
        `<tr class="${"ability cost_" + ability.crystalCost}">
          <td>
            ${ability.effect}
          </td>
        </tr>`
      ).join('')
  if (card.cardType != 'Unit') {
    return `<table class="${"basicCardDisplay " + card.cardName.split(' ').join('_')}">
      <tr class="title">
        <td>
          ${card.cardName}
        </td>
      </tr>
      ${cardAbilities}
    </table>`
    } else {
      return `<table class="${"unitCardDisplay " + card.cardName.split(' ').join('_')}">
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
    </table>`
    }
}