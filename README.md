# Dikarier Core Plugin for RPG Maker MZ

**Version:** 2.0  
**Author:** Dizia DK (Dikarier Plugin)  
**License:** MIT  

The fundamental core library for RPG Maker MZ, serving as a base for the Dikarier system and providing a collection of powerful utilities to expand the engine's capabilities.

[Read in Russian (Читать на русском)](README_RU.md)

---

## Introduction

Dikarier Core (DCore) is the **fundamental library** for the Dikarier plugin ecosystem. While it contains a powerful collection of independent utilities, its primary purpose is to serve as the foundation for other complex mechanics.

**IMPORTANT:** This plugin is a **MANDATORY DEPENDENCY** for the following plugins:
*   `Dikarier_NeedsSystem`
*   `Dikarier_StatisticPlugin`
*   `Dikarier_EffectSystem` (version 2.6 and above)
*   `Dikarier_FastTravel`
*   `Dikarier_WeatherControl`

You must install **Dikarier Core** above these plugins in your Plugin Manager for them to function correctly.

## License

This plugin is distributed under the **MIT License**. This means you are free to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software, under the condition that the original copyright notice is included in all copies.

## Requirements & Compatibility

### Plugin Order
1.  **Dikarier_Core** (Place this at the top of your Dikarier plugins)
2.  Dikarier_NeedsSystem / Dikarier_StatisticPlugin / etc.

### Time System Requirement
For the **Night OST** and **Timers (in-game days/hours)** modules to work, your project requires **any** plugin that manages in-game time. This time plugin must update the value of the **Hour Variable** and the **Night Switch** that you configure in DCore parameters.

## Installation

1.  Download the `Dikarier_Core.js` file.
2.  Place the file in your project's `js/plugins` folder.
3.  Open your project in RPG Maker MZ, go to the **Plugin Manager**.
4.  Add `Dikarier_Core` to the list.
5.  **Ensure it is placed above dependent plugins.**
6.  Configure the plugin parameters as needed.

## Features & Modules

-   **Key Bindings:** Assign common events to key presses.
-   **Unlimit Stats:** Remove engine limits on weapon and armor stats.
-   **Skill Item Requirements:** Block skills if required items are missing.
-   **Auto Fullscreen:** Automatically start the game in full-screen mode (includes compatibility checks for NW.js 0.107.0+ configurations).
-   **Night & Alternative OST:** Dynamically change music based on the time of day or custom game switches.
-   **Timers:** A powerful timer system (seconds, game days, and game hours).
-   **Print Song (Typewriter sound):** Add atmospheric typing sounds to dialogue messages. Now supports playing a random sound file from a configured list.
-   **Exit Menu:** Add a customizable exit button to the title screen.
-   **Custom Errors:** Trigger a custom error window via a plugin command.
-   **Global Update:** Execute JS scripts on the map scene every frame.
-   **API Functions:** Extensive library of functions, utilities, and helper classes for developers.

---

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

### Night OST & Alternative OST
Configure your map's notebox using the following tags to swap music dynamically:

*   **Night OST:**
    ```
    <DikarierNightOST: Town_Night>  // Sets the track to Town_Night at night
    <DikarierNightOST: None>        // Disables music at night
    ```
    *The music will change when the switch specified in the parameters (Night Switch) is ON.*

*   **Alternative OST (New in v2.0):**
    ```
    <DikarierAlterOST: 5, Town_Alt> // Plays Town_Alt when Switch 5 is ON
    <DikarierAlterOST: 5, None>     // Disables music when Switch 5 is ON
    ```
    *Allows mapping alternative map tracks linked directly to custom game switches.*

### Exit Menu
Enable the "Add Button to Menu" option in the plugin parameters and customize the texts and window dimensions. The button will appear on the title screen.

---

## API Functions & Classes (for Script Calls)

In version 2.0, core helper functions are nested inside the `DCore.Utils` namespace to improve system organization and prevent scope pollution.

### Items & Equipment
*   `DCore.Utils.itemCount(id, action, count)`
*   `DCore.Utils.weaponCount(id, action, count)`
*   `DCore.Utils.armorCount(id, action, count)`

The `action` (optional) is a comparison string: `"=="`, `">="`, `"<="`, `">"`, `"<"`. If omitted, `">="` is used.  
**Example:** `DCore.Utils.itemCount(10, ">=", 5)` returns true if the party has 5 or more of item ID 10.

### General Utilities
*   `DCore.Utils.thisRegion()` - Returns the region ID the player is standing on.
*   `DCore.Utils.membersInParty(id)` - Checks if an actor with the specified ID is in the party.
*   `DCore.Utils.changeName(id, length)` - Opens the name change scene for an actor.
*   `DCore.Utils.everyFrame(frame)` - Returns true every N frames.
*   `DCore.Utils.everySecond(second)` - Returns true every N seconds (calculated exactly as 60 frames per second).

### Math & Probability
*   `DCore.Utils.random(min, max)` - Returns a random integer between min and max.
*   `DCore.Utils.randFloat(min, max)` - Returns a random float number.
*   `DCore.Utils.randomProb(percent)` - Returns `true` based on the specified percentage chance (0-100). *(Renamed from persentRandom).*

### File Handling
*   `DCore.Utils.getData(fileName)` - Asynchronously loads a JSON file from the `data/DCore/` folder (Returns a Promise).
*   `DCore.Utils.getDataSync(fileName)` - Synchronously loads a JSON file from `data/DCore/` (Requires Node.js/NW.js environment).
*   `DCore.Utils.loadData(fileName)` - Asynchronously loads a JSON file from the root `data/` folder (Returns a Promise).
*   `DCore.Utils.loadDataSync(fileName)` - Synchronously loads a JSON file from the root `data/` folder (Requires Node.js/NW.js environment).

### Engine Enhancements
*   `Window_Base.prototype.drawImage(fileName, x, y, [w], [h])` - Draws a picture from `img/pictures/` onto the window contents.
*   `item.onEquip(actor)` / `item.onUnequip(actor)` - Callbacks added to data items that trigger when equipped or removed.

### Developer Base Classes
*   `DCore.Sprite` - A custom helper class extending `Sprite` that simplifies grid-frame slicing and sheet animations via `.nextFrame()`.
*   `DCore.Scene` - A custom helper class extending `Scene_MenuBase` preconfigured with common input handling, automated cancel listeners, and menu button switches.

---

## Plugin Commands

*   **Start Timer (Local Switch):** Starts a timer that turns on a local switch when it expires.
*   **Start Timer in Seconds:** Starts a timer that runs a common event after a set number of real-world seconds.
*   **Start Game Day Timer:** Runs a common event after a set number of in-game days.
*   **Start Game Hour Timer:** Runs a common event after a set number of in-game hours.
*   **Trigger Error:** Displays a customizable error window and forcibly closes the game.
