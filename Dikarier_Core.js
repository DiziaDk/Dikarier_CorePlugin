//=============================================================================
// Copyright (c) 2024 Dizia DK (Dikarier Plugin)
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
//=============================================================================
// (RU)
//=============================================================================
// Copyright (c) 2024 Dizia DK (Dikarier Plugin)
//
// Данное программное обеспечение предоставляется бесплатно любому лицу,
// получившему копию данного программного обеспечения и сопутствующей
// документации (далее «ПО»), для использования ПО без ограничений, включая,
// без ограничений, права на использование, копирование, изменение, слияние,
// публикацию, распространение, сублицензирование и/или продажу копий ПО,
// а также лицам, которым предоставляется данное ПО, при соблюдении следующих
// условий:
//
// Указанное выше уведомление об авторском праве и это уведомление о разрешении
// должны быть включены во все копии или существенные части ПО.
//
// ПРОГРАММНОЕ ОБЕСПЕЧЕНИЕ ПРЕДОСТАВЛЯЕТСЯ «КАК ЕСТЬ», БЕЗ КАКИХ-ЛИБО ГАРАНТИЙ,
// ЯВНЫХ ИЛИ ПОДРАЗУМЕВАЕМЫХ, ВКЛЮЧАЯ, НО НЕ ОГРАНИЧИВАЯСЬ, ГАРАНТИИ
// ТОВАРНОГО СОСТОЯНИЯ, ПРИГОДНОСТИ ДЛЯ ОПРЕДЕЛЕННЫХ ЦЕЛЕЙ И ОТСУТСТВИЯ
// НАРУШЕНИЙ ПРАВ. НИ ПРИ КАКИХ ОБСТОЯТЕЛЬСТВАХ АВТОРЫ ИЛИ ПРАВООБЛАДАТЕЛИ
// НЕ НЕСУТ ОТВЕТСТВЕННОСТИ ПО ИСКАМ, УЩЕРБУ ИЛИ ДРУГИМ ТРЕБОВАНИЯМ, БУДЬ
// ТО В РАМКАХ ДЕЙСТВИЯ КОНТРАКТА, ДЕЛИКТА ИЛИ ИНЫХ ОБСТОЯТЕЛЬСТВ,
// ВОЗНИКШИХ ИЗ-ЗА ИСПОЛЬЗОВАНИЯ ПРОГРАММНОГО ОБЕСПЕЧЕНИЯ ИЛИ ИНЫХ ДЕЙСТВИЙ
// С ПРОГРАММНЫМ ОБЕСПЕЧЕНИЕМ.
//=============================================================================

var DCore = DCore || {};
DCore.pluginName = "Dikarier_Core";
DCore.pluginVersion = "1.0"; //For logs | Для логов

