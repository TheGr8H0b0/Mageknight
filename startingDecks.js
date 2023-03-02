import {Card, Ability, Unit} from '../card.js'

const crystals = {
  "Red":"Red",
  "R":"Red",
  "Green":"Green",
  "G":"Green",
  "Blue":"Blue",
  "B":"Blue",
  "Dark":"Dark",
  "D":"Dark",
  "White":"White",
  "W":"White",
  "Yellow":"Yellow",
  "Y":"Yellow"
}
// Card(name, normalEffect, empoweredEffect, crystalCost, cardType, image)
const basic_startingDeck = [
  new Card().initializeSimpleCard("Rage", "Attack or Block 2", "Attack 4", crystals.Red, "basic"),
  new Card().initializeSimpleCard("Rage", "Attack or Block 2", "Attack 4", crystals.Red, "basic"),
  new Card().initializeSimpleCard("Determination", "Attack or Block 2", "Block 4", crystals.Blue, "basic"),
  new Card().initializeSimpleCard("Swiftness", "Move 2", "Ranged Attack 3", crystals.White, "basic"),
  new Card().initializeSimpleCard("Swiftness", "Move 2", "Ranged Attack 3", crystals.White, "basic"),
  new Card().initializeSimpleCard("March", "Move 2", "Move 4", crystals.Green, "basic"),
  new Card().initializeSimpleCard("March", "Move 2", "Move 4", crystals.Green, "basic"),
  new Card().initializeSimpleCard("Stamina", "Move 2", "Move 4", crystals.Blue, "basic"),
  new Card().initializeSimpleCard("Stamina", "Move 2", "Move 4", crystals.Blue, "basic"),
  new Card().initializeSimpleCard("Tranquility", "Heal 1 or Draw a Card", "Heal 2 or Draw two Cards", crystals.Green, "basic"),
  new Card().initializeSimpleCard("Promise", "Influence 2", "Influence 4", crystals.White, "basic"),
  new Card().initializeSimpleCard("Threaten", "Influence 2", "Influence 5. Reputation -1", crystals.Red, "basic"),
  new Card().initializeSimpleCard("Crystallize", "When you play this, also pay one mana of a basic color. Gain a crystal of that color to your Inventory.", "Gain a crystal of any color to your Inventory.", crystals.Blue, "basic"),
  new Card().initializeSimpleCard("Mana Draw", "You can use one additional mana die from the Source this turn.", "Take a mana die from the source and set it to any color except gold. Gain two mana tokens of that color. Do not reroll this die when you return it to the Source.", crystals.White, "basic"),
  new Card().initializeSimpleCard("Concentration", "Gain a blue, white or red mana token.", "When you play this, play another Action card with it. Get the stronger effect of that card for free. If that effect gives you Move, Influence, Block or any type of Attack, get that amount plus 2", crystals.Green, "basic"),
  new Card().initializeSimpleCard("Improvisation", "Discard another card from your hand to get Move 3, Influence 3, Attack 3 or Block 3", "Discard another card from your hand to get Move 5, Influence 5, Attack 5 or Block 5", crystals.Red, "basic")
]

export const startingDeck_Goldyx = [
  new Card().initializeSimpleCard("Rage", "Attack or Block 2", "Attack 4", crystals.Red, "basic"),
  new Card().initializeSimpleCard("Rage", "Attack or Block 2", "Attack 4", crystals.Red, "basic"),
  new Card().initializeSimpleCard("Determination", "Attack or Block 2", "Block 4", crystals.Blue, "basic"),
  new Card().initializeSimpleCard("Swiftness", "Move 2", "Ranged Attack 3", crystals.White, "basic"),
  new Card().initializeSimpleCard("Swiftness", "Move 2", "Ranged Attack 3", crystals.White, "basic"),
  new Card().initializeSimpleCard("March", "Move 2", "Move 4", crystals.Green, "basic"),
  new Card().initializeSimpleCard("March", "Move 2", "Move 4", crystals.Green, "basic"),
  new Card().initializeSimpleCard("Stamina", "Move 2", "Move 4", crystals.Blue, "basic"),
  new Card().initializeSimpleCard("Stamina", "Move 2", "Move 4", crystals.Blue, "basic"),
  new Card().initializeSimpleCard("Tranquility", "Heal 1 or Draw a Card", "Heal 2 or Draw two Cards", crystals.Green, "basic"),
  new Card().initializeSimpleCard("Promise", "Influence 2", "Influence 4", crystals.White, "basic"),
  new Card().initializeSimpleCard("Threaten", "Influence 2", "Influence 5. Reputation -1", crystals.Red, "basic"),
  new Card().initializeSimpleCard("Crystal Joy", "Pay a mana of any basic color to gain a crystal of that color to your inventory. At the end of your turn, you may discard another non-Wound card to take this card back to your hand.", "Gain a crystal of any basic color to your Inventory. At the end of your turn, you may discard another card including a Wound to take this card back to your hand.", crystals.Blue, "basic"),
  new Card().initializeSimpleCard("Mana Draw", "You can use one additional mana die from the Source this turn.", "Take a mana die from the source and set it to any color except gold. Gain two mana tokens of that color. Do not reroll this die when you return it to the Source.", crystals.White, "basic"),
  new Card().initializeSimpleCard("Will Focus", "Gain a blue, white or red mana token, or gain a green crystal to your Inventory", "When you play this, play another Action card with it. Get the stronger effect of that card for free. If that effect gives you Move, Influence, Block or any type of Attack, get that amount plus 3", crystals.Green, "basic"),
  new Card().initializeSimpleCard("Improvisation", "Discard another card from your hand to get Move 3, Influence 3, Attack 3 or Block 3", "Discard another card from your hand to get Move 5, Influence 5, Attack 5 or Block 5", crystals.Red, "basic")
] 

export const startingDeck_Norrowas = [
  new Card().initializeSimpleCard("Rage", "Attack or Block 2", "Attack 4", crystals.Red, "basic"),
  new Card().initializeSimpleCard("Rage", "Attack or Block 2", "Attack 4", crystals.Red, "basic"),
  new Card().initializeSimpleCard("Determination", "Attack or Block 2", "Block 4", crystals.Blue, "basic"),
  new Card().initializeSimpleCard("Swiftness", "Move 2", "Ranged Attack 3", crystals.White, "basic"),
  new Card().initializeSimpleCard("Swiftness", "Move 2", "Ranged Attack 3", crystals.White, "basic"),
  new Card().initializeSimpleCard("March", "Move 2", "Move 4", crystals.Green, "basic"),
  new Card().initializeSimpleCard("March", "Move 2", "Move 4", crystals.Green, "basic"),
  new Card().initializeSimpleCard("Stamina", "Move 2", "Move 4", crystals.Blue, "basic"),
  new Card().initializeSimpleCard("Stamina", "Move 2", "Move 4", crystals.Blue, "basic"),
  new Card().initializeSimpleCard("Rejuvenate", "Heal 1, draw a card, gain a green mana token, or ready a level I or II Unit.", "Heal 2, draw two cards, gain a green mana crystal to your inventory, or ready a level I, II or III Unit.", crystals.Green, "basic"),
  new Card().initializeSimpleCard("Noble Manners", "Influence 2. If you use this during interaction you get Fame +1 at the end of the turn.", "Influence 4. If you use this during interaction you get Fame +1 and Reputation +1 at the end of the turn.", crystals.White, "basic"),
  new Card().initializeSimpleCard("Threaten", "Influence 2", "Influence 5. Reputation -1", crystals.Red, "basic"),
  new Card().initializeSimpleCard("Crystallize", "Pay a mana of any basic color to gain a crystal of that color to your inventory. At the end of your turn, you may discard another non-Wound card to take this card back to your hand.", "Gain a crystal of any basic color to your Inventory. At the end of your turn, you may discard another card including a Wound to take this card back to your hand.", crystals.Blue, "basic"),
  new Card().initializeSimpleCard("Mana Draw", "You can use one additional mana die from the Source this turn.", "Take a mana die from the source and set it to any color except gold. Gain two mana tokens of that color. Do not reroll this die when you return it to the Source.", crystals.White, "basic"),
  new Card().initializeSimpleCard("Concentration", "Gain a blue, white or red mana token, or gain a green crystal to your Inventory", "When you play this, play another Action card with it. Get the stronger effect of that card for free. If that effect gives you Move, Influence, Block or any type of Attack, get that amount plus 3", crystals.Green, "basic"),
  new Card().initializeSimpleCard("Improvisation", "Discard another card from your hand to get Move 3, Influence 3, Attack 3 or Block 3", "Discard another card from your hand to get Move 5, Influence 5, Attack 5 or Block 5", crystals.Red, "basic")
] 

