# alternate-diagonals
A simple module for Foundry VTT which sets the grid to use alternating diagonals.

## This is not required for Foundry v12+

As of Foundry v12 you can now set the diagonal rules for your game under **Configure Settings -> Core -> Square Grid Diagonals**.

This library will be archived for Foundry v11 users.

## About

This Foundry VTT module allows you to apply the alternate diagonals rule to a game system, notably the "Simple World-Building" system.

"Alternate diagonals" is a grid-based rule where every other diagonal square costs double, sometimes referred to as the 1-2-1 diagonal rule.

This is the standard for Pathfinder 2nd Edition, where the first diagonal square costs 5ft of movement, the second 10ft, the third 5ft, and so on.

The code for calculating diagonal movement has been adapted from [D&D5e for Foundry VTT](https://github.com/foundryvtt/dnd5e).

## Installation

Either search for and install this module within Foundry VTT, or copy this address into the `Manifest URL` bar:

```
https://raw.githubusercontent.com/AnthonyEdmonds/alternate-diagonals/main/module.json
```

## Usage

Once enabled, this module should automatically set all grid interactions to use alternate diagonals.

## Issues

This module may not work with game systems which already implement their own movement rules.

If you encounter any problems, raise a ticket on Github and I'll take a look.