/*:ru
 * @target MZ
 * @plugindesc v1.0 Dikarier Core - Сборник утилит и системных улучшений для RPG Maker MZ.
 * @author Dizia DK (Dikarier Plugin)
 * @version 1.0
 * @url https://github.com/DiziaDk
 *
 * @param Binds
 * @text Привязки клавиш
 *
 * @param KeyBindings
 * @parent Binds
 * @text Настройки привязок
 * @type struct<KeyBind>[]
 * @desc Настройте привязку клавиш к общим событиям.
 *
 * @param Debug
 * @parent Binds
 * @type boolean
 * @text Режим отладки
 * @desc Включить вывод отладочной информации в консоль.
 * @default true
 *
 * @param NightOSTsettings
 * @text Настройки ночной музыки
 *
 * @param switchId
 * @parent NightOSTsettings
 * @text ID переключателя
 * @type switch
 * @desc Переключатель, отвечающий за ночной режим.
 * @default 1
 *
 * @param fadeTime
 * @parent NightOSTsettings
 * @text Время затухания (сек)
 * @type number
 * @min 0
 * @max 10
 * @desc Время плавного перехода между треками.
 * @default 2
 *
 * @param TimerSettings
 * @text Настройки таймеров
 *
 * @param hourVariable
 * @parent TimerSettings
 * @text Переменная часов
 * @desc ID игровой переменной, хранящей текущий час (0-23).
 * @type variable
 * @default 1
 *
 * @param PrintSongSettings
 * @text Настройки звука печати
 *
 * @param Sound File
 * @parent PrintSongSettings
 * @text Файл звука
 * @desc Файл звука печатания (из папки /audio/se/).
 * @default Cursor1
 * @type file
 * @dir audio/se/
 *
 * @param Volume
 * @parent PrintSongSettings
 * @text Громкость
 * @desc Громкость звука (0-100).
 * @default 50
 * @type number
 * @min 0
 * @max 100
 *
 * @param Pitch
 * @parent PrintSongSettings
 * @text Высота тона
 * @desc Высота тона звука (50-150).
 * @default 100
 * @type number
 * @min 50
 * @max 150
 *
 * @param PlayOnWindow
 * @parent PrintSongSettings
 * @text Проигрывать для 'Окно'
 * @desc Воспроизводить звук, если фон диалога - 'Окно'.
 * @default true
 * @type boolean
 *
 * @param PlayOnDimBackground
 * @parent PrintSongSettings
 * @text Проигрывать для 'Затемненный'
 * @desc Воспроизводить звук, если фон диалога - 'Затемненный'.
 * @default true
 * @type boolean
 *
 * @param PlayOnTransparent
 * @parent PrintSongSettings
 * @text Проигрывать для 'Прозрачный'
 * @desc Воспроизводить звук, если фон диалога - 'Прозрачный'.
 * @default false
 * @type boolean
 *
 * @param SoundInterval
 * @parent PrintSongSettings
 * @text Интервал звука (кадры)
 * @desc Интервал между звуками в кадрах (1-10).
 * @default 2
 * @type number
 * @min 1
 * @max 10
 *
 * @command startTimer
 * @text Запустить таймер (локальный переключатель)
 * @desc Запускает таймер, который включает локальный переключатель по истечении времени.
 *
 * @arg switchKey
 * @text Локальный переключатель
 * @type combo
 * @option A
 * @option B
 * @option C
 * @option D
 * @desc Локальный переключатель для включения (A, B, C, D).
 *
 * @arg duration
 * @text Длительность (сек)
 * @type number
 * @min 1
 * @desc Длительность таймера в секундах.
 *
 * @command startSecondTimer
 * @text Запустить таймер в секундах
 * @desc Запускает таймер, который отсчитывает реальные секунды.
 *
 * @arg seconds
 * @text Количество секунд
 * @desc Сколько секунд должно пройти до запуска события.
 * @type number
 * @min 1
 * @default 60
 *
 * @arg commonEventId
 * @text ID общего события
 * @desc ID общего события, которое будет запущено.
 * @type common_event
 * @default 1
 *
 * @command startGameDayTimer
 * @text Запустить таймер игровых дней
 * @desc Запускает таймер, который отсчитывает игровые дни.
 *
 * @arg days
 * @text Количество дней
 * @desc Сколько игровых дней должно пройти до запуска события.
 * @type number
 * @min 1
 * @default 3
 *
 * @arg commonEventId
 * @text ID общего события
 * @desc ID общего события, которое будет запущено.
 * @type common_event
 * @default 1
 *
 * @command startGameHourTimer
 * @text Запустить таймер игровых часов
 * @desc Запускает таймер, который отсчитывает игровые часы.
 *
 * @arg hours
 * @text Количество часов
 * @desc Сколько игровых часов должно пройти до запуска события.
 * @type number
 * @min 1
 * @default 6
 *
 * @arg commonEventId
 * @text ID общего события
 * @desc ID общего события, которое будет запущено.
 * @type common_event
 * @default 1
 *
 * @help
 * ============================================================================
 * ВВЕДЕНИЕ
 * ============================================================================
 * Dikarier Core (DCore) — это не зависимость для других плагинов, а мощный
 * сборник независимых утилит и системных улучшений для RPG Maker MZ.
 * Его цель — расширить стандартные возможности движка, предоставляя
 * разработчикам больше контроля и гибкости.
 *
 * Этот плагин является модульным, что позволяет легко управлять его
 * компонентами. В будущем он будет расширяться, добавляя еще больше
 * контроля над ядром движка.
 *
 * ============================================================================
 * ЛИЦЕНЗИЯ
 * ============================================================================
 * Этот плагин распространяется по лицензии MIT. Это означает, что вы можете:
 * - Использовать плагин в любых проектах, включая коммерческие.
 * - Свободно изменять и редактировать исходный код.
 * - Распространять плагин или его измененные версии.
 *
 * Единственное обязательное условие: необходимо сохранять оригинальный блок
 * с информацией об авторских правах (Copyright) в исходном коде.
 *
 * ============================================================================
 * ВАЖНОЕ ЗАМЕЧАНИЕ О ЗАВИСИМОСТЯХ
 * ============================================================================
 * Для работы модулей "Ночная музыка (OST)" и "Таймеры (игровые дни/часы)",
 * вашему проекту необходим другой плагин, который управляет внутриигровым
 * временем. Этот плагин должен обновлять значение "Переменной часов" (для
 * таймеров) и "Переключателя ночи" (для музыки).
 *
 * DCore сам не создает систему времени, он лишь использует ее данные.
 *
 * ============================================================================
 * ВОЗМОЖНОСТИ И МОДУЛИ
 * ============================================================================
 * DCore включает в себя следующие модули:
 *
 * - Привязка клавиш: Позволяет назначать общие события на нажатия клавиш.
 * - Снятие лимитов: Убирает ограничения на характеристики оружия и брони.
 * - Требования предметов для навыков: Блокирует навыки без нужных предметов.
 * - Автоматический полноэкранный режим: Запускает игру сразу в full-screen.
 * - Ночная музыка (OST): Динамически меняет музыку в зависимости от времени.
 * - Таймеры: Мощная система таймеров (секунды, игровые дни и часы).
 * - Звук печати: Добавляет атмосферный звук при появлении текста в диалогах.
 * - API Функции: Упрощают проверку количества предметов в инвентаре.
 *
 * ============================================================================
 * КАК ИСПОЛЬЗОВАТЬ
 * ============================================================================
 *
 * --- Привязка клавиш ---
 * Настройте привязки в параметрах плагина. Каждая привязка состоит из
 * клавиши и ID общего события, которое будет вызвано при нажатии.
 *
 * --- Снятие лимитов характеристик ---
 * В заметках оружия или брони используйте тег <DikarierUS>:
 *
 *   <DikarierUS>
 *   mhp: 5000
 *   atk: 999
 *   price: 10000
 *   </DikarierUS>
 *
 * Доступные параметры: mhp, mmp, atk, def, mat, mdf, agi, luk, price.
 *
 * --- Требования предметов для навыков ---
 * В заметках навыка используйте тег <DikarierSBI>:
 *
 *   <DikarierSBI>
 *   item: 7   // ID предмета
 *   count: 1  // Количество (по умолчанию 1)
 *   </DikarierSBI>
 *
 * Навык будет недоступен, если в инвентаре нет нужного количества предметов.
 * Предметы будут автоматически израсходованы после использования навыка.
 *
 * --- Ночная музыка (OST) ---
 * В заметках карты используйте тег <DikarierNightOST>:
 *
 *   <DikarierNightOST: Town_Night>  // Устанавливает трек Town_Night
 *   <DikarierNightOST: None>        // Отключает музыку ночью
 *
 * Музыка сменится, когда переключатель, указанный в параметрах, будет включен.
 *
 * --- Таймеры ---
 * Используйте команды плагина в событиях для запуска таймеров.
 *
 * --- Звук печати ---
 * Модуль работает автоматически. Настройте звук и его параметры в
 * настройках плагина.
 *
 * --- API Функции (для вызова в скриптах) ---
 * DCore.itemCount(id, action, count) - Проверка количества обычных предметов.
 * DCore.weaponCount(id, action, count) - Проверка количества оружия.
 * DCore.armorCount(id, action, count) - Проверка количества брони.
 *
 * 'action' (необязательно) - строка для сравнения: "==", ">=", "<=", ">", "<".
 * Если 'action' не указан, используется ">=".
 *
 * Пример: DCore.itemCount(10, ">=", 5) - вернет true, если предмета с ID 10
 * в инвентаре 5 или больше.
 *
 * ============================================================================
 * КОМАНДЫ ПЛАГИНА
 * ============================================================================
 *
 * 1. Запустить таймер (локальный переключатель)
 *    - switchKey: Локальный переключатель (A, B, C, D), который включится.
 *    - duration: Время в секундах.
 *
 * 2. Запустить таймер в секундах (общее событие)
 *    - seconds: Время в реальных секундах.
 *    - commonEventId: ID общего события для запуска.
 *
 * 3. Запустить таймер игровых дней
 *    - days: Количество игровых дней.
 *    - commonEventId: ID общего события для запуска.
 *
 * 4. Запустить таймер игровых часов
 *    - hours: Количество игровых часов.
 *    - commonEventId: ID общего события для запуска.
 */

