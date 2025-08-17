# Dikarier Core Plugin for RPG Maker MZ

**Version:** 1.0  
**Author:** Dizia DK (Dikarier Plugin)  
**License:** MIT

A core plugin for RPG Maker MZ, providing a collection of useful utilities and system enhancements.

---

## Introduction

Dikarier Core (DCore) is not a dependency for other plugins, but rather a powerful collection of independent utilities and system enhancements for RPG Maker MZ. Its purpose is to extend the default engine capabilities, providing developers with more control and flexibility.

This plugin is modular, allowing for easy management of its components. It will be expanded in the future to offer even more control over the engine's core.

## License

This plugin is distributed under the **MIT License**. This means you are free to:
- Use the plugin in any project, including commercial ones.
- Freely modify and edit the source code.
- Distribute the plugin or its modified versions.

The only mandatory condition is that you must retain the original copyright notice block in the source code.

## Features & Modules

- **Key Bindings:** Assign common events to key presses.
- **Unlimit Stats:** Remove engine limits on weapon and armor stats.
- **Skill Item Requirements:** Block skills if required items are missing.
- **Auto Fullscreen:** Automatically start the game in full-screen mode.
- **Night OST:** Dynamically change music based on the time of day.
- **Timers:** A powerful timer system (seconds, game days, and game hours).
- **Print Song:** Add an atmospheric typing sound to dialogue messages.
- **API Functions:** Simplify checking item quantities in the inventory.

## Installation

1.  Download the `Dikarier_Core.js` file from this repository.
2.  Place the file in your project's `js/plugins` folder.
3.  Open your project in RPG Maker MZ, go to the Plugin Manager, and add `Dikarier_Core` to the list.
4.  Configure the plugin parameters as needed.

## How to Use

### Unlimit Stats
In a weapon or armor's notebox, use the `<DikarierUS>` tag:
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

### API Functions (for Script Calls)
- `DCore.itemCount(id, action, count)`
- `DCore.weaponCount(id, action, count)`
- `DCore.armorCount(id, action, count)`

The `action` (optional) is a comparison string: `"=="`, `">="`, `"<="`, `">"`, `"<"`. If omitted, `">="` is used.  
**Example:** `DCore.itemCount(10, ">=", 5)` returns true if the party has 5 or more of item ID 10.

## Plugin Commands

- **Start Timer (Local Switch):** Starts a timer that turns on a local switch.
- **Start Timer in Seconds:** Starts a timer that runs a common event after a set number of real-world seconds.
- **Start Game Day Timer:** Runs a common event after a set number of in-game days.
- **Start Game Hour Timer:** Runs a common event after a set number of in-game hours.

---

# (RU) Dikarier Core Plugin для RPG Maker MZ

**Версия:** 1.0  
**Автор:** Dizia DK (Dikarier Plugin)  
**Лицензия:** MIT

Плагин-ядро для RPG Maker MZ, предоставляющий сборник полезных утилит и системных улучшений.

## Введение

Dikarier Core (DCore) — это не зависимость для других плагинов, а мощный сборник независимых утилит и системных улучшений для RPG Maker MZ. Его цель — расширить стандартные возможности движка, предоставляя разработчикам больше контроля и гибкости.

Плагин является модульным, что позволяет легко управлять его компонентами. В будущем он будет расширяться, добавляя еще больше контроля над ядром движка.

## Лицензия

Этот плагин распространяется по лицензии **MIT**. Это означает, что вы можете:
- Использовать плагин в любых проектах, включая коммерческие.
- Свободно изменять и редактировать исходный код.
- Распространять плагин или его измененные версии.

Единственное обязательное условие: необходимо сохранять оригинальный блок с информацией об авторских правах (Copyright) в исходном коде.

## Возможности и модули

- **Привязка клавиш:** Позволяет назначать общие события на нажатия клавиш.
- **Снятие лимитов:** Убирает ограничения на характеристики оружия и брони.
- **Требования предметов для навыков:** Блокирует навыки без нужных предметов.
- **Автоматический полноэкранный режим:** Запускает игру сразу в full-screen.
- **Ночная музыка (OST):** Динамически меняет музыку в зависимости от времени.
- **Таймеры:** Мощная система таймеров (секунды, игровые дни и часы).
- **Звук печати:** Добавляет атмосферный звук при появлении текста в диалогах.
- **API Функции:** Упрощают проверку количества предметов в инвентаре.

## Установка

1.  Скачайте файл `Dikarier_Core.js` из этого репозитория.
2.  Поместите файл в папку `js/plugins` вашего проекта.
3.  Откройте проект в RPG Maker MZ, зайдите в "Менеджер плагинов" и добавьте `Dikarier_Core` в список.
4.  Настройте параметры плагина по необходимости.

## Как использовать

### Снятие лимитов характеристик
В заметках оружия или брони используйте тег `<DikarierUS>`:
```
<DikarierUS>
mhp: 5000
atk: 999
price: 10000
</DikarierUS>
```
**Доступные параметры:** `mhp`, `mmp`, `atk`, `def`, `mat`, `mdf`, `agi`, `luk`, `price`.

### Требования предметов для навыков
В заметках навыка используйте тег `<DikarierSBI>`:
```
<DikarierSBI>
item: 7   // ID предмета
count: 1  // Количество (по умолчанию 1)
</DikarierSBI>```
Навык будет недоступен, если в инвентаре нет нужного количества предметов, которые будут израсходованы после использования.

### Ночная музыка (OST)
В заметках карты используйте тег `<DikarierNightOST>`:
```
<DikarierNightOST: Town_Night>  // Устанавливает трек Town_Night
<DikarierNightOST: None>        // Отключает музыку ночью
```
Музыка сменится, когда переключатель, указанный в параметрах, будет включен.

### API Функции (для вызова в скриптах)
- `DCore.itemCount(id, action, count)`
- `DCore.weaponCount(id, action, count)`
- `DCore.armorCount(id, action, count)`

`action` (необязательно) - строка для сравнения: `"=="`, `">="`, `"<="`, `">"`, `"<"`. Если 'action' не указан, используется `">="`.  
**Пример:** `DCore.itemCount(10, ">=", 5)` вернет true, если предмета с ID 10 в инвентаре 5 или больше.

## Команды плагина

- **Запустить таймер (локальный переключатель):** Запускает таймер, который включает локальный переключатель.
- **Запустить таймер в секундах:** Запускает таймер, который вызывает общее событие через указанное количество реальных секунд.
- **Запустить таймер игровых дней:** Вызывает общее событие через указанное количество игровых дней.
- **Запустить таймер игровых часов:** Вызывает общее событие через указанное количество игровых часов.