export const startingDeck_Tovak = [
  new Card().initializeSimpleCard("Rage", "Attack or Block 2", "Attack 4", crystals.Red, "basic"),
  new Card().initializeSimpleCard("Rage", "Attack or Block 2", "Attack 4", crystals.Red, "basic"),
  new Card().initializeSimpleCard("Cold Toughness", "Ice Attack 2 or Ice Block 3", "Ice Block 5. Get +1 Ice Block for each special ability, color of attack and resistance on the blocked enemy token (or for each mana spent by an opponent during the attack).", crystals.Blue, "basic"),
  new Card().initializeSimpleCard("Swiftness", "Move 2", "Ranged Attack 3", crystals.White, "basic"),
  new Card().initializeSimpleCard("Swiftness", "Move 2", "Ranged Attack 3", crystals.White, "basic"),
  new Card().initializeSimpleCard("March", "Move 2", "Move 4", crystals.Green, "basic"),
  new Card().initializeSimpleCard("March", "Move 2", "Move 4", crystals.Green, "basic"),
  new Card().initializeSimpleCard("Stamina", "Move 2", "Move 4", crystals.Blue, "basic"),
  new Card().initializeSimpleCard("Stamina", "Move 2", "Move 4", crystals.Blue, "basic"),
  new Card().initializeSimpleCard("Tranquility", "Heal 1, draw a card, gain a green mana token, or ready a level I or II Unit.", "Heal 2, draw two cards, gain a green mana crystal to your inventory, or ready a level I, II or III Unit.", crystals.Green, "basic"),
  new Card().initializeSimpleCard("Promise", "Influence 2. If you use this during interaction you get Fame +1 at the end of the turn.", "Influence 4. If you use this during interaction you get Fame +1 and Reputation +1 at the end of the turn.", crystals.White, "basic"),
  new Card().initializeSimpleCard("Threaten", "Influence 2", "Influence 5. Reputation -1", crystals.Red, "basic"),
  new Card().initializeSimpleCard("Crystallize", "Pay a mana of any basic color to gain a crystal of that color to your inventory. At the end of your turn, you may discard another non-Wound card to take this card back to your hand.", "Gain a crystal of any basic color to your Inventory. At the end of your turn, you may discard another card including a Wound to take this card back to your hand.", crystals.Blue, "basic"),
  new Card().initializeSimpleCard("Mana Draw", "You can use one additional mana die from the Source this turn.", "Take a mana die from the source and set it to any color except gold. Gain two mana tokens of that color. Do not reroll this die when you return it to the Source.", crystals.White, "basic"),
  new Card().initializeSimpleCard("Concentration", "Gain a blue, white or red mana token, or gain a green crystal to your Inventory", "When you play this, play another Action card with it. Get the stronger effect of that card for free. If that effect gives you Move, Influence, Block or any type of Attack, get that amount plus 3", crystals.Green, "basic"),
  new Card().initializeSimpleCard("Instinct", "Move 2, Influence 2, Attack 2 or Block 2", "Move 4, Influence 4, Attack 4 or Block 4", crystals.Red, "basic")
] 

export const startingDeck_Arythea = [
  new Card().initializeSimpleCard("Rage", "Attack or Block 2", "Attack 4", crystals.Red, "basic"),
  new Card().initializeSimpleCard("Battle Versatility", "Attack 2, Block 2 or Ranged Attack 1.", "Attack 4, Block 4, Fire Attack 3, Fire Block 3, Ranged Attack 3 or Siege Attack 2.", crystals.Red, "basic"),
  new Card().initializeSimpleCard("Determination", "Attack or Block 2", "Block 4", crystals.Blue, "basic"),
  new Card().initializeSimpleCard("Swiftness", "Move 2", "Ranged Attack 3", crystals.White, "basic"),
  new Card().initializeSimpleCard("Swiftness", "Move 2", "Ranged Attack 3", crystals.White, "basic"),
  new Card().initializeSimpleCard("March", "Move 2", "Move 4", crystals.Green, "basic"),
  new Card().initializeSimpleCard("March", "Move 2", "Move 4", crystals.Green, "basic"),
  new Card().initializeSimpleCard("Stamina", "Move 2", "Move 4", crystals.Blue, "basic"),
  new Card().initializeSimpleCard("Stamina", "Move 2", "Move 4", crystals.Blue, "basic"),
  new Card().initializeSimpleCard("Tranquility", "Heal 1 or Draw a Card", "Heal 2 or Draw two Cards", crystals.Green, "basic"),
  new Card().initializeSimpleCard("Promise", "Influence 2", "Influence 4", crystals.White, "basic"),
  new Card().initializeSimpleCard("Threaten", "Influence 2", "Influence 5. Reputation -1", crystals.Red, "basic"),
  new Card().initializeSimpleCard("Crystallize", "When you play this, also pay one mana of a basic color. Gain a crystal of that color to your Inventory.", "Gain a crystal of any color to your Inventory.", crystals.Blue, "basic"),
  new Card().initializeSimpleCard("Mana Pull", "You can use one additional mana die from the Source this turn. If that die is black, use it to produce mana of any color.", "Take two mana dice from the source and set them to any color except gold. Gain a mana token of each of these colors. Do not reroll these dice when you return them to the Source.", crystals.White, "basic"),
  new Card().initializeSimpleCard("Concentration", "Gain a blue, white or red mana token.", "When you play this, play another Action card with it. Get the stronger effect of that card for free. If that effect gives you Move, Influence, Block or any type of Attack, get that amount plus 2", crystals.Green, "basic"),
  new Card().initializeSimpleCard("Improvisation", "Discard another card from your hand to get Move 3, Influence 3, Attack 3 or Block 3", "Discard another card from your hand to get Move 5, Influence 5, Attack 5 or Block 5", crystals.Red, "basic")
]

//Braevelar Starting Deck
export const startingDeck_Braevelar = [
  new Card().initializeSimpleCard("Rage", "Attack or Block 2", "Attack 4", crystals.Red, "basic"),
  new Card().initializeSimpleCard("Battle Versatility", "Attack 2, Block 2 or Ranged Attack 1.", "Attack 4, Block 4, Fire Attack 3, Fire Block 3, Ranged Attack 3 or Siege Attack 2.", crystals.Red, "basic"),
  new Card().initializeSimpleCard("Determination", "Attack or Block 2", "Block 4", crystals.Blue, "basic"),
  new Card().initializeSimpleCard("Swiftness", "Move 2", "Ranged Attack 3", crystals.White, "basic"),
  new Card().initializeSimpleCard("Swiftness", "Move 2", "Ranged Attack 3", crystals.White, "basic"),
  new Card().initializeSimpleCard("March", "Move 2", "Move 4", crystals.Green, "basic"),
  new Card().initializeSimpleCard("One With the Land", "Move 2, Heal 1, or Block 2", "Move 4, Heal 2, or Block equal to the unmodified Move cost of the space you are in (Mountain 5, Lakes 2). This is Fire Block in the day, and Ice Block at night.", crystals.Green, "basic"),
  new Card().initializeSimpleCard("Stamina","Move 2", "Move 4", crystals.Blue, "basic"),
  new Card().initializeSimpleCard("Druidic Paths", "Move 2. The move cost of one space is Reduced by 1 this turn, to a minimum of 2.", "Move 4. The move cost of one type of terrain is Reduced by 1 this turn, to a minimum of 2.", crystals.Blue, "basic"),
  new Card().initializeSimpleCard("Tranquility", "Heal 1 or Draw a Card", "Heal 2 or Draw two Cards", crystals.Green, "basic"),
  new Card().initializeSimpleCard("Promise", "Influence 2", "Influence 4", crystals.White, "basic"),
  new Card().initializeSimpleCard("Threaten", "Influence 2", "Influence 5. Reputation -1", crystals.Red, "basic"),
  new Card().initializeSimpleCard("Crystallize", "When you play this, also pay one mana of a basic color. Gain a crystal of that color to your Inventory.", "Gain a crystal of any color to your Inventory.", crystals.Blue, "basic"),
  new Card().initializeSimpleCard("Mana Pull", "You can use one additional mana die from the Source this turn. If that die is black, use it to produce mana of any color.", "Take two mana dice from the source and set them to any color except gold. Gain a mana token of each of these colors. Do not reroll these dice when you return them to the Source.", crystals.White, "basic"),
  new Card().initializeSimpleCard("Concentration", "Gain a blue, white or red mana token.", "When you play this, play another Action card with it. Get the stronger effect of that card for free. If that effect gives you Move, Influence, Block or any type of Attack, get that amount plus 2", crystals.Green, "basic"),
  new Card().initializeSimpleCard("Improvisation", "Discard another card from your hand to get Move 3, Influence 3, Attack 3 or Block 3", "Discard another card from your hand to get Move 5, Influence 5, Attack 5 or Block 5", crystals.Red, "basic")
]