/*:en
 * @target MZ
 * @plugindesc v1.0 Dikarier Core - A collection of utilities and system enhancements for RPG Maker MZ.
 * @author Dizia DK (Dikarier Plugin)
 * @version 1.0
 * @url https://github.com/DiziaDk
 *
 * @param Binds
 * @text Key Bindings
 *
 * @param KeyBindings
 * @parent Binds
 * @text Key Bindings
 * @type struct<KeyBind>[]
 * @desc Configure key bindings to common events.
 *
 * @param Debug
 * @parent Binds
 * @type boolean
 * @text Debug Mode
 * @desc Enable debug information output to the console.
 * @default true
 *
 * @param NightOSTsettings
 * @text Night OST Settings
 *
 * @param switchId
 * @parent NightOSTsettings
 * @text Switch ID
 * @type switch
 * @desc The switch that controls the night mode.
 * @default 1
 *
 * @param fadeTime
 * @parent NightOSTsettings
 * @text Fade Time (sec)
 * @type number
 * @min 0
 * @max 10
 * @desc The duration of the smooth transition between tracks.
 * @default 2
 *
 * @param TimerSettings
 * @text Timer Settings
 *
 * @param hourVariable
 * @parent TimerSettings
 * @text Hour Variable
 * @desc The ID of the game variable that holds the current hour (0-23).
 * @type variable
 * @default 1
 *
 * @param PrintSongSettings
 * @text Print Song Settings
 *
 * @param Sound File
 * @parent PrintSongSettings
 * @text Sound File
 * @desc The typing sound file (from /audio/se/ folder).
 * @default Cursor1
 * @type file
 * @dir audio/se/
 *
 * @param Volume
 * @parent PrintSongSettings
 * @text Volume
 * @desc The volume of the sound (0-100).
 * @default 50
 * @type number
 * @min 0
 * @max 100
 *
 * @param Pitch
 * @parent PrintSongSettings
 * @text Pitch
 * @desc The pitch of the sound (50-150).
 * @default 100
 * @type number
 * @min 50
 * @max 150
 *
 * @param PlayOnWindow
 * @parent PrintSongSettings
 * @text Play for 'Window'
 * @desc Play sound if the dialog background is 'Window'.
 * @default true
 * @type boolean
 *
 * @param PlayOnDimBackground
 * @parent PrintSongSettings
 * @text Play for 'Dim'
 * @desc Play sound if the dialog background is 'Dim'.
 * @default true
 * @type boolean
 *
 * @param PlayOnTransparent
 * @parent PrintSongSettings
 * @text Play for 'Transparent'
 * @desc Play sound if the dialog background is 'Transparent'.
 * @default false
 * @type boolean
 *
 * @param SoundInterval
 * @parent PrintSongSettings
 * @text Sound Interval (frames)
 * @desc The interval between sounds in frames (1-10).
 * @default 2
 * @type number
 * @min 1
 * @max 10
 *
 * @command startTimer
 * @text Start Timer (Local Switch)
 * @desc Starts a timer that turns on a local switch when it expires.
 *
 * @arg switchKey
 * @text Local Switch
 * @type combo
 * @option A
 * @option B
 * @option C
 * @option D
 * @desc The local switch to turn on (A, B, C, D).
 *
 * @arg duration
 * @text Duration (sec)
 * @type number
 * @min 1
 * @desc The timer duration in seconds.
 *
 * @command startSecondTimer
 * @text Start Timer in Seconds
 * @desc Starts a timer that counts real-world seconds.
 *
 * @arg seconds
 * @text Number of Seconds
 * @desc How many seconds should pass before the event is triggered.
 * @type number
 * @min 1
 * @default 60
 *
 * @arg commonEventId
 * @text Common Event ID
 * @desc The ID of the common event to be triggered.
 * @type common_event
 * @default 1
 *
 * @command startGameDayTimer
 * @text Start Game Day Timer
 * @desc Starts a timer that counts in-game days.
 *
 * @arg days
 * @text Number of Days
 * @desc How many game days should pass before the event is triggered.
 * @type number
 * @min 1
 * @default 3
 *
 * @arg commonEventId
 * @text Common Event ID
 * @desc The ID of the common event to be triggered.
 * @type common_event
 * @default 1
 *
 * @command startGameHourTimer
 * @text Start Game Hour Timer
 * @desc Starts a timer that counts in-game hours.
 *
 * @arg hours
 * @text Number of Hours
 * @desc How many game hours should pass before the event is triggered.
 * @type number
 * @min 1
 * @default 6
 *
 * @arg commonEventId
 * @text Common Event ID
 * @desc The ID of the common event to be triggered.
 * @type common_event
 * @default 1
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 * Dikarier Core (DCore) is not a dependency for other plugins, but rather a
 * powerful collection of independent utilities and system enhancements for
 * RPG Maker MZ. Its purpose is to extend the default engine capabilities,
 * providing developers with more control and flexibility.
 *
 * This plugin is modular, allowing for easy management of its components. It
 * will be expanded in the future to offer even more control over the
 * engine's core.
 *
 * ============================================================================
 * License
 * ============================================================================
 * This plugin is distributed under the MIT License. This means you are free to:
 * - Use the plugin in any project, including commercial ones.
 * - Freely modify and edit the source code.
 * - Distribute the plugin or its modified versions.
 *
 * The only mandatory condition is that you must retain the original copyright
 * notice block in the source code.
 *
 * ============================================================================
 * Important Note on Dependencies
 * ============================================================================
 * For the "Night OST" and "Timers (in-game days/hours)" modules to work,
 * your project requires another plugin that manages in-game time. This time
 * plugin must update the value of the "Hour Variable" (for timers) and the
 * "Night Switch" (for music) that you configure in this plugin's parameters.
 *
 * DCore itself does not create a time system; it only uses its data.
 *
 * ============================================================================
 * Features & Modules
 * ============================================================================
 * DCore includes the following modules:
 *
 * - Key Bindings: Assign common events to key presses.
 * - Unlimit Stats: Remove engine limits on weapon and armor stats.
 * - Skill Item Requirements: Block skills if required items are missing.
 * - Auto Fullscreen: Automatically start the game in full-screen mode.
 * - Night OST: Dynamically change music based on the time of day.
 * - Timers: A powerful timer system (seconds, game days, and game hours).
 * - Print Song: Add an atmospheric typing sound to dialogue messages.
 * - API Functions: Simplify checking item quantities in the inventory.
 *
 * ============================================================================
 * How to Use
 * ============================================================================
 *
 * --- Key Bindings ---
 * Configure the bindings in the plugin parameters. Each binding consists of a
 * key and the ID of the common event to be called on key press.
 *
 * --- Unlimit Stats ---
 * In a weapon or armor's notebox, use the <DikarierUS> tag:
 *
 *   <DikarierUS>
 *   mhp: 5000
 *   atk: 999
 *   price: 10000
 *   </DikarierUS>
 *
 * Available parameters: mhp, mmp, atk, def, mat, mdf, agi, luk, price.
 *
 * --- Skill Item Requirements ---
 * In a skill's notebox, use the <DikarierSBI> tag:
 *
 *   <DikarierSBI>
 *   item: 7   // Item ID
 *   count: 1  // Quantity (defaults to 1)
 *   </DikarierSBI>
 *
 * The skill will be unusable if the party lacks the required items, which
 * will be consumed automatically upon use.
 *
 * --- Night OST ---
 * In a map's notebox, use the <DikarierNightOST> tag:
 *
 *   <DikarierNightOST: Town_Night>  // Sets the track to Town_Night
 *   <DikarierNightOST: None>        // Disables music at night
 *
 * The music will change when the switch specified in the parameters is ON.
 *
 * --- Timers ---
 * Use the plugin commands in your events to start timers.
 *
 * --- Print Song ---
 * This module works automatically. Configure the sound and its settings
 * in the plugin parameters.
 *
 * --- API Functions (for Script Calls) ---
 * DCore.itemCount(id, action, count) - Check quantity of regular items.
 * DCore.weaponCount(id, action, count) - Check quantity of weapons.
 * DCore.armorCount(id, action, count) - Check quantity of armors.
 *
 * 'action' (optional) - a comparison string: "==", ">=", "<=", ">", "<".
 * If 'action' is omitted, ">=" is used by default.
 *
 * Example: DCore.itemCount(10, ">=", 5) - returns true if the party has
 * 5 or more of the item with ID 10.
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * 1. Start Timer (Local Switch)
 *    - switchKey: The local switch (A, B, C, D) to be turned ON.
 *    - duration: Time in seconds.
 *
 * 2. Start Timer in Seconds (Common Event)
 *    - seconds: Time in real-world seconds.
 *    - commonEventId: ID of the common event to run.
 *
 * 3. Start Game Day Timer
 *    - days: Number of in-game days to wait.
 *    - commonEventId: ID of the common event to run.
 *
 * 4. Start Game Hour Timer
 *    - hours: Number of in-game hours to wait.
 *    - commonEventId: ID of the common event to run.
 */

