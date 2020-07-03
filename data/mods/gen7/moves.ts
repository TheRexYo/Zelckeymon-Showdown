/*

List of flags and their descriptions:

authentic: Ignores a target's substitute.
bite: Power is multiplied by 1.5 when used by a Pokemon with the Strong Jaw Ability.
bullet: Has no effect on Pokemon with the Bulletproof Ability.
charge: The user is unable to make a move between turns.
contact: Makes contact.
dance: When used by a Pokemon, other Pokemon with the Dancer Ability can attempt to execute the same move.
defrost: Thaws the user if executed successfully while the user is frozen.
distance: Can target a Pokemon positioned anywhere in a Triple Battle.
gravity: Prevented from being executed or selected during Gravity's effect.
heal: Prevented from being executed or selected during Heal Block's effect.
mirror: Can be copied by Mirror Move.
mystery: Unknown effect.
nonsky: Prevented from being executed or selected in a Sky Battle.
powder: Has no effect on Grass-type Pokemon, Pokemon with the Overcoat Ability, and Pokemon holding Safety Goggles.
protect: Blocked by Detect, Protect, Spiky Shield, and if not a Status move, King's Shield.
pulse: Power is multiplied by 1.5 when used by a Pokemon with the Mega Launcher Ability.
punch: Power is multiplied by 1.2 when used by a Pokemon with the Iron Fist Ability.
recharge: If this move is successful, the user must recharge on the following turn and cannot make a move.
reflectable: Bounced back to the original user by Magic Coat or the Magic Bounce Ability.
snatch: Can be stolen from the original user and instead used by another Pokemon using Snatch.
sound: Has no effect on Pokemon with the Soundproof Ability.

*/

export const BattleMovedex: {[moveid: string]: MoveData} = {
	wait: {
		num: 0,
		accuracy: 0,
		basePower: 0,
		category: "Status",
		shortDesc: "Has a 10% chance to increase the PP of a random move by 1.",
		id: "wait",
		name: "Wait",
		pp: 40,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, body: 1, tackle: 1},
		secondary: null,
		target: "any",
		type: "Neutral",
		contestType: "Clever",
	},
	tackle: {
		num: 1,
		accuracy: 80,
		basePower: 50,
		category: "Physical",
		shortDesc: "No additional effect.",
		id: "tackle",
		name: "Tackle",
		pp: 40,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, body: 1, tackle: 1},
		secondary: null,
		target: "any",
		type: "Neutral",
		contestType: "Cool",
	},
	scratch: {
		num: 2,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		shortDesc: "No additional effect.",
		id: "scratch",
		name: "Scratch",
		pp: 40,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, claw: 1, slash: 1},
		secondary: null,
		target: "any",
		type: "Neutral",
		contestType: "Clever",
	},
	snap: {
		num: 3,
		accuracy: 60,
		basePower: 60,
		category: "Physical",
		shortDesc: "No additional effect.",
		id: "snap",
		name: "Snap",
		pp: 40,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, jaw: 1, bite: 1},
		secondary: null,
		target: "any",
		type: "Neutral",
		contestType: "Tough",
	},
	junglefang: {
		num: 4,
		accuracy: 60,
		basePower: 120,
		category: "Special",
		shortDesc: "No additional effect.",
		id: "junglefang",
		name: "Jungle Fang",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, jaw: 1, bite: 1},
		secondary: null,
		target: "any",
		type: "Grass",
		contestType: "Tough",
	},
	tidalslash: {
		num: 5,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		shortDesc: "No additional effect.",
		id: "tidalslash",
		name: "Tidal Slash",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, claw: 1, slash: 1},
		secondary: null,
		target: "any",
		type: "Neutral",
		contestType: "Clever",
	},
};