//Wolfhawk Starting Deck
export const startingDeck_Wolfhawk = [
  new Card().initializeSimpleCard("Rage", "Attack or Block 2", "Attack 4", crystals.Red, "basic"),
  new Card().initializeSimpleCard("Rage", "Attack or Block 2", "Attack 4", crystals.Red, "basic"),
  new Card().initializeSimpleCard("Determination", "Attack or Block 2", "Block 4", crystals.Blue, "basic"),
  new Card().initializeSimpleCard("Swiftness", "Move 2", "Ranged Attack 3", crystals.White, "basic"),
  new Card().initializeSimpleCard("Swift Reflexes", "Move 2, Ranged Attack 1, or reduce one enemy attack by 1.", "Move 4, Ranged Attack 3, or reduce one enemy attack by 2.", crystals.White, "basic"),
  new Card().initializeSimpleCard("March", "Move 2", "Move 4", crystals.Green, "basic"),
  new Card().initializeSimpleCard("March", "Move 2", "Move 4", crystals.Green, "basic"),
  new Card().initializeSimpleCard("Stamina", "Move 2", "Move 4", crystals.Blue, "basic"),
  new Card().initializeSimpleCard("Tirelessness", "Move 2. The next card providing Move (including cards played sideways) gives 1 extra move this turn.", "Move 4. Each other card providing move (including cards played sideways) gives one extra Move this turn.", crystals.Blue, "basic"),
  new Card().initializeSimpleCard("Tranquility", "Heal 1 or Draw a Card", "Heal 2 or Draw two Cards", crystals.Green, "basic"),
  new Card().initializeSimpleCard("Promise", "Influence 2", "Influence 4", crystals.White, "basic"),
  new Card().initializeSimpleCard("Threaten", "Influence 2", "Influence 5. Reputation -1", crystals.Red, "basic"),
  new Card().initializeSimpleCard("Crystallize", "When you play this, also pay one mana of a basic color. Gain a crystal of that color to your Inventory.", "Gain a crystal of any color to your Inventory.", crystals.Blue, "basic"),
  new Card().initializeSimpleCard("Mana Draw", "You can use one additional mana die from the Source this turn.", "Take a mana die from the source and set it to any color except gold. Gain two mana tokens of that color. Do not reroll this die when you return it to the Source.", crystals.White, "basic"),
  new Card().initializeSimpleCard("Concentration", "Gain a blue, white or red mana token.", "When you play this, play another Action card with it. Get the stronger effect of that card for free. If that effect gives you Move, Influence, Block or any type of Attack, get that amount plus 2", crystals.Green, "basic"),
  new Card().initializeSimpleCard("Improvisation", "Discard another card from your hand to get Move 3, Influence 3, Attack 3 or Block 3", "Discard another card from your hand to get Move 5, Influence 5, Attack 5 or Block 5", crystals.Red, "basic")
]

//Krang Starting Deck
export const startingDeck_Krang = [
  new Card().initializeSimpleCard("Rage", "Attack or Block 2", "Attack 4", crystals.Red, "basic"),
  new Card().initializeSimpleCard("Rage", "Attack or Block 2", "Attack 4", crystals.Red, "basic"),
  new Card().initializeSimpleCard("Determination", "Attack or Block 2", "Block 4", crystals.Blue, "basic"),
  new Card().initializeSimpleCard("Swiftness", "Move 2", "Ranged Attack 3", crystals.White, "basic"),
  new Card().initializeSimpleCard("Swiftness", "Move 2", "Ranged Attack 3", crystals.White, "basic"),
  new Card().initializeSimpleCard("Savage Harvesting", "Move 2. Once this turn when you move a space you may discard a card to gain a crystal of the same color. If you discard an Artifact you may choose the color.", "Move 4. Each time you move a space you may discard a card to gain a crystal of the same color. If you discard an Artifact you may choose the color.", crystals.Green, "basic"),
  new Card().initializeSimpleCard("March", "Move 2", "Move 4", crystals.Green, "basic"),
  new Card().initializeSimpleCard("Stamina", "Move 2", "Move 4", crystals.Blue, "basic"),
  new Card().initializeSimpleCard("Stamina", "Move 2", "Move 4", crystals.Blue, "basic"),
  new Card().initializeSimpleCard("Tranquility", "Heal 1 or Draw a Card", "Heal 2 or Draw two Cards", crystals.Green, "basic"),
  new Card().initializeSimpleCard("Promise", "Influence 2", "Influence 4", crystals.White, "basic"),
  new Card().initializeSimpleCard("Ruthless Coercion", "Influence 2. You may get a discount of 2 towards the cost of recruiting one Unit. If you recruit that Unit this turn then Reputation -1", "Influence 6. Reputation -1. You may ready level I and II Units you control by paying 2 Influence per level of Unit.", crystals.Red, "basic"),
  new Card().initializeSimpleCard("Crystallize", "When you play this, also pay one mana of a basic color. Gain a crystal of that color to your Inventory.", "Gain a crystal of any color to your Inventory.", crystals.Blue, "basic"),
  new Card().initializeSimpleCard("Mana Draw", "You can use one additional mana die from the Source this turn.", "Take a mana die from the source and set it to any color except gold. Gain two mana tokens of that color. Do not reroll this die when you return it to the Source.", crystals.White, "basic"),
  new Card().initializeSimpleCard("Concentration", "Gain a blue, white or red mana token.", "When you play this, play another Action card with it. Get the stronger effect of that card for free. If that effect gives you Move, Influence, Block or any type of Attack, get that amount plus 2", crystals.Green, "basic"),
  new Card().initializeSimpleCard("Improvisation", "Discard another card from your hand to get Move 3, Influence 3, Attack 3 or Block 3", "Discard another card from your hand to get Move 5, Influence 5, Attack 5 or Block 5", crystals.Red, "basic")
]