/*~struct~KeyBind:ru
 * @param key
 * @text Клавиша
 * @type string
 * @desc Клавиша для привязки (например, t, T)
 *
 * @param commonEventId
 * @text ID общего события
 * @type common_event
 * @desc ID общего события для запуска
 */

/*~struct~KeyBind:en
 * @param key
 * @text Key
 * @type string
 * @desc Key for binding (e.g., t, T)
 *
 * @param commonEventId
 * @text Common Event ID
 * @type common_event
 * @desc ID of the common event to run
 */

const param = PluginManager.parameters(DCore.pluginName);

//=============================================================================================
// Dikarier_Core: Key Bindings for Common Events | Привязки клавиш к общим событиям
//=============================================================================================

(() => {
    const debug = param.Debug === "true";

    let keyBindings; // JSON bind parser | JSON парсер для биндов
    try {
        keyBindings = JSON.parse(param.KeyBindings || '[]').map(binding => {
            const parsed = JSON.parse(binding);
            if (debug) {
                console.log("Parsing binding:", parsed);
            }
            return {
                key: parsed.key,
                commonEventId: Number(parsed.commonEventId)
            };
        });
    } catch (e) {
        console.error("Failed to parse KeyBindings:", e);
        keyBindings = [];
    }

    if (debug) {
        console.log("Initialized bindings:", keyBindings);
    }

    // Extends the map update loop to check for hotkeys | Расширяет цикл обновления карты для проверки горячих клавиш
    const DCoreBind_Scene_Map_updateScene = Scene_Map.prototype.updateScene; 
    Scene_Map.prototype.updateScene = function() {
        DCoreBind_Scene_Map_updateScene.call(this);
        if (!SceneManager.isSceneChanging()) {
            this.checkCommonEventHotkeys();
        }
    };

    // Handles key presses and calls the corresponding common event | Обрабатывает нажатия клавиш и вызывает соответствующее общее событие
    Scene_Map.prototype.checkCommonEventHotkeys = function() {
        keyBindings.forEach(binding => {
            if (Input.isTriggered(binding.key.toUpperCase()) || Input.isTriggered(binding.key.toLowerCase())) {
                if (debug) {
                    console.log(`Key ${binding.key} pressed, triggering common event ${binding.commonEventId}`);
                }
                $gameTemp.reserveCommonEvent(binding.commonEventId);
            }
        });
    };
})();

//=============================================================================================
// Dikarier_Core: Unlimit Item/Equipment Stats | Снятие лимитов характеристик
//=============================================================================================

(() => {    
    // Parses the <DikarierUS> notetag from an item to extract custom stats | Парсит тег <DikarierUS> из предмета для извлечения кастомных характеристик
    function processNoteTags(item) { 
        if (!item || !item.note) return;
        
        const regex = /<DikarierUS>([\s\S]*?)<\/DikarierUS>/i;
        const match = item.note.match(regex);
        
        if (match) {
            const content = match[1].trim();
            const lines = content.split('\n');
            
            for (const line of lines) {
                const parts = line.split(':');
                if (parts.length >= 2) {
                    const key = parts[0].trim().toLowerCase();
                    const value = Number(parts.slice(1).join(':').trim());
                    
                    applyParameterValue(item, key, value);
                }
            }
        }
    }
    
    // Applies a single parsed stat (key-value pair) to the item object | Применяет одну распарсенную характеристику (ключ-значение) к объекту предмета
    function applyParameterValue(item, key, value) {
        if (isNaN(value)) return;
        
        switch (key) {
            case 'mhp':
                item.params[0] = value;
                break;
            case 'mmp':
                item.params[1] = value;
                break;
            case 'atk':
                item.params[2] = value;
                break;
            case 'def':
                item.params[3] = value;
                break;
            case 'mat':
                item.params[4] = value;
                break;
            case 'mdf':
                item.params[5] = value;
                break;
            case 'agi':
                item.params[6] = value;
                break;
            case 'luk':
                item.params[7] = value;
                break;
            case 'price':
                item.price = value;
                break;
        }
    }
    
    // Scans all weapons and armor after the database loads to apply custom stats from notetags | Сканирует всё оружие и броню после загрузки базы данных для применения кастомных характеристик из заметок
    const DCore_UnlimitStats_DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
    DataManager.isDatabaseLoaded = function() {
        if (!DCore_UnlimitStats_DataManager_isDatabaseLoaded.call(this)) return false;
        
        for (const weapon of $dataWeapons) {
            if (weapon) processNoteTags(weapon);
        }
        
        for (const armor of $dataArmors) {
            if (armor) processNoteTags(armor);
        }
        
        return true;
    };
    
    // Overrides the default price calculation to ensure the custom price from the notetag is used | Переопределяет стандартный расчет цены, чтобы использовалась кастомная цена из заметок
    const DCore_UnlimitStats_Game_Item_prototype_price = Game_Item.prototype.price;
    Game_Item.prototype.price = function() {
        const item = this.object();
        if (item && (this.isWeapon() || this.isArmor())) {
            return item.price;
        }
        return DCore_UnlimitStats_Game_Item_prototype_price.call(this);
    };
})();

//=============================================================================================
// Dikarier_Core: Skill Item Requirements | Требования предметов для навыков
//=============================================================================================

