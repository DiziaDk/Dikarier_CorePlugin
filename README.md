# Dikarier Core Plugin for RPG Maker MZ

**Version:** 1.1  
**Author:** Dizia DK (Dikarier Plugin)  
**License:** MIT

A core plugin for RPG Maker MZ, providing a collection of independent utilities and system enhancements to expand the engine's capabilities.

[Read in Russian (Читать на русском)](README_RU.md)

---

## Introduction

Dikarier Core (DCore) is not a dependency for other plugins, but rather a powerful collection of independent utilities and system enhancements for RPG Maker MZ. Its purpose is to extend the default engine capabilities, providing developers with more control and flexibility.

This plugin is modular, allowing for easy management of its components.

## License

This plugin is distributed under the **MIT License**. This means you are free to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software, under the condition that the original copyright notice is included in all copies.

## Requirements

For the **Night OST** and **Timers (in-game days/hours)** modules to work, your project requires another plugin that manages in-game time. This time plugin must update the value of the **Hour Variable** and the **Night Switch** that you configure in this plugin's parameters.

## Installation

1.  Download the `Dikarier_Core.js` file.
2.  Place the file in your project's `js/plugins` folder.
3.  Open your project in RPG Maker MZ, go to the Plugin Manager, and add `Dikarier_Core` to the list.
4.  Configure the plugin parameters as needed.

## Features & Modules

-   **Key Bindings:** Assign common events to key presses.
-   **Unlimit Stats:** Remove engine limits on weapon and armor stats.
-   **Skill Item Requirements:** Block skills if required items are missing.
-   **Auto Fullscreen:** Automatically start the game in full-screen mode.
-   **Night OST:** Dynamically change music based on the time of day.
-   **Timers:** A powerful timer system (seconds, game days, and game hours).
-   **Print Song:** Add an atmospheric typing sound to dialogue messages.
-   **Exit Menu:** Add a customizable exit button to the title screen.
-   **Custom Errors:** Trigger a custom error window via a plugin command.
-   **Global Update:** Execute JS scripts on the map scene every frame.
-   **API Functions:** Use pre-made functions to simplify script calls.

## How to Use

### Unlimit Stats
In a weapon's or armor's notebox, use the `<DikarierUS>` tag:
```
<DikarierUS>
mhp: 5000
atk: 999
price: 10000
</DikarierUS>
```
**Available parameters:** `mhp`, `mmp`, `atk`, `def`, `mat`, `mdf`, `agi`, `luk`, `price`.

### Skill Item Requirements
In a skill's notebox, use the `<DikarierSBI>` tag:
```
<DikarierSBI>
item: 7   // Item ID
count: 1  // Quantity (defaults to 1)
</DikarierSBI>
```
The skill will be unusable if the party lacks the required items, which are consumed upon use.

### Night OST
In a map's notebox, use the `<DikarierNightOST>` tag:
```
<DikarierNightOST: Town_Night>  // Sets the track to Town_Night
<DikarierNightOST: None>        // Disables music at night
```
The music will change when the switch specified in the parameters is ON.

### Exit Menu
Enable the "Add Button to Menu" option in the plugin parameters and customize the texts and window dimensions. The button will appear on the title screen.

### API Functions (for Script Calls)
-   `DCore.itemCount(id, action, count)`
-   `DCore.weaponCount(id, action, count)`
-   `DCore.armorCount(id, action, count)`

The `action` (optional) is a comparison string: `"=="`, `">="`, `"<="`, `">"`, `"<"`. If omitted, `">="` is used.  
**Example:** `DCore.itemCount(10, ">=", 5)` returns true if the party has 5 or more of item ID 10.

-   `DCore.thisRegion()` - Returns the region ID the player is standing on.
-   `DCore.membersInParty(ID)` - Checks if an actor with the specified ID is in the party.
-   `DCore.changeName(ID, length)` - Opens the name change scene for an actor.

## Plugin Commands

-   **Start Timer (Local Switch):** Starts a timer that turns on a local switch when it expires.
-   **Start Timer in Seconds:** Starts a timer that runs a common event after a set number of real-world seconds.
-   **Start Game Day Timer:** Runs a common event after a set number of in-game days.
-   **Start Game Hour Timer:** Runs a common event after a set number of in-game hours.
-   **Trigger Error:** Displays a customizable error window and forcibly closes the game.