export const advancedActions = [
  new Card().initializeSimpleCard("Fire Bolt", "Gain a red crystal to your Inventory.", "Ranged Fire Attack 3", crystals.Red, "advancedAction"),
  new Card().initializeSimpleCard("Ice Bolt", "Gain a blue crystal to your Inventory.", "Ranged Ice Attack 3", crystals.Blue, "advancedAction"),
  new Card().initializeSimpleCard("Swift Bolt", "Gain a white crystal to your Inventory.", "Ranged Attack 4", crystals.White, "advancedAction"),
  new Card().initializeSimpleCard("Crushing Bolt", "Gain a green crystal to your Inventory.", "Siege Attack 3", crystals.Green, "advancedAction"),
  new Card().initializeSimpleCard("Blood Rage", "Attack 2. You can take a Wound to increase this to Attack 5", "Attack 4. You can take a Wound to increase this to Attack 9.", crystals.Red, "advancedAction"),
  new Card().initializeSimpleCard("Ice Shield", "Ice Block 3", "Ice Block 3. Reduce the Armor of one enemy blocked this way by 3. Armor cannot be reduced below 1.", crystals.Blue, "advancedAction"),
  new Card().initializeSimpleCard("Agility", "Move 2. During combat this turn, you may spend Move points to get Attack 1 for each.", "Move 4. During combat this turn, you may spend any amount of Move points: 1 to get Attack 1 and/or 2 to get Ranged Attack 1.", crystals.White, "advancedAction"),
  new Card().initializeSimpleCard("Refreshing Walk", "Move 2 and Heal 1", "Move 4 and Heal 2", crystals.Green, "advancedAction"),
  new Card().initializeSimpleCard("Intimidate", "Influence 4 or Attack 3. Reputation -1.", "Influence 8 or Attack 7. Reputation -2.", crystals.Red, "advancedAction"),
  new Card().initializeSimpleCard("Frost Bridge", "Move 2. The Move cost of swamps is reduced to 1 this turn.", "Move 4. You are able to travel through lakes, and the Move cost of lakes and swamps is reduced to 1 this turn.", crystals.Blue, "advancedAction"),
  new Card().initializeSimpleCard("Song of Wind", "Move 2. The Move cost of plains, deserts and wastelands is reduced by 1, to a minimum of 0 this turn.", "Move 2. The Move cost of plains, deserts and wastelands is reduced by 2, to a minimum of 0. You may pay a blue mana to be able to travel through lakes for Move cost 0 this turn.", crystals.White, "advancedAction"),
  new Card().initializeSimpleCard("Path Finding", "Move 2. The Move cost of all terrains is reduced by 1, to a minimum of 2, this turn.", "Move 4. The Move cost of all terrains is reduced to 2 this turn.", crystals.Green, "advancedAction"),
  new Card().initializeSimpleCard("Blood Ritual", "Take a Wound. Gain a red mana token and a mana token of any color (including non-basic).", "Take a Wound. Gain three mana tokens of any colors (including non-basic).", crystals.Red, "advancedAction"),
  new Card().initializeSimpleCard("Pure Magic", "When you play this, pay a mana. If you paid Green, Move 4. If you paid White, Influence 4. If you paid Blue, Block 4. If you paid Red, Attack 4.", "When you play this, pay a mana. If you paid Green, Move 7. If you paid White, Influence 7. If you paid Blue, Block 7. If you paid Red, Attack 7.", crystals.Blue, "advancedAction"),
  new Card().initializeSimpleCard("Heroic Tale", "Influence 3. Reputation +1 for each Unit you recruit this turn.", "Influence 6.  Fame +1 and Reputation +1 for each Unit you recruit this turn.", crystals.White, "advancedAction"),
  new Card().initializeSimpleCard("Regeneration", "Heal 1. Ready a Level I or II Unit you control.", "Heal 2. Ready a Level I, II or III Unit you control.", crystals.Green, "advancedAction"),
  new Card().initializeSimpleCard("Into the Heat", "Play this card at the start of the combat. All of your Units get their Attack and Block values increased by 2 this combat. You cannot assign damage to Units this turn.", "Play this card at the start of the combat. All of your Units get their Attack and Block values increased by 3 this combat. You cannot assign damage to Units this turn.", crystals.Red, "advancedAction"),
  new Card().initializeSimpleCard("Steady Tempo", "Move 2. At the end of your turn, instead of putting this card in your discard pile, you may place it on the bottom of your deed deck as long as it is not empty.", "Move 4. At the end of your turn, instead of putting this card in your discard pile, you may place it on top of your Deed deck.", crystals.Blue, "advancedAction"),
  new Card().initializeSimpleCard("Diplomacy", "Influence 2. You may use Influence as Block this turn.", "Influence 4. Choose Ice or Fire. You may use Influence as Block for the chosen element this turn.", crystals.White, "advancedAction"),
  new Card().initializeSimpleCard("In Need", "Influence 2. Get an additional Influence 1 for each Wound card in your hand or on a Unit you control.", "Influence 4. Get an additional Influence 2 for each Wound card in your hand or on a Unit you control.", crystals.Green, "advancedAction"),
  new Card().initializeSimpleCard("Decompose", "When you play this card, throw away an Action card from hand. Gain two crystals to your Inventory that are the same color as the thrown away card.", "When you play this card, throw away an Action card from hand. Gain a crystal to your Inventory of each basic color that does not match the color of the thrown away card.", crystals.Red, "advancedAction"),
  new Card().initializeSimpleCard("Crystal Mastery", "Gain a crystal to your Inventory of the same color as a crystal you already own.", "Any crystal you spend this turn are returned to your Inventory at the end of the turn.", crystals.Blue, "advancedAction"),
  new Card().initializeSimpleCard("Mana Storm", "Choose a mana die in the Source that is showing a basic color. Gain a crystal of that color to your Inventory, then immediately reroll that die and return it to the Source.", "Reroll all dice in the Source. You can use three extra dice from the Source, and you can use dice showing black or gold as mana of any basic color, regardless of the Round.", crystals.White, "advancedAction"),
  new Card().initializeSimpleCard("Ambush", "Move 2. Add +1 to your first Attack card of any type or +2 to your first Block card of any type, whichever you play first this turn.", "Move 4. Add +2 to your first Attack card of any type or +4 to your first Block card of any type, whichever you play first this turn.", crystals.Green, "advancedAction"),
  new Card().initializeSimpleCard("Maximal Effect", "When you play this, play another Action card with it. Use the basic effect of that card three times. Then, throw away that card.", "When you play this, play another Action card with it. Use the advanced effect of that card two times (for free). Then, throw away that card.", crystals.Red, "advancedAction"),
  new Card().initializeSimpleCard("Magic Talent", "Discard a card from your hand. You may play one Spell card in the Spells offer this turn as if it were in your hand. That card remains in the Spells offer.", "When you play this, pay a mana of any color. Gain a Spell card of that color from the Spells offer and put it in your discard pile.", crystals.Blue, "advancedAction"),
  new Card().initializeSimpleCard("Learning", "Influence 2. Once during this turn, you may pay Influence 6 to gain an Advanced Action card from the Advanced Actions offer to your discard pile.", "Influence 4. Once during this turn, you may pay Influence 9 to gain an Advanced Action card from the Advanced Actions offer to your hand.", crystals.White, "advancedAction"),
  new Card().initializeSimpleCard("Training", "Throw away an Action card from your hand, then take a card of the same color from the Advanced Actions offer and put it into your discard pile.", "Throw away an Action card from your hand, then take a card of the same color from the Advanced Actions offer and put it into your hand.", crystals.Green, "advancedAction"),
  new Card().initializeSimpleCard("Counterattack", "Attack 2. Get an additional Attack 2 for each enemy blocked this turn.", "Attack 4. Get an additional Attack 3 for each enemy blocked this turn.",crystals.Red, "advancedAction"),
  new Card().initializeSimpleCard("Ritual Attack", "Throw away another action card. Depending on its color, you get: Attack 5 for red, Ice Attack 3 for blue, Ranged Attack 3 for white, Siege Attack 2 for green.", "Throw away another action card. Depending on its color, you get: Fire Attack 6 for red, Cold Fire Attack 4 for blue, Ranged Fire Attack 4 for white, Siege Fire Attack 3 for green.", crystals.White, "advancedAction"),
  new Card().initializeSimpleCard("Mountain Lore", "Move 3. If you end your turn in hills, your Hand limit is higher by 1 the next time you draw cards.", "Move 5. You can enter mountains at a Move costs of 5 and they are considered a safe space for you at the end of this turn. If you end your turn in mountains /hills, your Hand limit is higher by 2/1 the next time you draw cards.", crystals.Green, "advancedAction"),
  new Card().initializeSimpleCard("Force of Nature", "Chosen Unit gains physical resistance this combat.", "Siege Attack 3 or Block 6",crystals.Green, "advancedAction"),
  new Card().initializeSimpleCard("Stout Resolve", "Move 2, Influence 2, Attack 2 or Block 2. You may discard a Wound to increase the effect by 1.", "Move 3, Influence 3, Attack 3 or Block 3. You may discard any number of cards , including one Wound, to increase the effect by 2 for each.", crystals.Green, "advancedAction"),
  new Card().initializeSimpleCard("Dodge and Weave", "Reduce one enemy attack by 2. Gain Attack 1 in the Attack phase if you did not add any Wounds to your hand in the previous combat phases.", "Reduce one enemy attack by 4 or two attacks of one or two enemies by 2. Gain Attack 2 in the Attack phase if you did not add any Wounds to your hand in the previous combat phases.",crystals.White, "advancedAction"),
  new Card().initializeSimpleCard("Peaceful Moment", "Influence 3. You may play this as your action for the turn: if you do, you may get Heal 1 for each 2 Influence you spend.", "Influence 6. You may play this as your action for the turn: if you do, you may get Heal 1 for each 2 Influence you spend and/or refresh a Unit paying 2 Influence per level of the Unit.", crystals.White, "advancedAction"),
  new Card().initializeSimpleCard("Chivalry", "Attack 3, or Attack 2 and Reputation +1 for each enemy defeated by this attack.", "Attack 6, or Attack 4 and Reputation +1 and Fame +1 for each enemy defeated by this attack.", crystals.White, "advancedAction"),
  new Card().initializeSimpleCard("Spell Forge", "Gain one crystal to your Inventory of the same color as one of the Spell cards in the Spell offer.", "Gain two crystals to your Inventory of the same color as two of the Spell cards in the Spell offer.", crystals.Blue, "advancedAction"),
  new Card().initializeSimpleCard("Temporal Portal", "Play as your action for this turn. You may move to an adjacent revealed safe space (without provoking rampaging monsters). Whether you move or not, your Hand limit is higher by 1 the next time you draw cards.", "As above, except you can either move two spaces to a revealed safe space instead of one, or get your Hand limit increased by 2 instead of 1.", crystals.Blue, "advancedAction"),
  new Card().initializeSimpleCard("Shield Bash", "Block 3. Counts twice against an attack with Swiftness", "Block 5. Counts twice against an attack with Swiftness. Blocked enemy gets Armor - 1 for each point of block higher than needed (to a minimum of 1).", crystals.Blue, "advancedAction"),
  new Card().initializeSimpleCard("Blood of Ancients", "Gain a Wound. Pay one mana of any color. Gain a card of that color from the Advanced Actions offer and put into your hand.", "Gain a Wound to your hand or discard pile. Use the stronger effect of any card from the Advanced Action offer without paying its mana cost. The card remains in the offer.", crystals.Red, "advancedAction"),
]

export const advancedActionsDualCrystals = [
  new Card().initializeSimpleCard("Power Crystals", "Gain a crystal to your Inventory of a basic color you do not already own.", "Move 4, or Heal 2, or draw two cards. For each set of four different color crystals in your Inventory: Move 2, or Heal 1, or draw a card.", crystals.Blue + " OR " + crystals.Green, "advancedAction"),
  new Card().initializeSimpleCard("Rush of Adrenaline", "For each of the three Wounds you take to your hand this turn, draw a card.", "After taking the first Wound to your hand this turn, throw it away and draw a card. For each of the next three Wounds you take, draw a card.", crystals.Red + " OR " + crystals.Green, "advancedAction"),
  new Card().initializeSimpleCard("Explosive Bolt", "Take a Wound. Gain a white and red crystal to your Inventory.", "Ranged Attack 3. For each enemy defeated by this attack, another enemy gets Armor -1 (to a minimum of 1)", crystals.Red + " OR " + crystals.White, "advancedAction"),
  new Card().initializeSimpleCard("Chilling Stare", "Influence 3, or a chosen enemy attack loses all attack abilities (but not its color).", "Influence 5, or a chosen enemy does not attack this turn.", crystals.White + " OR " + crystals.Blue, "advancedAction"),
]