(() => {
    const skillItemRequirements = {};
    
    // Parses skill notetags to find item requirements | Парсит заметки навыков для поиска требуемых предметов
    function processSkillNoteTags() {
        for (const skill of $dataSkills) {
            if (!skill || !skill.note) continue;
            
            const regex = /<DikarierSBI>([\s\S]*?)<\/DikarierSBI>/i;
            const match = skill.note.match(regex);
            
            if (match) {
                const content = match[1].trim();
                const lines = content.split('\n');
                let itemId = 0;
                let itemCount = 1; 
                
                for (const line of lines) {
                    const parts = line.split(':');
                    if (parts.length >= 2) {
                        const key = parts[0].trim().toLowerCase();
                        const value = Number(parts.slice(1).join(':').trim());
                        
                        if (key === 'item' && !isNaN(value)) {
                            itemId = value;
                        } else if (key === 'count' && !isNaN(value)) {
                            itemCount = value;
                        }
                    }
                }
                
                if (itemId > 0) {
                    skillItemRequirements[skill.id] = {
                        itemId: itemId,
                        count: itemCount
                    };
                }
            }
        }
    }
    
    // Scans all skills after the database loads to process their requirements | Сканирует все навыки после загрузки базы данных для обработки их требований
    const DCore_SkillBlock_DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
    DataManager.isDatabaseLoaded = function() {
        if (!DCore_SkillBlock_DataManager_isDatabaseLoaded.call(this)) return false;
        
        if (!skillItemRequirementsLoaded) {
            processSkillNoteTags();
            skillItemRequirementsLoaded = true;
        }
        
        return true;
    };
    
    let skillItemRequirementsLoaded = false;
    
    // Adds a check for required items before a skill can be used | Добавляет проверку на наличие требуемых предметов перед использованием навыка
    const DCore_SkillBlock_Game_BattlerBase_meetsSkillConditions = Game_BattlerBase.prototype.meetsSkillConditions;
    Game_BattlerBase.prototype.meetsSkillConditions = function(skill) {
        const basicConditionsMet = DCore_SkillBlock_Game_BattlerBase_meetsSkillConditions.call(this, skill);
        if (!basicConditionsMet) return false;
        
        if (skillItemRequirements[skill.id]) {
            const requirement = skillItemRequirements[skill.id];
            const hasItems = this.hasRequiredItems(requirement.itemId, requirement.count);
            return hasItems;
        }
        
        return true;
    };
    
    // Checks if the party possesses the required amount of an item | Проверяет, есть ли у партии необходимое количество предмета
    Game_BattlerBase.prototype.hasRequiredItems = function(itemId, count) {
        if (this.isActor()) {
            return $gameParty.numItems($dataItems[itemId]) >= count;
        }
        return true; 
    };
    
    // Consumes the required items from inventory after the skill is used | Расходует требуемые предметы из инвентаря после использования навыка
    const DCore_SkillBlock_Game_Battler_useItem = Game_Battler.prototype.useItem;
    Game_Battler.prototype.useItem = function(item) {
        DCore_SkillBlock_Game_Battler_useItem.call(this, item);
        
        if (DataManager.isSkill(item) && skillItemRequirements[item.id]) {
            const requirement = skillItemRequirements[item.id];
            
            if (this.isActor()) {
                const actualItem = $dataItems[requirement.itemId];
                $gameParty.loseItem(actualItem, requirement.count);
            }
        }
    };
})();

//=============================================================================================
// Dikarier_Core: Auto Fullscreen | Автоматический полноэкранный режим
//=============================================================================================

(() => {
    // Attempts to enter fullscreen mode right after the game boots | Пытается войти в полноэкранный режим сразу после загрузки игры
    const DCore_AutoFullscreen_Scene_Boot_start = Scene_Boot.prototype.start;
    Scene_Boot.prototype.start = function() {
        DCore_AutoFullscreen_Scene_Boot_start.call(this);
        
        setTimeout(() => {
            Graphics._requestFullScreen();
        }, 100);
    };
    
    // Ensures the game is in fullscreen when the title screen appears (as a fallback) | Гарантирует, что игра в полноэкранном режиме при появлении титульного экрана (как резервная проверка
    const DCore_AutoFullscreen_Scene_Title_create = Scene_Title.prototype.create;
    Scene_Title.prototype.create = function() {
        DCore_AutoFullscreen_Scene_Title_create.call(this);
        
        if (!Graphics._isFullScreen()) {
            Graphics._requestFullScreen();
        }
    };
})();

//=============================================================================================
// Dikarier_Core: Night BGM | Ночная музыка
//=============================================================================================

(() => {
    const switchId = Number(param['switchId'] || 1);
    const fadeTime = Number(param['fadeTime'] || 2);
    
    let currentNightBgm = null;

    // Overrides default BGM playback to play night BGM if conditions are met | Переопределяет стандартное воспроизведение BGM для проигрывания ночной музыки, если условия соблюдены
    const DCore_NightOST_Game_Map_autoplay = Game_Map.prototype.autoplay;
    Game_Map.prototype.autoplay = function() {
        if ($dataMap.bgm && ($dataMap.bgm.name || '').length > 0) {
            const nightBgm = this.getNightBgmFileName();

            if ($gameSwitches.value(switchId) && nightBgm !== null) {
                if (nightBgm === "None") {
                    AudioManager.stopBgm();
                    currentNightBgm = "None";
                    return;
                }

                if (AudioManager._currentBgm && AudioManager._currentBgm.name === nightBgm) {
                    return;
                }

                currentNightBgm = nightBgm;

                AudioManager.playBgm({
                    name: nightBgm,
                    volume: 100,
                    pitch: 100,
                    pan: 0
                }, 0);
            } else {
                if (AudioManager._currentBgm &&
                    AudioManager._currentBgm.name === $dataMap.bgm.name) {
                    return;
                }

                currentNightBgm = null;

                DCore_NightOST_Game_Map_autoplay.call(this);
            }
        }
    };

    // Parses the <DikarierNightOST> notetag from the current map's data | Парсит тег <DikarierNightOST> из данных текущей карты
    Game_Map.prototype.getNightBgmFileName = function() {
        const note = $dataMap.note || '';
        const match = note.match(/<DikarierNightOST:\s*(.+?)>/i);
        return match ? match[1].trim() : null;
    };

    // Triggers a BGM update when the designated night switch changes value | Запускает обновление BGM при изменении значения переключателя ночи
    const DCore_NightOST_Game_Switches_setValue = Game_Switches.prototype.setValue;
    Game_Switches.prototype.setValue = function(switchId, value) {
        const oldValue = this.value(switchId);
        DCore_NightOST_Game_Switches_setValue.call(this, switchId, value);

        if (switchId === Number(param['switchId']) && oldValue !== value && $gameMap && $dataMap) {
            updateCurrentMapBgm();
        }
    };

    // Handles the smooth fade transition between day and night BGM | Обрабатывает плавный переход между дневной и ночной BGM
    function updateCurrentMapBgm() {
        const nightBgm = $gameMap.getNightBgmFileName();

        if ($gameSwitches.value(switchId) && nightBgm !== null) {
            if (nightBgm === "None") {
                if (currentNightBgm === "None") {
                    return; 
                }

                AudioManager.fadeOutBgm(fadeTime);
                setTimeout(() => {
                    currentNightBgm = "None";
                    AudioManager.stopBgm();
                }, fadeTime * 1000);
                return;
            }

            if (AudioManager._currentBgm && AudioManager._currentBgm.name === nightBgm) {
                return;
            }

            AudioManager.fadeOutBgm(fadeTime);
            setTimeout(() => {
                currentNightBgm = nightBgm;

                AudioManager.playBgm({
                    name: nightBgm,
                    volume: 100,
                    pitch: 100,
                    pan: 0
                }, fadeTime);
            }, fadeTime * 1000);
        } else if (!$gameSwitches.value(switchId)) {
            if (AudioManager._currentBgm &&
                $dataMap.bgm &&
                AudioManager._currentBgm.name === $dataMap.bgm.name) {
                return;
            }

            AudioManager.fadeOutBgm(fadeTime);
            setTimeout(() => {
                currentNightBgm = null;

                if ($dataMap.bgm && $dataMap.bgm.name) {
                    AudioManager.playBgm($dataMap.bgm, fadeTime);
                }
            }, fadeTime * 1000);
        }
    }

    // Ensures the correct BGM is played when a new map is loaded | Гарантирует, при загрузке новой карты будет воспроизведена правильная BGM
    const DCore_NightOST_Scene_Map_onMapLoaded = Scene_Map.prototype.onMapLoaded;
    Scene_Map.prototype.onMapLoaded = function() {
        DCore_NightOST_Scene_Map_onMapLoaded.call(this);

        const nightBgm = $gameMap.getNightBgmFileName();

        if ($gameSwitches.value(switchId) && nightBgm !== null) {
            if (nightBgm === "None") {
                if (currentNightBgm === "None") {
                    return;
                }

                AudioManager.fadeOutBgm(fadeTime);
                setTimeout(() => {
                    currentNightBgm = "None";
                    AudioManager.stopBgm();
                }, fadeTime * 1000);
                return;
            }

            if (currentNightBgm === nightBgm && AudioManager._currentBgm &&
                AudioManager._currentBgm.name === nightBgm) {
                return;
            }

            AudioManager.fadeOutBgm(fadeTime);
            setTimeout(() => {
                currentNightBgm = nightBgm;

                AudioManager.playBgm({
                    name: nightBgm,
                    volume: 100,
                    pitch: 100,
                    pan: 0
                }, fadeTime);
            }, fadeTime * 1000);
        }
    };

    // Corrects the BGM after a save file has been successfully loaded | Корректирует BGM после успешной загрузки сохранения
    const DCore_NightOST_Scene_Load_onLoadSuccess = Scene_Load.prototype.onLoadSuccess;
    Scene_Load.prototype.onLoadSuccess = function() {
        DCore_NightOST_Scene_Load_onLoadSuccess.call(this);

        setTimeout(() => {
            if ($gameMap && $dataMap) {
                const nightBgm = $gameMap.getNightBgmFileName();
                if ($gameSwitches.value(switchId) && nightBgm !== null) {
                    if (nightBgm === "None") {
                        currentNightBgm = "None";
                        AudioManager.fadeOutBgm(fadeTime);
                        setTimeout(() => {
                            AudioManager.stopBgm();
                        }, fadeTime * 1000);
                        return;
                    }

                    currentNightBgm = nightBgm;

                    AudioManager.fadeOutBgm(fadeTime);
                    setTimeout(() => {
                        AudioManager.playBgm({
                            name: nightBgm,
                            volume: 100,
                            pitch: 100,
                            pan: 0
                        }, fadeTime);
                    }, fadeTime * 1000);
                }
            }
        }, 500);
    };
})();

