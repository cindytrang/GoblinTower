# Goblin Tower Game

## Project Overview
The Goblin Tower game demonstrates basic DOM manipulation using JavaScript in a browser environment. The objective is to control a hero through an adventure, where the hero faces challenges, gains resources, and levels up while exploring the tower.

## Features
- Dynamic hero creation at the start of the game.
- Random encounters with goblins.
- The hero gains health, loses health, or finds gold based on game events.
- Ability to purchase potions with accumulated gold.
- Level progression after every 15 steps.
- Responsive buttons for stepping forward, drinking potions, and buying new potions.

## Hero Attributes
When a new game begins, a hero is created with the following attributes:

- **Name**: User-input via prompt (default is empty until input).
- **Current Level**: Starts at 0.
- **Steps Taken**: Starts at 0.
- **Max Health**: A set value (modifiable in the code).
- **Current Health**: Starts at Max Health.
- **Gold**: Starts between 0 and 5.
- **Potion Container**: Holds a maximum of five potions, starting with one potion.

These values are displayed on the page and automatically update as the game progresses.

## Gameplay

### Hero Movement
Press the **Take Step** button to move the hero forward.
Each step has a random chance of encountering a goblin:
- **No Goblin Encounter**: The hero gains 1 health (up to the maximum).
- **Goblin Encounter**: The hero loses 2 health but gains 1 gold.

### Potions
If the hero has fewer than the maximum health points and at least one potion, a **Drink Potion** button is shown.
- Drinking a potion consumes 1 potion and restores 2 health points.
- The **Drink Potion** button disappears when the hero reaches max health or has no potions.

### Leveling Up and Potion Purchase
Every 15th step, the hero gains a level.
When leveling up, the hero can buy potions for 3 gold each, provided:
- The hero has enough gold.
- There is space in the potion container (maximum of 5).

The **Buy Potions** button appears only at this stage and disappears once the hero takes the next step.