export const spells = [
  new Card().initializeSimpleCard("Fireball", "Ranged Fire Attack 5.", "Take a Wound. Siege Fire Attack 8.", crystals.Red, "spell"),
  new Card().initializeSimpleCard("Snowstorm", "Ranged Ice Attack 5", "Take a Wound. Siege Ice Attack 8.", crystals.Blue, "spell"),
  new Card().initializeSimpleCard("Expose", "Target enemy loses all fortifications and resistances this combat. Ranged Attack 2.", "Enemies lose all fortifications this combat, or enemies lose all resistances this combat. Ranged Attack 3.", crystals.White, "spell"),
  new Card().initializeSimpleCard("Tremor", "Target enemy gets Armor -3, or all enemies get Armor -2. Armor cannot be reduced below 1.", "Target enemy gets Armor -3 (Armor -6 if it is fortified), or all enemies get Armor -2 (Armor -4 if they are fortified). Armor cannot be reduced below 1.", crystals.Green, "spell"),
  new Card().initializeSimpleCard("Flame Wall", "Fire Attack 5 or Fire Block 7", "Fire Attack 5 or Fire Block 7. This attack or block gets increased by 2 for each enemy token you are facing.",crystals.Red, "spell"),
  new Card().initializeSimpleCard("Mana Bolt", "When you play this, pay a mana. If you paid blue, Ice Attack 8. If you paid red, Cold Fire Attack 7. If you paid white, Ranged Ice Attack 6. If you paid green, Siege Ice Attack 5.", "When you play this, pay a mana. If you paid blue, Ice Attack 11. If you paid red, Cold Fire Attack 10. If you paid white, Ranged Ice Attack 9. If you paid green, Siege Ice Attack 8.", crystals.Blue, "spell"),
  new Card().initializeSimpleCard("Whirlwind", "Target enemy does not attack this combat.", "Play this only in the Attack phase of combat. Destroy target enemy.",crystals.White, "spell"),
  new Card().initializeSimpleCard("Underground Travel", "Move by up to 3 revealed spaces on the map. You may not move to or through swamps or lakes this way, and you must end your move on a safe space. Moving this way does not provoke rampaging enemies", "Same as the basic effect, except you have to end your move on a fortified site (or on a space occupied by another player). It ends your movement and counts as an assault (or as an attack on that player). Ignore site fortifications. If withdrawing after the combat, return to your original position.", crystals.Green, "spell"),
  new Card().initializeSimpleCard("Burning Shield", "Fire Block 4. If this card is used as part of a successful Block, you may use it during your Attack phase as Fire Attack 4.", "Fire Block 4. If this card is used as part of a successful Block, destroy the blocked enemy.", crystals.Red, "spell"),
  new Card().initializeSimpleCard("Chill", "Target enemy does not attack this combat. If it has Fire Resistance, it loses it for the rest of the turn.", "Target enemy does not attack this combat and gets Armor -4 (to a minimum of 1) for the rest of the turn.", crystals.Blue, "spell"),
  new Card().initializeSimpleCard("Wings of Wind", "When you play this, spend 1-5 Move points and move one revealed space on the map for each. You must end your move in a safe space. Moving this way does not provoke rampaging enemies.", "Play this during combat. If you entered combat with at least as many unspent Move points as the number of enemies you are facing, skip the Block and Assign Damage phases of this combat.", crystals.White, "spell"),
  new Card().initializeSimpleCard("Restoration", "Heal 3. If you are in a forest, Heal 5 instead.", "Heal 3. If you are in a forest, Heal 5 instead. Ready up to 3 levels worth of Units. If you are in a forest, Ready up to 5 levels of Units instead.", crystals.Green, "spell"),
  new Card().initializeSimpleCard("Demolish", "Ignore site fortifications this turn. Enemies get Armor -1 (to a minimum of 1).", "Play this only in the Attack phase of combat. Destroy target enemy. Other enemies get Armor -1 (to a minimum of 1).", crystals.Red, "spell"),
  new Card().initializeSimpleCard("Space Bending", "This turn, you may move to spaces and explore new tiles that are 2 spaces away from you as if they were adjacent. Ignore any spaces you leap over this way. Your movement does not provoke rampaging enemies this turn.", "At the end of your turn, set this card aside for the rest of the Round. Put all other cards you played this turn (not those discarded or thrown away) back in your hand. Skip the 'draw new cards' portion of your end of turn step. Immediately take another turn.", crystals.Blue, "spell"),
  new Card().initializeSimpleCard("Call to Arms", "You may use an ability of one Unit in the Units offer this turn, as if it were one of your recruits. You cannot assign damage to this Unit.", "Recruit any one Unit from the Units offer for free. (If you are at your Command limit, you must disband one of your Units first.)", crystals.White, "spell"),
  new Card().initializeSimpleCard("Meditation", "Randomly pick two cards from your discard pile and place them either on the top or bottom of your Deed deck. At the end of this turn, draw two cards over your hand limit.", "Same as the basic effect, except you choose the cards instead of picking them randomly",crystals.Green, "spell"),
  new Card().initializeSimpleCard("Mana Meltdown", "Each other player must randomly choose a crystal in their Inventory to be lost. You may gain one crystal lost this way to your Inventory. Any player that had no crystal in their Inventory when you played this, takes a Wound instead.", "When you play this, choose a basic mana color. Each player, including you, takes a Wound for each crystal of that color they own. Gain two crystal of the chosen color to your Inventory", crystals.Red, "spell"),
  new Card().initializeSimpleCard("Mana Claim", "Take a mana die of a basic color from the Source and keep it in your Play area until the end of the Round. You can either gain 3 mana tokens of that color this turn, or one mana token of that color each turn for the remainder of the Round (starting with your next turn).", "Same as the basic effect. In addition, until the end of the Round: Each time another player uses one or more mana of that color on their turn (from any source), they take a Wound. Each player can get only one Wound per turn this way.", crystals.Blue, "spell"),
  new Card().initializeSimpleCard("Mind Read", "Choose a color. Gain a crystal of the chosen color to your Inventory. Each other player must discard a Spell or Action card of that color from their hand, or reveal their hand to show that they have none.", "Same as the basic effect. In addition to that , you may decide to permanently steal one of the Action cards (not Spells) discarded this way and put it into your hand.",crystals.White, "spell"),
  new Card().initializeSimpleCard("Energy Flow", "Ready a Unit. If you do, you may spend one Unit of level II or less in each other player's Unit area.", "Ready a Unit. If you do, that Unit also gets Healed, and you may spend one unit of level III or less in each other player's Unit area.", crystals.Green, "spell"),
  new Card().initializeSimpleCard("Offering", "Gain a red crystal to your Inventory. You may discard up to 3 non-Wound cards from your hand. For each discarded card gain a crystal of the matching color to your Inventory (for Artifacts you choose).", "Choose green or white, then choose red or blue. Gain Siege Attack 4 (if you choose green) or Ranged Attack 6 (if you choose white) for each pair of crystals of one of each of these colors in your Inventory. This Attack is Fire (if you choose red) or Ice (if you choose blue). Then, turn all these crystal pairs into mana.", crystals.Red, "spell"),
  new Card().initializeSimpleCard("Mist Form", "Move 4. The Move costs of all terrains, including lakes, is 2. You cannot enter hills and mountains for the rest of this turn.", "All your Units gain all resistances. Your hero ignores the first Wound from enemies this turn. Also ignore any additional effects of that wound.", crystals.Blue, "spell"),
  new Card().initializeSimpleCard("Charm", "Influence 4. If you use this during interaction then either gain a crystal of any color to your Inventory or get a discount of 3 towards of one Unit.", "One enemy does not attack. In the Attack phase gain Attack equal to its Attack including elements (if any) but ignore special abilites. You can target only other enemies with that attack.", crystals.White, "spell"),
  new Card().initializeSimpleCard("Cure", "Heal 2. Draw a card for each Wound healed from your hand this turn, and ready each Unit healed this turn.", "All enemies blocked during the Block phase get their Armor reduced to 1.", crystals.Green, "spell"),
]