//=============================================================================================
// Dikarier_Core: Local switch timer | Таймер локальных переключений
//=============================================================================================

(() => {
    // Binds timers to Game_System for saving purposes | Привязка таймеров к Game_System для работы сохранений
    const DCore_LocalSwitchTimer_Game_System_initialize = Game_System.prototype.initialize;
    Game_System.prototype.initialize = function() {
        DCore_LocalSwitchTimer_Game_System_initialize.call(this);
        this.activeTimers = this.activeTimers || [];
    };

    // Plugin command for starting a timer | Команда плагина для запуска таймера
    PluginManager.registerCommand(DCore.pluginName, "startTimer", function (args) {
        if (!this._eventId) return; 

        const mapId = $gameMap.mapId();
        const eventId = this._eventId;
        const switchKey = args.switchKey.toUpperCase();
        const duration = Number(args.duration) * 60; 

        if (!["A", "B", "C", "D"].includes(switchKey)) return;

        $gameSystem.activeTimers.push({
            mapId,
            eventId,
            switchKey,
            endTime: Graphics.frameCount + duration
        });
    });

    // Updates timers every frame | Обновление таймеров каждый кадр
    const DCore_LocalSwitchTimer_Scene_Map_update = Scene_Map.prototype.update;
    Scene_Map.prototype.update = function () {
        DCore_LocalSwitchTimer_Scene_Map_update.call(this);

        const currentFrame = Graphics.frameCount;
        const activeTimers = $gameSystem.activeTimers;

        for (let i = activeTimers.length - 1; i >= 0; i--) {
            const timer = activeTimers[i];

            if (currentFrame >= timer.endTime) {
                const key = [timer.mapId, timer.eventId, timer.switchKey];
                $gameSelfSwitches.setValue(key, true);
                activeTimers.splice(i, 1);
            }
        }
    };
})();

//=============================================================================================
// Dikarier_Core: A slightly more complex timer for common events | Чуть более сложный таймер для общих событий
//=============================================================================================

