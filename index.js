export var currentDeck = []

const hideThing = () => {
  console.log("TEST")
  document.querySelector('#cardUpdatedSuccessfully').style.display = "none"
}

export function addCardToDeck(card) {
  let newDiv = document.createElement('div')
  newDiv.innerHTML = formatCardToHTML(card)
  let cardList = document.querySelector('.Current_deck .cardList')
  if (cardList) {
    cardList.append(newDiv)
  }
  currentDeck.push(card)
  document.querySelector('#cardUpdatedSuccessfully').innerHTML = `${card.cardName} Added!`
  document.querySelector('#cardUpdatedSuccessfully').style.display = "block"
  setTimeout(hideThing, 750);
}

export function removeCardFromDeck(card) {
  let cardList = document.querySelector('.Current_deck .cardList')
  if (cardList) {
    let selectedCard = cardList.querySelector(`.${card.cardName.split(' ').join('_')}`)
    if (selectedCard) {
      selectedCard.parentElement.remove()
      document.querySelector('#cardUpdatedSuccessfully').innerHTML = `${card.cardName} Removed!`
      document.querySelector('#cardUpdatedSuccessfully').style.display = "block"
      setTimeout(hideThing, 750);
    }
  }
  currentDeck.remove(currentDeck.find(f => f.cardName == card.cardName))
}

export function clearCurrentDeck() {
  document.querySelector('.Current_deck .cardList').innerHTML = ""
  currentDeck = []
}

export function displayCardList(cardListToDisplay, targetToInsertAt, cardListTitle="Card List of Unknown") {
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