export const artifacts = [
  new Card().initializeSimpleCard("Banner of Glory", "Assign this to a unit you control. The assigned unit gets armor +1 and +1 to any attacks or blocks it makes. Whenever this unit attacks or blocks, fame +1", "Units you control get armor +1 and +1 to any attacks or blocks the make this turn. Fame +1 for each unit that attacks or blocks this turn.", "","Spell"),
  new Card().initializeSimpleCard("Banner of Fear", "Assign this to a unit you control. During the block phase of combat, you may spend this unit to cancel one attack. If you do, fame +1.", "Skip the block and damage assigning phases of this combat.", "","Spell"),
  new Card().initializeSimpleCard("Banner of Protection", "Assign this to a unit you control. The assigned unit gets armor +1, fire resistance and ice resistance.", "At the end of your turn, you may throw away all wounds you received this turn.", "","Spell"),
  new Card().initializeSimpleCard("Banner of Courage", "Assign this to a unit you control. Once a round, except during combat, you may flip this card face down to ready this unit. At the beginning of a round, flip it face up again.", "You may play this any time other than combat to ready all units you control.", "","Spell"),
  new Card().initializeSimpleCard("Ruby Ring", "Gain a red mana token and a red crystal to your Inventory. Fame +1", "You have an endless supply of red and black mana this turn. Fame +1 for each red Spell you cast this turn.", "","Spell"),
  new Card().initializeSimpleCard("Sapphire Ring", "Gain a blue mana token and a blue crystal to your Inventory. Fame +1", "You have an endless supply of blue and black mana this turn. Fame +1 for each blue Spell you cast this turn.", "","Spell"),
  new Card().initializeSimpleCard("Diamond Ring", "Gain a white mana token and a white crystal to your Inventory. Fame +1", "You have an endless supply of white and black mana this turn. Fame +1 for each white Spell you cast this turn.", "","Spell"),
  new Card().initializeSimpleCard("Emerald Ring", "Gain a green mana token and a green crystal to your Inventory. Fame +1", "You have an endless supply of green and black mana this turn. Fame +1 for each green Spell you cast this turn.", "","Spell"),
  new Card().initializeSimpleCard("Sword of Justice", "When you play this, discard any number of cards from your hand. You get Attack 3 for each card you discard this way. Fame +1 for each enemy you defeat this turn.", "Double the contribution of all physical attacks you play during your Attack phase this turn. Enemies lose physical resistance this turn. Fame +1 for each enemy you defeat this turn.", "","Spell"),
  new Card().initializeSimpleCard("Horn of Wrath", "Siege Attack 6. Roll a mana die. If you roll black or red, you get a Wound.", "Siege Attack 6. You may add up to +6 to this Siege Attack. For each +1 you added roll a mana die. You get a Wound for each black or red rolled.", "","Spell"),
  new Card().initializeSimpleCard("Golden Grail", "Heal 2. Fame +1 for each point of Healing provided by this card you spend this turn.", "Heal 6. Every time you Heal a Wound from hand this turn, draw a card.", "","Spell"),
  new Card().initializeSimpleCard("Endless Bag of Gold", "Influence 4, Fame +2.", "Influence 9, Fame +3.", "","Spell"),
  new Card().initializeSimpleCard("Endless Gem Pouch", "Roll a mana die two times. Gain a crystal to your Inventory for each color rolled this way (if you roll gold, you choose the color). If you roll black, Fame +1 instead of a crystal.", "Gain a mana token of each basic color. Also get one gold (if played at day) or black (if played at night) mana token.", "","Spell"),
  new Card().initializeSimpleCard("Book of Wisdom", "Throw away an Action card from your hand. Gain an Advanced Action card from the Advanced Actions offer to your hand that is the same color as the Action you threw away.", "Throw away an Action card from your hand. Gain a Spell from the Spells offer to your hand that is the same color as the Action you threw away and a Crystal of that color to your Inventory.", "","Spell"),
  new Card().initializeSimpleCard("Amulet of the Sun", "Gain a gold mana token. If played during the Night, forests have their move cost reduced to 3, you can use gold mana, and you reveal garrisons of nearby fortified sites and all ruins as if it were day.", "Same as the basic effect, except you get three gold mana tokens instead of one.", "","Spell"),
  new Card().initializeSimpleCard("Amulet of Darkness", "Gain a mana token of any color. If played during the Day, deserts have their move cost reduced to 3 and you can use black mana as if it were Night.", "Same as the basic effect, except you get three mana tokens of any colors instead of one.", "","Spell"),
  new Card().initializeSimpleCard("Bow of Starsdawn", "When you play this, discard any amount of cards from your hand. You get Ranged Attack 2 for each card you discard this way. Fame 1 for each enemy you defeat in the current phase of combat.", "Each of your Ranged Attacks this turn is either doubled, or becomes a Siege Attack of the same element. You may also double any Siege attacks, but they become Ranged Attacks of the same element.", "","Spell"),
  new Card().initializeSimpleCard("Banner of Command", "Influence 4. If you recruited a Unit this turn, you may assign this card to it instead of a Command token. Put this card face down over the Unit when it is spent, and return it face up under it whenever it is ready.", "Gain Fame +2. Recruit any one Unit from the Units offer for free. (If you are at your Command limit, you must disband one of your units first.)", "","Spell"),
  new Card().initializeSimpleCard("Banner of Fortitude", "Assign this to a unit you control. Once a Round, when the Unit is about to get wounded, flip this card to ignore the Wound and any additional effects from it. The Unit can still only be assigned damage once each combat.", "Anytime except during combat: Heal all of your Units completely.", "","Spell"),
  new Card().initializeSimpleCard("Soul Harvester", "Attack 3. For one enemy defeated by this attack gain one crystal to your inventory. It may be red if the enemy had Fire Resistance, blue if it had Ice Resistance, green if it had Physical Resistance. You may always choose white.", "Attack 8. Gain one crystal as above for each enemy defeated in the current phase of combat.", "","Spell"),
  new Card().initializeSimpleCard("Shield of the Fallen Kings", "Block 6, or two Block 4 against different attacks.", "Cold Fire Block 8, or up to three Cold Fire Block 4 against different attacks.", "","Spell"),
  new Card().initializeSimpleCard("Druidic Staff", "Discard a card. Depending on its color, you get: White: Move up to 2 revealed spaces, to a safe space; Blue: Get two crystals of any one color; Red: Ready a level III Unit or lower; Green: Heal 3.", "Choose two of the options above, without discarding any cards.", "","Spell"),
  new Card().initializeSimpleCard("Circlet of Proficiency", "Use any non-interactive Skill in the Common Skills offer (including your own) as if it were your Skill. If it is a Skill usable each turn (one that does not flip), use its effect twice.", "Take any Skill in the Common Skills offer (including your own) and keep it for the rest of the game, as if acquired through a Level Up.", "","Spell"),
  new Card().initializeSimpleCard("Tome of All Spells", "Discard a card of any color. Use the basic effect of a Spell of the same color from the Spells offer without paying its mana cost.", "Discard a card of any color. Use the stronger effect of a Spell of the same color from the Spells offer without paying its mana cost. You may do so even during the Day.", "","Spell"),
  new Card().initializeSimpleCard("Mysterious Box", "Remove and reveal the top card of the Artifacts deck. This turn, you may use Mysterious Box as if it was that Artifact. If you do then Fame +1.", "At the end of the turn: put the revealed Artifact on the bottom of the Artifacts deck; if you did not use Mysterious Box then put it back in your hand; if you placed it on an unit as a banner then discard it.", "","Spell"),
]

export const Wounds = [
  new Card().initializeBasicCard("Wound", [], "Wound"),
  new Card().initializeBasicCard("Wound", [], "Wound"),
  new Card().initializeBasicCard("Wound", [], "Wound"),
  new Card().initializeBasicCard("Wound", [], "Wound"),
  new Card().initializeBasicCard("Wound", [], "Wound"),
  new Card().initializeBasicCard("Wound", [], "Wound"),
  new Card().initializeBasicCard("Wound", [], "Wound"),
  new Card().initializeBasicCard("Wound", [], "Wound"),
  new Card().initializeBasicCard("Wound", [], "Wound"),
  new Card().initializeBasicCard("Wound", [], "Wound"),
]

