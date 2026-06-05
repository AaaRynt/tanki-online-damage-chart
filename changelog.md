---
title: 'Updates - Tanki Online Wiki'
source: 'https://en.tankiwiki.com/Updates'
created: 2026-06-05
---

# Updates

## 2026

### June 4th (Update 832)

List of Changes:

- A Support section has been added to the Settings menu, providing access to the new technical support website with authorization.
  - (Note) We are developing a new technical support website where we can assist you without the need for email communication. Access to this site works via a QR code with an embedded authorization token. You will not need to log in separately; simply scanning the QR code with your phone will suffice. The site is still a work in progress. In the future, we plan to send you notifications directly in the game when you receive a response from technical support.
- A final achievement has been added to Steam for obtaining all existing achievements.

### May 29th (Update 831)

List of Changes:

- The first-purchase bonus for Tankoin packs has been reset.
  - Each Tankoin pack now includes a bonus number of Tankoins that can be obtained on the first purchase of that pack.
    - Upon repeat purchase of the same pack, the bonus will no longer apply.
    - Each of the six Tankoin packs has its own separate bonus.
- The following have been added to Standard and Epic Containers:
  - Tsunami turret
    - "Needle Gun" augment for Hammer
    - "Increased Voltage" augment for Tesla
- The following skins have been added to Legendary Containers:
  - Striker DK
- The "Raven" protection module (providing protection against Tsunami) has been added to the Garage.
- The Medic Grenade has been added for sale for crystals in the Garage.

List of Fixes:

- Fixed an issue where an Apple account would become automatically unlinked 24 hours after registration or login.

### May 15th (Update 830)

List of Changes:

- Tsunami Turret
  - Added a special effect indicating bonus damage when all shells from a salvo hit a single tank.
    - Bonus damage when all shells from a salvo hit a single tank increased from 75-100 to 300-400 HP

List of Fixes:

- Fixed an issue where projectile speed after ricochet was calculated incorrectly
- Fixed an issue with projectile ricochet behavior that could cause damage to disappear if the distance between multiple ricochet points was very small.
- Fixed an anticheat issue related to projectile ricochet, where damage was disabled in cases of sequential ricochet from a horizontal surface followed by a vertical surface.
- Fixed an issue where dynamic lighting on 3D bushes was not working correctly.

### April 30th (Update 829)

List of Changes:

- The following augments have been added to Common and Epic Containers:
  - Scorpion’s "Vacuum Shell" augment
    - Thunder’s "Yamato" augment
- The following skins have been added to Legendary Containers:
  - Hopper DK
    - Hammer GT
    - Shaft GT
- For password-protected PRO Battles, the ability to set a password to restrict entry to the battle has been added. The password can be set by the battle creator via chat commands.
  - The /setPassword chat command generates a password for the battle and copies it to the player's clipboard for sharing in chats.
    - The /deletePassword chat command removes the password from the battle.
    - The /getPassword chat command repeats the current password and copies it to the clipboard again.
    - (Note) Passwords for password-protected PRO Battles are part of the future Authorial PRO Battles mechanic, which we once discussed in a vlog. Please test how the system works and leave your feedback so that we can decide on developing additional self-moderation features for Authorial PRO Battles.
- The selection screens for augments, skins, and shot effects now display all items in a more compact layout with vertical scrolling.
  - (Note) The number of augments per turret has consistently exceeded 20 items, so we hope the new display format will be more convenient for you.

List of Fixes:

- Fixed an error that caused incorrect mission progress status for rank-up missions.

### April 10th (Update 827)

List of Changes:

- Tsunami turret is now available for purchase.
- WebGL 1.0 support has been discontinued for the browser version of the project.
- Registration and authorization via foreign services have been disabled for RU users.

List of Fixes:

- Fixed the "Online" status for the local tank in a group.
- Fixed clan member sorting by rank when viewing a profile of a clan that is not your own.
- Fixed localization issues for CS and HI.

### April 3rd (Update 826)

List of Changes:

- The "Hide your profile" setting is now enabled by default for all players.
  - (Note) You can change this setting in the Security section of the game settings.
- General Chat
  - Private messages can now only be sent to and received from friends.
    - (Note) The corresponding setting has been removed and this behavior cannot be changed.
    - Publicly addressing another player in chat no longer returns a message about that player's status (e.g., whether they are in battle or offline).
- Friend System
  - The friend list no longer shows which battle format a player is currently in.
    - (Note) This mechanic was originally designed for battle list and is now obsolete.
    - The friend system is now available starting from the rank of Master Corporal (Rank 5).
- Clans
  - The clan member list now only displays the names and roles of players in the clan.
    - (Note) Additional statistics, including the date of last activity, are only visible to clan members with the role of Veteran or higher.
    - Outgoing clan invitations now only show the invited player's nickname, without their detailed statistics.
    - The clan info screen no longer displays aggregated kill and assist statistics for clan members.
- Achievements have been added to the Steam version of the game.

List of Fixes:

- Fixed an issue where explosion damage was missing when firing at certain specific surfaces in battle.
- Fixed an issue where the shell ricochet mechanic dealt no damage after the first ricochet when using certain turret augments.
- Fixed an issue where the Shaft dealt arcade damage instead of sniper damage if the player remained scoped for longer than 5 seconds.
- Fixed an issue where the Ricochet dealt no self-damage when firing directly into a wall at a perpendicular angle.
- Fixed auto-scrolling in the garage to the equipped weapon.
- Fixed an issue where the rarity filter stopped working in the paints section.

### March 27th (Update 825)

List of Changes:

- Added the new Turkish, Czech and Hindi localizations
- Updated the Snowball explosion special effect
- Added a new explosion sound for Pumpkin and Snowball grenades
- Reworked the anti-cheat for Tesla, Smoky, Vulcan, Thunder, Gauss, Ricochet, Twins, Scorpion and Shaft turrets and for Crusader’s Cryo Cannon
- Added a tutorial for supply usage in battle for new players
- Added a setting to turn off hints about which keys perform which actions in the battle UI
- Reputation points for an assist in battle increased from 5 to 10
- The maximum time between dealing damage to a tank and its destruction - used to count that damage as an assist:
  - Tesla 3 → 2 sec
    - Twins 5 → 3 sec
    - Ricochet 5 → 3 sec
    - Thunder 5 → 3 sec
    - Scorpion 5 → 3 sec
    - Magnum 10 → 5 sec
    - Gauss 10 → 5 sec
    - Shaft 10 → 5 sec
- Repair Kit
  - Immediate heal when used decreased from 1000 to 500 hp;
    - Reload time increased from 15 to 20 sec;
    - Metronome decreased from 250 to 200 ms;
    - Repaired hp per metronome tick increased from 100 to 150 hp;
- Tesla
  - Increased Voltage
    - Critical damage decrease changed from -22,5% to 0%;
    - Added Lightning ball damage decrease by -22,5%;
- Medic grenade
  - Repair radius increased from 8-12 m to 10-15 m
    - Visual size of the repair special effect increased by +10%;
- Increased the text size on the game login screen for mobile devices

### March 12th (Update 824)

List of changes:

- Repair Kit supply
  - Reload cooldown decreased from 30 s. to 15 s.;
- Mechanic drone
  - Reduction of Repair Kit cooldown changed frm 10-20 s. to 1-5 s.;
- Hyperion drone
  - Removed the reduction of Repair Kit cooldown;
- Isida
  - Sustainable Nanobots
    - Cone angle decrease changed from -60% to -50% - Energy consumption when healing decrease changed from -50% to -60%;
- Tesla
  - Reload decreased from 0.8 s. to 1 s.;
- Vulcan
  - Critical damage decreased from 150-200 to 90-120 HP;

List of Fixes:

- Medic Grenade
  - Points are no longer awarded for repairing tanks that have full health;
    - Fixed the offset of the healing special effect's center position, which was half a hull away from the grenade's position;
    - Fixed an error where the healing sound effect could persist after healing ended;
- Fixed the Critical Resistance icon displayed above enemy tanks;
- Hopper hull control has been reverted to be relative to the hull, not the camera.
  - (Note) Already in the game.
- The 26,000 Tankoins bundle is back on sale in the iOS version.

### March 6th (Update 823)

List of Changes:

- The Boombox map has been updated and added to Matchmaking
  - (Note) The map supports 12 players and all modes except ASL and TJR/JGR.
- Added a negative currency support mechanic
  - The mechanic is triggered when a payment is canceled outside the game.
    - Supports negative balances for Tankoins, Rubies, Crystals, and all keys.
    - Blocks the ability to play, complete missions, use some social features, and access discounts in the Shop and Garage.
    - (Note) Now, in the event of a payment reversal, the account will not be blocked immediately. Instead, restrictions will be placed on certain features, including the ability to play. To exit this state, the debt incurred due to the payment reversal must be repaid. This mechanic can only be used once. If a negative balance occurs again, the account will be blocked as before.
- Changes in the Unity Version of the Game
  - The Shop has been updated and now fully resembles the HTML5 version.
    - A virtual cursor, controlled by the left gamepad stick, has been added to the game Lobby.
    - (Note) This cursor does not replace arrow navigation in the lobby but complements it.
    - Added display of client information line as in HTML5, including the current server number.
    - The in-battle player table (TAB) now displays while the button is held down, but with a quick press, it remains on screen until the button is pressed again.
    - Added the ability to select individual players in the TAB table to send complaints.
- Tesla
  - Reload decreased from 1 to 0.8 s.;
    - Regular Damage decreased from 450-900 to 300-400;
    - Added an addition damage boost for each target in the chain by 300-400 HP;
    - (Note) Tesla turret damage is now split into two parts. Standard damage is divided as usual by the number of targets in the chain. Additional damage is never divided by the number of targets in the chain. The final damage each target receives is the sum of Standard and Additional damage. In other words, when attacking two targets with chain lightning, the damage is now reduced by only a quarter, not by half.
- Vulcan
  - Barrels stopping time decreased from 2.5 to 1 s.;
    - ‘Reinforced Aiming Transmission” augment
    - Barrels stopping time decrease changed from -60% to -50%;
- Smoky
  - In the mobile version, the turret now has a button to enable/disable forced fire, similar to Twins.
- Scorpion
  - Reload increased from 3.9-2.6 to 4.05-2.7 s.;
    - “Vacuum shell” augment
    - Ricochet has been disabled;
- Magnum
  - Gravity for the projectile decreased from 2 to 1.5 deg.;
    - Initial projectile speed decreased from 30 to 20 m/s;
    - Final projectile speed decreased from 120 to 110 m/s;
- Shaft
  - Reload between arcade shots increased from 2.25-1.5 to 2.7-1.8 s.;
    - “Short-band emitter” augment
    - Arcade reload increase changed from +34% to +15%;
    - “Quasar” augment
    - Arcade shot reload time increase changed from +100% to +70%;
- Added support for the ability to disable crossplay between different platforms in matchmaking
  - (Note) This feature is not yet publicly available.
- Added a display of the current server number in the bottom right corner of the screen.

List of Fixes:

- The Medic Grenade now restores tanks in its area of effect over several seconds, not just once at the moment of explosion.
  - (Note) Expect the grenade in Early Access with the appearance of a new event in March.
- Unity
  - Optimized shader size.
    - Removed small layout for resolutions of 1920 pixels and above.
    - Fixed the appearance of new skins recently added to the game.
    - Fixed various minor bugs found.

### February 19th (Update 822)

List of changes:

- Added fog to all standard (not Remastered) maps
  - (Note) Fog on the Remastered maps was already working before this with its own distance and intensity settings.
    - (Note) We remind you that fog can be disabled in the game settings

### February 6th (Update 821)

List of changes:

- The following augments were added to Common and Epic Containers:
  - Magnum’s “Carronade”
    - Railgun’s “Detonator”
- Repair Kit
  - Immunity (from status effects) time when repairing 0,5 sec → 0,6 sec
- Overdrive charge per second
  - Wasp
    - 0,370% → 0,300% or 240 → 300 sec for full overdrive charge
    - Hopper
    - 0,333% → 0,278% or 300 → 360 sec for full overdrive charge
    - Hornet
    - 0,476% → 0,333% or 210 → 300 sec for full overdrive charge
    - Crusader
    - 0,300% → 0,278% or 330 → 360 sec for full overdrive charge
    - Hunter
    - 0,416% → 0,333% or 240 → 300 sec for full overdrive charge
    - Paladin
    - 0,278% → 0,256% or 360 → 390 sec for full overdrive charge
    - Dictator
    - 0,476% → 0,333% or 210 → 300 sec for full overdrive charge
    - Titan
    - 0,416% → 0,333% or 240 → 300 sec for full overdrive charge
    - Ares
    - 0,278% → 0,256% or 360 → 390 sec for full overdrive charge
    - Mammoth
    - 0,370% → 0,300% or 270 → 330 sec for full overdrive charge
- Juggernaut
  - Activation delay of the overdrive decreased from 2 to 1,1 sec

List of fixes:

- The icons of “Explosive Rounds” augment for Smoky and “Explosive Shells” augment for Scorpion are updated to not intersect with the “Vacuum Shells” augments icons

### January 23rd (Update 820)

List of changes:

- The following augments were added to Common and Epic Containers
  - Ricochet’s “Boxer”
    - Gauss’ “Boxer”
- Scorpion
  - “Missile launcher «Spear»” augment
    - Salvo reload time decrease was changed from -25% to -20%
    - “Missile launcher «Swarm»” augment
    - Added an increase of the Initial rocket angular speed by 10%; - Added an increase of the Final rocket angular speed from 1 to 5 deg/s
- Shaft
  - “Stellarator” augment
    - Energy used per sniping shot increase changed from +50% to +60%
- Activation delay of the overdrive for all hulls increased from 1.3 to 2 sec
- Overdrive charge for reputation points for all hulls changed to 0.01%-0.1% per reputation point.
- Overdrive charge per second
  - Hopper
    - 0,416% → 0,333% or 240 → 300 sec for full overdrive charge
    - Hornet
    - 0,370% → 0,476% or 270 → 210 sec for full overdrive charge
    - Viking
    - 0,278% → 0,256% or 360 → 390 sec for full overdrive charge
    - Paladin
    - 0,300% → 0,278% or 330 → 360 sec for full overdrive charge
    - Dictator
    - 0,300% → 0,476% or 330 → 210 sec for full overdrive charge
    - Titan
    - 0,333% → 0,416% or 300 → 240 sec for full overdrive charge
    - Ares
    - 0,416% → 0,278% or 240 → 360 sec for full overdrive charge
- The “Classic” battle format in PRO battles is turned off

## 2025

### December 19th (Update 818)

List of changes:

- Added a forced disconnect of players who go over the limit of reasonable command sending frequency in battle
- Fixed some texts in the game

List of fixes:

- Fixed the indicators of readiness to shoot on Striker DK skin
- Fixed the work of dynamic detailing for HD skins
- Fixed the work of Tesla’s effect that lead to memory leaks
- Fixed the payment methods sorting in the Shop
- Refinements of Parma and Highland Remastered maps
- Old New Year maps are now supported by the Unity client

### November 27th (Update 817)

List of changes:

- Added a new Cross Remastered map
- Added Winter and Autumn themes for the Parma Remastered map
- Firebird
  - “Camper” augment
    - Normal and critical damage was changed from +100% to +90%;
    - "Excelsior" augment
    - Critical damage was changed from +30% to +0%;
- Freeze
  - "Camper" augment
    - Normal and critical damage was changed from +100% to +90%;
    - “Shock Freeze” augment
    - Damage decrease was changed from -5% to -10%
    - "Excelsior" augment
    - Critical damage increase was changed from +30% to +0%;
- Isida
  - "Camper" augment
    - Normal and critical damage was changed from +100% to +90%;
    - “Shock Nanobot Injection” augment
    - Healing rate decrease was changed from -90% to -75% - Added a decrease of critical healing by -95%;
    - "Excelsior" augment
    - Critical damage increase was changed from +30% to +0% - Critical repair increase was changed from +30% to +0%;
- Tesla
  - "Camper" augment
    - Normal and critical damage increase was changed from +100% to +90%;
    - “Electroturret” augment
    - Added a decrease of Energy Recharge rate by -33%;
    - "Excelsior" augment
    - Critical damage increase was changed from +30% to +0%;
- Hammer
  - "Camper" augment
    - Normal and critical damage was changed from +100% to +90%;
    - “Adaptive Reload” augment
    - Shots per clip changed from 3 to 4;
    - “Blunderbuss” augment
    - Added a clip reload decrease by -20%;
    - “Large Caliber Pellets” augment
    - Clip reload time increase was changed from +70% to +50%;
    - “Boxer” augment
    - Clip reload time decrease changed from -62% to -56%;
    - "Excelsior" augment
    - Critical damage increase was changed from +30% to +0% - No longer increases horizontal aiming angles
- Twins
  - Damage was increased from 150-200 to 180-240;
    - Critical damage chance decreased from 6% to 5%;
    - "Camper" augment
    - Normal and critical damage increase was changed from +100% to +90% - The amount of HP to activate the augment effects changed from 75% to 85% of tank’s HP
    - "Excelsior" augment
    - Critical damage increase was changed from +30% to +0%;
- Ricochet
  - Critical damage chance decreased from 8% to 6%
    - "Camper" augment
    - Normal and critical damage increase was changed from +100% to +90% - The amount of HP to activate the augment effects changed from 75% to 85% of tank’s HP
    - “Berserk” augment
    - Charge time increase changed from +20% to +7%;
    - “Boxer” augment
    - Added a decrease of reload time between two shots by -20% - Initial projectile speed changed from 10 to 30 m/s
    - "Excelsior" augment
    - Critical damage increase was changed from +30% to +0% - No longer increases horizontal aiming angles
- Vulcan
  - "Camper" augment
    - Normal and critical damage increase was changed from +100% to +90% - The amount of HP to activate the augment effects changed from 75% to 85% of tank’s HP
    - “Rubberized rounds” augment
    - Added an increase of critical damage by +50%;
    - “Explosive band” augment
    - Regular damage increase changed from +13% to +10% - Maximum ricochet angle changed from 5° to 45°
    - "Excelsior" augment
    - Critical damage increase was changed from +30% to +0%;
- Smoky
  - Critical damage chance decreased from 13% to 11%;
    - "Camper" augment
    - Normal and critical damage increase was changed from +100% to +90% - The amount of HP to activate the augment effects changed from 75% to 85% of tank’s HP
    - “Rubberized rounds” augment
    - Added an increase in critical damage by +50%;
    - "Excelsior" augment
    - Critical damage increase was changed from +30% to +0% - No longer increases horizontal aiming angles
- Striker
  - "Camper" augment
    - Normal and critical damage increase was changed from +100% to +90% - The amount of HP to activate the augment effects changed from 75% to 85% of tank’s HP
    - “Missile launcher «Tandem»” augment
    - Added a reload time decrease by -12%;
    - “Missile launcher «Uranium»” augment
    - Aiming time decrease changed from -35% to -25% - Projectile acceleration time increase changed from +350% to +700%
    - “Vacuum Missiles” augment
    - Pause between salvo rockets increase changed from +12% to +6% - Added a critical damage increase chance by +25% - Average and minimal splash damage increase changed from 230% to 235%
    - “Missile launcher «Brass Knuckles»” augment
    - Added a reload time decrease by -12%;
    - "Excelsior" augment
    - Critical damage increase was changed from +30% to +0% - No longer increases horizontal aiming angles
- Thunder
  - "Camper" augment
    - Normal and critical damage increase was changed from +100% to +90% - The amount of HP to activate the augment effects changed from 75% to 85% of tank’s HP
    - “Bolter” augment
    - Min shell speed changed from 1 to 10 m/s;
    - “«Nanotech» Shells” augment
    - Added a decrease of regular damage by -20%;
    - “«Anvil» shells” augment
    - Added a decrease of reload time by -10%;
    - "Excelsior" augment
    - Critical damage increase was changed from +30% to +0% - No longer increases horizontal aiming angles
- Scorpion
  - "Camper" augment
    - Normal and critical damage increase was changed from +100% to +90% - The amount of HP to activate the augment effects changed from 90% to 95% of tank’s HP
    - “Missile launcher «Tornado»” augment
    - Aiming time increase changed from +100% to +50% - Added a Salvo reload time decrease by -12%
    - “Missile launcher «Swarm»” augment
    - Added a decrease of Final rocket speed by -20%;
    - "Excelsior" augment
    - Critical damage increase was changed from +30% to +0% - No longer increases horizontal aiming angles
- Magnum
  - "Camper" augment
    - Normal and critical damage increase was changed from +100% to +90% - The amount of HP to activate the augment effects changed from 90% to 95% of tank’s HP
    - “Mortar” augment
    - Mine lifetime increased from 60 to 120 s;
    - “Vacuum core” augment
    - Amplification time increase changed from +20% to +0%;
    - "Excelsior" augment
    - Critical damage increase was changed from +30% to +0%;
- Railgun
  - "Camper" augment
    - Normal and critical damage increase was changed from +100% to +90% - The amount of HP to activate the augment effects changed from 90% to 95% of tank’s HP
    - “Large caliber rounds” augment
    - Shot warmup time increase changed from +25% to +15% - Reload time changed from +25% to +16% - Critical damage changed from +25% to +20% - Added an increase in critical hit chance by +50%
    - “Round Destabilization” augment
    - Added an increase in Impact force by +60%;
    - “«Death Herald» compulsator” augment
    - Shot warmup time decrease changed from -15% to -25% - Reload time decrease changed from -15% to -40%;
    - “Hyperspace Rounds” augment
    - Shot warmup time decrease changed from -10% to -25%;
    - “Excalibur Rounds” augment
    - Critical damage increase was changed from +150% to +129,9% - Shot warmup time increase changed from +10% to +25%;
    - "Excelsior" augment
    - Critical damage increase was changed from +30% to +0% - No longer increases horizontal aiming angles
- Gauss
  - "Camper" augment
    - Normal and critical damage increase was changed from +100% to +90% - The amount of HP to activate the augment effects changed from 90% to 95% of tank’s HP
    - “Super Solenoids” augment
    - Salvo reload decrease changed from -22% to -36%;
    - “Hyperspeed Shells” augment
    - Weak damage percentage changed from 270% to 300%;
    - “Nemesis” augment
    - Added a Salvo reload decrease by -70%;
    - "Excelsior" augment
    - Critical damage increase was changed from +30% to +0% - No longer increases horizontal aiming angles
- Shaft
  - Critical damage chance changed from 18% to 14%;
    - "Camper" augment
    - Damage and critical Damage increase were changed from +100% to +90% - The amount of HP to activate the augment effects changed from 90% to 95% of tank’s HP
    - “Quasar” augment
    - Sniping shot reload time increase changed from +54,(54)% to +44,(44)% - Arcade shot reload time increase changed from +113% to +100% - Added a decrease in energy consumed by sniping shot by +50%;
    - “Stellarator” augment
    - Sniping shot charge rate decrease changed from -20% to -0% - Energy consumed per sniping shot decrease by -50% changed to an increase by +50%
    - "Excelsior" augment
    - Critical damage increase was changed from +30% to +0% - No longer increases horizontal aiming angles

List of fixes:

- Fixed the behavior of mines on slopes and in piles of bricks on the Parma Remastered map.
- Fixed issues in the out-of-bounds area of the Parma Remastered map.
- Fixed shadows on the Parma Remastered map.

### November 7th (Update 816)

List of changes:

- Updated the default skin of Magnum to the HD version
  - Added shell casings to the firing animation
- Changed iOS account creation screen design to meet Apple guidelines

### November 7th (Update 814)

List of Changes:

- Premium Pass reward can now be claimed once a week instead of every day.
  - (Note) The daily equivalent value of the reward remains unchanged.
- Improved the calculation of the optimal resolution setting for display when using the "Medium" and "Low" graphics presets.
- Added a "Minimum" graphics preset.

List of Fixes:

- Fixed a bug that caused the camera to turn in the opposite direction during rapid camera movement with touch controls.
- Fixed the issue of increased camera sensitivity with touch controls when lowering the rendering resolution.
- In Spectator Mode, the technical information (bottom right) can now be hidden along with the rest of the UI.

### October 24th (Update 813)

List of changes:

- Added the display of the player’s nickname, client type, client version, game update number, and battery charge (if the device reports this information) in the bottom-right corner of the screen.
  - (Note) This is technical information required by developers to improve the quality of the game. It is displayed on top of all game screens and UI elements. Please understand this is for diagnostic purposes.
- Ares hull
  - Repair amount from overdrive reduced from 240 to 120
- Duration of immunity when activating the Repair Kit decreased from 0.8s to 0.5s
- Updated the list of content creator tags
- Updated Shop prices for certain regions

List of fixes:

- Fixed the functionality of Halloween maps for the Unity client
- Increased background render distance on Remastered maps so that distant mountains are no longer cut off when the player moves the camera
- Fixed incorrect display of the settings interface in Safari on iOS
- Slightly adjusted the position of interface elements on the battle loading screen so that the “Loading” text is no longer overlapped by the system bar on iPhones

### October 10th (Update 812)

List of changes:

- Players registering via an external authorization service are now assigned an automatic nickname.
  - (Note) Use the free rename option in the settings to change your nickname.
- The console version of the game now allows logging into an existing account.
  - (Note) To log into an existing account, you need to log out of the current account in the “Account” section of the Settings. After that, you will be asked to set a password for your console account, and after that you will be able to log into any existing account by entering your nickname and password.
- The Pumpkin grenade now has its own unique explosion effect, different from the Bomb grenade.
- On the account registration selection screen, some log in methods may load with a delay but will no longer cause the client to freeze.
- The console version of the game now displays the current game version, nickname, and controller battery level on the screen.
- Striker
  - After respawning, the first shot is now always fired from the right barrel.
- Added the ability to delete an account from the Settings.
  - (Note) This feature is currently only available in the test iOS version for iPhone. Availability for other game versions will be considered in the future after analyzing the usage of the feature.

List of fixes:

- Fixed the Ricochet turret's barrel animation (on a remote tank).
- Fixed an issue in the Unity version of the game that could cause the game to freeze in the Settings menu.
- Added a reset for the Striker turret's charge indicator after respawn.
- Fixed the footer and payment button in the Steam version of the Shop.
- Fixed the display of the Striker turret's charging indicator on skins that support it.
- Fixed terrain texture tiling for new Remastered maps.
- Improved flag base effects when capturing flags.

List of fixes in the console version:

- Increased the size of button hint icons for Nintendo controllers.
- Added digit grouping for displaying large numbers.
- Fixed the progress bar display for the challenge widget.
- Fixed the display of Supermissions with large numerical progress.
- Removed unnecessary timers in the limited offers section of the Shop and added timers for special offers related to Challenges.
- Optimized tank physics.

### October 3rd (Update 811)

List of changes:

- The following augments were added to Common and Epic Containers:
  - Freeze «Camper»
    - Shaft «Stellarator»
- Shaft
  - «Stellarator» augment
    - Added a decrease of Charge rate by -20%

### September 26th (Update 810)

List of changes:

- Tesla GT skin was added to Legendary Containers.
- The following augments were added to Common and Epic Containers:
  - Isida’s “Camper”
    - Tesla’s “Camper”
    - Hammer’s “Boxer”
    - Twins’ “Tempest”
    - Railgun’s “Excalibur Rounds”
- In the Shop, legal information has been moved to a separate dropdown list.
- Added the ability to adjust screen padding on mobile devices.
- Camper augments
  - For medium-range turrets, the bonus activation threshold was changed from 65% to 75% of the tank's health.
    - For long-range turret, the bonus activation threshold was changed from 80% to 90% of the tank's health;
- Magnum
  - “Harpoon” augment
    - Reload time increase was changed from +40% to +10%; - Amplification time decrease was changed from -75% to -70%
    - “Destroyer” augment
    - Reload time was changed from +85% to +90%;
- Railgun
  - “«Excalibur» Rounds” augment
    - Reload time increase was changed from +12% to +16%; - Added Shot warmup time increase by +10%
- Minor visual improvements to the purchase screens in the Shop.

List of Fixes:

- Removed localizations for languages that have not received updates for a long time.
- Fixed the contract rarity indicator.
- The GS table is now displayed in the Garage even for items with zero GS.
- Improved the Promo Codes screen in the Shop.

### September 5th (Update 809)

List of changes:

- Added digit grouping for large numbers in the UI.
  - (Note) For example, 1000000 will now be displayed as 1 000 000.
- Bots now support the "Arms Race" mode.

List of fixes:

- Improved the anti-cheat for the Gauss’ "Nemesis" augment.
  - (Note) Given the nature of how anti-cheat systems work, this fix does not guarantee a solution to all issues, but we hope it significantly reduces the frequency of cases where damage does not register on an enemy.
- Fixed the behavior of the progress bar for the Elite Pass widget in the Lobby
  - (Note) The progress bar now shows the progress in stars within a single level, not the overall progress through all levels of the Elite Pass.
- Removed redundant timers from the Limited Offers section of the Shop that were updated every 24 hours.
- Fixed the display of acceleration effect trails for the Titan GT skin.
- Fixed the display of missions in the Supermissions block for cases where the mission progress unit count exceeded 1000.

### August 29th (Update 808)

List of changes:

- The following augments were added to Common and Epic Containers
  - Scorpion’s “Camper”
    - Vulcan’s “Camper”
- Common Daily Missions
  - The required number points for the Daily “Earn reputation points” mission decreased from 1000 to 900
    - The Daily “Make any purchase in the game's Shop” mission was replaced with “Throw any Grenade” mission.
- Added “secret” Daily Missions
  - (Note) You need active Premium Pass to complete these missions, same as to complete such Weekly Missions
- “Salyut” Grenade
  - The “Salyut” Grenade launcher can be purchased in the Shop for 183 000 crystals starting from the Lieutenant General (25) rank
    - “Salyut” Grenades can be purchased in the Shop for 1800 crystals
    - The Grenade is available for purchase in the Shop as a part of “Early Access items”
    - “Stun” effect duration decreased from 3 to 2.5 s.
- Now if you try to find a battle when you have more than 2 players in your group, your group will be automatically disbanded
  - (Note) We have found that it is possible to create a group of more than 2 players in rare cases randomly due to synchronization characteristics of game servers in the cluster. Now such groups will be automatically disbanded and all players of a group will enter battles separately. In case you have more than 2 players in your group by mistake, remove the extra player from your group so the other two of you can play together.
- Added a timer on the category of Daily Ruby Pass in the Shop that shows time until the end of the sale of the current offer with the Ruby Pass

List of fixes:

- Fixed the bug with Hyperion drone being available starting from the Generalissimo (30) rank instead of the Field Marshal (28) rank
- Fixed mouse capture in Safari that caused loss of focus after releasing TAB
- Fixed an issue where dust and smoke effects sometimes froze mid-air
- Fixed identified memory leaks in sound processing
- Fixed purchase confirmation buttons in the Steam version of the Shop
- Fixed Shop malfunctions when confirming purchases via iFrame technology for certain payment systems
- Fixed descriptions of certain Missions in various languages

### August 8th (Update 807)

List of changes:

- The following augments were added to Common and Epic Containers
  - Twins’ “Camper” augment
    - Mammoth’s “Grenadier” augment
- The required number of daily missions for the weekly “Complete daily missions” mission increased from 15 to 25
- The required number of battles for the weekly “Be in the winning team” mission increased from 3 to 4
- The required number of battles for the weekly “Finish a battle” mission increased from 10 to 15
- The required number of stars for the weekly “Earn stars” mission increased from 60 to 70
- The required number of reputation points for the weekly Encore “Earn Reputation Points in Battles” mission decreased from 5000 to 4000

List of fixes:

- Fixes for iOS and Safari browser
  - Fixed the problem with sounds
    - Audio resource standardization and audio streaming support
    - Removed redundant audio decoding; eliminated SWF resources
    - Disabled screen lens effect in battles
    - Fixed texture duplication in particle-based effects
    - Resolved texture reset (solid black display) after loading
    - Disabled embedded video playback in legacy Safari versions without WebM support
    - Fixed mouse capture in Safari
    - Fixed default low resolution on high-PPI mobile devices
    - Corrected tank track dust and engine exhaust effects
    - Optimized container opening performance
    - Re-encoded tank assembly screen videos for improved stability
    - Replaced loading screen.gif with.apng
- Fixed currency display in Steam Shop
- Fixed "Earn Reputation points in battle" Encore mission not counting toward weekly missions

### July 25th (Update 806)

List of changes:

- The following augments were added to Common and Epic Containers
  - Striker’s “Camper”
    - Ares’ “Grenadier”
- Maximum group size reduced from 3 to 2 players
  - (Note) After analyzing feedback regarding group balancing issues in matchmaking, we observed a significant shift in player behavior. The number of two-player groups now vastly outnumber three-player groups. At the same time, players perceive three-player groups as inherently stronger than two-player ones. We believe this combination has contributed to unstable team balancing. Given the much higher demand for two-player groups, we’ve decided to disable the option to create three-player groups.
- Allowed rank difference between group members increased from 5 to 20
  - (Note) This change is related to the previous one. A large rank gap in two-player groups causes fewer matchmaking issues than in three-player groups. Seeing the high interest in two-player groups, we want to encourage more duo play. We hope we won’t regret this decision. We’ll monitor the situation and your feedback.
- When there is no other active event mode, Deathmatch mode is enabled as an event mode by default.
  - The mode is available starting from Master Sergeant (8) like other event modes
    - The map pool of this mode includes all MM and Pro maps
    - Battle funds, experience gain, and gold boxes are not increased
- Smoky
  - Critical hit chance was decreased from 14% to 13%
- Striker
  - Missile launcher «Hydra»
    - Recharge time after salvo increase was changed from +100% to +80%
    - Missile launcher «Tandem»
    - Recharge time after salvo increase was changed from +50% to +35%
- Thunder
  - Vacuum Shells
    - Damage decrease was changed from -20% to -15%
    - Bolter
    - Weapon reload time decrease was changed from -40% to -45%
- Scorpion
  - The maximum time between dealing damage to a tank and its destruction - used to count that damage as an assist - was decreased from 10 to 5 seconds
    - Reload was decreased from 4.5 - 3 to 3.9 - 2.6 s
    - Reloading a salvo was decreased from 21 - 14 to 11.5 - 9 s
    - Initial rocket speed was decreased from 70 to 30 m/sec
    - Initial rocket angular speed was increased from 80 to 120 deg/s
    - Final rocket angular speed was decreased from 7 to 1 deg/s
    - Rocket acceleration time was decreased from 2.5 to 2.0 s.
    - Pause between the rockets in a salvo was decreased from 0.16 - 0.11 to 0.14 - 0.09 s
    - Radius of medium explosion damage was increased from 2 to 4 m
    - Radius of explosion damage was increased from 2 to 6 m
    - Missile launcher «Wolfpack»
    - Number of rockets in salvo was increased from 6 to 10 - Minimum rocket speed was decreased from 25 to 20 m/s - Maximum rocket speed was decreased from 75 to 50 m/s - Final rocket angular speed increase by +100% was removed - Added an increase in pause between the rockets in a salvo by +20%;
    - Missile launcher «Tornado»
    - Pause between salvo's rockets decrease was changed from -50% to -30% - Initial rocket speed was set to 70 m/s - Initial rocket angular speed was set to 80 deg/s - Final rocket angular speed was set to 17 deg/s;
    - Missile launcher «Spear»
    - Number of rockets in salvo was increased from 4 to 6 - Initial rocket speed was changed to 45 m/s - Maximum rocket speed was changed to 30 m/s - Final rocket angular speed was decreased from 300 to 120 deg/s;
    - Missile launcher «Swarm»
    - Removed the decrease in Damage per rocket; - Removed the decrease in Minimum rocket speed; - Removed the increase in Minimum rocket angular velocity; - Removed the increase in Maximum rocket angular velocity; - Removed the increase in Salvo reload time;
- Railgun
  - The maximum time between dealing damage to a tank and its destruction - used to count that damage as an assist - was decreased from 5 to 3 s
- Gauss
  - Super Solenoids
    - Salvo reload decrease was changed from -16% to -22%
    - Nemesis
    - Aiming time increase was changed from +150% to +120%
- Shaft
  - Stellarator
    - Minimum sniping damage override by 3300 HP was changed to an increase by +380% - Maximum sniping damage override by 3300 HP was changed to a decrease by -15%
- Drones
  - Hyperion is now available for purchase in the Garage starting from Field Marshal for 320 000 crystals
    - Crisis is now available for purchase in the Garage starting from Legend for 365 000 crystals
- Modules
  - Armadillo is now available for purchase in the Garage starting from Commander for 275 000 crystals
- Updated icons of creating and managing a group in the Lobby

### July 4th (Update 804)

List of changes:

- The following augments were added to Common and Epic Containers
  - Firebird’s “Camper” augment
    - Titan’s “Grenadier” augment
- The maximum time between dealing damage to a tank and its destruction - used to count that damage as an assist - was previously 3 seconds. With this update, the duration now depends on the turret you use:
  - Firebird — 5 sec
    - Freeze — 1 sec
    - Hammer — 1 sec
    - Twins — 5 sec
    - Ricochet — 5 sec
    - Vulcan — 0,5 sec
    - Thunder — 5 sec
    - Scorpion — 10 sec
    - Magnum — 10 sec
    - Railgun — 5 sec
    - Gauss — 10 sec
    - Shaft — 10 sec
- Changed the amount of Rubies earned for completing weekly missions
  - Amount of Rubies for Standard weekly missions increased from 20 to 30
    - Amount of Rubies for ENCORE weekly missions decreased from 10 to 0

List of fixes:

- Now, self-destructing in battle is sufficient to fix issues like missing damage or being unable to pick up drops during the match
- Fixed errors in texts in different languages

### June 27th (Update 803)

List of changes:

- A new augment for Shaft has been added to Epic Containers — “Stellarator”
  - (Note) Sniper shots always deal maximum damage.
    - After entering the sniping mode, the faster you shoot, the higher the average damage per minute is.
- The following augments were added to Common and Epic Containers
  - Thunder’s “Camper”
    - Dictator’s “Grenadier”
- The following skins were added to Legendary Containers:
  - Hornet DK
    - Ares DK
    - Tesla DK
    - Scorpion DK
    - Freeze DK
    - Striker XT (HD)
- Legendary augments for a turret/hull can now drop from Containers only after getting AT LEAST ONE of the rare augments for the corresponding turret/hull
- “Phoenix” augments
  - Added an increase of regular damage by +15%;
    - Added an increase of critical damage by +15%;
    - Removed the reload time decrease;
- Isida
  - Critical hit chance increase was changed from +5% to +3%
    - “Nanomass reactor” augment
    - No longer consumes energy when attacking;
    - “Shock Nanobot Injection”
    - Energy consumption during healing decrease was changed from -50% to -90%; - Normal healing rate decrease was changed from -50% to -90%;
    - “Vampire nanobots”
    - Removed the fixed value of Energy consumption when attacking - Added an increase of Energy consumption when attacking is enabled without any target by +200%
    - “Sustainable Nanobots”
    - Removed the fixed value of Energy consumption when attacking - Added an increase of Energy consumption when attacking is enabled without any target by +200%
- Siege (SGE) mode
  - Time to capture a point was increased from 12.5 to 25 seconds
    - Time to select a new point was increased from 12.5 to 17 seconds
    - The number of reputation points for capturing a point was increased from 30 to 50
    - The number of team points required to win was decreased from 8 to 5
- The “Madness 2” map was added to the pool of PRO battle maps
  - (Note) This is a version of the “Madness” map with the platform below

List of fixes:

- Fixed the bug that caused a shadow of “MAX” badge in the list of Garage equipment to be slightly shifted

### June 20th (Update 802)

List of changes:

- The following augments were added to Common and Epic Containers
  - Shaft’s «Camper»
    - Paladin’s «Grenadier»
- Updated the default skin of Striker to the HD version
- Updated the Ultra skin of Striker
  - Added missiles that fly out of the missile launchers
    - Added an indicator that shows the order of launching missiles (it shows which missile launcher is next to launch a missile)
- Legendary augments for a turret/hull can now drop from Containers only after getting all rare augments for the corresponding turret/hull
  - (Note) If those augments are also in the Exotic category of Epic Containers, then the restriction does not apply
- Augments for the temperature immunity for any hull can now drop from Containers only after getting the temperature resistance augments for the same hull.
  - (Note) For example, Cold Immunity augment for Viking can now only be received after getting Cold Resistance augment for Viking
- Changed the amount of Rubies earned for daily and weekly missions
  - Amount of Rubies for Daily missions decreased from 2 to 0
    - Amount of Rubies for Standard weekly missions increased from 12 to 20
    - Amount of Rubies for ENCORE weekly missions increased from 0 to 10
- Added a light beam effect that indicates delivering a flag to a team base, capturing a point or a Juggernaut spawn location
- \[Turret\] Ricochet
  - Displaying sight mark distance increased from 95-125 to 100-130 meters
- Siege (SGE)
  - Time to capture a point decreased from 25 to 12.5 seconds
    - Time to select a new point decreased from 17 to 12.5 seconds
    - The number of reputation points for capturing a point was decreased from 50 to 30 units
    - The number of team points required to win increased from 5 to 8 units
- Assault (ASL)
  - The number of reputation points for capturing a flag increased from 5 to 10 units
    - The number of team points for capturing a flag increased from 15 to 20 units
- Time before tank destruction that counts damage as assist increased from 1 to 3 s
- Decreased the number of reputation points a player gets for assisting in destroying a tank in team format battles from 10 to 5

List of fixes:

- Fixed the visuals of shot and not shot primers on Hammer turret’s shells
- Fixed the behaviour of switching between hover hulls control modes from “relative to camera” to “relative to hull” when holding the right mouse button
  - (Note) This applies to Crusader and Ares hulls
- It is now impossible to return to a Matchmaking battle after being kicked out of it

### May 30th (Update 801)

List of changes:

- Reset the first purchase bonus, so you can get extra Tankoins for the first purchase again
  - Each Tankoin pack includes a bonus amount of Tankoins that you receive the first time you make a purchase of that pack
    - If you purchase the same pack again, you won't get this additional bonus part
    - The value of the bonus is different for each pack
- The following augments were added to Common and Epic Containers
  - Striker’s «Missile Launcher “Brass Knuckles”»
    - Magnum’s «Camper»
    - Hunter’s «Grenadier»
- The reward for catching a festive Cake Gold Box was changed from 15 Tankoins to 16 Rubies
- You now need to claim rewards for Challenge levels manually by clicking on a reward, or by pressing the “Claim all” button
- Added a notification icon in the Lobby to the widgets of both the Challenge and Elite Pass to show if there are any rewards left to claim
- Iran map was updated and received a Winter version
- Added a new Parma Remastered map

### May 27th (Update 800)

List of changes:

- Premium Pass now gives +150% crystals per battle, instead of +100%
- Updated visuals and added animation to the Premium Pass pop-up window
- Added the support of «EmissionColors» technology for materials that support texture displacement
  - (Note) Thus, some colors on animated textures (e.g. Isida’s pipes or Vulcan Demonic’s band) can glow at night
- Updated skyboxes for the following maps: Arena, Atra, Madness, Gravity, Monte-Carlo

List of fixes:

- Fixed the wrong values of energy recharge for Freeze and Firebird which was caused by excessive rounding of the parameter when counting values for different modifications of these turrets
  - (Note) Thus, after upgrading the Mk1 modification of Firebird or Freeze, it doesn’t speed up energy recharge for a full second
- Fixed Striker’s rocket damage when firing at static objects and tanks at extremely short distance
- Fixed Striker’s rocket damage when shooting stationary tanks, or shooting from small distances.
- Fixed the crash which happened when you go to Tankoins purchase screen when you tried to purchase a special offer in a pop-up window, but didn’t have enough Tankoins to do so

### May 16th (Update 799)

List of changes:

- The following skins were added to Legendary Containers:
  - Viking DK
    - Thunder DK
    - Vulcan LC
- The following augments were added to Common and Epic Containers:
  - Ricochet’s “Camper” augment
    - Crusader’s “Grenadier” augment
- Oracle drone now recharges supplies for different time depending on the activated supply
  - If Speed Boost is turned on, it is possible to switch to Boosted Damage in 5 seconds
    - If Speed Boost is turned on, it is possible to switch to Boosted Armor in 3 seconds
    - If Boosted Damage is turned on, it is possible to switch to Boosted Armor in 15 seconds
    - If Boosted Damage is turned on, it is possible to switch to Speed Boost in 5 seconds
    - If Boosted Armor is turned on, it is possible to switch to Boosted Damage in 15 seconds
    - If Boosted Armor is turned on, it is possible to switch to Speed Boost in 3 seconds
- \[Turret\] Firebird
  - Regular damage increased from 450-1200 to 660-1200
    - Critical damage increased from 600-1500 to 1020-1540
    - Reload decreased from 2-1.5 to 3-1.5 seconds
- \[Turret\] Freeze
  - Regular damage increased from 600-1200 to 900-1200
    - Critical damage increased from 1500-3000 to 2280-3040
- \[Turret\] Isida
  - Regular damage changed from 580-1160 to 780-1040
    - Critical damage increased from 600-1200 to 900-1200
    - Healing increased from 200-400 to 300-400
    - Critical healing increased from 500-1000 to 750-1000
    - Energy consumption when attacking decreased from 166 to 0 cond. units/s
    - Energy consumption when healing increased from 50 to 200 cond. units/s
    - Energy consumption when idle increased from 30 to 50 cond. units/s
    - Reload increased from 10 to 14 seconds
    - Cone angle increased from 15 to 20 degrees
    - Added unfreezing of ally tank when repairing from 0 to 25% per tick
    - Cooling down ally tank when healing increased from 0 to 25% per tick
    - “Support Nanobots” augment
    - Regular healing rate increase was changed from +100% to +0%; - Added a decrease to energy consumption when healing by -50%;
    - “Broadband Radiators” augment
    - Cone angle increase was changed from +200% to +125%; - Range decrease was changed from -33% to -30%;
    - “Vampire Nanobots” augment
    - Energy consumption when attacking (units/sec.) = 166
    - “Nanomass Reactor” augment
    - Energy consumption when attacking (units/sec.) = 166
    - “Sustainable Nanobots” augment
    - Energy consumption when attacking (units/sec.) = 166
    - “Shock Nanobot Injection” augment
    - Decrease of energy consumption when healing was changed from -20% to -50%;
    - “Excelsior” augment
    - Added a healing rate increase by +30%; - Added a critical healing increase by +30%;
    - (Note) Since the cylinder is now only used when healing, it is now possible to attack enemy tanks without worrying about spending energy.

We hope this change will make more different gameplay styles on Isida appealing.

- \[Turret\] Hammer
  - Regular damage increased from 450-900 to 690-920
    - Critical damage increased from 580-1160 to 870-1160
- \[Turret\] Tesla
  - Critical damage increased from 450-900 to 580-1160
    - Critical damage chance increased from15% to 18%
    - Cone angle increased from 17 to 20 degrees
    - Radius of adding an ally tank to the circuit increased from 12-15 to 20-30 m.
    - Radius of adding an enemy tank to the circuit increased from 12-15 to 15-20 m.
    - Radius of adding Ball Lightning to the circuit decreased from 20-25 to 12-15 m.
    - Ball speed increased from 5 to 6 m/s
    - “Shock Therapy” augment
    - Added a decrease to regular damage by -35%; - Added a decrease to critical damage by -22.5%; - Shot range decrease was changed from -52% to -60%;
    - (Note) The previous version of Tesla depended too much on Ball Lightnings. Because of that, it only made sense to use it for defence. There was just not enough time to use Ball Lightnings when attacking. Now using Chain Lightnings from ally tanks is much better than from Ball Lightnings.
- \[Turret\] Twins
  - Regular damage increased from 100-200 to 150-200
    - Critical damage increased from 235-470 to 360-480
    - Initial projectile speed increased from 60-90 to 90-120 m/s
    - Range of min damage increased from 60-80 to 90-120 meters
    - Range increased from 80-100 to 95-125 meters
    - Projectile force decreased from 0.7-1.6 to 0.5-1.5
    - Explosion force changed from 1-2 to 0.7-2.1
    - “Plasma Accelerators” augment
    - Range of min damage increase changed from +100% to +50%; - Range increase changed from +100% to +50%;
    - “Heavy Plasmagun” augment
    - Projectile speed decrease changed from -45% to -50%; - Added a decrease of min damage range by -45%; - Added a range decrease by -45%;
    - “Plasma Turbo Accelerators” augment
    - Initial projectile speed increase changed from +200% to +125%;
    - “Plasmatron” augment
    - Initial projectile speed increase changed from +100% to +50%;
    - (Note) The turret is balanced to fit its new role of a medium range turret better.
- \[Turret\] Ricochet
  - Regular damage changed from 175-350 to 255-340
    - Critical damage changed from 235-470 to 360-480
    - Initial projectile speed increased from 90-180 to 150-300 m/s
    - Final projectile speed increased from 10 to 90 m/s
    - Projectile acceleration time decreased from 1 to 0.3 seconds
    - Range of min damage increased from 60-80 to 90-120 meters
    - Range increased from 80-10 to 95-125
    - Projectile impact increased from 1-2 to 1-3
    - “Plasma-torch” augment
    - Added a decrease of projectile speed after ricochet by 50%; - Added a decrease of range of min damage by 35%; - Added a decrease in range by 35%; - Added a decrease in projectile force by 50%;
    - “Minus-field Stabilization” augment
    - Range of min damage increase changed from +100% to +50%; - Range increase was changed from +100% to +50%;
    - (Note) The turret is balanced to fit its new role of a medium range turret better.
- \[Turret\] Vulcan
  - Regular damage increased from 50-100 to 75-100
    - Critical damage increased from 100-200 to 150-200
- \[Turret\] Smoky
  - Regular damage changed from 355-710 to 525-700
    - Critical damage increased from 450-900 to 675-900
- \[Turret\] Striker
  - Regular damage increased from 450-900 to 675-900
    - Critical damage increased from 580-1160 to 870-1160
    - Reload decreased from 2,7-1,8 to 2,55-1,7 seconds
    - Reload after salvo decreased from 2,7-1,8 to 2,55-1,7 seconds
    - Angular rocket velocity decreased from 45-60 to 10-10 deg/s
    - “Missile Launcher «Uranium»” augment
    - Number of rockets per salvo: 4 - Regular damage increased from +70% to +125%; - Critical damage increased from +75% to +160%; - Added an increase in projectile acceleration time by +350%; - Aiming time decrease was changed from -75% to -35%; - Added an increase in pause between the rockets in a salvo by +400%; - Reload increase after a salvo was changed from +100% to +0%; - Added an explosion radius increase by +50%; - Maximum projectile speed was changed from 100 to 350 m/s;
- \[Turret\] Thunder
  - Regular damage increased from 450-900 to 675-900
    - Critical damage increased from 580-1160 to 870-1160
- \[Turret\] Scorpion
  - Regular damage increased from 580-1160 to 870-1160
    - Critical damage increased from 700-1400 to 1050-1400
    - Rocket damage increased from 200-400 to 300-400
    - Reload decreased from 4,8-3,2 to 4,5-3 seconds
    - Initial projectile speed changed from 500-1000 to 400-700 m/s
    - Final projectile speed decreased from 250-500 to 150-300 m/s
    - Projectile speed after a ricochet decreased from 500-1000 to 150-300 m/s
    - Initial rocket speed decreased from 75 to 70 m/s
    - Final rocket speed decreased from 25 to 20 m/s
    - Rocket acceleration time increased from 2 to 2.5 seconds
    - Initial rocket angular speed decreased from 100 to 80 deg/sec
    - Final rocket angular speed decreased from 10 to 7 deg/sec
    - Projectile force decreased from 3-9 to 2.5-7 cond. units
    - Pause between the rockets in a salvo changed from 130-130 to 166-111 ms
    - “Missile Launcher «Swarm»” augment
    - Added a final rocket angular speed increase by 100%;
    - (Note) Standard shot was made more effective, while rocket salvo now only works against completely immovable targets. The turret was only effective at maximum range. Those changes should bring more opportunities on medium range.
- \[Turret\] Magnum
  - Regular damage increased from 700-1400 to 1050-1400
    - Critical damage changed from 875-1750 to 1305-1740
- \[Turret\] Railgun
  - Regular damage increased from 700-1400 to 1050-1400
    - Critical damage changed from 875-1750 to 1305-1740
    - Reload increased from 4.2-2.4 to 4.35-2.5 seconds
    - Horizontal auto-aim +0.2 deg for all modifications
- \[Turret\] Gauss
  - Regular damage changed from 355-710 to 525-700
    - Critical damage increased from 450-900 to 675-900
    - Salvo damage increased from 850-1700 to 1275-1700
    - Aiming time increased from 1.5-1 to 1.5-1.5 seconds
    - Reload of salvo mode decreased from 8.4-5.6 to 7.8-4.7 seconds
    - Aim recovery time increased from 0,7 to 2 seconds
- \[Turret\] Shaft
  - Standard damage changed from 355-710 to 525-700
    - Critical damage increased from 450-900 to 675-900
    - Min sniping damage increased from 335-670 to 525-700
    - Max sniping damage increased from 1650-3300 to 2475-3300
- \[Turret\] Terminator
  - Regular damage changed from 970-3880 to 1350-3600
    - Critical damage increased from 1940-7760 to 3000-8000
    - Rocket damage increased from 325-1300 to 510-1360
    - Critical damage chance increased from 15% to 17%
- \[Hull\] Wasp
  - Protection increased from 1000-2000 to 1500-2000
- \[Hull\] Hopper
  - Protection increased from 1000-2000 to 1500-2000
    - Overdrive damage increased from 1000-2000 to 1500-2000
- \[Hull\] Hornet
  - Protection increased from 1000-2000 → 1500-2000
- \[Hull\] Viking
  - Protection increased from 1500-3000 to 2250-3000
- \[Hull\] Crusader
  - Protection increased from 1500-3000 to 2250-3000
    - Overdrive damage increased from 2000-4000 to 3000-4000
- \[Hull\] Hunter
  - Protection increased from 1500-3000 to 2250-3000
    - Weight increased from 1650-3300 to 1750-3500
    - Overdrive damage increased from 1000-2000 to 1500-2000
- \[Hull\] Paladin
  - Protection increased from 1500-3000 to 2250-3000
    - Overdrive healing per tick increased from 25-50 to 35-50
- \[Hull\] Dictator
  - Protection increased from 1500-3000 → 2250-3000
- \[Hull\] Titan
  - Protection increased from 2000-4000 to 3000-4000
- \[Hull\] Ares
  - Protection increased from 2000-4000 to 3000-4000
    - Overdrive damage increased from 2000-4000 to 3000-4000
- \[Hull\] Mammoth
  - Protection increased from 2000-4000 to 3000-4000
- \[Hull\] Juggernaut
  - Protection increased from 5000-20000 to 7500-20000
    - Overdrive healing increased from 2500-10000 to 3750-10000
- \[Grenade\] Bomb
  - Damage increased from 1500-3000 to 2000-3000
- \[Grenade\] Mortar
  - Damage increased from 2000-4000 to 3000-4000
- \[Grenade\] Salyut
  - Damage increased from 1000-2000 to 1500-2000
- \[Grenade\] Pumpkin
  - Damage increased from 650-1300 to 900-1300
- \[Grenade\] Snowball
  - Damage increased from 650-1300 to 900-1300
- \[Augment\] Driver
  - Speed of overdrive reload (time) increase was changed from +50% to +100%;
- The number of team points for capturing a flag in the “Assault” mode was changed from 12 to 15 units
- Time before tank destruction that counts damage as assist decreased from 3 to 1 s
- The number of reputation points you get for healing an ally decreased from 13 to 10

List of fixes:

- Fixed the rotation of coolers on Ares hull.
  - Both coolers on the left side spin clockwise
    - Both coolers on the right side spin counterclockwise
- Fixed a bug where tank tracks would rotate in the wrong direction when pressing movement buttons on the keyboard.
- Fixed a bug due to which in PRO-Battles the number of players allowed on the map did not change when changing the selected map in the battle creation settings.
- Improved textures of Ares XT Skin.
- Animation of coolers on the tank, dust and exhaust now do not depend on the duration of individual frames.

### April 30th (Update 798)

List of changes:

- \[Hull\] Juggernaut
  - Juggernaut Health recovery when picking up supply boxes in battle differs on different modifications
    - Mk1 1875 HP - Mk2 2375 HP - Mk3 2875 HP - Mk4 3375 HP - Mk5 3875 HP - Mk6 4500 HP - Mk7 5000 HP
- Other
  - Increased the number of reputation points a player gets for assisting in destroying a tank in TDM from 3 to 10
    - Increased the number of reputation points a player gets for assisting in destroying a bot in TDM from 1 to 5
    - Decreased the time before destroying a tank that counts damage as assisting in destroying from 10 to 3 seconds
    - Decreased the reputation and experience points for assisting in destroying a bot or destroying a bot in solo format battles to 0
- The following augments were added to Common and Epic Containers:
  - Smoky’s “Camper” augment
    - Viking’s “Grenadier” augment

### April 25th (Update 797)

List of changes:

- The following augments were added to Common and Epic Containers:
  - Gauss’ “Camper” augment
    - Hornet’s “Grenadier” augment
- The number of experience points you receive for actions in battles is decreased by 33% (30 XP → 20 XP, 15 XP → 10 XP)
  - (Note) We announced these changes in the previous episodes of the V-LOG, when we told that the speed of experience points earned was increased by 4 times in 2020. In the update #794 the increase rate made in 2020 was changed from х4 to х3. This update changes the rate from x3 to x2. Battle funds will remain at the x2 increase made in 2020. We might cancel this change after investigating long-term effects.
- Shop Showcase is now updated for all players at the same time, during the daily servers restart
  - (Note) After this change, your Shop Showcase will be updated after each daily server restart, no matter when you claimed items from the Showcase during the previous day.
- \[Turret\] Tesla
  - Horizontal auto-aim disabled for the ball lightning
    - “Shock Therapy” augment
    - Shot range decreased from 13 to 12 m.
- \[Turret\] Hammer
  - Horizontal auto-aim disabled
    - Impact force of a single pellet changed from 0.8 - 1.6 to 0.5 - 1.5 units;
- \[Turret\] Ricochet
  - Horizontal auto-aim changed to +0.2 deg for all modifications
- \[Turret\] Smoky
  - Horizontal auto-aim changed to +0.2 deg for all modifications
    - “Hyperspeed Rounds” augment
    - Horizontal auto-aim changed from ±0.2 to ±0.4 deg.
- \[Turret\] Thunder
  - Horizontal auto-aim changed to +0.2 deg for all modifications
- \[Turret\] Scorpion
  - Horizontal auto-aim changed to +0.4 deg for all modifications
- \[Turret\] Railgun
  - Horizontal auto-aim changed to +0.2 deg for all modifications
    - “Round Stabilization” augment
    - Critical damage decrease changed from -32% to -24%
- \[Turret\] Gauss
  - Horizontal auto-aim changed to +0.2 deg for all modifications
- \[Turret\] Terminator
  - Impact force increased from 3 - 9 to 5 - 15;
- Missions
  - The required amount of reputation points for the weekly “Earn Reputation Points in Battles” mission increased from 5000 to 6000
    - The required amount of battles for the weekly “Finish a Battle” mission decreased from 12 to 10
    - The required amount of battles for the weekly Encore “Finish a Battle” mission decreased from 9 to 7
    - The required amount of battles for the weekly Encore “Get into the TOP-3 of your team in battles” mission decreased from 2 to 1
    - The required amount of reputation points for the weekly Secret “Earn Reputation Points in Battles” mission increased from 1000 to 2000
    - Added the new daily Encore “Earn Reputation Points in Battles” mission with the requirement to earn 1000 reputation points
    - Added the new weekly Encore “Earn Reputation Points in Battles” mission with the requirement to earn 5000 reputation points
- The number of reputation points you get for assisting in destroying a tank decreased from 5 to 3
- Pop-up announcements now appear again when their start/end dates are changed.

List of fixes:

- Fixed the bug that caused the “ERROR Unknown error Exception: Model already subscribed! class” message to appear.
- Fixed the bug whereby activating Ares’ Overdrive led to frame rate drops.
- Fixed the values of damage and rate of fire when Viking’s overdrive is activated for some augments
- Performed technical maintenance in PRO-Battles; functionality is being restored with the release of this update.

### April 17th (Update 796)

List of changes:

- The following augments were added to Common and Epic Containers:
  - Hammer’s “Camper” augment
    - Hopper’s “Grenadier” augment
- \[Turret\] Hammer
  - One pellet force increased from 0.2 - 0.4 to 0.8 - 1.6;
    - “Duplet” augment
    - Added a decrease to impact force by -50%;
    - “Blunderbuss” augment
    - Added an increase of amount of pellets per shot by +200%;
    - “Hunter Duplet” augment
    - Added a decrease to impact force by -50%.
- \[Turret\] Striker
  - Aim recovery time increased from 1 to 2 seconds;
- \[Turret\] Railgun
  - “Large caliber rounds” augment
    - Damage increase was changed from +33% to +50%; - Critical damage increase was changed from +33% to +25%.
- All the turret “Phoenix” augments:
  - Bonus to reputation points earned in a battle increased from +30% to +40%
- Juggernaut (TJR/JGR)
  - The number of points for destroying a Juggernaut was decreased from 60 to 30
    - The number of points for assisting to destroy a Juggernaut was decreased from 30 to 15
- Daily missions
  - The required amount of reputation points changed from 900 to 1000
    - The daily “Use overdrive in battle 5 times” mission was replaced with the new “Starter” mission, which completes automatically when you open the daily missions screen
    - (Encore) The daily Encore mission “Open 1 common container” was replaced with the “Use overdrive in battle 3 times” mission
- Bots met on ranks 27 and above now have a built-in effect of the “Blaster” augment
- Slightly reworked the tank explosion effect

Hammer turret's hotfix (18/04)

- Coefficient of decreasing shot reload duration when Viking’s overdrive is activated was changed from 0,4 to 0,7
- Increase to regular and critical damage when Viking’s overdrive is activated was changed from +150% to 300%

Hammer turret's hotfix (20/04)

- "Slugger" augment
  - Added a decrease to Impact force by -50%;
- "Heavy Slugger" augment
  - Added a decrease to Impact force by -50%;

### April 11th (Update 795)

List of changes:

- The following Legendary augments were added to Common and Epic Containers:
  - Tesla’s “Shock Therapy” augment
    - Railgun’s “Camper” augment
    - Wasp’s “Grenadier” augment
- All the turret “Phoenix” augments now have the same parameters:
  - A +30% bonus to reputation points earned in a battle
    - An increase to critical hit chance of +30%
    - A decrease to reload time of -10%
    - (Note) If a turret doesn’t have “Reload time”, instead it gets an increase to regular damage of +10%
    - An increase to vertical auto-aim angles of +15%
    - (Note) If a turret doesn’t have “Vertical auto-aim angles”, it gets an increase to maximum range of +10%
- The “Mortar” grenade is now available for 10,100 Crystals in the Garage
- \[Turret\] Vulcan
  - Regular damage was increased from 40 - 80 to 50 - 100 HP
    - Critical damage was decreased from 150 - 300 to 100 - 200 HP
    - Barrel startup time was decreased from 0.75 to 0.1 s
    - Barrel slowdown time was increased from 0.75 to 2.5 s
    - Time for overheating was decreased from 8 - 9 to 6 - 6 s
    - Critical hit chance was increased from 14% to 16%
    - Turret rotation while shooting deceleration coefficient was decreased from 0.9 to 0.5
    - “Reinforced aiming transmission” augment
    - Added an increase to turret rotation while shooting deceleration coefficient by +50%
    - “Shooting speed regulator” augment
    - Barrel startup time decrease was changed from -90% to -50%; - Barrel slowdown time decrease was changed from -90% → -85%; - Added an increase to time to overheat by +50%
    - “Shredder” augment
    - Barrel startup time increase was changed from +100% to +900%; - Barrel slowdown time increase was changed from +100% → +50%; - Added an increase to maximum and minimum range by +50%
- \[Turret\] Striker
  - Horizontal auto-aim angle changed from ±1,8-±0,6 to ±2,4-±1,2 deg.
- \[Turret\] Thunder
  - Horizontal auto-aim angle changed from ±2,4-±1,2 to ±1,8-±0,6 deg.
- \[Turret\] Gauss
  - Horizontal auto-aim angle changed from ±2,4-±1,2 to ±1,8-±0,6 deg.
- \[Grenade\] Bomb
  - Reload time changed from 40-30 to 50-25 s
- \[Grenade\] Mortar
  - Reload time changed from 40-30 to 50-25 s
- The “Mortar” grenade is now available in all modifications in the Early Access section of the Shop
- The requirement of the «Earn reputation points in battles» daily mission was changed from 700 to 900 units
- The requirement of the «Earn stars» daily mission was changed from 16 to 12 units
- The requirement of the «Finish battles by being in the winning team» weekly mission was changed from 5 to 3 units
- The requirement of the «Earn reputation points in battles» weekly mission was changed from 4000 to 5000 units
- The requirement of the «Earn experience points in battles» weekly mission was changed from 5000 to 4000 units
- The requirement of the «Finish battles by being in the winning team» weekly Encore mission was changed from 3 to 1 unit
- The requirement of the «Earn reputation points by playing in battles you entered via the «Quick battle» button» weekly Encore mission was changed from 1000 to 2000 units
- The number of team points for capturing a flag in the “Assault” mode was changed from 9 to 12 units
- The number of reputation points for capturing a flag in the “Assault” mode was changed from 20 to 5 units
- Number of players per map was updated for the following maps:
  - Factory PRO 16 → 12
    - Gravity PRO 20 → 14
    - Gubakha PRO 20 → 18
    - Iran PRO 20 → 16
    - Lost Temple MM 30 → 32
    - Molotov PRO 20 → 14
    - Noise PRO 16 → 14
    - Serpuhov MM 18 → 20
    - Skylark PRO 24 → 22
    - Skylark MM 20 → 22
- Tutorial missions starting from the 4th rank now give experience points as rewards

List of fixes:

- Fixed the bug with the aiming system working incorrectly when capturing a target for Striker, Gauss, Scorpion and Terminator:
  - When a 3rd person is driving between a player and target, it no longer interrupts target lock on
    - Long aiming at a target that tries to hide behind cover no longer causes self-destruction by the anti-cheat system
- Fixed the following bugs in the console version of the game:
  - The size of texts in the battle event log was decreased
    - Added shadows behind texts to make it easier to read
    - Added a warning message about upcoming server restarts
    - And fixed about 30 other minor bugs
- Missions no longer disappear immediately upon receiving a reward to prevent mission tiles from moving around the screen
- Fixed the bug that caused an unavailable mission to get the style of an available one if you claim a reward of at least one mission in the specific category
- Fixed a bug that could cause the game client to crash when accessing the Garage, then the list of Garage items (for example, turrets) and then Supplies
- Inactivity timeout in tutorial battles is now 300 seconds

### March 28th (Update 794)

List of changes:

- Implemented shading and lighting of decals (traces of explosions).
  - (Note) Currently, only shadowmap is supported; lightmap will be supported in remastered maps in the future.
- A white flash effect was returned to the 3D model of the mine when it is placed, as it was in the Flash client.
- Experience points for actions in battle were reduced by 25% (40 XP → 30 XP, 20xp → 15 XP).
  - - We announced this change in the previous episodes of the V-LOG when we mentioned that the experience gain rate was increased fourfold in 2020. After this change, the experience gain rate will decrease from x4 to x3 compared to 2020. The funds earned in battle will remain at the x2 level of 2020. After analyzing the results of this change, we will decide whether it’s necessary to reduce the experience gain rate from x3 to x2.
- The Gold Boxes now give experience points
  - - Standard Gold Box — +1000 experience points - Container Box — +1000 experience points - Megagold with Crystals — +5000 experience points - Megagold with Rubies — +1000 experience points - Custom Gold Box — +0 experience points - Tank explosion in the April Fools' Gold Box — +0 experience points
- Standard daily and weekly missions now include +100 experience points as a reward for completing each mission.
- The number of Rubies for completing the daily supermission was reduced from 3 to 2.
- The number of Rubies for completing the weekly supermission was increased from 5 to 12.
- The mechanics of the Adrenaline augments were changed. Now, these augments only provide additional damage if the tank's health drops below a certain threshold. The damage no longer increases linearly as the tank's health decreases.
  - Melee turrets (Firebird, Freeze, Isida, Tesla, Hammer)
    - additional damage of 25%
    - bonus activation occurs when health drops to 35%.
    - Medium-range turrets (Twins, Ricochet, Vulcan, Smoky, Striker, Thunder)
    - additional damage of 25%
    - bonus activation occurs when health drops to 25%.
    - Long-range turrets (Scorpion, Magnum, Railgun, Gauss, Shaft)
    - additional damage of 25% - bonus activation occurs when health drops to 20%.
- The requirement of the «Complete daily missions» weekly mission was changed from 35 to 15.
- The requirement of the «Earn reputation points in battle» weekly mission was changed from 3000 to 4000.
- The requirement of the «Earn crystals in battle» weekly mission was changed from 2000 to 7000.
- The requirement of the «Earn experience in battle» weekly mission was changed from 4000 to 5000.
- The «Supplies Pack» special offer now costs 500 Rubies instead of 500 Tankoins.
- Added the «Starter Key Bundle» special offer which includes 45 Common Keys with a 90% discount.
- Added the «Legendary Key Bundle» special offer which includes 5 Legendary Keys with a 90% discount.
- The «Bomb» grenade (all modifications) was added to Early Access kits
- The «Mortar» grenade (Mk1 modification) was added to Early Access kits

List of fixes:

- Fixed a bug in the Unity client for Nintendo Switch where it was sometimes impossible to get past the data \*processing agreement screen.
- Now, when shadows are turned on, the strength of the main directional light in the scene does not decrease; the picture does not become darker.
- Removed unnecessary tank reassembly in an invisible lobby while changing equipment in battle.
- Disabled the shadows of the tracks of hulls in the Garage.
- The system for caching bonus boxes in battle has been improved.
- Fixed a bug that caused shop offers in the Showcase category in the Shop not to be issued after ranking up.

### February 14th (Update 793)

List of changes:

- Turret augments that apply the following status effects «Burning», «Freezing», «EMP», «AP», «Stun» and «Jammer» are now considered Epic instead of Legendary in the list of Container rewards
  - (Note) These changes are not applied to any «Pulsar» augments and the Vulcan’s «Incendiary band» augment
- The following augments are now considered Rare instead of Epic in the Garage and in the list of Container rewards
  - Firebird — High pressure pump
    - Firebird — Compact fuel tanks
    - Firebird — Incendiary mix
    - Freeze — High pressure pump
    - Freeze — Corrosive mix
    - Freeze — Shock freeze
    - Isida — Broadband radiators
    - Isida — Support nanobots
    - Isida — Nanomass reactor
    - Tesla — Minus-field
    - Tesla — Acceleration protocol
    - Tesla — Dilatory protocol
    - Hammer — Slugger
    - Hammer — High-capacity ammo clip
    - Hammer — Duplet
    - Twins — Stabilized plasma
    - Twins — Plasma accelerators
    - Twins — Heavy plasmagun
    - Ricochet — Destabilized plasma
    - Ricochet — Minus-field stabilization
    - Ricochet — Plasma-torch
    - Vulcan — Shooting speed regulator
    - Vulcan — Reinforced aiming transmission
    - Vulcan — Incendiary band
    - Smoky — Assault rounds
    - Smoky — High-precision aiming system
    - Smoky — Supercumulative rounds
    - Striker — Missile launcher "Hunter"
    - Striker — Missile launcher "Cyclone"
    - Striker — Remote rocket explosives
    - Thunder — Small caliber charging machine
    - Thunder — Subcaliber rounds
    - Thunder — Sledgehammer rounds
    - Scorpion — Explosive shells
    - Scorpion — Explosive warheads
    - Scorpion —Missile launcher «Wolfpack»
    - Magnum — Reinforced gun carriage
    - Magnum — Automated gunpowder loading mechanism
    - Magnum — Harpoon
    - Railgun — Reinforced aiming transmission
    - Railgun — Round stabilization
    - Railgun — Electromagnetic accelerator "Scout"
    - Gauss — Faster Horizontal Tracking
    - Gauss — Hacked aiming processor
    - Gauss — Large Caliber
    - Shaft — Short-band emitter
    - Shaft — Heavy capacitors
    - Shaft — Light capacitors
- Epic Turret augments are now available for Rubies in the Shop
  - - (Note) Thus all status augments for turrets are sold for Rubies, same as all status immunity augments for hulls aresold
    - «Bomb» grenade was added to Common and Epic containers
    - «Mortar» grenade was added to the «Epic» category of Common and Epic containers
    - (Note) «Mortar» grenades can only be obtained from containers after you received it from Elite Pass or after you purchased it in the Garage (it will become purchasable there in future)
    - The following augments were added to the «Legendary» category of Common and Epic containers:
    - Ricochet’s «Plasma Resonator» augment - Thunder’s «Revolver» augment - Isida’s «Shock Nanobot Injection» augment - Freeze’s «Stable Mix» augment
- Hammer
  - Horizontal auto-aim angle changed from ±1 to ±3,0-±1,8 deg.
    - Smoky
    - «Autocannon» augment — horizontal auto-aim angle changed to ±0,6 deg. - «Hyperspeed Shells» augment — horizontal auto-aim angle changed to ±0,2 deg.
- Striker
  - «Remote Rocket Explosives» augment
    - Horizontal auto-aim angle changed to ±0 deg.
    - «Vacuum Missiles» augment
    - Horizontal auto-aim angle changed to ±0 deg.
    - «Phoenix» augment
    - Horizontal auto-aim angle changed to ±0 deg.
- Thunder
  - «Vacuum shell» augment
    - Horizontal auto-aim angle changed to ±0 deg.
    - «Nanotech» shells» augment
    - Horizontal auto-aim angle changed to ±0 deg.
    - «Hyperspeed shells» augment
    - Horizontal auto-aim angle changed to ±0.2 deg.
- Scorpion
  - Horizontal auto-aim angle changed from ±1,2-0 to ±1,4-0,2 deg.
- Railgun
  - Horizontal auto-aim angle changed from ±1,2-0 to ±1,4-0,2 deg.
    - Combo shot damage changed from 1500-3000 to 2000-4000 HP
    - «Phoenix» augment
    - Added an increase of Combo shot damage by +100%
- Gauss
  - «Hyperspeed shells» augment
    - Horizontal auto-aim angle changed to ±0,2 deg.
- Shaft
  - «Healing Emitters» augment
    - Horizontal auto-aim angle changed to ±0 deg.
- Terminator
  - Horizontal auto-aim angle changed from ±3 to ±1,4-0,2 deg.
    - Combo shot damage changed from 1500-3000 to 2000-4000 HP
- Bomb
  - Activation time after throw changed from 3,6 to 4,6-3,6 s.
- List of fixes:
- The logic of aiming of Thunder’s “Nanotech Shells” augment when shooting at allies has been reworked.
- Fixed supply availability ranks in the Shop Showcase. Now they match availability ranks in the Garage
- Fixed visual bug with double grenade detonation on remote clients
- Fixed the horizontal auto-aim behaviour for shells that can ricochet
- Fixed the action of some status effect on the tank once the tank becomes a Juggernaut.

### February 14th (Update 790)

List of changes:

- Horizontal auto aim now works for all platforms
- Freeze
  - «Critical Mix» augment
    - Critical hit chance increase changed from +600% to +500%
- Isida
  - «Phoenix» augment
    - Range increase changed from +50% to +20%; - Target outlining distance increase changed from +40% to +15%; - Energy recovery on target destruction changed from 300 to 200 units;
- Tesla
  - «Phoenix» augment
    - Range increase changed from +50% to +20%; - Target outlining distance increase changed from +40% to +15%;
- Twins
  - Horizontal auto aim angle changed from ±1 to 0 deg.
    - «Pulsar» augment
    - Critical chance decrease changed from -20% to -25%;
    - «Plasmatron» augment
    - Standard damage increase changed from +300% to +250%;
- Ricochet
  - Horizontal auto aim angle changed from ±5 to ±3.0-±1.8 deg.
    - «Pulsar» augment
    - Critical chance decrease changed from -30% to -40%;
    - «Helios» augment
    - Energy recovery rate decrease changed from -45% to -32%
    - «Berserk» augment
    - Shot reload decrease changed from -25% to -30%; - Added Charge time increase by +20%
    - «Plasma Resonator» augment
    - Damage decrease changed from -20% to -30%
- Vulcan
  - Horizontal auto aim angle changed from ±1 to 0 deg.
    - «Pulsar» augment
    - Critical chance decrease changed from -30% to -40%
    - «Shredder» augment
    - Reload decrease changed from -30% to -35%
- Smoky
  - Horizontal auto aim angle changed from ±5 to ±3.0-±1.8 deg.
    - «Pulsar» augment
    - Critical chance decrease changed -35% to -45%;
    - «Autocannon» augment
    - Reload decrease changed from -50% to -55%
    - «Explosive Rounds» augment
    - Added Critical damage increase by +25%;
- Striker
  - Horizontal auto aim angle changed from ±5 to ±1.8-±0.6 deg.
    - «Missile launcher "Uranium"» augment
    - Damage increase changed from +65% to +70%; - Single-shot reload time increase changed from +20% to 15%
    - «Vacuum Missiles» augment
    - Added Pause between salvo's rockets increase by +12%;
- Thunder
  - Horizontal auto aim angle changed from ±5 to ±2.4-±1.2 deg.
    - «Vacuum shell» augment
    - Damage decrease changed from -25% to -20%;
    - «Strict ammunition load» augment
    - Added Critical damage increase by +25%;
    - «Anvil» shells» augment
    - Range of maximum damage decrease changed from -60% to -50%; - Range of minimum damage decrease changed from -60% to -25%;
    - «Bolter» augment
    - Weapon reload time decrease changed from -50% to -40%
- Scorpion
  - Horizontal auto aim angle changed from ±5 to ±1.2-0 deg.
- Magnum
  - «Vacuum core» augment
    - Damage decrease changed from -50% to -45%
    - «Bombard» augment
    - Reload time decrease changed from -50% to -45%;
    - «Destroyer» augment
    - Reload time increase changed from +80% to +85%;
- Railgun
  - Horizontal auto aim angle changed from ±3 to ±1.2-0 deg.
    - «Round destabilization» augment
    - Critical damage increase changed from +40% to +20%
    - «Death Herald compulsator» augment
    - Added Reload time decrease by -15%; - Added Shot warmup time decrease by -15%;
    - «Shotgun» rounds» augment
    - Reload time decrease changed from -15% to -10%
- Gauss
  - Horizontal auto aim angle changed from ±3 to ±2.4-±1.2 deg.
    - «Super Solenoids» augment
    - Added Salvo reload decrease by -16%;
    - «Nemesis» augment
    - Aiming time increase changed from +200% to +150%;
- Shaft
  - Horizontal auto aim angle changed from ±5 to ±1.8-±0.6 deg.
    - «Rapid-fire mode» augment
    - Energy recovery rate increase changed from +66% to +100%;
    - «Healing Emitters» augment
    - Added Arcade shot reload increase by +15%;
- Crusader
  - Horizontal auto aim angle changed from ±12 to ±3 deg.
- Ares
  - Horizontal auto aim angle changed from ±6 to 0 deg.
- Team points required to finish a battle
  - Changed for the «Team Juggernaut» mode (TJR) from 9 to 10
    - Changed for the«Control Points» mode (CP) from 70 to 90
- Updated GS calculation rules
  - Changed the number of GS points for Turret Мk 7 GS from 3470 - 4000 to 3470 - 4300
    - Changed the number of GS points for Hull Mk 7 GS from 2600 - 3000 to 2600 - 3200
    - Changed the number of GS points for Legendary turret augments from 300 to 0
    - Changed the number of GS points for Legendary hull augments from 200 to 0
- Thunder’s «Bolter» augment was added to Common and Epic containers
- Shaft’s «Quasar» augment was added to Common and Epic containers
- Added CAPTCHA check for the «Hyper» format battles when entering and re-entering a battle

### January 24th (Update 788)

List of changes:

- All augments for all turrets that can apply one status effect now get a 10% increase to critical damage chance, as all status augments for Smoky have
- Tesla
  - Reload decreased from 1.2 to 1.0 s.
    - «Electroturret» augment
    - Lightning ball damage increase changed from +40% to +25%; - Lightning ball warmup time increase changed from +100% to +200%
    - «Phoenix» augment
    - Lightning ball damage increase changed from +40% to +25%; - Lightning ball warmup time increase changed from +100% to +200%
- Hammer
  - Damage per shot increased from 380 - 760 to 450 - 900 HP
    - Shot reload time decreased from 1.35 - 0.8 to 1.275 - 0.7 s
    - Range of max damage decreased from 30 - 40 to 15 - 25 m.
    - Range of min. damage decreased from 40 - 50 to 20 - 30 m.
    - Maximum shot range decreased from 50 - 60 to 40 - 50 m.
    - Displaying sight mark distance decreased from 50 - 60 to 40 - 50 m.
    - Chance of critical damage increased from 13% to 17%
    - «Slugger» augment
    - Range of maximum damage increase changed from +100% to +50%; - Range of minimum damage increase changed from +25% to 50%;
    - «Blunderbuss» augment
    - Removed range of min and max damage decrease
    - «Assault Magazine» augment
    - Removed critical damage decrease
    - «Phoenix» augment
    - Added range of min and max damage increase by 50% - Added maximum shot range increase by +25% - Shot reload time decrease changed from -60% to -65%
- Twins
  - Range of max damage increased from 30 - 50 to 40 - 60 m.
    - Range of min damage increased from 50 - 70 to 60 - 80 m.
    - Maximum shot range increased from 60 - 90 to 80 - 100 m.
    - Turning speed decreased from 80 - 150 to 70 - 120 deg./sec
    - Turning acceleration decreased from 80 - 150 to 70 - 120 (deg./sec²)
    - «Plasma Accelerators» augment
    - Added projectile acceleration increase by +20%
- Ricochet
  - Range of max damage increased from 30 - 50 to 40 - 60 m.
    - Range of min damage increased from 50 - 70 to 60 - 80 m.
    - Maximum shot range increased from 60 - 90 to 80 - 100 m.
    - Final projectile speed increased from 10 to 30
    - Turning speed decreased from 80 - 150 to 70 - 120 deg/seс
    - Turning acceleration decreased from 80 - 150 to 70 - 120 deg/sec²
    - «Plasma Resonator» augment
    - Damage decreased by -20% - Range of min. damage changed from 70 to 80
- Vulcan
  - Projectile speed after ricochet decreased from 200 - 250 to 100 - 100
    - «Incendiary Band» augment
    - Removed reload time increase - Removed projectile speed decrease
    - «Rubberized Rounds»
    - Removed projectile speed decrease - Minimum ricochet angle decreased from 10° to 1°
    - «Explosive Band» augment
    - Added damage increase by +13%
    - «Shredder» augment
    - Changed damage increase from +10% to +13%
    - «Phoenix» augment
    - Minimum ricochet angle decreased from 10° to 1° - Added time to overheat increase by +55%
- Smoky
  - Projectile speed after ricochet decreased from 400 - 700 to 300 - 500
    - «High-precision Aiming System» augment
    - Reload time increase changed from +82% to +64%
    - «Autocannon» augment»
    - Removed Critical chance decrease
    - «Pulsar»
    - Critical hit chance decrease changed from -30% to -35%
- Scorpion
  - Missile launcher «Swarm» augment
    - Salvo reload time decrease by -25% is replaced with Salvo reload time increase by +25%
    - Missile launcher «Spear»
    - Salvo reload time decrease changed from -50% to -25%
- Shaft
  - «Short-band Emitter» augment
    - Damage increase changed from +35% to +30%; - Critical damage increase changed from +33% to +29%; - Minimum sniper damage increase changed from +35% to +30%;
    - «Phoenix» augment
    - Damage increase changed from +35% to +30% - Critical damage increase changed from +33% to +29%;
- Wasp
  - «Blaster» augment
    - Damage from the explosion changed from 1000 - 2000 to 750 - 1500 HP
- Hopper
  - Top speed decreased from 10 - 12 to 9 - 11 m/s
    - Power increased from 550 - 600 to 600 - 800
    - «Blaster» augment
    - Damage from the explosion changed from 1000 - 2000 to 750 - 1500 HP
- Hornet
  - «Blaster» augment
    - Damage from the explosion changed from 1000 - 2000 to 750 - 1500 HP
- Viking
  - «Blaster» augment
    - Damage from the explosion changed from 1500 - 3000 to 1125 - 2250 HP
- Crusader
  - Top speed decreased from 7.5 - 9 to 7 - 8 m/s
    - Power changed from 600 - 700 to 700 - 900
    - «Blaster» augment
    - Damage from the explosion changed from 1500 - 3000 to 1125 - 2250 HP
- Hunter
  - «Blaster» augment
    - Damage from the explosion changed from 1500 - 3000 to 1125 - 2250 HP
- Paladin
  - Top speed decreased from 7.5 - 9 to 7 - 8 m/s
    - Power changed from 600 - 700 to 700 - 900
    - «Blaster» augment
    - Damage from the explosion changed from 1500 - 3000 to 1125 - 2250 HP
- Dictator
  - «Blaster» augment
    - Damage from the explosion changed from 1500 - 3000 to 1125 - 2250 HP
- Titan
  - «Blaster» augment
    - Damage from the explosion changed from 2000 - 4000 to 1500 - 3000 HP
- Ares
  - Top speed decreased from 5 - 6 to 4.5 - 5.5 m/s
    - Power increased from 650 - 800 to 800 - 1000
    - «Blaster» augment
    - Damage from the explosion changed from 2000 - 4000 to 1500 - 3000 HP
- Mammoth
  - «Blaster» augment
    - Damage from the explosion changed from 2000 - 4000 to 1500 - 3000 HP
- Number of points to finish a battle
  - The number of points for the TDM mode decreased from 160 to 120
    - The number of flags for the CTF mode decreased from 6 to 5
    - The number of points for the ASL mode decreased from 150 to 120
    - The number of captures in the RGB mode decreased from 9 to 7
    - The number of points in the TJR mode decreased from 12 to 9
    - The number of points in the CP mode decreased from 90 to 70
    - The number of points in the SGE mode decreased from 7 to 5
- The following skins were added to the Legendary container:
  - Thunder XT HD
    - Hornet XT HD
    - Titan GT
    - Ricochet GT
- Updated GS score calculations:
  - The number of points you get from turrets changed from 50 - 3000 to 33 - 4000
    - The number of points you get from hulls changed from 50 - 3000 to 33 - 3000
    - The number of points you get from grenades changed from 0 - 1000 to 33 - 500
    - The number of points you get from drones changed from 33 - 1199 to 33 - 999
    - The number of points you get from modules changed from 0 - 300 to 25 - 250
    - The number of points you get from legendary hull augments changed from 300 to 200

### January 17th (Update 787)

List of changes:

- Crusader’s «Cryo Cannon» overdrive now uses the projectile mechanics instead of facility ones
  - There is no longer a delay between hitting a target and explosion
    - Icicle now explodes on contact with a destroyed tank
    - Icicle can no longer be destroyed by activating EMP or Dome
    - Icicle now ricochets if hits a surface at an angle greater than 45 degrees
    - Icicle now slows down when flying
    - (Note) It is much easier to aim and hit targets with the new Cryo Cannon. We added the ability to ricochet to the icicle in order to compensate for it.
- «Bomb» grenades are added to the Sport mode for all players
  - (Note) The Sport version of this Grenade has maximum parameters and doesn’t use Grenades from your inventory

List of fixes:

- Fixed the bug with Crusader Cryo Cannon overdrive’s icicle that cause it to stay in front of a hull if the tank gets destroyed at the moment of launching the overdrive
- Fixed the bug that caused the barrels of the Hammer (with the GT skin equipped) to be pointing at the sky when you see it at long distance
- Fixed the bug that caused the mobile client to get bugged when you shoot projectiles that can ricochet

## 2024

### December 6th (Update 785)

List of changes:

- Changed how ricocheting works. Now, after a projectile ricochets, its speed is equal to the initial speed, no matter what its speed was before ricocheting.
- (Note) This behaviour works for all turrets which have projectiles that can ricochet and that have different initial and final projectile speeds
- Ricochet
  - Initial projectile speed remains 90-180
    - Final projectile speed decreased from 90-180 to 10-10
    - Time to reach final projectile speed increased from 0 to 1
    - “Plasma Resonator” augment:
    - Projectile speed increase changed from +50% to +0%.
- Smoky
  - Initial projectile speed remains 400-700
    - Final projectile speed decreased from 400-700 to 300-500
    - Time to reach final projectile speed increased from 0 to 0.5
- Vulcan
  - Initial projectile speed increased from 200-250 to 200-300
    - Final projectile speed decreased from 200-250 to 100-100
    - Time to reach final projectile speed increased from 0 to 0.5
- Scorpion
  - Initial projectile speed remains 500-1000
    - Final projectile speed decreased from 500-1000 to 250-500
    - Time to reach final projectile speed increased from 0 to 0.5
- The number of mines in the battle is limited to 10 000. In case this number is reached, it will not be possible to put any more mines. The button for placing the mine will be inactivated.
  - (Note) This is a necessary addition in order to increase the stability of servers and to get rid of accompanying errors.

### November 29th (Update 784)

List of changes:

- Added the following skins to Legendary Containers: Mammoth GT, Twins GT, Wasp GT, and Firebird GT.
- Firebird
  - Range increased from 12 - 20 to 15 - 25 m.
    - Target outlining distance increased from 17 - 25 to 20 - 30 m.
- Freeze
  - Range increased from 12 - 20 to 15 - 25 m.
    - Target outlining distance increased from 17 - 25 to 20 - 30 m.
- Isida
  - Energy consumption when idle shooting decreased from 40 to 30 units/sec.
    - Range increased from 15 - 20 to 15 - 25 m.
    - Target outlining distance increased from 20 - 25 to 20 - 30 m.
    - «Broadband Radiators» augment:
    - Range decrease changed from -25% to -33%
    - «Sustainable Nanobots» augment:
    - Range increase changed from +100% to +60%
- Tesla
  - Chain Lightning Reload increased from 1.1 to 1.2 sec.
    - Chain Lightning Range increased from 15 - 20 to 15 - 25 m.
    - Target outlining distance increased from 20 - 25 to 20 - 30 m.
- Twins
  - Initial projectile speed increased from 35 - 65 to 60 - 90 m/sec.
    - Final projectile speed decreased from 25 - 55 to 10 - 10 m/sec.
    - Time to reach final projectile speed increased from 1 to 1.8 sec.
    - Range of maximum damage decreased from 30 - 60 to 30 - 50 m.
    - Range of minimum damage decreased from 60 - 90 to 50 - 70 m.
    - Range decreased from 70 - 100 to 60 - 90 m.
    - «Stabilized Plasma» augment:
    - Projectile speed increase is removed.
    - «Plasma Accelerators» augment:
    - Projectile speed increase is removed.
    - «Plasmatron» augment:
    - Projectile speed increase is removed.
    - «Plasma Turbo Accelerators» augment:
    - Projectile speed increase is removed.
- Ricochet
  - Range of maximum damage decreased from 30 - 60 to 30 - 50 m.
    - Range of minimum damage decreased from 60 - 90 to 50 - 70 m.
    - Range decreased from 70 - 100 to 60 - 90 m.
    - Critical damage chance increased from 7% to 8%.
- Smoky
  - Projectile speed increased from 300 - 500 to 400 - 700 m/sec.
- Striker
  - «Missile Launcher “Uranium”» augment:
    - Reload time after salvo increase changed from +50% to +100%.
    - «Vacuum Missiles» augment:
    - Average and minimal splash damage changed from 250% to 230%.
- Thunder
  - Initial projectile speed increased from 260 - 360 to 300 - 500 m/sec.
    - Final projectile speed decreased from 240 - 340 to 150 - 300 m/sec.
    - Time to reach final projectile speed decreased from 1 to 0.5 sec.
- Scorpion
  - Projectile speed changed from 800 - 1000 to 500 - 1000 m/sec.
    - «Missile Launcher “Spear”» augment:
    - Minimum rocket speed increase changed from +300% to +50% - Maximum rocket speed increase changed from +100% to +10% - Initial angular rocket velocity is now 10 instead of 270 - Final angular rocket velocity is now 300 instead of 270
    - «Missile launcher “Swarm”» augment:
    - Minimum rocket speed decrease changed from -66% to -33%
- Magnum
  - «Bombard» augment:
    - Added an increase in projectile gravity by +50% - Maximum projectile speed decreased from -50% to -40% - Minimum projectile speed decreased from -50% to -40%.
- Gauss
  - Initial projectile speed increased from 330-440 to 300-500 m/sec.
    - Final projectile speed decreased from 220-330 to 150-300 m/sec.
    - Time to reach final projectile speed decreased from 1 to 0.5 sec.
    - «Super Solenoids» augment:
    - Salvo damage increase changed from +41% to +50%.
    - «Solenoid Cooling» augment:
    - Salvo damage decrease changed from -30% to -20%.
    - «Hyperspeed Shells» augment:
    - Weak damage percentage changed from 300% to 270%
- The Daily Mission “Finish battles by being in the winning team.” has been moved from Standard Daily Missions into Encore Daily Missions.
- The Daily Mission “Earn Stars” now requires 16 stars to complete, instead of 15.
- In the tutorial, aiming at the bot for the first time is now equivalent to dealing damage to it.

List of fixes:

- The text on the Supermission button has been fixed.
- Improvements to the Shop UI.

### November 22nd (Update 783)

List of changes:

- Changes in the mechanics of Tesla turret
  - Ball lightning now shares the chain lightning damage, functioning like adding an additional enemy to the chain.
    - The ball lightning can belong to you, an ally, or to an enemy — the damage will be split in all cases.
- Changes to the mechanics of Twins, Thunder and Gauss turrets.
  - Shots fired from these turrets may have different initial and final speeds.
- Changes in the mechanics of Firebird, Freeze, Hammer, Twins and Ricochet turrets
  - Now the damage dealt from these turrets does not completely stop after reaching the range of minimum damage. \*\*Instead, a new maximum range parameter has been added for such turrets. At a distance between the minimum damage range and the maximum range, the damage does not change. Enemy tanks at this distance are outlined in yellow.
- Firebird turret
  - Range of minimum damage changed from 12-20 to 10-15 m.
    - Maximum range changed from 10-15 to 12-20 m.
- Freeze turret
  - Range of minimum damage changed from 12-20 to 10-15 m.
    - Maximum range changed from 10-15 to 12-20 m.
- Tesla turret
  - Damage increased from 315-630 to 450-900 hp.
    - Critical damage increased from 355-710 to 450-900 hp.
    - Reload between shots increased from 0.75 to 1.1 s.
    - Radius of maximum explosion damage of ball lightning increased from 1 to 3 m.
    - Radius of medium explosion damage of ball lightning increased from 4 to 6 m.
    - Radius of minimum explosion damage of ball lightning increased from 5 to 8-12 m.
    - Percentage of medium explosion damage of ball lightning decreased from 90% to 50%.
    - Percentage of minimum explosion damage of ball lightning increased from 25% to 50%.
    - «Dilatory Protocol» augment
    - Lightning ball reload speed decreased from 150% to 50%.
    - «Pulsar» augment
    - Radius of adding ball lightning to the circuit decreased from 20-25 to 1 m.
    - «Exothermic Lightning» augment
    - Radius of adding ball lightning to the circuit decreased from 20-25 to 1 m.
    - «Endothermic Lightning» augment
    - Radius of adding ball lightning to the circuit decreased from 20-25 to 1 m.
    - «Superconducting Discharge» augment
    - Radius of adding ball lightning to the circuit decreased from 20-25 to 1 m.
    - «Shocking Lightning» augment
    - Radius of adding ball lightning to the circuit decreased from 20-25 to 1 m.
    - «Armor-Piercing Discharge» augment
    - Radius of adding ball lightning to the circuit decreased from 20-25 to 1 m.
- Hammer turret
  - Range of minimum damage decreased from 50-60 to 40-50 m.
    - Maximum range changed from 40-50 to 50-60 m.
- Twins turret
  - Initial projectile speed increased from 30-60 to 35-65 m/sec.
    - Final projectile speed changed from 30-60 to 25-55 m/sec.
    - Time to reach final projectile speed changed from 0 to 1 s
    - Range of minimum damage changed from 60-90 to 70-100 m.
- Ricochet turret
  - Range of minimum damage changed from 60-90 to 70-100 m.
- Vulcan turret
  - «Large Caliber» augment
    - Added a decrease of turret rotation speed by -50%; - Changed regular damage increase from +150% to +140%
- Striker turret
  - Reload time increased from 2.4-1.6 to 2.7-1.8 s
    - Reload time after salvo increased from 2.4-1.6 to 2.7-1.8 s
    - «Missile launcher "Uranium"» augment
    - Changed the increase of regular damage from +50% to +65% - Added an increase of critical damage by +75% - Changed Maximum projectile speed from 125 to 100 m/s - Changed the number of rockets per salvo from 4 to 1 - Added a decrease of Aiming time by -75% - Added an increase of reload time after salvo by +50%
    - «Missile launcher «Tandem» augment
    - Changed the increase of reload time after salvo from +20% to +50%
- Thunder turret
  - Initial projectile speed increased from 250-350 to 260-360 m/seс
    - Final projectile speed decreased from 250-350 to 240-340 m/seс
    - Time to reach final projectile speed changed from 0 to 1 s
- Scorpion turret
  - «Missile launcher “Tornado”» augment
    - Removed the decrease of salvo reload time; - Removed the increase of aiming recovery time; - Added a decrease of aiming recovery time by -50%;
- Magnum turret
  - «Bombard» augment
    - Added a reduction in shot charging time by -50%
- Gauss turret
  - Initial projectile speed increased from 300-400 to 330-440 m/seс
    - Final projectile speed decreased from 300-400 to 220-330 m/seс
    - Time to reach final projectile speed changed from 0 to 1 s
- Updated the styles of several buttons in the Lobby interface
- List of fixes:
  - Improvements to some payment systems.

### November 14th (Update 782)

List of changes:

- Added a setting that disables gamepad configuration by default
  - (Note) Disabling this setting does not turn off gamepad support completely, but allows you to set a custom control layout through third-party applications.
- Tanks with a «fixed» turret (Magnum, B0-NK) with the select «Mouse + Keyboard» control mode can no longer switch to keyboard control mode without entering the game settings.
  - (Note) This is necessary in order to be able to lower and raise the barrel while holding down the shoot button. Previously, when trying to change the shot angle, the game switched to keyboard control mode and shot automatically.
- The VFX supply activation effect for «Speed Boost» is now linked to different points for different hulls, and hover tanks have one trail on the ground instead of two
- The VFX supply activation effect for «Boosted Armor» was slightly sped up to better match the animation speed of the «Boosted Damage» and «Speed Boost» VFX effects.

List of fixes:

- Fixed the switch to keyboard control. Now it works only by pressing «C» (turret centering).
  - (Note) Previously, you could switch by pressing Z/X, and this created problems in some cases.
- Fixed dead zones for control sticks in the mobile version
  - (Note) This behavior was intended only for gamepads.
- Reduced the angle at which a hover hull stops turning to the direction of the turret
  - (Note) This will allow for more precise hover rotation, which will be very useful for Crusader, for example
- Fixed displaying the self-destruct launch progress bar when holding the button after self-destruction has already been launched.

### November 8th (Update 781)

List of changes:

- Added a new Magnum augment to Epic Containers - «Destroyer»
  - (Note) Regular and critical damage are increased. Impact, explosion force, and recoil force are also increased. Reload takes longer. Turret rotation speed, projectile speed, and explosion radius are decreased.
- Added experimental gamepad support (only in battles)
  - (Note) At this moment, you can only use a gamepad in battles to control your tank and there are no settings available
- Horizontal auto-aiming now works for both touch control and gamepad control.
- Horizontal auto-aiming is now different for different turrets, and its angle was increased from 2 degrees to 3–5 degrees, depending on the turret.
- «Bomb» Grenade
  - The minimum rank needed to purchase the Mk2 modification was changed from 7 to 6.
    - The minimum rank needed to purchase the Mk3 modification was changed from 11 to 10.
    - The minimum rank needed to purchase the Mk4 modification was changed from 16 to 14.
    - The minimum rank needed to purchase the Mk5 modification was changed from 20 to 18.
    - The minimum rank needed to purchase the Mk6 modification was changed from 24 to 22.
- Increased animation speed of VFX for the «Boosted Damage» supply for both «Oracle» and «Crisis» drones.
- In clans, a button is added to report a violation in a clan’s description.

List of fixes:

- Rework of supply launch VFX for the «Oracle» and «Crisis» drones. Now the activation effect is always displayed when restarting the supply, for example, when picking up a box.
- Fixed a bug that caused the context menu window to disappear randomly when new messages appear in the Lobby chat.
- Removed Grenades which are not yet publicly available from the list of items available by rank.
- Fixed previews of all Early Access packs that were not updated to HD version when a respective turret’s skin was updated.
- Minor text changes, mainly for Japanese.

### November 1st (Update 780)

List of changes:

- When you click on the number of Rubies you currently have, in the exchange pop-up window, the default number of Tankoins to exchange is now changed from the maximum available to minimum
- Decreased the number of reputation points a player gets for destroying a bot from 15 to 5
- Decreased the number of reputation points a player gets for assisting in destroying a bot from 5 to 1
- Decreased the number of experience points a player gets for destroying a bot from 40 to 20
- Decreased the number of experience points a player gets for assisting in destroying a bot from 20 to 10
- Mk1 equipment added to Early Access in the Shop
- Changed tutorial missions
- Oracle
  - Disabled supply auto-activation
- Increased the number of Rubies a player gets for completing a supermission from 3 to 5
- Added the Japanese language to the game

List of fixes:

- Fixed navigation issues in the Shop
- Fixed typos in texts

### October 25th (Update 779)

List of changes:

- A new in-game currency, Rubies, has been added to the game.
  - (Note) All Tankoins on players' accounts are saved. Tankoins may be exchanged for Rubies in a 1:1 ratio through a special menu with confirmation. You can find out about the reasons for introducing a new currency in our V-LOGs or in a separate announcement that has already been published on all our information platforms.
- Tankoins are hidden from the main interface and will now only appear in the Shop.
- The Daily Tankoins Pass has been replaced with Daily Ruby Pass.
  - When you purchase this Pass, you instantly receive Tankoins, and then Rubies will be awarded for the pre-completed daily mission. The first time you buy a Daily Tankoins Pass it will remain unchanged (it will award Tankoins initially and also for the daily pre-completed missions).
- Premium Pass and some limited special offers are now sold for Tankoins.
- Special offers for events, Battle and Elite Passes, Keys, Crystals, early access offers, Clan Licenses, nickname changes, Stars, Gold Boxes and event currencies (energy) are now sold for Rubies.
- Weapon upgrades when lacking crystals and the purchase of modifications will now be in Rubies instead of Tankoins.
  - (Note) Upgrade prices have not changed
- The reward in Tankoins is replaced with Rubies in all missions, Containers, future challenges and promo codes.
  - (Note) In the current challenge, the final prize will remain Tankoins.
- Paints sold for Tankoins are now sold for Rubies
  - (Note) Except for the «Tankoin Tank» paint, which will continue to be sold for Tankoins.
- Added a new variant of the Megagold — Ruby Megagold, which will give you 10 Rubies.
  - (Note) The default Crystal Megagold is not removed and will also drop in battles.
- Unlocking additional protection module slots is now done for Crystals instead of Tankoins
  - (Note) Unlocks will cost 5,000, 50,000, and 500,000 Crystals respectively.
- A new type of Grenade has been added — Pumpkin.
  - (Note) This Grenade can only be obtained in the Autumn Mini-game. The Grenade differs from the standard one with modified characteristics and the ability to set enemy tanks on fire.
- «Brutus» drone
  - The minimum rank to purchase it has been changed from 8 to 15
    - This drone can no longer be received from Containers
- Added a VFX effect when activating the «Speed boost» supply for Crisis and Oracle drones.

### List of fixes:

- Fixed a bug that caused the rocket trail effect of the Scorpion to change its color.
- In the sniper mode of Shaft, the «Boosted damage» supply’s effect is no longer displayed if Crisis or Oracle drone is equipped.

### October 18th (Update 778)

List of changes:

- Added a new Hammer augment to Epic Containers - «Revolver»
  - (Note) The augment has six shots in the clip. Every third shot deals critical damage. The time for reloading the clip is increased, but the time between shots is reduced.
- All status augments for all turrets were added to the «Legendary» category of Common and Epic containers
  - (Note) Now you can get all of the following status effect augments from containers: Burning, Freezing, EMP, Stun, AP, Jammer
- Updated the default skin of Vulcan to the HD version
- Added a special effect for launching the «Boosted Armor» supply for the Oracle and Crisis drones.
- Added a special effect for launching the «Boosted Damage» supply for the Oracle and Crisis drones.
- Added a special effect for launching the «Speed Boost» supply for the Oracle and Crisis drones.
- In the sniper mode of the Shaft turret, dust from your own tank is now hidden.
- The length of shadows on night maps has been increased, and the brightness level has been slightly increased to compensate for the shadows.
- Six supply cards in the Shop Showcase are now issued again upon receiving a rank, even if the refresh timer has not ended yet.
- Tank health level for triggering the «Repair Kit» supply with activated supply auto-activation setting decreased from 34% to 25%.
- Temporarily blocked the option to unequip drones. You now always have any drone equipped.

### List of fixes:

- With the release of the Android client update in Google Play to version 2.1.0, players no longer need to set Chrome as the default browser in their phone settings for stable client operation. The game itself finds the installed Chrome browser and uses it if is available.
- Fixed the bug that caused the player to have 0 grenades in a tutorial battle, even if they were issued.
- Crystal icons on packages in the Shop have been fixed.
- The background of the «Contracts» section in the Shop has been fixed.
- Fixed texts of some categories in the Shop.

### October 11th (Update 777)

List of changes:

- The appearance and functionality of the Shop have been updated.
- Added the ability to buy supplies for crystals in the Shop with one click, as in the Garage.
- Automatic activation of supplies has been added for all platforms
- A setting for disabling automatic activation of supplies has been added.
- Now the automatic activation of supplies can work with the Crisis drone’s mechanic.
- Smoky
  - Regular damage increased from 315-630 to 355-710 HP
    - Critical damage increased from 355-710 to 450-900
    - Reload duration increased from 1.5-1.0 to 1.65-1.1 s
    - «High-precision aiming system» augment
    - Regular damage increase changed from +43% to +27% - Critical damage increase changed from +60% to +29% - Reload time increase changed from +100% to +82%
    - «Supercumulative rounds» augment
    - Critical damage increase changed from +50% to +35%
    - «Incendiary rounds» augment
    - Added a critical hit chance increase by +10%
    - «Cryo rounds» augment
    - Added a critical hit chance increase by +10%
    - «EMP Rounds» augment
    - Added a critical hit chance increase by +10%
    - «Paralyzing Rounds» augment
    - Added a critical hit chance increase by +10%
    - «Armor-piercing rounds» augment
    - Added a critical hit chance increase by +10%
- Thunder
  - «Anvil» shells» augment
    - Critical damage increase changed from +10% to +30%
- Oracle
  - Supplies reload time when switching between supplies increased from 10 to 12 s
- Bots
  - Added a protection from the «Terminator» turret (Juggernaut)
    - Critical damage of bots is boosted the same way as the boost of the regular damage
- Removed the «Brutus» drone from the bonus for inactive players who return to the game
- Changed Tankoin packs in the Shop
- Changed images of packs of crystals, Tankoins and stars
- Updated Shop prices for some regions

### List of fixes:

- Fixed the bug which caused the camera to remain in first-person mode when using the centered version of the interface, after a quick shot in Shaft's sniper mode
- Fixed the bug which caused tank outlines to stop working and break the auto-fire in mobile controls, after a quick shot in Shaft's sniper mode
- Fixed the bug which caused tank outlines to remain white in Shaft's sniping mode even if the target had already lost invulnerability

### October 4th (Update776)

List of changes:

- Updated the default skin of Shaft to the HD version
- Updated the Shaft’s sniper sight to the new minimalistic version
  - (Note) The new sight is approved by Shaft experts
- Hammer
  - «Hunter Duplet» augment
    - Clip reload increase changed from +25% to +15%
- Striker
  - «Missile launcher «Tandem» augment
    - Added an increase of Reload after salvo by +20%
- Hornet
  - Overdrive charge over time decreased from 300 to 270 s.
- Crusader
  - Overdrive charge over time increased from 240 to 330 s.
- Hunter
  - Overdrive charge over time decreased from 270 to 240 s.
- Titan
  - Overdrive charge over time decreased from 330 to 300 s.
- Juggernaut
  - Juggernaut Health recovery when picking up supply boxes in battle decreased from 4000 to 3000 HP
- Added a warning window about low Gear Score when starting the search for a Matchmaking battle
  - (Note) The pop-up window appears no more than once a day.

### List of fixes:

- Fixed the bug which caused Juggernaut bots to shoot at allied tanks if they used Isida before
- Fixed the bug which caused bots being allocated inequitably in teams for a battle with only one player and bots
- Fixed the bug which caused bots being able to use multiple protection modules in a single protection module slot

### September 27th (Update 775)

List of changes:

- Added a new Striker augment to Epic Containers - «Jamming missiles»
  - (Note) Damage applies the «Jammer» status effect to an opponent for a short time.
- An initial camera position has been added.
  - After entering the battle, the player’s camera is at this position. Next, the camera moves to the tank’s respawn point as it happens when your tank is destroyed. All next respawns work as usual.
- Indicators for preferred action were added for low ranks.
- In the pause menu, a button was added to show the standard control scheme hint.
- In-game news are disabled for low ranks to avoid their appearance during the tutorial.
- A flash in the HUD now indicates that the grenade is ready for use after respawning.
- There are separate buttons for the grenade throw button (F) and the ball/flag drop (R/V).
  - (Note) This change is intended to prevent accidental double-clicks. Throwing a grenade while the flag is not dropped remains impossible.
- Drone availability by rank was changed:
  - Brutus 4 → 8
    - Saboteur 11 → 16
    - Mechanic 12 → 17
    - Trickster 13 → 18
    - Defender 14 → 19
    - Booster 15 → 20
- Railgun
  - If you detonate a grenade by your Railgun shot (make a combo shot), the damage this grenade deals is equal to the regular Railgun’s damage
    - (Note) This is a temporary solution while we work on adding separate settings for damage and other parameters of a combo shot
- Gauss
  - Radius of max explosion damage changed from 5 to 5-7 m.
    - Radius of medium explosion damage changed from 7 to 7-10 m.
    - Radius of min. explosion damage changed from 20 to 15-20 m.
- Hopper
  - Weight decreased from 1500-3000 to 1000-2000
- Crusader
  - Weight decreased from 1650-3300 to 1150-2300
- Paladin
  - Weight decreased from 1650-3300 to 1150-2300
- Ares
  - Weight decreased from 2000-4000 to 1500-3000
- The number of points to finish a MM battle:
  - Team Deathmatch TDM 160 → 150
    - Control the Points CP 100 → 90
    - Capture the Flag CTF 7 → 6
    - Assault ASL 160 → 150
    - Team Juggernaut TJR 15 → 12
- Changed the number of team points for capturing a flag in the Assault (ASL) mode from 10 to 9
- On low ranks, Common Containers only give Hulls, without Turrets.
- On low ranks, Epic Containers only give Turrets, without Hulls.
- Brutus drone was added to Containers.
- Bots now appear in battles for high ranks (27+, including Legend), but only when it takes too long to find a battle without bots.

### List of fixes:

- Fixed a bug due to which the grenade disappeared under certain conditions after changing equipment in a battle.
- Fixed an error due to which the first bot in the tutorial did not stand still and began to move even if the player \*was in sight.
- Minor errors in the grenade model were fixed.

### September 13th (Update 774)

List of changes:

- Server response period changed from 100 to 50 ms
  - (Note) This change improves the responsiveness of some events that required confirmation from the server.
- Grenades have been added to the Shop’s Showcase with a 90% discount instead of Common keys.
  - (Note) The remaining supplies in the Showcase are now also sold at a discount of 90% instead of 95%.
- Hammer
  - Vertical spreading degree increased from 5 to 10 degrees
    - «Heavy Slugger» augment
    - Added a decrease of vertical spreading degree by -50%
- Gauss
  - Aiming time increased from 1.5-0.8 to 1.5-1.0 s
    - Reload in sniping mode decreased from 8.4-5.8 to 8.4-5.6 s
    - Time of aiming recovery increased from 0.6-0.7 s
- Wasp
  - Turning acceleration decreased from 130-225 to 130-180 degrees/second²
- Hornet
  - Turning acceleration decreased from 130-225 to 130-180 degrees/second²
- Tutotial missions for new players now include grenades as rewards
- Red error notifications in the client have been moved to the upper left corner
  - (Note) Some changes are best left a mystery

### List of fixes:

- Camera control when pressing the grenade button has been fixed on the mobile version.
- Fixed the bug that prevented special offers from displaying in the Shop for new players.
- The size of protection icons above the tank has been corrected for 2K+ monitors and some phones.
- Added missing kill zones in some pits on the «Berlin» map
- Fixed the position of the base in the «RGB» mode on the «Silence» map for the defending team to protect from a Hopper’s exploit
- Fixed missing notifications in missions for new accounts

### September 6th (Update 773)

List of changes:

- Added a new Magnum augment to Epic Containers - «Bombard»
  - (Note) Minimum and initial angles of the turret are 45 degrees. Minimum and maximum projectile speeds are reduced. Reload speed is significantly accelerated.
    - Added a new type of Grenades — Bomb
    - Available from the first rank
    - (Note) Currently you are only able to upgrade this grenade, you will be able to purchase it later.
- Replaced the Paint widget with a new Grenade widget in the Garage
- Added indication of Grenade status and Grenade reloading status
  - (Note) Please note that it is not possible to throw a Grenade while your tank is carrying a flag or a ball. When a flag or a ball is taken, the HUD indication changes accordingly.
- The Grenade skin has been updated and now supports player paint.
- Gear Score of players has been adjusted with the addition of grenades
- (Note) Grenade now gives up to 1000 GS
- Grenade can destroy mines in a certain radius from the point of explosion
  - (Note) The effect works even if the Grenade is detonated by a combo shot with Railgun.
- Equipment change timer in battle now activates when any part of a tank (except paints and skins) is changed
- Added previewing of turrets and hulls when clicking on them in the garage, just like it works for paints
- A set of missions has been added to teach how to use supplies
- An option to purchase a 30 units package of each supply has been added
- Firebird
  - Regular damage decreased from 450-1200 to 400-1200 HP
- Freeze
  - «Phoenix» augment
    - Cone angle decrease changed from -75% to -60%; - Added a decrease of Energy consumption by -20%
- Twins
  - «Plasma Turbo Accelerators» augment
    - Regular damage decrease changed from -50% to -60% - Shell Speed increase changed from +100% to +200%

Magnum «Harpoon» augment

- - - Amplification time decrease changed from -50% to -75% - Added an increase of Impact force by +50%
- Wasp
  - Turning speed increased from 100-130 to 100-195 degrees/second
    - Turning acceleration increased from 130-150 to 130-225 degrees/second²
    - Anti-inertial turning acceleration increased from 280-360 to 280-720 degrees/second²
- Hornet
  - Turning speed increased from 120-150 to 120-225 degrees/second
    - Turning acceleration increased from 130-150 to 130-225 degrees/second²
    - Anti-inertial turning acceleration increased from 280-360 to 280-720 degrees/second²
- «Lifeguard» augment
- Health recovering decreased from 1000 to 500 HP
- «Blaster» augment
  - Self-destruction damage for light hulls decreased from 1500-3000 to 1000-2000 HP
    - Self-destruction damage for heavy hulls increased from 1500-3000 to 2000-4000;
- Juggernaut Health recovering when picking up supply boxes in battle increased from 1000 to 4000 HP
- Minimum radius of base protection from mining decreased from 10 to 5 m
- Gold boxes only drop in battles starting from the rank of Master Sergeant (8)
  - (Note) This restriction does not apply to players’ gold boxes
- Added experimental support for SteamDeck (tm)
- To play, you must force enable compatibility mode Steam Linux Runtime 3.0 (sniper) in the project settings on SteamOS
- The official keyboard layout emulates keyboard and mouse control, support for analog control for gamepads will appear later
  - (Note) When the re-certification of the game for Steam Deck is completed, there will be no need to manually switch compatibility mode
- Bots have been added the ability to use protection modules instead of health boost they had

### List of fixes:

- Fixed the bug that caused groups to get stuck in a long search in matchmaking.
- Fixed the indication of supply use buttons in the HUD when they are reassigned by the player in the settings
- Fixed an error due to which there was no visual and physical synchronization of the Ares sphere position
- Fixed a bug in the tutorial that caused bots in the first tutorial battle not to be active after the destruction of the first bot.
- Fixed the overestimation of bots' ranks in matchmaking
- Fixed the bug with bots firing at allied tanks if the bot previously used Isida.
- Fixed the Notification system in the Lobby.
- Fixed tank camera behaviour when a tank is flipped
- Fixed the behaviour of the grenade throw button for mobile controls.
- Fixed a bug due to which, when changing equipment during a battle, new items could not be equipped on the tank.

### August 23rd (Update 772)

List of changes:

- Gold Boxes will now appear in battles starting from the rank of Staff Sergeant (7).
  - (Note) The determining factor is not the player's rank, but the rank of the created battle. Therefore, in a particular battle, Gold Boxes may appear a few ranks earlier or they may not appear a few ranks later, depending on the specifics of the particular battle.
- Crystal boxes are replaced with Supply boxes starting from the Corporal rank (4), instead of Master Sergeant (8).
- Some mission sections now appear only when a player reaches the required rank.
- The algorithm for distributing players into teams when creating a battle depending on their GearScore has been changed.
- Bots in battle can now be encountered up to (including) the General rank (26).

### List of fixes:

- Fixed the bug that could cause menu items in the game lobby to disappear or become blocked.
- After leaving a training battle, the results screen is skipped so as not to cause a situation where the "Play" button is blocked until re-entering the missions section.
- Fixed the bug that could cause the mechanism of adding players to ongoing Legend rank battles to work incorrectly.

### August 16th (Update 771)

List of changes:

- Added a new Shaft augment to Epic Containers - «Freezing Sight»
  - (Note) Each shot in the sniping mode applies the «Freezing» status effect to the target. Critical shots in the arcade mode also apply the «Freezing» status effect.
- Tank temperature update time changed from 1 to 0.25 s.
- High-temperature damage changed from 300 to 100 HP/tick (from 300 to 400 HP/s)
- Stars removed from rewards of entry bonus missions
- Stars removed from rewards of tutorial missions
- Changed rewards of some of tutorial missions and entry bonus missions
- Chance of getting equipment from regular containers decreased from 100% to 70%

### List of fixes:

- Translation updates

### August 9th (Update 770)

The list of changes:

- The number of upgrade steps for hulls and turrets has been changed based on the modification.
  - Mk1: 10 → 3 steps
    - Mk2: 10 → 5 steps
    - Mk3: 10 → 8 steps
    - Mk4: 10 → 10 steps
    - Mk5: 10 → 11 steps
    - Mk6: 10 → 12 steps
    - Mk7: 20 → 20 steps
- (Note) The total cost of upgrades hasn’t changed, you just need fewer clicks to make at the lower ranks. Existing upgrade steps are automatically converted.
  - Turrets and hulls are now using.a3d models instead of.3ds to separate the physical and visual parts of the tanks.
- (Note) This change should help reduce frame rate drops when entering battles. The old system made the game calculate the physical details on the player’s device, but the new format makes those details ready to go. You'll likely see a big improvement on mobile devices.
- Bots now support multiple players in a battle at the same time.
  - (Note) Up to the rank of First Sergeant, players will battle against both other players and bots.
- For ranks from Gefreiter to First Sergeant, the matchmaking system now add bots instead of increasing the range of ranks.
  - (Note) Empty spots in these battles will now be filled by bots.
- Freeze
  - «Adrenaline» augment

Regular and critical damage increase changed from +23% to +20%;

- Twins
  - «Plasma Turbo Accelerators» augment
    - Regular damage decrease changed from -45% to -50%;
- Modules
  - Minimum rank required to purchase the «Spider» protection module increased from Private (2) to Sergeant-Major (10)
- TJR and JGR modes are no longer available for the Siege MM map
- Changed bases and respawns in the ASL mode for the «Year 2042» map
- Changed geometry of the «Year 2042» map

### The list of fixes:

- Fixed the bug that caused creating clans be available even before a player reaches the rank that unlocks access to the clans system

### August 2nd (Update 769)

List of changes:

- TJR and JGR battle modes are turned off for the Siege MM map
- Lobby sections are now hidden until reaching a certain rank
  - Play (1) (only after the player entered the missions section)
    - Containers (2) (containers)
    - Missions (1) (available by default)
    - Garage (2) (only after the player opened at least one container)
    - Shop (3)
    - Settings (1) (available by default)
    - Challenges (5)
    - Elite pass (6)
    - Chat (3)
    - Clans (7) \*new
    - Friends (1)
- Clicking on the overdrive icon duplicates opening the equipment description

List of fixes:

- Announcement can be scrolled with the mouse wheel

### July 26th (Update 768)

List of changes:

- Added a new Striker augment to Epic Containers - «Cryo Missiles»
  - (Note) Critical damage applies the «Freezing» status effect to the enemy tank for a short period of time.
- Added a matchmaking version of the «Siege» map with some improvements
  - (Note) With day, evening, night and winter themes, for multiple game modes.
- Active contract’s progress was added to the battle results screen
- You can no longer activate a new contract unless you claim rewards for a contract that has rewards yet to be claimed.
- Added notifications system for Contracts. You get a notification when there is a new contract or when you can claim rewards for a contract
- You can now see rarity of a contract

List of fixes:

- Changed parameters of the «Phoenix» augment for Freeze
- Fixed the bug due to which there was no loading screen when going to the contracts screen in the missions section.
- Fixed the bug due to which the contract progress could remain without an update if a player was kicked out of the battle or the battle ended while the player was in the process of auto-entering the battle.
- Layout fixes for the Contracts screen in the Missions section.
- Minor fixes to the Wasp GT skin.

### July 12th (Update 767)

List of changes:

~~- Bots are now able to function with several real players in the battle at the same time.~~- ~~Matchmaking battles from the rank of X1 to X2 now prioritize the reduction of player count rather than increasing the rank distribution.~~ - ~~(Note) Free places in such battles will be filled with bots.~~

- Added temporary contracts for the new mini-game.
  - (Note) All contracts received at the time of the event will stop being valid after the event ends.
- Added a category to the Shop where you can buy Contracts.
  - (Note) The new category will stay in the game until the end of the mini-game.
- Added an experimental feature to Settings allowing to disable system mouse acceleration.
  - (Note) It will be useful for those who experience sudden camera movements when turning. The camera sensitivity will have to be changed each time you change this setting.
- Now spending Tankoins on upgrading the equipment modification will increase the parameters just like a regular modification upgrade.
  - (Note) The current parameters of your equipment may be changed to account for the update, but the current upgrade level of your equipment will stay the same.
- Added an option to the Pause menu to refresh the game window.
  - (Note) When encountering errors, you will now be able to refresh the game without having to relaunch the whole client.

List of fixes:

- Improved the recoil of Crusader’s overdrive shot.
- Magnum’s “Harpoon” augment added to Regular and Epic Containers.

### June 28th (Update 766)

List of changes:

- After a new player creates an account and before they enter their first battle, they see a new screen for assembling their tank
  - (Note) In the tank assembling screen a player has to choose from a limited range of turrets and hulls. However, there is an easter egg for old players who want to create a new account, which lets them choose any equipment they want. Once you find this secret way, you will hear an 8-bit sound effect.
- The number of points you get for capturing a flag in the ASL mode is decreased from 80 to 20
- Changed icons of the following augments: Thunder’s «Hyperspeed Shells» and Smoky’s «Hyperspeed Rounds»
- Added video guides to descriptions of turrets

List of fixes:

- Fixed updating the bonus value for Tankoin packs after they were purchased.
- Fixed the bug not allowing you to open the profile of your own clan while viewing the profile of another clan.
- Fixed the bug not allowing to open the profile of one clan while viewing the profile of another clan.
- Fixed the bug with sign up form not working as expected when you enter a nickname that already exists.

### May 31st (Update 764)

- Added a new «Thunder XT» skin to Epic Containers.
- Changed the reward of Tanki Birthday special cake Gold Box from 15 000 crystals to 15 tankoins.
- Common Containers
  - «Legendary» rarity category
    - Added all Driver, Blaster, Lifeguard, and Miner augments
- Epic Containers
  - «Legendary» rarity category
    - Added all Driver, Blaster, Lifeguard, and Miner augments
    - «Uncommon» rarity category
    - Crystals
      - Changed drop probability from 13.5% to 7.2% - Changed the number of prize units from 3 000 to 9 000
        - Boosted Armor
      - Changed drop probability from 13.5% to 13.2% - Changed the number of prize units from 100 to 175
        - Boosted Damage
      - Changed drop probability from 13.5% to 13.2% - Changed the number of prize units from 100 to 175
        - Speed boost
      - Changed drop probability from 13.5% to 13.2% - Changed the number of prize units from 100 to 175
        - Mines
      - Changed drop probability from 13.5% to 13.2% - Changed the number of prize units from 100 to 175
    - «Rare» rarity category
    - Crystals
      - Changed drop probability from 4% to 5.5% - Changed the number of prize units from 10 000 to 12 000
        - Repair Kit
      - Changed drop probability from 8% to 11%
        - Free paints
      - Changed drop probability from 4% to 5.5%
        - Augments
      - Changed drop probability from 4% to 5.5%
- Legendary Containers
  - Added the «Freeze GT» skin
    - Added the «Hunter GT» skin
- Fixed the behavior of metal parts on some XT skins in night versions of maps.
- Added a permanent announcement that lets you read the recent patch notes.

### May 17th (Update 763)

- Updated the sound of the Railgun’s «Magic» shot effect
- The logic of the Miner augment has been changed for all hulls.
  - Instead of a fixed number of protected mines, the augment now retains only 70% of the mines placed after each respawn of the tank with Miner.
    - The saved mines are chosen randomly
    - (Note) The previous mechanic allowed mines to be placed much more frequently by self-destructing the tank after each mine placement. The new mechanic not only prevents accelerated mining, but also adds counterplay. Now, attackers have the option of accelerating demining by destroying the Miner, and the Miner must remember to protect themselves in order to maintain the maximum number of mines in defense.
- Firebird
  - «Adrenaline» augment
    - Damage bonus decreased from +29% to +26%
- Freeze
  - «Adrenaline» augment
    - Damage bonus decreased from +26% to +23%
    - «Shock freeze» augment
    - Regular damage decrease changed from -15% to -5%
    - «Pulsar» augment
    - Critical hit chance decrease changed from -25% to -30%
- Isida
  - «Nanomass reactor» augment
    - Energy consumption increase while attacking changed from +50% to +20% - The percentage of the energy tank reloaded when destroying an enemy changed from +100% to +50%
    - «Pulsar» augment
    - Critical hit chance decrease changed from -20% to -30%
- Tesla
  - Reload time increased from 0.66 to 0.75 s.
    - «Adrenaline» augment
    - Damage bonus decreased from +29% to +26%
    - «Electroturret» augment
    - Added an increase of lightning ball damage by +40%
    - «Pulsar» augment
    - Critical hit chance decrease changed from -16% to -30%
- Hammer
  - «Adaptive reload» augment
    - Clip reload time increase changed from +25% to +20% - Added a decrease of shot reload time by -20%
    - «Blunderbuss» augment
    - Regular damage increase changed from +75% to +80% - Added an increase of critical damage by +40%
    - «Assault magazine» augment
    - Shot reload time decrease changed from -80% to -75% - Clip reload time decrease changed from -30% to -25%
    - «Large caliber pellets» augment
    - Added an increase in Critical damage by +20%
    - «Heavy Slugger» augment
    - Turret rotation speed decrease changed from -20% to -35% - Turret rotary acceleration decrease changed from -20% to -35%
- Twins
  - «Plasma Turbo Accelerators» augment
    - Regular damage decrease changed from -70% to ~~\-30%~~ -45%
- Ricochet
  - «Pulsar» augment
    - Critical hit chance decrease changed from -16% to -30%
- Vulcan
  - «Incendiary band» augment
    - Reload time increase changed from +25% to +15%
    - «Rubberized rounds» augment
    - Projectile speed decrease changed from -25% to -10%
    - «Explosive Band» augment
    - Radius of max explosion damage increased from 1 to 2 m - Radius of medium explosion damage increased from 3 to 4 m - Radius of min explosion damage increased from 5 to 6 m - Radius of critical explosion damage decreased from 5 to 4 m
    - «Shredder» augment
    - Reload time decrease changed from -40% to -30%
    - «Pulsar» augment
    - Critical hit chance decrease changed from -20% to -30%
- Smoky
  - «Assault rounds» augment
    - Projectile speed increase changed from +200% to +50% - Removed Reload time decrease
    - «High-precision aiming system» augment
    - Reload time increase changed from +20% to +100% - Regular damage increase changed from +40% to +43% - Critical damage increase changed from +10% to +60% - Projectile speed decrease changed from -20% to -30%
    - «Supercumulative rounds» augment
    - Critical damage when Viking’s overdrive is activated is now the same as for other augments
    - «Autocannon» augment
    - Critical hit chance decrease changed from -40% to -15%
    - «Explosive Rounds» augment
    - Radius of max explosion damage increased from 1 to 3 m. - Radius of medium explosion damage increased from 4 to 6 m. - Radius of min explosion damage increased from 7 to 9 m. - Average splash damage changed from 90% to 50% - Min splash damage increased from 10% to 50% - Critical damage radius increased from 2 to 3 m. - Rounds do not ricochet
    - «Pulsar» augment
    - Critical hit chance decrease changed from -16% to -30%
- Striker
  - «Missile launcher «Hunter» augment
    - Aiming recovery time decrease changed from -50% to -30%
    - «Missile launcher «Tandem» augment
    - Salvo reload time increase removed - Added an increase of critical hit chance by +25% - Added a decrease of Reload time by -100%
- Thunder
  - Range of critical explosion damage increased from 3 to 6 m.
    - «Strict ammunition load» augment
    - Reload time decrease changed from -10% to -20%
- Scorpion
  - «Missile launcher «Spear» augment
    - Salvo reload time decrease changed from -75% to -50%
- Railgun
  - «Round destabilization» augment
    - Regular damage decrease changed from -50% to -25% - Critical damage increase changed from +20% to +40%
    - «Death Herald» compulsator» augment
    - Removed reload time increase
    - «Hyperspace rounds» augment
    - Added a decrease of Shot warmup time by -10%
- Gauss
  - «Large Caliber» augment
    - Arcade normal damage increase changed from +35% to +27% - Arcade reload time increase changed from +30% to +54% - Added an increase of critical damage by +29%
    - «Super Solenoids» augment
    - Salvo damage increase changed from +30% to +41%
- Shaft
  - Min. sniping damage increased from 335-670 to 355-710 HP
    - «Healing Emitters» augment
    - Added a decrease of Arcade damage by -15% - Added a decrease of Sniper damage by -15%
- Terminator
  - Charging time decreased from 3.6 - 2.4 to 2.6 - 1.4 s.
    - Added a damage decrease by distance:
    - 100% of damage is dealt when the distance is 90-120 m. - Damage decreases when the distance is between 90-120 and 150-180 m. - Minimum damage after decrease is 50% of the base damage
- Wasp
  - N2-Bomb (Wasp’s overdrive) now can destroy mines in direct line of sight
    - Mines' destruction radius is 15 meters.
- Hunter
  - EMP (Hunter’s overdrive) now can destroy mines in direct line of sight
    - Mines' destruction radius is 15 meters.
- Hopper
  - Detonation Jump (Hopper’s overdrive) now can destroy mines in direct line of sight
    - Mines' destruction radius is 15 meters.
- When a player’s nickname gets changed, the player now receives a free Rename Pass
- Fixed minor bugs in the tutorial
- Updated Shop prices for some regions

### April 27th (Update 762)

- Added a battle tutorial for new players to teach them how to control their tank and how to fight
- Fixed the bug when upgrading equipment, which compared parameter changes to the next modification instead of the next level
- Fixed the bug which prevented the purchase of to some special offers in Steam
- Fixed the bug with the selected map changing when changing filters in the battle creation menu

### April 19th (Update 761)

- Remastered the tank explosion effect
- Horizontal auto-aim performance optimised for ricocheting shells
  - (Note) Once a shell ricochets, horizontal auto-aim won’t work anymore, only the vertical one. This change will save CPU time on weak devices and is unlikely to be noticeable in battle
- Firebird
  - «Pulsar» augment
    - Critical damage chance decrease changed from -20% to -25%
- Freeze
  - Critical damage chance 4% → 3%
    - «Adrenaline» augment
    - Maximum damage increase changed from +29% to +26%
    - «Pulsar» augment
    - Critical damage chance decrease changed from -20% to -25%
- Isida
  - «Phoenix» augment
    - Range increase changed from +100% to +50% - Vampirism effect power changed from 20% to 15% - Number of energy recharged when destroying an opponent changed from +500 to +300
- Tesla
  - «Dilatory protocol» augment
    - Lightning ball reload duration increase changed from +200% to +150%
- Twins
  - «Plasmatron» augment
    - Damage boost when Viking’s overdrive is activated halved to compensate for very high damage bonus
    - «Pulsar» augment
    - Critical damage chance decrease changed from -16% to -20%
- Ricochet
  - «Pulsar» augment
    - Critical damage chance decrease changed from -16% to-20%
- Striker
  - «Pulsar» augment
    - Critical damage chance decrease changed from -12% to -9%
- Thunder
  - «Sledgehammer» rounds» augment
    - Regular damage increase changed from +45% to +35%; - Range of minimum and maximum damage decrease changed from -80% to -60%
    - «Anvil» shells» augment
    - Regular damage increase changed from +45% to +35%; - Range of minimum and maximum damage decrease changed from -80% to -60% - Removed the critical damage chance increase; - Removed the projectile speed decrease
- Magnum
  - Reload duration decreased from 4.9 - 2.6 to 4.6 - 2.5 seconds
    - Charge duration decreased from 2.9 - 2.6 to 2.9 - 2.5 seconds
    - «Automated gunpowder loading mechanism» augment
    - Amplification time decrease changed from -20% to -15%
    - «Mortar» augment
    - Removed the radius of minimum, average, and maximum splash damage decrease
    - «Vacuum core» augment
    - Added an Amplification time increase by +20%

### April 12th (Update 760)

- Added a new Railgun’s «Magic» shot effect to Epic Containers:
  - (Note) This is the first new shot effect in a long time. We will try to prepare a new shot effect for each turret that already has a remastered version of the standard shot effect. We also remind you that shot effects only affect visuals.
- In the list of missions of a supermission, you will now see missions that are not available yet (e.g. if a mission hasn’t started yet)
  - (Note) This will help us to avoid confusion when you see that you have completed all the missions available but cannot complete the supermission yet
- Inactivity waiting time increased from 1 to 3 minutes
  - (Note) This is a temporary change to avoid players of the mobile version from being kicked for inactivity due to long resources loading time
- Fixed the problem where sounds of the game stopped working if you switch to another app on Android
- Fixed Google payments in India

### March 29th (Update 758)

- Added a new Twins augment to Epic Containers - «Plasmatron»
  - (Note) This augment makes Twins become a two-barrel Thunder. Plasma balls fly faster and deal a lot of damage. However, recharge time between launched plasma balls is greatly increased.
- Added a new Vulcan augment to Epic Containers - «Stunning Band»
  - (Note) Critical damage applies the «Stun» status effect to the enemy tank.
- Increased price in crystals for packs of keys in the Shop’s showcase
- Fixed duplicate textures of battle interface icons

### March 22th (Update 757)

- You no longer see pop-ups of special offers if you just ranked up or were kicked from a battle
  - (Note) You will see them the next time you enter the Lobby
- Team score to end the battle changed for the following modes:
  - CTF 10 → 7
    - RGB 12 → 9
- The number of reputation points for destroying a Juggernaut decreased from 80 to 60
- The number of stars required in the daily «Earn stars» mission increased from 14 to 15
- The number of Overdrives required in the daily «Use Overdrive» mission decreased from 6 to 5
- The encore «Destroy enemy tanks with critical damage» mission is removed from the game
- The number of missions required in the weekly «Complete daily missions» mission increased from 30 to 35
- The encore «Successfully deliver flags/balls to the correct base» mission is removed from the game
- The weekly «Earn reputation points in the «Team Deathmatch» (TDM) mode» mission has been replaced with a new «Earn 2000 reputation points by playing in battles you entered via the “Quick Battle” button» mission
- The weekly «Earn reputation points in the «Control Points» (CP) mode» mission has been replaced with a new «Earn 3000 reputation points in battles» mission
- The weekly «Earn reputation points in the «Capture the Flag» (CTF) mode» mission has been replaced with a new «Play till the end in 12 battles» mission
- The weekly «Earn reputation points in the «Assault» (ASL) mode» mission has been replaced with a new «Earn 2000 crystals in battles» mission
- The weekly «Earn reputation points in the «Rugby» (RGB) mode» mission has been replaced with a new «Earn 4000 experience points in battles» mission
- The weekly «Earn reputation points in the «Team Juggernaut» (TJR) mode» mission has been replaced with a new «Activate 400 of any supplies in battles» mission
- The weekly «Earn reputation points in the «Siege» (SGE) mode» mission has been replaced with a new «Earn 60 stars» mission
- The «Spectrum» protection modules now have the default protection of 5% and can be upgraded to 15%, 20%, 25% or 30% (depending on a type of a module) for a small amount of crystals
  - (Note) In some special modes upgrades are disabled and regular modules have low protection level there. As for players with these special modules, they have an unintended advantage that might seem unfair to other players. To avoid controversial situations, we changed the initial protection value to 5% for all such modules, and made the total upgrade price minimum, so owners of these modules won’t need to spend significant amounts of crystals. The total price of full upgrade of the Spectrum module will not exceed 15,000 crystals.
- Removed the option to Report messages in clan chats
- Optimised the render system in the HTML5 client

### March 7th (Update 755)

- Added a new Magnum augment to Epic Containers - «Stunning Core».
  - (Note) Critical damage applies the «Stun» status effect to an enemy tank for a short time.
- Railgun shot effect visual remaster.
  - New effect also applies to all existing Railgun shot effects.
- Supplies are now sold in packages with 1, 100, 1000, 3000, and 9999 supplies.
  - Gold boxes can now be purchased in Garage, but not in the Shop
- Reworked the Container opening mechanic.
  - Fixed the problem with opening containers on mobile devices.
    - Now when a Container is opened only the current reward will be shown, and not rewards for Containers already opened.
    - Added a new screen after receiving rewards one by one that shows all the rewards.
    - Opening rewards one by one can now be skipped.
- Added a mechanic to report messages in lobby chat.
  - Added a button in the context menu that sends an anonymous report that will be seen by the moderators.
- Added a mechanic to report PRO-Battles names
  - Added the ability to send an anonymous report that will be seen by the moderators.
- Added a mechanic to report messages in battle chat.
  - Pressing a special button right to the chat input or pressing Ctrl + Enter in your keyboard opens a window with all the messages in the battle.
    - Clicking on an individual message in this list will allow you to send a report that will be seen by the moderators
- An experimental 3D indicator of the direction of damage received can be turned on in the game settings.
  - (Note) We would like to hear your feedback about how this prototype works
- Fixed the bug that made the interface much bigger than intended on certain phones.
- The following augments were added in the “Legendary” category of Common and Epic containers.
  - Driver for Hopper
    - Blaster for Viking
    - Blaster for Dictator
    - Lifeguard for Ares
- Hammer
  - Shot reload decreased from 1.65-1 to 1.35-0.8 s
- Terminator
  - Reload increased from 1.8-1.5 to 3.6-2.4 s
    - Warmup increased from 0.8 to 1 s
    - Aiming time increased from 0.8 to 1 s
    - Reload after salvo increased from 0.8-1 to 2.6-1.4 s
    - Critical damage chance increased from 5-15% to 15%
- Juggernaut
  - Protection decreased from 7 500-30 000 to 5 000-20 000
    - Healing from overdrive decreased from 5 000-20 000 to 2 500-10 000
    - Overdrive passive charge rate increased from 1 111 to 1 666 (90 → 60 s)
    - Damage from self-destruction decreased from 5 000-20 000 to 2 500-10 000
- Team score to end the battle changed for the following modes:
  - TDM 150 → 160
    - CTF 7 → 10
    - ASL 150 → 160
    - RGB 7 → 12
    - TJR 10 → 15
- Time before flags appear in CTF battle mode 60 → 90 s

### February 22nd (Update 753)

- Fixed the bug that didn't give extra stars for playing using the «Quick battle» button when playing in group
- Fixed a problem with videos in tips, and with the animation of Container opening on iOS

### February 16th (Update 752)

- Added a new Vulcan augment to Epic Containers — «Magnetic Band».
  - (Note) Critical damage applies the «EMP» status effect to the enemy tank.
- Changed the way you get stars for battles
  - Now the maximum number of stars you can get per battle depends on battle duration.
    - (Note) A battle should last at least 11 minutes for the TOP-1 player to get 3 stars. If a battle lasts less than 3 minutes, players don’t receive stars at all.
    - For battles that are longer than 13 minutes, i.e. special mode battles, the maximum number of stars is not limited to 3.
    - (Note) For a battle that lasts 30 minutes, the TOP-1 player may get 8 stars.
- Entering a matchmaking battle with the «Quick battle» button gives you an extra star.
  - (Note) Thus you may get a total of 4 stars per battle, or 8 if you have Premium Pass.
- Added a number showing your chance to get the item in the list of Container rewards.
  - (Note) Chances are different for each player because they depend on how many of the other items available that you already have.
- Fixed the bug that crashed the game client when you click the Missions tab once a battle finishes.
- Fixed the bug that crashed the game client when you redeem certain promocodes.
- Fixed the bug that caused your tank’s camera to stay at the place your tank was destroyed and your tank not respawning.
- Fixed how the shot geometry works when you use Shaft’s sniping mode.
  - (Note) The geometry has become rougher, but it saves memory significantly.
- Changed mission rewards
  - For Daily Supermission — 3 tankoins
    - For Daily Encore mission — 1 star
    - Player doesn’t receive rewards for completing Weekly missions anymore
    - For Weekly Supermission — 3 tankoins (instead of 24)
    - For Weekly Encore supermission — 1 Rare Key (instead of 1 Epic Key)
    - For Weekly Encore missions — 1 Common Key
- The following augments were added to the «Legendary» category of Epic Containers.
  - Blaster for Wasp
    - Blaster for Hornet
    - Blaster for Hopper
    - Lifeguard for Viking
    - Lifeguard for Crusader
    - Lifeguard for Hunter
    - Lifeguard for Paladin
    - Lifeguard for Dictator
    - Miner for Ares
    - Miner for Titan
    - Miner for Mammoth
- Increased parameters of all hulls and turrets in modifications from Mk2 to Mk7:
  - The difference between the Mk7 and the MkMAX modifications has been halved
    - The changes affected the way Gear Score is counted. Now Mk7 modification gives you 2300 points instead of 2100
    - (Note) This change should reduce the «difficulty» of the game for owners of Mk7 modifications, who have not yet had time to upgrade them, but have already faced Legends in battles
- Isida
  - «Phoenix» augment
    - Range is decreased from 45 to 40 m. - Recovery rate is decreased from 25% to 20% - Critical hit chance increase is +30% - Energy consumption when healing is now the same as for the regular Isida
- Twins
  - Radius of max explosion damage is increased from 1 to 3 m.
    - Radius of medium explosion damage is increased from 2 to 6 m.
    - Radius of min. explosion damage is increased from 6 to 9 m.
    - Radius of critical explosion damage is decreased from 6 to 3 m.
- Vulcan
  - Critical damage is increased from 100-200 to 150-300 HP
    - Critical hit chance is decreased from 2% to 1,4%
    - Damage boost when Viking’s overdrive is activated is increased from +400% to +600%
- Thunder
  - Projectile speed is increased from 300-350 to 250-350 m/s
    - Radius of max explosion damage is increased from 2 to 3 m.
    - Radius of medium explosion damage is increased from 4 to 6 m.
    - Radius of critical explosion damage is increased from 2 to 3 m.
- Magnum
  - Radius of max explosion damage is increased from 2 to 3 m.
    - Radius of medium explosion damage is increased from 4 to 6 m.
    - Radius of critical explosion damage is increased from 5 to 9 m.
- Gauss
  - Reload duration is decreased from 2.25-1.5 to 1.95-1.3 s.
    - Range of max damage is decreased from 90-120 to 60-90 m.
    - Range of min damage is decreased from 150-180 to 90-120 m.
    - Radius of medium explosion damage is increased from 6 to 7 m.
- Terminator
  - Regular damage is decreased from 450-1800 to 325-1300 HP
    - Radius of max explosion damage is decreased from 5 to 3 m.
    - Radius of min. explosion damage is increased 10 to 12 m.
- Overdrive
  - Wasp Overdrive charge over time changed from 180 to 270 s.
    - Hopper Overdrive charge over time changed from 150 to 240 s.
    - Hornet Overdrive charge over time changed from 210 to 300 s.
    - Crusader Overdrive charge over time changed from 150 to 240 s.
    - Hunter Overdrive charge over time changed from 180 to 270 s.
    - Paladin Overdrive charge over time changed from 330 to 360 s.
    - Dictator Overdrive charge over time changed from 300 to 330 s.
    - Titan Overdrive charge over time changed from 270 to 330 s.
    - Ares Overdrive charge over time changed from 240 to 300 s.
    - Mammoth Overdrive charge over time changed from 180 to 270 s.
- Changed the maximum number of players for the following maps in matchmaking:
  - Aleksandrovsk from 20 to 18
    - Barda from 20 to 18
    - Bobruisk from 16 to 14
    - Bridges from 16 to 14
    - Chernobyl from 20 to 18
    - Chernushka from 16 to 14
    - Cologne from 20 to 16
    - Future from 20 to 18
    - Industrial Zone from 20 to 18
    - Lost Temple from 28 to 30
    - Magistral from 24 to 22
    - Molotov from 16 to 14
    - Parma from 20 to 18
    - Polygon from 16 to 14
    - Rio from 20 to 18
    - Serpuhov from 20 to 18
    - Stadium from 20 to 24
    - Tribute from 16 to 14
    - Yorkshire from 24 to 28
- Paints with country flags were removed from the game.
- Paints with mono colors were moved to Common rarity and are available for purchase with crystals.
- Paints with camouflage were moved to Uncommon rarity.
- Data traffic from the server to the client of the player has been optimized.
- Added experimental support for the game on Safari browser
  - (Note) The HTML-5 version of the game can now be launched from an iPhone via a direct link.

### January 19th (Update 751)

- Added a new Striker augment to Epic Containers — «Missile Launcher ”Meteor”»
  - (Note) Increased damage when you hit a target. Splash damage is greatly reduced, but impact force is increased.
- The following augments have been added to Common and Epic containers in the «Legendary» rarity category:
  - Magnetic Nanobots for Isida
    - Stunning Nanobots for Isida
    - Toxic Nanobots for Isida
    - Jamming Nanobots for Isida
- Containers now have a guarantee that prizes of better rarity will drop after opening the required number of containers
  - Common Container
    - Rare item is guaranteed after opening 15 - Epic item is guaranteed after opening 100 - Legendary item is guaranteed after opening 300
    - Epic Container
    - Epic item is guaranteed after opening 15 - Legendary item is guaranteed after opening 100 - Exotic item is guaranteed after opening 300
- Added Freeze Legacy skin to Legendary Containers
- Added a temporary block of the «Upgrade for Tankoins» button, so you won’t accidentally click on it when you are out of crystals while upgrading your items
- Minor improvements to Desert MM and Magistral MM maps
- Removed the option to choose a country flag for your clan
- Fixed the bug with Container notification dots
- You can now see the number of keys you have for each type of Container in the filters on the Container selection screen
- Fixed the bug with old types of Containers being loaded when entering the Garage
- Fixed texts of keys and Containers
- Fixed the bug with closing the Container opening screen in process of receiving rewards from a Container
- Fixed the bug with scroll bar of possible rewards of a Container going off screen
- Fixed the bug with possible rewards of a Container not being shown at the centre
- Fixed the bug with how the selected item is shown in the list of possible rewards of a Container
- Fixed the bug where the green background under the selected filter would be slightly off-center on the Container selection screen
- Fixed the bug causing them incorrect display of the modal window with the full description of an item in the list of possible rewards of a Container
- Striker
  - Radius of max explosion damage increased from 2 to 3 m
    - Radius of medium explosion damage increased from 5 to 6 m
    - Radius of critical explosion damage decreased from 8 to 2 m
- Thunder
  - Radius of medium explosion damage increased from 3 to 4 m
- Scorpion
  - Missile Launcher «Wolfpack» augment
    - Minimum rocket speed is set to 25 m/s; - Maximum rocket speed is set to 75 m/s; - The number of rockets in a salvo is decreased from 8 to 6; - Removed the increase in aiming time.
    - Missile Launcher «Swarm» augment
    - The number of rockets in a salvo is increased from 6 to 20; - Added a decrease in damage per rocket by -50%; - Minimum rocket speed decrease is changed to -66%; - Removed the increase in maximum rocket speed; - Minimum Rocket angular velocity is increased by +100%; - Maximum Rocket angular velocity is increased by +900%
- Magnum
  - Radius of medium explosion damage increased from 3 to 4 m
- Gauss
  - Radius of medium explosion damage increased from 3 to 4 m
- Drones
  - Mechanic
    - The minimum rank required increased from Warrant Officer 1 to Warrant Officer 2
    - Defender
    - The minimum rank required increased from Warrant Officer 1 to Warrant Officer 4
    - Booster
    - The minimum rank required increased from Warrant Officer 1 to Warrant Officer 5
    - Trickster
    - Bonus Speed Boost is changed from 10%-40% to 20%-50%; - The minimum rank required increased from Warrant Officer 1 to Warrant Officer 3
    - Crisis
    - Bonus Damage is changed from 30%-60% to 10%-25%; - Bonus Speed Boost is changed from 30%-70% to 20%-50%; - Additional supply consumption is decreased from 3 to 2 units; - (Note) Same changes are applied to Crisis XT, except the decrease of additional supply consumption. It is still 3 units to keep the drone rare.
- Added icons for the «Extreme Lightweight Construction» augments to make it possible to see them in the TAB window
  - (Note) If you want to get these parkour augments, you just need to redeem this promocode: TNK00-00000-0674E-PO3LP-PFNYX

## 2023

### December 22nd (Update 750)

- Keys
  - Instead of Regular Containers, players now receive Common Keys
    - Instead of Weekly Containers, players now receive Rare Keys
    - Instead of Ultra Containers, players now receive Epic Keys
    - Instead of Skin Containers, players now receive Legendary Keys
    - (Note) You no longer earn containers. They are now always available in the Containers menu screen. However, you need to earn keys. A key is used to open a container of the same type.
- Players no longer have units of containers in the Garage
  - If a player agreed to the conversion procedure, 1 key has been added for each 10 containers they had.
    - If a player didn’t agree to the conversion procedure, all the containers in their Garage have been opened and the prizes added to their accounts.
- The contents of Epic Containers have been updated.
  - Added a new augment for Striker — «Vacuum Missiles»
    - (Note) The further a target is from the epicenter of the explosion, the more damage it receives. Pressing the fire button again immediately detonates the missile while it is still in the air.
    - Added the «Blaster» augments for Wasp, Hornet, and Hopper
    - Added the «Lifeguard» augment for Viking, Crusader, Hunter, Paladin, and Dictator
    - Added the «Miner» augment for Ares, Titan, and Mammoth
- Epic Keys are now always available in the Shop.
- Added tankoins to Weekly Missions
  - (Note) This is to compensate for the lack of tankoins in Rare Containers which replaced Weekly Containers.
- Improved the captcha feature.

### December 15th (Update 749)

- Fixed mission icons for daily and weekly missions
- Changed the time when in-game V-LOG announcements appear
- Fixed the bug which caused the ball drop zone to be shown wrong
- Added experimental options to settings
  - Experimental option to force limit maximum FPS value
    - Experimental option to draw FPS graph for debugging purposes
- Optimized the system of in-game announcements
- Updated Shop prices for some regions

### December 8th (Update 748)

- Remastered the Missions screen
  - Added a button to collect rewards of all completed missions within one section.
    - Added an option to choose how you want to see missions: as cards or as list items (like in PRO battles).
    - Added a hidden description of missions that appears once the mouse cursor hovers on the mission card.
    - Added support for narrower displays for the mobile version.
- Early Access in Shop
  - Early Access kits now give you access to items in the Shop 4 ranks before relative to the rank required to unlock the item in the Garage
    - Added Mk2 kits for beginners
- Ricochet
  - «Sizzling Field» augment
    - No longer guarantees that the status effect will be applied after bouncing
    - «Cryo Field» augment
    - No longer guarantees that the status effect will be applied after bouncing
    - «Magnetron» augment
    - No longer guarantees that the status effect will be applied after bouncing
    - «Tectonic Field» augment
    - No longer guarantees that the status effect will be applied after bouncing
    - «Super-Smart Minus-Field» augment
    - No longer guarantees that the status effect will be applied after bouncing
- Striker
  - Radius of max explosion damage decreased from 5 to 2 m.
    - Radius of medium explosion damage decreased from 6 to 5 m.
- Thunder
  - Radius of max explosion damage increased from 1 to 2 m
    - Radius of medium explosion damage increased from 1 to 3 m
    - Radius of critical explosion damage increased from 1 to 2 m
    - «Vacuum Shells» augment
    - Regular damage decrease changed from -20% to -25% - Radius of average splash damage changed from 10 to 9 m - Range of minimum explosion damage increased from 50% to 250%
- Magnum
  - Radius of max explosion damage decreased from 5 to 2 m
    - Range of medium explosion damage decreased from 6 to 3 m
    - «Vacuum Core» augment
    - Regular damage decrease changed from -39% to -50%
- Railgun
  - «Shotgun Rounds»
    - Added a reload time decrease of -15%
- Gauss
  - Radius of max explosion damage increased from 1 to 2 m.
    - Radius of medium explosion damage increased from 2 to 3 m.
    - Radius of critical explosion damage increased from 1 to 2 m.
- Drones
  - Defender
    - Duration of Boosted Armor increased from 20-40 to 20-45 seconds
    - Booster
    - Duration of Boosted Damage increased from 20-40 to 20-45 seconds
    - Trickster
    - Duration of Speed Boost increased from 20-40 to 20-45 seconds
- In the Tutorial Missions, you now receive 1 Star for the completion of each standard mission
- Fixed the bug due to which exiting the Garage took longer after equipping a paint
- Minor improvements in translation in some languages
- Minor improvements in the Garage interface
- Optimization in HTML5 graphic rendering

### December 1st (Update 747)

- Added a new Railgun augment to Ultra Containers — «Shotgun rounds»
  - (Note) Deals more damage up close than it does farther away. Standard damage is increased, while the range of fire is decreased.
- Added a new Isida augment to Ultra Containers — «Toxic Nanobots»
  - (Note) Critical damage applies the «Armor-Piercing» status effect to an opponent. But in turn, the critical damage is significantly decreased.
- Changed the way the initial/next Juggernaut is determined in the team mode
  - This may cause a significant delay between the current Juggernaut getting destroyed and another Juggernaut appearing
    - We won’t disclose the rules of determining the next Juggernaut to prevent any attempts of mass abuse
- Freeze
  - Critical hit chance decreased from 5% to 4%
- Isida
  - Critical healing decreased from 1500-3000 to 500-1000 HP
- Tesla
  - Regular damage increased from 300-600 to 315-630 HP
    - Critical damage decreased from 410-820 to 355-710 HP
    - Ball Lightning damage increased from 450-900 to 580-1160 HP
    - Ball Lightning reload decreased from 12-8 to 9-6 s
    - Ball Lightning delay decreased from 0.3-0.2 to 0.2-0.1 s
- Hammer
  - Damage per shot decreased from 387-774 to 380-760 HP
    - Critical damage decreased from 680-1360 to 580-1160 HP
    - Amount of pellets per target increased from 9 to 10
    - «Dragon breath»
    - The last shot in the ammo clip no longer guarantees status effect be applied
    - «Wyvern's Breath»
    - The last shot in the ammo clip no longer guarantees status effect be applied
    - «Magnetic Pellets»
    - The last shot in the ammo clip no longer guarantees status effect be applied
    - «Stunning Pellets»
    - The last shot in the ammo clip no longer guarantees status effect be applied
    - «Armor-piercing shot»
    - The last shot in the ammo clip no longer guarantees status effect be applied
- Twins
  - Critical damage increased from 200-400 to 235-470 HP
- Ricochet
  - Regular damage increased from 170-340 to 175-350 HP
    - Critical damage decreased from 300-600 to 235-470 HP
- Smoky
  - Regular damage increased from 300-600 to 315-630 HP
    - Critical damage decreased from 395-790 to 355-710 HP
    - Projectile speed decreased from 400-500 to 300-500 m/seс
- Striker
  - Critical damage decreased from 640-1280 to 580-1160 HP
- Thunder
  - Critical damage decreased from 600-1200 to 580-1160 HP
- Scorpion
  - Regular damage increased from 550-1100 to 580-1160 HP
    - Critical damage increased from 650-1300 to 700-1400 HP
- Magnum
  - Regular damage decreased from 720-1440 to 700-1400 HP
    - Critical damage increased from 815-1630 to 875-1750 HP
    - «Incendiary core»
    - Regular damage no longer guarantees status effect be applied
    - «Magnetic core»
    - Regular damage no longer guarantees status effect be applied
    - «Armor-piercing core»
    - Regular damage no longer guarantees status effect be applied
    - «Mortar»
    - Mine lifetime increased from 30 to 60 seconds
    - «Vacuum core»
    - Regular damage decrease changed from -30% to -39%
- Railgun
  - Regular damage increased from 670-1340 to 700-1400 HP
    - Critical damage decreased from 935-1870 to 875-1750 HP
- Gauss
  - Regular damage increased from 335-670 to 355-710 HP
    - Critical damage decreased from 580-1160 to 450-900 HP
- Shaft
  - Regular damage increased from 335-670 to 355-710 HP
    - Critical damage decreased from 465-930 to 450-900 HP
    - «Stunning Sight»
    - Duration of the status effect applied by hitting an enemy with a critical arcade shot increased from 0.8 to 1 s
    - «Armor-piercing sight»
    - Duration of the status effect applied by hitting an enemy with a critical arcade shot increased from 3 to 5 s
- Paladin
  - Maximum roll angle while moving changed from 13 to 15 deg.
    - Roll speed multiplier increased from 0.7 to 0.75
- Boosted Damage
  - Effect duration increased from 40 to 45 s
- Boosted Armor
  - Effect duration increased from 40 to 45 s
- Speed boost
  - Effect duration increased from 40 to 45 s
- «Pulsar» augments for Scorpion, Magnum, Railgun
  - Critical hit chance decrease changed from -12% to -8%
- «Pulsar» augments for Tesla, Twins, Ricochet, Smoky
  - Critical hit chance decrease changed from -12% to -16%
- «Pulsar» augments for Firebird, Freeze, Isida, Vulcan
  - Critical hit chance decrease changed from -12% to -20%
- All the status effect augments except Pulsars
  - Critical damage decrease changed from -90% to -50%
- Updated the system of choosing right graphic settings for new accounts
- Upgraded UI animations in the Garage
- Fixed the bug, because of which the image of the tank in the Garage was narrowed after the end of the battle

### October 13th (Update 744)

- Added a new Isida augment to Ultra Containers — «Stunning Nanobots»
  - (Note) Critical damage applies the «Stun» status effect to the enemy tank for a short time.
- Added a new Magnum augment to Ultra Containers — «Jamming Core»
  - (Note) Each shot applies the «Jammer» status effect to all targets caught in the explosion radius. With critical hits, the duration of the effect increases.
- Added a new «Your Progress» screen to the Lobby. Click on your rank’s icon to get more information about next ranks and to find out when desired equipment becomes available.
- You now need to fully upgrade your current modification of equipment to unlock the next one
- Changed prices of modifications for all equipment:
  - Mk2 — 3 Tankoins
    - Mk3 — 4 Tankoins
    - Mk4 — 5 Tankoins
    - Mk5 — 6 Tankoins
    - Mk6 — 7 Tankoins
    - Mk7 — 8 Tankoins
- Twins
  - Weak explosion damage increased from 25% to 50%
    - Medium explosion damage decreased from 90% to 50%
    - Radius of critical splash damage increased from 5 to 6 m.
    - Radius of splash damage increased from 5 to 6 m.
    - Radius of medium explosion damage decreased from 3 to 2 m.
- Vulcan
  - Projectile speed decreased from 200-300 to 200-250 m/sec
    - Turret rotation slowdown coefficient decreased from 1 to 0.9
- Smoky
  - Projectile speed increased from 300-400 to 400-500 m/sec
- Striker
  - «Missile Launcher “Faust”» augment
    - Added a +100% increase of Reload after salvo
- Scorpion
  - Projectile speed decreased from 1000 to 800-1000 m/sec
- Gauss
  - Projectile speed increased from 300 to 300-400 m/sec
- Hopper
  - Power decreased from 800-1300 to 550-600
    - Braking increased from 1 to 1.5
    - Reverse acceleration increased from 9-14 to 18-22 м/s²
    - Overdrive’s Instant Damage decreased from 1500-3000 to 1000-2000 HP
- Crusader
  - Power decreased from 900-1300 to 600-700
    - Braking increased from 1 to 1.5
    - Reverse acceleration increased from 11-15 to 16-20 м/s²
- Paladin
  - Power decreased from 900-1300 to 600-700
    - Braking increased from 1 to 1.5
    - Reverse acceleration increased from 10-14 to 15-18 м/s²
- Ares
  - Power decreased from 800-1300 to 650-800
    - Braking increased from 1 to 1.5
    - Reverse acceleration increased from 9-14 to 14-17 м/s²
- All the Pulsar augments
  - Added a decrease of critical hit chance by -12%
- All the status effect augments
  - Added a decrease of critical damage by -90%
- All the «Lightweight Construction» augments
  - Removed the fixed value of Weight parameter
    - Added a decrease of Weight by -30%
    - Added an increase of acceleration by +15%
- All the «Heavyweight Construction» augments
  - Changed the decrease of Acceleration from -33% to -15%;
    - Changed the increase of Weight from +50% to +30%
- Changed tutorial missions and restarted them for all players
  - Now tutorial missions consist of 9 sets, each new one opens when you rank up
- Added the Captcha system to Pro-battles
  - We do not reveal the conditions of asking a player to enter captcha
- The minimum rank required for Pro-battles increased from Staff Sergeant (7) to First Sergeant (9)
- The minimum rank required to purchase the «Spider» module increased from Recruit (1) to Private (2)
- «Game entry bonus» missions for new players now give only containers and stars
- All paints of Uncommon category are no longer sold in the Garage
- Changes made in MM versions of the following maps:
  - Aleksandrovsk
    - minor improvements to bonus drop and spawn locations
    - Barda
    - taking a flag into the hole automatically returns it to its own base
    - Berlin
    - Added a passage at the center of the map, between bases - Changed spawn zones for both teams in the CP mode - Removed excessive drop zones near flags in the ASL mode
    - Bobruisk
    - minor improvements to bonus box and spawn locations - moved one small house that was near the lower base
    - Chernobyl
    - reworked the kill zones
    - Kungur
    - minor improvements in the non-playable zone.
    - Lost Temple
    - a passage near one of the bases has been widened
    - Scope
    - major changes, including widening of passages throughout the whole map
    - Skylark
    - added support for Assault, Rugby, Siege and Juggernaut modes; reworked the non-playable zone
    - Solikamsk
    - reworked the killzones
- Added French language to the game
- Fixed a bug due to which grenades would appear on the tank shortly after being thrown, without the tank having to respawn
- Fixed a bug due to which the equipment change within the battle would not be applied immediately
- Fixed a bug due to which equipment upgrades did not count sometimes because of quick button presses. Now there is a small delay between upgrade steps.
- Fixed the bug due to which players would sometimes get an error when editing clan description. Now the clan description character count is limited to 3000 symbols.

### October 13th (Update 741)

- Added a new Hammer augment to Ultra Containers — «Hunter Duplet»
  - (Note) This augment is a long-range version of the current Duplet augment
- Added a new Vulcan augment to Ultra Containers — «Armor-Piercing Band»
  - (Note) Critical damage applies the «Armor-Piercing» status effect
- Added «Engineer» augment available for crystals for all hulls in the Garage.
  - (Note) With this augment, the tank is repaired when any box is picked from the ground.
- The following augments have been added to Regular and Ultra Containers:
  - Ricochet’s «Helios» augment
    - Thunder’s «Strict Ammunition Load» augment
    - Scorpion’s «Missile Launcher "Tornado"» augment
    - «Engineer» augment for all hulls
- Added Halloween decorations to the Garage
- Updated visual effects of throwing a grenade and grenade explosion
- Removed the requirement to have a drone equipped to use supplies
  - You can also unequip drones again
- Vulcan
  - Turret rotation slowdown coefficient increased from 0.2 - 0.1 to 1.0
    - «Reinforced Aiming Transmission» augment
    - Increased turret rotation speed by +50%; - Increased turret rotation acceleration by +50%; - Added a decrease of upward auto-aim: -80%
- Scorpion
  - Initial angular rocket velocity increased from 45 to 100
    - Final angular rocket velocity decreased from 45 to 10
    - Minimal rocket speed increased from 60 to 75
    - Salvo reload duration decreased from 28.5 - 19 to 21 - 14 sec.
    - «Missile Launcher "Wolfpack"»
    - Aiming time increase changed from +100% to +50%; - Minimum rocket speed decrease changed from -99% to -90%; - Maximum rocket speed increase changed from +1100% to +500%; - Rocket acceleration phase duration increase was removed
    - «Missile Launcher "Tornado"»
    - The number of Rockets in salvo changed from 16 to 20; - Aiming recovery time increase changed from +30% to +25%; - Arcade reload time increase was removed
    - «Missile Launcher "Spear"»
    - Salvo reload time decrease changed from -50% to -75%; - Final angular rocket velocity increase changed from +300% to +1900%; - Rocket acceleration phase duration decrease changed from -75% to -50%
- Railgun
  - «Stun Rounds»
    - «Stun» status effect’s duration decreased from 1.5 to 1 s
    - «Super Armor-Piercing Rounds»
    - «Armor-Piercing» status effect’s duration decreased from 6 to 5 s
    - «Jamming Rounds»
    - «Jammer» status effect’s duration increased from 5 to 9 s
- Juggernaut destroys surrounding tanks when destroyed.
  - (Note) Self-destructing at close range can destroy the enemy Juggernaut
- Juggernaut restores 1000 health points when any box is picked up
- Fixed some bugs with the action log shown on the right
- Fixed the bug with the Back button when purchasing items over the battle screen
- Added support for linking your Twitch account with partnering sites (other sites you can play Tanki Online on)

### September 29th (Update 740)

- Fixed the poor performance of the MacOS version after recent updates
- Visual fixes to the action log
- Striker missile trace fixes
- Fixed the abnormal behavior of the Crystals category when you enter the Shop
- Added support for grenades on mobile version of the game
- Drone movement visual improvements
- Added a notification about server restart
- Decreased the time needed for the game to stop trying to find a matchmaking battle from 900 to 300 seconds

### September 22th (Update 739)

- Added a new Striker augment to Ultra Containers — «Missile Launcher “Faust”»
  - (Note) This augment limits range of fire to just 40 meters, but instead it gives you reduced aim and reload time by 50%
- Added a new Striker augment to Ultra Containers — «Magnetic Missiles»
  - (Note) This augment applies the EMP status effect on critical hits.
- Magnum
  - Incendiary Core
    - The status effect radius decreased from 20 to 10 m.
    - Armor-Piercing Core
    - The status effect radius increased from 5 to 10 m.
    - Magnetic Core
    - The status effect radius increased from 5 to 10 m.
- Supplies
  - Repair Kit
    - The minimum rank required increased from Private (2) to Sergeant (6)
    - Boosted Armor
    - The minimum rank required decreased from Master Corporal (5) to Corporal (4)
    - Boosted Damage
    - The minimum rank required decreased from Sergeant (6) to Master Corporal (5)
    - Speed Boost
    - The minimum rank required increased from Corporal (4) to Staff Sergeant (7)
- Battle notification system
  - Reduced the number of messages and the time they remain on the screen
    - Messages about the following events have been moved to the battle log:
    - Capturing a point - Taking and dropping a flag - Taking and dropping a ball
    - Added flickering to the flag and ball icons near the battle score when a ball or a flag is being carried by a player
    - The flickering rate slows down if a ball or flag is dropped.

### September 8th (Update 738)

- Added a new Striker augment to Ultra Containers — «Missile Launcher “Faust”»
  - (Note) This augment limits range of fire to just 40 meters, but instead it gives you reduced aim and reload time by 50%
- Added a new Striker augment to Ultra Containers — «Magnetic Missiles»
  - (Note) This augment applies the EMP status effect on critical hits.
- Magnum
  - Incendiary Core
    - The status effect radius decreased from 20 to 10 m.
    - Armor-Piercing Core
    - The status effect radius increased from 5 to 10 m.
    - Magnetic Core
    - The status effect radius increased from 5 to 10 m.
- Supplies
  - Repair Kit
    - The minimum rank required increased from Private (2) to Sergeant (6)
    - Boosted Armor
    - The minimum rank required decreased from Master Corporal (5) to Corporal (4)
    - Boosted Damage
    - The minimum rank required decreased from Sergeant (6) to Master Corporal (5)
    - Speed Boost
    - The minimum rank required increased from Corporal (4) to Staff Sergeant (7)
- Battle notification system
  - Reduced the number of messages and the time they remain on the screen
    - Messages about the following events have been moved to the battle log:
    - Capturing a point - Taking and dropping a flag - Taking and dropping a ball
    - Added flickering to the flag and ball icons near the battle score when a ball or a flag is being carried by a player
    - The flickering rate slows down if a ball or flag is dropped.

### September 8th (Update 738)

- Magnum
  - The number of steps of charging decreased from 100 to 50 units
    - «Automated Gunpowder Loading Mechanism» augment
    - The amplification time decrease changed from -25% to -20%
    - «Harpoon» augment
    - The number of steps of charging changed from 50 to 10 units
    - (Note) These changes should significantly reduce the cases of not dealing damage.
- Added support for grenades in battles
  - Grenades received their own sounds for a throw, a bounce, and a detonation
- Changed the minimal rank required for Daily Missions from Gefreiter (3) to Master Corporal (5)
- Changed the minimal rank required for Weekly Missions from Corporal (4) to Staff Sergeant (7)
- Changed the minimal rank required for Secret and Encore Missions from Staff Sergeant (7) to Sergeant-Major (10)
- Memory usage optimization in battles
- Updated Shop prices for some regions

### September 1st (Update 737)

- Added a new Magnum augment to Ultra Containers — «Vacuum Core»
  - (Note) This augment does less damage on a direct hit to the enemy, but deals significantly more damage at the maximum splash distance from the epicenter of the projectile's explosion.
- Completing a regular mission is now counted in the Supermission progress only after you claim rewards for that mission

### August 11th (Update 735)

- Added a new Hammer augment to Ultra Containers — «Heavy Slugger»
  - (Note) This augment acts like an upgraded slugger. Pellets fly much farther, but the turret rotation speed is reduced.
- Updated the standard skin for Hammer to its HD version.
  - (Note) After many changes in game balance, Hammer’s horizontal spreading of pellets has increased. To signify that, we’ve added a second barrel to the turret.
- Hammer
  - Updated standard skin
    - «Assault Magazine» augment
    - Changed clip reload time from -40% to -30%
- Striker
  - «Missile Launcher “Tandem”» augment
    - Salvo reload time changed from +100% to +80%
    - «Missile Launcher “Hydra”» augment
    - Pause between salvo's rockets changed from -30% to -20%
- Gauss
  - «Hyperspeed Shells» augment
    - Range of minimum damage changed from 0% to -25%
- PRO-Battles
  - Berlin Map (not the MM version) now supports up to 80 players.
    - Dusseldorf Map (not the MM version) now supports up to 100 players.
    - Lost Temple Map (not the MM version) now supports up to 90 players.
    - (Note) These are experimental changes and may be reverted in the future.
- Game statistics on older protection modules were transferred to the new protection modules.
- To increase security, players’ authorization resets every 30 days even if they have 2FA enabled.
- Improvements in the UI of the mobile HTML5 version of the game.

### August 4th (Update 734)

- Added a new augment to Ultra Containers for Isida — «Magnetic Nanobots»
  - (Note) This augment disables opponents’ supplies with critical hits.
- New format for Daily and Weekly Missions has been introduced.
  - Players do not receive three missions of each kind anymore
    - Daily Missions can not be changed for crystals anymore
    - With the update, all current Daily and Weekly Missions will be removed from the game, whether completed or not.
    - One-time compensation will be issued for the Weekly Missions that are not yet completed.
- Daily Missions have been updated
  - Standard set of Daily Missions:
    - Supermission: Complete all the daily missions. They reset every day. - Earn experience points in battles. (1000 points) - Earn reputation points in battles. (700 points) - Earn crystals in battles. Only crystals visible on the battle end screen are counted. (500 crystals) - Earn stars. Both the set of stars you earn in battles and stars you receive for completing other missions are counted. (14 stars) - Activate any supplies in battles. Both activating your own set of supplies and collecting bonus boxes are counted. (100 supplies) - Activate overdrive in battles. (6 overdrives) - Play till the end in Matchmaking battles. Lack of activity in a battle may prevent the completion of this mission. (3 battles) - Finish battles by being in the winning team. (1 battle) - Make any purchase in the game's Shop. It contains some items that only cost a small amount of crystals. (1 item)
    - Additional ENCORE set of Daily Missions that become available only after completing the standard set.
    - Supermission: Complete all the additional daily missions. - Destroy enemy tanks. (15 tanks) - Destroy enemy tanks with critical damage. When you destroy an enemy with critical damage, their turret gets blown off the hull. (2 tanks) - Get into the TOP-3 of your team in battles. It doesn't matter if your team is losing. (1 time) - Use the «Boosted Armor» supply. Both using your own set of supplies and collecting bonus boxes are counted. (50 supplies) - Use the «Boosted Damage» supply. Both using your own set of supplies and collecting bonus boxes are counted. (50 supplies) - Use the «Speed Boost» supply. Both using your own set of supplies and collecting bonus boxes are counted. (50 supplies) - Open a regular container and enjoy the rewards for your hard work. (1 container)
    - Daily Missions reset every day, regardless of whether they were completed or not
    - (Note) Do not forget to claim the rewards as soon as you complete the missions.
    - It is enough to complete the regular set of missions to receive the usual set of prizes in the form of 3 Containers and 9 stars
- Weekly Missions have been updated.
  - Standard set of Weekly Missions:
    - Supermission: Complete all the weekly missions. They reset every week. - Complete daily missions. (30 missions) - Finish battles by being in the winning team. (4 battles) - Earn reputation points in the «Team Deathmatch» (TDM) mode. (300 points) - Earn reputation points in the «Control Points» (CP) mode. (300 points) - Earn reputation points in the «Capture the Flag» (CTF) mode. (300 points) - Earn reputation points in the «Assault» (ASL) mode. (300 points) - Earn reputation points in the «Rugby» (RGB) mode. (300 points) - Earn reputation points in the «Team Juggernaut» (TJR) mode. (300 points) - Earn reputation points in the «Siege» (SGE) mode. (300 points)
    - Additional ENCORE set of Weekly Missions that become available only after completing the standard set.
    - Supermission: Complete all the additional weekly missions. - Use the «Nuclear Energy» supply. Both using your own set of supplies and collecting bonus boxes are counted. (3 supplies) - Successfully deliver flags/balls to the correct base. You can complete this mission in the «Capture the Flag», «Assault», and «Rugby» modes. (2 times) - Capture points. You can complete this mission in the «Control Points» and «Siege» modes. (12 points) - Destroy a Juggernaut. (1 Juggernaut) - Play till the end in Matchmaking battles. Lack of activity in a battle may prevent the completion of this mission. (9 battles) - Finish battles by being in the winning team. (3 battles) - Get into the TOP-3 of your team in battles. It doesn't matter if your team is losing. (2 times)
    - Additional SECRET set of Weekly Missions that becomes available only after completing the additional ENCORE set of Weekly Missions, and requires Premium Pass to claim the prizes:
    - Supermission: Complete all the secret weekly missions. You need to have Premium Pass to complete them. - Earn experience points in battles. (1500 points) - Earn reputation points in battles. (1000 points) - Earn crystals in battles. Only crystals visible in the battle end screen are counted. (3000 crystals) - Earn stars. Both stars you earned in battles and stars you receive for completing other missions are counted. (15 stars) - Use supplies. Both using your own set of supplies and collecting bonus boxes are counted. (400 supplies)
    - Weekly Missions reset every week, regardless of whether they were completed (partially/impartially) or not
    - (Note) Do not forget to claim the rewards as soon as you complete the missions.
    - It is enough to complete the regular set of missions to receive the usual set of prizes in the form of 9 Containers, 27 stars and 3 Weekly Containers.
- Progress on Daily and Weekly Missions is now displayed on the battle end screen
- Updated the limits for earning crystals and experience points in PRO battles
  - Now the limits are updated weekly instead of being updated daily
    - Limit of received crystals has been changed from 3000-15000 to 21000-105000 crystals
    - Limit of received experience points has been changed from 1000-10000 to 7000-70000 points
    - Limit of received crystals for Premium Pass owners has been changed from 3000-66000 to 21000-462000 crystals
    - Limit of received experience points for Premium Pass owners has been changed from 1000-22000 to 7000-154000 points
- Drones and Protections Modules are also hidden with a question mark.
- Augments not owned by the player are also hidden with a question mark.
- Hull descriptions now contain a video showing its overdrive in use.
- Fixed the description of Gauss’ «Hyperspeed Shells» augment
  - (Note) The absence of damage increase for salvo shots is not a bug, but a feature.
- Fixed a bug due to which the Trickster drone did not cause cooldown of other supplies.
  - (Note) The absence of supply cooldown for Trickster was a bug, not a feature.
- Fixed a bug due to which double-clicking did not work to equip augments or skins
- Fixed a bug due to which the descriptions of all augments displayed only half of the description text.
- Fixed a bug due to which it was impossible to upgrade the Mammoth hull.
- Fixes and improvements to the mobile HTML5 client interface
  - (Note) Optimization and performance improvements of the mobile client will come in next updates

### July 28th (Update 733)

- Fixed bots’ weird behaviour
  - (Note) This bug usually appeared in the evening and made bots drive backward, not move, not shoot, etc.
- Added a special question mark icon for items that are not yet available for new players
  - (Note) It also works for items that have been added to the game but not yet publicly announced
- Repair kit
  - Delay between repair ticks (actions) increased from 150 to 250 ms
    - The number of HP repaired per tick decreased from 150 to 100 HP
    - The number of repair ticks (actions) increased from 20 to 30
    - Reload duration decreased from 30 to 22 s
    - (Note) The frequency of using repair kits will remain the same - 30 seconds, despite that reload duration is increased. It will be so because the increased supply effect duration is 8 seconds and stacks with the cooldown, making it 30 seconds in total
- Boosted armor
  - Effect duration increased from 30 to 40 s
    - Reload duration decreased from 20 to 15 s
- Boosted damage
  - Effect duration increased from 30 to 40 s
    - Reload duration decreased from 20 to 15 s
- Speed boost
  - Effect duration increased from 30 to 40 s
    - Reload duration decreased from 20 to 15 s
- Mine
  - Critical damage decreased from 3999 to 2000 HP
    - Critical hit chance increased from 5 to 10%
- Mechanic
  - Reduction of Repair Kit cooldown changed from 15 to 10-20 s
    - Reload duration decreased from 3 to 1 s;
    - Removed the decrease of reload time of Repair kit supply by activating other supplies
- Defender
  - Power up duration changed from 30 to 20-40 s
    - Additional Boosted Armor supply power increased from 10-90% to 30-90%
    - Reduction of Boosted Armor cooldown changed from 5 to 5-15 s
    - Reload duration decreased from 3 to 1 s;
    - Removed the decrease of reload time of Boosted Armor supply by activating other supplies
- Booster
  - Power up duration changed from 30 to 20-40 s
    - Reduction of Boosted Damage cooldown changed from 5 to 5-15 s
    - Reload duration decreased from 3 to 1 s;
    - Removed the decrease of reload time of Boosted Damage supply by activating other supplies
- Trickster
  - Power up duration changed from 30 to 20-40 s
    - Reduction of Speed Boost cooldown changed from 5 to 5-15 s
    - Reload duration decreased from 3 to 1 s;
    - Removed the decrease of reload time of Speed Boost supply by activating other supplies
- Saboteur
  - Reduction of Mine cooldown 0-10 s
    - Reload duration decreased from 3 to 1 s;
- Hyperion
  - Reduced reload time for supplies changed from 10-20 to 5-15 s
    - (Note) Drone behavior doesn't actually change because the cooldown of main supplies is reduced from 20 to 15 seconds
- Crisis
  - Reduction of Repair Kit and Mine cooldowns 0-5 s
- Spider protection module
  - The minimum rank required is decreased from General (26) to Recruit (1)

### July 21st (Update 732)

- Added a new augment for Gauss to Ultra Containers — «Hyperspeed Shells»
  - (Note) The shell damage is reduced by 50% at close range. The greater the distance, the more damage you deal, allowing you to deliver up to 300% of the regular shell damage at the maximum distance. Shells fly faster, however critical damage is completely removed.
- The standard skin for Gauss has now been updated to an HD version.
  - (Note) Salvo reloading time is now visually indicated by steam coming out of the turret. The turret is ready to shoot again once the steam stops venting.
- Added new augments for Gauss that are available for crystals
  - «Faster Horizontal Tracking» — increases the turret rotation speed and the vertical aiming angle.
    - «Hacked Aiming Processor» — significantly increases the time that you stay locked onto the target after it moves out of your sight.
    - «Large Caliber» — increases the damage of standard shots, but the projectiles travel much slower.
- Updated Skin Containers
  - Added the Freeze XT Skin
    - Added the Railgun GT Skin
    - Amount of Tankoins obtainable from Skin Containers has been reduced from 3990 to 1001.
- Minor text improvements

### July 14th (Update 731)

- A new augment for Magnum has been added to Ultra Containers — «Magnetic Core»
  - (Note) Every shot applies the «EMP» status effect to all targets caught in the explosion radius. With critical hits, the duration of the effect increases.
- Bots
  - Bots are added for ranks starting from rank 1 (Recruit) to 6 (Sergeant)
    - Optimized server performance of bots
    - Fixed the bug with bots getting progress in missions as if they were players
    - For battles with bots, the battle duration depends on a player’s rank
    - Recruit — 4 minutes - Private — 6 minutes - Corporal — 8 minutes - Sergeant — 10 minutes
- Firebird
  - Regular damage decreased from 500-1300 to 450-1200 HP
- Hulls
  - Upgrades no longer affect overdrive charging over time. Now, the value of this parameter is always the same as the maximum value of the parameter of each hull before this update.
- Drones
  - Booster
    - Additional damage supply power increased from 10% - 20% to 10% - 25%
    - Defender
    - Additional armor supply power increased from 10% - 80% to 10% - 90%
- The duration of respawn protection decreased from 3 to 2 seconds
- The minimum rank to access chats is decreased from rank 3 (Gefreiter) to rank 2 (Private)
- Added an option to change your nickname for free if you do it for the first time
- Fixed the bugs with wrong mission progress on the battle end screen

### July 7th (Update 730)

- Removed all modifications on protection modules but one
  - Their price is now 55 000 crystals
    - The total number of crystals you need to spend to upgrade 1 module is 1 260 000 crystals
- You can now see your mission progress in the special tab of the battle end screen
  - You will only see a mission there if you contributed towards its progress in this battle
    - Daily and weekly missions are not yet supported
- Improved the announcements widget in the Lobby
- Shortened account block reasons to meet the new requirements of maximum chat message length
- Fixed the bug that let you leave a battle while loading into it, making it impossible to search for a new battle

### June 23rd (Update 728)

- Added a system of hiding mission categories
  - You no longer see the Tutorial category after having completed all the missions in it
    - You will see the Event category during the whole duration of the event (even after having completed all the missions in it)
    - You will always see Daily, Weekly, Special, and Contract mission categories (even after having completed all the missions in them)
- You now see the number of missions you haven’t completed yet for each mission category
- HTML5 version got touch screen support and multiple changes to the UI for mobile devices
- Firebird
  - Regular damage decreased from 140-350 to 125-325 HP/tick
    - Critical damage decreased from 140-400 to 150-375 HP/tick
    - Reload time increased from 2.0-1.0 to 2.0-1.5 sec
- «Pulsar» augments no longer decrease the critical damage chance of any turret
- B0-NK turret now supports Viking’s overdrive effect
- Added a warning screen informing about the need for a manual update of the desktop client for those who still use the older version of it, which does not support automatic updates.
- Added a special version of the Daily Tankoins Pass offer with a 90% discount
  - Note: This special offer is only available for new accounts, registered after 23.06.2023. It can only be purchased once.

### June 16th (Update 727)

- Upgrade prices in Tankoins decreased by half for all MK7 turrets, hulls, and drones (except Brutus)
- Tesla
  - Critical damage chance decreased from 16% to 15%
- Twins
  - Critical damage chance decreased from 7% to 6%
- Ricochet
  - Critical damage chance decreased from 8% to 7%
    - «Helios» augment
    - The energy recovery rate decrease changed from -50% to -45%
- Smoky
  - Critical damage chance decreased from 15% to 14%
- Thunder
  - «Anvil shells» augment
    - Added critical hits with a critical damage chance of +33%
- Magnum
  - Critical damage chance decreased from 30% to 23%
- Railgun
  - Critical damage chance decreased from 30% to 23%
- Shaft
  - Critical damage chance decreased from 30% to 18%
- The SGE mode is now available starting from the Gefreiter rank
- The TJR mode is now available starting from the Master Corporal rank
- Redesigned the announcement widget on the lower right side of the lobby

### June 2nd (Update 726)

- New XT skin for Viking added to Ultra Containers
  - (Note) This is a new HD version of the Viking XT skin. The previous version will stay in the Garages of its owners and will not be removed. We do see your requests about replacing the old XT skin with the new XT HD skin. Though we understand your emotions, we cannot do it due to the huge difference in the costs of production between old and new skins. Besides that, you often ask us to keep the old versions of skins instead of replacing them. Therefore, launching a new XT HD lineup of skins will be beneficial for everyone.
- «Elite Pass» added to the game as a temporary event. You will be able to obtain the new XT HD skin for Freeze. «Elite Pass» has its own price and does not unlock the prizes in the usual challenge.
  - (Note) This additional “challenge” is completed by earning or buying the same stars, and according to the same rules as the usual challenges.
- Hammer
  - «Pulsar» augment
    - Fixed the coefficient of decreasing shot reload duration when Viking’s overdrive is activated
- Striker
  - Critical damage chance reduced from 26% to 20%
- Modules
  - The rank at which modules become available increased from Lieutenant General (25) to General (26)
- Updated the interface of the Challenges screen
- Updated the 3D model of the ball in Rugby mode
- «Product Kits» section removed from the Shop along with all the kits
- New «Early Access» section is added to the Shop, in which separate turrets and hulls will be sold.
  - (Note) Availability of turrets and hulls in this section follows the same rule as it did in Product Kits — 7 ranks earlier than they become available in the Garage.
- Added additional bundle options for stars in the Shop

### May 26th (Update 725)

- A new augment for Thunder has been added to Ultra Containers — «Anvil Shells».
  - (Note) This augment works the same way as the «Sledgehammer Rounds» augment, but it can also deal critical damage, even with splash damage.
- Added a new category of missions — «Entry Bonus».
- Firebird
  - Critical damage decreased from 610-1700 to 560-1600 HP/sec (152.5-425 → 140-400 HP/tick)
    - Critical damage chance decreased from 10% to 5%
- Freeze
  - Critical damage chance decreased from 7% to 5%
- Isida
  - Critical damage chance decreased from 7% to 5%
    - Energy consumption without target decreased from 50 to 40 eng/sec
    - Energy consumption while healing decreased from 80 to 50 eng/sec
- Wasp
  - Overdrive charge per second decreased from 666 to 555 unit/sec
- Modules
  - The rank at which Mk1-Mk6 modules become available increased from Lieutenant Colonel (21) to Lieutenant General (25)
- Players who haven’t entered the game for at least 300 days in a row, get a special bonus upon entering the game.

### May 19th (Update 724)

- Scorpion
  - Critical hit chance decreased from 30% to 23%
    - «Pulsar» augment
    - Removed the decrease of critical damage chance
- Modules
  - The rank when Mk1-Mk5 modules become available is increased from Second Lieutenant (17) to Lieutenant Colonel (21)
- Modules have been removed from the Shop kits
- Minor text improvements

### May 12th (Update 723)

- Vulcan
  - Self-heating increased from 0.15 to 0.25 temp/sec
    - Overheat Temperature limit increased from 0.15 to 0.25
    - Fixed the problem with the interaction between «Incendiary band» and «Heat Resistance» augments
- Thunder
  - Critical hit chance decreased from 30% to 23%
    - «Pulsar» augment
    - Removed the decrease of critical damage chance
- Modules
  - The rank when Mk1-Mk4 modules become available is increased from Warrant Officer 3 (13) to Second Lieutenant (17)
    - Next modifications of the «Armadillo» module can be purchased on any rank now
- Missions
  - Removed missions on finishing a battle in a specific mode from the Tutorial missions section
- Updated descriptions of in-game items.

### April 28th (Update 722)

- A new augment for Gauss has been added to Ultra Containers — «Stunning Salvo».
  - (Note) Critical damage and salvo shots apply the «Stun» status effect to the target.
- Firebird
  - Reload time increased from 1 second to 2-1 seconds
- Freeze
  - Reload time increased from 2 seconds to 3-2 seconds
- Smoky
  - Reload time decreased from 1.81-1.15 to 1.5-1 seconds
    - Critical damage decreased from 670-800 to 395-790 HP
    - Average critical damage chance changed from 11-22% to 15%
    - Coefficient of decreasing shot reload duration when Viking’s overdrive is activated changed from 0.25 to 0.3
    - «Autocannon» augment
    - The regular damage decrease changed from -75% to -50% - Added a decrease of critical damage chance by -40%
    - «Pulsar» augment
    - Removed the decrease of critical damage chance
- Vulcan
  - «Shooting speed regulator» augment
    - The increase of reload time changed from +10% to +50% - Added an increase of Regular damage by +50% - Added an increase of Critical damage chance by +50% - The decrease of barrel startup and slowdown time changed from -80% to -90%
- Drones
  - Rank from which Drones become available changed from Sergeant-Major (10) to Warrant Officer 1 (11)
    - Mechanic — usage of additional Repair Kits reduced from 4 to 2
    - Radius of effect increased from 20-25 to 20-30 meters; additional health points restored increased from 500-2000 to 1000-3000
- Augments
  - Rank from which Augments become available changed from Warrant Officer 1 (11) to Master Sergeant (8)
- Protection Modules
  - Rank from which Modules become available changed from First Sergeant (9) to Warrant Officer 3 (13)
- Fixed a bug in Sport mode Pro battles, which was leading to increased damage parameters when equipping certain augments
- Fixed the bug with the notification indicator dot in Mission Categories.
- Fixed the problem with images of Mission Categories when the page is scaled down in the browser.
- Fixed the issue with linebreak for titles of Mission Categories.
- Fixed the Overdrive icons for hulls used in special events.

### April 14th (Update 721)

- A new augment for Shaft has been added to Ultra Containers — «Incendiary Sight».
  - (Note) This augment ignites the target on critical arcade shots and on any sniper mode shots.
- Event missions now disappear right when an event ends.
  - (Note) It means you should claim rewards for event missions before Monday morning (before the end date of the event), or they will disappear.
- Updated the design of the battle results screen
  - Instead of text buttons, we added buttons with icons to make it easier to understand which button will open the Garage and which one will move you to the next battle.
    - Added a button to purchase «Premium Pass»
- Added mission categories system
  - When you open the «Missions» screen, you will be shown the categories of missions
    - There is a separate category for missions of each event with a timer showing how much time there is left to complete them.
    - Challenges are removed from this screen. To access them, you need to click on the special widget in the Lobby.
    - (Note) You will see some new categories of missions, which have never been in the game before. We won’t tell you what these missions are and when new ones will be added. Keep an eye on our website and social media to be the first to find out.
- Drone rebalance
  - The following drones are removed from the game: Driver, Trooper, Engineer, Sprinter, Miner, Supplier, Assault, Lifeguard, Blaster, and Camper.
    - Players will get a compensation of 60% of the crystals they spent on upgrading the removed drones.
    - Batteries are removed from the game.
    - You will get compensation for all batteries you had. For every battery, you get 1 unit of each of the following supplies: Repair Kit, Boosted Armor, Boosted Damage, and Speed Boost.
    - (Note) Do not forget to check if you have a drone equipped before entering a battle otherwise you will not have access to supplies!
- Changes in the Upgrades system
  - Upgrades happen instantly now, no more need to wait or speed them up.
    - The 100% discount on the next modification of equipment if the previous modification is fully upgraded, has been removed.
    - Added an option to use Tankoins to upgrade when a player does not have enough crystals.
    - Added a pop-up window to confirm before upgrades.
    - The prices of upgrading Mk1-Mk6 modifications are the same for all turrets and hulls now.
    - (Note) We have not changed the prices of upgrades.
- Firebird
  - Burning duration changed from 1-10 to 1.5-5 seconds
    - Heating rate decreased from 0.2-0.4 to 0.15-0.3 temp/sec
- Hammer
  - Critical damage chance increased from 10% to 13%
    - «Assault Magazine» augment
    - Shot reload duration decrease changed from -85% to -80% - Clip reload duration decrease changed from -50% to -40% - Added a decrease of critical damage chance: -50%
- Twins
  - Critical damage chance decreased from 8% to 7%.
    - «Pulsar» augment
    - No longer decreases the chance of critical damage
- Ricochet
  - Critical damage chance decreased from 9% to 8%.
    - «Pulsar» augment
    - No longer decreases the chance of critical damage
- Vulcan
  - Turret rotation slowdown when firing decreased from 40-30% to 20-10%
    - Barrel startup decreased from 1 to 0.75 sec
    - Barrel slowdown decreased from 1 to 0.75 sec
    - Projectile speed increased from 200-250 m/sec to 200-300 m/sec
    - Overheat resistance decreased from 9-12 sec to 8-9 sec
    - Overheat temperature limit decreased from 0.5-1 to 0.15
    - Self-heating rate decreased from 0.3-0.5 temp/sec to 0.15 temp/sec
    - Critical damage chance decreased from 4% to 2%
    - Augment «Shooting speed regulator» – Barrel startup time decrease changed from 85% to 80%; Barrel slowdown time decrease changed from 85% to 80%.
- Scorpion
  - Coefficient of decreasing shot reload duration when Viking’s overdrive is activated changed from 0.4 to 0.3
- Magnum
  - Coefficient of decreasing shot reload duration when Viking’s overdrive is activated changed from 0.4 to 0.3
- Juggernaut
  - Overdrive charge per second decreased from 1666 to 1111 units
- Mechanic
  - The number of battle points for assistance decreased from 5 to 4
    - Now additionally consumes 4 units of the «Repair Kit» supply
    - No longer uses batteries
- Two-factor authentication now works not for the account of the player, but for their device.

### March 31st (Update 720)

- Battle duration decreased from 15 to 13 minutes
- A new augment for Isida has been added to Ultra Containers — «Jamming nanobots»
  - (Note) Critical damage applies the «Jammer» status effect to an opponent.
- Changes to the star earning system
  - Daily mission reward — 3 stars
    - Weekly mission — 9 stars
    - Weekend supermission — 15 stars
    - (Note) After this update, rewards for missions that you have already completed but haven’t claimed rewards for will be decreased. Take this into account and decide which Challenge you want to use these stars for.
- New Challenges require 300 stars to be completed
  - (Note) This applies only to new Challenges, starting from the first April challenge. The second March Challenge will still require 3000 stars to be completed.
- Changed packs of stars in the Shop
  - 5 stars for 300 tankoins
    - 50 stars for 2750 tankoins
    - 150 stars for 7500 tankoins
    - Momentary progress special offer now gives you 75 stars
- Magnum
  - «Armor-piercing core» augment
    - Critical shots apply the «Armor-piercing» status effect for 9 seconds
- Railgun
  - «Incendiary rounds» augment
    - The «Burning» status effect’s duration decreased from 5 to 4 s
    - «Cryo rounds» augment
    - Regular damage applies the «Freezing» status effect for 4 seconds
- Hulls
  - Speed of light hulls increased from 9-12 to 10-12 m/s
    - Speed of medium hulls increased from 7-9 to 7.5-9 m/s (UPD: March 30th, 13:33 UTC)
- Crusader
  - Turning speed increased from 65-90 to 80-120 deg/s
- Pulsar augments
  - No longer applies the «Burning» status effect
- Drones
  - Defender
    - The number of additional units of the «Boosted Armor» supply consumed increased from 2 to 4 - No longer consumes batteries
    - Booster
    - The number of additional units of the «Boosted Damage» supply consumed increased from 2 to 4 - No longer consumes batteries
    - Trickster
    - Speed Boost Bonus decreased from 20-40% to 10-40% - The number of additional units of the «Speed boost» supply consumed increased from 2 to 4 - No longer consumes batteries
    - Saboteur
    - The number of additional Mines decreased from 3-7 to 3-5 - Circle radius decreased from 4-6 to 3.8-4.4 - The number of additional units of the «Mine» supply consumed decreased from 7 → 4 - No longer consumes batteries
    - Hyperion
    - The number of additional units of supply consumed increased from 1 to 2 - No longer consumes batteries
    - Crisis
    - No longer consumes batteries
    - Hyperion ХТ
    - The number of additional units of supply consumed changed to 9 - No longer consumes batteries
    - Crisis ХТ
    - The number of additional units of supply consumed changed to 9 - No longer consumes batteries
    - (Note) Mechanic drone still consumes batteries
- Battle action points
  - CTF mode
    - The number of battle points for assistance in capturing a flag increased from 25 to 40 - The number of battle points returning a flag increased from 10 to 15
    - RGB mode
    - The number of battle points for assistance in touchdown increased from 25 to 40
    - ASL mode
    - The number of battle points for destroying an enemy increased from 15 to 20 - The number of battle points for capturing a flag increased from 50 to 80 - The number of battle points returning a flag decreased from 10 to 0 - The number of battle points for assistance in capturing a flag decreased from 25 to 0
    - TJR and JGR mode
    - The number of battle points for assistance destroying a Juggernaut increased from 20 to 40
- Old weekly containers
  - Batteries removed from all old weekly containers
    - (Note) if you read the patch notes before March 31st, hurry up and open them all to get batteries that will be later converted to supplies.

### March 17th (Update 719)

- A new augment for Magnum has been added to Ultra Containers — «Incendiary core»
  - (Note) This augment applies the «Burning» status effect to all opponents caught in the explosion radius. Critical hits ignite tanks even more.
- Added day and evening versions of the Sandal REMASTERED map
  - The new versions of the map are added to the matchmaking map pool
    - The old versions of the map are removed from the matchmaking pool, but remain available for PRO battles
- Batteries
  - Batteries are removed from Regular Containers (including old versions)
    - Batteries are removed from Ultra Containers (including old versions)
    - Batteries are removed from Weekly Containers (excluding old versions)
- Freeze
  - Energy consumption decreased from 400 to 250 eng/sec
    - Energy Recharge duration increased from 1 to 2 s
- «Freezing» status effect
  - Hull speed and Acceleration at maximum freezing decreased from 66% to 60%
    - Turret rotation speed and acceleration at maximum freezing decreased from 10% to 1%
    - (Note) These changes affect the Freeze turret and all other ways of applying the «Freezing» status effect
- Twins
  - Range of max damage increased from 30-40 to 30-60 m
    - Range of min damage increased from 50-60 to 60-90 m
    - Projectile speed decreased from 50-70 to 30-60 m/sec
- Ricochet
  - Range of max damage increased from 30-40 to 30-60 m
    - Range of min damage increased from 50-60 to 60-90 m
    - Projectile speed decreased from 150-200 to 90-180 m/sec
    - «Minus-field stabilization» augment
    - The increase in the range of min damage decreased from +200% to +100%
    - «Helios» augment
    - The increase in the range of min damage decreased from +200% to +100%
- Smoky
  - Range of max damage increased from 60-80 to 60-90 m
    - Range of min damage decreased from 100-120 to 90-120 m
    - Projectile speed increased from 300-350 to 300-400 m/sec
- Vulcan
  - Range of max damage increased from 60-80 to 60-90 m
    - Range of min damage decreased from 100-120 to 90-120 m
- Thunder
  - Range of max damage increased from 60-80 to 60-90 m
    - Range of min damage decreased from 100-120 to 90-120 m
- Scorpion
  - Range of max damage increased from 80-100 to 90-120 m
- Railgun
  - Range of max damage increased from 80-100 to 90-120 m
- Gauss
  - Range of max damage increased from 80-120 to 90-120 m
    - Range of min damage increased from 100-150 to 150-180 m
- Shaft
  - Range of max damage increased from 80-100 to 90-120 m
    - Range of min damage increased from 120-150 to 150-180 m
- Wasp’s overdrive
  - Max damage radius increased from 15 to 20 m
    - Average damage radius increased from 20 to 25 m
    - Min damage radius increased from 40 to 60 m
    - Radius of status effects increased from 40 to 60 m
- Paladin’s overdrive
  - Additional «Jammer» status effect is also applied
- Juggernaut
  - Protection increased from 5000-20000 to 7500-30000 HP
    - In the Solo JGR mode, protection is decreased by 33%
- Drones
  - It is no longer possible to purchase the following drones:
    - Driver - Trooper - Engineer - Sprinter - Miner - Supplier - Assault - Lifeguard - Blaster - Camper
    - Mechanic
    - Price decreased from 90 000 to 20 000 crystals - The minimal rank required decreased from First Lieutenant (18) to Sergeant-Major (10)
    - Saboteur
    - Price decreased from 140 000 to 20 000 crystals - The minimal rank required decreased from Colonel (22) to Sergeant-Major (10)
    - Booster
    - Price decreased from 200 000 to 20 000 crystals - The minimal rank required decreased from General (26) to Sergeant-Major (10)
    - Defender
    - Price decreased from 200 000 to 20 000 crystals - The minimal rank required decreased from General (26) to Sergeant-Major (10)
    - Trickster
    - Price decreased from 200 000 to 20 000 crystals - The minimal rank required decreased from General (26) to Sergeant-Major (10)
- Battle points and Experience points
  - All modes
    - The number of battle points for assistance in destroying an enemy decreased from 7 to 5
    - TDM mode
    - The number of battle points for destroying an enemy increased from 15 to 20
    - CTF mode
    - The number of battle points for capturing a flag increased from 75 to 80
    - СР mode
    - The number of battle points for capturing a control point decreased from 15 to 10 - The number of battle points for neutralization of a control point decreased from 10 to 5
    - RGB mode
    - The number of battle points for a touchdown increased from 75 to 80
    - TJR mode and JGR mode
    - The number of battle points for destroying a Juggernaut increased from 50 to 80 - The number of experience points for destroying a Juggernaut decreased from 60 to 40 - The number of experience points for assistance in destroying a Juggernaut decreased from 40 to 20
- Minor text changes

### March 3rd (Update 717)

- A new augment for Gauss has been added to Ultra Containers — «Super Solenoids»
  - (Note) This augment increases salvo damage but splash radius is minimal
- For mobile players, the mechanic of earning stars is changed to the one which is used for PC players when you get stars at the end of a battle
- Firebird
  - «Magnetic Mix» augment
    - The heating rate decrease changed from -50% to -70%
    - «Paralyzing mix» augment
    - The heating rate decrease changed from -50% to -70%
    - «Toxic Mix» augment
    - The «Armor-Piercing» status effect is now applied only with critical hits - The «Armor-Piercing» status effect’s duration increased from 1 to 1.5 s - The heating rate decrease changed from -50% to -70% - Removed the decrease of regular damage - Added a decrease of critical damage by -25%
    - «Jamming Mix» augment
    - The «Jammer» status effect is now applied only with critical hits - The «Jammer» status effect’s duration increased from 1 to 3 s - Added a decrease of critical damage by -25% - The heating rate decrease changed from -50% to -70%
- Freeze
  - «Magnetic Mix» augment
    - The freezing rate decrease changed from -50% to -70%
    - «Paralyzing mix» augment
    - The freezing rate decrease changed from -50% to -70%
    - «Toxic Mix» augment
    - The «Armor-Piercing» status effect is now applied only with critical hits - The «Armor-Piercing» status effect’s duration increased from 1 to 1.5 s - The freezing rate decrease changed from -50% to -70% - Removed the decrease of regular damage - Added a decrease of critical damage by -50%
    - «Jamming Mix» augment
    - The «Jammer» status effect is now applied only with critical hits - The «Jammer» status effect’s duration increased from 1 to 3 s - Added a decrease of critical damage by -50% - The freezing rate decrease changed from -50% to -70%
- Hammer
  - The number of pellets decreased from 30 to 20
- Twins
  - «Vaporizer» augment
    - Added a decrease of critical damage by -50%
    - «Cryotron» augment
    - Added a decrease of critical damage by -50%
    - «Magnetron» augment
    - Added a decrease of critical damage by -50%
    - «Tectonic Plasma» augment
    - Added a decrease of critical damage by -50%
    - «Plasma Injector» augment
    - Added a decrease of critical damage by -50%
    - «Plasma Disruptor» augment
    - Added a decrease of critical damage by -50% - The «Jammer» status effect is now applied only with critical hits - The «Jammer» status effect’s duration increased from 1 to 3 s
    - «Pulsar» augment
    - No longer applies the «Burning» status effect
- Scorpion
  - «Missile launcher «Tornado» augment
    - The decrease of salvo reload time changed from -65% to -50% - Added an increase of aiming time by +100%
    - «Incendiary» Shells» augment
    - The «Burning» status effect’s duration, when applied by rocket hits, changed to 1 s
    - «Cryo» Shells» augment
    - The «Freezing» status effect’s duration, when applied by rocket hits, changed to 1 s
    - «EMP shells» augment
    - The «EMP» status effect’s duration, when applied by rocket hits, changed to 1 s
    - «Stun shells» augment
    - The «Stun» status effect’s duration, when applied by rocket hits, changed to 0.4 s
    - «Armour-piercing shells» augment
    - The «Armor-Piercing» status effect’s duration, when applied by rocket hits, changed to 1 s
    - «Jamming shells» augment
    - The «Jammer» status effect’s duration, when applied by rocket hits, changed to 1 s
- Wasp’s overdrive
  - Radius of max damage increased from 14 to 15 m
    - Radius of average damage increased from 15 to 20 m
    - Radius of min damage increased from 30 to 40 m
    - Average damage percentage increased from 10% to 25%
    - Min damage percentage increased from 10% to 25%
    - Radius of applying the «Jammer» status effect increased from 30 to 40 m.
- Paladin’s overdrive
  - No longer applies the «Armor-Piercing» status effect
    - Duration increased from 15 to 20 s

### February 22 (Update 716)

- A new augment for Scorpion has been added to Ultra Containers —«Stun shells»
  - (Note) This augment applies the «Stun» status effect to an opponent with critical damage on arcade shots and with each missile hit
- Hammer
  - «Blunderbuss» augment
    - Removed the increase of critical damage - Removed the increase of the maximum number of pellets per shot - Added an increase of regular damage by +75%
    - «Pulsar» augment
    - Remove the decrease of critical damage chance - No longer applies the «Burning» status effect
    - Coefficient of decreasing shot reload duration when Viking’s overdrive is activated is increased from 0.25 to 0.4
- Twins
  - Critical damage chance decreased from 11% to 8%
- Striker
  - Critical damage decreased from 865-1730 to 640-1280 HP
    - Critical damage chance increased from 12% to 26%
    - Radius of critical splash damage increased from 2 to 8 m
    - Radius of applying status effects with splash damage increased from 2 to 8 m
    - «Stunning Missiles» augment
    - Removed the decrease of the number of rockets per salvo - Applying the status effect with salvo rockets is no longer guaranteed
    - «Armor-Piercing Missiles» augment
    - Removed the decrease of the number of rockets per salvo - Applying the status effect with salvo rockets is no longer guaranteed
    - «Pulsar» augment
    - Remove the decrease of critical damage chance - No longer applies the «Burning» status effect
- Scorpion
  - Regular damage decreased from 585-1170 to 550-1100 HP
    - Critical damage decreased from 750-1500 to 650-1300 HP
    - Damage per rocket decreased from 250-500 to 200-400 HP
    - «Missile launcher «Tornado» augment
    - The decrease of salvo reload time changed from -75% to -65%
- Thunder
  - «Vaccum» shells» augment
    - Added a decrease of regular damage by -20% - Average splash damage percentage increase changed from 220% to 250%
- Wasp’s overdrive
  - Explosive damage decreased from 9999 to 4000 HP
    - Damage radius increased from 20 to 30 m.
    - Radius of max damage increased from 13 to 14 m.
    - Radius of applying the «Burning» status effect decreased from 40 to 30 m.
    - Radius of applying the «Jamming» status effect decreased from 60 to 30 m.
    - Maximum impact force decreased from 1500 to 100
- Juggernaut
  - Top speed increased from 16-18 to 16-20 m/sec
    - Acceleration decreased from 16 to 12
    - Weight increased from 5000 to 5000-6000
- Lifeguard drone
  - Recharge time increased from 12 to 13 seconds
- Defender drone
  - Additional boosted armor supply power increased from 10%-70% to 10%-80%
- Supplies
  - Nuclear Energy supply recharge duration increased from 5 to 15 seconds
- Altered background sounds in the Garage
- Minor text changes

### February 10 (Update 715)

- A new augment for Railgun has been added to Ultra Containers — «Hyperspeed rounds»
  - (Note) Not to be confused with «Hyperspace rounds»! This is a new augment that increases damage over distance but reduces damage up close.
- Hammer
  - Regular damage decreased from 70-140 to 43-86 HP
    - Critical damage increased from 555-1110 to 680-1360 HP
    - Reload between shots decreased from 2.3-1.7 to 1.65-1.00 s.
    - Clip reload time decreased from 7.2-4.4 to 3.3-2.5
    - «High-capacity ammo clip» augment
    - Added an increase of Clip reload time by +20%
    - «Duplet» augment
    - The shot reload decrease changed from -86% to -80%
    - «Blunderbuss» augment
    - The range of maximum damage decrease changed from -50% to -30% - The range of minimum damage decrease changed from -50% to -30% - Removed the increase of critical damage // This change was implemented on Friday, Feb 10th.
- Wasp
  - Overdrive charge by battle points changed from 300 to 100-400
    - Overdrive charge over time changed from 666 to 200-666
- Hopper
  - Overdrive charge by battle points changed from 300 to 100-400
    - Overdrive charge over time changed from 666 to 200-666
- Hornet
  - Overdrive charge by battle points changed from 300 points to 100-400
    - Overdrive charge over time changed from 476 to 200-476
- Viking
  - Overdrive charge by battle points changed from 300 to 100-300
    - Overdrive charge over time changed from 278 to 200-278
- Crusader
  - Overdrive charge by battle points changed from 300 to 100-300
    - Overdrive charge over time changed from 666 to 200-666
- Hunter
  - Overdrive charge by battle points changed from 300 to 100-300
    - Overdrive charge over time changed from 555 to 200-555
- Paladin
  - Overdrive charge by battle points changed from 300 to 100-300
    - Overdrive charge over time changed from 300 to 200-300
- Dictator
  - Overdrive charge by battle points changed from 300 to 100-300
    - Overdrive charge over time changed from 333 to 200-333
- Titan
  - The default skin of the hull is updated to the new HD version
    - Overdrive charge by battle points changed from 300 to 100-200
    - Overdrive charge over time changed from 370 to 200-370
- Ares
  - Overdrive charge by battle points changed from 300 to 100-200
    - Overdrive charge over time changed from 416 to 200-416
- Mammoth
  - Overdrive charge by battle points changed from 300 to 100-200
    - Overdrive charge over time changed from 555 to 200-555
- Lifeguard
  - Drone reload time increased from 9 to 12 s
- Mechanic
  - Healing increased from 500-1000 to 500-2000 HP
- Defender
  - Additional Boosted armor bonus changed from 25-50% to 10%-70%
- Respawn protection in team battles decreased from 5 to 4.5 s

### February 3 (Update 714)

- A new augment for Thunder has been added to Ultra Containers — «Peacekeeper» shells
  - (Note) This augment applies the «Stun» status effect on critical hits
- Updated Garage interface
- Updated icons of augments, skins, shot effects and modules
- Updated the «TAB» scoreboard in the battle interface
- Descriptions of all items are now available through a special pop up
- Position of the dot in the middle of the screen now depends on the camera’s angle
  - (Note) You can disable the dot in the settings, choose the «Battle» section of the menu and disable the «Display a dot in the middle of the screen» option
- Freeze
  - Energy Recharge increased from 111 to 1000 eng/sec
    - Energy consumption increased from 125 to 400 eng/sec
- Twins
  - Critical damage increased from 165-330 to 200-400 HP
    - Critical hit chance decreased from 16% to 11%
    - Projectile speed increased from 50-60 to 50-70 m/sec
- Vulcan
  - Damage per bullet increased from 22-44 to 40-80 HP
    - Critical damage per bullet decreased from 110-220 to 100-200 HP
    - Reload time increased from 75-60 to 150-100 ms
    - Projectile speed increased from 150-200 to 200-250 m/sec
    - Critical hit chance increased from 2% to 4%
- Scorpion
  - Regular damage decreased from 625-1250 to 585-1170 HP
- Terminator (Juggernaut’s turret)
  - Regular damage increased from 840-3360 to 970-3880 HP
    - Critical damage increased from 1680-6720 to 1940-7760
    - Radius of max splash damage increased from 1 to 5 m
    - Radius of average splash damage increased from 2 to 6 m
    - Average splash damage percentage decreased from 90% to 50%
    - Weak splash damage percentage increased from 10% to 50%
- Hornet’s overdrive
  - Duration of the «Armor-Piercing» status effect increased from 3 to 20 s
    - Radius of applying the «Armor-Piercing» status effect decreased from 360 to 60 m
    - Duration of the «Supercharge» status effect increased from 5 to 7 s
- Ares’ overdrive
  - Speed decreased from 25 to 20 m/s
    - Damage/Healing decreased from 300 to 240 hp/sec
- «Heavyweight Construction» augments
  - The increase of hull's weight changed to +50% for all hulls
- Control Points mode
  - Speed of capturing a point is decreased from 20%/s to 15%/s
    - A captured point no longer restores its state itself when the opposite team tried to re-capture it
    - A neutral point restores its neutral state much faster than earlier
    - Speed of getting mode score points for holding a captured point increased from 0.25 per sec to 0.5 per sec
- The number of points required to win in a matchmaking battle increased from 50 to 100
- Siege mode
  - The delay before a new point appears after the previous one was captured is increased from 10 to 17 sec
- Updated regular Containers
  - Added Hammer’s «Jamming Shot» augment
    - Added Ricochet’s «Sizzling Field» augment
    - Added Ricochet’s «Cryo field» augment
    - Added Ricochet’s «Magnetron» augment
    - Added Ricochet’s «Tectonic field» augment
    - Added Ricochet’s «Jamming Field» augment
    - Added Smoky’s «Jamming rounds» augment
    - Added Thunder’s «Salamander» shells» augment
    - Added Thunder’s «Wyvern» shells» augment
    - Added Thunder’s «Corrosion» shells» augment
    - Added Thunder’s «Noise» shells» augment
    - Added Thunder’s «Magneto» shells» augment
    - Added Railgun’s «Jamming shells» augment
    - Added Scorpion’s «Incendiary shells» augment
    - Added Scorpion’s «Cryo shells» augment
    - Removed all drones
- It is no longer possible to report a player in the «Parkour» format of PRO battles
- Minor text changes

### January 20th (Update #713)

- Added multiple Pulsar augments to Ultra Containers
- Firebird
  - Regular damage increased from 400-1100 to 560-1400 hp/s
    - Critical damage decreased from 700-1700 to 610-1700 hp/s
    - Critical hit chance increased from 9% to 10%
- Freeze
  - Regular damage increased from 500-1000 to 600-1200 hp/s
- Smoky
  - «Autocannon» augment
    - The decrease of regular damage changed from -90% to -75%
    - «Incendiary rounds» augment
    - Critical hits now raises the target's temperature by 0.4 instead of 0.3
- Striker
  - Radius of max splash damage increased from 1 to 5 m
    - Radius of average splash damage increased from 2 to 6 m
    - Radius of critical splash damage decreased from 6 to 2 m
- Shaft
  - «Armor-Piercing Sight» augment
    - Additionally applies the «Armor-Piercing» status effect on critical hits for 3 seconds
- Hulls’ weight modified
  - Wasp 1000-2000 → 1500-3000
    - Hopper 1100-2200 → 1500-3000
    - Hornet 1200-2400 → 1500-3000
    - Viking 1300-2600 → 1500-3000
    - Crusader 1400-2800 → 1650-3300
    - Hunter 1500-3000 → 1650-3300
    - Paladin 1600-3200 → 1650-3300
    - Dictator 1700-3400 → 1800-3600
    - Titan 1800-3600 → 2000-4000
    - Ares 1900-3800 → 2000-4000
- Gear Score
  - Increased GS for «Epic» category augments for turrets from 200 to 300 GS
- Updated Shop prices for some platforms

### January 13th (Update #712)

- A new augment for Scorpion has been added to Ultra Containers — «EMP shells»
  - (Note) This augment applies the «EMP» status effect to an opponent on an arcade critical hit and on each rocket hit
- Isida
  - «Vampire Nanobots» augment
    - Recovers HP at the rate of 35% instead of 50% of your base damage per tick
- Hammer
  - «Adaptive reload» augment
    - Changed to Legendary rarity, no longer available for crystals and is added to the «Legendary» category of containers
- Ricochet
  - Projectile speed increased from 100-120 to 150-200 m/sec
    - «Berserk» augment
    - Changed to Legendary rarity, no longer available for crystals and is added to the «Legendary» category of containers
    - «Helios» augment
    - The increase of Projectile speed changed from +100% to +50% - The decrease in Energy recovery rate changed from -27% to -50%
- Striker
  - Min rocket speed decreased from 10-20 to 1 m/sec
    - Max rocket speed decreased from 350 to 300-350 m/sec
    - Rocket acceleration time decreased from 1.5 to 0.7 sec
    - Aiming time decreased from 4.2-2.8 to 3.9-2.6 sec
    - Radius of average splash damage decreased from 5 to 2 m
    - Average splash damage percentage decreased from 90% to 50%
    - Weak splash damage percentage increased from 25% to 50%
    - «Remote rocket explosives» augment
    - Min rocket speed is always 20 m/sec - Rocket acceleration time is always 1.5 sec
    - «Missile launcher «Uranium» augment
    - Changed to Legendary rarity, no longer available for crystals and is added to the «Legendary» category of containers
- Thunder
  - «Hyperspeed» shells» augment
    - Weak damage percentage decreased from 330% to 300%
    - «Vacuum» shells» augment
    - Average splash damage percentage decreased from 250% to 220% - Removed the decrease of Critical hit chance
- Magnum
  - The turret received an aiming indicator which is shown when aiming
    - Amplification increased from 2.0 to 2.9-2.6 sec
    - Number of steps of charging increased from 20 to 100 steps
    - «Mortar» augment
    - Mine lifetime increased from 30 to 60 seconds - Changed to Legendary rarity, no longer available for crystals and is added to the «Legendary» category of containers
- Railgun
  - «Large caliber rounds» augment
    - Changed to Legendary rarity, no longer available for crystals and is added to the «Legendary» category of containers
- Gauss
  - Reload time in sniping mode increased from 7.2-5.0 to 8.4-5.8 sec
    - «Electromagnetic salvo» augment
    - Critical shots apply the «EMP» status effect for 2 seconds - Salvo shots apply the «EMP» status effect for 3 seconds
    - «Armor-Piercing Salvo» augment
    - Critical shots apply the «Armor-Piercing» status effect for 5 seconds - Salvo shots apply the «Armor-Piercing» status effect for 9 seconds
    - Fixed flash color for the «VioleNt» shot effect
- Shaft
  - «Rapid-fire mode» augment
    - Changed to Legendary rarity, no longer available for crystals and is added to the «Legendary» category of containers
- Paladin's Overdrive - Supportive Polarizer
  - Duration decreased from 20 to 15 sec
    - No longer protects from «Burning» and «Freezing» status effects
- Adrenaline augments
  - Firebird — Changed the maximum increase of damage from +39% to +29%
    - Freeze — Changed the maximum increase of damage from +39% to +29%
    - Isida — Changed the maximum increase of damage from +39% to +29%
    - Tesla — Changed the maximum increase of damage from +39% to +29%
    - Hammer — Changed the maximum increase of damage from +36% to +26%
    - Twins — Changed the maximum increase of damage from +36% to +26%
    - Ricochet — Changed the maximum increase of damage from +36% to +26%
    - Smoky — Changed the maximum increase of damage from +33% to +23%
    - Vulcan — Changed the maximum increase of damage from +33% to +23%
    - Striker — Changed the maximum increase of damage from +33% to +23%
    - Thunder — Changed the maximum increase of damage from +33% to +23%
    - Scorpion — Changed the maximum increase of damage from +30% to +20%
    - Magnum — Changed the maximum increase of damage from +30% to +20%
    - Railgun — Changed the maximum increase of damage from +30% to +20%
    - Gauss — Changed the maximum increase of damage from +30% to +20%
    - Shaft — Changed the maximum increase of damage from +30% to +20%
- Gear Score
  - Changed GS for «Brutus» drone from 33-2733 to 33-1733 GS
    - Changed GS for «Rare» category augments for turrets from 300 to 100 GS
    - Changed GS for «Epic» category augments for turrets from 300 to 200 GS
    - Changed GS for «Rare» category augments for hulls from 300 to 100 GS
- Fixed the 3D-model of the «Legacy» skin for Freeze
- Optimized smoke particles of Striker and Magnum shells to increase FPS
- Removed product kits with drones
- Minor changes in texts

## 2022

### December 23th (Update #711)

- New skins have been added to Ultra Containers — Hornet GT and Isida GT
  - (Note) Together with them, the previously added Viking GT and Thunder GT can also be obtained from Ultra Containers
- The default skin of the Isida turret updated to the new HD version
  - (Note) The turret even has a charge indicator now! This skin is so cool, we hope you will like it!
- Firebird
  - Range of min damage increased from 12-15 to 12-20 m.
    - Displaying sight mark distance changed to 17-25 m.
- Freeze
  - Range of min damage increased from 12-15 to 12-20 m.
    - Displaying sight mark distance changed to 17-25 m.
- Isida
  - «Broadband radiators» augment
    - Increased the price from 149,000 to 245,000 crystals
- Tesla
  - Regular damage decreased from 450-900 to 300-600 HP
    - Critical damage decreased from 450-900 to 410-820 HP
    - Chain lightning reload duration decreased from 0.9 to 0.66 s
    - «Minus-field» augment
    - Increased the price from 149,000 to 245,000 crystals
- Hammer
  - Critical damage decreased from 630-1260 to 555-1110 HP
- Smoky
  - «Autocannon» augment
    - Removed the decrease of critical hit chance
    - Removed the decrease of projectile speed
    - Rarity changed to Legendary, no longer available for crystals and is added to the «Legendary» category of containers
- Striker
  - «Remote rocket explosives» augment
    - Increased the price from 149,000 to 245,000 crystals
- Scorpion
  - Arcade reload time increased from 4.5-3.0 to 4.8-3.2 s.
    - Artillery reload time increased from 27-18 to 28.5-19 s.
    - Range of min damage increased from 120-150 to 150-180 m.
- Railgun
  - Shot reload time decreased from 4.4-2.4 to 4.2-2.4 s.
    - Shot warm-up time changed to 1.6-1.2 s.
    - Range of min damage increased from 120-150 to 150-180 m.
    - «Electromagnetic accelerator «Scout» augment
    - Regular damage decrease changed to -15% - Critical damage decrease changed to -15% - Shot warm-up time decrease changed to -15% - Reload time decrease changed to -15%
    - «Round destabilization» augment
    - Regular damage decrease changed to -50% - Critical damage increase changed to +20% - Fixed critical damage chance of 50% - Rarity changed to Legendary, no longer available for crystals and is added to the «Legendary» category of containers
    - «Large caliber rounds» augment
    - Regular damage increase changed to +33% - Critical damage increase changed to +33% - Added a shot warm-up time increase of 25% - Reload time increase changed to +25%
    - «Death Herald» compulsator» augment
    - Removed the shot warm-up time decrease
    - «Hyperspace rounds» augment
    - Damage is again distance-dependent
- Gauss
  - Sniping mode aiming time increased from 1.5-0.6 to 1.5-0.8 s.
    - Sniping mode reload time increased from 6.9-5.0 to 7.2-5.0 s.
- Crisis
  - Disabled supply auto-activation
    - (Note) We have seen your feedback asking for an option to disable supply auto-activation. While analyzing it, we noticed that most of such requests come from players who use the Crisis drone. We decided to disable this feature just for this drone instead of adding an option to disable or enable it.
- The radar shows all tanks that are within a radius of 90 meters around the player's tank (instead of 60 m.)
  - (Note) Some may have noticed that the radar began showing targets further already last week. After this experiment, we decided to implement this change to the game officially. Now, the difference between the radiuses of radar circles is 30 m.
- Fixed Tesla Legacy skin’s bug — the claws of the emitters were moving in the wrong direction, not like it works on the HD skin
- Minor changes in in-game texts

### December 16th (Update #710)

- A new augment for Scorpion has been added to Ultra Containers — «Armour-piercing shells»
  - (Note) This augment applies the «Armour-piercing» on critical arcade shots and with each rocket.
- Smoky
  - Fixed the bug when the «Assault rounds» augment was dealing critical damage, when it shouldn’t
    - «Incendiary rounds» augment
    - Legendary augment now, no longer available for crystals and is added to the «Legendary» category of containers
- Railgun
  - Regular damage increased from 625-1250 to 670-1340 HP
    - Crticial damage increased from 755-1510 to 935-1870 HP
    - Turret’s damage now depends on the distance between you and a target.
    - 100% of damage is dealt if the distance is less or equal to 80-100 m. - If the distance is between 80-100 m. and 120-150 m., the damage is decreasing respectively. - If the distance is more than 120-150 m., 50% of the maximum damage is dealt. - (Note) We have argued for a long time about whether to introduce distance-based damage reduction for the classic version of Railgun. Our final decision is that without this feature, the turret turns out to be either extremely powerful at all distances or completely irrelevant at any distance, except for the large ones. This dependence of damage on the distance to a target makes the turret be much more flexible in balancing. In the «SPORT» format, the old version of this turret remains.
    - Changed the coefficient of the decrease of the Railgun’s shot reload time when Viking’s overdrive is activated from 0.25 to 0.3
    - (Note) This reduces the rate of fire increase
    - «Round stabilization» augment
    - Removed the regular damage increase - Added a regular damage decrease of -5% - The Critical damage decrease is changed from -9% to -32% - Damage is not distance-dependent
    - «Electromagnetic accelerator «Scout» augment
    - The Regular damage decrease is changed from -28% to -7% - The Critical damage decrease is changed from -20% to -19% - The Shot warmup time decrease is changed from -25% to -30%
    - «Round destabilization» augment
    - The Critical damage increase is changed from +100% to +80%
    - «Large caliber rounds» augment
    - The Regular damage increase is changed from +20% to +12% - Added a Critical damage increase of +7% - The Reload time increase changed from +50% to +15%
    - «Death Herald» compulsator» augment
    - Legendary augment now, no longer available for crystals and is added to the «Legendary» category of containers
    - «Hyperspace rounds» augment
    - Damage is not distance-dependent
- Magnum
  - Changed the coefficient of the decrease of the Magnum’s shot reload time when Viking’s overdrive is activated from 0.25 to 0.4
- Battle interface is updated
  - The first one is where you have the main elements of the HUD at the corners of the screen. Health and reload bars are beneath your tank, and above them, we left a place for supplies and status effects. This version is used for modern shooter games.
    - The second variant is where you have the main elements packed in the center of the screen and is more similar to the old one. The bars are located on the tank and adapt to the game window’s width. Right below them, are the supplies and status effects.
    - You can choose the best one in Settings.
    - (Note) The new TAB scoreboard is still in development.
- Added an option for supply auto-activation. You can choose which supply to activate next, just press the button, and it will be activated for you automatically as soon as the cooldown is over.
  - (Note) The main difference between Android and HTML versions of this feature is that we won’t activate your supplies without your request, and they will only be consumed when needed.
- Removed some in-battle notifications, so they do not overlap important elements of the interface and other tanks
- Fixed the bug with the size of a destroyed tank
  - (Note) Now it is not that small.

### December 9th (Update #709)

- Changed the order of buttons in the Lobby: Containers > Missions > Garage
  - (Note) This change is needed for new players, according to our research on how they complete the new contextual tutorial. We are also working on a new Lobby screen.
- Added short GIF-videos and screenshots to steps of the new contextual tutorial to make it easier and understandable
- Ricochet
  - «Sizzling Field» augment
    - Removed splash damage - Removed the limit on the number of ricochets - Critical shots apply the «Burning» status effect for 4 seconds - Each shot after ricochet applies the «Burning» status effect for 2 seconds - Each shot after ricochet, if critical, applies the «Burning» status effect for 10 seconds
    - «Cryo field» augment
    - Removed splash damage - Removed the limit on the number of ricochets - Critical shots apply the «Freezing» status effect for 10 seconds - Each shot after ricochet applies the «Freezing» status effect for 2 seconds - Each shot after ricochet, if critical, applies the «Freezing» status effect for 10 seconds
    - «Magnetron» augment
    - Removed splash damage - Removed the limit on the number of ricochets - Critical shots apply the «EMP» status effect for 2 seconds - Each shot after ricochet applies the «EMP» status effect for 1 second - Each shot after ricochet, if critical, applies the «EMP» status effect for 3 seconds
    - «Tectonic field» augment
    - Removed splash damage - Removed the limit on the number of ricochets - Critical shots apply the «Stun» status effect for 1 second - Each shot after ricochet applies the «Stun» status effect for 0.4 seconds - Each shot after ricochet, if critical, applies the «Stun» status effect for 1.5 seconds
    - «Super-smart Minus-Field» augment
    - Removed splash damage - Removed the limit on the number of ricochets - Critical shots apply the «Armor-Piercing» status effect for 5 seconds - Each shot after ricochet applies the «Armor-Piercing» status effect for 1.5 seconds - Each shot after ricochet, if critical, applies the «Armor-Piercing» status effect for 9 seconds
- Smoky
  - «Cryo rounds» augment
    - Legendary augment now, no longer available for crystals and is added to the «Legendary» category of containers
    - «Assault rounds» augment
    - Added a decrease of shot reload duration by 10% - Increased the price from 96,000 to 245,000 crystals
    - «High-precision aiming system» augment
    - Changed the increase of Regular damage from +32% to +40% - Changed the increase of Shot reload time from +40% to +20% - Increased the price from 149,000 to 245,000 crystals
- Viking’s overdrive and Scorpion
  - Changed the coefficient of the decrease of the Scorpion’s shot reload time when Viking’s overdrive is activated from 0.25 to 0.4
    - (Note) This changes the Rate of fire increase from +75% to +60%
- Terminator
  - Critical damage chance changed from 1% to 15%
    - The pause between salvo rockets increased from 0.15 to 0.3 seconds
    - Aiming time decreased to 0.8 seconds
    - Salvo reload time decreased to 0.8 seconds
- Added a new type of daily mission «Earn X crystals in the Y mode»
- Regular containers can no longer be purchased
- Added smoke effects for the default version of Dictator
- Improved the texture of a destroyed tank

### November 11th (Update #707)

- A new augment for Thunder has been added to the Ultra Containers — «Magneto»
  - (Note) This augment applies the EMP status effect to all targets with within the splash damage radius
- Tesla
  - «Exothermic Lightning» Augment
    - Ball lightning ignites a target with 100% temperature within a radius of 12 metres from the explosion
    - «Endothermic Lightning» augment
    - Ball lightning freezes a target within a radius of 12 metres from the explosion
    - «Superconducting discharge» augment
    - Ball lightning applies the «EMP» status effect for 3 seconds within a radius of 12 metres from the explosion
    - «Shocking lightning» augment
    - Ball lightning applies the «Stun» status effect for 1.5 seconds within a radius of 12 metres from the explosion
    - «Armour-piercing discharge» augment
    - Ball lightning applies the «Armour-piercing» status effect for 9 seconds within a radius of 12 metres from the explosion
    - «Jamming discharge» augment
    - Ball lightning applies the «Jammer» status effect within a radius of 12 metres from the explosion
- Railgun
  - «Hyperspace rounds» augment
    - Legendary augment now, no longer available for crystals and is added to the «Legendary» category of containers - No longer increases the shot warmup time
- Crusader
  - Impact force of Crusader's Overdrive icicle is reduced by ten times
- Fixed a bug that caused shooting to be unavailable after changing equipment in a battle
- Fixed a bug that crashed the game client when you enter the «Settings» menu while playing via VK Play Machine
- The Viking GT skin received an update that increased its size to the regular Viking’s skin size
  - (Note) This is purely a visual change and does not increase the size of the skin's hitbox in any way.
- Texture smoothing disabled for all Legacy skins
  - (Note) Skins now really look like they used to in the Flash version of the game
- The «Common» rarity category has been completely removed from Ultra Containers, starting with the new version of the containers
- Protection modules
  - All Mk1 and Mk2 protection modules are available starting from the rank of First Sergeant (9)

### October 28th (Update #705)

- Some rare skins haven been added to Ultra Containers — Wasp Demonic and Firebird Demonic
- Fixed the tank controls bug; if you have only «Keyboard» in Settings, your mouse won’t be active
- You can no longer unequip drones
  - (Note) If you want to save batteries, equip the «Brutus» drone
    - To get access to the following supplies, you need to have a drone equipped: «Boosted Armor», «Boosted Damage», and «Speed boost».
- Hammer
  - Recoil per shot decreased from 1.5 - 2.4 to 1 - 2
    - «Duplet» augment
    - Removed the increase of horizontal scatter angle
    - «Adaptive reload» augment
    - The increase of clip reload time changed from +10% to +25%
    - «Dragon's Breath»
    - Legendary augment now, no longer available for crystals and is added to the «Legendary» category of containers - If the last shot in a clip hits an enemy, it raises their temperature by +0.4 - If the last shot in a clip is critical and hits an enemy, it raises their temperature by +1
    - «Magnetic Pellets» augment
    - Critical shots apply the «EMP» status effect for 1 second - Last shot in a clip applies the «EMP» status effect for 2 seconds - Last shot in a clip, if critical, applies the «EMP» status effect for 3 seconds
    - «Stunning Pellets» augment
    - Critical shots apply the «Stun» status effect for 0.8 seconds - Last shot in a clip applies the «Stun» status effect for 1 seconds - Last shot in a clip, if critical, applies the «Stun» status effect for 1.5 seconds
    - «Armor-Piercing Shot» augment
    - Critical shots apply the «Armor-Piercing» status effect for 3 seconds - Last shot in a clip applies the «Armor-Piercing» status effect for 5 seconds - Last shot in a clip, if critical, applies the «Armor-Piercing» status effect for 9 seconds
    - «Blunderbuss» augment
    - Changed Critical damage increase from +70% to +100% - Added a decrease of max and min damage ranges by 50%
- Twins
  - «Vaporizer» augment
    - Critical hits increase the target's temperature by +0.4 instead of +0.5 - Removed the decrease to projectile speed - Removed the decrease to critical damage
    - «Cryotron» augment
    - Critical hits decrease the target's temperature by -1.0 instead of -0.5 - Removed the increase to minimum damage range
    - «Magnetron» augment
    - Duration of the «EMP» status effect decreased from 2 to 1 second - Removed the increase to minimum damage range - Removed the decrease to critical damage
    - «Tectonic Plasma»
    - Removed the decrease to projectile speed
    - «Plasma Injector» augment
    - Duration of the «Armor-Piercing» status effect increased from 1 to 1.5 seconds - No longer removes Splash damage - Removed the increase to projectile speed
    - «Plasma Disruptor» augment
    - Removed the increase to projectile speed - Removed the increase to minimum damage range - Removed the decrease to reload time
- Viking
  - Overdrive duration increased from 7 to 8 seconds
- Removed the daily mission to win X battles
- The number of stars you get for completing a weekly mission decreased to 100
- The daily mission to finish X battles now requires one less battle to finish: 2-3-4 battles instead of 3-4-5 battles
- PRO battles
  - Fund growth ratio in PRO battles at low ranks increased up to 3 times
    - (Note) For players with the «Legend» rank, the fund growth rate wasn’t changed
    - Daily limit of crystals decreased to 15 000
    - Daily limit of crystals for players with «Premium Pass» decreased to 66 000
    - Daily limit of experience decreased to 10 000
    - Daily limit of experience for players with «Premium Pass» decreased to 22 000
- The following augments for the «Twins» turret have been added to Containers: «Tectonic Plasma», «Plasma Injector», «Plasma Disruptor», and «Plasma Turbo Accelerators»

### October 21st (Update #704)

- A new augment for Scorpion has been added to Ultra Containers — «Cryo Shells»
  - (Note) This augment applies «Freezing» status effect on critical hits and rocket salvos
- Hammer
  - Range of min damage increased from 40-50 to 50-60 m.
- Twins
  - Range of min damage increased from 40-50 to 50-60 m.
- Ricochet
  - Range of min damage increased from 40-50 to 50-60 m.
- Smoky
  - Projectile speed decreased from 350-350 to 300-350 m/sec.
    - (Note) Previously all modifications had the same value — 350. Now Mk1 has 300 and MkMAX has 350. Players quite often confuse this writing of parameters with a spread of possible values, as if it would be a random value from this range. We no longer use random values from ranges, now this writing always means that the first number is a value for Mk1 and the second value is a value for MkMAX
    - «Rubberized Rounds» augment
    - Projectile speed increased by 100%
    - «Sorted Ammunition» augment
    - Reload time decreased by 10%
- Striker
  - «Stunning Missiles» augment
    - Duration of the «Stun» status effect applied by a critical hit is increased from 1 to 1.5 s. - Duration of the «Stun» status effect applied by a rocket salvo is decreased from 1 to 0.8 s.
    - «Armor-Piercing Missiles» augment
    - Duration of the «Armor-Piercing» status effect applied by a critical hit is increased from 5 to 9 s. - Duration of the «Armor-Piercing» status effect applied by a rocket salvo is decreased from 5 to 3 s.
    - (Note) We would like to try having differentiated status effect duration for equipment that have multiple ways of applying status effects - randomly and guaranteed. Striker will be used as a test stand for it. An interesting feature of Striker is that it is the only turret than can deal critical damage with an alternative way of shooting.
- Vulcan
  - Projectile speed increased from 150-150 to 150-200 m/sec.
- Thunder
  - Projectile speed decreased from 350 to 300-350 m/sec.
    - «Hyperspeed» shells» augment
    - Boost of weak damage is decreased from +400% to +330%
- Scorpion
  - Arcade reload time increased from 4.2 - 2.8 to 4.5 - 3.0 s.
    - Salvo reload time increased from 24 - 16 to 27 - 18 s.
    - «Missile launcher «Swarm» augment
    - Reduction of salvo reload time decreased from -50% to -25% - Reduction of aiming time decreased from -75% to -50%
- Railgun
  - «Electromagnetic accelerator «Scout» augment
    - Reduction of shot warmup time decreased from -50% to -25%
- Gauss
  - Reload time sniping mode increased from 6.6 - 4.8 to 6.9 - 5.0 s.
- Wasp
  - Overdrive charge from battle points decreased from 333 to 300 unit/point
    - Overdrive charge time decreased from 180 to 150 s.
    - (Note) We decrease overdrive charge from battle points. We want to balance this parameter so that overdrives are not used simultaneously in a battle, but at the same time successful players cannot significantly outperform other players in the number of overdrives they can use.
- Hopper
  - Overdrive charge from battle points decreased from 333 to 300 unit/point
    - Overdrive charge time decreased from 180 to 150 s.
- Hornet
  - Overdrive charge from battle points decreased from 333 to 300 unit/point
    - Overdrive charge time decreased from 240 to 210 s.
- Viking
  - Overdrive charge from battle points decreased from 333 to 300 unit/point
- Crusader
  - Overdrive charge from battle points decreased from 333 to 300 unit/point
    - Overdrive charge time decreased from 180 to 150 s.
- Hunter
  - Overdrive charge from battle points decreased from 333 to 300 unit/point
- Paladin
  - Overdrive charge from battle points decreased from 333 to 300 unit/point
    - Overdrive charge time decreased from 360 to 330 s.
- Dictator
  - Overdrive charge from battle points decreased from 333 to 300 unit/point
- Titan
  - Overdrive charge from battle points decreased from 333 to 300 unit/point
    - Overdrive charge time decreased from 300 to 270 s.
- Ares
  - Overdrive charge from battle points decreased from 333 to 300 unit/point
    - Overdrive charge time increased from 180 to 240 s.
- Mammoth
  - Overdrive charge from battle points decreased from 333 to 300 unit/point
    - Overdrive duration increased from 9 to 15 s.
- The number of stars players get no longer depends on which team won
  - 1 place — 3 stars
    - 2 place — 3 stars
    - 3 place — 3 stars
    - 4 place — 2 stars
    - 5 place — 2 stars
    - 6 place — 2 stars
    - 7 place — 2 stars
    - 8 place — 1 star
    - 9 place — 1 star
    - 10 place — 1 star
    - 11 place — 1 star
    - 12 place — 1 star
    - 13 place — 1 star
    - 14 place — 1 star
    - (Note) Now the only thing you need to earn more stars is to show your best till the end of a battle and it doesn’t matter in which team you are. Let's see if this will affect the problem of early (before the balancer reacts) exits from battles if a player is in a weak team.
- Fixed the animation issue with the Ricochet HD skin that caused the turret energy tank to keep rotating after reload

### October 14th (Update #703)

- A new augment for Scorpion has been added to the Ultra Containers — «Incendiary shells»
  - (Note) There are two ways this augment ignites a target: critical damage from an arcade shot and any damage from a rocket salvo.
- The default skin of the Ricochet turret updated to the new HD version
- An experimental change: Smoky got an increase in projectile radius from 1 to 2 meters
  - (Note) This may affect projectiles flying over tanks, when an aiming system launches it in the direction of a turret, not a hull, or not. We need your feedback to find out if this change is helpful. We do not plan to fix this behavior completely, as it is a part of game balance for turrets with such projectile mechanics.
- Updated Scorpion’s rocket shot effect
  - (Note) It's not just a cosmetic fix, it should also have a positive effect on the performance. We tested it on a situation when there are more than 30 rockets launched at the same time.
- Updated Skin containers: added GT skins and Scorpion XT
- Updated shop prices for some regions

### September 23rd (Update #701)

- A new shot effect for Twins has been added to Ultra Containers — «Blaster»
  - (Note) This is an altered version of Ricochet’s «Blaster» shot effect but with the color changed to match Twins’ traditional shot effect. We recommend using it with the «Plasma Turbo Accelerators» augment.
- Smoky, Vulcan and Thunder
  - Range of minimum damage changed from 80-120 to 100-120 m.
    - (Note) This update mainly affects the Mk1 modifications of these turrets and has no effect on the MAX modifications.
- Shaft
  - «Rapid-fire mode» augment
    - No longer affects range of minimum and maximum damage in arcade mode - (Note) There may be more changes to the parameters of this augment later. That's just how much it changes the turret's gameplay.
- Updated prices in the Shop for some regions.

### September 2nd (Update #699)

- «Steampunk» set of skins for Twins and Mammoth added to the Ultra Containers
- A player stops getting experience points once they rank up and until they leave the battle
  - (Note) This feature works only for the matchmaking battles. It is required to simplify the process of adding the contextual tutorial. It should prevent newcomers from getting new ranks multiple times in the same battle.
- Forest MM map is replaced with the updated Forest MM Remastered version
- The contextual tutorial is added to the game
  - (Note) To collect your feedback and to release the tutorial as soon as possible, we haven’t added the option to skip tutorial steps yet
- Special tutorial missions added to the game
  - For completing each of them, you get 1 Regular Container
    - For completing all of them, you get 100 tankoins
    - (Note) All players can obtain rewards for these missions, not just the newcomers
- First modifications of all turrets and hulls can no longer be purchased in the Garage for crystals, except for the following turrets: Smoky, Twins and Firebird, and for the following hulls: Viking, Crusader and Hunter.
- Ricochet’s «Helios» augment
  - Energy consumed per shot decrease changed from -10% to -15%
    - Energy recharge speed decreased by 27%
- Striker
  - «Missile launcher «Hunter» augment
    - Aiming time decrease changed from -60% to -75% - Aiming recovery time decreased by 50%
    - «Stunning Missiles» augment
    - This augment’s settings repeat settings of the «Missile launcher «Hunter» augment - Critical hits can apply the «Stun» status effect - Status effect duration increased from 0.4 s. to 1 s.
    - «Armor-Piercing Missiles» augment
    - This augment’s settings repeat settings of the «Missile launcher «Hunter» augment - Critical hits can apply the «Armor-Piercing» status effect - Status effect duration increased from 2 s. to 5 s.
- Thunder
  - «Hyperspeed» shells» augment
    - Removed the -25% decrease of the range of minimum damage
- Shaft
  - «Rapid-fire mode» augment
    - Energy recovery rate increase changed from +167% to +66% - Energy consumed per arcade shot decreased from 384 to 370. - Maximum sniping damage decrease changed from -66% to -40%
- The initial amount of crystals in a new account changed from 1000 to 0 crystals
- All default protection modules Mk1 and Mk2 are now available for the «First Sergeant» rank
- «Capture the Flag» and «Capture Points» are now available for newcomers earlier than the «Team Deathmatch» mode
- The weekly «Get into the TOP-3» mission is removed. You can no longer get it.
- Fixed the bug with Chaos damage being counted as Critical damage in missions
- Now inactive accounts need to play 3 battles in order to get access, not only to the Lobby chat but to the Battle chats too.

### August 26th (Update #698)

- New skin added to the updated Ultra Containers — Scorpion XT
- The «Scorpion» turret added to the regular Containers in «Epic» category. With this update, your current and regular Containers will become old regular Containers. You can only get Scorpion from containers you obtain after the release.
- Tesla
  - Critical damage chance increased from 12% to 16%
- Gauss
  - Critical damage decreased from 665-1330 to 580-1160 HP
    - Critical damage chance increased from 12% to 16%
    - Damage sniping mode decreased from 900-1800 to 850-1700
    - Reload time sniping mode increased from 4.2-2.8 to 6.6-4.8 s.
    - Aiming time decreased from 3-2 to 1.5-0.6 s.
    - Aiming recovery time decreased from 0.7 to 0.6 s.
    - Range of max damage increased from 60-80 to 80-100 m.
    - Range of min damage increased from 80-120 to 120-150 m.
    - Weak damage percentage increased from 25% to 50%
    - «Electromagnetic salvo» and «Armor-Piercing Salvo» augments can now apply status effect not only with salvo shots but with critical damage too
    - (Note) Gauss will significantly change after this update, and here is why. Gauss was supposed to be a mobile sniper. Instead, we got a version that needs to stop and stand in a place for a long time to aim. Aiming in movement takes time, and the target hold time is too short. We got this version after a batch of changes that were needed to fix other problems. For example, when we added augments for this turret, we wanted players to use the turret this way: you deal most of the damage with a salvo shot and finish them with an arcade shot. Therefore, a variant with a long reload after a salvo was not used, because then the status effect would definitely finish before the turret reload. Now for all status-related augments, we add an option to apply status effects with critical shots, randomly, and you can still apply it guaranteed (for example, with a pellet from the last shot of Hammer or with a salvo of Gauss). Thus, it became possible to implement the combination with finishing opponents in the reverse order. First, the enemy receives critical damage with a status effect applied, and then you finish them with a salvo. Thanks to this model, now the Gauss turret can be returned to the original idea of being a mobile sniper. It will not take much time to aim and shoot a salvo, but the reload time got increased. If earlier Gauss was similar in gameplay to Shaft, now it will be more like Railgun. With an interesting addition. If a player carefully monitors the amount of damage dealt to a target and the use of the «Repair kit» supply, then the player will always be able to make the right decision when to finish the target with a salvo and safely retire for a long cooldown.
- Shaft
  - Range of max damage increased from 60-80 to 80-100 m.
    - Range of min damage increased from 80-120 to 120-150 m.
    - Weak damage percentage increased from 25% to 50%
- Game modes
  - The number of points your team gets for capturing a flag in the Assault (ASL) mode increased from 6 to 10
    - (Note) After adding a huge delay before removing a destroyed tank from a map, it became easier to defend your base in this mode. Increasing the number of points for an attacking team should compensate for this.
- PRO battle chat improvements
  - Removed the following chat channels for the PRO battle formats:
    - Classic - Railgun - Sport - Parkour
    - When you enter the game, the «General» chat channel is opened by default
    - When you leave a PRO battle, the «General» chat channel is opened by default
- Mammoth’s overdrive can now move destroyed tanks
  - (Note) To make this overdrive work as it is designed to work, we decided to add a feature of throwing away destroyed tanks when in contact with them. This looks so epic, you can now juggle with enemy tanks.
- The «Jack-in-the-box» effect now also appears when finishing an opponent with Chaos damage
  - (Note) Did you think that we added Chaos damage to add protection from overdrives later? Huh! We just enjoy how cool it looks when turrets fly.

### August 19th (Update #697)

- Updated Skin Container
  - In the new skin container you will find the following new skins: Hammer Legacy, Shaft Legacy, Titan Legacy, Dictator Legacy
- Tesla
  - Exothermic lightning, Endothermic lightning, Superconducting discharge, Shocking lightning, Armour-piercing discharge — now all these augments work the same way, applying different status effects. Augments add ricochet ability to ball lightning and an ability to apply status effect on critical hit and with ball lightning. Maximum radius for applying status effect with ball lightning decreased from 8 to 5 metres.
    - Exothermic lightning
    - Heating coefficient decreased from +1 to +0.4
    - Shocking lightning
    - Status effect duration decreased from 2 to 1 second
    - Armour-piercing discharge\*\*
    - Status effect duration increased from 2 to 5 seconds
    - Jamming discharge
    - Each shot applies the «Jammer» status effect. - Status effect duration decreased from 7 to 3 seconds
- Scorpion
  - Range of max damage decreased from 120-150 to 80-100 metres.
    - Range of min damage decreased from 180-210 to 120-150 metres.
- All Pulsar augments now decrease critical hit chance by 30% instead of 50%.
- For all hulls the delay before overdrive activation increased from 1.2 to 1.3 seconds.
- Updated loading tips
  - (Note) Now tips depend on player’s rank. Some of them are only shown to newbies and some are only for legends.
- Fixed the bug that let tankers change their equipment, ignoring the cooldown in mobile version
- Hover hulls’ corpses now behave the same way as other destroyed hulls
- Hover hulls no longer slide around the ground when falling to the ground after getting the «Stun» status effect applied
  - (Note) This will let us fix the bug when hovering tanks were not getting any damage after getting the «Stun» status effect applied due to sliding far away from the point from where it was applied.
- Sandbox Remastered map got an evening theme
- Weakened contrast and orange tint on evening theme maps
- Fixed the bug with a notification icon being shown for unavailable items
- Supplies notification icon now only appears when you unlock a new type of supply
- You will no longer get a notification icon each time you get new units of supplies
- Improved resources loading

### August 12th (Update #696)

- New augment for Thunder added to the updated Ultra Containers — «Strict Ammunition Load»
  - (Note) This augment guarantees critical damage on the first shot after you spawn in a map, and every third shot thereafter.
- Improved sorting in TAB score menu — players in the TAB menu are now sorted correctly by battle points, kills, deaths and so on.
- Evening theme added for multiple matchmaking maps
- Added new ambient sound for all maps
  - (Note) Ambient sound now depends on a map’s theme.
- When a player catches a Container, the system message says that they caught a Container, not a gold box
- Improved the anti-cheat system for Striker, Gauss, Terminator and Scorpion
- Added an option to enable boosted funds and experience in PRO battles during events

### August 5th (Update #695)

- New augment for Thunder added to the updated Ultra Containers — «Noise» shells
  - (Note) With each shot, this augment applies the «Jammer» status effect to all the affected targets for 3 seconds. Only direct shots apply the status effect
- New augments for Firebird added to the Legendary category of the updated Regular Containers: Magnetic mix, Paralyzing mix, Toxic mix, and Jamming mix
- Added «Megagold» — a rare gold box that gives you 10 000 crystals
  - (Note) This type of gold box is available in all matchmaking battles, not only in just event modes. However, it appears only during some special events like Discount Weekend
- Added the «Jack-in-the-box» effect
- Changed color indication of damage types. Now, Orange color means critical damage and Red implies that a target is destroyed. You can observe that a target is destroyed with the critical damage by seeing the «Jack-in-the-box» effect in action
- Highland map got the day theme back
  - (Note) Evening version will be added as a separate theme in one of the upcoming updates
- Added night themes for all matchmaking maps
  - (Note) Except Iran. Instead of a night theme, there will be an evening one
- Reduced the contrast between dark and light areas on the night theme maps
  - (Note) Night is more like evening now! We hope that it be will much more comfortable to play on Night maps now
- Increased the delay before removing a hull after the tank is destroyed
  - (Note) Once upon a time, tanks did not disappear immediately after being destroyed, and the tactic of blocking opponents with a destroyed hull was a good one. With the introduction of the «Jack-in-the-box» effect, we had to increase the delay so that the detached turret has time to return from the flight and hit the ground. We decided to increase the duration when a destroyed tank remains on the ground to the maximum possible (until a new tank appears) to explore all the gameplay possibilities of this mechanic.
    - It will be unusual to play this version of the game, but we ask you to take the change as seriously as possible. Evaluate both pros and cons of such settings. We will be reading your feedback closely.
- Hammer
  - Critical hit chance decreased from 12% to 10%
    - «Dragon Breath» augment
    - The power of setting fire to an opponent on critical hits decreased from 100% to 40%. - No longer decreases critical damage
    - «Wyvern’s Breath» augment
    - Applies the «Freezing» status effect: both on critical hit and by a pellet from the last shot in the clip - No longer decreases clip reload duration
    - «Magnetic Pellets» augment
    - Applies the «EMP» status effect: both on critical hit and by a pellet from the last shot in the clip - No longer decreases clip reload duration
    - «Stunning Pellets» augment
    - Applies the «Stun» status effect: both on critical hit and by a pellet from the last shot in the clip - No longer decreases clip reload duration - Duration of the «Stun» status effect is decreased from 2 seconds to 1 second
    - «Armor-Piercing Shot» augment
    - Applies the «Armor-Piercing» status effect: both on critical hit and by a pellet from the last shot in the clip - No longer decreases clip reload duration
    - «Jamming Shot» augment
    - Applies the «Jammer» status effect: both on critical hit and by a pellet from the last shot in the clip - Duration of the «Jammer» status effect is decreased from 5 seconds to 3 seconds - No longer decreases clip reload duration
- Thunder
  - «Hyperspeed» shells» augment
    - The decrease in tange of minimum damage changed from -50% to -25% - Projectile speed increased from +100% to +200%
- Gauss
  - Projectile speed increased from 200 m/s to 300 m/s
    - Recoil in arcade mode decreased from 1,1-2,2 to 1,0-2,0
    - Enabled chats between teams. Use the «TAB» key to switch between chat modes
- Added a new type of damage — «Chaos» damage
  - This type of damage can neither be increased by boosters nor can be decreased by protection
    - The following entities inflict the «Chaos» damage:
    - Wasp’s overdrive - Hopper’s overdrive - Crusader’s overdrive - Hunter’s overdrive - Ares’ overdrive - Mammoth’s overdrive - Exploding a tank with the «Blaster» drone - Gold box meteorite
    - Added a special icon for «Chaos» damage»
    - (Note) Hopper’s, Hunter’s and Crusader’s overdrives already had the same rules as «Chaos» damage. The introduction of «Chaos» damage won’t affect them in any way, but now they work the same way as other overdrives.
- Fixed the bug that was making it impossible to create an MM group for players who play the game on partner websites
- You can now choose which mode to play right after you click on the «Play» button
- Added an auto scroll for list of battles and list of map themes in PRO battles
- Changed the design of additional settings screen in PRO battles
- The step of calculating the angle of automatic horizontal aim for mobile players has been reduced from 1 to 0.5 degrees
  - (Note) It means that maximum horizontal aim angle is decreased by two: from 4 to 2 degrees
- Updated the flags, now with the new Tanki logo

### July 22nd (Update #694)

- New augment for Thunder added to the updated Ultra Containers — «Hyperspeed shells»
  - (Note) The shell damage is reduced by 50% but only at close range. The greater the distance, the more damage you deal, up to 400% of regular damage. Shells fly faster, but critical damage is completely removed.
- Night themes for the following maps are added to matchmaking format:
  - Aleksandrovsk
    - Barda
    - Bobruisk
    - Berlin
    - Brest
    - Bridges
    - Chernobyl
    - Chernushka
    - Cologne
    - Cross
- Evening theme for the Highland map as default one
- Thunder
  - Critical damage decreased from 615-1230 to 600-1200 HP
    - «Salamander» shells, «Wyvern» shells, «Magneto» shells, «Peacekeeper» shells, and «Corrosion» shells augments
    - Critical damage decreased by 25% - Critical splash radius increased from 1 to 12 m. - (Note) Status effects are now applied to all targets in critical splash radius, not limited to just one opponent. This variant of settings fits the turret better.
- Scorpion
  - Regular damage decreased from 650-1300 to 625-1250
    - Critical damage increased from 700-1400 to 750-1500
    - If a target is destroyed, rockets will now be flying to the point where the tank was destroyed
    - (Note) Rockets will no longer fly towards the sky
- Added a camera’s center point to the battle UI. You can disable it in the «Battle» section of the settings
- Updated Sandbox Remastered map
- Updated the Lobby garage screen to fit the style of the remastered maps
  - (Note) Moreover, the Lobby garage now works fine on 21:9 monitors. However, if you have an even wider monitor, then, firstly, we envy you, and secondly, we ask you to understand and forgive us as we cannot make the Lobby garage even wider.
- You can now see a mirrored reflection of your tank in the garage
  - (Note) We agree that there is too much unused space in the HTML5’s version of garage. We had an idea of adding some effects (like glow or shadow) to the buttons, but we are afraid that the buttons would no longer be readable. We hope that the mirror floor in the garage is minimalistic enough to make the feeling of emptiness disappear.
- Fixed the map theme filter in the PRO-battle creation screen. When changing the filtered theme, the current chosen map is changed to their equivalent in the new theme. If it doesn't exist there, the previous choice is kept.
- Fixed the battle mode filter reset in PRO battles, so when you try to create a battle but then cancel the process, DM mode is no longer chosen automatically.
- Fixed the problems with ambient music in the PRO battles screen
- Volume level of music in the Sign up/Log in screen is reduced to the volume level used for other sounds
- Fixed the bug that caused all sound settings to reset if you click on the disable sound button in the Sign up/Log in screen
  - (Note) Players who often change accounts came across this bug
- The following Challenge paints are added to Regular and Ultra containers:
  - Barricade tape
    - Red Marks
    - Target
    - Tetris
    - Masquerade
- Updated tankoin and crystal packs in the Shop. We haven’t changed the prices of any tankoin or crystal offers; we just changed the quantity per package

### July 1st (Update #693)

- New augment for Thunder added to the updated UItra Containers — «Salamander shells»
  - (Note) Critical hit ignites the target. Critical damage will be dealt only to the first affected target, but other tanks in the range of splash damage will be ignited too
- The default skin of the Thunder turret updated to the new HD version
- Updated previews of some maps in PRO battles
- Updated Shop prices for some regions

### June 24th (Update #692)

- New turret added to Ultra Containers — Scorpion Mk1
  - (Note) That’s the Early Access to the «Scorpion» turret. Its balance and visuals are subject to change, and its mechanics may be improved.
- Improved notification icons in the Lobby
  - Now an icon disappears after 5 seconds in the menu, if the player clicks on a button with an updated item, or if the player exits this screen to another screen
    - Missions menu notification icon disappears too
- Tesla
  - Added animation for the turret’s claws when shooting
- Ricochet
  - «Destabilized Plasma» augment
    - Shots are now able to ricochet once - Range of average damage decreased from 4 to 2 meters - Average splash damage and Minimum splash damage changed from 90% and 25% to 50% - Projectile speed is no longer increased
    - «Plasma Torch» augment
    - Projectile speed decrease changed from -40% to -50%
    - «Sizzling Field» augment
    - Hitting an enemy with a critical shot or after ricochet will apply the «Burning» status effect for 4 seconds - Works the same way as the «Destabilized Plasma» augment
    - «Cryo Field» augment
    - Hitting an enemy with a critical shot or after ricochet will apply the «Freezing» status effect to them for 10 seconds. - Works the same way as the «Destabilized Plasma» augment
    - «Magnetron» augment
    - Hitting an enemy with a critical shot or after ricochet will apply the «EMP» status effect to them for 1 second - Works the same way as the «Destabilized Plasma» augment
    - «Tectonic field» augment
    - Hitting an enemy with a critical shot or after ricochet will apply the «Stun» status effect to them for 0.4 seconds - Works the same way as the «Destabilized Plasma» augment
    - «Super-smart Minus-Field» augment
    - Hitting an enemy with a critical shot or after ricochet will apply the «Armor-Piercing» status effect to them for 3 seconds - Works the same way as the «Destabilized Plasma» augment
    - «Jamming Field» augment
    - Any damage will apply the «Jammer» status effect to a target for 1 second - Removed other features of the augment
    - «Pulsar» augment
    - Critical chance decreased by 50%
    - «Helios» augment
    - Shots are now able to ricochet once - Updated Garage descriptions for the augments
- Smoky
  - Fixed the way «Sorted Ammunition» augment works
    - (Note) Permanent fix for now
- Striker
  - Fixed the way anti-cheat works so it won’t cause all rockets after the first one to lose damage
    - Added an anti-cheat setting that won’t let rockets deal damage if the system considers this damage be illegal
    - (Note) You can't see if the rocket doesn't deal damage if you haven't launched the rocket. 😉
- Scorpion
  - Minor changes in design
    - Added the «Adrenaline» augment available for crystals
    - Maximum damage bonus: 30%
    - Added the «Explosive Shells» augment available for crystals
    - Radius of average splash damage is 2 meters - Radius of minimal splash damage is 10 meters - Projectile speed decreased by 50% - Projectiles cannot ricochet
    - Added the «Explosive Warheads» augment available for crystals
    - Radius of average splash damage is 3 meters - Radius of minimal splash damage is 10 meters
    - Added the «Missile launcher «Wolfpack» augment available for crystals
    - Number of rockets in salvo is 8 - Aiming duration is increased by +100% - Initial rocket speed is decreased by -99% - Maximum rocket speed is increased by +1100% - Time to reach max rocket speed is increased by +300%
    - Fixed the bug with a main barrel’s projectile passing through a target ignoring the radius of the projectile on contact with the target
    - Fixed Gear Score settings
    - Fixed rank limits and prices of some modifications
    - Augments now are visible in the «ТАВ» menu
    - Fixed the bug with missing splash damage
- Added a module «Vulture» with protection from Scorpion. Available in the Garage for crystals
- Increased overdrive warmup duration from 1.1 to 1.2 for all overdrives except Wasp's
  - (Note) Wasp's overdrive doesn’t have the warmup stage.
- Added Scorpion augments to regular containers
  - (Note) Augments are not listed in the list of containers drop and cannot be obtained if you do not have the corresponding turret
- Fixed the Garage description for Railgun’s «Round Stabilization» augment and Hammer’s «Slugger» augment
- Fixed the rare bug with critical damage chance being reduced
- Added music for PRO battles menu
- Added previous Space maps to PRO battles

### June 17th (Update #691)

- A new augment for Ricochet — «Jamming field» — can now be received from Ultra Containers.
  - (Note) The augment is an improved version of the «Minus-field stabilization» augment. Each shot applies the «Jammer» status effect on the opponent, disabling their overdrive and drone.
- Updated the «Blaster» shot effect for Ricochet
- Regular and Ultra Containers open automatically, 15 containers at a time
- On the container opening screen, if you click on the opened container, the reward animation speeds up by 4 times
- Added a hotkey for opening the matchmaking battle modes menu
- Railgun’s «Super armor-piercing rounds» augment
  - The «Armor piercing» status effect’s duration has been increased from 5 s to 6 s.
- Shaft’s «Short-band emitter» augment
  - The increase in regular damage has been changed from +48% to +35%.
    - The increase in critical damage has been changed from +10% to +33%.
    - The increase in minimal damage has been changed from +48% to +35%.
- Hornet’s overdrive
  - The «Armor piercing» status effect’s radius has been increased from 60 m to 360 m.
    - The «Supercharge» status effect’s duration has been decreased from 7 to 5 s.
- Blaster drone
  - Radius of min. splash damage will now be a constant of 15 m. for all upgrade levels.
    - Min. splash damage percentage has been increased from 10% to 50%.
    - Average splash damage percentage has been increased from 25% to 50%.
    - Radius of max (100%) splash damage increased from 2.5 m to 3 m.
    - Radius of average splash damage has been decreased from 5-7 m to 4 m.
- Fixed the light rays above the tank in the Lobby
- Changes in PRO battles
  - Fixed the bug that caused daily limit not to be updated after a player’s Premium duration has been increased
    - Fixed the bug that caused the maps and missions lists to be cut off at the bottom of the screen
    - Fixed the way some buttons display when a cursor is hovered over them
    - Fixed some bugs in the battle information screen
- Updated battle mode icons in the battle information screen
- Minor interface improvements
- Removed the «Contests» chat channel

### June 10th (Update #690)

- The «PLAY» button has been updated!
  - Now, upon clicking the button, it shows three main options: Quick battle, Event mode and PRO battles.
    - To select a specific mode in matchmaking, you will now need to click through the additional options located \*\*within the «Quick Battle» button.
- Updated PRO battles
  - Increased battle funds and experience earned in PRO battles.
    - Added a daily limit on the amount of crystals and experience that can be earned from PRO battles.
    - Lifted restrictions on earning crystals and experience in all PRO battle formats (except Parkour). Feel free to configure your games as you would like!
    - Added separate chat channels for different PRO battle formats.
- Firebird
  - Standard damage increased from 380-1060 to 400-1100 per second
    - Critical damage decreased from 900-1800 to 700-1700 per second
    - Weak damage percentage increased from 10% to 25%
    - (Note) Firebird deals damage 4 times per second. Therefore, the damage numbers in-game will be 4 times lower.
- Freeze
  - Weak damage percentage increased from 7% to 25%, matching Firebird.
- Isida
  - Standard damage increased from 575-1150 to 580-1160 per second
    - Critical damage increased from 575-1150 to 600-1200 per second
    - Critical healing decreased from 2000-4000 to 1500-3000
    - (Note) Isida deals damage 4 times per second. Therefore, the damage numbers in-game will be 4 times lower.
- Tesla
  - Standard and ball lightning damage increased from 409-810 to 450-900
    - Сritical damage increased from 405-810 to 450-900
    - Ball lightning reload increased from 7 to 12-8 seconds
    - (Note) This change means that previously the ball lightning took 7 seconds to charge, but it now takes 12 seconds at Mk1 and 8 seconds at the MAX upgrade of the turret.
- Hammer
  - Standard damage increased from 60-120 to 70-140
    - Critical damage increased from 540-1080 to 630-1260
    - Reload time of the turret increased from 6.2-4.4 to 7.2-4.4 seconds.
    - Augment «Slugger»
    - No longer decreases the rotation speed of the turret
- Twins
  - Standard damage decreased from 105-205 to 100-200
    - Critical damage increased from 130-260 to 165-330
    - Reload time increased from 360-257 to 390-260 milliseconds
- Ricochet
  - Critical damage increased from 270-540 to 300-600
    - Reload time increased from 700-500 to 750-500 milliseconds
    - Recoil decreased from 0.8-1.7 to 0.6-1.2
- Smoky
  - Standard damage increased from 290-580 to 300-600
    - Critical damage decreased from 710-850 to 670-800
- Striker
  - Critical damage increased from 850-1700 to 865-1730
- Thunder
  - Standard damage decreased from 495-990 to 450-900
    - Critical damage increased from 510-1020 to 615-1230
    - Augment «Small caliber charging machine»
    - The decrease in Standard damage changed from -25% to -30% - The decrease in Reload time changed from -25% to -20%
    - Augment «”Sledgehammer” rounds»
    - The increase in Standard damage changed from +50% to +45% - Added a decrease in Range of min damage by -50% - (Note) The “Sledgehammer” augment was designed as a close-range modification of the turret. Based on what we have observed, the augment is best paired with a speedy hull and used for charging an enemy. With this fix, the augment should remain relevant after changes to the turret’s balance.
- Railgun
  - «Electromagnetic accelerator “Scout”» augment
    - The decrease in Standard damage changed from -25% to -28% - The decrease in Critical damage changed from -25% to -20%
- Magnum
  - Standard damage decreased from 745-1490 to 720-1440
    - Critical damage increased from 745-1490 to 815-1630
    - Shaft
    - «Rapid-fire mode» augment - Decreases the ranges of maximum and minimum damage by -50% - (Comment) The augment was conceived as a melee modification of the turret. We will try to limit its high efficiency to close battles while trying to avoid removing critical damage.
- Booster
  - Bonus damage decreased from 15-30% to 10-20%
    - (Note) Booster bonus damage reduction is in line with the current base damage increases for almost all turrets, where Booster plays a key role in increasing efficiency.
- Trickster drone
  - No longer grants additional speed boost, only increases maximum speed.
    - (Comment) The standard +1 m/s speed bonus when activating the Speed boost supply is not removed. Here and later, only the additional speed bonus that these drones gave above the standard one is removed.
- Crisis drone
  - No longer grants additional speed boost, only increases maximum speed.
- Horizontal auto-aim angle for Android client decreased from 6 to 4 degrees.

### May 27th (Update #688)

- A new augment for Thunder that can be received from a special offer — «Pulsar»
  - (Note) It is similar to Ricochet’s version, but it differs in status effect durations and critical damage is halved. Also, Thunder’s «Pulsar» can apply status effects with splash damage.
- Smoky
  - Reload time changed from 1.6-1.2 to 1.81-1.15 s;
    - Recoil decreased from 1.0-2.0 to 0.5-1.0;
- Striker
  - Single shot reload time increased from 2.0-1.6 to 2.4-1.6 s;
    - Salvo reload time increased from 2.0-1.6 to 2.4-1.6 s;
    - Aiming time increased from 3.5-2.8 to 4.2-2.8 s;
    - (Comment) The increase in aiming and reloading time will be noticeable only on the lower modification levels of the turret;
    - Aiming recovery time has been increased from 0.7 to 1 s;
    - «Missile launcher "Cyclone"» augment
    - Aiming recovery time increased by 50%; - (Note) It’s annoying to lose the lock on a target when the aiming time has increased, this change should make life a little fairer;
- Vulcan
  - Reload increased from 75-55 to 75-60 ms;
- Thunder
  - Regular damage increased from 355-710 to 495-990 HP;
    - Critical damage increased from 505-1010 to 510-1020 HP;
    - Reload time changed from 3.2-1.9s to 3.0-2.0s;
    - Average and minimum splash damage decreased from 60% to 50%.;
    - Recoil decreased from 1.2-2.5 to 1.2-2.4;
- Railgun
  - Regular damage increased from 495-990 to 625-1250;
    - Shot reload time changed from 4.3-2.5 to 4.4-2.4 s;
    - «Reinforced aiming transmission» augment:
    - Added an increase of auto-aim upward and downward by 50%; - Turret rotatory acceleration increased from 35% to 50%;
    - «Round stabilization» augment:
    - The increase in regular damage changed from +20% to +9%; - The decrease in critical damage changed from -20% to -9%; - Now the critical chance is always 50%; - (Note) Now «Round stabilization» decreases not only the gap between minimal and maximal damage but also the gap between the chance to deal regular and critical damage;
    - «Round destabilization» augment:
    - Returned to the original increase to critical chance of 100%; - Removed the fixed critical chance of 50%; - Added an increase to the shot warmup time of 10%; - (Note) The augment got back its key feature of high critical damage. Due to the current critical chance settings, increased damage will be dealt about once per three shots, not once per two shots as before;
    - «Large caliber rounds» augment:
    - The increase in regular damage changed from +5% to +20%; - The increase in critical damage is removed; - The increase in shot reload changed from +90% to +50%;
    - «Electromagnetic accelerator "Scout"» augment:
    - The decrease in regular damage changed from -18% to -25%; - The decrease in critical damage changed from -34% to -25%; - The decrease in shot warmup time changed from -20% to -50%; - Added a decrease to the impact force of 20%; - (Note) With these settings, this augment makes the turret as close as possible to Thunder in terms of rate of fire and damage;
    - «"Death Herald" compulsator» augment:
    - Decreased shot warmup time by 20%;
    - «Hyperspace rounds» augment:
    - The increase in regular damage is removed; - Penetration damage bonus decreased from +250% to +200%; - (Note) All the changes to this augment are a result of the turret’s regular damage being increased;
- Magnum
  - Regular damage increased from 670-1340 to 745-1490 HP;
    - Critical damage increased from 670-1340 to 745-1490 HP;
    - Reload time increased from 4-2.4 to 4.9-2.6 s;
    - Radius of max splash damage decreased from 10 to 5 m;
    - Average splash damage radius decreased from 11 to 6 m;
    - Critical splash damage radius decreased from 10 to 5 m;
    - Recoil increased from 1.7-4.0 to 2.0-4.0;
- Viking's Overdrive «Berserk Reactor»
  - The increase in damage decreased from +200% to +150%;
    - The increase in rate of fire increased from +65% to +75%;
    - «Armor-Piercing Core» augment:
    - The «Armor piercing» status effect’s radius increased from 2 to 5 m;
- Gauss
  - Reload time in arcade mode increased from 2.0-1.5 to 2.25-1.5 s;
    - Damage in sniping mode increased from 800-1600 to 900-1800 HP;
    - Aiming time increased from 2.8-1.8 to 3-2 s;
    - Reload time in sniping mode changed from 4-3 to 4.2-2.8 s;
    - Radius of max splash damage in sniping mode decreased from 11 to 5 m;
    - Average splash damage radius in sniping mode decreased from 12 to 6 m;
    - Recoil in sniping mode increased from 1.2-2.5 to 2-4;
    - «Electromagnetic salvo» augment:
    - The «EMP» status effect’s radius increased from 11 to 15 m;
    - «Armor-Piercing Salvo» augment:
    - The «Armor-Piercing» status effect’s radius increased from 11 to 15 m;
- Shaft
  - Arcade shot reload time increased from 2.0-1.5 to 2.25-1.5s;
    - Full sniping shot reload increased from 10 to 14.5-10 s;
    - «Short-band emitter» augment:
    - The increase in arcade damage changed from +20% to +48%; - The increase in critical damage changed from +20% to +10%; - The increase in arcade reload time changed from +25% to +34%; - The increase in minimum sniping damage changed from +20% to +48%; - Price increased from 149,000 to 245,000 crystals; - (Note) With these settings, this augment makes the turret as close as possible to Thunder in terms of rate of fire and damage;
    - «Rapid-fire mode» augment:
    - The decrease in arcade shot reload duration changed from -80% to -83%; - Energy per arcade shot changed from 350 to 384; - Added an increase in recharge rate by +167%; - Added a decrease to sniping mode damage of -66%; - Sniping shot consumes all the energy stored; - (Note) Now this augment makes Shaft be useful only for Arcade shots and sniping mode is useless with such a low damage;
    - «Armor-Piercing Sight» augment:
    - The «Armor-Piercing» status effect’s duration increased from 2 to 5 s; - The decrease in energy consumed by sniping shot is removed; - (Note) The original setting allowed for about half a second to hit a target with an arcade shot after the target’s armor was deactivated. With these changes, it should be a bit easier.
- «Lifeguard» drone
  - Drone reload time decreased from 60 to 9 s;
    - Healing decreased from 1000-3000 to 500-1000 HP;
    - (Note) With the «Jammer» status effect becoming more popular and available, this drone should stop causing serious problems when catching gold boxes. The new settings should be much more useful in a regular battle.
- Icons on all supplies in the garage have been updated;
- Added a new daily mission «Use the Nuclear energy supply»
  - (Note) Don’t forget, any supply-related mission can be completed not only by activating the supply, but also by taking the respective bonus box;
- Updated the old «Tanki Online» logo that you see while entering the game with the new modern one.

### May 20th (Update #687)

- A new augment for Ricochet has been added to Ultra Containers — «Tectonic field».
  - (Note) This is an improved version of the «Destabilized plasma» augment. It applies the «Stun» status effect for 1 second on a critical hit.
- A new shot effect for Ricochet has been added — «Blaster»
- The number of points a player gets for assisting in destroying an opponent in MM battles has been increased from 5 to 7
- Smoky
  - «Incendiary rounds» augment
    - Increases target’s temperature by 30% instead of 50%; - No longer decreases critical damage;
    - «EMP Rounds» augment
    - No longer decreases critical damage;
    - «Paralyzing Rounds» augment
    - No longer decreases critical damage;
    - «Armor-piercing rounds» augment
    - No longer decreases critical damage;
- Magnum
  - «Harpoon» augment
    - Increase of maximum shell speed is now 50% instead of 100%; - Fixed turret elevation increased from 0 to 1 deg.; - Decreased the radius of all explosions from 75% to 60%; - Charge duration decreased by 50%; - Reload duration increased by 40%;
- Gauss
  - «Electromagnetic salvo» augment
    - The «EMP» status effect’s duration decreased from 3 to 2 s.; - Sniping mode reload duration increase removed;
    - «Armor-Piercing Salvo» augment
    - The «Armor-piercing» status effect’s duration increased from 3 to 5 s.; - Sniping mode reload duration increase removed;
- Hornet
  - Ovedrive now applies the «Armor-piercing» status effect even to those targets that the Hornet doesn’t see in radius of 60 metres;
    - Ovedrive now applies the «Armor-piercing» status effect for 3 seconds instead of 5;
    - Ovedrive now applies the «Jammer» status effect to all targets in radius of 60 metres for 7 seconds;
- Ares
  - Overdrive ball’s speed increased from 12 to 25 m/s;
    - Fixed the bug that caused damage/healing radius to be just 5 metres instead of 20;
    - The minimal distance between two overdrive balls to cause them to self-destruct is decreased from 20 to 10 metres
    - Overdrive ball’s damage/healing is decreased from 500 to 300 HP per tick;
- Camper
  - Additional boosted damage power increased from 30-60% to 50%-100%
    - Additional boosted armour power increased from 30%-90% to 100%-200%

### May 13th (Update #686)

- A new augment has been added for Firebird — «Toxic mix»
  - \[Note\] This augment applies the «Armour-piercing» status effect with any shot, not only critical hits.
- Firebird
  - Heating rate decreased from 0.2-0.5 to 0.2-0.4 temp/sec;
- Isida
  - Fixed beam highlight color for all shot effects;
- Vulcan
  - Critical damage per bullet decreased from 140-280 to 110-220;
- Thunder
  - Reload duration decreased from 3.3-2.0 to 3.2-1.9 sec.;
- Magnum
  - Damage decreased from 750-1500 to 670-1340 HP;
    - Critical damage decreased from 750-1500 to 670-1340 HP;
    - Reload duration decreased from 6-3 to 4-2.4 sec.;
    - Amplification duration decreased from 3 to 2 sec.;
    - Critical hit chance increased to 30%;
    - Max splash damage radius increased from 2 to 10 m.;
    - Critical Splash Radius increased from 7 to 10 m.;
    - Average splash damage radius increased from 5 to 11 m.;
    - Weak damage percentage increased from 5% to 50%;
    - Projectile gravitation decreased from 4.5 to 2;
    - Initial shot angle decreased from 12 to 8 degrees;
    - Max projectile speed decreased from 130 to 120 m/sec.;
    - «Reinforced gun carriage» augment
    - Price increased from 149 000 to 245 000 crystals;
    - «Armor-piercing core» augment
    - The «Armour piercing» status effect’s duration decreased from 7 to 5 s.;
    - «Automated gunpowder loading mechanism» augment
    - Decreases Amplification speed by 25%; - No longer increases reload time;
    - «Mortar» augment
    - Now decreases min, average and max splash damage radiuses by 75%; - Now decreases critical Splash Radius by 50%;
    - «Harpoon» augment
    - Fixed turret elevation decreased from 3 to 0 deg.; - Projectile gravitation decreased from 4 to 1; - Now increases min and max impact force by 100%; - Now decreases min, average and max splash damage radiuses by 75%; - Now decreases critical Splash Radius by 50%.
    - \[Note\] The first noticeable change of this turret is the projectile trajectory. The projectile now falls to the ground slower. This change will require you to find new places to shoot on maps. Instead of these complexities, there is a second notable change. Splash damage now deals more damage. Instead of having to shoot very accurately, you can now constantly shoot a large area.
- Hornet
  - Overdrive duration increased from 30 to 90 s.;
    - \[Note\] Might be very useful with the new Magnum.
- Crusader
  - Overdrive’s damage type is immune to any kind of protection, like Hopper and Hunter overdrives;
    - Overdrive’s damage increased from 1500-3000 to 2000-4000 HP;
    - Overdrive’s radius of max splash damage increased from 1 to 3 m.;
    - Overdrive’s splash damage radius increased from 10 to 30 m.;
    - Overdrive min. splash damage percentage increased from 10% to 25%;
    - The «Armour piercing» status effect’s duration applied by overdrive increased from 5 to 9 s.;
    - \[Note\] It is very hard to increase player’s accuracy when using the icicle. So we decided to add a very useful debuff to enemies in a large radius from the point of impact. The overdrive is now extremely useful against Titan’s dome and can be used against Paladin on accurate hit.
- Titan
  - Overdrive now again heals teammates with 100 HP per second speed.
    - \[Note\] A small compensation for the appearance of another way to break the dome.
- Ares
  - Overdrive’s speed decreased from 18 to 12 m/s.;
    - Damage/Healing radius increased from 15 to 20 m.;
    - Max splash damage radius increased from 5 to 10 m.;
    - Inside the splash radius (not a direct hit), the player gets 50% of the damage.
- The following skins have been added to the skin container: Hunter Legacy, Wasp Legacy, Twins Legacy, and Smoky Legacy.
- Fixed the bug with «fireflies» caused by the dynamic lighting.

### April 29th (Update #685)

- A new augment for Twins has been added to Ultra Containers — «Plasma Injector».
  - (Note) This augment applies «Armour-piercing» status effect on critical shots and disables splash damage
- Mammoth default skin updated to the HD version
- Added dynamic lighting for shots, explosions, and bonus boxes
- Updated log in and sign up pages
- Firebird
  - Critical damage increased from 380-1060 to 900-1800;
    - Critical damage chance decreased from 12% to 9%;
    - «Magnetic Mix» augment
    - The «EMP» status effect’s duration decreased from 2 to 1 s.;
- Tesla
  - «Superconducting discharge» augment
    - The «EMP» status effect’s duration decreased from 3 to 2 s.;
    - «Armour-piercing discharge» augment
    - The «Armour piercing» status effect’s duration decreased from 5 to 2 s.;
- Hammer
  - «Dragon's Breath» augment
    - No longer increases Critical shot chance; - No longer decreases Clip reload; - Critical damage decrease is 25% instead of 50%;
    - «Wyvern's Breath» augment
    - No longer increases Critical shot chance; - Clip reload duration decreased by 10%
    - «Magnetic Pellets» augment
    - The «EMP» status effect’s duration decreased from 4 to 2 s.;
    - «Armour-Piercing Shot» augment
    - The «Armour piercing» status effect’s duration decreased from 7 to 5 s.;
- Twins
  - Critical damage increased from 105-205 to 130-260;
    - Critical damage chance decreased from 25% to 16%;
    - «Vaporizer» augment
    - Cricial damage decrease is 50%;
    - «Cryotron» augment
    - No longer decreases Cricial damage;
    - «Magnetron» augment
    - The «EMP» status effect’s duration decreased from 2 to 1 s.;
    - «Plasma Turbo Accelerators» augment
    - Recoil decrease is 80% instead of 50%;
- Ricochet
  - Critical damage chance decreased from 12% to 9%;
    - «Sizzling field» augment
    - The «Burning» status effect’s power decreased from 100% to 50%; - Maximum number of ricochets increased from 0 to 1;
    - «Cryo field» augment
    - Maximum number of ricochets increased from 0 to 1;
    - «Super-smart Minus-Field» augment
    - The «Armour piercing» status effect’s duration decreased from 2 to 1 s.;
- Smoky
  - «EMP Rounds» augment
    - The «EMP» status effect’s duration decreased from 3 to 1 s.;
    - «Paralyzing Rounds» augment
    - The «Stun» status effect’s duration decreased from 2 to 1 s.;
    - «Armour-piercing rounds» augment
    - The «Armour piercing» status effect’s duration decreased from 3 to 2 s.;
- Striker
  - «Missile launcher "Hunter"» augment
    - Aiming time decrease is 60% instead of 80%; - No longer increases rocket angular velocity; - No longer increases rocket initial velocity;
    - «Stunning missiles» augment
    - Aiming time decrease is 60% instead of 80%;
    - «Armour-piercing missiles» augment
    - The «Armour piercing» status effect’s duration decreased from 5 to 2 s.; - Aiming time decrease is 60% instead of 50%; - Salvo reload time decreased by 40%;
- Vulcan
  - Critical damage increased from 44-88 to 140-280;
    - Critical damage chance decreased from 12% to 2%;
    - «Shooting speed regulator» augment
    - Reload decrease is 10% instead of 15%; - Price increased from 149 000 to 245 000;
    - «Reinforced aiming transmission» augment
    - No longer decreases Vertical autoaim; - Barrel startup increased by 50%; - Barrel slowdown increased by 50%;
- Railgun
  - «Incendiary rounds» augment
    - The «Burning» status effect’s power decreased from 100% to 50%; - No longer increases critical damage chance; - No longer decreases critical damage;
    - «Cryo rounds» augment
    - No longer increases critical damage chance; - No longer decreases critical damage;
    - «EMP rounds» augment
    - The «EMP» status effect’s duration decreased from 4 to 2 s.; - No longer increases critical damage chance; - No longer decreases critical damage;
    - «Stun rounds» augment
    - The «Stun» status effect’s duration decreased from 2 to 1.5 s.; - No longer increases critical damage chance; - No longer decreases critical damage;
    - «Super armour-piercing rounds» augment
    - No longer increases critical damage chance; - No longer decreases critical damage;
- Gauss
  - Critical damage decreased from 670-1340 to 665-1330;
    - Critical splash damage radius decreased from 6 to 1 m.;
    - Average splash damage radius of arcade mode shots decreased from 4 to 1 m.;
    - Average splash damage of arcade mode shots decreased from 90% to 50%;
    - Minimum splash damage of arcade mode shots increased from 25% to 50%;
    - Regular damage in sniping mode increased from 750-1500 to 800-1600;
    - Aiming time increased from 2.2-1.7 to 2.8-1.8 s.;
    - Reload time in sniping mode increased from 3.6-2.7 to 4-3 s.;
    - Maximum splash damage radius in sniping mode increased from 2 to 11 m.;
    - Average splash damage in sniping mode percentage decreased from 90% to 50%;
    - Minimum splash damage in sniping mode percentage increased from 5% to 50%;
    - «Electromagnetic salvo» augment
    - No longer decreases damage in sniping mode; - Sniping reload duration decrease is 10% instead of 50%; - The «EMP» status effect’s radius increased from 10 to 11 m.; - The «EMP» status effect’s duration decreased from 4 to 3 s.;
    - «Armour-Piercing Salvo» augment
    - No longer decreases damage in sniping mode; - Sniping reload duration decrease is 10% instead of 50%; - The «Armour-piercing» status effect’s radius increased from 10 to 11 m.; - The «Armour-piercing» status effect’s duration decreased from 5 to 3 s.;
- Shaft
  - «Armour-Piercing Sight» augment
    - The «Armour-piercing» status effect’s duration decreased from 5 to 2 s.;
    - «Healing Emitters» augment
    - Removed critical damage
- Terminator
  - Initial rocket speed decreased from 100 to 90 m/s;
    - Max rocket speed (m/sec) increased from 50 to 60 m/s;
- Wasp
  - Wasp overdrive’s «Stun» status effect is replaced with the «Micro-stun» status effect;
    - Wasp overdrive’s «EMP» status effect’s duration decreased from 3 to 1 s.;
    - The Wasp overdrive’s «Burning» status effect’s radius increased from 25 to 40 m.;
    - Wasp overdrive’s «EMP» status effect’s radius increased from 25 to 40 m.;
    - Wasp overdrive’s bomb explosion deals 100% damage for tanks in 13 meters radius, and only 10% if a tank is more 15 meters away from the bomb. The maximum radius is still 20 meters.
- Hopper
  - Hopper’s overdrive no longer applies the «Burning» status effect.
    - Hopper’s overdrive now deals instant damage of 1500-3000 HP to all enemies in the radius of the «Stun» status effect. Supplies do not affect the amount of damage.
- Paladin
  - Paladin’s overdrive no longer applies the «Jammer» status effect
- Hunter
  - Hunter’s overdrive no longer applies the «Jammer» status effect
    - Hunter’s overdrive now deals instant damage of 1000-2000 HP to all enemies in the radius of the «EMP» and «Stun» status effects. Supplies do not affect the numbers of damage.
- Dictator
  - Dictator’s overdrive no longer recharges overdrives for teammates.
    - The «Supercharge» status effect duration increased from 9 to 10 s.;
- Ares
  - Damage/Healing radius increased from 12 to 15 m.;
    - Lightning deals damage twice as often;
- Repair kit
  - Immunity duration decreased from 0,9 to 0,8 s.;
- Removed the following missions: «Finish battles in mode», «Earn crystals in battles» and «Score points in mode»;
- Requirements for the «Collect supply boxes» are increased from 5/10/15 to 10/15/20 for all supplies but Repair kit;
- Requirements for the «Collect Repair kit boxes» are increased from 2/5/7 to 5/10/15;
- Delay between dropping supply boxes decreased from 104 to 84 s.;

### April 22nd (Update #684)

- A new augment for Ricochet has been added to Ultra Containers — «Cryo field».
  - (Note) Just like Vaporizer ignites a target, this new augment freezes it. We have seen your comments that these augments should also have an explosion or ricochet. We might add such features in the future.
- The maximum number of players per group has been decreased from 4 to 3.
  - (Note) We have conducted a study to find out how often tankers play in groups of 4 and asked their opinion about such groups in matchmaking. After analyzing the results and taking into account that the matchmaking system works better when the maximum group size is lower, we have decided to reduce the maximum number of players in a group from 4 to 3.
- Duration of Repair kit’s protection from status effect decreased from 1 to 0.9 s.
  - (Note) Longer protection from status effects duplicates the functions of hull immunity augments. Thus we do not see any reasons to increase the duration. Instead, we are decrease the duration to emphasize not only a new feature of the Repair kit but also to make its use more skill-dependent.
- Added lighting for headlights and lamps on turrets and hulls
- Isida
  - Critical damage (not healing) chance decreased from 12% to 7%.
- Smoky
  - «Sorted Ammunition» augment
    - The first shot after respawn is critical;
    - Fixed the bug when you shoot to the sky and it doesn’t update critical chance counter. It caused the «Sorted Ammunition» augment to function incorrectly.
- Thunder
  - Regular damage decreased from 405-810 to 355-710 HP;
    - Critical damage increased from 495-990 to 505-1010 HP;
    - Critical hit chance increased from 15% to 30%;
    - Minimum and average damage ratio increased from 25%-10% to 60%-60%;
    - Radius of weak splash damage decreased from 12-12 to 8-12 m;
    - Radius of average splash damage decreased from 5 to 2 m;
    - Сritical damage explosion radius decreased from 12 to 1 m;
    - Reload duration changed from 3.2-2.3 to 3.3-2.0 s;
    - «Small caliber charging machine» augment:
    - Reload duration decrease changed from 20% to 25%; - Regular Damage decrease changed from 20% to 25%; - Critical damage now longer decreased; - Price increased from 149 000 to 245 000 crystals.
    - «Subcaliber rounds» augment
    - Reload duration decrease changed from 15% to 10%; - Projectile speed increase changed from 50% to 100%.
    - «"Sledgehammer" rounds» augments:
    - Range of Max Damage decrease changed from 95% to 80%; - Reload duration decrease removed; - Added Regular Damage increase of 50%;
    - (Note) The previous version of Thunder allowed dealing effective splash damage with critical hits. The new version is different in that it applies full and critical damage only on direct hits. But splash damage is no longer dependent on distance, and you always deal 60% of damage if your splash damage reached the opponent. We hope that it will make shooting at the ground and obstacles a more viable tactic.
- Railgun
  - Shot warmup time increased from 1.5 to 1.6 s;
    - Shot reload time decreased from 4.4-2.6 to 4.3-2.5 s;
    - Impact force decreased from 4-12 to 3-9;
    - Changed the sound file so that the moment of the shot and the sound of the shot will be synchronized.
    - (Note) We are glad you like the new and more skill-dependent Railgun. Let’s make it even better.
    - «Hyperspace rounds» augment
    - Added a 10% increase to the Shot warmup time;
- Shaft
  - Critical damage increased from 350-700 to 465-930;
    - Critical hit chance increased from 12% to 30%;
    - Initial Field of view increased from 40 to 90 deg.;
    - Final Field of view decreased from 20 to 15 deg.;
    - Aiming acceleration decreased from 27 to 20 units;
    - Scope exit delay decreased from 0.5 to 0.2 s;
    - Scope enter delay decreased from 0.5 to 0.4 s;
    - (Note) New FOV zooms slower when you enter the sniping mode and zooms faster at the end. It will be useful for those players who prefer to make quick scoped shots at short distances.
    - Terminator:
    - Initial rocket speed decreased from 120 to 100 m/s;
    - Max rocket speed (m/s) decreased from 60 to 50 m/s;
    - (Note) A bit more emphasis on melee range fights for the rocket launcher.
- Containers
  - Freeze’s «Magnetic mix» and «Paralyzing Mix» augments have been added to regular containers;
    - You are guaranteed to get an item of «RARE» rarity every 15 regular containers.
    - You are guaranteed to get an item of «EPIC» rarity every 15 Ultra Containers.
- Matchmaking equipment change cooldown increased from 14 to 15 minutes.
- PRO battle equipment change cooldown decreased from 8 to 7 minutes.
- Fixed the bug with the «Unequip» button for modules in the Garage;
- Fixed the bug on low resolution screens where the tank in the Garage was displayed on top of the interface.
- In Rugby mode, the speed of a parachute with a ball has been increased by a third.

### April 8th (Update 683)

- A new augment for Ricochet has been added to Ultra Containers — «Helios».
  - (Note) This augment doesn’t apply any status effects and doesn’t increase critical damage chance. With this augment, this is no longer Ricochet.

This is a new sniper plasma-gun. It significantly increases both range and rate of fire. You only have enough energy for 7 shots which are launched as a continuous burst at the target. You need to play this new Ricochet in a completely different way.

- Repair kit now can remove all applied status effects and protect from status effects for 1 second
  - (Note) It may seem that one second is not enough. Maybe. But even one second may be enough to make some overdrives completely useless against you. We will keep an eye on how you use this new feature.
- Ricochet
  - «Minus-field stabilization» augment
    - Maximum range increase is now 200% instead of 100%
- Thunder
  - Critical damage increased from 450-900 to 495-990 HP
- Railgun
  - Regular damage increased from 350-700 to 495-990
    - Critical damage increased from 655-1310 to 755-1510
    - Critical damage chance decreased from 50% to 30%
    - Shot warmup time increased from 1.1 to 1.5 seconds
    - «Reinforced aiming transmission» augment
      - Turret rotation speed increase is 50% instead of 40%; - No longer decreases vertical auto aim; - Price increased from 149 000 crystals to 245 000 crystals
        - «Round stabilization» augment
      - Regular damage increase is now 20% instead of 33%; - Critical damage decrease is 20%; - Penetration is no longer increased; - Critical damage chance is no longer zero; - Price increased from 96 000 crystals to 245 000 crystals
        - «Large caliber rounds» augment
      - Regular damage increase is 5% instead of 20%; - Critical damage increase is 35% instead of 20%
        - «Round destabilization» augment
      - No longer increases critical damage - Instead increases critical damage chance to 50%
        - «Electromagnetic accelerator "Scout"» augment
      - Regular damage decreased by 18%; - Critical damage decreased by 34% instead of 40%; - Shot warmup time decrease is 20% instead of 30%; - Reload time decrease is 50% instead of 20%; - Impact force decrease is 50% instead of 40%
        - «"Death Herald" compulsator» augment
      - No longer increases shot warmup time - Instead increases shot reload time by 15%
        - «Hyperspace rounds» augment
      - Regular damage increase is 20% instead of 45%; - Impact force decrease is 100% instead of 25%; - Penetration increase is 250% instead of 100%
        - «Incendiary Rounds» augment
      - Shot warmup time is no longer increased - Critical damage decreased by 33% - Critical damage chance increased from 30% to 50%
        - «Cryo Rounds» augment
      - Shot warmup time is no longer increased - Critical damage decreased by 33% - Critical damage chance increased from 30% to 50%
        - «EMP Rounds» augment
      - Shot warmup time is no longer increased - Critical damage decreased by 33% - Critical damage chance increased from 30% to 50%
        - «Stun Rounds» augment
      - Shot warmup time is no longer increased - Critical damage decreased by 33% - Critical damage chance increased from 30% to 50%
        - «Super Armor-Piercing Rounds» augment
      - Regular damage is no longer increased; - Critical damage decrease is 33% instead of 20%; - It is possible to deal critical damage right after a critical shot again
    - Fixed the way all augments work when Viking’s overdrive is activated
    - (Note) In this version of the characteristics, the convenience of turret control is exchanged for an increase in its power. Shot warmup time has significantly increased, and may increase even more in future updates.
- Daily missions
  - Requirements for the «Be in the winning team of N battles» are decreased from 3/4/5 to 2/3/4.
    - Requirements for the «Finish N battles in any mode» are increased from 2/3/4 to 3/4/5.
    - Requirements for the «Earn crystals in X mode» are doubled.
    - Requirements for the «Capture N flags», «Capture N balls», «Destroy N Juggernauts» are decreased to 1.
- (Note) We tried to equalise the level of difficulty of missions.
- Weekly missions
  - Requirements of the «Be in the winning team of N battles in any matchmaking battles» decreased from 10-20-30 to 5-7-10.
    - Requirements of the «Destroy N enemies» decreased from 50-100-150 to 60-80-100
- Matchmaking equipment change cooldown increased from 13 to 14 minutes.
- PRO battle equipment change cooldown decreased from 9 to 8 minutes.
- Updated shop prices for some regions

### April 1st (Update 682)

- A new augment for Twins added to the Ultra Containers — «Plasma Disruptor».
  - \[Note\] This augment slightly increases the range of fire and applies the Jammer status effect for 1 second on each hit.
- Battle team chats are enabled. You still cannot chat with opponents.
  - \[Note\] We realize that communication is important for you. We return the battle chats, but for now in a limited form. If we notice an increase in the number of violations of the rules, we will be forced to disable chats again.
- Bonus box parachutes are replaced with cargo drones.
  - \[Note\] As yet we have not provided for the possibility of standing on drones;).
- Updated the design of bonus boxes and their zones on maps.
- Increased the number of containers for completing weekly missions from 1 to 3.
- Ricochet:
  - «Destabilized plasma» augment
    - Increased damage in the blast radius for non-critical shots;
    - «Minus-field stabilization» augment
    - Shot reload increase is now 10% instead of 15%;
    - «Plasma-torch» augment
    - Projectile speed decrease is now 40% instead of 35%;
    - «Berserk» augment
    - Instead of +20% increase of energy used per shot, shot reload duration decreased by 25%.
      - \[Note\] Previously, this augment only gave you an opportunity to shoot without reloading. Now it's both: no recharge and increased rate of fire! This change should make Berserk's performance be the same as for other augments.
- Striker:
  - Critical damage decreased from 900-1800 to 850-1700 HP.
- Thunder:
  - Critical damage increased from 405-810 to 450-900 HP.
    - Impact force increased from 2-5 to 2-6 units.
- Terminator:
  - Railgun turret reload time increased from 1.4-1.2 to 1.8-1.5 sec.;
    - Time to reach max rocket speed decreased from 2 to 1.5 sec.;
    - \[Note\] Seeing the results of the latest changes, we came to the conclusion that it is worth making Juggernaut's fire modes have even more different roles. Railgun barrels are now designed to fire at long range and take more time to reload. And Striker missiles should slow down even faster to remain as useful as possible only in close combat.
- Game modes:
  - CTF — availability rank changed from «Gefreiter» to «Corporal»;
    - ASL — availability rank changed from «Corporal» to «Master Corporal»;
    - SGE — availability rank changed from «Master Corporal» to «Gefreiter».
- Added Legacy skins for Hunter and Twins.
  - \[Note\] These skins will be available in the upcoming challenges.
- Matchmaking equipment change cooldown increased from 12 to 13 minutes.
- PRO battle equipment change cooldown decreased from 10 to 9 minutes.
- Added a new daily mission «Be in the winning team of 3/4/5 battles».
- Daily «Get into the TOP-3 of the winning team» mission’s requirement on the number of battles will now only be 1 battle. The mission is now only available from the «Warrant Officer 5» rank.
- Added a new weekly mission «Be in the winning team of 10/20/30 battles».
- Weekly «Get into the TOP-3 of the winning team» mission’s requirement on the number of battles is now 3/4/5 battles instead of 5/7/10 battles. The mission is now only available from the «Warrant Officer 5» rank.
- Weekly «Complete 3 daily missions» mission can now be received in any slot of weekly missions.

### March 18th (Update 681)

- A new augment for Firebird added to the Ultra Containers — «Magnetic Mix».
  - \[Note\] Settings are pretty similar to Paralyzing mix augment. The duration of the «EMP» status effect applied on critical shots is 2 seconds.
- Battle chats are disabled.
  - \[Note\] We temporarily disable chats in battles as it became harder to moderate them in time in the current climate. Lobby chats are still available.
- Ricochet:
  - Critical damage increased from 170-340 to 270-540 HP
    - Energy per shot increased from 69-60 to 220-180 eng/shot
    - Recharge Speed increased from 50 to 230 eng/sec
    - The number of shots until being out of energy decreased from 29-30 to 14-15
    - \[Note\] The previous changes in the Ricochet parameters solved the efficiency problems but made the turret be too similar to Twins. Your energy was almost unlimited. New settings should still keep the turret efficient while there is energy and should bring it back to work much faster after running out of energy. We hope that this update will make Twins be the turret responsible for “spamming” opponents with shots and Ricochet to be the turret for precise shots to a single opponent at the same distance.
- Ricochet’s «Destabilized plasma» augment
  - Projectile speed increased by 20%
    - The augment’s price increased from 149 000 to 245 000 crystals
- Ricochet’s «Plasma-torch» augment
  - Energy per shot decreased by 30%
- Equipment change cooldown increased from 11 to 12 minutes.
- Equipment change cooldown decreased from 11 to 10 minutes in PRO battles.
- Equipment change cooldown is removed for Parkour mode battles.
- Added the nickname change form for inactive accounts.

### March 4th (Update 680)

- A new augment for Freeze added to the Ultra Containers — «Paralyzing Mix».
  - \[Note\] Adds a paralyzing mixture into the cooling agent. A critical concentration of the mixture may cause all the target's systems to be paralyzed. Freezing power and critical damage reduced.
- Added a delay before battle start in Matchmaking battles. For a short period of time, map objectives like flags, bases, balls, etc. won’t be activated, and teams won’t be able to earn battle score points.
  - DM — no delay;
    - TDM — 30 seconds;
    - CP — 45 seconds;
    - CTF — 60 seconds;
    - ASL — 60 seconds;
    - RGB — 60 seconds;
    - SGE — 45 seconds;
    - TJR — 30 seconds;
    - JGR — no delay.
    - \[Note\] You will no longer be in situations where you join a battle and an opponent already has battle score points. It will be fairer.
- Hammer:
  - Number of pellets increased from 9 to 30;
    - The number of pellets that may hit the same target is limited to 9;
    - Horizontal spread increased from 10 to 20 deg.;
    - Impact force per pellet decreased from 35-70 to 20-40;
    - Clip reload time decreased from 4,4-3,3 to 6,2-4,4 sec.;
    - «Slugger» augment:
    - Horizontal scatter angle decrease is now -75% instead of -50%; - Range of min damage now increases by 25%; - Price increased from 149 000 to 245 000 crystals.
    - «Duplet» augment:
    - Clip reload increase is now +25% instead of +50%.
    - «Blunderbuss» augment:
    - Does not increase the number of pellets per shot, but increases the number of pellets that can hit the same target to 15.
    - \[Note\] It is now more efficient to play with Hammer without being close to an opponent. When you shoot at the \*maximum distance, damage will be the same as if you shoot at close range.
- Equipment change cooldown increased from 10 to 11 minutes.
- Hammer’s «Stunning Pellets» augment is added as a legendary item to Common and Ultra Containers.
- Weekly mission to complete some number of daily missions now give you the same number of stars as other missions.
- Decreased the number of battles in which you need to take one of the top three places in the winner's team to complete this type of daily mission from 3 to 2.
  - \[Note\] No changes to the «Take one of the top three places in the winner's team in 1 battle» mission.
- Fixed the bug with Juggernaut getting self-destroyed after becoming a Juggernaut when you are in the Garage.
  - \[Note\] A player can no longer become a Juggernaut while being in the Garage.
- Fixed the bug with the allowed number of players per team being exceeded when new players enter a battle.
- The feature to get bonuses for watching ads in the mobile version of the game is disabled due to the lack of opportunity to ensure the stability of its operation for all users.

### February 18th (Update 679)

- A new augment for Firebird added to the Ultra Containers — «Jamming mix».
  - \[Note\] It always applies the «Jammer» status effect when you deal damage but heating is decreased.
- Interface update:
  - New game lobby interface;
    - New Garage interface;
    - Minor interface updates for other screens.
- Tesla:
  - Chain lightning reload decreased from 1.00 to 0.90 s.
    - \[Note\] The previous reduction of the rate of fire happened together with the reduction of ball lightning damage. It turned out that the reduction of the rate of fire wasn’t needed.
- Smoky:
  - Projectile speed increased from 250 to 350 m/sec.
    - \[Note\] Misses at short range when aiming at an enemy wasn't planned as a side effect of slowing down the speed of projectiles.
- Striker:
  - Min projectile speed decreased from 15-20 to 10-20 m/sec;
    - Max rocket speed increased from 300 to 350 m/sec;
    - Time to reach max rocket speed decreased from 2.0 to 1.5 s.
    - «Remote rocket explosives» augment — no longer affects max rocket speed.
- Thunder:
  - Projectile speed increased from 300 to 350 m/sec.
    - \[Note\] Now the max projectile speed for all medium-range turrets is the same.
- Hornet:
  - Overdrive charge duration increased from 180 to 210 seconds.
- Dictator:
  - The «Supercharge» status effect duration increased from 7 to 9 seconds.
    - \[Note\] Supercharge means guaranteed critical damage.
- Ares:
  - Damage/Healing radius increased from 10 to 12 m.
- Repair kit:
  - Activating a repair kit completely removes heat and freeze, instead of doing it partially.
    - \[Note\] We will see how this update will affect the gameplay and will consider an option to add immunity to other status effects when you activate a repair kit.
- Equipment change cooldown increased from 9 to 10 minutes.
  - (Note) You are right, we keep increasing the cooldown intentionally. Ask us why and we will answer in the V-LOG.
- Fixed anti-flood system’s behavior so it won’t be breaking links with uppercase letters
- Fixed the bug when you use overdrive before becoming a Juggernaut. After becoming a normal tank again, the energy bar worked wrong until your tank is destroyed or until you use overdrive again.
- Fixed the bug with flickering texts when going from any section to the modules section of the Garage
- Fixed the browser’s «Back» button behavior.
- Now you see large previews of drones when you get them from containers.

### February 11th (Update 678)

- A new augment for Firebird added to the Ultra Containers — «Paralyzing mix».
  - \[Note\] This augment stuns the enemy with critical damage for a short time. Heating power and critical damage are reduced.
- Updated target highlight logic:
  - Red outline — the target is at maximum damage range;
    - Orange outline — the target is at a distance where your damage decreases when distance increase;
    - Yellow outline — the target is further from the optimal distance and will only get minimal damage;
    - Gray outline — the target is protected during respawn and won’t get damage;
    - Bold outline — the turret is reloaded and ready to shoot;
    - Thin outline — the turret is reloading.
    - \[Note\] We've analyzed your feedback from the last update where we changed the target highlighting and agree that \*\*the colour of the outline should show how far the target is and how much of the damage it will get. We tried to keep the recharge state as the thickness of the outline. And again, we are waiting for your feedback!
- «Firebird»:
  - Maximum target highlighting distance increased to 17-20 m.
- «Freeze»:
  - «Magnetic Mix» augment:
    - The «EMP» status effect duration decreased from 3 to 2 seconds.
    - Maximum target highlighting distance increased to 17-20 m.
- «Tesla»:
  - «Superconducting discharge» augment:
    - The «EMP» status effect duration decreased from 7 to 3 seconds.
    - Maximum target highlighting distance increased to 20-25 m.
- «Hammer»:
  - «Magnetic Pellets» augment:
    - The «EMP» status effect duration decreased from 5 to 4 seconds.
    - Maximum target highlighting distance increased to 40-50 m.
- «Twins»:
  - «Magnetron» augment:
    - The «EMP» status effect duration decreased from 3 to 2 seconds.
- «Ricochet»:
  - Projectile speed increased from 70-100 to 100-120 (m/sec);
    - «Minus-field stabilization» augment:
    - Projectile speed boost decreased from +100% to +50%.
- «Smoky»:
  - Projectile speed decreased from 500 to 250 (m/sec);
    - «EMP Rounds» augment:
    - The «EMP» status effect duration decreased from 5 to 3 seconds.
    - Maximum target highlighting distance increased to 120-180 m.
- «Striker»:
  - Min projectile speed decreased from 25-30 to 15-20 (m/sec);
    - Max projectile speed decreased from 700 to 300 (m/sec);
    - Shell acceleration time decreased from 3 to 2 seconds;
    - Shell angular velocity increased from 45-50 to 45-60 (deg/sec);
    - Maximum target highlighting distance increased to 120-180 m.
- «Vulcan»:
  - Projectile speed decreased from 250 to 150 (m/sec);
    - Critical damage per bullet increased from 22-44 to 44-88 HP;
    - «Incendiary band»:
    - Projectile speed reduction decreased from -50 to -20%.
    - Maximum target highlighting distance increased to 120-180 m.
- «Thunder»:
  - Projectile speed decreased from 400 to 300 (m/sec);
    - Maximum target highlighting distance increased to 120-180 m.
- «Railgun»:
  - Viking’s overdrive:
    - Reload boost decreased. You can get up to 10 shots during the overdrive.
    - «EMP Rounds» augment:
    - The «EMP» status effect duration decreased from 5 to 4 seconds.
    - Maximum target highlighting distance increased to 240-360 m.
- «Gauss»:
  - Projectile speed in regular mode decreased from 225 to 200 (m/sec);
    - «Electromagnetic salvo» augment:
    - The «EMP» status effect duration decreased from 5 to 4 seconds.
    - Maximum target highlighting distance increased to 240-360 m.
- «Shaft»:
  - Maximum target highlighting distance increased to 240-360 m.
- «Terminator»:
  - \[Note\] This is the Juggernaut's turret;
    - Damage per rocket increased from 435-1760 to 450-1800 HP;
    - Aiming time decreased to 1.4 - 1.2 seconds;
    - Initial projectile speed increased from 25 to 120 (m/sec);
    - Max projectile speed decreased from 700 to 60 (m/sec);
    - Shell acceleration time decreased from 3 to 2 seconds;
    - Shell angular velocity increased from 55 to 90 (deg/sec).
- Paladin hull
  - Overdrive charge duration increased from 270 to 360 seconds.
- Mine
  - Mine activation time decreased from 100 to 50 ms.;
    - Min visibility distance increased to 15 m.;
    - Full visibility distance increased to 10 m.;
    - The minimum range for placing mines from the base increased to 10 m.
- Equipment change cooldown increased from 8 to 9 minutes.
- The «General» chat channel is now read-only up to the rank of Master Sergeant (8).
- Fixed low battery indicator on an equipped drone in the lobby.
- Fixed the notification settings.
- Small previews of Mk1 turrets from containers are replaced with large ones.

### January 28th (Update 677)

- Added a new augment into Ultra Containers: Twins’ «Plasma Turbo Accelerators» augment
  - Note: This augment significantly increases both rate and range of fire. Main damage will be being dealt with critical hits.
- Added new special offers to the Shop’s showcase:
  - Container ×1 – 1230 crystals;
    - Repair kit ×30 – 225 crystals;
    - Boosted armor ×30 – 75 crystals;
    - Boosted damage ×30 – 75 crystals;
    - Speed boost ×30 – 75 crystals;
    - Mine ×30 – 75 crystals.
- Paid showcase refresh is no longer available. The showcase is refreshed automatically every day.
- All the old special offers are removed from the Shop’s showcase.
  - Note: You also no longer can get equipment kits from the Shop’s showcase. However, the kits will be returned later with the «Contracts» system that will be added to the Shop in the new interface. Stay tuned!
- Added a 1.1s delay before shooting for all overdrives except Wasp’s one.
  - Note: Now players will need to plan their actions in advance before using an overdrive. This way players can show their skills of using overdrives. Perhaps some overdrives may become weaker. We will watch how tankers adapt to the changes and make adjustments if needed.
- All the hulls except Wasp lose 50% of the overdrive charge in case its launch was interrupted.
- The «EMP» status effect now only forces «Repair kit» and «Mine» supplies to reload when their remaining cooldown time is less than the duration of the applied effect.
  - Note: In other words, applying the «EMP» status effect will not speed up enemies’ reload of «Repair kit» and «Mine» supplies.
- Striker’s «Stunning missiles» augment:
  - Only one opponent is stunned, the one that was hit by the rocket.
- Hopper:
  - Jump power increased by 10%;
    - Maximum height of jumps increased by 30-40%;
    - Slightly increased vertical stabilization power;
    - Note: The change doesn’t affect flight stabilization but improves stabilization when moving over uneven ground.
    - Distance between the hull and ground decreased from 0.8 to 0.3m.
- Paladin:
  - The tank can now flip over when falling off a cliff;
    - Distance between the hull and ground decreased from 0.75 to 0.3m.
- Crusader:
  - The tank can now flip over when falling off a cliff;
    - Distance between the hull and ground decreased from 0.75 to 0.3m.
- Ares:
  - The tank can now flip over when falling off a cliff;
    - Distance between the hull and ground decreased from 0.75 to 0.3m;
    - Overdrive damage/healing radius increased to 10m;
    - The range of mutual detonation of balls of different teams is 5m.;
- Item availability per rank changes:
  - «Driver», «Trooper», and «Engineer» drones — available starting from the «Sergeant-Major» rank;
    - «Sprinter», «Miner», and «Supplier» drones — available starting from the «Warrant Officer 4» rank;
    - «Assault», «Lifeguard», and «Mechanic» drones — available starting from the «First Lieutenant» rank;
    - «Blaster», «Saboteur», and «Camper» drones — available starting from the «Colonel» rank;
    - «Booster», «Defender», and «Trickster» drones — available starting from the «General» rank;
    - «Hyperion» drone — available starting from the «Generalissimo» rank;
    - «Mine» supply — available starting from the «Gefreiter» rank;
    - «Speed boost» supply — available starting from the «Corporal» rank;
    - «Boosted armor» supply — available starting from the «Master Corporal» rank;
    - «Boosted damage» supply — available starting from the «Sergeant» rank;
    - Crystals boxes in battles are replaced with Supplies starting from the «Master Sergeant» rank;
    - «Battery» supply — available starting from the «Sergeant-Major» rank;
    - Augments are available in the Garage and containers starting from the «Warrant Officer 1» rank.
- In the «Clans» section, searching for players through a special menu can now be used by pressing the «Enter» keyboard button.
- Fixed the bug in the mobile version with tank physics where two ball lightnings would self-destruct on the map.
- Changed the way the anti-cheat system reacts to movement, jumps, and flights in the «Parkour» mode.

### January 21st (Update 676)

- Added a new augment into Ultra Containers — Freeze’s «Magnetic Mix» augment
  - Note: Critical shots apply the «EMP» status effect, but damage is decreased by 50%.
- Removed Gold Boxes sets and Premium Pass from maximum item rarity categories
  - Note: This change will increase your chances to get more interesting items from Ultra Containers as the category’s chance remains constant, but chances of getting unique items inside the category are increased;
- Completely removed Shards from the browser version of the game
  - Note: The only way to get shards now is by watching ads in the mobile version of the game.
- Removed rank limits for PRO battles
  - Note: Now everyone can make a battle available from Sergeant to Legend ranks. That’s one more step closer to the new system of PRO battles we previously announced.
- Added push notifications to the mobile version of the game
  - Added an option to opt-out of receiving notifications by category in the Settings
- Freeze
  - «Toxic mix» augment
    - Decreased critical damage by 45%
- Tesla
  - Decreased ball lightning damage to values of ordinary damage (from 810-1620 to 405-810)
    - Increased damage boost from Berserk (Viking’s overdrive) from +150% to +400%
- Hammer
  - Decreased reload duration between shots from 2.5-1.8s to 2.3-1.7s
- Twins
  - «Tectonic Plasma» augment
    - Decreased the «Stun» status effect duration from 0.5s to 0.4s
- Smoky
  - «Paralyzing Rounds» augment
    - The «Stun» status effect duration decreased from 3s to 2s
    - Every shot is counted for Critical shot counter, not only the ones that deals damage
    - Note: This change possibly boosts the turret's power. Make 2-3 shots to a wall before shooting an opponent, and your chances to deal critical damage will be higher.
    - «Sorted Ammunition» augment
    - Every 4th shot is critical whether previous shots dealt damage or not
- Striker
  - «Stunning Missiles» augment
    - Decreased the «Stun» status effect duration from 0.5s to 0.4s - Removed decrease of reloading duration after salvo
- Ares
  - Increased Overdrive shot delay from 0.7s to 1s
    - Increased Overdrive speed from 9m/s to 18m/s
    - Increased Overdrive damage/Healing radius from 6m to 8m
- Fixed the list of possible rewards from containers
  - Note: Take into account that if a prize is not available for your rank, you will not see it in the list
- Fixed the bug with getting Mk1 equipment from containers even if a player already owns higher modifications of the item
- Fixed the bug with the client's crashing after one rejects an incoming clan application and returns to the list of outgoing clan invitations
- Fixed the bug with the Clan license purchase page's not reacting to the «Enter» keyboard button
- Fixed the bug with the client's crashing when one opens a clan tab with many members
- Added a limit to the amount of incoming clan applications.
  - Incoming clan applications expire after a set time period now.
    - Note: This should protect some clans from being attacked with spammed incoming applications
- Increased Showcase update price to 130 Tankoins
- Removed cards with the following items from the Shop Showcase: Premium Pass, Containers, Gold Boxes, Stars, \*Crystals, and sets of supplies
- Premium paint is no longer a perk of Premium Pass and has been added to Containers under the EPIC category
- The «Go back» button in a browser now works as the «Go back» button in the game client

### January 14th (Update 675)

- Added a new augment into Ultra Containers: Twins’ «Tectonic Plasma» augment
  - (Note) This augment applies a micro «Stun» effect to an opponent with each critical shot. The micro «Stun» effect is less effective in stopping opponents than the normal one but can be used to disable some abilities that take time to be activated (some overdrives and Vulcan’s barrel startup)
- When aiming at an opponent, you will now see an indication of turret reloading. Red outlines indicate that your turret is ready to shoot, and orange outlines show that your turret is still reloading.
  - (Note) We are interested in your feedback about this feature. It might be useful against Tesla, Shaft, Gauss, Thunder, etc.
- Common containers have been updated
  - Updated rarity group chances
    - The chance to get a COMMON item is 50% - The chance to get an UNCOMMON item is 34% - The chance to get a RARE item is 10% - The chance to get an EPIC item is 5% - The chance to get a LEGENDARY item is 1% - EXOTIC items are no longer found in common containers
    - Updated the list of items available from common containers
    - Removed gold boxes, Premium Pass, skins, and sets of supplies - Added legendary augments that were only available in Ultra Containers - Added shot effects and paints that were only available in Ultra Containers or Challenges - Added base modifications of all turrets, hulls, and drones (except Brutus and Crisis)
    - Updated the different ways of getting common containers
    - Special mission to rank up now rewards you with 1 common container - Special daily mission for Premium Pass owners now rewards you with 1 common container - Crystals and supplies have now been replaced with 1 common container in the daily mission prizes
    - (Note) It will now be much easier to get updated common containers after this update, and you will have access to new turret augments from common containers.
- Updated Ultra Containers
  - Updated rarity group chances
    - The chance to get a COMMON item is <1% - The chance to get an UNCOMMON item is 67% - The chance to get a RARE item is 20% - The chance to get an EPIC item is 10% - The chance to get a LEGENDARY item is 2% - The chance to get an EXOTIC item is <1%
    - (Note) Now, chances to get cool items from Ultra Containers are twice as likely as getting them from common containers. Exotic items will be items that are available for the duration of an ongoing event (new augments, skins, equipment that are released as a part of an event)
- Passive income of shards disabled
  - We have abandoned our plans on developing Shards in favor of giving more containers. The container you were getting from Shards every day can now be received for completing daily missions.
- Firebird:
  - Ordinary damage increased from 240-740 to 380-1060;
    - Critical damage decreased from 500-1500 to 380-1060;
    - Range of max damage decreased from 10-10 to 7-10 m.;
    - Critical damage chance decreased from 20% to 12%;
    - Energy consumption increased from 200 to 333 (eng/sec);
    - Energy Recharge duration decreased from 6 to 1 sec;
    - Cone angle decreased from 30 to 20 (º);
    - Firebird’s «High-pressure pump» augment:
    - Range of max damage increased by 50%; - Range of min damage increased by 50%; - Price increased to 245 000 crystals;
    - Firebird’s «Compact fuel tanks» augment:
    - Heating rate is always 100%; - Temperature limit is always 100%; - Reload time doubled;
    - Firebird’s «Incendiary mix» augment:
    - No longer affects energy consumption; - Ordinary damage change increased by 20% instead of 50%; - Critical damage change increased by 20% instead of 50%;
    - (Note) These changes are needed not only to buff Firebird but also to make its gameplay different from that of Freeze. The faster energy reload is reminiscent of the old Firebird, where you needed to rely on the afterburn effect. This version of Firebird will deplete its fuel faster, forcing you to make a decision on whether to attack the target again or to rely on the afterburn effect.
- Freeze:
  - Ordinary damage increased from 450-900 to 500-1000;
    - Critical damage decreased from 1800-3600 to 1500-3000;
    - Range of max damage decreased from 10-10 to 7-10 m.;
    - Rate of freezing (temp/sec) decreased from 0,6 to 0,2-0,5;
    - Cone angle decreased from 30 to 20 (º);
    - Freeze’s «Shock freeze» augment:
    - No longer affects energy consumption; - Freezing rate is always 100%; - No longer deal critical damage;
    - (Note) We are slightly moving focus from critical to ordinary damage. We are glad that you like the new Freeze, but we needed to moderately nerf it in order to keep balance.
- Tesla:
  - Chain lightning reload increased from 0.9 to 1 (s);
    - Tesla’s «Endothermic lightning» augment:
    - Lightning ball damage decrease changed from -50% to -75%; - Lightning ball warmup time doubled;
    - Tesla’s «Superconducting discharge» augment:
    - Lightning ball damage decrease changed from -50% to -75%; - Lightning ball warmup time doubled;
    - Tesla’s «Armour-piercing discharge» augment:
    - Lightning ball damage decrease changed from -50% to -75%; - Lightning ball warmup time doubled;
    - Tesla’s «Jamming discharge» augment:
    - Lightning ball damage decrease changed from -50% to -75%; - Lightning ball warmup time doubled;
    - (Note) These augments apply status effects and the idea behind them is to use them at long distances. However, players found it more useful to use these augments at melee range. Therefore, we had to nerf them as they were too effective in the melee range.
- Striker:
  - Striker’s «Stunning Missiles» augment:
    - The «Stun» effect duration decreased from 2 to 0.5 s.;
    - Aiming time reduction increased from 50% to 80%;
    - Salvo reload time increased by 40%;
    - (Note) The previous version of the stunning Striker could immobilize a target too easily. We have replaced the Stun status effect with the Micro-stun status effect, similar to the one that the new Twins augment gives.
- Paladin:
  - Critical damage protection during overdrive disabled.
    - (Note) The idea behind Paladin’s overdrive was that Crusader’s overdrive would be the main counter to it. Unfortunately, much fewer players use Crusader than Paladin, so we have decided to let the overdrives of Hornet and Viking, the most popular hulls in the game, be effective against Paladin’s overdrive.
- Hull augments:
  - Prices of «Lightweight Construction» and «Heavyweight Construction» augments are now at 245 000 crystals instead of 4990 Tankoins.
- Equipment change time increased from 7 to 8 minutes;
- PRO battles
  - PRO battles are available starting from the Sergeant rank;
    - Sport and Classic formats are added to PRO battles, but you cannot earn crystals or experience in them (like in the Parkour mode);
    - Removed DR, XP, and BP formats. The XP/BP format is kept;
- Updated Shop prices for particular countries.

## 2021

### December 24th (Update 674)

- Added the New Year’s Garage with special music
- Updated the default appearance of the Freeze turret with the HD version
- Added a new augment for Freeze: «Jamming Mix» — when dealing damage to an enemy, a Jammer effect is applied to his tank for 1 second
  - The Jammer effect of this augment is applied together with the Freezing effect.
- Updated the «High-pressure pump» augment for Freeze:
  - The augment now increases both the maximum and minimum range of damage by 50%.
    - Increased cost of the augment to 245,000 crystals
- Added the Old New Year map to PRO-Battles
- Added a winter version of the Sandbox Remastered map to PRO-Battles
- Changed the descriptions of drones in the Garage
  - Fixed descriptions for the functions of each drone
    - Added more detailed information about the drone's effect on supply reloading and consumption of additional supplies and about how upgrades affect a drone
    - The description for the «Brutus» drone even emphasizes that it does NOT use batteries.

### December 10th (Update 672)

- New Twins’ «Cryotron» augment available in Ultra Containers:
  - Critical shots freeze a target by 50%;
    - Range of max damage is increased by 50%;
    - Critical damage is decreased 50%;
- Isida
  - Max crit chance has been increased from 10% to 12%;
- Tesla
  - Max crit chance has been increased from 10% to 12%;
- Hammer
  - Max crit chance has been increased from 10% to 12%;
    - Range of max damage has been decreased from 40-60 to 30-40 m.;
    - Range of min damage has been decreased from 50-70 to 40-50 m.;
    - Range of displaying the sight mark distance has been decreased from 40-60 to 35-45 m.;
- Twins
  - Projectile speed has been increased from 40-60 to 50-60 (m/sec);
    - Range of max damage has been decreased from 40-60 to 30-40 m.;
    - Range of min damage and displaying the sight mark distance have been decreased from 50-70 to 40-50 m.;
- Ricochet
  - Max crit chance has been increased from 10% to 12%;
    - Max number of bounces has been decreased from 20 to 10;
    - Range of max damage has been decreased from 40-60 to 30-40 m.;
    - Range of min damage and displaying the sight mark distance have been decreased from 50-70 to 40-50 m.;
- Striker
  - Max crit chance has been increased from 10% to 12%;
- Smoky
  - Reload time has been decreased from 1.8-1.4 to 1.6-1.2 s.;
    - Range of max damage has been decreased from 70-100 to 60-80 m.;
    - Range of min damage and displaying the sight mark distance have been decreased from 120-170 to 80-120 m;
    - Weak damage percentage has been decreased from 50% to 25%;
- Vulcan
  - Max crit chance has been increased from 10% to 12%;
    - Turret rotation slowdown when firing has been weakened from 40-25% to 40-30%;
    - Range of max damage has been decreased from 70-100 to 60-80 m.;
    - Range of min damage and displaying the sight mark distance have been decreased from 120-170 to 80-120 m.;
    - Weak damage percentage has been decreased from 50% to 25%;
- Thunder
  - Range of max damage has been decreased from 70-100 to 60-80 m.;
    - Range of min damage has been decreased from 100-150 to 80-120 m.;
    - Displaying the sight mark distance has been decreased from 120-170 to 80-120 m.;
    - Weak damage percentage has been decreased from 50% to 25%;
- Magnum
  - Max crit chance has been increased from 10% to 12%;
- Magnum’s «Mortar» augment
  - No longer decreases the turret’s damage but splash damage is removed fully;
- Gauss
  - Range of max damage has been decreased from 70-100 to 60-80 m.;
    - Range of min damage and displaying the sight mark distance have been decreased from 100-150 to 80-120 m.;
    - Weak damage percentage has been decreased from 50% to 25%
- Shaft
  - Sniping shot reload time has been increased from 9 to 10 seconds;
    - Regular Arcade damage has been increased from 290-580 to 335-670 hp;
    - Critical Arcade damage has been increased from 340-680 to 350-700 hp;
    - Range of max damage has been increased from 40-60 to 60-80 m.;
    - Range of min damage and displaying the sight mark distance have been increased from 50-70 to 80-120 m.;
    - Maximum critical chance has been decreased from 20% to 12%;
    - Sniping shots now consume 20% of the available energy after the warm up and some amount of energy used for the warm up.
- Shaft’s «Light capacitors» augment
  - Recharge rate after sniping shot boost has been increased from 15% to 20%;
    - Sniping shot now consume half as much energy;
- Shaft’s «Heavy capacitors» augment
  - Recharge rate after sniping shot reduction has been increased from 15% to 20%;
    - Sniping shot now consume twice as much energy;
- Shaft’s «Armor-piercing sight» augment
  - Sniping shot now consume half as much energy;
- Hopper
  - Overdrive charge duration has been decreased from 180 seconds to 150 seconds.
- Crisis drone now consume additional units of «Repair kit» and «Mine» supplies when they are used.

### December 3rd (Update 671)

- Updated the standard skin for Twins to the HD version
- Updated the shot sound effects of Twins
- Added new augment for Twins — «Vaporizer», available in Ultra Containers
  - Critical damage ignites a target with a limit of 50% of the maximum temperature.
    - Projectile speed is reduced by 45%.
- Updated the effects inflicted by «Jammer»
  - In addition to blocking overdrive activation, it now also disables drones and, if applicable, their boosted effects for the entire duration of the status effect.
    - Drones «Brutus» and «Hyperion» are immune to this effect.
    - With this change, Jammer becomes comparable in strength to other status effects. «Jammer» is now an «antidote» to most drones. Popular drones like Defender and Booster are obviously weakened. Crisis loses its ability to enhance supplies and will instead function like Brutus. And drones such as «Blaster» and «Lifeguard» will not be able to perform their functions if they are disabled by the Jammer effect.
- Added «Jammer Immunity» augments to the Garage for purchase.
- Added «Jammer Immunity» augments to containers.
- Updated the «Freezing» status effect
  - In addition to slowing down enemy tanks, it now also disables Boosted Damage effects for the entire duration of the status effect.
    - This status effect was the weakest one. Increasing the slowdown effect is not the solution to this problem. Instead, we strengthened this status effect by adding a mechanism similar to the Armor-Piercing status effect’s capabilities. Instead of disabling additional armor, it disables the effect of Boosted Damage. This change will increase the role of both Freezing augments and the Freeze turret itself, especially when used for defensive roles. Share your feedback about the new «Freezing» status effect!
    - When taking a bonus box, a drone will activate only if it depends on the supply offered by the bonus box.
    - Activating a drone this way is similar to activating a drone by using supplies from your Garage. For example, if you have the Defender drone equipped, and you take a Boosted Armor bonus box, the drone will be activated.
- Updated the «Camper» drone
  - Now the drone increases damage by 60% and armor by 90% when your tank has full health.
    - Once you receive damage, the drone starts reloading and will keep on reloading until your tank has fully recharged its health points.
    - The drone also reduces Repair Kit cooldown when using supplies.
    - The old version of the drone was not popular at all. Please note that the enhanced armor only protects the tank from the first oncoming damage received when «Camper» is activated. This makes the drone effective against other campers, but almost useless against turrets with rapid fire rates.
- Updated the «Engineer» drone
  - Now the drone repairs all tanks in a small radius around itself if any of these tanks picks up a bonus box.
    - The previous version of «Engineer» on high ranks could spoil teammates’ tactics for using their drones.
- Updated the «Supplier» drone
  - Now the drone does not extend the duration of its own supplies.
    - The duration of the supplies shared with allies is reduced.
    - Shared Boosted Armor and Boosted Damages will activate the effects of allied Defenders and Boosters respectively.
    - The previous version of the «Supplier» drone had problems similar to that of the «Engineer» drone.
- Updated the «Hyperion» drone
  - Now the drone accelerates cooldown of supplies, including repair kits and mines.
- Updated the «Trickster» drone
  - Hull acceleration is reduced from +30% to +10%.
    - Enhancement to Speed Boost remains unchanged.
- Updated the «Crisis» drone
  - Now taking bonus boxes does not change the supply boosted at the time.
    - Hull acceleration is reduced from +30% to +10%.
    - Enhancement to Speed Boost remains unchanged.
- Updated the «Firebird» turret
  - Maximum damage range is increased from 7 meters to 10 meters.
- Updated Tesla’s «Jamming discharge» augment
  - The «Jammer» status effect duration is reduced from 15 seconds to 7 seconds.
- Updated Twins’s «Stable plasma» augment
  - Projectile speed is increased by 20%.
    - Impact force is increased by 20%.
    - Price of augment is increased to 245,000 crystals.
- Updated Ricochet’s «Plasma-torch» augment
  - Recoil is now reduced by 50% rather than 80%.
- Updated the «Striker» turret
  - Vertical aim-assist is increased from 9 degrees to 45 degrees.
    - This allows the turret to destroy flying targets.
- Updated the «Vulcan» turret
  - Vertical aim-assist is increased from 9 degrees to 45 degrees.
    - Impact force is increased from 0.5-1 to 1-2.
    - This allows the turret to destroy flying targets.
- Updated the «Railgun» turret
  - Reloading time is increased from 3.3-2.6 seconds to 4.4-2.6 seconds;
- Updated the «Round destabilization» augment
  - Critical damage is increased by 26%.
    - Standard damage is decreased by 50%.
    - Impact force is no longer increased.
    - The previous version of the settings dealt with the problem of the excessive efficiency of the augment but also raised many questions when used with the «Supercharge» status effect. To avoid confusion, the settings were changed to a version with lower damage spread.
- Updated the «Hyperspace rounds» augment
  - Regular damage damage bonus is increased from +40% to +45%.
    - Impact force reduction is increased from -25% to -30%.
- Updated the «Wasp» hull
  - The duration of the «Jammer» status effect applied by its bomb is decreased from 30 seconds to 9 seconds.
    - This is due to the updated effect of Jammer on drones.
- Updated the «Hopper» hull
  - Overdrive charge duration is decreased from 180 seconds to 150 seconds.
    - Duration of the «Stun» status effect is increased from 1 second to 3 seconds.
    - The maximum angle at which the hull remains controllable has been increased from 20 degrees to 180 degrees.
    - Force of stabilizers is reduced from 10 to 6.
    - Maximum angle of list is increased from 60 degrees to 360 degrees.
    - Hopper's hull is no longer able to effectively stabilize itself during flight. Any hit by an enemy shot, takeoff from a rough surface, or hitting other objects while flying will significantly change Hopper's flight path. To compensate for these changes, its overdrive charging speed in battle has been increased. These changes are a response to feedback that a flying Hopper is almost impossible to stop.
- Updated the «Hunter» hull
  - Duration of the «Jammer» status effect applied by its overdrive is reduced from 18 seconds to 9 seconds.
- This is due to the updated effect of Jammer on drones.
- Updated the maximum Gear Score for hulls, turrets, and drones to 2733 units each.
- Fixed the bug with battle interface glitches after changing equipment.
- Fixed the bug with the search bar of the «Friends» list.

### November 19th (Update 669)

- The Paladin hull is available for purchase in the garage with crystals.
- The Paladin XT skin is now available in the updated Ultra Containers.
- Gear Score distribution changed:
  - Turret/Hull Mk1 up to 350 GS
    - Turret/Hull Mk2 up to 700 GS
    - Turret/Hull Mk3 up to 1050 GS
    - Turret/Hull Mk4 up to 1400 GS
    - Turret/Hull Mk5 up to 1750 GS
    - Turret/Hull Mk6 up to 2100 GS
    - Turret/Hull Mk7 up to 2700 GS
    - Drone up to 2799 GS
    - Turret/Hull augment 300 GS
    - Now the Turret, Hull, and Drone have almost the same “weight” in GS points, which reflects the real situation with power level after making supplies power be upgradable by drones.
- Tesla:
  - «Jamming discharge» augment
    - Duration of the «Jammer» status effect is increased to 15 seconds.
- Hammer:
  - «Jamming Shot» augment
    - The «Jammer» status effect is applied with every shot, not just the last. - The «Jammer» status effect’s duration is reduced from 7 to 5 seconds.
- Twins:
  - «Heavy Plasmagun» augment
    - Projectile speed slows down by 45% instead of 35%.
- Ricochet:
  - «Plasma-torch» augment
    - Turret recoil is reduced by 80%.
    - This change not only simplifies the use of the augment on light hulls, but also significantly reduces the range of Hopper in combination with the «Lightweight Construction» augment.
- Vulcan:
  - «Incendiary band» augment
    - Rate of fire is reduced by 25%; - Tank starts to overheat 75% faster.
- Thunder:
  - Reload duration is increased from 3-2.2 to 3.2-2.3 seconds.
    - Critical damage radius is increased to 12 meters.
    - Critical hit chance is increased from 10% to 15%.
    - The maximum splash radius is increased to 2 meters.
    - The percentage of medium damage is reduced to 25%.
    - The percentage of weak damage is reduced to 10%.
    - Impact power is increased from 1.5-3.3 to 2-5.
    - «Small caliber charging machine» augment
    - Critical damage is reduced by 20%.
    - «Subcaliber rounds» augment
    - Rate of fire is increased by 15% instead of 10%.
    - «”Sledgehammer” rounds» augment
    - Critical chance is now 0%.
    - Standard damage now requires more accurate shooting, because its explosion damage is quickly weakened. On the contrary, critical damage now acts in the entire radius of the explosion. According to our idea, such a Thunder should become less effective when shooting thoughtlessly and more effective when the player clearly understands when to shoot accurately, and when to hit the walls and wait for a critical shot.
- Railgun:
  - «Electromagnetic accelerator "Scout"» augment
    - Impact force is reduced by 40%. - Rate of fire is increased by 20% instead of 30%. - Shot warmup time is 30% faster instead of 25%.
    - «Large caliber rounds» augment
    - Recharge time is increased by 90% instead of 60%.
    - «Round destabilization» augment
    - Maximum critical chance is reduced from 70% to 50%. - Critical damage is reduced to fixed 50 units. - Standard damage is increased by 180%.
    - All these augments are weakened in different ways due to their high efficiency. The most interesting changes came with the «Round destabilization» augment. Now the main damage dealt is of the standard type, instead of critical. This means that this augment can no longer ignore Railgun protection in battle, as it was before critical damage was introduced.
- Hopper:
  - Overdrive charging time is increased from 180 to 210 seconds.
- Hunter:
  - Overdrive radius is increased from 25 to 30 meters.
    - The «Stun» status effect’s duration is increased from 3 to 4 seconds.
    - The «EMP» status effect’s duration time is increased from 5 to 6 seconds.
- Crusader:
  - Armor Piercing Icicle damage is increased from 1000-2000 to 1500-3000.
    - Reverts the previous damage settings for the Crusader overdrive. They are more justified for slow charging.
- «Booster» drone:
  - Supply boost is reduced from 20-40% to 15-30%.
    - The performance of this drone is still superior to all other drones.
- TDM game mode is now limited to 150 eliminations in Matchmaking.
- The volume of enabling and disabling supplies has been standardized.
  - The sounds of the «Boosted armor» supply will no longer be so loud.
- The «Chernushka» map is available in Matchmaking and Pro battles in TDM, CP, CTF, RGB, ASL, and TJR modes
- Added the option to disable the «Nuclear energy» supply in PRO Battle settings.
- When creating a battle in the «Parkour» format, the option to disable gold boxes is now available.
- Improved notification system for invitations to battles if the game tab is inactive.
- Improved the textures of the standard Smoky skin.

### November 4th (Update 668)

- Updated Ultra Containers with the new Paladin Mk1 hull in early access and the newly released augment for the Tesla turret — «Superconducting discharge»:
  - With this augment equipped, electric discharges become so powerful that tank electronics fail and disable activated supplies. It's absolutely safe for its owner and teammates: the innovative aiming system blocks the effect of ball lightning towards them. However, the ball flies so fast that it's almost impossible to use it for chain lightning.
- For all HD models of turrets and hull LOD feature has been added
  - At long distances, high-quality models are replaced with less detailed models to save device’s resources and improve performance
- Railgun
  - Shot sound is replaced with the one that was used in Tanki X, more pleasant and proper sound for this turret
    - Impact force is increased from 260-780 to 400-1200 units.
    - Round destabilization augment: removed the Impact force bonus.
    - Improved shot rate while a tank is under Viking’s overdrive effect
- Wasp
  - After overdrive activation, it won’t be charging from battle points for 4 seconds
    - Damage radius is decreased from 25 to 20 metres (not status effect radius)
    - Jammer status effect duration is increased from 6 to 30 seconds
    - Jammer status effect radius is decreased from 1000 to 60 metres
    - Time needed to charge overdrive without getting battle points is increased from 100 to 150 seconds
- Hornet
  - Armour piercing status effect radius is increased from 50 to 60 metres
    - Armour piercing status effect duration is increased from 3 to 5 seconds
    - Overdrive duration is increased from 20 to 30 seconds
    - Time needed to charge overdrive without getting battle points is increased from 111 to 180 seconds
- Hopper
  - Time needed to charge overdrive without getting battle points is increased from 125 to 180 seconds
- Viking
  - Time needed to charge overdrive without getting battle points is increased from 250 to 360 seconds
- Paladin
  - Time needed to charge overdrive without getting battle points is increased from 125 to 270 seconds
- Hunter
  - Jammer status effect duration is increased from 9 to 18 seconds
    - Jammer status effect radius is decreased from 1000 to 60 metres
    - Time needed to charge overdrive without getting battle points is increased from 111 to 180 seconds
- Crusader
  - After overdrive activation, it won’t be charging from battle points for 6 seconds instead of 3 seconds
    - Time needed to charge overdrive without getting battle points is increased from 71 to 150 seconds
- Dictator
  - Total Charge restored is decreased from 50% to 25%
    - Supercharge status effect duration is increased from 5 to 6 seconds
    - After overdrive activation, it won’t be charging from battle points for 7 seconds instead of 1 second
    - Time needed to charge overdrive without getting battle points is increased from 143 to 270 seconds
- Ares
  - Ball’s speed is decreased from 10 to 9 m/s
    - After overdrive activation, it won’t be charging from battle points for 9 seconds
    - Time needed to charge overdrive without getting battle points is increased from 143 to 180 seconds
- Titan
  - Time needed to charge overdrive without getting battle points is increased from 125 to 270 seconds
- Mammoth
  - Overdrive duration is increased from 7 to 9 seconds
    - After overdrive activation, it won’t be charging from battle points for 10 seconds instead of 8 seconds
    - Time needed to charge overdrive without getting battle points is increased from 71 to 150 seconds
- Saboteur drone
  - Additional Mine activation delay is increased from 2-1 to 5-4 seconds
    - Circle radius is increased from 4-5 to 4-6 metres
- Mine
  - Critical damage chance is increased from 1% to 5%
    - Activation time is decreased from 1 to 0.1 seconds
    - Distance between a mine and a tank to see the mine is increased from 10 to 12 metres
- Respawn invulnerability time has been changed. For team modes, invulnerability has been increased to 6 seconds. For solo modes, invulnerability has been reduced to 4 seconds
- Equipment change cooldown is increased from 180 to 360 seconds
  - To maintain the previous equipment change frequency after increasing the battle duration
- Highways map — defense point in ASL mode moved under the bridge closer to the enemy.
- Kungur map — respawns in ASL mode moved further away from the defense point.
- Lost Temple map — added kill zones in the pits near the central temple.
- Scope map — flag bases moved from the edges of the map to the center, opposite to the central passage to the bases.
- Solikamsk map — respawns in SGE mode moved as far as possible from the capture points.
- Kolhoz map — Removed from matchmaking map pool.
- Supply activation sounds replaced with Tanki X version
- Replaced the tank destruction sound with an improved version from Tanki X.
- Replaced the gold box siren sound with an improved version from Tanki X.
- Lobby music moved to the login / registration screen.
- Garage music replaced with garage background sounds.
- Added separate graphic settings for remastered maps
- Fixed a bug that didn’t let to use ball lightnings of teammates to make lightning chains in Android
- Fixes and optimizations of the remastered maps on the Android client.

### October 22nd (Update 667)

- Updated Ultra Containers with the new Mk1 Paladin hull in early access and the newly released augment for the Tesla turret — «Jamming discharge»
  - A modification with fast-moving ball lightning that restarts the overdrive system of any tank on contact, instantly destroying enemy powers.
- Updated Wasp's default skin to HD quality.
- Matchmaking battles are now 15 minutes long.
- Adjusted the number of points needed to finish an MM battle:
  - TDM: 200;
    - DM: 999;
    - JGR: 999;
    - ASL: 150
    - The attacking team gets 6 points per flag captured.
- Adjusted the number of stars you earn per battle:
  - In the winning team, players on 1st-4th places get 3 stars and players on 5th-10th places get 2 stars;
    - In the losing team, players on 1st-2nd places get 3 stars and players on 3rd-5th places get 2 stars;
    - Other players get 1 star if they were active enough in the battle.
- For all hulls, overdrive charge per battle point (%) is halved.
- Juggernaut’s overdrive charge duration is increased from 40 to 60 seconds.
- Firebird:
  - Damage is increased from 50-175 to 60-185 hp/tick;
    - Critical damage is increased from 100-350 to 125-375 hp/tick;
- Hammer:
  - Clip reload time is increased from 4-3 to 4.4-3.3 seconds;
- Ricochet:
  - Damage per shot and Critical damage are decreased from 180-350 to 170-340 hp;
    - Number of shots is increased from 15-29 to 29-29.

Gauss:

- - Reload time sniping mode is decreased from 4-3 to 3.6-2.7 seconds.
- Shaft:
  - Reload time in sniping mode is decreased from 10 to 9 seconds.
- Hammer’s «Blunderbuss» augment:
  - Initial and Maximum critical chances are increased to 50%;
    - No longer decreases clip reload time.
- Smoky’s «Autocannon» augment:
  - Regular shot damage reduction is increased from 75% to 90%;
    - Projectile speed reduction is increased from 25% to 30%.
- Railgun’s «Super armour-piercing rounds» augment:
  - Armour-Piercing status effect duration is decreased from 7 to 5 seconds.
- Railgun’s «Paralyzing Rounds» augment:
  - Stun status effect duration is decreased from 5 to 2 seconds.
    - No longer decreases critical damage.
- Railgun’s «EMP Rounds» augment:
  - EMP status effect duration is decreased from 10 to 5 seconds.
    - No longer decreases critical damage.
- Railgun’s «Incendiary rounds» augment:
  - No longer decreases critical damage.
- Railgun’s «Electromagnetic accelerator "Scout"» augment:
  - Reload time reduction is decreased from 50% to 30%.
- Magnum’s «Mortar» augment:
  - Damage and Critical damage reduction is increased from 10% to 30%
- Shaft’s «Light capacitors» augment:
  - Recharge rate after sniping shot is increased from +10% to +15%.
- Shaft’s «Heavy capacitors» augment:
  - Recharge rate after sniping shot is decreased from -10% to -15%.
- «Driver» drone:
  - Maximum Overdrive Charge Added is decreased from 10 to 7 seconds.
- «Trooper» drone:
  - Active time (sec) is decreased from 10 to 7 seconds.
- «Supplier» drone:
  - The number of experience and battle score for supporting teammates is increased to 10 points
- «Mechanic» drone:
  - The number of experience and battle score points for supporting teammates is increased to 10 points.
- Fixed a bug where the supply cooldown timer wasn’t working as expected when interacting with Support drones.
- Fixed memory leaks in the Android version of the game.

### October 15th (Update 666)

- Updated Ultra Containers with the new Mk1 Paladin hull in early access and the newly released augment for the Tesla turret — «Shocking Lightning»
  - Tired of opponents destroying you? Need to quickly freeze an enemy? If so, this augment will help you greatly. Technology inherited from Hunter's OD lets the ball of lightning stop fast-moving opponents for a brief period of time.
- Railgun:
  - Shot reload time (sec) has been decreased from 4,4-2,6 to 3,3-2,6 sec;
    - Impact force has been increased from 220-650 to 260-780;
    - Critical hit chance after dealing crit damage has been increased from 10% to 50%.
- Shaft:
  - Energy per arcade shot (eng) has been decreased from 250 to 0 eng;
    - Sniping shot reload time has been increased from 3-5 to 10 seconds;
    - Regular Arcade damage (hp) has been decreased from 335-670 to 290-580 hp;
    - Critical Arcade damage (hp) has been decreased from 490-980 to 340-680 hp;
    - Range of max damage (m) has been increased from 20-30 to 40-60 m;
    - Range of min damage (m) has been increased from 30-40 to 50-70 m;
    - Horizontal aiming speed (deg/sec) has been increased from 15-30 to 20-40 deg/sec.
    - The key change here is that arcade shots no longer consume energy. Earlier, both arcade and sniping shots consumed energy. You could only use the arcade shot if you had enough energy to shoot. Now it’s similar to Tesla, where you can still use the arcade mode and deal damage to opponents, but at no cost to the energy, even when the turret is still reloading.
- Shaft’s «Heavy Capacitors» augment:
  - Sniping shot reload time has been increased by 10%.
- Shaft’s «Light Capacitors» augment:
  - Sniping shot reload time has been decreased by 10%.
- Shaft’s «Rapid-Fire Mode» augment:
  - No longer increases sniping shot reload time.
- «Brutus» drone:
  - Cost of fully upgrading the drone has been decreased from 500 000 to 100 000 crystals.
    - This should make it easier for players to use the main feature of the drone, that is, increasing the strength of the supplies.
- «Driver», «Trooper», and «Engineer» drones:
  - Cost of fully upgrading each drone has been reduced from 1 000 000 to 500 000 crystals.
    - These drones are now at an intermediary level between «Brutus» and higher level drones. They are weaker, but still consume batteries and enhance the default characteristics of the tank.
- «Sprinter» drone:
  - Reduction of Speed Boost cooldown has been increased from 5 to 15 seconds.
- «Supplier» drone:
  - Additional Supplies Active Time has been increased from 5-10 seconds to 5-15 seconds.
- «Booster» drone:
  - Boosted Damage bonus has been decreased from 25%-50% to 20%-40%.
- «Trickster» drone:
  - Speed Boost bonus has been increased from 15%-30% to 20%-40%.
- The map «Archipelago MM» has been removed from the matchmaking pool.

### October 8th (Update 665)

- Updated Ultra Containers with the new «Paladin» hull Mk1 and the new Tesla’s «Armour-piercing discharge» augment inside:
  - With this augment equipped, Tesla shoots ball lightning that flies as fast as the one Electroturret shoots. It applies the AP status effect for 5 seconds, but deals less damage.
- Fixed overdrive recharge:
  - The game now saves your overdrive charge when you become Juggernaut and once you are not, you get your overdrive charge back.
    - When you are disconnected or get an exception, after you join back your overdrive charge is restored.
- «Boosted armor» supply:
  - Cooldown time is decreased from 30 to 20 seconds;
    - Smart cooldown for Boosted damage is decreased from 10 to 5 seconds.
- «Boosted damage» supply:
  - Cooldown time is decreased from 30 to 20 seconds;
    - Smart cooldown for Boosted armor is decreased from 10 to 5 seconds.
- «Speed boost» supply:
  - Cooldown time is decreased from 30 to 20 seconds;
- «Driver» drone:
  - Overdrive Charge Added is 10 seconds instead of 6 seconds;
    - Master Sergeant — 20 000 crystals.
- «Trooper» drone:
  - Maximum duration of activated supplies is decreased from 20 to 10 seconds;
    - Drone's recharge time is decreased from 20 to 3 seconds;
    - Removed the consumption of an additional unit of Boosted armor supply when activated;
    - Master Sergeant — 20 000 crystals.
- «Engineer» drone:
  - Maximum added duration to the effects of other drops (BA, BD, SB) is decreased from 40 to 30 seconds;
    - Master Sergeant — 20 000 crystals.
- «Sprinter» drone:
  - Added reduction of Speed boost cooldown — -5 seconds;
    - Drone's recharge time is decreased from 20 to 9 seconds;
    - Warrant Officer 2 — 50 000 crystals.
- «Miner» drone:
  - Maximum number of saved Mines is increased to 100 units;
    - Reduction of Mine cooldown is increased from -10 seconds to -15 seconds;
    - Drone's recharge time is increased to 30 seconds instead of 10 seconds;
    - Warrant Officer 2 — 50 000 crystals.
- «Supplier» drone;
  - Maximum supplies additional active time is increased to +10 seconds instead of +5 seconds;
    - Drone's recharge time is decreased from 10 to 3 seconds;
    - Warrant Officer 2 — 50 000 crystals.
- «Assault» drone:
  - Maximum reduction of supplies cooldown is increased to -15 seconds instead of -5 seconds;
    - Added consumption of an additional unit of Boosted damage supply when activated;
    - Third Lieutenant — 90 000 crystals.
- «Lifeguard» drone:
  - Added reduction of Boosted armor cooldown — -5 seconds;
    - Drone's recharge time is increased from 30 to 60 seconds;
    - Third Lieutenant — 90 000 crystals.
- «Mechanic» drone:
  - Maximum bonus to instant HP regained is increased to +1000 HP instead of +500 HP;
    - Reduction of Repair Kit cooldown is increased from -10 to -15 seconds;
    - Drone's recharge time is decreased from 10 to 3 seconds;
    - Third Lieutenant — 90 000 crystals.
- «Blaster» drone:
  - Added reduction of Boosted damage cooldown — -5 seconds;
    - Removed the consumption of an additional unit of Boosted damage supply when activated;
    - Added the consumption of 3 additional units of Mine supply when activated;
    - Major — 140 000 crystals.
- «Saboteur» drone:
  - The number of additional mines is decreased to 7 instead of 8;
    - Consumption of additional units of Mine supply when activated is increased from 5 to 7 units;
    - Drone's recharge time is decreased from 40 to 30 seconds;
    - Major — 140 000 crystals.
- «Camper» drone:
  - Drone's recharge time is decreased from 7 to 3 seconds;
    - Major — 140 000 crystals.
- «Booster» drone:
  - Additional Boosted damage bonus is decreased from +200% to +50%;
    - Duration of additional Boosted damage bonus is increased from 3 to 30 seconds;
    - Reduction of Boosted Damage cooldown is decreased from -10 to -5 seconds;
    - Duration is increased to 30 seconds instead of 3 seconds;
    - Major General — 200 000 crystals.
- «Defender» drone:
  - Additional Boosted armor bonus is decreased from +100% to +50%;
    - Reduction of Boosted armor cooldown is decreased from -10 to -5 seconds;
    - Duration is increased from 20 to 30 seconds;
    - Major General — 200 000 crystals.
- «Trickster» drone:
  - Duration is increased from 10 to 30 seconds;
    - Major General — 200 000 crystals.
- «Hyperion» drone:
  - Consumption of additional units of supplies when activated is decreased from 2 to 1 unit;
    - Field Marshal - 320 000 crystals.
- «Crisis» drone:
  - Boosted damage bonus is increased from +50% to +60%;
    - Boosted armor bonus is decreased from +100% to +90%.
- Wasp, Hornet and Hopper hulls now have a speed of 9-12 m/s.
- Updated icons of all «Jammer Immunity» augments.

### October 1st (Update 664)

- Updated Ultra Containers with the «Paladin» Mk1 hull in early access and the new Tesla’s «Endothermic Lightning» augment.
- It shoots ball lightning with the same speed as Electroturret does, but freezes an opponent and deals less damage.
- Starting from 2 AM UTC October 1st till 2 AM UTC October 10th the battle duration will be increased to 15 minutes.
- Added the «Nuclear Energy» supply.
  - Hold the overdrive activation button for more than 1 second and in case your overdrive recharge is less than 90%, your overdrive will be fully charged. The «Jammer» status effect will be applied for 3 seconds. Reload time of this supply is 3 seconds.
- Updated Challenges. The new «Nuclear Energy» supply is the final prize.
- Changed the Battle Pass price for the next challenge, it will cost 700 Tankoins.
- Tesla:
  - Decreased chain lightning damage from 490-980 to 405-810 (hp);
    - Decreased ball lightning damage from 980-1960 to 810-1620 (hp).
- Smoky:
  - Increased default damage from 270-535 to 290-580 (hp);
    - Increased critical damage from 700-800 to 710-850 (hp);
    - The «Rubberized Rounds» augment now increases the number of ricochets to 3 instead of 2.
- Striker:
  - Increased default damage from 435-880 to 450-900;
    - Increased critical damage from 870-1760 to 900-1800;
    - The «Missile launcher «Cyclone» augment» now increases the aiming time by 20% instead of 25%.
- Shaft:
  - The «Healing Emitters» augment does not have recoil and impact force anymore, even in sniping mode.
- Viking, Hunter, Crusader, and Dictator — the speed of all medium hulls is now from 7 to 9 m/s.
- Fixed the bug where several actions in the Clans section were leading to eternal loading.
- Fixed the bug where several actions in the downloadable client were leading to eternal loading.

### September 24th (Update 663)

- Starting from 2 AM UTC September 24th till 2 AM UTC September 27th the battle duration will be increased to 15 minutes.
- Updated Ultra Containers with the new Paladin hull Mk1 inside;
- «Balancing fins» were added to the back of the Paladin hull;
- Added an option to manually change clan name and tag;
- Added an option to manually increase the maximum number of players in a clan;
- Added an option to manually transfer clan ownership to another clan member;
- Added an «Accept/Decline» button to the clan profile in case the player was invited to the clan.
- Added an «Apply/Remove application» button to the clan profile in case the player applied to the clan.
- Fixed the bug with an orange circle notification for the «Clans» section.
- Changed position of muzzle points of different skins of the same turret:
  - This should fix the bug where no damage is dealt by some turrets.
- You can now see enemy mines while respawning even while you have the spawn protection;
- Added a shader to emulate shining tank parts;
- Smoky:
  - Changed the max ricochet angle from 75 to 72 degrees;

Gauss:

- - Fixed the bug where no damage was dealt by Gauss’s Salvo if you switch from arcade to sniping mode right after the end of Viking’s overdrive;
- Viking:
  - Мk1 is now the default hull for PC players;
- Paladin:
  - Speed decreased from 7.7-9.5 to 7-9 m / s;
    - Disabled recharging overdrive by battle points while overdrive is activated;
    - Added full Immunity from freezing and burning;
- Hunter:
  - Мk1 is now available from the Recruit rank and costs 150 crystals;
- Crusader:
  - Мk1 is now the default hull for mobile players;

Ares:

- - Acceleration is increased from 8-10 to 8-13;
    - Reverse acceleration is increased from 9-11 to 9-14 m/s²;
    - Мk1 is now available from the Gefreiter rank and costs 250 crystals;
- Speed of all heavy hulls is now from 5 to 6 m/s:
  - It means that Titan and Ares will be as slow as Mammoth.
    - In the future, we will make hulls of the same class have the same standard speed, just like we have the same health points number.
    - We change it to make adding new hulls not break the game balance, and the old hulls won't be better or worse in a class due to the speed parameter.;
- Juggernaut:
  - The juggernaut now deals double critical damage, but the critical hit chance is always 1%.
    - It will let you help your Juggernaut teammate as you will be able to apply the «Supercharge» status effect and let the boss make guaranteed critical shots;
- Updated the prices in some regions.
- Updated the Tankoin prices of crystals, containers and gold box packs.

### September 11th (Update 662)

- Matchmaking system considers a player’s GS score instead of a number of average battle points for last matches;
- Fixed the bug where you were not able to log in to your account if it is linked to a social media account, and you have changed your nickname;
- Fixed the bug where you are changing equipment or enter the battle and the client grabs your cursor, making it impossible to shoot;
- Lobby loading optimization;
- Removed generation of some textures that are not needed.

### September 3rd (Update 661)

Patch Update #661 - Released 3rd September 2021

- Celebrating Tankers’ Day;
- A new kind of skin is in the game — Steampunk. During the Tankers’ Day celebrations you can get these skins for Twins and Mammoth, and the animated «Bronze plates» paint, out of the updated Ultra Containers;
- Firebird's default skin has been updated to an HD version;
- Tesla
  - Maximum critical damage chance decreased from 20% to 10%.
    - Dilatory protocol augment:
    - Now decreases lightning ball range by 50% instead of 70% - Lightning ball reload time increased by 200%:
    - We decided to change the place of this augment in the game's balance. Decreasing the lighting ball’s range helped to decrease the "kill zone" created by groups of Titans but didn't make it harder for them to create such “zones”. Increasing the lightning ball’s reload time will require more teamwork from such players making it harder for them to create such zones. Also, we’re bringing back the old lighting ball range values to retain the idea of long chains. We will keep monitoring the situation.
- Thunder
  - Ordinary and critical damage values decreased from 435-880 to 405-810;
    - We’ve decided to decrease the damage of long-range turrets while keeping the number of shots needed to destroy a tank the same;
    - Long range turrets are very popular nowadays and one of the reasons why is because of their damage. Decreasing damage while keeping the same number of shots to destroy a target should increase the chances of a tank surviving after a single shot, if it has been upgraded to even a few MU steps.
- Railgun
  - Ordinary damage decreased from 450-900 to 350-700;
    - Critical damage decreased from 800-1600 to 655-1310;
- Magnum
  - Ordinary and critical damage decreased from 855-1745 to 750-1500;
- Gauss
  - Ordinary damage decreased from 355-705 to 335-670.
    - Critical damage increased from 355-705 to 670-1340.
    - Salvo damage decreased from 855-1745 to 750-1500;
- Shaft
  - Ordinary and minimum sniping damage decreased from 355-705 to 335-670.
    - Critical damage decreased from 500-1000 to 490-980.
    - Charge time in aiming mode increased from 3-3 seconds to 5-3 seconds.
    - «Heavy capacitors» augment — this augment now increases charging time while in aiming mode by 25% of the default value instead of the previous fixed value of 4 seconds.
    - «Light capacitors» augment — this augment now decreases charging time while in aiming mode by 50% of the default value instead of the previous fixed value of 2 seconds.
    - In addition to decreasing long range turrets' damage, Shaft receives a longer charge time in aiming mode at low modifications.
    - These changes to the capacitor augments won't affect Mk7+ as the time will remain the same - 2 and 4 seconds.
    - Balancing the capacitor augments was necessary due to Shaft’s increased charge time at the lower ranks.
    - Shaft needs a short charge time for dynamic battles at high ranks; however this also makes it too easy at low ranks.
- Fixed a bug which caused keyboard settings not to be saved if you changed them while inside a battle;
- Now you need to enter your 2FA one-time code to disable two-factor authentication.
- Improvements to the anti-cheat engine.

### August 27th (Update 660)

- Ultra Weekend and updated Ultra Containers;
- Added Hammer's new «Stunning Pellets» augment. The last shot in the ammo clip stuns every target hit by its pellets;
- Tesla's «Dilatory protocol» augment decreases the maximum distance of the ball lightning from 40 metres to 30 metres.
  - The last update has already made it hard to use this augment with Titan. Maybe this change is unnecessary. We will keep an eye on statistics.
- Hammer's «Wyvern's Breath» augment, Smoky's «Cryo rounds» augment and Railgun's «Cryo rounds» augment no longer decrease critical damage
  - Till this moment we were trying to find the right balance between «Burning» and «Freezing» status effects. After recent changes it became clear that Freezing status effects needed special treatment and shouldn't have that huge difference in damage in comparison with Burning status effects;
- Anti-cheat improvements.

### August 20th (Update 659)

- Starting from 02:00 UTC August 20, till 02:00 UTC August 23 matchmaking battle time duration will be increased to 15 minutes.
- Updated weekly missions:
  - Second and third missions no longer require you to complete more daily missions than you can complete in a day.
    - Weekly mission prize is one updated weekly container.
- Updated weekly containers:
  - Their content no longer depends on a player's rank;
    - Their content is:
    - 10 000 crystals - 30 units of repair kit - 100 units of boosted damage, boosted armour and speed boost - 30 mines - 30 batteries - 8 tankoins.
- Fixed the bug when a player didn’t see what item was received from a container.
- Disabled the option to choose the billing country manually. Contact the customer support department to change it. You will need to explain why you want to change it.
- Anti-cheat system improvements.

### August 13th (Update 658)

- Carnival — missions and discounts.
- Starting from 02:00 UTC August 13, till 02:00 UTC August 16 matchmaking battle time duration will be increased to 15 minutes.
- Hornet’s OD:
  - The armor-piercing status effect application duration is decreased to 3 seconds.
- Smoky’s «Autocannon» augment:
  - Maximum critical damage chance is decreased to 50%;
    - Projectile speed is decreased by 25%;
    - Recoil force is decreased from 33% to 25%.
- Tesla:
  - Range to connect to a target is decreased by 2 meters;
    - Range to connect to a target from a ball lightning is decreased by 1 meter.
    - Tesla’s «Dilatory protocol» augment decreases ball lightning range from 50 metres to 40 metres.
- Hammer:
  - Few improvements to prevent the bug with Hammer dealing less damage than expected.
- Improved auto-aim system:
  - Team mates and destroyed tanks are ignored by the system.
- Improved the way overdrives affect each other:
  - Wasp’s and Mammoth’s overdrives:
    - Disable Wasp’s bomb; - Disable dome generator; - Disable Ares’s ball; - Disable Crusader’s icicle in case Crusader was affected by an overdrive while preparing to shoot an icicle.
    - The following overdrives can disable Tesla’s ball lightning:
    - Titan’s dome if its generator is placed when a ball is already inside the dome's area. - Mammoth’s AT-field if a ball touches it; - Wasp’s bomb if a ball is inside its zone of effect; - Hunter’s OD if a ball is inside its zone of effect.
- Fixed the bug where entering a battle with Tesla equipped lead to Tesla being discharged.
- Fixed the bug with Tesla ball lightning ignoring obstacles.
- Fixed the bug with hearing sounds of all ball lightning in a battle being launched when entering the battle.
- Improved Tesla anti-cheat system.
- Improved Tesla’s behavior with Viking’s OD:
  - Like other melee range turrets, its range is increased x1.5;
    - Like other melee range turrets, its fire rate is increased by 75%.
- Improved Tesla ball lightning loading mechanism to improve visual effects of launching a ball lightning.
- Fixed the bug regarding Crusader’s behavior on mines.

### August 6th (Update 657)

- Ultra Weekend - new missions and special events.
- The «Tesla XT» skin and Tesla’s new «Electroturret» augment have been added to Ultra Containers
- The «Tesla» turret is now available for purchase in the Garage for crystals, together with the following Tesla augments: Acceleration Protocol, Dilatory Protocol and Minus-Field.
- «Freezing» status effect:
  - Minimum speed of a tank with the «Freezing» status effect applied decreased from 70 to 66%
- Firebird:
  - Range of max damage decreased to 7 meters for a fully-upgraded Mk7 modification.
    - Range of min damage decreased from 15-20 to 12-15 meters.
    - Critical damage multiplier decreased from x3 to x2.
    - Mk1: 150 → 100 (hp); - Mk2: 205.14 → 136.76 (hp); - Mk3: 294.24 → 166.17 (hp); - Mk4: 293.25 → 195.59 (hp); - Mk5: 337.5 → 225 (hp); - Mk6: 381.6 → 254.41 (hp); - Mk7: 436.74 → 291.17 (hp); - Mk7+: 525 → 350 (hp).
    - Maximum chance of critical damage increased from 10 to 20%.
    - Cone angle increased from 25 to 30 deg.
    - Damage multiplier with Viking’s Overdrive active increased from +200% to +400%.
- Freeze
  - Range of max damage increased to 10 meters across all modifications.
    - Range of min damage decreased from 15-20 to 12-15 meters.
    - Critical damage multiplier increased from x3 to x5.
    - Mk1: 337.5 → 562.5 (hp); - Mk2: 397.05 → 661.76 (hp); - Mk3: 446.67 → 744.48 (hp); - Mk4: 496.32 → 827.2 (hp); - Mk5: 526.08 → 876.83 (hp); - Mk6: 555.87 → 926.47 (hp); - Mk7: 595.59 → 992.65 (hp); - Mk7+: 675 → 1125 (hp).
    - Critical chance decreased from 10 to 7%.
    - Energy consumption decreased from 142 to 125 eng/sec.
    - Freezing power increased from 0.45 sec to 0.6 sec.
    - Cone angle increased from 25 to 30 degrees.
    - Damage multiplier with Viking’s Overdrive active increased from +200% to +400%.
- Isida
  - Damage multiplier with Viking’s Overdrive active increased from +200% to +400%.
- Hammer
  - Fixed the bug that caused an abnormally low critical chance for «Dragon’s breath» and «Wyverns Breath» augments.
    - Critical damage halved for «Dragon’s breath» and «Wyverns Breath» augments:
    - Mk1: 540 → 270 (hp); - Mk2: 635.29 → 317.64 (hp); - Mk3: 682.94 → 341.47 (hp); - Mk4: 746.47 → 373.23 (hp); - Mk5: 825.88 → 412.94 (hp); - Mk6: 889.41 → 444.70 (hp); - Mk7: 952.94 → 476.47 (hp); - Mk7+: 1080 → 540 (hp).
- Magnum:
  - Reload time increased from 5-2 seconds to 6-3 seconds.
- Shaft:
  - Maximum chance of critical damage increased from 10% to 20%.
    - Critical damage decreased from 710-1410 (hp) to 500-1000 (hp).
- Fixed a bug where if the back of a tank were pressed against a fence, the tank would teleport to another location
- Fixed a bug where slow projectiles dealt no damage if you rotated your hull.
- Fixed a bug where stunned tanks weren’t being damaged if they moved from the place where they were stunned.

### July 30th (Update 656)

- Updated Ultra Containers:
  - Added the new «Tesla XT» skin;
    - Added the new «Wyvern's Breath» augment for Hammer that leaves enemies frozen in their tracks on critical shots.
- Changed the «Cold» status effect:
  - Minimum hull speed is increased from 10% to 70%;
    - Minimum turret rotation speed is decreased from 80% to 10%;
    - Time needed for the status effect to disappear is increased from 4 sec to 10 sec.
- Firebird:
  - Critical shot deals x3 damage:
    - Mk1: 50 → 150 (hp); - Mk2: 68,38 → 205,14 (hp); - Mk3: 83,08 → 249,24 (hp); - Mk4: 97,75 → 293,25 (hp); - Mk5: 112,5 → 337,5 (hp); - Mk6: 127,20 → 381,6 (hp); - Mk7: 145,58 → 436,74 (hp); - Mk7+: 175→ 525 (hp).
- Freeze:
  - Critical shot deals x3 damage:
    - Mk1: 112,5 → 337,5 (hp); - Mk2: 132,35 → 397,05 (hp); - Mk3: 148,89 → 446,67 (hp); - Mk4: 165,44 → 496,32 (hp); - Mk5: 175,36 → 526,08 (hp); - Mk6: 185,29 → 555,87 (hp); - Mk7: 198,53 → 595,59 (hp); - Mk7+: 225 → 675 (hp).
    - Freeze’s «Shock freeze» augment decreases damage by 15% instead of 30%.
- Striker’s «Missile launcher "Uranium"» augment:
  - Rocket's reload time is increased by 20% instead of 15%;
    - Salvo reload time increase was removed;
    - Doesn’t decrease number of rockets in salvo, now it’s 4 instead of 3;
    - Delay between rockets in salvo being launched is increased, 0.5 sec instead of 0.25 sec.
- Overdrives:
  - Hornet’s OD doesn’t let a player get overdrive charge points from battle actions for the time Supercharge effect is applied – 7 seconds;
    - Fixed the way damage is calculated for Viking’s OD when some augments are equipped;
    - Vulcan deals x5 damage while Viking’s OD is activated instead of x3.
- Updated shop prices for certain currencies.

### July 16th (Update 655)

- The Summer Sport Games event and the new «Arms race» game mode are in the game!
- Added the new Hammer’s «Magnetic Pellets» augment, the last shot in the ammo clip disables the activated supplies of hit enemies.
- Added paints for the «Developers VS Players» event.
- Shaft Changes
  - Critical shot damage is twice more now:
    - Mk1: 355 hp → 710 hp; - Mk2: 437,35 hp → 874,7 hp; - Mk3: 468,24 hp → 936,48 hp; - Mk4: 509,41 hp → 1018,82 hp; - Mk5: 560,88 hp → 1121,76 hp; - Mk6: 591,76 hp → 1183,52 hp; - Mk7: 622,65 hp → 1245,3 hp; - Mk7+: 705 hp → 1410 hp.
    - Time needed for a full energy shot in Sniper mode is decreased from 4 to 3 seconds;
    - The «Heavy capacitors» augment let you get full energy shot in 4 seconds instead of 6 seconds.
- Overdrive Changes:
  - Wasp
    - Overdrive is now charging 66% faster depending in battle points: 0,99% per battle point instead of 0,6%; - Jammer status effect applied by Wasp’s bomb lasts 6 seconds instead of 3 seconds.
    - Crusader
    - Passive overdrive charging time is now increased from 50 seconds to 70 seconds.
    - Dictator
    - Radius of effect is increased from 20 meters to 25 meters.

### July 9th (Update 654)

- Updated the prices and contents of Tankoin, premium, and gold box bundles in the Shop.
- «Stun» effect doesn’t make you drop flags or balls anymore.
- Mammoth now has 100% protection from mines while its overdrive is active.
- Hammer’s «Blunderbuss» augment no longer increases reload time; now reload time is decreased by 10%
- Tesla:
  - Ball lightning speed has been reset to 5 m/s for all modifications.
    - Ball lightning shot delay time was decreased from 0.5 sec to 0.3-0.2 sec.
    - Range to connect to other targets was increased by 3 metres:
    - Mk1: 21 → 24; - Mk2: 21.73 → 24.73; - Mk3: 22.32 → 25.32; - Mk4: 23.05 → 26.05; - Mk5: 23.50 → 26.50; - Mk6: 24.08 → 27.08; - Mk7: 24.82 → 27.82; - Mk7+: 26 → 29.
    - Range to connect to first target was decreased by 1 metre:
    - Mk1: 18 → 17; - Mk2: 19.18 → 18.18; - Mk3: 19.76 → 18.76; - Mk4: 20.35 → 19.35; - Mk5: 20.94 → 19.94; - Mk6: 21.38 → 20.38; - Mk7: 21.82 → 20.82; - Mk7+: 23 → 22.
- «Mechanic» drone:
  - The number of points earned by supporting teammates no longer depends on the number of tanks affected; you earn 7 points if at least 1 teammate was supported.
- «Assault» drone:
  - Reload time decreased from 12 sec to 3 sec;
    - Max. decrease of supplies reload time was decreased from 15 sec to 5 sec.
    - Min. decrease of supplies reload time was decreased from 3 sec to 1 sec.
- «Driver» drone:
  - Reload time decreased from 15 sec to 5 sec;
    - Max. decrease of overdrive reload time per kill was decreased from 30 to 6 seconds.
    - Min. decrease of overdrive reload time per kill was decreased from 10 to 2 seconds.
- «Engineer» drone:
  - Reload time decreased from 10 sec to 3 sec;
- «Supplier» drone:
  - The number of points earned by supporting teammates no longer depends on the number of tanks affected; you earn 5 points if at least 1 teammate was supported.
- «Blaster» drone:
  - Damage inside the effective damage radius was decreased. The drone now destroys the nearest opponent, not all of those who are inside the effective damage radius.
- Paint scaling for HD hulls was increased to make paints look the same on both SD and HD skins.
- Improved the in-game announcements system; now, you won’t miss the most important news.

### July 2nd (Update 653)

- Added the two-factor authentication feature in the «Security» section of the «Settings» menu.
- Fixes to the damage dealing system;
- Improvements to the anti-cheat system for Tesla;
- Improvements to the shot effects for Tesla.

### June 25th (Update 652)

- List of changes:
  - UFO day - New missions and special events are already in the game.
    - Improved anti-cheat system
    - Improved shot effects for the Tesla turret.
    - Ball lightning is now affected by the following modificators:
    - Protection:
      - Boosted armour; - Titan’s dome; - Protection modules.
        - Buffs:
      - Boosted damage; - Drones.
    - Chain lightning reload (sec) was increased from 0.85 sec to 0.9 sec.
    - Ball lightning shot delay time (sec) was decreased from 0.9 sec tо 0.5 sec.
    - The maximum distance between a chain lightning and a ball lightning was increased from 15 - 18 meters to 18 - 21 meters.
    - The maximum distance between a chain lightning and other tanks was decreased from 15 - 18 meters to 12 - 15 meters.
    - Ball lightning projectile speed (m/sec) now depends on upgrades, from 3 m/sec to 5 m/sec.
    - Tesla’s cone angle (deg) was increased from 15° to 17°.
    - Hyperion’s supply cooldown reduction was changed from 0 - 30 seconds to 20 - 30 seconds.
    - The maximum number of points/flags in MM battles was increased:
    - DM: 30 → 50; - TDM: 70 → 100; - CP: 30 → 50; - CTF: 5 → 7; - ASL: 70 → 100; - RGB: 5 → 7; - TJR: 7 → 10; - SGE: 5 → 7; - JGR: 100 → 100.

### May 28th (Update 648)

- Starting Tanki Online's Birthday celebrations!
- Updated the default Viking skin to HD version.
- Added the new «Jammer» status effect to Hunter's overdrive. While this status effect is applied, a tank cannot activate its overdrive.
- Ultra Containers:
  - Added «Jammer Immunity» augment for all hulls.
    - Added all the released Ultra skins.
- Fixed the bug that Crusader overdrive's icicle exploded randomly

### May 21 (Update 647)

- Ultra Weekend - New missions and special events are already in the game.
- Updated Ultra Containers with the new «Mammoth Ultra» skin.
- Hammer:
  - «Blunderbuss»: Clip reload slowdown is decreased from 20% to 10%.
- Vulcan:
  - «Incendiary band» augment now only ignites opponents if a Vulcan is under the "Burning" status effect.
- Shaft:
  - Fixed the bug with not dealing damage when shooting the tracks of HD skins.
- «Boosted damage» supply
  - By default, now increases damage you deal by 50% instead of 33%.
- «Boosted armor» supply:
  - By default, now decreases damage you receive by 33% instead of 25%.
- Drones:
  - Now you get a 50% bonus to the effect of boosted supplies instead of 66%.
- Merged the «Buy» and «Upgrade» buttons.
- Updated prices of some Shop items.

### May 14 (Update 646)

- Ultra Weekend - New missions and special events are already in the game.
- Updated Ultra Containers:
  - Added the new Shaft augment «Healing Emitters». It heals your teammates when you hit them
- Gauss augments:
  - «Electromagnetic salvo» augment now deals splash damage in arcade mode and the arcade projectile speed is no longer increased;;
    - EMP radius is decreased from 13 metres to 10 metres.
    - «Armor-Piercing Salvo» augment got an increase of AP radius from 6 metres to 10 metres and got a 50% reduction of sniping reload time.
- Gauss:
  - Now keeps aiming at a target after not seeing it for 0.7 seconds instead of 2 seconds.
- Striker:
  - Now keeps aiming a target after not seeing it for 0.7 seconds instead of 1 second.
- Hornet:
  - The radius of applying AP status effect is decreased from 1000 metres to 50 metres. Only those targets which you see will get this status effect applied.
- Hopper:
  - Reverse acceleration is decreased from 15-20 to 9-14 m/s;
    - Weight is decreased from 1300-2600 to 1000-2000 points.
- Crusader:
  - Reverse acceleration is decreased from 10-14 to 9-13 to m/s;
    - Weight is decreased from 1800-3600 to 1200-2400 points.
    - The time between activating overdrive and shooting an icicle is increased from 700 to 900 ms.
    - Icicle’s damage is decreased from 1500-3000 HP to 1000-2000 HP.
- Ares:
  - Reverse acceleration is decreased from 11-15 to 9-11 m/s;
    - Weight is decreased from 1950-3900 to 1800-3600 points.
- Dictator:
  - The number of battle points received for sharing the overdrive effect to teammates no longer depends on the number of teammates the effect was shared to.
    - Now you get 20 battle points if the overdrive effect was applied to at least 1 teammate (except your tank).
    - Overdrive charge points are now split evenly across all affected teammates within the overdrive range:
    - Restores 50% of overdrive change points instead of 33%.
    - These 50% are split evenly across all affected teammates.
    - «Supercharge» status effect duration is increased from 3 to 5 s.
- «Blaster» drone reload time is decreased from 35 to 3 seconds.
- You can click on tankoin and crystal buttons when the Garage is opened in a battle.
- Added Openbucks payment method for USA gift/pre-paid cards.

### April 30 (Update 645)

- May Holidays - New missions and special events are already in the game.
- Added Isida’s «Vampire nanobots» augment to Ultra Containers.
- Added the experimental special «Daily Tankoin Pass» offer
- Updated how Supplies and Drones work:
  - Renamed «Double Armor» to «Boosted Armor»
    - Renamed «Double Damage» to «Boosted Damage»
    - By default, the effects of these supplies are decreased:
    - «Boosted Armor» decreases incoming damage by 25%; - «Boosted Damage» increases outcoming damage by 33%.
    - In case an equipped drone is fully upgraded, «Boosted armor» is decreasing incoming damage by 50%, and «Boosted damage» is increasing outcoming damage by 100%, just like it was before this update.
- Changed the «Brutus» drone:
  - It now only boosts supplies but does not need batteries to work.
- Changed the «Trickster» drone:
  - Instead of previous effects, it now increases the effect of the speed boost supply, increasing speed by 10-30%;
    - It uses 2 extra speed boosts when activated;
    - Reload time has been decreased from 10 to 3 seconds
- Changed the «Blaster» drone:
  - Now it also decreases self-destruction time by 1 second.
- Changed default volume of damage sounds:
  - The sound of destroying an opponent is now louder;
    - The sound of getting damaged is now quieter.
- Fixed the bug that didn’t let you save the volume of sound settings.
- Improved the Battle List.
  - Battles you created will have a different colour in the Battle List.
    - After you open a battle, it will have a different colour in the Battle List.
    - Other minor changes

### April 23 (Update 644)

- Ultra Weekend - new missions and special events are already in the game.
- Added the new «Striker Ultra» skin.
- Added the new Striker’s stunning augment into Ultra Containers.
- Made some improvements to critical damage:
  - Fixed some augments that were broken after the critical damage release.
    - Fixed the «Show Damage» setting.
- Changed the «XP/BP» format battle settings:
  - Hornet survives 2 shots less frequently;
    - Wasp never survives 2 shots;
    - Hopper rarely survives 1 shot.
- The battles you created will have a different colour in the battles list.
- After you open a battle, it will have a different colour in the battles list.
- Added sounds for dealing common and critical damage:
- You can change the volume of the sound for dealing and getting damage separately.
- Hammer’s «Duplet» augment no longer increases vertical scatter angle.
- Hammer’s «Blunderbuss» augment now increases vertical scatter angle by 200% and clip reload by 25%.
- Striker reload time has been decreased from 2.2s to 1.7s and from 2.0s to 1.6s.
- Striker now deals twice as much damage on critical shots than on normal shots.
- When turning, Hopper is now controlled relative to the hull’s position, not relative to the camera.
- Hopper’s OD now only applies the stun status effect for 1 second.
- Spectrum A now has 30% resistance instead of 25% and Spectrum M has 25% instead of 22%.
- Added 4th protection module slot.

### April 9 (Update 643)

- Starting «Cosmonautics day» event;
- Added new temporary event currency;
- Updated ultra containers:
  - Added «Armadillo» protection module;
    - Added new Hammer's «Blunderbuss» augment.
- Added positive «Supercharge» status effect that lets you deal critical damage with every shot.
  - Added «Supercharge» status effect to Dictator's overdrive:
    - Duration - 3 seconds. - The effect is applied to your tank and to teammates' tanks that are inside your OD's effective radius.
    - Added «Supercharge» status effect to Hornet's overdrive:
    - Duration 7 seconds; - The effect is applied only to your tank.
- Added stun, EMP and heat status effects to Wasp's bomb.
- Fixed the bug with Gauss's «EMP Salvo» not dealing damage to opponents in splash range.
- Fixed some critical damage related bugs.
- Fixed the bug with a filter in the MM group invite screen that lets you choose to show only clan mates in the list of players you can invite.
- Many fixes of UI for main screen, battle List, Shop and clans.

### April 1 (Update 642)

- All armor piercing augments now apply this status effect only while dealing critical damage;
- Railgun changes.
  - After dealing critical damage, critical chance for the next shot is reduced to 10%. After that shot (if it deals damage), the chance goes back up to 50% again.
    - «Round destabilization» augment: critical damage is increased by 30% instead of 60%, critical damage chance is increased to 70%;
    - «Electromagnetic accelerator "Scout"» augment: critical damage is decreased by 40% instead of 30%;
    - «Large caliber rounds» augment: common and critical damages are increased by 20% instead of 40%, shot reload is increased by 60% instead of 50%;
    - «Hyperspace rounds» augment: common damage is increased by 40%;
    - «Incendiary Rounds» augment: critical damage is decreased by 30%, shot warmup time is increased by 20%, critical damage chance is set to 50%;
    - «Stun rounds» augment: critical damage is decreased by 30%, shot warmup time is increased by 20%, critical damage chance is set to 50%;
    - «Cryo rounds» augment: critical damage is decreased by 30%, shot warmup time is increased by 20%, critical damage chance is set to 50%;
    - «EMP rounds» augment: critical damage is decreased by 30%, shot warmup time is increased by 20%, critical damage chance is set to 50%;
- Hopper - Overdrive charge per second is decreased by 10%;
- Mine - Critical damage is decreased from 9999HP to 3999HP;
- Dictator - Overdrive energy restored for teammates is decreased from 50% to 33%;
- Destroying a tank with common damage is indicated in orange;
- Destroying a tank with critical damage is indicated in red;
- Critical healing is indicated in blue;
- Critical and kill damage indicators are increased in size to differentiate from regular damage indicators.

### March 26 (Update 641)

- Easter in Tanki Online!
- Updated ultra containers, added resistance module with protection against critical damage;
- Added critical damage feature for all turrets with 10% chance to deal it;
- Removed default damage range.
- Isida:
  - % chance to heal 10 times more HP;
    - «Support nanobots» augment increases the chance to 4%.
- Hammer:
  - When dealing critical damage, all targets hit by shrapnel get the same critical damage;
    - «Dragon's Breath» augment applies the burning status effect only on critical damage shots.
- Smoky:
  - The maximum chance of dealing critical damage is limited to 20% for the first modification and increases per modification to 50%:
    - Mk1: 20%; - Mk2: 24%; - Mk3: 28%; - Mk4: 31%; - Mk5: 35%; - Mk6: 39%; - Mk7: 43%; - Mk7+: 50%.
    - Added new type of critical damage on a critical shot, like other turrets have;
    - Augments: Supercumulative rounds, Incendiary rounds, Cryo rounds, EMP Rounds, and Paralyzing Rounds apply status effects only on critical damage shots.
- Magnum:
  - «Harpoon» augment can deal critical damage only with a direct hit.
- Striker:
  - Critical damage is calculated separately for each missile in a salvo.
- Railgun:
  - Default damage now ranges from 450 (Mk1) to 900 (Mk7+);
    - Added critical damage: 800 (Mk1) up to 1600 (Mk7+) with a fixed 50% chance;
    - When hitting several targets, the same critical damage is applied to all of them;
    - «Round stabilization» augment disables critical damage but also increases default damage by 33%;
    - «Round destabilization» augment either deals increased critical damage (+60%) or deals negligible default damage - 100 HP:
    - «Hyperspace rounds» augment doesn’t deal critical damage.
    - «Adrenaline» augment increases both default and critical damage.
- Mine:
  - Removed default damage range;
    - Default damage changed to 1500;
    - Added 1% chance to deal 9999 damage.
- «Blaster» drone:
  - Removed default damage range;
    - Cannot deal critical damage.
- Added new expensive resistance module with protection from critical damage:
  - Mk1: available from ultra containers;
    - Mk2: 15 000 crystals;
    - Mk3: 75 000 crystals;
    - Mk4: 150 000 crystals;
    - Mk5: 330 000 crystals;
    - Mk6: 500 000 crystals;
    - Mk7: 850 000 crystals;
    - Mk7+: from 2 250 000 to 6 750 000 crystals depending on how fast you upgrade it.
- Fixes and changes of UI.

### March 19 (Update 640)

List of changes:

- Made some changes to Hopper’s overdrive. If you activate it and your tank is destroyed immediately after, your overdrive energy won’t be saved.
- Changed the time needed to make a Crusader’s icicle. Now it is just 0.7 seconds instead of 1.3 seconds before firing!
- Fixed how the following elements are displayed in the game: «Home» button, protection module slot, notification about receiving rewards for Challenge levels, etc.
- Fixed alignment and sizes of additional information about the battle time and score.
- Made MM groups look better
- Fixed the bug that let a tanker unequip a protection module during its cooldown.
- Updated descriptions for the following paints: Green Quads, Trapped Inside, Carbon stars, Constellation, NanoHUD, Pixel Plasma, Offensive, Pink Elephant, Orange urchin, PCB.

### March 4 (Update 638)

- List of changes:
  - Hunter's standard skin got updated to HD.
    - Added two new Railgun augments to ultra-containers:
    - EMP Rounds:
      - Turns off the active supplies for 6 seconds. - Loading up before shooting time is increased by 20%: from 1,1 to 1,32 (s) for all modifications. - Minimum HP is increased by 40%:
        - Mk1: 390 → 546 (hp); - Mk2: 474,41 → 664,17 (hp); - Mk3: 534,71 → 748,59 (hp); - Mk4: 582,94 → 816,12 (hp); - Mk5: 631,18 → 883,65 (hp); - Mk6: 667,35 → 934,29 (hp); - Mk7: 703,53 → 984,94 (hp); - Mk7+: 800 → 1120 (hp). - Maximum HP is increased by 40%:
        - Mk1: 810 → 1134 (hp); - Mk2: 972,65 → 1361,71 (hp); - Mk3: 1088,82 → 1524,35 (hp); - Mk4: 1181,76 → 1654,46 (hp); - Mk5: 1274,71 → 1784,59 (hp); - Mk6: 1344,41 → 1882,17 (hp); - Mk7: 1414,12 → 1979,77 (hp); - Mk7+: 1600 → 2240 (hp).
        - Cryo Rounds:
      - Decreased temperature by 100% from minimum temperature for 0.5 seconds. - Loading up before shooting time is increased by 20%: from 1,1 to 1,32 (s) for all modifications.
    - Railgun’s «Stun rounds» augment:
    - Increased stun time from 1 to 2 seconds.
    - Gauss’s «Electromagnetic salvo» augment:
    - The radius of disabling supplies is decreased from 20 to 14 meters.
    - Gauss’s «Armor-Piercing Salvo» augment:
    - The radius of applying the effect is increased from 0 to 6 meters.
    - Ares’s overdrive:
    - Now when the tank is killed at the moment of overdrive start it is possible to leave some charge unspent.
- The garage now displays Gear Score details for all equipped parts of the tank instead of turret and hull parameters.
- Added a sound for all pop-up notifications.
- You can now delete all numbers, including the last one, when editing the number of supplies you buy.
- Fixed the scrolling of the paints list.
- Friends and clan mates now have different colour nicknames everywhere.
- Added back the option to disable MM group invites.
- The window description header in the lobby now shows only the name of the current section.
- When shooting a tank that has immunity from a status effect you were going to apply, an “Immunity” indicator will appear above the tank.
- Some fixes of the «Back» button in the battle list.

### February 18 (Update 637)

- List of changes:
  - Updated Railgun's default skin to HD quality.
    - Added new augments for Railgun:
    - Incendiary rounds:
      - Increases the temperature of the first and the next targets, if pierced for 3 seconds; - The charge is 20% slower for all modifications: From 1,1 s to 1,32 s.
        - «Stun rounds»:
      - Disables the control of the first and the next targets if pierced for 1 second. - The target does not lose the flag if hit. - Minimal damage is increased by 40%:
        - Mk1: 390 → 546 (hp); - Mk2: 474,41 → 664,17 (hp); - Mk3: 534,71 → 748,59 (hp); - Mk4: 582,94 → 816,12 (hp); - Mk5: 631,18 → 883,65 (hp); - Mk6: 667,35 → 934,29 (hp); - Mk7: 703,53 → 984,94 (hp); - Mk7+: 800 → 1120 (hp). - Maximal damage is increased by 40%:
        - Mk1: 810 → 1134 (hp); - Mk2: 972,65 → 1361,71 (hp); - Mk3: 1088,82 → 1524,35 (hp); - Mk4: 1181,76 → 1654,46 (hp); - Mk5: 1274,71 → 1784,59 (hp); - Mk6: 1344,41 → 1882,17 (hp); - Mk7: 1414,12 → 1979,77 (hp); - Mk7+: 1600 → 2240 (hp). - Reload speed is decreased by 50%:
        - Mk1: 4,4 → 6,6 (s); - Mk2: 4,029 → 6,044 (s); - Mk3: 3,765 → 5,648 (s); - Mk4: 3,553 → 5,330 (s); - Mk5: 3,341 → 5,012 (s); - Mk6: 3,182 → 4,773 (s); - Mk7: 3,024 → 4,536 (s); - Mk7+: 2,6 → 3,9 (s). - The charge is 20% slower for all modifications: From 1,1 s to 1,32 s.
    - Changed the contents of Ultra Containers and Tankoin bundles in the Shop:
    - Ultra-containers:
      - Replaced the 1 and 3 containers bundle from the browser version of the game with a 200 and 300 containers bundle. - Removed the bundles with 1 and 10 containers from the mobile version of the game and replaced them with bundles consisting of 100 and 150 containers instead.
        - Tankoins:
      - Removed the bundles with 150 Tankoins from the HTML5 version of the game and added a bundle with 35200 Tankoins instead; - Removed the bundles with 150 Tankoins from the mobile version of the game and added a bundle with 18000 Tankoins instead.
    - Added the following maps to the ММ map pool:
    - Berlin; - Dusseldorf; - Lost Temple; - Scope; - Kolhoz; - Skylark.
    - Bigger maps contain up to 28 players (14x14):
    - Berlin— 28 players; - Dusseldorf— 28 players; - Lost Temple— 28 players; - Scope— 28 players; - Kolhoz— 24 players; - Skylark— 20 players.
    - Added an eSports version of some maps so any changes to these maps will not affect eSports:
    - Barda; - Barda ММ; - Bobruisk; - Gubakha; - Iran; - Kungur; - Cologne; - Bridges ММ; - Parma; - Red Alert; - Red Alert ММ; - Tribute ММ; - Forest.
      - The maps use the Summer theme only; - The amount of players on the map is limited to 14 (7x7); - Added the “eSport” tag in the maps name; - All players can create those maps.
    - When the battle ends, the players are redirected to the end screen, even if they are in the garage/settings/shop.
    - If there is an active MU sale, a shield with a \[%\] appears on the garage section and on the “Upgrade” button in that section.
    - If there is an active turret or hull sale, a shield with \[%\] appears on the garage section.
    - Fixed sorting Containers in the garage.
    - Fixed the annoying auto-pause message, which was active even after the player left the battle.
    - Fixed the error where a player got a grey screen after exiting the battle end screen.
    - Removed the “Vote” option from the battle end screen.
    - Small changes in the clan section.

### February 5 (Update 636)

- When searching for a battle, the range of ranks for a group of players can only go up, and cannot go down.
- Changed the number of players on the following maps:
  - Aleksandrovsk: 16 → 20;
    - Archipelago: 12 → 16;
    - Barda: 16 → 20;
    - Bridges: 12 → 16;
    - Chernobyl: 24 → 20;
    - Desert: 24 → 20;
    - Future: 16 → 20;
    - Iran: 20 → 16;
    - Osa 24 → 20;
    - Red Alert: 16 → 12;
    - Silence: 20 → 16;
    - Stadium: 24 → 20;
    - Wolfenstein: 24 → 20.
- Now, the Defender drone gives a 20 seconds bonus effect instead of 30.
- Isida now deals 15% more damage on all modifications:
  - Mk1: 500 → 575 (hp);
    - Mk2: 573,53 → 659,56 (hp);
    - Mk3: 632,35 → 727,20 (hp);
    - Mk4: 705,88 → 811,76 (hp);
    - Mk5: 750 → 862,5 (hp);
    - Mk6: 808,82 → 930,14 (hp);
    - Mk7: 882,35 → 1014,70 (hp);
    - Mk7+: 1 000 → 1150 (hp).
- Now, Hammer reloads the magazine 2 seconds faster on all modifications:
  - Mk1: 6 → 4 (s);
    - Mk2: 5,82 → 3,82 (s);
    - Mk3: 5,74 → 3,74 (s);
    - Mk4: 5,62 → 3,62 (s);
    - Mk5: 5,471 → 3,471 (s);
    - Mk6: 5,352 → 3,352 (s);
    - Mk7: 5,235 → 3,235 (s);
    - Mk7+: 5 → 3 (s).
- Striker now reloads faster. From 2.5 to 1.8 seconds to the current 2.2 to 1.7 seconds.
  - Mk1: 2,5 → 2,2 (s);
    - Mk2: 2,356 → 2,097 (s);
    - Mk3: 2,294 → 2,053 (s);
    - Mk4: 2,191 → 1,979 (s);
    - Mk5: 2,129 → 1,935 (s);
    - Mk6: 2,047 → 1,876 (s);
    - Mk7: 1,965 → 1,818 (s);
    - Mk7+: 1,8 → 1,7 (s).
- Now, Hopper accelerates 2 m/s slower and no longer receives an overdrive charge for useful combat actions within 10 seconds of applying the overdrive.
- Ares gets points for destroying opponents with its overdrive.
- Hammer’s “Duplet” augment takes 50% longer to reload the magazine relative to the new magazine reload time.
- Hammer’s “Armor-Piercing Shot” augment no longer gives an acceleration boost of the magazine reload.
- Smoky's "Rubberized Rounds" augment allows the projectiles to bounce off walls, twice.
- Initial velocity of Striker missiles increased by 5 m/s for all modifications.
- The bug due to which items were not equipped in the garage is now fixed.
- The bug due to which augments were not visible in the augments menu is also fixed.
- The bug due to which it was impossible to add a newly entered friend to the group is fixed.
- Ability to switch the game interface language in the settings is added.
- Missing ability to scale flag icons in the drop-down box in clans is fixed.
- Containers have a sound effect, just like in the mobile version of the game.
- Now, in containers, augments are displayed with an image of the turret they are for.
- Paints from past challenges are added to containers.
- Ability to ignore the players in the chat via the context menu is added.
- Now getting stunned results in inability to turn on supplies for the whole duration of this status

### January 29 (Update 635)

- Smoky’s standard skin received an upgrade to HD.
- Added animation, new shot effects and new projectile mechanics.
- Added new augments for Smoky.
- A new currency “Shards” for compiling containers is added.
- Ability to double-click to equip items in the garage is added.
- “My clan” button is added to the friends list.
- The ability of changing your username for a bunch of tankoins is now finally re-added to the game.
- Prizes in the form of shards are added to daily missions.
- An end battle screen before progressing the statistics screen is displayed.
- From the battle statistics screen, the option to view the player's clan in the context menu, which caused an error, is removed.
- The high frequency whistle is removed from the engine sound of medium hover tank (Crusader).
- The bug where re-opening the chat would reset the anti-flood timer is fixed.
- A refinement to the balance of turret Smoky and some of its augments are introduced;
  - Now the critical damage has a larger spread:
    - Added the velocity of the projectile: 500 m/s;
    - Decreased the initial critical shot chance from 0 to -0.5 for all modifications;
    - Reduced the minimal chance of a critical shot by -0.5 for all modifications;
    - Increased the maximum chance of a critical shot by 0.5 for all modifications;
    - Now, the critical shot chance spreads from 0.2 to 0.4 for all modifications.
- Augments:
  - «Armor-Piercing Rounds»: the applied status effect duration is changed from 5 to 3 seconds;
    - Augment «Assault rounds»: increases the speed by 200%;
    - Augment «High-precision aiming system»: decreases the speed by 25%;
    - Augment «Incendiary rounds»: the damage of a critical hit decreases by 25%;
    - Augment «Cryo rounds»: the damage of a critical hit decreases by 15%;
    - Augment «Armor-Piercing Rounds»: the damage of a critical hit decreases by 25%.
- Now Matchmaking generates battles with a different number of players, depending upon the size of the map;
- Now the size of maps in matchmaking and the number of players in them depend on the player's rank;
- The number of players in a group now depends on the rank of the player. However, the maximum number of players in a group remains unchanged;
- The number of players in the group now affects the available maps;
- An “up” arrow is displayed in the garage for items that have an upgrade available;
- Now a timer for temporary discounts is displayed in the garage;
- When invited to a PRO-battle, you will get a notification to say whether the battle is available at your rank or not;
- In the list of battles, the entered text is saved in the battle name field if you return from the battle lobby or from the garage.

### January 15 (Update 634)

- List of changes:
  - Crusader is now available for crystals in Garage;
    - Public and Private messages in the chat look different now;
    - Added a notification about reaching the maximum number of friends in the browser version of the game;
    - Fixed a bug with the battle list: After leaving a battle lobby, search input was being cleared but the filter wasn’t being disabled;
    - Set a 300 characters limit for chat messages;
    - When a player is not able to send a message due to anti-flood system, message sending button is replaced with a timer showing how much time the player needs to wait;
    - Now you can use ESC keyboard button to leave a battle from the battle results screen;
    - Now you can use «Leave» button after clicking on «Continue» button in PRO battles.

## 2020

### December 25 (Update 633)

- Starting festive season celebrations
- Replaced current default Hornet's skin with the brand new HD one
- Changed Crusader's overdrive - decreased shell's speed but increased the negative status effects time
- Fixed the bug with Crusader overdrive's shell flying through a target without dealing damage (including point blank shots)
- Now when activating Crusader's overdrive, an icicle appears near your tank's muzzle and start moving towards a target after a short delay
- Fixed the bug with Railgun sometimes not dealing damage to Ares and Crusader
- Fixed the bug with overdrives of Ares and Crusader sometimes not shooting when overdrive was activated
- Fixed parameters of Magnum's Harpoon augment which led to having enormously large shell explosion range
- Changed the MM group interface in the main screen
- Fixed the bug with not showing that a leader is not ready if the leader is still in a battle
- Fixed the bug with new players not being able to receive MM group invites
- Fixed the bug which allowed to have only 1 player in an MM group
- Fixed the bug with not being able to invite a clan member to an MM group if the players are not friends
- Fixed the layout issues with long nicknames in team battles and context menus
- Fixed animation of Silver Bricks and Holiday Lights animated paints

### December 11 (Update 631)

- Ultra Weekend - The new missions and events are already in the game.
- Early access period for Crusader! Get the new hull before anyone else by opening Ultra Containers!
- While Mammoth's overdrive is activated, immunity from all status effects is applied.
- Added a context menu when clicking on a player's nickname in the majority of places where you may see a nickname.
- Improved matchmaking group invites, including adding the ability to invite a player to your group even if the player is already in another group.
- Fixed the problems with large nicknames in the friends menu.

### November 27 (Update 629)

- Now you can see the special text tips when you apply any status effect to an opponent's tank or when it is applied on your tank.
- Fixed aiming speed for Shafts scope mode.

### November 20 (Update 628)

- Added textures quality scaling to the game settings.
- Added an option to get direct chat messages from players that are in your friend's lists. You can now have it enabled in the game settings.
- You can now use F11 to enable full-screen mode in a battle.
- Added a search feature for when you choose a country for payment while entering the Shop, or a map name while creating a PRO battle.
- Fixed infinite loading screen problem for when you leave a battle after it ends.
- Fixed typos in the descriptions of Drones, Battle Pass, and Clan license.
- ~~Fixed the bug that resulted in loss of control of your tank, when switching to another browser tab while loading into a battle.~~

^ Won't be released this time

- Now after leaving a PRO battle, you will be in the lobby of this battle.
- Now when you hover your cursor over a nickname in the lobby chat or battle statistics, it shows that the nickname is clickable.

### November 4 (Update 627)

- List of changes:
  - Launched experimental gameplay changes;
    - Made it possible to scroll through the list of players in a battle's TAB window;
    - Modified Gear Score color scheme to better delineate between higher and lower values;
    - Spectator mode improvements.

### October 29 (Update 626)

- List of changes:
  - Added new Armor-Piercing (AP) status effect.
    - Changed Hornet's overdrive.
    - Added new «AP Immunity», augment which protects from the «Armor-Piercing» status effect.
    - Added augments which apply the Armor-Piercing effect for the following turrets:
    - Freeze: «Toxic Mix»; - Hammer: «Armor-Piercing shot»; - Ricochet: «Super-smart Minus-Field»; - Smoky: «Armor-Piercing Rounds»; - Striker: «Armor-Piercing Missiles»; - Railgun: «Super Armor-Piercing Rounds»; - Magnum: «Armor-Piercing Core»; - Gauss: «Armor-Piercing Salvo»; - Shaft: «Armor-Piercing Sight».
    - Added new «Harpoon» augment for Magnum, which almost allows you directly aim at opponents.
    - Added permanent immunity to all status effects for Juggernaut.
    - Respawn protection now also protects you from all status effects.

### October 23 (Update 625)

- Changed the behavior of hover tanks while strafing.
- Fixed the bug with losing the ability to control your tank in a battle.
- Fixed the bug with a drone being shown above a tank in the garage when it is not equipped.

### October 16 (Update 624)

- Fixed the bug with equipping augments in battles;
- Decreased the time to open the Garage from the Lobby;
- Improved tips in the Garage and Missions;
- List of protection modules is no longer scrolled automatically when you equip or unequip a module;
- Now you can also use NumPad Enter to open the battle chat;
- Your drone now shows in all screens where tank model is shown, for example, the scores screen at the end of a battle;
- Fixed information about crystals in the tutorial.

### October 9 (Update 623)

- Added Hopper to the «All hulls and turrets» product kit;
- Improved Spectator mode in the HTML5 version;
- Improved the layout of the Showcase;
- Improved the layout of turret icons for modules when resizing the client window;
- Improved scrolling for pop-up windows;
- Fixed font issues for Polish language;
- Fixed how the timer is shown for the cooldown window when joining a clan;
- Fixed how scores and the «Join» button are shown for battles unavailable for player’s rank in the battle list;
- Fixed buttons in the friend search menu;
- Fixed the description of containers that a player doesn’t have;
- Fixed the bug where players invited to an MM group would crash if they clicked on the “Complete” button in the missions window;
- Fixed the bug with entering a nickname in the registration window for Firefox browser;
- Fixed layout of tables when resizing the client window;
- Fixed showing the sales badge for items you already have;
- Fixed the hotkey issue for purchase confirmation window;
- Fixed indicators in the HUD for ASL mode;
- Fixed translations for group invite window;
- Added a notification showing that you have successfully sent a friend request;
- Now when you enter any garage category, it will automatically scroll to the item which is equipped;
- Now you can use a hotkey to dismiss a notification about a successful purchase;
- Now loading tips are changed when you press \[SPACE BAR\];
- Removed the cross icon from the error window;
- Made the K/D ratio column wider in the clan statistics table;
- Added a tooltip when you hover over the clan search input;

### October 1 (Update 622)

- Added stars to daily, weekly and special missions. Complete ongoing challenges by completing missions!
- Doubled the difficulty of daily and weekly missions that require earning crystals in battles.
- Players will no longer see augments they already own in the list of possible rewards they could receive from containers.
- New friends and requests are now shown at the top of the accompanying lists.
- You will now only see the number of new friend requests on the friend requests counter.
- New clan requests are now shown at the top of the list.
- You will now need to unequip current protection modules before equipping new ones.
- You need to click on an empty modules slot to equip a new protection module.
- Fixed the glitch with the free mission change text.
- If you play Tanki from an external source where it is impossible to use the HTML5 version, you do not have Flash restrictions.
- Additional fixes with the memory leak problems.
- Changed the number of stars in the bundles found in the Shop.

### September 25 (Update 621)

- All modifications of hulls and turrets now look the same.
  - We have started to update the game's interface and graphics (HTML5 interface, 3D bushes, ultra skins). In the future, we are going to remaster skins one by one for each turret and hull and make them more modern. There will still only be one default skin but they will be much better. In order to do this, we have had to choose only one modification skin for all turrets and hulls to remaster and this is the M3 (Mk7) modification skin. That's a technical requirement and is the first step towards implementing the plan.
- You can now close the notifications you receive in the upper-right corner of HTML5 by clicking on them.
- Added a notification for an increased chance of getting items from Ultra Containers.
- Added showing clan tags to HTML5.
- Added showing Premium Pass version of ranks in the chats and lobby.
- Fixed the bug showing a “return to the battle” window after you left the battle.
- Fixed the bug that shows the same items multiple times after receiving them from containers.
- Fixed the bug that doesn’t show Premium Pass as a possible reward from containers when you already have Premium Pass activated.
- Fixed the bug that shows the sale badge for items which are not available for a tanker’s rank.
- You can now buy «Frost» and «Golden star» paints without having a Premium Pass.
- Fixed memory leak when a tanker goes from a battle to the lobby or garage or vice versa.

### September 17 (Update 620)

- List of changes:
  - Magnum:
    - Now with default Magnum you can rotate your turret like any other turret; - Now with the «Reinforced gun carriage» augment you can change the angle of elevation; - Changes of Magnum’s characteristics:
      - Initial shot angle was increased to 12 for both horizontal and vertical modes; - Min projectile speed (m/sec) was decreased from 35 to 30; - Max projectile speed (m/sec) was decreased from 140 to 130 - Projectile gravitation was decreased from 5.0 to 4.5; - Average splash damage (%) was increased from 30% to 50%.
    - Vulcan:
    - Improved shot effects of Vulcan; - Recovered the «Mysterious Red» shot effect for Vulcan.
    - Added 3D bushes.
    - Refined how augments and skins are displayed in the Garage.
    - Fixed the delay while respawning after a pause or visiting the garage.
    - Updated icons for augments and skins.

### September 4 (Update 618)

- List of changes:
  - You can now refresh your showcase using tankoins.
    - Fixed how the hover tank’s speed depended on camera POV.
    - Fixed and added back dust from tracks.

### August 28 (Update 617)

- List of changes in HTML5:
  - Ares:
    - Improved behaviour of controls; - Fixed the bug where it was possible to activate overdrive one more time after your tank was destroyed.
    - Clan profiles:
    - You can now use lower case characters in a clan name.
    - List of battles:
    - You can now switch between the battle name and map name when using the filter.
    - Settings:
    - Layout fixes for the change email button. - Layout fixes in the password change screen.
    - Challenges:
    - If a player has a paint that is one of Challenge prizes, it will be marked on the Challenges tab.
    - Improved the "Buy more" button on the containers screen.
- List of changes in Flash:
  - Missions screen is replaced with a pop-up about migration to HTML5.

### August 14 (Update 616)

- List of changes:
  - Added the heavy hovering Ares hull.
    - Added augments for the Ares hull.
    - Added a pop-up about migration from Flash to the new HTML5 version of the game.
- List of changes in the HTML5 version:
  - Improved quality of textures for all hulls and turrets.
    - Added «Anisotropic filtering» technology for textures of all hulls and turrets.
    - Search input is not displayed in the Friends screen if you have less than 10 friends or friend requests.
    - Changed the text of an error which is shown when you try to register an account with a nickname that is too short.
    - “Play” button is not active anymore unless you enter your account credentials.
    - The challenge widget now shows a "Completed" text, if you have finished all tiers.
    - The button to buy stars or Premium Pass is not shown any more when you finish a challenge.
    - If you are invited to a MM group, the “Play” button and buttons responsible for choosing mode are not active.
    - The tooltip indicator is not shown when you scroll MM modes to the end.
    - The “copy link” buttons are visually changed when you copy the link.
    - Placeholder text is grey now and when you click on Search input, it disappears.
    - Added tooltips for paint rarity categories.
    - Fixed font size of bought cards in the Showcase.
    - Fixed header from "Battle Pass" to "Challenges" in one of the screens.
    - Changed texts of modal windows which appear when you confirm your password/email.

### July 1 (Update 609)

- List of changes:
  - Updated coinboxes.
    - «Defender» drone:
    - Decreased double armour’s additional supply power range from +50% → +200% to +25% → +100%; - Increased power-up duration from 15 seconds to 30 seconds.
    - «Trickster» drone:
    - Increased effective range from, 15 → 25 metres to 20 → 30 metres; - Increased battle scores from 5 to 10.
    - Twins:
    - Increased maximum rate of fire from 270 ms to 257 ms.
    - Shaft:
    - Decreased range of max damage by 50%:
      - Mk1: 40 → 20; - Mk2: 44,61 → 22,30; - Mk3: 46,47 → 23,24; - Mk4: 48,82 → 24,41; - Mk5: 51,76 → 25,89; - Mk6: 53,53 → 26,77; - Mk7: 55,29 → 27,65; - Mk7+: 60 → 30.
        - Decreased range of min damage by 40%:
      - Mk1: 50 → 30; - Mk2: 54,61 → 32,77; - Mk3: 56,47 → 33,88; - Mk4: 58,82 → 35,29; - Mk5: 61,76 → 37,06; - Mk6: 63,53 → 38,12; - Mk7: 65,29 → 39,17; - Mk7+: 70 → 42.
    - Viking:
    - Increased overdrive damage.
    - Twins’s «Stable plasma» augment:
    - Removed recoil increase; - Added decrease of shots speed by 15%.
    - Shaft’s «Rapid-fire mode» augment:
    - Increased maximum rate of fire from 270 ms to 375 ms. - Energy reload speed decrease is now 50% instead of 40%.

### June 19 (Update 608)

- List of changes:
  - “Adrenaline” Augments for all turrets are now available for crystals.
    - Correction of the in-game balance of turrets and hulls:
    - “Adrenaline” Augments received an increase to their damage at shorter ranges:
      - melee range turrets — up to +39%; - short-range turrets — up to +36%; - medium-range turrets — up to +33%; - long-range turrets remain at +30%.
        - Vulcan:
      - Damage per bullet reduced by 12% for all modifications:
        - Mk1: 25 hp → 22 hp; - Mk2: 30,88 hp → 27,2 hp; - Mk3: 33,82 hp → 29,8 hp; - Mk4: 36,76 hp → 32,3 hp; - Mk5: 39,71 hp → 34,9 hp; - Mk6: 41,91 hp → 36,9 hp; - Mk7: 44,12 hp → 38,8 hp; - Mk7+: 50 hp → 44 hp. - Reload time increased from 50 ms to 55 ms.
        - Isida:
      - Increased maximum number of experience points for healing from 12 to 13.
        - Shaft:
      - Energy recovery rate after a sniper shot increased by 40%.
        - “Rapid-fire mode” Augment for Shaft:
      - Removed the damage penalty in sniping mode; - Slowed the rate of energy recovery after each shot; - Increased the rate of fire.
    - Reduced the number of chat channels for various locales.
    - Added an account in-game activity check before writing in the chat.
    - Corrected the layout in the announcements window.
    - Fixed the highlighting of your nickname in battle results tables.
    - Improvements in clan lists for players with different positions.
    - Fixed challenge widget for Firefox browser.

### June 4 (Update 606)

- List of changes:
  - Returned crystal boxes with experience points for first ranks: Recruit — Sergeant-Major.
    - Returned Ultra Containers with new items.
    - Added the «Crisis» drone into Ultra Containers.
    - Added the «Adrenaline» augment for all turrets into Ultra Containers.
    - Added Gauss’s «Electromagnetic salvo» into Ultra Containers.
    - Added Vulcan’s «Rubberized rounds» into Ultra Containers.
    - Added the «Ultra» skin for Hunter and Vulcan into Ultra Containers.
    - Added 3D flags.
    - Added announcements system.
    - Added auto self-destruction mechanism (your tank is self-destructed when your tank is flipped, you can disable this in settings).
    - Removed «Double damage», «Double armour» and «Speed Boost» supplies from first ranks: Recruit — Sergeant-Major.
    - Minimum rank needed to purchase «Double armour» and «Speed Boost» was decreased by one.
    - Significantly increased loading speed for the first entry to the Garage.
    - «Hyperion drone»’s enabling supplies consumption was decreased by 2.

### May 29 (Update 605)

- List of changes:
  - Fixed a bug that generated daily missions without rewards.
- List of changes in the HTML5 version:
  - Fixed Shaft’s zoom in sniper mode.
    - Fixed the battle link copying feature. Now it will be easier to share links between clients.
    - The “Home/Back” button should always work now.
    - Added news ticker mechanism to show announcements which are too large.
    - Fixed “Connection lost” window.
    - Layout fixes.

### May 21 (Update 604)

- List of changes:
  - The addition of positive and negative effects indication (except the Flash client).
    - The «Speed boost» (3) and «Mine» (4) supplies are now available in the Garage starting from the Sergeant (6) rank.
    - The «Double Armour» (5) and «Double Damage» (5) supplies are now available in the Garage starting from the First Sergeant (9) rank.
    - The «Battery» supply (6) and «Brutus» drone (6) are now available in the Garage starting from the Corporal (4) rank.
    - The Matchmaking system allows you to play only on maps that are unlocked for your rank now.
    - Changes in lighting on the Rio map.
    - The «Defender» drone:
    - Effect duration time was decreased from 20 seconds to 15 seconds; - Now consumes 2 more «Double Armour» supplies; - The recharge time was decreased from 20 seconds to 3 seconds.
- Changes in the HTML5 version:
  - Added indication of the status of other players’ overdrives.
    - Fixed layout issues.

### May 8 (Update 601)

- Returned turret and added hull augments to the Garage.
- Railgun’s «Round stabilization» augment moved to «Rare» category in containers.

### April 30 (Update 600)

- List of changes:
  - The regular container has been replaced with a new one that contains augments for turrets and hulls.
    - Augments for turrets can no longer be bought from the Garage.
    - Changed characteristics of augments for the following turrets:
    - Augment for Freeze «Corrosive mix»:
      - Damage per second increase is now 10% instead of 5%.
        - Augment for Isida «Nanomass reactor»:
      - Energy consumption decrease for healing mode removed.
        - Augment for Hammer «Dragon's Breath»:
      - Clip reload time increase is now 10% instead of 15%.
        - Augment for Hammer «High-capacity ammo clip»:
      - Clip reload time increase removed.
        - Augment for Twins «Plasma accelerators»:
      - Reload time increase is now 20% instead of 25%.
        - Augment for Twins «Heavy plasmagun»:
      - Projectile speed decrease is now 35% instead of 50%.
        - Augment for Ricochet «Minus-field stabilization»:
      - Shot reload time increase is now 15% instead of 20%.
        - Augment for Ricochet «Plasma-torch»:
      - Projectile speed decrease is now 35% instead of 50%.
        - Augment for Ricochet «Berserk»:
      - Energy used per shot increase is now 20% instead of 30%.
        - Augment for Smoky «Autocannon»:
      - Minimum and maximum damage decrease is now 75% instead of 80%.
        - Augment for Striker «Missile launcher "Hunter"»:
      - Added 100% projectile speed increase; - Removed maximum projectile speed limit.
        - Augment for Striker «Missile launcher "Cyclone"»:
      - Aiming time increase is now 25% instead of 30%.
        - Augment for Striker «Missile launcher "Uranium"»:
      - Reload time increase is now 15% instead of 20%
        - Augment for Thunder «Subcaliber rounds»:
      - Firing rate increased by 10%.
        - Augment for Thunder «“Sledgehammer" rounds»:
      - Projectile speed decrease is now 50% instead of 60%.
        - Augment for Railgun «Reinforced aiming transmission»:
      - Vertical autoaim decrease is now 20% instead of 30%.
        - Augment for Railgun «Electromagnetic accelerator "Scout"»:
      - Maximum damage decrease is now 30% instead of 40%.
        - Augment for Railgun «Large caliber rounds»:
      - Reload time increase removed.
        - Augment for Magnum «Automated gunpowder loading mechanism»:
      - Reload time increase is now 10% instead of 20%.
        - Augment for Shaft «Heavy capacitors»:
      - Horizontal aiming speed decrease removed.
        - Augment for Shaft «Light capacitors»:
      - Horizontal aiming speed increase is now 100% instead of 30%.
        - Gear Score range for drones decreased from 70 → 700 to 59 → 599 points.
        - Gear Score for augments increased from 99 to 100 points.
        - Crystal fund mechanism of PRO battles has been changed.
        - Loading into battles is now faster.
- Changes in HTML5:
  - Changes in layouts.

### April 24 (Update 599)

- List of changes:
  - Released 8 hull alterations for Hunter.
    - Now, protection modules no longer decrease freezing (slow-down) and burning (after-burn) effects.
    - Juggernaut has 50% resistance from freezing (slow-down) speed and burning (after-burn) damage.
    - Titan’s and Wasp’s overdrive:
    - Titan’s dome no longer protects from freezing (slow-down) and burning (after-burn) effects but still decreases heating damage; - When you place the dome, in addition to disabling other domes, it also disables bombs from Wasp’s overdrive.
    - Hunter’s overdrive:
    - Stun duration increased from 2.7 to 3 seconds; - Supplies disable duration increased from 3 to 5 seconds.
- List of changes in HTML5:
  - Triple buffering is now controlled by the player’s browser. Unnecessary framebuffer switches are no longer loaded while rendering, so graphics productivity was increased.
    - Added a confirmation window for deleting a friend from friends list.
    - Added some translations.
    - Fixed Chinese characters readability in battle chats.

### April 10 (Update 597)

- List of changes:
  - Paints were removed from the Shop.
- List of changes in the HTML5 version:
  - Some paints are now available in the Garage for Tankoins.
    - Fixed translations for the interface when creating groups.
    - Fixed the bug with the wrong info displaying in the battle invite window.
    - Fixed text layout of the window notifying about insufficient crystals for some locales.
    - Fixed text wrapping issues in chats.
    - Fixed names of format battles in the battle list.
    - Fixed the warning window about opening an external link.
    - Fixed some other texts.
    - Fixed layout problems in the Firefox browser.
    - Fixed how 4 digits are displayed in team score.
    - The “Invite” button in the menu will not be shown anymore if you don't have at least 1 friend.
    - Battle names are no longer case-sensitive.

### April 1 (Update 595)

- List of changes in the HTML5 version:
  - Improved completed mission indicators.
    - Changed background color of message when writing to a player.
    - Fixed auto scroll when switching channels.
    - Fixed context menu in the list of invites.
    - Fixed displaying clan tags in chat.
    - Changed order of context menu.

### March 20 (Update 594)

- List of changes:
  - Changed the formula used for calculating damage when a player has many multipliers enabled.
- List of changes in HTML5:
  - Improved camera behaviour in keyboard mode
    - Fixed lights for drop box zones.
    - Fixed “Reset all” button in settings.
    - Fixed the bug when it wasn’t possible to mention player’s nickname second time in chats
    - Added displaying alterations for all tanks in TAB stats
    - Added special indication of helpers in the chat.
    - Improved context menu when you click on a player’s nickname.
    - Made lights for bushes and trees to be the same as in Flash.
    - Titan’s dome displaying now depends on «Soft particles» setting.
    - Enter button on NumPad-keyboard also sends message to the chat now.
    - When writing to a specific player in chat all messages of the player are highlighted.
    - When you go to lobby chats from the clan chat the game doesn’t prompt you to choose a chat channel any more.
    - When looking for previous chat messages the window is not scrolled any more when new messages appear.
    - Removed «Soft shadows» setting.
    - Returned «Dynamic lights» setting.

### March 6 (Update 593)

- List of changes in HTML5:
  - Added festive special missions.
    - Added self-destruction countdown timer.
    - Added self-destruction activation after changing equipment.
    - Added the Vulcan ultra skin to the Showcase.
    - Added new 3D point bases for «Control Points», «Siege» and «Assault» modes.
    - Fixed point “capturing” indicator.
    - Added experimental optimized lighting system on the Arena map.

### February 28 (Update 592)

- List of changes in HTML5:
  - Added «Special Missions».
    - Fixed the bug with disappearing tank in the Garage
    - Fixed the “pause” function — tank will not be respawned while your camera is moving to a respawn point if the pause is enabled
    - Made battle interface scalable
    - Changes in the interface

### February 21 (Update 591)

- List of changes:
  - Changes in Vulcan’s balance:
    - Damage per second replaced with damage per projectile; - Average damage significantly increased; - Increased firing rate parameter: time between projectiles reduced from 75ms to 50ms; - Added projectile speed parameter with 250 m/s value; - Decreased barrel startup time to 1 second; - Added ricochets from an inclined surface; - Removed damage penalty during overheat; - Decreased impact and hit force.
    - Changes in alterations’ parameters:
    - Vulcan’s «Reinforced aiming transmission»:
      - Removed turret slowdown rate while shooting.
        - Vulcan’s «Incendiary band»:
      - Removed damage penalty; - Added projectile speed penalty; - Each projectile heats tank by 0,07% of maximum overheat temperature.
        - Vulcan’s «Shooting speed regulator»:
      - Now decreases firing rate by 15%; - Changed startup and slowdown time penalty to 85% instead of 50%; - Removed time to overheat boost.
        - Added new «Rubberized Rounds» alteration:
      - Increases number of ricochets to 5; - Increases possible ricochet angle from 60 degrees to 10 degrees from normal; - Decreases projectile speed by 25%.
    - Fixed behavior of damage from Striker’s explosion
- Changes in the HTML5 version:
  - New garage.
    - Fixed Isida’s effects.
    - Improved battle creation interface.
    - Fixed glitches on animated paints.
    - Improved readability of rank icons.

### February 7 (Update 589)

- Changes in the main client:
  - Improved information tooltip about Premium status.
    - Registration form suggests different variants of nicknames if the current one has already been taken.
    - Fixed wrong rank icons for Warrant-Officer 2 and Warrant-Officer 3 ranks.
    - Fixed joints for animated paints

### January 31 (Update 588)

- Changes in all versions:
  - Fixed the bug that decreased effective radius of Striker projectile’s splash
- Changes in Web version:
  - Increased readability of fonts in battles (nicknames, battle chat).
    - Increased quality of rank images
    - Increased quality of displaying protection modules in battles
    - Fixed the bug that displayed tank details above paints in the wrong way
    - Fixed the bug that permitted the use of the same key for 2 different actions
    - Optimized battle chat
    - Music volume in the lobby is set to 50% by default.
    - Changes in texts

### January 24 (Update 587)

- Changes in all versions:
  - Changed vanilla skins for modifications of turrets and hulls.
    - Changed Gear Score counting for all equipment.
    - Fixed the bug with counting scores for supporting teammates during overdrive recharging.
- Changes in Web version:
  - Asiasoft, Facebook, VK and Odnoklassniki now use the updated Web version.
    - Added subdomains support. Just add something like your username before.tankinonline.com (e.g. player123.tankionline.com) for each of your accounts and switch between them.
    - Added nickname suggestions when you try to register an existing nickname.

### January 17 (Update 586)

- Changes:
  - Number of modifications for all turrets, hulls and protection modules increased from 4 to 7.
    - Current equipment of players converted according to previously announced new system of modifications:
    - М0 → Mk1, Mk2; - М1 → Mk3, Mk4; - М2 → Mk5, Mk6; - М3 → Mk7.
    - Number of points for every team mate who benefits from Dictator’s overdrive decreased from 25 to 10.
    - Number of points for every team mate who benefits from Mechanic drone decreased from 10 to 7.
- Changes in the HTML5 version:
  - Product kits available for crystals with discounts are sold only in Showcase.
    - All XT, Prime, Legacy and Ultra skins can be bought in Showcase.
    - Added anisotropic filtering for graphics.
    - Optimized game performance while using battle chat.
    - The old HTML5 version is discontinued and replaced with the new one.
    - Released downloadable HTML5 client.

## 2019

### December 26 (Update 584)

- Changes:
  - Titan:
    - The dome no longer repairs tanks, but instead increases armor; - Improved Titan's Overdrive. Now disables other active generators in a radius of 35 meters from its generator; - Dome armor bonus increased from 85% to 90%; - Overdrive recharge speed increased from 600 points per second to 800 points per second; - Dome is now shown in DM modes;
    - Thunder:
    - Increased maximum firing rate. The delay between shots reduced from 2.3 seconds to 2.2 seconds.
    - Gauss:
    - Decreased round speed from 250 m/s to 225 m/s; - Decreased average blast radius from 5 meters to 4 meters; - Decreased minimum blast radius from 8 meters to 6 meters.
    - Shaft:
    - Fixed a bug with low damage in sniper mode.
    - Dictator:
    - Now you receive 25 points for every teammate who benefits from your overdrive.
    - Temporary protection from damage after respawn
    - Fixed a bug when a player equips alterations with splash damage with wrong settings.
    - TJR mode is now available to groups.
- Changes in the HTML5 version:
  - «Continue» button after the battle ends redirects a player to a new battle in any mode if a player joined the previous battle by clicking on the «Quick battle» button.
    - Sounds:
    - Fixed crackling; - Added multiple sounds for engines of hulls.

### December 20 (Update 581)

- List of changes:
  - Added new «Siege» game mode and daily missions for it.
    - Original Viking Thunder Prime skins are now separate from the re-designed versions (which will now be called “Ultra”). Current owners of these skins will now have both versions (Prime AND Ultra) in their garages.
    - Removed DM mode from MM battles
- Changes in the HTML5 version:
  - Your team is now always shown as blue.

### November 29 (Update 580)

- List of changes:
  - Added re-designed Prime skins for Thunder and Viking
    - Added new «Hyperion» Drone;
    - Added mechanics that grant score points for supporting teammates while using the following drones:
    - Mechanic:
      - 10 points for each teammate in area of effect.
        - Engineer:
      - 1 point for each teammate when take a player takes a bonus box.
        - Supplier:
      - 5 points for each teammate in area of effect.
        - Trickster:
      - 5 points for each teammate in area of effect
    - Added mechanics that speed up cooldowns for certain supplies when using the following drones:
    - Mechanic:
      - Speeds up Repair Kit cooldown.
        - Miner:
      - Speeds up Mine cooldown.
        - Defender:
      - Speeds up Double Armor cooldown.
        - Trickster:
      - Speeds up Speed Boost cooldown.
        - Booster:
      - Speeds up Double Damage cooldown.
    - Added mechanics for additional supplies consumption while using the following drones:
    - Trooper:
      - Consumes 1 additional Double Armour.
        - Sprinter:
      - Consumes 1 additional Speed Boost
        - Booster:
      - Consumes 3 additional Double Damages.
        - Lifeguard:
      - Consumes 3 additional Repair Kits.
        - Blaster:
      - Consumes 1 additional Double Damage.
        - Saboteur:
      - Consumes 4 additional 4 Mines.
    - Changed time of drones reload:
    - Camper:
      - Reload time decreased to 7 seconds
        - Mechanic:
      - Reload time decreased to 10 seconds.
        - Driver:
      - Reload time decreased to 15 seconds.
        - Sprinter:
      - Reload time decreased to 20 seconds.
        - Blaster:
      - Reload time decreased to 35 seconds.
    - Other changes in drones
    - Assault:
      - Removed mechanics that prolong supplies active time - Added mechanics that decrease cooldown of Double Armour, Double Damage and Speed Boost when capturing flags.
        - Lifeguard:
      - Maximum repair increased to 3000 HP.
        - Blaster:
      - Minimum damage from blast increased to a range of 1200-1800.
        - Saboteur:
      - Minimum number of Mines increased to 3.
    - Made changes in the game balance:
    - Hammer:
      - Dragon's breath:
        - Removed penalty on spread; - Increased reload time by 15%. - Duplet:
        - Removed penalty on reload time; - Added buckshot spread of 50% horizontally and 100% vertically.
        - Smoky:
      - Supercumulative rounds:
        - Chance step of Supercumulative shot decreased by 60%; - Chance of Supercumulative shot decreased.
        - Striker:
      - Remote rocket explosives:
        - Maximum limit of rocket speed increased from 350 m/s to 400 m/s. - Missile Launcher «Uranium»:
        - Reload time after salvo decreased by 40%.
        - Thunder:
      - Changed projectile mechanics from instant hit to delay due to travel time - Added projectile speed — 400 m/s. - Subcaliber rounds:
        - Impact force increased to 25%; - Added projectile speed boost of 50%. - Sledgehammer rounds:
        - Added projectile speed penalty of 60%.
        - Mammoth.
      - Increased speed boost from overdrive from 40% to 50%.
- HTML5:
  - You can now open the garage while in battle by pressing G on the keyboard;
    - Updated point capture indicator on CP mode;
    - Updated battle markers;
    - List of available items from container is now scrollable.

### November 15 (Update 579)

- List of changes:
  - Overdrive recharge status remains after a player stops being Juggernaut or rejoins a battle.
    - The Dome of Titan’s generator is no longer visible in DM modes.
    - Fixed description of Mammoth and «Missile launcher "Uranium”» Striker’s alteration.
- List of changes in the HTML5 version
  - HTML5 version is now supported in the Firefox browser.
    - Fixed the scores bar in battles with unlimited scores or without a time limit.
    - Changes in translations and UI.
    - Added showcase to the Shop in the HTML5 version and Android version.
    - Players who used the old HTML5 client are now redirected to the new HTML5 version.
    - Added shadows on tank tracks.
    - Improved performance on outdated and slow computers
    - Supply box zones are no longer darkened on night mode maps.
    - Added news to the communicator.

### October 31 (Update 577)

- Changes in Overdrives:
  - Mammoth's overdrive:
    - Removed invincibility; - Removed ignoring physical impact; - Increased duration time from 5 to 7 seconds; - Increased speed boost from 30% to 40%; - Added instant repair; - Added instant removal of freezing and burning effects; - Cannot be disabled by Wasp's overdrive.
    - Hunter's overdrive:
    - Decreased effect radius from 30 to 25 meters; - Decreased duration time from 3 to 2.7 seconds; - Increased delay before activation time from 1 to 1.1 seconds.
    - Wasp's overdrive:
    - Doesn't disable Mammoth's overdrive anymore.
- Changes in Alterations:
  - Freeze’s alteration «Shock freeze»:
    - Decreased damage penalty from 50% to 30%; - Freezing rate increased from +100% to +200%.
    - Striker’s alteration «Missile launcher “Hunter”»:
    - Removed maximum projectile speed penalty.
    - Striker’s alteration «Missile launcher “Cyclone”»:
    - Decreased aiming time penalty from 40% to 30%.
    - Striker’s alteration «Missile launcher “Uranium”»:
    - Decreased number of projectiles from 4 to 2.
    - Striker’s alteration «Remote rocket explosives»:
    - Added max projectile speed limit of 350 m/s.
    - Vulcan’s alteration «Reinforced aiming transmission»:
    - Decreased vertical auto-aim penalty from 30% to 15%.
    - Vulcan's alteration «Shooting speed regulator»:
    - Decreased damage per second from 20% to 15%.
- Changes in the new HTML5 version:
  - Added remapping controls function;
    - Added WebGL1 support;
    - UI changes.

### October 25 (Update 575)

- Changes:
  - Missions:
    - Added "Damage enemy tanks" to daily and weekly missions; - Reduced number of "Finish battles" daily missions.
    - Freeze:
    - Decreased freezing level of the turret from 90% to 20%; - A full energy canister now lasts 0.5 secs longer.
    - Shaft’s alteration «Heavy capacitors»:
    - Decreased full reload time from 8 to 6 seconds. - Shaft’s alteration «Light capacitors»: - Decreased full reload time from 2.5 to 2 seconds; - Decreased Maximum aiming damage from 30% to 25%.
    - Juggernaut:
    - If a juggernaut self-destroys, score points are given to the opponent. Previously they were deducted from your team’s score.
- Changes in the new HTML5: version:
  - Fixed a bug when friend's status (in group / in battle) was shown incorrectly.
    - Multiple changes to user interface and translations.

### October 11 (Update 574)

- Changes in the new HTML5 and Flash versions
  - Updated how Gear Score is calculated.
    - Removed «Team Juggernaut» mode on «Brest» map.
    - Magnum:
    - Reduced average splash damage from 50% to 30%.
    - Mammoth’s overdrive:
    - Increased range from 7 meters to 7,5 meters; - Increased loading speed from battle points by 20%.
    - Renamed tankoin-containers to coinboxes.
    - Disabled DM mode daily missions.
- Changes in the new HTML5 version:
  - Main chat can now be launched from any screen by pressing the ТАВ key.
    - Interface now remembers chat window width.
    - Battle chat now hides automatically when inactive during battle.
    - Added special menu for choosing paints category.
    - Added a setting to display nickname of the player who has dropped a gold box.
    - Changed overdrive loading indicator.
    - Multiple changes in translations.
    - Multiple changes in the UI.

### October 2 (Update 573)

- Changes:
  - Fixed a critical error in Flash version when any player with Gauss turret leaves a battle;
    - Fixed a visual bug with an amount of tankoins;
    - Fixed and added «destroy Juggernaut» daily missions;
    - Changed mechanics for Trickster drone. Now also cancels background supplies cooldown;
    - Decreased amount of score points given for destroying Juggernaut to 50. Increased amount of experience points given for destroying and supporting in destroying Juggernaut by 5.
- Changes in the new HTML5 version:
  - Fixed a visual bug that showed a paint or product kit as not bought after buying it;
    - Fixed a paint choosing glitch;
    - Fixed a bug that not allowed to choose ranks while creating a battle;
    - Removed auto-pause timer when opening the garage after leaving a battle;
    - Fixed a bug that not allowed to create a battle without supplies and bonus boxes;
    - Restored models of Striker and Magnum rounds;
    - Added a function to enable background sound after a tab with the game was hidden.
    - Made capturing zone indicators be displayed over other models;
    - Fixed a bug with supplies reload indicators when a player uses a drone;
    - Many changes of images and buttons location.

### September 26 (Update 572)

- Changes in the new HTML5 and Flash versions
  - Added Team Juggernaut mode;
    - Removed DM Juggernaut more;
    - Added daily missions for the new Team Juggernaut mode;
    - Added tankoin-container;
    - Decreased time of delay after Viking’s overdrive for some turrets;
    - Removed auto-equip of paints received from containers and challenges;
- Changes in the new HTML5 version:
  - Fixed reverse driving control settings
    - Added mouse camera control mode while a tank flipped on its side
    - Returned dust from tank tracks
    - Added sorting rare paint alhpabatically
    - Fixed wrong indication of turret load after Vulcan’s overheating
    - Decreased sound volume level for turret’s rotation in mouse camera control mode;
    - Fixed a game crash when a bonus box appeared without a parachute

### September 19 (Update 562)

- Added camera inertia to keyboard camera control mode
- Added dedicated reticles for Striker, Gauss and Juggernaut
- Added a notification about receiving prizes from challenges
- Fixed challenge tier progress bar bug
- Fixed a bug with drones cooldown after respawning
- Fixed a bug that allowed players to activate a supply while it was already on
- Fixed a bug with missing sound of opponents’ supplies activation
- Added a sound effect for reloaded supplies
- Changed location of overdrive indicator: it is now symmetrical with the radar
- Fixed a FPS problem on Intel HD4000 graphics card
- Restored VK and Facebook authentication gates
- Fixed a bug that caused endless loading when an account is blocked
- Made "Leave" button default for pause menu
- Fixed a bug related to the display of an email address after it was linked
- Fixed a bug that cause some players in a MM group to join a battle that was ending
- Fixed a bug in displaying information in friends menu and inviting to a MM group
- Added battle information for PRO battles

### August 30 (Update 561)

- Added Magnum shot colors to Containers (except Crimson).
- Added unique items from the August challenge to the Containers.

### August 23 (Update 560)

- Adjusted Tankоin prices for the following currencies: IRR, CNY
- Fixed a bug where the Battle Pass was not removed after the Challenge ended
- Removed individual discounts

### August 9 (Update 559)

- New weekly containers with Tankoins have been added to the game.
- Old weekly containers have been renamed and can no longer be received.
- Updated prices for Tankoins in UAH.

### August 1 (Update 558)

- Accrual of battle points in DM matchmaking battles:
  - The number of frag points has been reduced from 15 to 10.
    - The self-destruct penalty has been turned off.
- Fixed the “flying house” bug on the Molotov map.

### July 18 (Update 564)

- Changes in the balance of turrets and overdrives:
- Gauss:
  - Increased aiming recovery time from 1 second to 2 seconds.
- Freeze:
  - Reduced time of full cylinder discharge from 7 seconds to 6.5 seconds.
- "Plasma-torch” Alteration for Ricochet:
  - Now reduces the speed of projectiles by 50% instead of 66%.
- “Berserk” Alteration for Ricochet:
  - Now increases the power of shots by 30% instead of 80%.
- “Slugger” Alteration for Hammer "Slugger»:
  - Now reduces turret rotation speed by 30% instead of 70%.
- “Dragon’s Breath” Alteration for Hammer:
  - Now each pellet heats the target by 0.3% instead of 0.2%.
- “High-capacity ammo clip” Alteration for Hammer:
  - Now increases magazine reload time by 15% instead of 35%.
    - Now does not affect the cooldown of shots in the clip.
- “Duplet” Alteration for Hammer:
  - Now increases clip reload time by 15% instead of 10%.
- “Adaptive reload” Alteration for Hammer:
  - Now, destroying the enemy tank reloads the clip completely.
- Dictator's Overdrive supply activation effect:
  - Increased range from 15 meters to 20 meters.
- Defender Drone:
  - The effect duration is fixed at 20 seconds.
    - Increased cooldown from 10 seconds to 20 seconds.
    - Reduced additional power supply with +(100-300)% to +(50-200)%.
- Booster Drone:
  - The effect duration is fixed at 3 seconds.
    - Reduced cooldown from 10 seconds to 3 seconds.
- Changes in matchmaking maps:
  - Removed ASL mode from Forest map.
    - Added a new experimental map called “Archipelago” in DM, TDM, CP modes.
    - Added Molotov in DM, TDM, CP, CTF, RGB, ASL modes.
    - Added Cross map in DM, TDM, CP, CTF, RGB modes.
    - Minor fixes on different maps.
- Other changes:
  - Added “Owl” module to the "Anti-camper" protection modules kit
    - Added 48 hours to the July Challenge and WAR for Space to make up for starting them late.

### June 13 (Update 556)

- Gauss bug fixes:
  - Fixed incorrect calculation of damage and impact force in the splash zone of special shot.
    - Fixed a bug that caused Gauss to fire a shot after the Viking Overdrive expires.
    - Increased sprite for hitting a target with special shot.
    - Fixed a bug where a projectile would sometimes fly out of the barrel sideways when firing in standard mode.
- Changes in the characteristics of the Gauss:
  - Increased damage spread in special mode:
    - M0: 790-920 → 640-1070; - M1: 1034-1199 → 840-1394; - M2: 1181-1367 → 960-1587; - M3: 1425-1646 → 1160-1911; - M3+: 1620-1870 → 1320-2170.
    - Reduced targeting time:
    - M0: 2.5 → 2.2; - M1: 2,29 → 2,05; - M2: 2,17 → 1,97; - M3: 1.97 → 1.82; - M3+: 1,8 → 1,7.
    - Reduced reload time in special mode:
    - M0: 5.5 → 4; - M1: 4,82 → 3,71; - M2: 4,42 → 3,53; - M3: 3.74 → 3.24; - M3+: 3,2 → 3.
- Reduced projectile speed when firing in standard mode from 270 m/s to 250 m/s.
- The range of intermediate damage in the special mode was increased from 5 m to 12 m.
- Increased the percentage of average splash damage for special shots (sniping mode) from 50% to 90%.
- Changes in the characteristics of ISIDA:
  - Increased the number of points received for repairing tanks from 10 to 12.
- Changes in the parameters of Overdrives:
  - Mammoth:
    - Overdrive duration reduced from 10 seconds to 5 seconds; - increased reload speed of Overdrive by 40%; - increased maximum speed boost of the tank from 25% to 30%.
    - Wasp:
    - increased Overdrive recharge rate by 11%.
- Changed attribution of points in Gear Score:
  - turret — from 0 to 4000;
    - body — from 0 to 4000;
    - each protection module — from 40 to 400;
    - drone — from 50 to 500;
    - each supply (except the gold box) — from 0 to 40;
    - turret/hull skin — 15;
    - shot effect — 15;
    - legendary paint — 14;
    - epic paint — 9;
    - rare paint — 5;
    - ordinary paint — 1.
- Changes in maps:
  - Removed one of the Nuclear Energy drop zones for some modes in Stadium.
    - Reduced the overall height of the map and changed the ramps on Highway.

### April 10 (Update 551)

- Vulcan:
  - Reduced damage after overheating:
    - M0: 300 → 90;
    - M1: 397.06 → 119.12;
    - M2: 441.18 → 132.35;
    - M3: 529.41 → 158.82;
    - M3 +: 600 → 180.
    - Reduced barrel spin time by 0.5 s for all modifications
- Vulcan’s "Incendiary band":
  - Now reduces damage per second by 20% instead of 10%
- Vulcan’s "Shooting Speed Regulator":
  - Now reduces damage per second by 20% instead of 25%
- Striker’s Missile launcher "Hunter":
  - Reduced recharge time after volley:
    - M0: 2.5 → 1.5; - M1: 2.25 → 1.35; - M2: 2.11 → 1.27; - M3: 1.97 → 1.18; - M3 +: 1.8 → 1.08
    - Thunder’s "Subcaliber rounds":
    - Removed recoil penalty
    - Shaft’s "Rapid-fire mode”:
    - Now consumes 375 energy per shot instead of 380; - Additionally reduces the energy recovery rate after a shot by 15
- Drones (all):
  - Now increase turret damage and hull defense by 1% to 5%
- "Driver" Drone:
  - Recharge time is now 20 seconds instead of 12
- Updated effects on existing supplies - Added 11th April
  - Now, Repair Kit, Double Damage (DD), Double Armour (DA), or Speed Boost have their respective visual effects when activated, which will show up on the tank at any distance. This will provide valuable tactical and strategic information for the attentive tanker.

### March 29 (Update 550)

- Minor changes in turret control when playing with the mouse or keyboard.

### March 15 (Update 549)

- Matchmaking changes that should prevent sabotage from groups.
- Added the option to register and authorise via Google account in the browser version of the game.

### March 1 (Update 547)

- Changes to Turrets:
  - Firebird:
    - Changes in heating temperature boost:
      - M0: 0.3 → 0.1; - M1: 0.44 → 0.29; - M2: 0.69 → 0.6; - M3: 0.79 → 0.7; - M3+: no change.
- Now Isida for cured ally gets 10 points instead of the previous 15.
- Changes to Alterations:
  - Firebird:
    - Compact Fuel Tanks: Now increases heating rate by 100% instead of 200%. - Incendiary mix: Now reduces power consumption by 50% instead of 20%.
    - Freeze:
    - Corrosive Mix: Now increases damage per second by 5% instead of 10%.
    - Hammer:
    - Dragon's Breath: Now each pellet heats the target by 2.2% of the maximum temperature instead of 3.3%.
    - Ricochet:
    - Plasma-torch: Now slows projectile speed by 66% instead of 75%. - Berserk: Now increases energy per shot by 80% instead of 100%.
    - Striker:
    - Uranium Missile Launcher: Now increases cooldown by 20% instead of 10%.
    - Thunder:
    - Subcaliber Rounds: Now increases impact force by 20% instead of 10%.
    - Railgun:
    - Round Destabilization: Now increases max damage by 70% instead of 90%. - Death Herald: Now does not affect the reload time but increases charging time by 10%.

### February 22 (Update 542)

- Added themed decorations and items for Iron Day
- Added game tips to loading screen

### February 1 (Update 541)

- Duration of matchmaking battles reduced from 8 to 7 minutes.
- Minimum wait time between equipment changes in all the battles reduced from 5 to 3 minutes.
- Changes to winning conditions in matchmaking battles:
  - TDM: 100 kills → 70 kills;
    - JGR: 100 kills → 50 kills;
    - ASL: 100 points → 70 points;
    - DM: 50 kills → 30 kills;
    - CP: 50 points → 30 points;
    - CTF: 7 flags → 5 flags;
    - RGB: 7 goals → 5 goals.
- Fixes to "Massacre" map in matchmaking:
  - Changed map landscape;
    - CTF and RGB now available.

### January 25 (Update 540)

- Changes in the characteristics of turrets and alterations:
  - Magnum:
    - Reduced recharge time:
      - M0: no change; - M1: 4.51 → 4.35; - M2: 4.12 → 3.82; - M3: 3.85 → 3.47; - M3+: 3,5 → 3.
- Shaft:
  - Increased energy recovery per second:
    - M0: 111 → 125; - M1: 119 → 136; - M2: 129 → 148; - M3: 135 → 156; - M3+: 143 → 166.
- Isida:
  - Reduced repairs:
    - M0: 375 → 200; - M1: 477 → 253; - M2: 545 → 288; - M3: 669 → 353; - M3+: 760 → 400.
    - Consumption of energy in attack mode reduced from 200 to 166 u/S.
    - Energy consumption in repair mode is reduced from 100 to 80 u/s.
- Alteration for Isida "Support Nanorobots"»
  - Now increases repairs by 100% instead of 25%.
- Alteration For the hammer "Duplet"»:
  - Now not gives bonus to speed be recharged clamping ring.
- Alteration for Striker "Uranium"»:
  - Now additionally increases cooldown between shots by 10%.
- Alteration for Thunder Sledgehammer Shells"»:
  - Now reduces the range of maximum damage by 95% instead of 90%.
- Now ISIDA gets 15 points instead of the previous 10 for repairing allies.
- Changed rewards for weekly quests: Completing all 3 quests now gives a total of 6 weekly containers and 3 regular, instead of 3 weekly and 6 regular.
- Reduced the length of the matchmaking version of the Highway map.

### January 17 (Update 539)

- Fixed number of upgrade steps for Hornet M0.
  - Hornet M0 now has 20 upgrade stages (instead of just 10), just like other M0 hulls.
    - All existing upgrade steps will be converted i.e. If your Hornet M0 was at upgrade step 7, the update will convert it to step 14.

## 2018

### November 3 (Update 534)

- 44 new shot effects added to the game for Firebird, Freeze, Isida, Twins, Ricochet, Striker, Railgun and Shaft turrets.
- Alterations balance changes:
  - Ricochet alteration «Berserk»:
    - now when destroying an enemy restored 100% of the ammo tank, and not 25%.
    - Smoky alteration «Autocannon»:
    - now reduces damage by 85%, and not 75%; - now reduces recoil by 33%, and not 66%.
    - Vulcan alteration «Incendiary band»:
    - now ignites the target for 0,2/sec, and not 0,8/sec; - additionally reduces damage by 10%.
    - Thunder alteration «"Sledgehammer" rounds»:
    - now reduces reload time by 30%, and not by 20%.
    - Railgun alteration «Round destabilization»:
    - now increases maximum damage by 90%, and not by 50%; - now reduces minimal damage to 1 hp, and not to 5 hp.
    - Magnum alteration «Mortar»:
    - now mine placed by a shot is active for 30 seconds.
- Added indication for the player’s alteration above the tank in battle.

### October 31 (Update 533)

- 30 new gameplay alterations added to the game.
- Changes to current alterations balance:
  - Firebird alteration «High pressure pump»:
    - price reduced from 50,000 to 20,000; - additionally increases min. hit distance by 10%
    - Firebird alteration «Compact fuel tanks»:
    - price reduced from 100,000 to 70,000; - now increases max. temperature by 200%, from 150%.
    - Freeze alteration «High pressure pump»:
    - price reduced from 50,000 to 20,000; - additionally increases min. hit distance by 10%.
    - Isida alteration «Broadband radiators»:
    - price reduced from 50,000 to 20,000; - now reduces hit distance by 25%, from 30%.
    - Isida alteration «Support nanobots»:
    - price reduced from 100,000 to 55,000; - now instead of reducing energy consumption in healing mode will increase healing by 50%.
    - Twins alteration «Plasma accelerators»:
    - price reduced from 50,000 to 20,000; - now reduces reload time by 25%, from 20%.
    - Twins alteration «Stabilized plasma»:
    - price reduced from 50,000 to 45,000; - additionally increases strength of impact and recoil by 10%.
    - Smoky alteration «Assault rounds»:
    - price reduced from 50,000 to 20,000; - now increases strength of impact by 35%, from 30%.
    - Vulcan alteration «Reinforced aiming transmission»:
    - price reduced from 50,000 to 20,000; - now reduces slowdown in turret rotation by 50%, from 70%.
    - Thunder alteration «Subcaliber rounds»:
    - price reduced from 50,000 to 20,000; - additionally increase strength of impact and recoil by 10%.
    - Railgun alteration «Reinforced aiming transmission»:
    - price reduced from 50,000 to 20,000; - now increases turning speed by 40%, from 35%.
    - Railgun alteration «Round stabilization»:
    - price reduced fromо 100,000 to 35,000; - additionally retains power of the shot through targets by 100%.
    - Railgun alteration «Large caliber rounds»:
    - additionally increases the delay before shots by 20%.
    - Shaft alteration «Heavy capacitors»:
    - price reduced from 50,000 to 20,000; - now increases min. damage by 20%, from 25%; - now increases reload time by 25%, from 20%.
- Option to rent alterations removed from the game.
- Gameplay alterations are now unlocked according to ranks, not turret modifications.
- Now only one gameplay alteration can be equipped for each turret.
- Now standard color of the turret shot doesn’t rely on its modification.

### October 30 (Update 532)

- Mission system reworked:
  - Mission chains replaced with weekly missions.
    - Added new container type — weekly container.
    - Weekly container includes a set of bonuses: crystals and supplies. - Weekly containers can be earned only as a reward for completing weekly missions.
    - Added new types of daily missions:
    - activate overdrive in battle; - finish battle; - finish battle in specific mode.
    - 3x hours of Premium as a mission reward was removed from the game.
    - “Collect supplies” missions can now be completed by activating specific supplies.
    - Slightly increased the cost of changing daily missions.
- 9 new drones added for purchase in the Garage.
- 3 new drone kits added to the Shop:
  - «Trinity» — «Supplier», «Defender», «Sprinter» drones;
    - «Drone amid a clear sky» — «Trickster», «Booster», «Lifeguard» drones;
    - «Full house» — «Saboteur», «Camper», «Blaster» drones.
- In the «Second coming» kit the «Supplier» drone was replaced with the new «Miner» drone.
- Changes to drone balance:
  - Assault:
    - changed bonus for the duration of active supplies:
      - with no upgrades: (7 → 3), sec.
        - recharge increased from 10 to 12 seconds.
    - Driver:
    - changed the amount of time for overdrive recharge that is reduced for each enemy tank destroyed::
      - fully upgraded: (20 → 30), sec/kill.
        - recharge reduced from 15 to 12 seconds.
    - Engineer:
    - recharge increased from 5 to 10 seconds.
    - Supplier:
    - now available for purchase from the Captain rank, instead of WO5; - price increased from 50,000 to 90,000 crystals.

### October 19 (Update 530)

- Changes to drone mechanics:
  - “Engineer” in addition to its standard mechanic now activates the effect of the picked up supplies for all allies in the battle.
    - “Mechanic” in addition to its standard mechanic now allows to use Repair Kit even if you have full health.
- Currently equipped drone is now displayed above your tank in the Garage.
- The color of the overdrive activation effect is now green for your allies and blue for your enemies.

### October 16 (Update 529)

- Turret balance changes:
  - Freeze:
    - full-reload time increased from 8 to 9 seconds.
    - Twins:
    - reduced projectile speed:
      - М0: 60 → 40; - М1: 68 → 48; - М2: 72 → 52; - М3: 75 → 55; - М3+: 80 → 60.
        - reduced minimal hit range:
      - М0: 60 → 50; - М1: 68 → 58; - М2: 72 → 62; - М3: 75 → 65; - М3+: 80 → 70.
        - increased maximum hit range:
      - М0: 15 → 40; - М1: 17 → 48; - М2: 18 → 52; - М3: 19 → 55; - М3+: 20 → 60.
        - minimal hit radius increased from 4 to 5 meters on all modifications;
        - added new parameters “average hit radius” and “average hit percentage”.
      - These settings impact the effectiveness of splash damage: it will become bigger.
    - Shaft:
    - increased minimal aimed damage:
      - М0: 355 → 380; - М1: 448 → 478; - М2: 551 → 587; - М3: 623 → 663; - М3+: 705 → 750.
        - increased ammo recovery speed:
      - М0: 100 → 111; - М1: 107 → 119; - М2: 114 → 129; - М3: 119 → 135; - М3+: 125 → 143.
        - reduced reload time between shots without aiming:
      - М0: 2,5 → 2; - М1: 2,37 → 1,87; - М2: 2,22 → 1,72; - М3: 2,12 → 1,62; - М3+: 2 → 1,5.
        - energy for an aimed shot increased from 250 to 1000 on all modifications.
- Changed the standard texture for Holiday paint.

### October 10 (Update 528)

- Time required for M0 turret and hull MicroUpgrades reduced by 3 times;
- Redesigned configuration of the MM-version of the map Future:
  - slightly widened ascending pathways to the house near the Blue base;
    - removed the inner area of the house near the Red base;
    - removed the ascending pathway to the bridge near the Red base: now the bridge continues to the end of the map, and can be used to reach the roof of the big house.
- The length of Matchmaking battles reduced from 9 to 8 minutes.

### September 25 (Update 527)

- Turret balance changes:
  - Ricochet:
    - reduced the energy cost for shots:
      - М0: 126 → 100; - М1: 121 → 88; - М2: 118 → 80; - М3: 115 → 69; - М3+: 111 → 60.
        - reduced the reload speed for the energy tank from 83,33 to 50 units per second on all modifications;
        - reduced the minimal hit range:
      - М0: 70 → 50; - М1: 79 → 56; - М2: 85 → 60; - М3: 93 → 65; - М3+: 100 → 70.
    - Magnum:
    - the remaining time from not charging the shot to a full 100% power is now added to the reload time\*; - reduced the time of the «clean» reload:
      - М0: 7 → 5; - М1: 6,35 → 4,5; - М2: 5,8 → 4,1; - М3: 5,5 → 3,85; - М3+: 5 → 3,5.
        - minimal hit radius increased from 15 to 20 meters on all modifications;
        - added new parameters «average hit distance» and «average hit percentage».
      - These parameters impact the effectiveness of splash damage: it will become less.
- For M0 hulls and turrets the number of MicroUpgrade steps increased from 10 to 20.
  - The overall cost and time of upgrading remains the same.
- The duration of Matchmaking battles reduced from 10 to 9 minutes.
- Adapted versions of «Cologne», «Parma», «Magistral» and «Bobruisk» maps added to the list of Matchmaking and PRO-battle maps.
- \*Changes to the reload mechanic for Magnum will appear in the game a day later, than the main release — with server restart 02:00 UTC September 26th.

### September 6 (Update 525)

- Turret balance changes:
  - Smoky:
    - Increased the maximum hit range; - Improved critical damage; - Increased middle-to-long range effectiveness.
    - Striker:
    - Improved the starting speed for rockets; - Improved the angle speed for rockets; - Reduced target acquiring time for rockets.
- PRO-Battle List changes:
  - In addition to custom player names for battles, original map names will be shown too;
    - Maps in Battle List are now sorted by the time of their creation, from the earliest down to the oldest battle.
- Small changes in Matchmaking mechanism:
  - Reduced waiting time for solo players;
    - Improved prediction accuracy for waiting time;
    - Introduced rank limits for players in battle groups: now all players in the group must be at maximum 5 ranks above or below the group’s creator;
    - Fixed the visual indication of game mode for players in battle groups.
- Friend List updates for Matchmaking:
  - Added indicators “in battle” and “in battle group” for Friend List;
    - Added option to invite friends into battle group even if they are already in battle.
- Supply drops:
  - Increased time before the first wave of supply drops from 40 seconds to 120 seconds.
- The “Battle!” button in Battle List renamed to “Matchmaking”.
- Small changes to configuration of Matchmaking version of maps and ASL mode.
- Added an option to Settings to allow gifts from all players, not just friends.
- “Fall leaves” animated paint added to containers.

### August 10 (Update 521)

- Changes to turret and alteration balance:
  - Firebird:
    - lowered direct damage:
      - М0: 375 → 200; - М1: 454 → 303; - М2: 590 → 479; - М3: 669 → 582; - М3+: 760 → 700.
        - lowered minimal impact distance:
      - М0: 17 → 15; - М1: 18,6 → 16; - М2: 21,5 → 17,8; - М3: 23,1 → 18,8; - М3+: 25 → 20.
        - increased temperature limit for beginner and medium MUs levels;
        - heating up speed became upgradable;
        - weak impact percentage increased from 0 to 10%;
        - cone angle increased from 20° to 25°.
    - Freeze:
    - lowered damage:
      - М0: 529 → 450; - М1: 647 → 582; - М2: 706 → 635; - М3: 882 → 794; - М3+: 1000 → 900.
        - lowered minimal impact distance:
      - М0: 17 → 15; - М1: 19,3 → 16,5; - М2: 20,3 → 17,1; - М3: 23,1 → 18,8; - М3+: 25 → 20.
        - weak impact percentage increased from 0 to 10%;
        - cone angle increased from 20° to 25°.
    - «High pressure pump» alteration for Firebird:
    - cone angle will now decrease by 75% instead of 70%.
    - «High pressure pump» alteration for Freeze:
    - cone angle will now decrease by 75% instead of 70%.
- Changes to battle score distribution for actions in Matchmaking battles:
  - CTF — number of score points for delivering the flag reduced from 100 to 75;
    - RGB — number of score points for delivering the ball increased from 50 to 75;
    - CP — number of score points for neutralizing a control point increased from 5 to 10.
- Batteries added to rewards for completing daily missions.
- Adapted version of Sandbox map added to the list of Matchmaking and PRO battles.

### July 28 (Update 519)

- Changes to Juggernaut mode:
  - reduced damage, armor and healing from Juggernaut’s overdrive: on lower ranks -- reduced more, on medium and high ranks -- reduced less.
    - added sound for when Juggernaut is destroyed;
    - Juggernaut’s overdrive now has purple color;
    - fixed several errors in the mode.
- Removed from the score table at the end of the battle additional crystals indication for players with \*Premium account or Beginner’s Pass.
  - The summary of all rewards at the end of the battle, including prizes, is now shown in the “Rewards” column.
- World Cup 2018 paints removed from the Shop.
- The low damage percentage for Hammer increased from 10% to 25%.
- The number of score points for delivering the flag in Matchmaking CTF battles increased from 50 to 100.
- Changed the geometry of the Matchmaking version of Tribute.

### July 20 (Update 518)

- A new “Juggernaut” mode added to the game (available from the Sergeant rank).
- An updated version of Sandal map added to the list of Matchmaking maps.
- Additional updates for the Matchmaking version of Massacre map.
- Repair Kit supply now available for purchase from the Recruit rank.
- Mine supply now available for purchase from the Corporal rank.
- Double Armor and Double Damage supplies now available for purchase from the Master Corporal rank.
- Battle List of PRO-battles and PRO Battle Pass now available from Warrant Officer 1.
- Changes to turret balance:
  - Thunder:
    - slightly reduced reload time; - considerably increased the distance of maximum damage; - slightly increased the distance of minimal damage; - slightly reduced the impact power of the shot; - increased the power of the splash explosion; - added new parameters “range of average impact” and “percentage of average impact”.
    - Shaft:
    - slightly reduced the recharge time between shots while NOT in Sniper mode; - slightly increased the maximum range of shots NOT in Sniper mode. - reduced by two times the range of minimal impact of shots while NOT in Sniper mode; - reduced by two times the percentage of weak impact shots while NOT in Sniper mode; - the amount of energy per shot slightly reduced, and the parameter is no longer upgradable.

### June 30 (Update 516)

- Daily missions to earn experience points were replaced with missions to earn score in battles.
- Fixed error in Matchmaking when several battle groups could be put onto the same team, and at the same time no battle group would be placed on the opposing team.
- The number of player reports required for the battle to be highlighted for battle moderators to check was lowered from 25% to 15% of the number of players in the battle.

### June 23 (Update 515)

- Balance changes in turrets:
  - Freeze — damage increased on all modifications:
    - М0: 375 → 529; - М1: 488 → 647; - М2: 533 → 706; - М3: 669 → 882; - М3+: 760 → 1000.
- Isida — removed ability to unfreeze and deflame tanks.
- Balance changes in drones:
  - Assault — increased bonus to the active time for supplies:
    - without modifications: (5 → 7), sec; - fully upgraded: (10 → 15), sec.
    - Trooper — increased the active time of supplies:
    - without modifications: (7 → 10), sec; - fully upgraded: (15 → 20), sec.
    - Mechanic — increased healing radius:
    - without modifications: (10 → 15), meters; - fully upgraded: (20 → 25), meters.
- Changed the position of several spawn points, bases and flags on Matchmaking versions of maps Aleksandrovsk, Bridges, Industrial Zone, Kungur, Osa, Tribute, Year 2042.
- The number of points gained in Matchmaking battles per each captures point in CP decreased from 25 to 15.
- Updated paint descriptions for “Champion”, “Silver”, “Bronze”, “Acid” and “Gladiator”.
- Iraq and Palestine added to the list of countries for clan’s selection.

### June 5 (Update 513)

- The size of battle groups in Matchmaking is now limited to 3 players;
- After creating a battle group protection modules of group members are no longer shown in Matchmaking;
- Fixed bugs with drones “Trooper” and “Mechanic”;
- Trooper is no longer triggered during the respawn;
- Mechanic now applies to all nearby allies a full healing effect of the Repair Kit, and not its own bonus healing effect;
- Fixed the bug when supply cooldowns would not reset directly after the respawn.

### May 18 (Update 511)

- 12 new paints added to containers.
- New animated paint “Canyon Hero” (can be found in containers).
- Flag limit in CTF and score limit in RGB increased from 5 to 7.

### April 27 (Update 510)

- Changes to time and score limits in standard, non-PRO battles:
  - Time limit reduced from 15 minutes to 10 minutes;
    - Kills limit in DM and score limit in CP reduced from 100 to 50;
    - Flag limit in CTF and score limit in RGB reduced from 10 to 5.
- Changes to daily mission chains:
  - Disabled mission chain reset if you don’t complete at least 1 mission a day;
    - Maximum number of chain levels increased from 4 to 10;
    - Reward for the maximum level of the new mission chain system is equal to the reward for the maximum level of mission chains in the old system, with sequential rewards increase on levels in between.
    - Reward for completing the maximum level of mission chains now includes 1 more container.
- Slightly reduced Overdrive cooldown.

### February 6 (Update 502)

- Changes to Rugby mode:
  - When the ball is caught, it will now spin above the tank;
    - When the ball is thrown, it will now also realistically spin in the air.
- Changes to Assault mode:
  - Now the Red Team will earn 5 points for delivering the flag;
    - The time until a dropped flag is returned is now shortened.
- Other updates:
  - The sound volume when rotating the turret is lowered.

### January 26 (Update 501)

- New game mode «Rugby».
- 23 new paints for containers.
- Added new daily missions «Earn experience» / «Earn crystals» / «Capture Flags» / «Score goals» for Rugby and Assault.
- Disabled new super missions «Destroy 9999 enemies» and «Earn 99999 experience» from appearing in new daily missions.
- Disabled battle notifications at the center of the screen.

## 2017

### December 28 (Update 500)

- Changes to Assault mode:
  - Blue Team no longer receives score points for controlling the point;
    - Blue Team now gains 1 score point for every destroyed enemy tank.
- Removed daily mission “Finish 1st in a battle”;
- Added new daily mission “Finish among top 3 of the winning team in a battle”. Mission can be completed in any mode;
- Added new effects when opening containers.

### December 7 (Update 496)

- Friends List Changes:
  - Added player limit on Friends List — 300 tankers;
    - Added limit to incoming friend requests — 50 requests;
    - Removed the list of friends requests sent;
    - The field for sending friend request is moved from the list of sent requests to the Friends List;
    - Enabled auto-removal of friends who are inactive for more than 6 months;
    - Enabled auto-removal of all friends for players who are inactive for more than a year;
    - All players’ incoming and sent friend requests were cleared once.
- Added new protection against jump hacks to the anti-cheat system;
- Removed notification for players in battle that a cheater was reported.

### November 16 (Update 493)

- Disabled the option to show your Premium Account status to the other players (Statistics screen and Premium-bonus).

### October 20 (Update 486)

- Lobby Screen has been reworked to make it easier to join battles for specific modes.
- Rank limits for standard (non-PRO) and PRO battles decreased.
- Battle list now unlocks at the rank of Master Corporal.
- “PRO Battle” Pass now unlocks at the rank of Master Corporal.
- “New Players” chat channel and Battle Chat now unlock at the rank of Gefreiter.

### October 12 (Update 485)

- Added to the game:
  - Unified Battle List;
    - Cross-server chat;
    - Thematic chat-channels.
- Removed from the game following daily missions:
  - «Finish 1st in a battle 0/2»;
    - «Finish 1st in a battle 0/3»;
    - «Collect Gold Box 0/1».

### October 5 (Update 484)

- Unlock ranks for maps changed.
- Unlock ranks for paints in Garage changed.
- Fixed bug with forbidden dot character when using Rename Pass.
- New special offers added to Shop.

### August 18 (Update 477)

- All Garage paints are now available from the rank of Recruit.
- New bundle “All turrets and hulls M0” added to Shop (available from Recruit).
- Fixed bug with tank’s semi-transparent state during respawn.

### August 4 (Update 473)

- New unlock ranks for M0 hulls and turrets:
  - Available from Recruit: Smoky, Firebird, Wasp, Hunter;
    - Available from Private: Twins, Thunder, Titan, Dictator;
    - Available from Gefreiter: Freeze, Isida, Ricochet, Mammoth;
    - Available from Corporal: Hammer, Vulcan, Railgun, Hornet, Viking;
    - Available from Master Corporal: Striker, Magnum, Shaft.
- 4 kits for beginners (“Almighty”, “Yin-Yang”, “Commando”, “Universal soldier”) no longer available to purchase.
- Fixed bug with the Beginner’s Pass.

### July 13 (Update 470)

- Multiple bug fixes, indluding:
  - Frozen loading screen after joining a battle;
    - Ranking up effect.
- Revision of the payment section for Ukrainian users.

### July 12 (Update 469)

- New feature - “Overdrive” added to the game.
  - This Overdrive activates all 5 supplies (except gold boxes) for you and your teammates nearby;
    - “Overdrive ON/OFF” option added to PRO Battle settings;
    - Overdrive is turned off by default in format battles, except Parkour.
- Changes to Repair Kit mechanic:
  - Initially Repair Kit instantly restores 1000 HP and reduces burning and freezing effects, and then additionally restores 3000 hit points over 3 seconds;
    - The repair-over-time effect will be interrupted if any damage is sustained;
    - The repairing effect will be interrupted as soon as the tank is fully repaired.
- Changes to supply active/cooldown times:
  - Repair Kit
    - Duration: 3 seconds - Cooldown: 30 seconds - Smart Cooldowns: Reduced by 50%
    - Double Armor
    - Duration: 30 seconds - Cooldown: 30 seconds - Smart Cooldowns: Reduced by 50%
    - Double Damage
    - Duration: 30 seconds - Cooldown: 30 seconds - Smart Cooldowns: Reduced by 50%
    - Speed Boost
    - Duration: 30 seconds - Cooldown: 30 seconds - Smart Cooldowns: Reduced by 50%
    - Mine
    - Damage: Unchanged - Cooldown: 30 seconds - Smart Cooldowns: Reduced by 50%
- Changes to destroyed tank disappearing delay and respawn times:
  - Destroyed tank disappearing delay time reduced from 3.5 sec to 1.5 sec
    - Respawn delay time increased from 2 sec to 4 sec
- New sounds and effects for supplies panel.
- Now you will be able to see the amount of hit points restored by friendly Isida or with picked up Repair Kit.
- Changing paint while being in a battle now doesn’t cause immediate self-destructing.
  - New paint applies only after next respawn.
- New key bindings for Overdrive and Quick Garage added to Settings.
  - Now you will be able to open Garage while being in a battle by pressing a key.
- Fixed bugs in “Odnoklassniki” app.

### July 6 (Update 467)

- “Promo Codes” option added to Shop (Under “Other” section).
- Fixed bug with invisible tank parts.

### May 26 (Update 461)

- Released Bonus and Discount Cards:
  - Kits Discount Card;
    - Paints Discount Card;
    - Gold Boxes Discount Card;
    - Premium Account Discount Card;
    - Crystals Discount Card;
    - Gold Boxes Bonus Card;
    - Premium Account Bonus Card;
    - Crystals Bonus Card.

### May 18 (Update 460)

- 9 brand new paints added to the Shop.
- All European game servers (RU, EN, DE, PL) grouped into one category.
- Anti-cheat improvements.
- Multiple bug fixes.

### April 21 (Update 456)

- Balance changes for Firebird, "Compact tanks" alteration, Isida, Hammer, “Slugger” alteration, Smoky, Striker, Thunder and Magnum.
- Additional Daily Bonus in Premium Account:
  - Given to Premium tankers only;
    - Given every day following the day when Premium is activated, and as long as Premium is active;
    - User must log into the game to receive the daily bonus. Bonuses on days when the user doesn’t login are lost.;
    - Consists of 2500 crystals, 3 Repair Kits and 10 of each of the other supplies (with the exception of Gold Boxes);
    - Bonus will be the same for all ranks.
- New Daily Mission types:
  - “Earn crystals” and “Earn crystals in a mode”;
    - To complete the mission, player needs to finish a battle and get a crystal reward;
    - Bonuses from Premium account and Beginner’s Pass count towards mission progress.
- Changes in Communicator:
  - Now the game remembers last opened tab;
    - “News” tab still opens first when there are unread news items;
    - Minor improvements and bug fixes.
- New flags for CTF mode.
- Sound for Magnum powering up extended.
- Respawn zones on Siege are now spread out wider in the map.
- Different bug fixes, including:
  - Problem with Monte Carlo Summer
    - Problem with Valley Space
    - Problem with authorization via VKontakte

### April 14 (Update 455)

- Changes to the lobby chat section:
  - The lobby chat section has been renamed to “Communicator”;
    - The Communicator has 3 tabs: News, Chat and Clan Chat;
    - Players can read the news both current and past news items in the News tab.
- Fixed some bugs with map previews and “Space” theme.
- “Space” theme will remain forever for all maps.

### April 7 (Update 453)

- Changes to Daily Missions:
  - Rewards for missions increased by another 10% compared to rewards before Patch Update #451;
    - Rewards for Daily Mission Chains and prices for changing missions increased proportionally;
    - Probability of getting crystals as a reward in daily mission decreased to 37%.
- Rank limits when creating a battle changed:
  - Default rank brackets for Legends decreased to Fieldmarshal - Legend;
    - Default rank brackets for Generalissimos decreased to Brigadier - Generalissimo;
    - Rank brackets for other ranks slightly expanded.
- Prices of Product Kits in the Shop decreased.
- Various server optimizations.

### March 29 (Update 451)

- Changes to microupgrades:
  - Number of steps for M2 hulls, turrets and modules decreased to 10;
    - Number of steps for M3 hulls and turrets decreased to 20 (steps for modules remain 15);
    - Total step cost for M2 hulls, turrets and modules decreased and now equals to the cost of the stock M3 modification of the item;
    - Total step cost for M3 hulls, turrets and modules remains the same.
- Changes to Daily Missions:
  - Now Daily Mission objectives can be only completed in standard (non-PRO) battles;
    - Rewards for Daily Missions increased by 10%.
- Changes to Auto-completion system:
  - Monitoring start delay is now 60 sec (was 3 minutes);
    - Auto-completion waiting time is now 15 sec (was 30 sec);
    - Cooldown after cancelling auto-completion is now 10 sec (was 25 sec).
- Rank limits when creating a battle expanded for all ranks.
- Some bugs with Magnum fixed.
- Critical errors disabled:
  - Up until now, when the Tanki Online client received a “strange” instruction, it would spit out a Critical Error and throw you out of the game. With this update, we’ll be disabling the Critical Error (when bugs will go off you will not be disconnected from the server).

### March 23 (Update 450)

- New turret “Magnum” released.
- New protection modules with Magnum protection released:
  - Falcon S-C: Magnum;
    - Eagle D-E: Magnum, Shaft;
    - Panda D-D: Twins, Magnum;
    - Panda D-E: Ricochet, Magnum;
    - Panda D-F: Hammer, Magnum;
    - Ursa T-H: Isida, Ricochet, Magnum;
    - Ursa T-J: Twins, Striker, Magnum;
    - Kodiak T-K: Freeze, Striker, Magnum;
    - Kodiak T-L: Firebird, Vulcan, Magnum;
    - Griffon T-F: Striker, Magnum, Shaft;
    - Griffon T-G: Hammer, Magnum, Shaft;
    - Griffon T-H: Ricochet, Magnum, Shaft.
- New achievements for Striker and Magnum added to Ratings.
- New product kits with Magnum added to Shop:
  - “Unicorn”: Hornet M1 and Magnum M1;
    - “Archer”: Hunter M1 and Magnum M1;
    - “Panther”: Dictator M1 and Magnum M1;
    - “Excalibur”: Viking M2 and Magnum M2;
    - “Hyacinth”: Mammoth M2 and Magnum M2;
    - “Ballista”: Hunter M2 and Magnum M2;
    - “Siegfried”: Hunter M3 and Magnum M3;
    - “Bertha”: Mammoth M3 and Magnum M3;
    - “Gustav”: Titan M3 and Magnum M3;
    - These kits will not be available for purchase in Garage.
- Changes to map pool of auto-created battles:
  - Novel, Lost Temple, Esplanade added;
    - Noise removed.
- Issue with game loading using Firefox resolved.
- Improvements in payment error form and handling.
- “Critical error” optimization.

### March 16 (Update 449)

- Changes to all M0 hulls and turrets:
  - All M0 hulls and turrets are now available from the rank of Recruit;
    - Prices of all M0 hulls and turrets changed slightly;
    - Values of all parameters (excluding damage) and protection decreased slightly.
- Changes to damage and protection of all M0, M1, M2 and M3 hulls and turrets:
  - Increase in damage and protection;
    - Changes don’t apply to M3+ hulls and turrets.
- Changes to micro-upgrades for all M1 hulls and turrets:
  - Number of steps decreased from 50 to 10;
    - Total step cost halved and equals the cost of the M2 modification of the item;
    - Speed up cost is 2 times higher than step cost on each step;
    - The aggregate value of steps and speed ups remains the same;
    - These changes apply only to M1 modifications of all hulls and turrets;
    - All existing and completed M1 micro-upgrades will be converted.
- Rental of Alterations.
  - Alterations can now be rented for 24 hours for the price of 5000 crystals.
    - Rent for real money removed.
- Other changes.
  - Bulk discounts for buying items of the same type removed.
    - Discounts now don’t apply to product kits.
    - Garage Info about product kits’ content simplified.
    - Bonus supplies removed from the kits in the garage.

### March 2 (Update 445)

- Changes to micro-upgrades of M0 hulls and turrets:
  - Number of steps decreased from 50 to 10.
    - Total step cost halved and equals to the cost of M1 modification of the item.
    - Speed up cost is 2 times higher than step cost on each step.
    - The aggregate value of step and speed up remains the same.

### February 16 (Update 441)

- Bug fix for incorrect creation and joining battles.
- Changes in the balance of Shaft, Hammer and Isida and their alterations:
  - Removal of self-healing function for Isida.
    - Hammer pellets now have Ricochet mechanic.
- Shaft arcade shot damage now decreases over distance.
- New flags added for clans - Romania, Turkey, Iran.

### February 10 (Update 439)

- Balance changes for Twins, Ricochet and Vulcan.
- Alterations for Twins and Ricochet.
- Changes to Vulcan's «Faster Horizontal Tracking» alteration.
- Changes in the Player Ratings formula.
- Bug fixes in the Clan system.
- Bug fix for battles without Micro-upgrades.

### February 1 (Update 437)

- Player Ratings.
- Supply drop zones are now visible from everywhere on the map.
- Clan fixes.
- New settings window.
- Fixed kick exploitation bug.

### January 26 (Update 436)

- Clan System:
  - First iteration of clan system.
    - Released with limited functionality.
- Changes in Ricochet mechanics:
  - Number of shots in magazine increased from 12 to 14.
    - Vertical aiming angle decreased.
    - Range of maximum damage is increased.
- Smoky:
  - Decreased firing speed.
    - Decreased critical damage.
- User Interface - When clicking on the garage button during a battle, players will no longer be asked whether they want to leave the battle, and will instead be taken directly to the garage without leaving the battle.

### January 19 (Update 435)

- Changes in the referral interface for the game client.
- Minor fixes in Client optimization.

### January 11 (Update 431)

- Changes in Striker:
  - Increased grace period for recovering focus on a lost target when attempting to lock-on.
    - Angular velocity of rockets increased.
    - Reload speed Increased.
- New Format - Hornet/Striker. Available for:
  - Hornet M3.
    - Hornet M2.
    - Striker M3.
    - Striker M2.
- Changes for Shaft:
  - arcade-shot firing speed increased.
    - vertical aiming angles decreased.
    - recoil increased slightly.
    - Zoom increased in sniper mode.
- New year content removed.
- New bundle added in the Shop.
- Fixed turning bug while driving in reverse with inverse control.
- Fixed previews with Raider and Stalker kits in the Shop.
- PayPal bundle removed from the Shop.

## 2016

### December 23 (Update 430)

- Striker turret has been added to the game.
- New protection modules with Striker protection released:
- New batch of Alterations released
  - High pressure pump - Firebird.
    - Corrosive mix - Freeze.
    - Support nanobots - Isida.
    - High capacity drum - Hammer.
    - Precision targeting system - Smoky.
    - Modified firing rate - Vulcan.
    - Armor-Piercing Ammo - Thunder.
    - High-caliber Ammo - Railgun.
    - Faster horizontal tracking - Railgun.
    - Assault emitters - Shaft.
- Micro-upgrades and Alterations can now be disabled separately when creating a Pro Battle.
- Friendly-fire option for Pro Battle implemented.
- Deck-9 has a new preview image.
- New Year Celebrations.
- Themed garage decorations.
- Themed in-game decorations.
  - Billboards.
    - Parachutes.
    - Flags.
    - Bushes.
    - Gold box skin.
    - Gold box drop zone.
    - Holiday image for "Thanks for your purchase".
- 2 holiday paints (one regular and one premium).
- 3 in-game gifts:
  - Candy Cane.
    - Snow Globe.
    - Gingerbread Tank.

### December 8

- The maps Magadan, Deck-9 and Canyon have been returned to the game and are only accessible using a Pro Battle Pass or Premium account.
- Smoky’s critical damage will no longer be affected by distance from target.
- The «Battle» button will no longer send players to maps that are unavailable at their rank.
- Map-specific missions have been removed from the game.

### Mid-October

- Global update of the game balance. (update is being prepared for release)

### November 30 (Update 428)

- Parameter tweaks on Vulcan, Firebird, Compact Cylinders alteration, Freeze, Isida, and the Broadband Transducers alteration.
- Added "Continue" button — users will be kicked if he/she doesn’t click the "Continue" button when the battle resets.
- Shaft bug fixed.
- Alert bug fixed.
- Minor changes in the shop interface.

### November 30 (Update 427)

- The option to create battles is now only for Premium users and PRO Battle Pass holders.

### November 16 (Update 426)

- Implemented system for managing multiple accounts on login
- Implemented “Battle” button for Quick Battles. The button will automatically send the player to a battle on that server that best fits that player’s rank. Please note that this system:
  - doesn't work for PRO battles (ignores them).
    - sends players only to recently started battles.
    - sends players to maps that are closer to being full.
    - doesn't evaluate players equipment or skill.
- Non-Premium and Non-Pro Battle Pass users now can only create 15min battles.
- Fixed issues with Paysafecard.
- Fixed Freeze bug, where tank is still frozen after respawn.
- Fixed bug with Lion T-B M3 incorrectly displaying 46% Twins resistance instead of 50% in battle.
- Time of inactivity before kick has been decreased to 120 Seconds.
- The time for autofinish to become active has been decreased to 180 seconds.
- The Autofinish timer has now been decreased to 30 seconds.
- Range for default battle created by Legend reduced to General.
- Range for default battle created by Generalissimo reduced to Lieutenant-General.
- Range for default battle created by Commander reduced to Major General.
- Range for default battle created by Field Marshal reduced to brigadier.
- Range for default battle created by Marshall reduced to Colonel.
- Range for default battle created by Gen. reduced to Colonel.
- Range for default battle created by Lieutenant-General reduced to Lieutenant colonel.
- Range for default battle created by Major General reduced to Major.
- Range for default battle created by brigadier reduced to Major.
- Range for default battle created by Colonel reduced to captain.
- Range for default battle created by Lieutenant colonel reduced to Second Lieutenant.

### September 22

- Alterations, Kits and Supply kits.

### September 13

- Update to the contents of the in-game shop.

### September 9

- Downloadable client.

### August 12

- New paints and modules.

### July 29

- DM-tournaments and the “Gold box” supply.

### July 21

- New shop and paints.

### July 14

- Paint and module separation.

### July 1

- Newbie’s pass, double-click on items in garage and coloured buttons when switching from battle to garage/lobby.

### June 23

- DM system testing, change to rank requirement for lobby chat access, increase of garage loading speed when opening it in-battle, new gifts.

### June 3

- Renovated garage look.

### April 14

- Mechanism for deleting unused nicknames.

### March 17

- Improvement in account security and changes in chats.

### March 3

- Mission chains, chat improvement and other changes.

### February 19

- Ability to disable Gold boxes in PRO-battles.

### February 12

- Early battle finish system.

### January 28

- Private messages in chats.
- New gifts.

## 2015

### December 25

- New XT items and special New Year game mode.

### December 10

- Paint preview and new sorting mechanism in the garage.

### December 3

- Changes to the garage and reworked CP mode.

### November 12

- Changes to micro-upgrades.

### October 29

- Personal profiles, ratings and achievements.

### October 21

- Premium accounts.

### October 8

- Changes to the forum post and topic rating mechanism.

### October 1

- Test drives and personal discounts system.

### September 17

- The latest unlocked modification of equipment is available to purchase directly, discounts for purchase of similar equipment type sets.

### September 10

- New additions to the list of XT-items

### September 3 (Update 362)

- Updated textures for Vulcan
- Updated visual effects for Vulcan
- Bug fixes

### August 27 (Update 361)

- Score caps for standard battles
- Bug fixes

### August 6 (Update 358)

- 50% decrease in the price of changing a daily mission
- Automatic country detection for the Payment Section

### July 30 (Update 357)

- Changes in Daily Missions rewards
- New crystal packages
- Removal of the ability to select a custom sum of crystals when buying

### July 23 (Update 356)

- Changes in SMS payment fees

### July 14 (Update 355)

- Daily Missions
- Changes in maximum range of Firebird, Freeze and Isida

### July 1 (Update 354)

- Changes in turret and hull parameters
- Changes in the way supplies and gold boxes work
- Battle and server chat icons for chat candidates, moderators and administrators
- Ability to manually adjust the speed of turret rotation camera

### June 18 (Update 353)

- Payment section fixes
- Experimental increase in the speed of turret rotation camera

### May 28 (Update 351)

- Anti-cheat and lag fixes

### May 22 (Update 350)

- Improved micro-upgrades

### May 15 (Update 349)

- Anti-cheat on jump hack

### April 30 (Update 348)

- Mouse controls bug fixes
- Anti-cheat on instant acceleration

### April 23 (Update 347)

- Changes in the parameters of turrets and hulls
- Reworked Forest and Sandbox
- Supply bonuses for beginners
- Improved system for changing equipment in battle

### April 16 (Update 346)

- Bug fixes for the mouse controls

### April 9 (Update 345)

- Mouse Controls
- Changes in auto-aim mechanism

### March 3 (Update 331)

- Reworked system for early battle termination
- Increased funds for lower ranks
- Improved Speed Boost supply (increases turret rotation speed as well)
- Increased HP for medium and heavy hulls
- New Score Multiplier Passes

### February 6 (Update 317)

- Vulcan turret
- Protective paints from Vulcan and Hammer
- Updated looks for Hammer

### January 30 (Update 312)

- Paints with Hammer protections

### January 26 (Update 310)

- Aleksandrovsk map
- Changes in rank limits for mid and higher ranks
- Decrease in impact force of Smoky and Railgun

## 2014

### December 27 (Update 302)

- Battles with obvious outcome now might end sooner
- Players are now automatically sent to specific servers based on their current rank

### December 24 (Update 301)

- Support for the most demanded formats (Hornet+Railgun, Wasp+Railgun, Hornet/Wasp+Railgun, Parkour)

### December 19 (Update 300)

- Changes to lengths of standard battles

### December 17 (Update 299)

- New Hammer turret

### December 16 (Update 298)

- Further changes to the list of battles

### December 12 (Update 297)

- Updated list of battles

### December 4 (Update 296)

- Laser scope for Shaft
- Night mode for maps

### November 27 (Update 294)

- Changes in battle fund distribution
- Fixed lengths for non-PRO battles
- Gold box is now dropped 20 seconds after the notification
- More customization in PRO battles
- Further changes in Isida’s updated visual effect
- Ability to disable drop zone marks in settings

### November 18 (Update 292)

- Predictable drop zones

### November 12 (Update 291)

- New visual effects for Railgun and Isida

### October 30 (Update 288)

- New Product Kits system.

### October 10 (Update 287)

- New design of gold boxes

### October 3 (Update 285)

- Advanced tips on fixing issues occurring in the game
- Improved battle chat for team modes

### September 29 (Update 284)

- Smart Cooldowns for supplies
- New icons for supplies both in the game and its interface
- Improved indication of supplies that are active or being recharged

### September 25 (Update 283)

- Micro-upgrade speed ups now get cheaper depending on the remaining wait time

### September 19 (Update 282)

- Ability to switch between servers right in the game
- Optimization of 3D-engine that lead to a significant decrease in chances of a Fatal Error
- Player’s rating is no longer displayed

### August 7 (Update 277)

- New anti-flood system

### July 2 (Update 270)

- Changes in the game balance
- New garage descriptions

### June 3 (Update 264)

- Updated CP mode (changed mechanics, CP is now supported by every CTF map);
- Fort Knox is now available from Corporal rank;
- Server and battle chats are available to players with the rank of Gefreiter and higher;
- Changes in battle fund distribution between teammates;
- Gold box notification is now orange (harder to miss);
- Capital «i» and lowercase «L» now look different;
- You can now add a player to your ignore list right from his or her context menu;
- Ability to disable main chat in Settings;
- Each skybox now consists of 6 separate textures, which makes the image clearer and brighter.

### April 23 (Update 254)

- Changes in the balance of turrets and hulls.

### April 1 (Update 245)

- Automatic problem detection system.

### March 25 (Update 242)

- Ability to change equipment without having to leave the battle.

### February 19 (Update 229)

- Numerous fixes and improvements of the game’s client part. Critical error issue has been fixed.

### February 14 (Update 227)

- Slight changes in maps. Previews of maps have been updated

### February 10 (Update 224)

- Registering a new nickname is a lot easier now. If the nick you want to have is already used, the system will automatically suggest several nicknames instead of it by adding various postfixes.
- New progress bar

### February 7 (Update 222)

- Ability to enter Tanki Online using a Facebook account.

### January 31 (Update 220)

- Existing maps have been reworked.

### January 14 (Update 214)

- Winter holidays in Tanki Online are over. All the holiday elements have been removed from the game.

## 2013

### December 31 (Update 213)

- 50% discount on all items in the garage except for MUs and kits.
- The color of Speed Up button in Micro-upgrades menu has been changed to prevent players from accidentally clicking it.

### December 24 (Update 210)

- Minor changes in the interface of micro-upgrades
- The graphics engine has been optimized. Now, if you use hardware acceleration, your FPS should increase.

### December 19 (Update 208)

- Micro-upgrades — ability to constantly upgrade certain parameters of your items.
- PRO Battles: more options when creating battles, including the ability to disable MUs.
- Visual effect of rank up.
- Crystals given to players for achieving each new rank. Crystals for previously achieved rank have been also given.

### December 14 (Update 207)

- New product kits have been added to the game.
- Light effects from Thunder and Smoky hits have been changed.

### December 12 (Update 206)

- Brightness of lighting without shadows has been decreased.

### December 11 (Update 205)

- New physics model for tanks.
- Improvements in anti-cheat system.
- Reducing traffic between client part and server part of the game.
- The order of items in Garage has been changed.

### December 9 (Update 204)

- Ability of inviting friends to battles has been further improved.

### December 7 (Update 203)

- Bottom ranks of supplies have been changed. «Nitro», «Double Power» and «Double Armor» are now available from Gefreiter, both in the shop and in daily gifts.

### December 4 (Update 200)

- Lighting from gunshots has been added to the game.
- Now you can disable Anti-aliasing in settings.
- Viewing angles on monitors with different aspect ratios are now the same.
- Overall color correction of maps. Lighting without shadows has become brighter.

### December 2 (Update 199)

- From Christmas to Christmas event has started, 2014 crystals gold boxes have been added to the game.

### November 27 (Update 196)

- Ability to invite friends to battles has been added.

### November 21 (Update 193)

- Protections of some paints have been changed: Acid gives 18% from all weapons, Champion’s protections are now 25%.
- Daily gifts are now available from 1 am (UTC+0)

### October 31 (Update 190)

- Halloween. Special flags, billboards, holiday paint, 3000 gold boxes and Halloween map have been added to the game.

### October 10 (Update 188)

- Farewell to Moon Silence event is over. Moon Silence map and holiday billboards have been removed from the game. Moonwalker paint has been removed from the shop.

### October 3 (Update 187)

- Beginning of Farewell to Moon Silence event. Moonwalker paint and holiday billboards have been added to the game. Value of gold boxes on Moon Silence has been increased to 3,000 crystals. The chance of it being dropped has been increased by half.

### September 28 (Update 186)

- New product kits have been added to the game.

### September 2 (Update 181)

- Holiday billboards and a special paint for Tankman’s Day have been added to the game.

### August 19 (Update 180)

- «Platform» map has been removed from the game.

### August 15 (Update 179)

- Descriptions in the Garage and texts on loading screens in the English version of the game have been corrected.

### August 13 (Update 178)

- Special paints for forum moderators, cybersport representatives and members of the Creative League have been added to the game.

### August 1 (Update 176)

- Changes to the rules of the game have been made: now it is forbidden to post referral links in the chat and in the forum.

### July 20 (Update 173)

- Some visual errors on Future, Factory and Platform maps have been fixed.

### July 19 (Update 172)

- Maps of winners of Looking for a Level Designer contest have been added to the game.
- «Future» with CTF, DM and TDM modes.
- «Factory» with CTF, DM and TDM modes.
- «Platform» with CTF, DM and TDM modes.

### July 18 (Update 171)

- Some errors in Friends System have been fixed. There were problems with loading players' names in battle statistics and «New Friend» indicator.
- Sound loading problem has been solved.

### July 16 (Update 169)

- Friends System and player context menu have been added.
- Now team vote removes a player from no-supplies battles.

### July 4 (Update 166)

- Glide paint for crew making Tanki Online parkour tutorials has been added.
- Lucky 7 paint for winners of Lucky 7 tournament has been added. The paint has 15% protection against all turrets.
- Zeus paint description has been changed.

### June 27 (Update 165)

- Traceur paint has been added to Garage. The paint is temporary and will be removed once the Masters of Parkour contest is over.
- Crash and Gallery maps have been switched off.
- Minor updates in the payment section.

### June 18 (Update 163)

- Resists of Champion paint have been changed. Now it has 22% protection against all turrets.
- New award paints have been added:
- Silver — Twins (30%), Railgun (30%), Thunder (25%), Smoky (25%), Shaft (20%), Ricochet (20%);
- Bronze — Twins (40%), Railgun (35%), Ricochet (35%);
- Gladiator — Twins (25%), Railgun (20%), Thunder (20%), Firebird (20%);
- Veteran — protection against all turrets (20%).

### June 17 (Update 162)

- Anti-cheat system has been updated

### June 11 (Update 161)

- Tanki Online Birthday is over
- Rank limits for battles have been extended for several ranks.

### June 4 (Update 160)

- Tanki Online’s birthday: holiday paint and billboards, changed look of flags, launch of the Discount Week.

### May 16 (Update 154)

- In-game and chat system messages for German community players have been improved.

### May 15 (Update 153)

- Victory in Europe Day is over: Holiday paint and billboards are set to standard, gold boxes are back to default value.

### May 14 (Update 152)

- Procedure of paying with credit cards has been simplified.

### May 9 (Update 151)

- Victory in Europe Day in Tanki Online: holiday paint and billboards, 3000 gold boxes, 25% discount in Garage (everything except product kits).

### May 7 (Update 150)

- May Day is over: Holiday paint and billboards are set to standard, gold boxes are back to default value.

### May 1 (Update 149)

- Gold box sound notification has been added.

### April 29 (Update 148)

- Notification that tells about gold box being dropped soon has been added. Drop zones for the bonus have been reworked.

### April 17 (Update 144)

- Funds in the game have been increased by 60%.

### April 16 (Update 143)

- «Team kick by vote» system’s testing has been completed.

### April 12 (Update 142)

- An ability to buy crystal in packages and receive bonus crystals has been added.

### April 9 (Update 138)

- An ability to kick a player from a team by voting has been added.
- New product kits have been added.
- Deep shadows effect (SSAO) has been added.
- Anti-flood system has been improved.
- Now it is much easier to select necessary items in the garage thanks to added Drag’n’Sсroll support.
- Now items are equipped automatically after the purchase in your garage.
- Resource loading has been optimized. You can join a battle a lot faster.

### April 1 (Update 137)

- Updated internal statistics system.

### March 28 (Update 136)

- Added a new chat command #news, which creates a link to «Russian Portal NEWS».
- Added a new chat command #teams, which makes reference to the «Team» section of the forum.

### March 27 (Update 135)

- Added the effect of «dynamic shadows» on the visual effect of the «dust from the track»

### March 21 (Update 134)

- Added a separate checkbox to enable or disable the «dust» in the game options screen.

### March 20 (Update 133)

- Visual dust effect is added under tank tracks.
- A tank in garage now has a shadow.
- The holiday of «March 8» is over. Holiday paint and billboards are set to standard.
- White rectangle tank bug in the garage is fixed.

### March 14 (Update 132)

- Fixed the display of the active filter buttons below the battle list.

### March 12 (Update 130)

- A feature to filter the battles list by game mode was added.

### March 7 (Update 129)

- Preparations for the, «March 8» holiday
- Turned off the «Fort Knox» map
- Changed the name of the map «Fort Knox II» to «Fort Knox»
- Changed the name of the map «Fort Knox III» to «Edinburgh»
- Improved the map «Forest»
- Improved the map «Gravity»
- Improved the map «Edinburgh»
- Improved the map «Fort Knox»

### February 26 (Update 128)

- Improved the «anti-flood».
- Information about buying crystals.
- Improved the calculator in the payment section.

### February 22 (Update 127)

- Iron Days in Tanki Online.
- Holiday paints and billboards.
- 25% Discount on all hulls in the game.

### February 21 (Update 126)

- Improved the «anti-cheat» system.
- In the «Payment Terminals», «Russia» is selected by default.
- Added the PayPerClick Button in the payment section.
- Fixed: the empty list of numbers from mobile operators in the payment section.
- Fixed: the incorrect display of the buttons in the WebMoney payment section.
- Fixed: the absence of supplies in the garage, which made them unusable.

### February 19 (Update 125)

- Removed the holiday billboards and paint.
- Updated the server platform version.
- Removed the calculator from the DAOPAY payment option.

### February 14 (Update 124)

- Holiday «Valentine’s Day».
- Billboards and festive paint.
- 50% Discount on all Firebird grades.
- Initial achievement set at 200 crystals.

### February 13 (Update 123)

- Changed the economic system of the game.
- Added a lag smoothing effect when destroying enemy tanks.
- Divided the English forum into organised sections.
- Fixed auto guider of the Railgun and Shaft.
- Fixed a bug that allowed you to change the configuration of the tank during the battle without losing points.
- Fixed the lack of guidance about the new upgrades in the garage available after ranking up.
- Fixed a bug in which news alert appeared repeatedly at the entrance to the game.
- Fixed a bug in which there was no alert showing the player the reason after being kicked.
- Fixed a bug in which non-referral players were present in the referral lists of players.
- Fixed — enemy mines displayed after self-destruction.
- Fixed a bug in which players had a negative number of mines in the garage.

### February 5 (Update 122)

- Turn off the system, which required E-mail to register.

### February 1 (Update 121.3)

- Fixed Railgun and Isida.
- Fixed a bug that caused de-synchronization of game servers

### January 31 (Update 121.2)

- Setting up of the new server platform.

### January 30 (Update 121.1)

- Correction of errors in the new platform.
- Fixed the ban system on the forum.
- Fixed bug report system in the payments section.

### January 28 (Update 121)

- Translation of «Tanki Online» to a new server platform.

### January 24 (Update 120)

- Smoothed and reduced the lag effect. Tanks do not chop while driving.
- Fixed a bug in which auto-target did not work from afar.
- Fixed the false automatic disconnection of users during battle.
- Fixed an error in the Isida.
- Fixed errors in the speed of rotation of the Shaft turret in scope mode.
- The power indicator Dual Energy in scope mode now appears correctly.

### January 16 (Update 119)

- Further development on the anti-cheat.

### January 10 (Update 118)

- Changes in the payment section.

## 2012

### December 29 (Update 117)

- Gold Box value at 200 crystals until the morning January 9th, 2013!
- Body «Hunter M0» free for all. Changing recruit Kit.
- Mysterious clues on maps.

### December 26 (Update 116)

- Changed the logic of bonus boxes.

### December 25 (Update 115)

- Christmas mood in «Tanki Online»! Paint, billboards, boxes, flags!

### December 17 (Update 114)

- rebalance is introduced...

### December 12 (Update 113)

- Introduced two test maps in new style, Gallery and Crash.

### December 7 (Update 112)

- Improvements in the anti-cheat system.
- Changing the logic behind the release of bonus boxes in the battle.

### November 29 (Update 111)

- In the payment section added a credit cards payment button.
- Removed the «Consultants' battle» paint.
- Reactivated control points mode on the map «Kungur».

### November 21 (Update 1.110.0)

- Added a system for auto-tuning graphic settings for the game.
- Disabled «The first fight before registration." A tutorial replaced it.

### November 8 (Update 1.108.0)

- Fixed a bug that caused false «kick for inactivity» out of the battle
- Fixed the link for «Other» in the payment section

### October 30 (Update 1.107.0)

- Hosted «Halloween» at «Tanki Online»

### October 24 (Update 1.106.0)

- Ability to login and register through «VKontakte».
- Fixed a bug in the email validation system.

### October 11 (Update 1.105.0)

- The «soft particles» are disabled by default.
- Maps and AtraI AtraII have been combined. The maximum number of players in the Atra increased to 8 in DM mode and up to 4/4 for team battles. The map is also refined in terms of performance and gameplay.
- Improved the 2042 map. Changes have affected the performance and gameplay. Also in 2042 was added the «control points» mode.

### October 4 (Update 1.104.0)

- Added a new «Dynamic shadows» function!
- Improved the system of getting bonuses in the game TDM.
- Changed the texture of guns Freeze, Ricochet and Shaft

### September 6 (Update 1.100.0)

- New game mode «control points."
- Updated graphics in «Tanki Online».
- Added the traces of the guns shots for all of the guns.
- Added animated tank tracks.
- Added the «soft particles».
- Added the fog effects.
- Added option to purchase experience through the experience indicator.
- Added a chat command #wiki, which creates a link to Wikipedia of «Tanki Online».
- Updated tips when loading the game.
- Corrected the description of the «Holiday» paint.
- Made some changes on the map «Sandal».

### August 22 (Update 1.99.4)

- In the payment section the button Webbilling was added!
- Fixed the ability to send a chat message containing only spaces.
- Fixed the function of going to an element of the garage from a banner showing the new things available.

### August 16 (Update 1.99.3)

- Added a paint «Engineer», to the group of testers.
- Fixed the CTF mode on maps, Massacre, Atra II, Monte Carlo, Industrial Zone, Solikamsk (winter / summer).

### August 15 (Update 1.99.2)

- Fixed the CTF mode on the map Massacre
- At the request of the clan movement representatives, on the map Tribute the dropping zone of bonuses have been change.

### August 11 (Update 1.99.1)

- CTF mode is temporarily disabled on the map Massacre (summer) and (winter), until all its errors are fixed.

### August 9 (Update 1.99.0)

- Improved the anti-cheat system.
- The map Dusseldorf was optimized. Now playing on it would be more comfortable.
- Fixed the Atra II (winter) map. Now tanks are not sucked into the texture.
- Fixed a bug where map ownership of the conquer the map was not displayed.
- Fixed errors in the mapping of textures (z-fighting) on the maps: Kungur Summer / Winter, Madness, Opposition (Summer / Winter), Novel (Summer / Winter), Canyon (Summer / Winter), Molotov (Summer / Winter), Esplanade, highways (Summer / Winter), Gravity (Summer / Winter)
- Fixed a bug with the rotating of the shaft gun. Now, tankmen can see where the shaft is really aiming at.
- Fixed a bug which caused tanks with Shaft to move jerkily after the targeting mod.

### August 2 (Update 1.98.0)

- New billboards for the «Tankiada» competition.
- We can now press and hold counters in the garage and in the payment section. The figure will continue to change in the selected direction.
- Fixed a bug in which during the loading of the game, the banners with tips were not displayed in a particular language version.
- Fixed a bug where the button «Other» in the payment section had no inscription on low-resolution screens.
- The situation in the tournament, «Conquer the map» will now be monitored in real time.

### July 26 (Update 1.97.0)

- Fixed the order of things in the garage.
- Paints sorted in descending order according to protection.
- Added a «OneCard» button to the payment system in the EN and DE versions.

### July 20 (Update 1.96.0)

- Fixed a visual bug on the map in 2042 winter and summer themes.
- Banned players, can no longer complain about the offender in the battle.
- Fixed a bug that allowed players to send a number of complaints per person.

### July 17 (Update 1.95.0)

- Updated the links to the Xsolla payment system.
- In the payment section, a new «Beeline» button appeared, which will make prompt payments for subscribers of this particular mobile operator.
- Added the ability to copy the nickname a player in a battle, by using the left click on the nickname in the statistics table (press TAB).
- Changed the algorithm for rendering shadows, they are now displayed correctly under the overturned tanks.
- Fixed a bug where multiply pressing Enter when entering a battle triggered the anti-cheat system.
- Fixed the command «Self-destruction.»
- Fixed a visual bug in the winter theme of the map bridges.
- Fixed an error where the Isida gun was sometimes ineffective against the opponent.
- Changed the skybox algorithm upload at the entrance to the battle. They do not blink anymore.
- Fixed auto entrance in the list of battles.

### July 5 (Update 1.94.0)

- Preparations for competitive events.

### July 3 (Update 1.93.0)

- In the game we added optimized shadows under the tanks.
- Added the ability to complain about a player in battle through a battle command.
- Removed the Bridges II Map.
- Fixed a bug that sometimes causes illuminations to display incorrectly.
- The speed of the camera movement by the keys PgUp and PgDown no longer depends on FPS.

### June 26 (Update 1.91.0)

- In the garage added a product «1000 experience», which allows you to buy gaming experience points.
- Subscription «score multiplayer pass» will now receive experience points faster by 30% instead of 25%.
- The rating index was removed from the game formula, it does not affect the experience any more and the resulting growth rate of the fund in the battle.
- Fixed a form of battle creation.
- Fixed a bug where it was impossible to go into a battle started on the map Stadium.
- Removed the logo contest, «Conquer the map».
- Removed the CTF game mode on the map «Polygon».

### June 18 (Update 1.90.0)

- A player who has created a private battle, now sees it in the list, even if he is not a moderator.
- Added a mode for CTF, «Garder».
- Added Modes TDM and CTF on «Polygon».
- Fixed a mechanism to create private battles.
- Made modifications to monitoring the battle using the spectator mode.

### June 14 (Update 1.89.0)

- Fixed a bug that did not save the last created map.
- Fixed a bug that did not display information about the battle, after getting out of it.

### June 8 (Update 1.88.0)

- Holiday Euro 2012.
- Holiday gold boxes.

### June 6 (Update 1.87.0)

- Paint, billboards and a gold box on the map «Opposition» returned to the everyday kind.
- Improved the anti-cheat system.

### June 4 (Update 1.86.0)

- Launched a holiday dedicated to the third birthday of «Tanki Online!»

### June 1 (Update 1.85.1)

- Added paint, for the group helpers «consultants».
- Fixed a bug about that links to the battle did not work.

### May 31 (Update 1.85.0)

- Added and improved the anti-cheat system.
- Added additional emission locations of Gold Boxes on the maps: Polygon, Sandal, Bridges, Madness, Iran.
- Added monitoring of the battle (spectator mode for moderators).
- Fixed errors on maps in 2042.

### May 24 (Update 1.84.0)

- Fixed a bug that allowed the gun to fire Shaft with maximum damage immediately after the spawn tank.
- Fixed a bug where the forum was not accessible after being unbanned.
- Set up and added more to the anti-cheat system.
- Changed link button 'Other' in the payment section.
- Consultants can no longer be banned for flooding in the chat.
- On the maps of Silence and Silence II fixes and moved drop zone crystal boxes.

### May 23 (Update 1.83.0)

- Changed the map preview for the 2042 summer and winter themes.

### May 18 (Update 1.82.0)

- Improved the anti-cheat system.
- Tank shadows added to the game.
- Added traces of gun shots of the Smoky gun.
- Added different areas for the falling of the gold box in the following maps:
  - 2042
    - Winter 2042
    - Boombox
    - Boombox winter
    - Garder
    - Winter Garder
    - Sandbox
    - Sandbox winter
    - Silence
    - Winter Silence
    - Silence 2
    - Winter Silence 2
    - Zone
    - Zone winter
- Fixed incorrect behaviour of the slider for selecting the rank-limits when you create a battle.
- Removed the ability to create DM battles for 0 persons.
- Worked on the payment section. Fixed internal links and descriptions.

### May 3 (Update 1.79.1)

- Fixed a bug where links to restore and change the password were not working.
- Improved the anti-cheat system

### April 28 (Update 1.79.0)

- The «Best of May» competition started!
- Increased rank-limit during battle creation for higher ranks.
- Refined the anti-cheat system.

### April 26 (Update 1.78.0)

- The logic of the falling of bonus, crystal boxes and gold boxes changed.
- Fixed a bug in the list of battles, when the selection of a new battle became impossible, as the indicator kept changing back to the previous battle.
- Fixed a bug that instead of working links to a battle appeared meaning less #.
- Localized and fixed a memory leak. Now the server will work more reliably.
- Worked on more anti-cheat system settings.

### April 19 (Update 1.77.0)

- Started a new campaign: «share the confiscated goods!».
- Added a system that will send important reminders about account security in the chat.
- Removed reference to «Tanki Online 2.0." from the alert that appears when receiving a Double Crystal.
- Fixed the short links in the chat.
- Changed the logic of the rank-limit slider used during battle creation.
- Changed the rank-limits.

### April 12

- When you create a battle, the rank limit is now tied to the creator’s rank.
- The victory conditions selected when creating a battle have been change and the maximum time is 300 minutes, 100 flags and 999 kills.
- Blocked players can now see the reason why they were blocked, when trying to log into the game.

### April 4

- Improved the blocking system of external links in the chat.
- Released a system that blocks the instantaneous delivery of flags.

### March 28

- In the game, hardware acceleration support was added.

### March 7

- Optimized the operation of the system, which blocks the external links in the chat.
- A number of guns had correction of drop damage and projectile force of the impact, depending on the distance to the target.
- Fixed a bug which caused the sight of the Shaft gun could stay on after the release of the lobby.
- Removed the ability to create an artificial delay before firing a Railgun.
- Ricochet again damages when shooting close to the target.
- Work was carried out with the code, which will reduce the number of restarts of game servers during the day.
- The system now supports server checks that do not allow you to create a battle with any rank restrictions.
- Amended in the system of damage accuracy, any damage is now calculated more accurately.
- Added warning message when the Gold Box is being taken.
- Check box «Remember me» on login form is now enabled by default, and stores the selected state.

### January 27

- The level of protection from the use of third-party software in the game has grown considerably.
- The newbies reward for «Creating a battle» has been removed from the game.
- Pressing the «start» button on the site, a new player does not go into the first battle, but to an entrance window, where he will be able to choose between the passage to the first battle, or registration without it.
- In the game we added the winter version of the maps:
  - 2042 Winter
    - Arena Winter
    - Atra Winter
    - Atra II Winter
    - Camp Winter
    - Canyon Winter
    - Courage Winter
    - Deck-9 Winter
    - Duality Winter
    - Farm Winter
    - Garder Winter
    - Gravity Winter
    - Highland Winter
    - Highland II Winter
    - Highways Winter
    - Industrial zone Winter
    - Massacre Winter
    - Noise Winter
    - Novel Winter
    - Opposition Winter
    - Pass Winter
    - Polygon Winter
    - Silence Winter
    - Silence II Winter
    - Stadium Winter
    - Station Winter
    - Subway Winter
    - Valley Winter
    - Wave Winter
    - Zone Winter

## 2011

### October 17

- Amendments made to the «Shaft» gun.

### September 23

- The incorrect display of «Shaft» performance in the garage has been fixed. All purchased guns have been removed, and the crystals paid for them refunded.
- A new map was added -«Labyrinth».
- In the list of tips that appear when loading a game, a new recommendation— «Do not talk.»

### September 22

- Shaft gun re-balancing was finished. Previous version of the gun was confiscated from all players who bought it and spent crystals were repaid.
- In new version of the gun we:
  - simplified control;
    - added possibility to shoot without using scope;
    - added possibility to stay in sniper mode as long as you want with fully charged gun;
    - removed black filling in scope mode;
    - visually enhanced the scope;
    - changed boxes and flags displaying in scope mode, now they become semitransparent to simplify aiming.
    - Four new paints added to the Garage: Irbis, Jade, Lead, Needle
    - added new map Highways from MonkeyMagic.

### September 9

- We have added «Registration» button to first battle interface. Now new player can register, not finishing the first battle. User still can achieve the first rank and get reward for this during the first fight or in any other battle.
- Password length was limited to 32 symbols.

### September 1

- Payments for crystals using Paypal have resumed.
- The cost of all payments through SMS are now include VAT.
- The minimum payment through SMS payment for MTC subscribers has been set at 300 roubles. This change was made by the service provider itself. In the past an error could be experienced when attempting to make a payment less than 300 roubles.
- The ability to make a one symbol password without an e-mail has been excluded.

### August 25

- The registration form has been improved. It has become smaller, more convenient — nicer.
- Battle creation has been optimized for newbies, thanks to that fact in such battles there will be more players.
- In the loading screen «TV grid» has been replaced with the game logo.

### August 18

- We have changed the formula of user rating calculating. Now it doesn’t count crystals bought for real money. The rating of all users will be recalculated in two days.
- We have simplified the game entering mechanics. Now after clicking the Start

button a newcomer enters the battle without registration. There he can meet tankers of Recruit, Private and Gefreiter rank. Such a player automatically gets the nickname RecruitNNNNN, where NNNNN is unique number.

- A player is offered to fill the registration form only after

reaching Private rank.

- If you are not a newcomer, but also found yourself in a battle with newbies and with nickname RecruitNNNNN, then click «I have an account» button in the upper part of the game menu. We have created a basic achievement system, which helps newcomers to learn some basic elements of the game. Now you get crystal prizes for such actions, as registration after the first battle, joining the first battle after registration, first buying in the Garage etc.
- We have changed loading indications. Now it looks like the charging

mechanism of artillery gun. Also game advices are shown during loading.

- We have simplified the registration form.
- The Tab button now is functional in all fields.
- You need to enter less information to register. Only nickname and

password are required.

- The Hall of Fame button was removed from the game menu.
- Every player now can create a no-supply battle without a pass. The

creator also can enter this battle without a pass.

- We have improved the WebMoney payment option. Now you can choose the

currency and amount of crystals right in the payment section.

- The Shaft gun became visually shorter.
- We have created a special paint for moderators.
- Player notification regarding the Double crystal bonus card was

optimized.

- If a player has such a card, he sees an alternative version of the Buy

button.

- The sum on the Add button in the Garage is adjusted for Double

Crystal.

- Notification about an active Double Crystal bonus card is shown in

the payment section.

- The PayPal button is temporary removed from the payment section. We’ll start to

take PayPal payments again soon.

- Now you can’t skip the nick checking procedure.
- The respawn was fixed in the blue team on Noise map.
- The wall bug was fixed on Scope map.
- The Paints «Champion» (for Clan Tournament winners) and Acid (for TOF

winners) were given protection against the Shaft.

- Now you can’t shoot from under the bridge right through the slope of

the bridge.

- We have finished work on the German version of Tanki Online. Get ready to meet German

players soon!

### July 19

- Secret Gold Box event launched.
- Debug mode turned off

### June 29

- Shaft gun went on sale!
- Daily gift from now on are given to players from the first rank.
- We have created payment form for Chronopay payment system.
- A problem with Sandbox map was fixed. Newbie and veteran alike now can create battle on this map.
- Battle found sharing was fixed for those cases, when the first and the second winners have the same amount of points.
- Bug at Esplanade map, resulted in tank sticking, was fixed.

### May 26

- We have added three new paints with turret protection effect to the Garage. They are Inferno, Emerald and Zeus.
- We have added «re:" command to the chat. If you type «re:" (Without quotes) and space, nickname of the last person who wrote you appears in the text field.
- Text in the header of payment section was rewritten.
- EasyPay button was removed from payment section.

### May 23

- Now you can use Q and E keys as well as PgUp/PgDown for camera control.
- Freeze shooting effect was visually modified.
- We have added new maps: Atra II and Rift by Flanagun.

### April 21

- Now you can’t take the flag lying under the bridge while you are on the bridge.
- We have connected Gate2Shop payment system for VISA cards. Now you can make payments all over the world.
- Maximal amount of players in Massacre map increased from 3 per team in team matches and 6 in Deathmatch to 5 per team and 10 respectively.
- After temporary outage in-game news alert was turned on again.

### April 11

- New version of «Madness» map in space style and with the gravity close to zero.
- We have added an in-game alert about fresh news.
- Minor changes in registration form.

### March 31

- We have fixed problem with Paysafecard payment cards.
- We have updated Courage map. Walls were put away, platforms became wider.

### March 23

- New registration form.

### March 21

- We have realized sources storage in local SharedObject of Flash Player. It allows us to abandon browser caching system, which is not very reliable. For example, sources could disappear from browser cache because of its limited size. Now sources are downloaded from the server only if they were changed. It can drastically reduce time of game loading.

### March 4

- We have enhanced Anti-cheat system.
- We have installed special billboards, added Holiday paint to the Garage and replaced flags with the bouquets in CTF mode in honour of International Women’s Day, which is celebrated on the 8th of March.
- We have corrected the Nitro effect for the frozen tank. Now you will be better able to feel this effect.
- Four new servers are launched.

### February 22

- A problem with the «Add More» button has been fixed.
- A problem with the preview picture in the message concerning new hull-buying has been fixed.
- We have added a special holiday paint in honour of Defender of the Fatherland.
- We have installed holiday billboards.
- From now on every first-time crystal buyer will receive an additional 100 crystals as a bonus.

### February 17

- We initiated rank limit for forum authorization. Now tankman gathered less than 500 points in the game can not post messages at the forum. However he can freely read others posts.
- Registration and authorization system in the game was optimized.

### February 15

- We connected new emitter for collecting VISA/MasterCard payments — Uniteller.
- We changed PayPal aggregator. Now we accept PayPal payments through OnlineDengi.
- Unique gun Smoky XT became more powerful. Now it makes not 16–36 but 26–46 damage points. Also we increased the power of a blow of Smoky XT’s shell to 2.2.
- We fixed «Double crystal» bonus card overview. Now it includes the following info: bonus crystals are not taken into account in referral transfers, in transition to Tanki Online 2.0 they will be counted like ordinary crystals but not like bought ones.

### February 11

- We’ve added new item in your daily presents — the «Double Crystal» discount card. This card allows you to get double your money’s worth for crystals.
- You’ll notice holiday billboards and seasonally themed paint in honour of St. Valentine’s Day.
- We’ve optimized a bit and have lowered the risk annoying of lags even more.
- The server restart schedule has been changed. Servers 1–7 will restart at 15:00 (UTC +3) with evacuation to servers 8–12.
- We’ve redesigned the «Buy» button, giving it a fresh look.
- The Chronopay payment system has been temporarily turned off. Our aggregator no longer works with Chornopay, but we are in the process of establishing a direct relationship with Chronopay.
- We’ve eliminated the error in the Izidia shooting effect.
- We’ve enhanced the droplist in battle creation.
- We’ve solved the problem that occurred when a players would gain 1,000,000 points during a battle, but would not achieve the Marshall rank until they re-entered the battle.
- We’ve also solved the problem of when supply icons blinking even after the effect of the supply was over.

### February 3

- One of the errors causing the appearance of so-called «invisibles» has been eliminated
- All New Year’s decorations including, Christmas trees (which had replaced flags), holiday parachutes, wrapped presents, and holiday-themed billboards have been removed.
- An error that made it possible to make infinite use of supplies has been eliminated.
- The shopping cart icon used for entering payment section has been replaced with a «Buy» button.
- The garage has been optimized through the use of progressive loading. Upon entering the garage only visible items are loaded, allowing for faster entry. All other information will be loaded when players scroll through item lists.
- We have launched a notification system that notifies players the moment they achieve a new rank. The message is displayed during battle.
- We have also launched an alert system, informing players about new items available for purchase in the Garage. A message displaying the icons of these items will appear when a players receives a new rank and leaves battle or enters the game. Click on the icon guides to the description of the item in the Garage.

### February 1

- Overloaded database, caused game instability, was modified. Now all player’s achievements are not only saved but also stored through Redis. This solves a lot of issues. Due to this update search logic in the Hall of Fame is temporarily changed. To find user, you should type his full nickname, not part of it.

### January 28

- Problem with missing letter for e-mail (password) change was solved.
- Problem with inability to enter private battle through the link was solved.
- Problem with referral links malfunction was solved.
- Winter versions of Barda, Berlin, Boombox II, Brest II and Island maps are active again.

### January 26

- Battle creation form was modified:
  - droplist became longer;
    - now there is search by first letter in the map’s name;
    - the last chosen map is saved in memory.
- Tanks, whose sources weren't completely loaded, are marked with grey color in battle statistics (press «Tab» to call it). This helps to solve problem of incomplete sources loading and resists to so-called «invisibles».
- Error in CTF mode, caused some lags, was eliminated.
- Error messages are more detailed now. This helps find and solve problems more promptly.
- Hash for server entering without password during evacuation and hash for permanent server entering without password are differ now. It increases protection level of the game.

### January 18

- Button for bonus administrating in No-Supplies battles was restored. Players, who bought No-Supplies battles pass in the period when the button was absent, got their crystals back.
- Loader picture was changed.
- Payments check system now sends letters to users from general tech support e-mail address help@tankionline.com. It means you can contact technical support team to get info about your request just by answering received e-mail.

### January 2

- Protection system from hash pickup was enhanced. Generating algorithm was changed, time between trials to enter by hash was increased. Besides, all tankers entering the game will get new hash automatically.

### January 1

- New maps: «Courage» by Flanagun and «Valley» by 123egor
- Winter came to maps «Combe», «Island», «Ping-Pong», «Wolfenstein» and «Fort Knox»
- Payment bug report system was upgraded. Now when player sends payment bug report, system automatically checks if this payment was successful or not. If it was, player receives confirmation letter. If it wasn’t, tech support team automatically gets task and player receives a letter about that. Note: if player made a few identical payments, it is necessary to specify that in payment bug report form.

## 2010

### December 27

- To enhance the level of protection we added CAPTCHA to the registration form
- Speed hack protection system was upgraded
- Anti-cheat system in general was upgraded too
- Bug-report form for SMS-payments was enhanced
- Hints for newbies now stay on the screen for several first battles — it makes knowing of Tanki Online much easier

### December 21

- TDM and CTF modes were added to Fort Knox III
- Map «Old Silence» was added to the game

### December 14

- Warning about long first loading in loader.
- Old winter props where upgraded.
- Problem with password recovery was solved.
- The principle of sport battles creation was enhanced. Now if somebody tries to launch no-supply battle without flag, kill or time limit, «Start» button is blocked.
- Anti-flood was connected with registration form and nick checking system.
- Link for password and e-mail changing now works only once — it allows to avoid errors.
- Problem with «grey screen» was solved partially.
- Meter of online activity was upgraded so now it shows amount of users in the chat more precisely.
- Stats for long battles (with fund not less than 200 crystals) now are uploaded to file. It allows to save information about fund of battle. Attention! Could be differences in figures as far as stats are saved every minute but not every second.

### October 21

- Updates on the map «Garder» from Nobius

### October 19

- Updates on the map «Camp» from Figishe

### October 18

- Tank is no longer a barrier for Freeze or Firebird streams.
- If you were forcibly disconnected from server you can not connect to this server for 5 minutes. But you can connect to any other server immediately.
- «Phantom» problem is solved. Earlier, if user disconnected during loading he became so called «phantom». He was in the list of battle but he wasn’t in the game.
- Added alternate camera behaviour which slightly improves view under low ceilings by pitching camera up. To turn on the mode check «Alternate camera behaviour» option in the settings dialog.
- Now if player gets automatic ban for flood his chat history is cleared.

### October 5

- Solved the problem which led to unfreezing starting simultaneously with freezing. Now unfreezing starts right after it.

### October 4

- Freezes were taken away from your garages, crystals have been returned.
- Updates of map «Madness».

### October 1

- Increase of freezing speed. Freezes will be returned within 3 days after the release.
- Updates on the map «Silence» from Figishe

### September 29

- Setting of mip-mapping turn-on(off) function, which will bring down picture quality, but will raise performance and reduce the use of working memory. View the demo with mip-mapping function here (use Space to turn on/off).
- Eliminated vulnerabilities which led to the following problems: destroyed or invisible tank which could shoot and move.

### September 27

- «Hall of Fame " was transported to a separate server. This improvement solved the problem with uneven achievement changes in hall of fame, raised game servers' performance and speeded servers' restarts greatly, but there will be a delay with rate upgrade (up to 15 minutes).
- Now the size of activated and gathered first-aid kits is summed up.
- Eliminated vulnerabilities which led to the following troubles: supplies' re-use; tanks' acceleration.

### August 26

- We have made traffic encryption. Cheat users are detected. They will be fined to 25% of all achievements, crystals on the account and stuff in the garage.
- Client side of the game was optimized to solve some problems with game performance.
- New coats (Taiga, Cedar, Clay, Sandstone, Rock, Prodigi).
- Ricochet was rebalanced. All early bought Ricochets put out from the garages and crystals for them returned.
- Freeze was rebalanced. Now Freeze damages victim from the beginning and freezes it at the same time.
- Chat was split in Russian and English versions.
- New function in the chat: deleting chat history by player’s nickname.
- The problem with cutting off hanged up players is solved.
- The mass and dynamics of Hornet M3 was restored.
- The problem with tanks bounding during collisions was solved.
- Isida aiming priority was changed. If ally has full health Isida doesn't detect it as an aim.
- Time checking system for resource loading was added. If resources can not be loaded for certain time the loading will be started from the beginning.
- Bonus medkit value is changed. Now the medkit found during battle heals 50% of hull HP.
- Appearance of different Freeze modifications now differs.
- The problem of displaying previews which don’t correspond to maps was solved.
- Now the size of explosion depends on the size of tank.

### July 30

- CTF mode for Ping-pong map was added
- New maps: Opposition from Hans_Rose, Madness from Flanagun
- Sound of explosion was changed

### July 29

- New coats including coats with resists to different guns (another pack of coats will arrive soon)
- New principle of medkit functioning
- Flag indication is back but text now gradually become transparent and disappear
- New effect and sound of explosion
- Isida action is corrected (sometimes it didn’t heal or didn’t damage the target)
- Aiming algorithm is changed, enemy flag bearer has maximal priority
- Speed of unfreezing with Firebird depends on Firebird' modification
- Speed of Freezing enemy with Freeze depends on Freeze' modification
- Ricochet modifications now differ from each other visually
- Shot effects of different modifications of Freeze and Ricochet differ from each other visually
- Banned player now see not only the time of ban but also the reason for ban
- When you change password or e-mail through special form the link for password recovery (hash) is changed too

### July 15

- Time of unfreezing reduced twofold.

### July 13

- These problems were successfully solved:
  - if game loading was interrupted player didn’t get a gift;
    - anti-foul language system reacted to the links of battles with «eb» in the name;
    - critical errors in the battles;
    - clickable battle links containing «?rnd=…" didn’t work;
    - search system cleared valid search results;
    - click to the battle link from the Garage or Hall of Fame opened information about other battle.

### July 10

- We have made server optimization to reduce the amount of lags.

### July 8

- There are two new guns: Freeze and Ricochet.
- Each hull now has its own weight.
- Links for the battles in chat channel are clickable now. When you click the link you see the list of battles and information about them.
- There are new maps: Farm and Noise from Nobius; Massacre and Ping Pong from A_Creature; Atra (idea from JlEHb) and Station from Flanagun.
- We’ve changed flags indication in battles. Written messages from the center of the screen were taken away. Now all informative symbols are allocated in the bottom right corner.
- Different modifications of Hornet, Viking and Mammoth have different appearance now.
- In the Hall of Fame we’ve improved search system based on player’s nickname. Now a few letters from the nick in the search line disappear if there are not any similarities with search request.
- All links in the chat channel are clickable now but when you are trying to proceed the link which is not marked as trusted you get warning.
- We have made server optimization to reduce the amount of lags.
- We have changed terminology. The word «Kill» was replaced by «Destroy», «Died» by «Lost», «Suicided» by «Selfdestructed».
- The problem of e-mail changing when the e-mail wasn’t specified during registration was solved.
- Twins charges geometry was experimentally reduced. These charges don’t cling to objects now.
- E-mails in the chat channel now look like links. Click to the link automatically launches your default e-mail client.
- We’ve launched bad language checking system for names of battles.
- Evacuation system was improved. Battles migrate to other server gradually not overloading receiving server with great amount of players at a time.
- Hornet M1 hull price cut to 1350 crystals.

### June 4

- New gift system. Now you can find one of three different presents in the daily bonus. It can be supplies (1 or 2), crystals or one day no-supplies battles pass. Players get the gifts starting from the third rank only.
- We took away buttons PayPal (temporarily), LiqPay (temporarily), EasyPay and RBK Money from payment section.
- We added Prepaid Cards subsection in the payment section. Payments through Wallie, Paysafecard, Rixty and CashU are now supported.
- Banned player now gets information about the period of his ban right in the chat. Nobody beside him can see this message.
- From now on the chat is open for players with the private and higher ranks.
- We have solved the problem with invisible tanks.
- There are drop points for golden crates in every map now.
- Different Dictator modifications have different appearances now.
- Each Isida modification got its own shooting effect color.
- The problem with e-mail confirmation has been successfully resolved.
- We launched the second part of the account protection system. If you specified an e-mail in your account you will see the button «Change e-mail and password» instead of standard form for e-mail and password changing. When you click this button you get the e-mail with the link forwarding you to the page with the form for e-mail and password changing. If you didn’t specify an e-mail you can make changes right in the Settings menu without confirmation.
- Now you can enter no-supplies battle for one-time payment in the amount of 50 crystals.
- One month no-supplies battles pass price cut. Now it costs 500 crystals only.
- There are new maps: 2042 by GT-Razer, Island by Figishe, Combe by Figishe, Desert by Figishe, Gravity by M0ONL1ght, Pass by Figishe, Deck-9 by M0ONL1ght, Canyon by M0ONL1ght, Polygon by Figishe and Plato by Figishe.

### May 21

- Now a nick is checked against prohibited words during registration;
- Public command #feedback added — it is a switch to the system of ideas and suggestions feedback.tankionline.com;
- Hash is changed with password change now;
- Anti-foul language system doesn’t ban users anymore. It replaces forbidden words to symbols \*\*\* now;
- New system of evacuation implemented: now the battle will switch to another server with all the players in it during restart;
- Changed one of alternative buttons — (similar to Del), now Ctrl+ is the analog of Del;
- Candidate moderators can give 5-minute bans now.

### May 8

- Fixed a bug in the 3D engine, which led to a critical error in the battle.

### May 1

- Sound of shot of Thunder is 30% quieter now.
- Sound of shot of Twins is 20% quieter now.
- There is no ban for links to battles containing single letter many times (like fffffffffffff).

### April 27

- Mammoth — a new armour available.
- A limit for players amount on Zone — 12 players.

### April 24

- Hornet — a new armour is available.
- Different appearance for grades of Titan.

### April 23

- Thunder — a new weapon is available.
- Viking — a new armour is available.
- Private battles link problem has been fixed
- Different appearance for grades of Smoky, Wasp and Isida
- Different effect of shots for grades of Smoky
- New priorities for Isida. The highest priority for healing damaged teammate, middle priority for enemy and the lowest priority for «healthy» teammate.
- Alternative keys for some actions: Del, PgUp \], PgDown \[.
- New chat command available for all players #updates — link to «Patch Notes / Updates».
- New maps: Промзона/Industrial Zone by GT-Razer, Зона / Zone by M0ONL1ght, Тишина / Silence by Figishe
- All players will be moved to another server when restart is launched.
- Duration of banning generated by bot is reduced to day.
- Minor changes in armours specs (Wasp М2, Hunter М1, Hunter М2, Titan М3, Dictator М1).
- Minor changes in Smoky M2 specs.
- Titan М3 costs 900 crystals now.

### April 1

- Second stage of server optimization has been finished. Lags were greatly reduced. Lags are network latencies during which tanks switch positions, bonuses and flags are taken with delay.
- Purchase or improvement requires confirmation now.
- Order #levels renamed into #ranks.
- Added public order #forum — switch to forum.
- Fixed bugs with password and E-mail change in settings.
- Now bonus crystals for invited friends can be viewed on «Invitation statistics» button.
- Fixed bug with crystals receiving for invited friends. They will be accounted today.

### March 30

- First stage of server optimization has been finished. Lags should reduce. Lags are network latencies during which tanks switch positions, bonuses and flags are taken with delay.

### March 19

- Now the distance between a flag carrier and the base is taken into account during crystal calculation for flag return in CTF.
- Now bug report can be sent by testers only. If you have a problem with payment, fill in the form and send a message from payment section. All other problems and questions are discussed at forum.
- Now Firebird and Hunter modifications look differently.
- Now Firebird modifications have different colour of the fire.
- Coats were rebalanced (Swamp + 2% from Twins (total 15%); Safari + 5% from Smoky; Dragon + 5% from Isida; Roger + 5% from Railgun; Jaguar — 10% from Firebird, но +5% from Railgun and +5% from Isida; Electra +5% from Railgun).
- Added new map with new props Novel.
- Maps which used to be available to low ranks are now available for higher ones also: Boombox II, Sandal II and Short Bridge II.
- New orders appeared (#levels — switch to forum topic «Ranks», #clans — switch to forum thread «Clans»).

### March 10

- Experimentally reduced points for Isida cure. Coefficient was reduced from 2 to 1,5. Experiment will last for a week.

### March 5

- Button «Improve» is placed next to «Set» in the Garage.
- Every modification of turrets and shells is described now in a special table which is placed in the Garage.
- Fixed bugs in Firebird and Isida: Firebird had greater damage effect than it had to, Isida had less damage effect than it had to. Now similar modifications of Firebird and Isida have equal damage effect in full charge.
- Fixed bug when Firebird effect during shoot while moving was displayed incorrectly. There used to be very long flame while moving backwards and very short one — while moving forward.
- Abolished passes — Double Score. All the players who purchased the pass during making changes on server will get their crystals back.
- A new pass was added — Score multiplier pass: multiplies all received points by 25%, lifetime — one month.
- A new pass was added — No-supplies battle: enables you to create and enter no-supplies battles, lifetime — one month.
- Modifications of Railgun and Twins look differently now.
- Now the Mine is included in everyday present.

### February 10

- Added new consumable — mine. View details in FAQ.
- Done effects visualization. View details in FAQ.
- Changed visualization of consumable blocking time after usage (cooldown).
- Improved automatic anti-foul language system: now the chat knows 1 300 000 Russian words. If you do not misspell the words, false responses will be rare.
- Improved registration form — added check-up of nick availability (after you enter the needed nick and are inactive in entry field for two seconds or switching to password entry field, the nick is checked and next to it you see a tick or a red cross).
- Now you get twice as much points for curing the tanker who carries a flag.
- Summer is back! All the maps now have pleasant green landscape.
- Maps Fort Knox and Wolfenstein are back.
- Added new map Chernobyl from Duke 2.0
- Lessened lobby loading time due to reduction of loaded maps preview, now they load when needed.
- Now every modification of Smoky, Firebird, Twins and Railgun has own graphic effect.
- Now you can use alternative payment system for VISA/MasterCard in payment section.
- Solved bug when points were not accounted when you kill Isida owner or a patient during cure.

### January 22

- Finally accepted modification of Twins: vertical angle of aiming increased greatly (two degrees up, one down), lowered speed of bullets, finally accepted damage
- Introduced paid battles with no consumables.
- Fixed bug when a consumable timer is stopped up after getting bonus.
- Karma was introduced in Chat: if you misbehaved, the chat remembers it and takes into account when giving automatic ban, but soon forgets about misbehaviour.
- All newcomers will appear in the battle at once without entering game menu.
- Now you can invite friends to the game through email.
- Payment systems Yandex. Dengi and Webmoney were moved to another payment aggregator (2Pay). But you still can pay through the former aggregator (OnlineDengi).
- Now if you, for some reason, lost connection with the game (being in the battle), you can return without loosing your achievements. Time to return into the battle — 2 minutes.
- Changed algorithm of anti-foul language system. Within some period of time there can be false responses, since we’re perfecting the system. If you have examples of false responses please send them to help@tankionline.com
- Changed algorithm of anti-flood system, now anti-flood follows typing of similar symbols in a row in one message.
- Flags finally have taken their stand.
- Fixed bug of mismatch between number of players in the battle list and battle info (9/11).
- Changed the sound of Twins shooting.

### January 16

- Experimental changes in the Twins gun: the vertical angle for automatic targeting is now increased (3 degrees upwards, 3 downwards), speed of flight of the individual shells is lowered.

### January 14

- Eliminated a vulnerability that allowed to increase the speed in battles (aka speed hack). Now if you somehow speed up the tank, you’ll be automatically kicked from the battle.

### January 12

- Twins is experimentally strengthened for one week. You can discuss the current stats and post your impressions/suggestions here
- The referral banned display problem is now solved.

## 2009

### December 31

- It’s the New Year’s eve, and all the guns have gone crazy!

### December, 30

- Fixed an issue with Isida’s healing action. Previously, healing was done in percent and not in HP.
- Added an option to enable/disable the battle chat. If the combat chat is turned off, messages will not be displayed. However, you may press enter to view all the messages you missed as well as to write one yourself.

### December 29

- Changed aggregator of payment terminals. Now we receive payments through terminals in four countries
- Redesigned section for crystal purchasing
- Improved ban system
- Added new SMS-payment aggregator. Now we receive payments in 67 countries

### December 25

- Fixed bug with automatic naming of battle creation
- Changed #plans, #faq и #rules considering new forum
- Improved shadows under buildings on the snow
- Links to new forum are automatically changed into clickable ones
- Changed tree-flag design

### December 23

- Winter came to all the maps
- Flags were temporarily turned into fir-trees
- Introduced system of automatic change of capital letters into lowercase ones
- Fixed bug of damaging through walls with the help of Firebird
- The principle of pause mode has been changed. The pause mode is activated by pressing P or Pause button. If a tank has been destroyed while pause is active, the tank doesn’t spawn until the pause mode is disabled. In the beginning of a new round all tanks are spawned regardless of active pause.
- In Chat when entering #plans appears conversion into clickable link to the corresponding Forum thread. in Chat #plans is displayed as Задачи и планы разработчиков in Russian localization and Developers’ missions and plans in English one
- Maps Wolfenstein and Fort Knox were temporarily disconnected to be prepared for winter

### December 18

- In Chat when entering #faq or #rules appears conversion into clickable link to the corresponding Forum thread. In Chat #faq is displayed as FAQ for Russian and English localization, and #rules is displayed as Правила in Russian localization and Rules in the English one
- In Chat the links to the forum are clickable
- Own tank doesn’t have now nick and rank indication next to health/charge indication stripes
- Fixed bug of single-use items use of a tank in inactive (translucent) mode
- Fixed bug of First Aid single use when having full health
- Added new maps: Cross from eras, Skylark from DJ_Efreitor, Wolfenstein from GrUm, Fort Knox from GrUm, Bobruisk from DJ_Efreitor.
- Improved checking of items use frequency

### December 11

- Now in battles with bigger funds a golden box with 100 crystals instead of 1000 crystals appears
- Hall of fame is functioning again
- Improved system of automatic monitoring of foul language in chat
- Network acceleration, now the servers can be used by larger number of tankers
- Changed Nitro icon in the battle

### December 3

- Added three maps: Serpuhov from DukePlatinum, Siege from Stefman, Short Bridge from eras
- The pause was added to the game, now during respawn you don’t leave transparent mode until you start being active. The pause is limited by autokick for inactivity (5 minutes)
- Plasma spheres were visually reduced
- The colour of the sky is now blue-grey
- Now a golden box with 1000 crystals can appear in battles with bigger funds

### November 12

- Changed design of Nitro item
- Increased screenshot size when sending bugs through bugtracker, now full-screen screenshot is sent
- Fixed bug with missing of upper menu after sending bug through bug tracker

### November 3

- Corrected damage dispersal range of all the weapons

### October 27

- Adopted improved 3D engine. Your FPS will become higher
- Fixed bug when the player could enter CTF battle with complete team

### October 16

- Adopted Russian localization
- Now in the Garage you can purchase «DoubleScore» which will double your points. Lifetime — 6 or 72 hours from the moment of purchasing
- Alterations in CTF mode: for returning the flag you’ll be granted with extra points, for flag-carrier destruction your score will be doubled
- Improved antiflood system
- Fear Machine renamed to Railgun
- Changed payment aggregator for VISA/MasterCard. Now we take payments from all over the world
- Present delivery is done when the date changes but not from the moment of entering the game
- Started voting for RuNet award, we invite you to support our project, voting link is available in the info window of present delivery
- Added new map Lost Temple from GrUm
- Added new map Dusseldorf from Avocado
- Added new map Duel from Stefman
- Added new map Magistral from DukePlatinum

### October 14

- Isida damage returned to previous position, self-healing switched off

### October 10

- Isida damage and self-healing lowered to 20%

### October 9

- Now payment through Web Money allows entering five-place number of crystals
- Any method of payment allows using your nick
- Double Damage renamed to Double Power because of the new gun Isida. Now it doesn’t matter what gun you use — Double Power will reinforce any gun.

### October 8

- Now players receive presents (several single-use items) every day
- Fixed bug with suction boxes on Monte Carlo
- Changed function of payment through SMS. Now the message should contain the text «BTL+nick»

### October 5

- Added new map Osa from DukePlatinum

### October 2

- Decreased recoil force while shooting with Twins and Fear Machine, to compensate the new aiming system
- Decreased wealth weight in rate formula, possible shifts in Hall of Fame
- Isida now can use self-healing if you shoot free

### October 1

- According to the results of the contest, added new colour which gives protection from various guns
- Added map Sandal (for beginners)
- Changed map Monte Carlo (earlier Deathtrack with red background)
- Added map Deathtrack (totally new)

### September 28

- Added new weapon. Code name — Isida, cures friends and exhausts enemies (at the same time restores own tank).
- Rewrote server part, now there shouldn’t be any lags and the server should sustain about 2000 players (buzzes possible — fixing in process)
- Changed physics of barriers (breaks in walls can be shot through)
- Added opportunity to throw away flag with the help of «F» key. The flag is thrown to where the tank is situated. Besides within 5 minutes the tank cannot pick up the flag again
- Changed camera actions. Excluded camera falling into the tank, saved acceptable view in case of close barriers
- Changed maximum number of players (20) on map Berlin
- Changed Railgun aiming system — hits through dead tanks if the shot is profitable
- Corrected Fear Machine design
- Changed points of flag fastening to weapons
- Added new backgrounds to maps
- Fixed passage from the back of bridges
- Added CTF mode on the map Red Alert
- Fixed bug with mode buttons in creating the battle
- Fixed bug with respawn on map Brest
- Fixed bug in private battle auto-choice

### September 8

- Added possibility to create private battles
- Added possibility to buy any number of items pressing «Buy» button
- Added flag indicators on bases in CTF mode
- Added map Boombox
- Added map from DukePlatinum: Berlin
- Lessened memory use on the client
- Fixed different bugs on the client
- Various alterations on maps

### September 2

- Experimentally added possibility of payment through Paypal
- Map Ergach renamed to Kolhoz
- Altered bug of messages highlight in chat
- Corrected texture inequality in modders' maps, updated picture of map Brest

### September 1

- Added map from DukePlatinum: Solikamsk
- Added map from ZeRUS: Ergach (will be renamed to Kolhoz)
- CTF mode is available for all maps
- Changed format of messages about flags (user’s name is indicated) in CTF
- Altered repeated activation of single-use items
- Altered bug leading to spontaneous shot after respawn
- Altered incorrect blinking of limited score indicator in the battle
- Altered incorrect function of «Inverse turn controls» flag
- Various alterations on maps

### August 27

- Lessened time of autokick for inactivity to 5 minutes
- Increased time of respown by 1,5 seconds (experimentally)
- Increased Twins return and kick by 25%

### August 26

- Added new maps from DukePlatinum: Brest and Gubakha
- Completed firebird effect
- Improvements in firebird
- Improvements in chat
- Interface improvements
- Improved variance of players in the battle's list and info

### August 25

- Accelerated Twins by 15%

### August 7

- Added chat orders to block messages from users:
  - /block name – block messages from the player (works in lobby and battle chat).
    - /unblock name – resume messages from player (works in lobby and battle chat).
    - /blocklist – view the list of blocked players (works in lobby).
    - /unblockall – clear the list of blocked players (works in lobby).

The list of blocked users is kept in Shared Objects, so if you enter the game from the other computer – it won't work.

- Improvements in firebird
- Added alternative “T”-key to activate team chat
- Altered messages color scheme in CTF mode. Positive messages for the team are yellow, negative ones - green.
- Various bugs corrections

### August 6

- Reduced time of dropped flag return to 30 seconds

### August 4

- Corrected bug with incorrect account in CTF-battle info
- Altered flag icon in team account (was: skull)
- Added mark \[TEAM\] in team messages
- Improved button block of teams while autobalance
- Altered flag return in time-out
- Partly altered variance of users' info in the list and its details
- Corrected several interface bugs

### July 31

- Added game mode “Capture the Flag”
- Added new maps (author: niak_ris): Red Alert, Parma
- Improved special effect of Fear Machine shot
- If Fear Machine hits several goals every next goal gets less harm
- Plasma shots are more accurate
- Plasma speed is decreased
- Intensified return from Smoky with upgrade
- Altered system of prize distribution in team battles (there is consolation prize, calculation depends on points, doubly-proportionally to deposit)
- In settings added possibility to activate adaptive choice of fps flash. In some cases it helps to lessen effect of operation “persistance”
- In settings added possibility to disconnect background sound in the battle
- Added alternative key of tower centration - “/”

### July, 17

- Added new map Tribute (created according to the game prototype)

### July, 16

- Set the limit of 8 players on maps Sandbox and Magadan
- Alterations of Fear Machine:
- Restored time of Fear Machine charging (1,1 seconds)
- Increased time of Fear Machine recharge: 6400 - 6200 - 6000 – 5800
- Added Twins hit (push)

### July 15

- Lessened autosight angle: 6 degrees up, 9 – down
- Increased firebird distance to 20 meters
- Increased time of Fear Machine charging to 2 seconds (experimentally, sound is not correct yet)
- Added new map from niak_ris. Work title Magadan.

### July 14

- Increased Dictator's armour 60 - 70 - 90 - 120 (like Titan)

### July 10

- Increased firebird distance to 17,5 meters

### July 9

- Increased Twins gun ~10%
- Smoky gets less harm depending on the distance:
- about 50m – the same harm
- from 50 to 100m – harm gradually decreases to 20%
- more than 100m – 20%
- Increased Twins gun ~10%
- Smoky gets less harm depending on the distance:
- about 50m – the same harm
- from 50 to 100m – harm gradually decreases to 20%
- more than 100m – 20%

### July 8

- Experimentally lessened rail's autosight angle by 2 degrees (2-up, 2-down) – all in all, 17 degrees
- Lessened kick (physical kick, not harm) from rail's shot by a quarter
- Intensified firebird ~15%, hits titanium of the according upgrade at one charge, but distance is decreased to 15meters
- Last four colours are available with Master Corporal and cost 200 crystals
- Increased single-use items' cost

### July 6

- Improved the system of respown. Just appeared tank is invulnerable for certain time – it is indicated by the transparent skin without colour. Invulnerable tank cannot shoot and gather bonuses. -- Till the new tank crosses normal ones, its skin is half transparent and collisions with others are not taken into account.
- Preparation for Fear Machine shot is reflected on weapon indicator
- Implemented automatic delete of a player from the battle in case of inactivity for two minutes. Activity here is pressing of any key on keyboard.
- In a team game in the beginning of a new round the players change the teams. Red players become blue and vice versa.
- Added possibility to invite a friend and get crystals for this
- Added possibility to send bug-report if there is critical bug in the battle
- Position of the camera remains the same between the battles
- Use of single-use items is blocked after suicide
- Removed bug leading to eternal torch when firebird tank leaves the battle
- Removed bug leading to control losing after closing help-window in the beginning of the battle
- Corrections in garage items descriptions
- Various maps alterations
- Various interface improvements

### June, 29

- Viewport size remains the same between sessions
- Altered texture of “stronger hit” bonus
- Game fund is invisible in unlimited battles
- Overloaded maps are always marked in gray
- Corrected Kungur map to prevent its boarder crossing
- Corrected respown points in Barda map
- Improved zone of crystal fallout in Barda map
- Improved the situation when pressing TAB didn't allow to view killings/deaths of an enemy
- Improved rank slider under creation of a battle
- Now single-use items timer resets after death
- Added info about speed into frames descriptions
- Now if the flag “remember me” is set in registration window, correct name is given under second login
- Now rail-gun shot is delayed
- In settings added possibility to invert rotation keys under moving back
- Slightly corrected physical pattern of tank to decrease cases of sticking on hills
- Minimum symbols in nick and parole reduced to 2
- Maximum players in one battle reduced to 14
- When entering Hall of Fame current player is marked
- Increased life interval of bonus-crystals
- Improved situation when results-table wasn't displayed at the end of the battle
- Renamed tanks' frames
- Changed requirements to rank for items
- Changed frames' speed and mobility
- Various alterations of user and server
- Various interface alterations

Last Edit: Emrakul 6/4/2026