(() => { // Here the Dikarier_Timer plugin is taken as a basis, which was experimental and has a different architecture | Тут за основу используется плагин Dikarier_Timer, который являлся эксперементальным и имеет другую архитектуру
    const hourVariableId = Number(param['hourVariable'] || 1) ;

    class TimerManager { // Class for managing timers | Класс для управления таймерами
        constructor() { 
            this.reset(); 
        }

        reset() { // Resets the timers | Сбрасывает таймеры
            this._secondTimers = {};
            this._gameDayTimers = {};
            this._gameHourTimers = {};
            this._nextSecondTimerId = 1;
            this._nextGameDayTimerId = 1;
            this._nextGameHourTimerId = 1;
            this._lastProcessedHourForGameTimers = -1;
        }

        createSecondTimer(seconds, commonEventId) { // Creates a timer in seconds | Создает таймер в секундах
            const timerId = `sec_timer_${this._nextSecondTimerId++}`;
            const endTime = Date.now() + (seconds * 1000);
            this._secondTimers[timerId] = {
                endTime: endTime,
                commonEventId: commonEventId,
                seconds: seconds
            };
            return timerId;
        }

        createGameDayTimer(days, commonEventId) { // Creates a timer for days | Создает таймер для дней
            const timerId = `day_timer_${this._nextGameDayTimerId++}`;
            const currentHour = $gameVariables.value(hourVariableId);

            if (currentHour < 0 || currentHour > 23) {
                return null;
            }
            this._gameDayTimers[timerId] = {
                targetDays: days,
                startHour: currentHour,
                daysElapsed: 0,
                commonEventId: commonEventId,
                lastCheckedHour: currentHour 
            };
            return timerId;
        }

        createGameHourTimer(hours, commonEventId) { // Creates a timer for hours | Создает таймер для часов
            const timerId = `hour_timer_${this._nextGameHourTimerId++}`;
            const currentHour = $gameVariables.value(hourVariableId);

            if (currentHour < 0 || currentHour > 23) {
                return null;
            }
            this._gameHourTimers[timerId] = {
                targetHours: hours,
                startHour: currentHour,
                hoursElapsed: 0,
                commonEventId: commonEventId,
                lastCheckedHour: currentHour 
            };
            return timerId;
        }

        // Updates timers | Обновление таймеров
        updateSecondTimers() { 
            const now = Date.now();
            const completedTimers = [];
            for (const timerId in this._secondTimers) {
                const timer = this._secondTimers[timerId];
                if (now >= timer.endTime) {
                    $gameTemp.reserveCommonEvent(timer.commonEventId);
                    completedTimers.push(timerId);
                }
            }
            completedTimers.forEach(timerId => {
                delete this._secondTimers[timerId];
            });
        }

        updateGameDayTimers(currentGlobalHour) {
            const completedTimers = [];
            for (const timerId in this._gameDayTimers) {
                const timer = this._gameDayTimers[timerId];

                if (currentGlobalHour < timer.lastCheckedHour) {
                    timer.daysElapsed++;
                    if (timer.daysElapsed >= timer.targetDays) {
                        $gameTemp.reserveCommonEvent(timer.commonEventId);
                        completedTimers.push(timerId);
                        continue;
                    }
                }
                timer.lastCheckedHour = currentGlobalHour;
            }
            completedTimers.forEach(timerId => {
                delete this._gameDayTimers[timerId];
            });
        }

        updateGameHourTimers(currentGlobalHour) {
            const completedTimers = [];
            for (const timerId in this._gameHourTimers) {
                const timer = this._gameHourTimers[timerId];
                let hoursPassed = 0;

                if (timer.lastCheckedHour !== currentGlobalHour) {
                    if (currentGlobalHour < timer.lastCheckedHour) {
                        hoursPassed = (24 - timer.lastCheckedHour) + currentGlobalHour;
                    } else {
                        hoursPassed = currentGlobalHour - timer.lastCheckedHour;
                    }
                }

                if (hoursPassed > 0) {
                    timer.hoursElapsed += hoursPassed;
                    if (timer.hoursElapsed >= timer.targetHours) {
                        $gameTemp.reserveCommonEvent(timer.commonEventId);
                        completedTimers.push(timerId);
                        continue;
                    }
                }
                timer.lastCheckedHour = currentGlobalHour;
            }
            completedTimers.forEach(timerId => {
                delete this._gameHourTimers[timerId];
            });
        }

        // Global update for all timers | Глобальный update для всех таймеров
        update() {
            this.updateSecondTimers();

            const currentActualHour = $gameVariables.value(hourVariableId);

            if (currentActualHour < 0 || currentActualHour > 23) {
                if (this._lastProcessedHourForGameTimers !== -2) { 
                    this._lastProcessedHourForGameTimers = -2;
                }
                return; 
            }

            if (this._lastProcessedHourForGameTimers === -2) { 
                for (const timerId in this._gameDayTimers) {
                    this._gameDayTimers[timerId].lastCheckedHour = currentActualHour;
                }
                for (const timerId in this._gameHourTimers) {
                    this._gameHourTimers[timerId].lastCheckedHour = currentActualHour;
                }
                this._lastProcessedHourForGameTimers = currentActualHour; 
                return;
            }

            if (this._lastProcessedHourForGameTimers === -1 || this._lastProcessedHourForGameTimers !== currentActualHour) {
                if (this._lastProcessedHourForGameTimers !== currentActualHour) { 
                    this.updateGameDayTimers(currentActualHour);
                    this.updateGameHourTimers(currentActualHour);
                }
                this._lastProcessedHourForGameTimers = currentActualHour;
            }
        }

        // Saving timers | Сохранение таймеров
        toSaveObject() {
            return {
                secondTimers: this._secondTimers,
                gameDayTimers: this._gameDayTimers,
                gameHourTimers: this._gameHourTimers,
                nextSecondTimerId: this._nextSecondTimerId,
                nextGameDayTimerId: this._nextGameDayTimerId,
                nextGameHourTimerId: this._nextGameHourTimerId,
                lastProcessedHourForGameTimers: this._lastProcessedHourForGameTimers
            };
        }

        // Loading timers | Загрузка таймеров
        fromSaveObject(saveObject) {
            if (saveObject) {
                this._secondTimers = saveObject.secondTimers || {};
                this._gameDayTimers = saveObject.gameDayTimers || {};
                this._gameHourTimers = saveObject.gameHourTimers || {};
                this._nextSecondTimerId = saveObject.nextSecondTimerId || 1;
                this._nextGameDayTimerId = saveObject.nextGameDayTimerId || 1;
                this._nextGameHourTimerId = saveObject.nextGameHourTimerId || 1;
                this._lastProcessedHourForGameTimers = typeof saveObject.lastProcessedHourForGameTimers === 'number'
                    ? saveObject.lastProcessedHourForGameTimers
                    : -1; 
            } else {
                this.reset();
            }
        }
    }

    const $gameTimers = new TimerManager();
    const DCore_Timer_DataManager_setupNewGame = DataManager.setupNewGame;
    DataManager.setupNewGame = function() { // Resets the timers when starting a new game | Сбрасывает таймеры при новой игре
        DCore_Timer_DataManager_setupNewGame.call(this);
        $gameTimers.reset();
        if ($gameSystem) {
            $gameSystem._timersData = null;
        }
    };

    const DCore_Timer_Game_System_initialize = Game_System.prototype.initialize;
    Game_System.prototype.initialize = function() { // Initializes timer data within Game_System for persistence | Инициализирует данные таймеров в Game_System для их сохранения
        DCore_Timer_Game_System_initialize.call(this);
        this._timersData = null; 
    };

    // Saves timer data into the save file | Сохраняет данные таймеров в файл сохранения
    const DCore_Timer_DataManager_makeSaveContents = DataManager.makeSaveContents;
    DataManager.makeSaveContents = function() {
        const contents = DCore_Timer_DataManager_makeSaveContents.call(this);
        if ($gameSystem) {
            $gameSystem._timersData = $gameTimers.toSaveObject();
        }
        return contents;
    };

    // Loads timer data from the save file | Загружает данные таймеров из файла сохранения
    const DCore_Timer_DataManager_extractSaveContents = DataManager.extractSaveContents;
    DataManager.extractSaveContents = function(contents) {
        DCore_Timer_DataManager_extractSaveContents.call(this, contents);
        if ($gameSystem) { 
            $gameTimers.fromSaveObject($gameSystem._timersData);
        } else {
            $gameTimers.reset();
        }
    };

    // Adds global update to Scene_Map | Добавляет глобальный апдейт таймеров в глобальный апдейт сцены Scene_Map
    const DCore_Timer_Scene_Map_update = Scene_Map.prototype.update;
    Scene_Map.prototype.update = function() {
        DCore_Timer_Scene_Map_update.call(this);
        if ($gameTimers) { 
            $gameTimers.update();
        }
    };

    // Adds commands to the plugin manager | Добавляет команды в менеджер плагинов
    PluginManager.registerCommand(DCore.pluginName, "startSecondTimer", args => {
        const seconds = Number(args.seconds) || 60;
        const commonEventId = Number(args.commonEventId) || 1;
        $gameTimers.createSecondTimer(seconds, commonEventId);
    });

    PluginManager.registerCommand(DCore.pluginName, "startGameDayTimer", args => {
        const days = Number(args.days) || 3;
        const commonEventId = Number(args.commonEventId) || 1;
        $gameTimers.createGameDayTimer(days, commonEventId);
    });

    PluginManager.registerCommand(DCore.pluginName, "startGameHourTimer", args => {
        const hours = Number(args.hours) || 6;
        const commonEventId = Number(args.commonEventId) || 1;
        $gameTimers.createGameHourTimer(hours, commonEventId);
    });
})();