export const silverUnits = [
  new Unit().initializeUnit("Peasants",[new Ability().initializeAbility("Attack or Block 2","","Ability 1"),new Ability().initializeAbility("Influence 2","","Ability 2"),new Ability().initializeAbility("Move 2","","Ability 3")],"I","4","3",["Village"],""),
  new Unit().initializeUnit("Peasants",[new Ability().initializeAbility("Attack or Block 2","","Ability 1"),new Ability().initializeAbility("Influence 2","","Ability 2"),new Ability().initializeAbility("Move 2","","Ability 3")],"I","4","3",["Village"],""),
  new Unit().initializeUnit("Peasants",[new Ability().initializeAbility("Attack or Block 2","","Ability 1"),new Ability().initializeAbility("Influence 2","","Ability 2"),new Ability().initializeAbility("Move 2","","Ability 3")],"I","4","3",["Village"],""),
  new Unit().initializeUnit("Herbalists",[new Ability().initializeAbility("Heal 2",crystals.Green,"Ability 1"),new Ability().initializeAbility("Ready a level I or II Unit","","Ability 2"),new Ability().initializeAbility("Gain a green mana token","","Ability 3")],"I","3","2",["Village","Monastery"],""),
  new Unit().initializeUnit("Herbalists",[new Ability().initializeAbility("Heal 2",crystals.Green,"Ability 1"),new Ability().initializeAbility("Ready a level I or II Unit","","Ability 2"),new Ability().initializeAbility("Gain a green mana token","","Ability 3")],"I","3","2",["Village","Monastery"],""),
  new Unit().initializeUnit("Foresters",[new Ability().initializeAbility("Move 2. The move cost of forests, hills and swamps is reduced by 1 this turn, to a minimum of 0.","","Ability 1"),new Ability().initializeAbility("Block 3.","","Ability 2")],"I","5","4",["Village"],""),
  new Unit().initializeUnit("Foresters",[new Ability().initializeAbility("Move 2. The move cost of forests, hills and swamps is reduced by 1 this turn, to a minimum of 0.","","Ability 1"),new Ability().initializeAbility("Block 3.","","Ability 2")],"I","5","4",["Village"],""),
  new Unit().initializeUnit("Utem Crossbowmen",[new Ability().initializeAbility("Attack or Block 3","","Ability 1"),new Ability().initializeAbility("Ranged Attack 2","","Ability 2")],"II","6","4",["Village","Keep"],""),
  new Unit().initializeUnit("Utem Crossbowmen",[new Ability().initializeAbility("Attack or Block 3","","Ability 1"),new Ability().initializeAbility("Ranged Attack 2","","Ability 2")],"II","6","4",["Village","Keep"],""),
  new Unit().initializeUnit("Utem Guardsmen",[new Ability().initializeAbility("Attack 2","","Ability 1"),new Ability().initializeAbility("Block 4. Any enemy blocked this way loses Swiftness.","","Ability 2")],"II","5","5",["Village","Keep"],""),
  new Unit().initializeUnit("Utem Guardsmen",[new Ability().initializeAbility("Attack 2","","Ability 1"),new Ability().initializeAbility("Block 4. Any enemy blocked this way loses Swiftness.","","Ability 2")],"II","5","5",["Village","Keep"],""),
  new Unit().initializeUnit("Utem Swordsmen",[new Ability().initializeAbility("Attack or Block 3","","Ability 1"),new Ability().initializeAbility("Attack or Block 6. This Unit becomes Wounded","","Ability 2")],"II","6","4",["Keep"],""),
  new Unit().initializeUnit("Utem Swordsmen",[new Ability().initializeAbility("Attack or Block 3","","Ability 1"),new Ability().initializeAbility("Attack or Block 6. This Unit becomes Wounded","","Ability 2")],"II","6","4",["Keep"],""),
  new Unit().initializeUnit("Guardian Golems",[new Ability().initializeAbility("Attack or Block 2","","Ability 1"),new Ability().initializeAbility("Fire Block 4.",crystals.Red,"Ability 2"),new Ability().initializeAbility("Ice Block 4.",crystals.Blue,"Ability 3")],"II","7","3",["Keep","Mage Tower"],["Physical"]),
  new Unit().initializeUnit("Guardian Golems",[new Ability().initializeAbility("Attack or Block 2","","Ability 1"),new Ability().initializeAbility("Fire Block 4.",crystals.Red,"Ability 2"),new Ability().initializeAbility("Ice Block 4.",crystals.Blue,"Ability 3")],"II","7","3",["Keep","Mage Tower"],["Physical"]),
  new Unit().initializeUnit("Illusionists",[new Ability().initializeAbility("Influence 4.","","Ability 1"),new Ability().initializeAbility("Target unfortified enemy does not attack this combat.",crystals.White,"Ability 2"),new Ability().initializeAbility("Gain a white crystal to your Inventory.","","Ability 3")],"II","7","2",["Monastery","Mage Tower"],["Physical"]),
  new Unit().initializeUnit("Illusionists",[new Ability().initializeAbility("Influence 4.","","Ability 1"),new Ability().initializeAbility("Target unfortified enemy does not attack this combat.",crystals.White,"Ability 2"),new Ability().initializeAbility("Gain a white crystal to your Inventory.","","Ability 3")],"II","7","2",["Monastery","Mage Tower"],["Physical"]),
  new Unit().initializeUnit("Red Cape Monks",[new Ability().initializeAbility("Attack or Block 3.","","Ability 1"),new Ability().initializeAbility("Fire Attack or Fire Block 4.",crystals.Red,"Ability 2")],"II","7","4",["Monastery"],""),
  new Unit().initializeUnit("Northern Monks",[new Ability().initializeAbility("Attack or Block 3.","","Ability 1"),new Ability().initializeAbility("Ice Attack or Ice Block 4.",crystals.Blue,"Ability 2")],"II","7","4",["Monastery"],""),
  new Unit().initializeUnit("Savage Monks",[new Ability().initializeAbility("Attack or Block 3.","","Ability 1"),new Ability().initializeAbility("Siege Attack 4.",crystals.Green,"Ability 2")],"II","7","4",["Monastery"],""),
  new Unit().initializeUnit("Scouts",[new Ability().initializeAbility("Siege Attack 1","","Ability 1"),new Ability().initializeAbility("Take a look at a face down token within 3 spaces on the map, or at the top token of any unused enemy token pile. If you defeat that token this turn, gain +1 Fame.","","Ability 2"),new Ability().initializeAbility("Move 2. You may reveal a new tile at a distance of 2 spaces instead of 1.","","Ability 3")],"I","4","2",["Village","Monastery","Keep","Mage Tower"," City"],""),
  new Unit().initializeUnit("Scouts",[new Ability().initializeAbility("Siege Attack 1","","Ability 1"),new Ability().initializeAbility("Take a look at a face down token within 3 spaces on the map, or at the top token of any unused enemy token pile. If you defeat that token this turn, gain +1 Fame.","","Ability 2"),new Ability().initializeAbility("Move 2. You may reveal a new tile at a distance of 2 spaces instead of 1.","","Ability 3")],"I","4","2",["Village","Monastery","Keep","Mage Tower"," City"],""),
  new Unit().initializeUnit("Shocktroops",[new Ability().initializeAbility("Ranged Attack 1. All your other Units get +1 to all their Attacks this turn.","","Ability 1"),new Ability().initializeAbility("Reduce Armor and one attack of chosen enemy by 1.","","Ability 2"),new Ability().initializeAbility("Reduce one enemy attack by 3. Any damage from that attack must be assigned to this Unit first, even if that enemy had Assassination.","","Ability 3")],"II","6","3",["Keep"],""),
  new Unit().initializeUnit("Shocktroops",[new Ability().initializeAbility("Ranged Attack 1. All your other Units get +1 to all their Attacks this turn.","","Ability 1"),new Ability().initializeAbility("Reduce Armor and one attack of chosen enemy by 1.","","Ability 2"),new Ability().initializeAbility("Reduce one enemy attack by 3. Any damage from that attack must be assigned to this Unit first, even if that enemy had Assassination.","","Ability 3")],"II","6","3",["Keep"],""),
]

//Weird units, not sure what to do / how to mark their special traits
const silverUnitExtras = [
  new Unit().initializeUnit("Thugs",[new Ability().initializeAbility("Block 3","","Ability 1"),new Ability().initializeAbility("Attack 3, Reputation -1","","Ability 2"),new Ability().initializeAbility("Influence 4, Reputation -1","","Ability 3")],"I","5. Your reputation penalty or bonus is inverted during the interaction in which you recruit the Thugs. (You still cannot recruit them if you are at the X space of the reputation track.)","5, but you have to pay 2 influence to assign damage to the Thugs during combat.",["Village"," Keep"],""),
  new Unit().initializeUnit("Thugs",[new Ability().initializeAbility("Block 3","","Ability 1"),new Ability().initializeAbility("Attack 3, Reputation -1","","Ability 2"),new Ability().initializeAbility("Influence 4, Reputation -1","","Ability 3")],"I","5. Your reputation penalty or bonus is inverted during the interaction in which you recruit the Thugs. (You still cannot recruit them if you are at the X space of the reputation track.)","5, but you have to pay 2 influence to assign damage to the Thugs during combat.",["Village"," Keep"],""),
  //Very strange -- Look up online to know more
  new Unit().initializeUnit("Magic Familiars","","") 
]

