import * as cardLists from '../startingDecks.js'
import {displayCardList} from '../index.js'

document.addEventListener('DOMContentLoaded', (e) => {
  displayCardList(cardLists.startingDeck_Goldyx, document.querySelector('.Goldyx_starting'), "Goldyx Starting Deck")
  displayCardList(cardLists.startingDeck_Norrowas, document.querySelector('.Norrowas_starting'), "Norrowas Starting Deck")
  displayCardList(cardLists.startingDeck_Tovak, document.querySelector('.Tovak_starting'), "Tovak Starting Deck")
  displayCardList(cardLists.startingDeck_Arythea, document.querySelector('.Arythea_starting'), "Arythea Starting Deck")
  displayCardList(cardLists.startingDeck_Braevelar, document.querySelector('.Braevelar_starting'), "Braevelar Starting Deck")
  displayCardList(cardLists.startingDeck_Wolfhawk, document.querySelector('.Wolfhawk_starting'), "Wolfhawk Starting Deck")
  displayCardList(cardLists.startingDeck_Krang, document.querySelector('.Krang_starting'), "Krang Starting Deck")

  displayCardList(cardLists.advancedActions, document.querySelector('.advanced_actions'), "Advanced Actions")
  displayCardList(cardLists.spells, document.querySelector('.spells'), "Spells")
  displayCardList(cardLists.artifacts, document.querySelector('.artifacts'), "Artifacts")
  displayCardList(cardLists.Wounds, document.querySelector('.wounds'), "Wounds")
  displayCardList(cardLists.silverUnits, document.querySelector('.silver_units'), "Silver Units")
  displayCardList(cardLists.GoldUnits, document.querySelector('.gold_units'), "Gold Units")
})