//=============================================================================================
// Dikarier_Core: Print Song | Звук печати
//=============================================================================================

(() => {
    const soundFile = String(param['Sound File'] || 'Cursor1');
    const volume = Number(param['Volume'] || 50);
    const pitch = Number(param['Pitch'] || 100);
    const playOnWindow = param['PlayOnWindow'] === 'true';
    const playOnDimBackground = param['PlayOnDimBackground'] === 'true';
    const playOnTransparent = param['PlayOnTransparent'] === 'true';
    const soundInterval = Number(param['SoundInterval'] || 2);

    const DCore_PrintSong_Window_Message_processCharacter = Window_Message.prototype.processCharacter;
    const DCore_PrintSong_Window_Message_processEscapeCharacter = Window_Message.prototype.processEscapeCharacter;
    let soundCounter = 0;

    let isProcessingEscape = false;

    // Determines if sound should play based on the message window's background type | Определяет, должен ли воспроизводиться звук в зависимости от типа фона окна сообщения
    const shouldPlaySound = function() {
        switch (this._background) {
            case 0: return playOnWindow;
            case 1: return playOnDimBackground;
            case 2: return playOnTransparent;
            default: return false;
        }
    };

    // Adds a sound effect for each visible character being processed | Добавляет звуковой эффект для каждого обрабатываемого видимого символа
    Window_Message.prototype.processCharacter = function(textState) {
        const c = textState.text[textState.index];

        if (c &&
            c !== '\n' &&
            c !== '\r' &&
            c !== '\f' &&
            c !== '\x1b' &&
            !isProcessingEscape &&
            shouldPlaySound.call(this) &&
            this._waitCount === 0 &&
            !this._showFast &&
            !this._lineShowFast) {

            soundCounter = (soundCounter + 1) % soundInterval;
            if (soundCounter === 0) {
                const sound = {
                    name: soundFile,
                    volume: volume,
                    pitch: pitch,
                    pan: 0
                };
                try {
                    AudioManager.playSe(sound);
                } catch (e) {
                    console.error("TypingSoundEffect: Sound playback error", e);
                }
            }
        }

        DCore_PrintSong_Window_Message_processCharacter.call(this, textState);
    };

    // Temporarily disables sound playback while processing escape characters like \C[n] or \I[n] | Временно отключает звук при обработке управляющих символов, таких как \C[n] или \I[n]
    Window_Message.prototype.processEscapeCharacter = function(code, textState) {
        isProcessingEscape = true;
        DCore_PrintSong_Window_Message_processEscapeCharacter.call(this, code, textState);
        isProcessingEscape = false;
    };

    // Resets the sound counter when the message terminates to ensure clean state | Сбрасывает счетчик звука при завершении сообщения для чистого состояния
    const DCore_PrintSong_Window_Message_terminateMessage = Window_Message.prototype.terminateMessage;
    Window_Message.prototype.terminateMessage = function() {
        soundCounter = 0;
        DCore_PrintSong_Window_Message_terminateMessage.call(this);
    };

    // Resets the sound counter when the message pauses (e.g., waiting for input) | Сбрасывает счетчик звука, когда сообщение ставится на паузу (например, в ожидании ввода)
    const DCore_PrintSong_Window_Message_startPause = Window_Message.prototype.startPause;
    Window_Message.prototype.startPause = function() {
        soundCounter = 0;
        DCore_PrintSong_Window_Message_startPause.call(this);
    };

    // Resets the sound counter if the player skips the text display | Сбрасывает счетчик звука, если игрок пропускает отображение текста
    const DCore_PrintSong_Window_Message_updateInput = Window_Message.prototype.updateInput;
    Window_Message.prototype.updateInput = function() {
        const wasShowFast = this._showFast;
        const result = DCore_PrintSong_Window_Message_updateInput.call(this);
        if (!wasShowFast && this._showFast) {
            soundCounter = 0;
        }
        return result;
    };

    // Resets the sound counter during wait commands like \. or \| | Сбрасывает счетчик звука во время команд ожидания, таких как \. или \|
    const DCore_PrintSong_Window_Message_updateWait = Window_Message.prototype.updateWait;
    Window_Message.prototype.updateWait = function() {
        const waiting = DCore_PrintSong_Window_Message_updateWait.call(this);
        if (this._waitCount > 0) {
            soundCounter = 0;
        }
        return waiting;
    };
})();

//=============================================================================================
// Dikarier_Core: Mini API functions | Минимальные функции API
//=============================================================================================

// These API functions were created due to the limitations of the engine for checking items. At first, the engine 
// could only check for the presence of items, and these functions are aimed at fixing this.

// Эти апи функции были сделаны из-за ограничения движка на проверку предметов. Изначально в движке можно проверить
// только наличине предметов а эти функции нацелены это исправить.
DCore.itemCount = function (id, action, count) {
    if (count === undefined) {
        count = action;
        action = undefined;
    }

    var amount = $gameParty.numItems($dataItems[id]);

    if (action === undefined) {
        return amount >= count;
    }

    if (action === "==") {
        return amount === count;
    } else if (action === ">=") {
        return amount >= count;
    } else if (action === "<=") {
        return amount <= count;
    } else if (action === ">") {
        return amount > count;
    } else if (action === "<") {
        return amount < count;
    }

    return false;
};

DCore.weaponCount = function (id, action, count) {
    if (count === undefined) {
        count = action;
        action = undefined;
    }

    var amount = $gameParty.numItems($dataWeapons[id]);

    if (action === undefined) {
        return amount >= count;
    }

    if (action === "==") {
        return amount === count;
    } else if (action === ">=") {
        return amount >= count;
    } else if (action === "<=") {
        return amount <= count;
    } else if (action === ">") {
        return amount > count;
    } else if (action === "<") {
        return amount < count;
    }

    return false;
};

DCore.armorCount = function (id, action, count) {
    if (count === undefined) {
        count = action;
        action = undefined;
    }

    var amount = $gameParty.numItems($dataArmors[id]);

    if (action === undefined) {
        return amount >= count;
    }

    if (action === "==") {
        return amount === count;
    } else if (action === ">=") {
        return amount >= count;
    } else if (action === "<=") {
        return amount <= count;
    } else if (action === ">") {
        return amount > count;
    } else if (action === "<") {
        return amount < count;
    }

    return false;
};

(() => {
    const DCore_InitLog_Scene_Boot_start = Scene_Boot.prototype.start;
    Scene_Boot.prototype.start = function() {
        DCore_InitLog_Scene_Boot_start.call(this);
        setTimeout(() => {
            console.log(`${DCore.pluginName} v${DCore.pluginVersion} has been successfully loaded.`);
        }, 100); 
    };
})();

//=============================================================================================
// Dikarier_Core: End
//=============================================================================================