export const GoldUnits = [
  new Unit().initializeUnit("Fire Golems",[new Ability().initializeAbility("Attack or Block 3","","Ability 1"),new Ability().initializeAbility("Ranged Fire Attack 4",crystals.Red,"Ability 2")],"III","8","4",["Mage Tower","Keep"],["Physical","Fire"]),
  new Unit().initializeUnit("Fire Golems",[new Ability().initializeAbility("Attack or Block 3","","Ability 1"),new Ability().initializeAbility("Ranged Fire Attack 4",crystals.Red,"Ability 2")],"III","8","4",["Mage Tower","Keep"],["Physical","Fire"]),
  new Unit().initializeUnit("Ice Golems",[new Ability().initializeAbility("Attack or Block 3","","Ability 1"),new Ability().initializeAbility("Ice Attack 6",crystals.Blue,"Ability 2")],"III","8","4",["Mage Tower","Keep"],["Physical","Ice"]),
  new Unit().initializeUnit("Ice Golems",[new Ability().initializeAbility("Attack or Block 3","","Ability 1"),new Ability().initializeAbility("Ice Attack 6",crystals.Blue,"Ability 2")],"III","8","4",["Mage Tower","Keep"],["Physical","Ice"]),
  new Unit().initializeUnit("Fire Mages",[new Ability().initializeAbility("Ranged Fire Attack 3","","Ability 1"),new Ability().initializeAbility("Fire Attack or Fire Block 6",crystals.Red,"Ability 2"),new Ability().initializeAbility("Gain a red mana token and a red crystal to your Inventory.","","Ability 3")],"III","9","4",["Mage Tower","Monastery"],["Fire"]),
  new Unit().initializeUnit("Fire Mages",[new Ability().initializeAbility("Ranged Fire Attack 3","","Ability 1"),new Ability().initializeAbility("Fire Attack or Fire Block 6",crystals.Red,"Ability 2"),new Ability().initializeAbility("Gain a red mana token and a red crystal to your Inventory.","","Ability 3")],"III","9","4",["Mage Tower","Monastery"],["Fire"]),
  new Unit().initializeUnit("Ice Mages",[new Ability().initializeAbility("Ice Attack or Ice Block 4","","Ability 1"),new Ability().initializeAbility("Siege Ice Attack 4",crystals.Blue,"Ability 2"),new Ability().initializeAbility("Gain a blue mana token and a blue crystal to your Inventory.","","Ability 3")],"III","9","4",["Mage Tower","Monastery"],["Ice"]),
  new Unit().initializeUnit("Ice Mages",[new Ability().initializeAbility("Ice Attack or Ice Block 4","","Ability 1"),new Ability().initializeAbility("Siege Ice Attack 4",crystals.Blue,"Ability 2"),new Ability().initializeAbility("Gain a blue mana token and a blue crystal to your Inventory.","","Ability 3")],"III","9","4",["Mage Tower","Monastery"],["Ice"]),
  new Unit().initializeUnit("Amotep Gunners",[new Ability().initializeAbility("Attack or Block 5","","Ability 1"),new Ability().initializeAbility("Ranged Fire Attack 6",crystals.Red,"Ability 2")],"III","8","6",["Keep","City"],""),
  new Unit().initializeUnit("Amotep Gunners",[new Ability().initializeAbility("Attack or Block 5","","Ability 1"),new Ability().initializeAbility("Ranged Fire Attack 6",crystals.Red,"Ability 2")],"III","8","6",["Keep","City"],""),
  new Unit().initializeUnit("Amotep Freezers",[new Ability().initializeAbility("Attack or Block 5","","Ability 1"),new Ability().initializeAbility("Target enemy does not attack this combat and it gets Armor -3 (to a minimum of 1).",crystals.Blue,"Ability 2")],"III","8","6",["Keep","City"],""),
  new Unit().initializeUnit("Amotep Freezers",[new Ability().initializeAbility("Attack or Block 5","","Ability 1"),new Ability().initializeAbility("Target enemy does not attack this combat and it gets Armor -3 (to a minimum of 1).",crystals.Blue,"Ability 2")],"III","8","6",["Keep","City"],""),
  new Unit().initializeUnit("Catapults",[new Ability().initializeAbility("Siege Attack 3","","Ability 1"),new Ability().initializeAbility("Siege Fire Attack 5",crystals.Red,"Ability 2"),new Ability().initializeAbility("Siege Ice Attack 5",crystals.Blue,"Ability 3")],"III","9","4",["Keep","City"],""),
  new Unit().initializeUnit("Catapults",[new Ability().initializeAbility("Siege Attack 3","","Ability 1"),new Ability().initializeAbility("Siege Fire Attack 5",crystals.Red,"Ability 2"),new Ability().initializeAbility("Siege Ice Attack 5",crystals.Blue,"Ability 3")],"III","9","4",["Keep","City"],""),
  new Unit().initializeUnit("Catapults",[new Ability().initializeAbility("Siege Attack 3","","Ability 1"),new Ability().initializeAbility("Siege Fire Attack 5",crystals.Red,"Ability 2"),new Ability().initializeAbility("Siege Ice Attack 5",crystals.Blue,"Ability 3")],"III","9","4",["Keep","City"],""),
  new Unit().initializeUnit("Altem Mages",[new Ability().initializeAbility("Gain 2 mana tokens of any colors","","Ability 1"),new Ability().initializeAbility("Cold Fire attack or Cold Fire Block 5. You can pay a blue or red mana to increase this to 7, or pay both to increase this to 9.","","Ability 2"),new Ability().initializeAbility("Pay a black mana: Choose one: All attacks you play this combat become Cold Fire Attacks, or all your attacks become Siege Attacks in addition to any elements they have.",crystals.Dark,"Ability 3")],"IV","12","5",["City"],["Cold","Fire"]),
  new Unit().initializeUnit("Altem Mages",[new Ability().initializeAbility("Gain 2 mana tokens of any colors","","Ability 1"),new Ability().initializeAbility("Cold Fire attack or Cold Fire Block 5. You can pay a blue or red mana to increase this to 7, or pay both to increase this to 9.","","Ability 2"),new Ability().initializeAbility("Pay a black mana: Choose one: All attacks you play this combat become Cold Fire Attacks, or all your attacks become Siege Attacks in addition to any elements they have.",crystals.Dark,"Ability 3")],"IV","12","5",["City"],["Cold","Fire"]),
  new Unit().initializeUnit("Altem Mages",[new Ability().initializeAbility("Gain 2 mana tokens of any colors","","Ability 1"),new Ability().initializeAbility("Cold Fire attack or Cold Fire Block 5. You can pay a blue or red mana to increase this to 7, or pay both to increase this to 9.","","Ability 2"),new Ability().initializeAbility("Pay a black mana: Choose one: All attacks you play this combat become Cold Fire Attacks, or all your attacks become Siege Attacks in addition to any elements they have.",crystals.Dark,"Ability 3")],"IV","12","5",["City"],["Cold","Fire"]),
  new Unit().initializeUnit("Sorcerers",[new Ability().initializeAbility("Ranged Attack 3","","Ability 1"),new Ability().initializeAbility("Chosen enemy loses all fortifications. Ranged Attack 3.",crystals.White,"Ability 2"),new Ability().initializeAbility("Chosen enemy loses all resistances. Ranged Attack 3.",crystals.Green,"Ability 3")],"III","9.","4",["Mage Tower"," Monastery"],["Cold"]),
  new Unit().initializeUnit("Sorcerers",[new Ability().initializeAbility("Ranged Attack 3","","Ability 1"),new Ability().initializeAbility("Chosen enemy loses all fortifications. Ranged Attack 3.",crystals.White,"Ability 2"),new Ability().initializeAbility("Chosen enemy loses all resistances. Ranged Attack 3.",crystals.Green,"Ability 3")],"III","9.","4",["Mage Tower"," Monastery"],["Cold"]),
]

//Weird units, not sure what to do / how to mark their special traits
const goldUnitExtras = [
  // Must pay 2 influence to use Heroes during an assault or player attack
  new Unit().initializeUnit("Heroes (white)",[new Ability().initializeAbility("Attack or Block 5","","Ability 1"),new Ability().initializeAbility("Ranged Attack 7",crystals.White,"Ability 2"),new Ability().initializeAbility("Influence 5. If used during interaction, Reputation +1.","","Ability 3")],"III","9. Your reputation penalty or bonus is doubled during the interaction in which you recruit the Heroes.","6",["Village"," Keep"," City"],""),
  new Unit().initializeUnit("Heroes (green)",[new Ability().initializeAbility("Attack or Block 5","","Ability 1"),new Ability().initializeAbility("Heal 4",crystals.Green,"Ability 2"),new Ability().initializeAbility("Influence 5. If used during interaction, Reputation +1.","","Ability 3")],"III","9. Your reputation penalty or bonus is doubled during the interaction in which you recruit the Heroes.","3",["Village"," Keep"," City"],["Physical"]),
  new Unit().initializeUnit("Heroes (blue)",[new Ability().initializeAbility("Attack or Block 5","","Ability 1"),new Ability().initializeAbility("Cold Fire Block 8",crystals.Blue,"Ability 2"),new Ability().initializeAbility("Influence 5. If used during interaction, Reputation +1.","","Ability 3")],"III","9. Your reputation penalty or bonus is doubled during the interaction in which you recruit the Heroes.","4",["Village"," Keep"," City"],["Ice"]),
  new Unit().initializeUnit("Heroes (red)",[new Ability().initializeAbility("Attack or Block 5","","Ability 1"),new Ability().initializeAbility("Cold Fire Attack 6",crystals.Red,"Ability 2"),new Ability().initializeAbility("Influence 5. If used during interaction, Reputation +1.","","Ability 3")],"III","9. Your reputation penalty or bonus is doubled during the interaction in which you recruit the Heroes.","4",["Village"," Keep"," City"],["Fire"]),

  // May use multiple abilities to target the same or different targets
  new Unit().initializeUnit("Delphana Masters",[new Ability().initializeAbility("Target enemy does not attack.",crystals.Blue,"Ability 1"),new Ability().initializeAbility("Target enemy is destroyed if blocked.",crystals.Red,"Ability 2"),new Ability().initializeAbility("Armor of target enemy is reduced by 5 (to a minimum of 1).",crystals.Green,"Ability 3"),new Ability().initializeAbility("Target enemy loses all fortifications and resistances.",crystals.White,"Ability 4")],"IV","13. Delphana Masters cannot be used in any way outside of interaction. (They cannot be recruited by Banner of Command or Call to Glory, targeted by Call to Arms, chosen as a reward for conquering certain Ruins, etc.)","3",["City"],["Cold"]),
  new Unit().initializeUnit("Delphana Masters",[new Ability().initializeAbility("Target enemy does not attack.",crystals.Blue,"Ability 1"),new Ability().initializeAbility("Target enemy is destroyed if blocked.",crystals.Red,"Ability 2"),new Ability().initializeAbility("Armor of target enemy is reduced by 5 (to a minimum of 1).",crystals.Green,"Ability 3"),new Ability().initializeAbility("Target enemy loses all fortifications and resistances.",crystals.White,"Ability 4")],"IV","13. Delphana Masters cannot be used in any way outside of interaction. (They cannot be recruited by Banner of Command or Call to Glory, targeted by Call to Arms, chosen as a reward for conquering certain Ruins, etc.)","3",["City"],["Cold"]),
]