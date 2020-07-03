/*

Ratings and how they work:

-1: Detrimental
	  An ability that severely harms the user. Zelckeymon with these abilities tend to have incredibly high stats to make up for it.
	ex. Cumbersome, Mini

 0: Useless
	  An ability with no overall benefit in a singles battle.
	ex. Adaptability, Pack Tactics

 1: Ineffective
	  An ability that has minimal effect or is only useful in niche situations.
	ex. Resilient, Barricade

 2: Useful
	  An ability that can be generally useful.
	ex. Mega-Force, Evolutionary

 3: Effective
	  An ability with a strong effect on the user or foe.
	ex. Elemental Boost, Elemental Force

 4: Very useful
	  One of the more popular abilities. It requires minimal support to be effective.
	ex. Full Armor, _

 5: Essential
	  The sort of ability that defines metagames.
	ex. Speed Demon, Hulking

*/

export const BattleAbilities: {[abilityid: string]: AbilityData} = {
	//#00 - No Ability
	noability: {
		num: 0,
		shortDesc: "Does nothing.",
		id: "noability",
		isNonstandard: "Past",
		name: "No Ability",
		rating: 0,
	},
	//#01 - Elemental Boost
	elementalboost: {
		num: 1,
		desc: "This Zelckeymon's moves that match one of its types have a same-type attack bonus (STAB) of 1.75 instead of 1.5.",
		shortDesc: "This Zelckeymon's same-type attack bonus (STAB) is 1.75 instead of 1.5.",
		onModifyMove(move) {
			move.stab = 1.75;
		},
		id: "elementalboost",
		name: "Elemental Boost",
		rating: 3,
	},
	//#02 - Elemental Force
	elementalforce: {
		num: 2,
		desc: "This Zelckeymon's moves that match one of its types have their damage doubled when foes are resistant to them.",
		shortDesc: "This Zelckeymon's STAB moves ignore resistance.",
		onModifyDamage(damage, source, target, move) {
			const type = move.type;
			if (target.getMoveHitData(move).typeMod < 0 && source.hasType(type)) {
				this.debug('Elemental Force Boost');
				return this.chainModify(2);
			}
		},
		id: "elementalforce",
		name: "Elemental Force",
		rating: 3,
	},
	//#03 - Bite Force
	biteforce: {
		num: 3,
		id: "biteforce",
		name: "Bite Force",
		rating: 1,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['bite']) {
				return basePower * 1.5;
			}
		},
		desc: "This Zelckeymon's bite-based attacks have their power multiplied by 1.5.",
		shortDesc: "This Zelckeymon's bite-based attacks have 1.5x move power.",
	},
	//#04 - Mega-Force
	megaforce: {
		num: 4,
		id: "megaforce",
		name: "Mega-Force",
		rating: 2,
		onBasePower(basePower, attacker, defender, move) {
			return basePower * 1.125;
		},
		desc: "This Zelckeymon's attacks have their power multiplied by 1.125.",
		shortDesc: "This Zelckeymon has 1.125x move power.",
	},
	//#05 - Hulking
	hulking: {
		num: 5,
		id: "hulking",
		name: "Hulking",
		rating: 5,
		onBasePower(basePower, attacker, defender, move) {
			return basePower * 2;
		},
		onModifyPriority(priority, pokemon, target, move) {
			return priority - 1;
		},
		desc: "This Zelckeymon's moves have their power multiplied by 2, but their priority reduced by 1.",
		shortDesc: "This Zelckeymon has 2x move power but -1 move priority.",
	},
	//#06 - Generalist
	generalist: {
		num: 6,
		desc: "This Zelckeymon's moves have their same-type attack bonus (STAB) reduced to 1 but have their power multiplied by 1.25",
		shortDesc: "This Zelckeymon loses STAB but has 1.25x move power.",
		onModifyMove(move) {
			move.stab = 1;
		},
		onBasePower(basePower, attacker, defender, move) {
			return basePower * 1.25;
		},
		id: "generalist",
		name: "Generalist",
		rating: 3,
	},
	//#07 - Specialist
	specialist: {
		num: 7,
		desc: "This Zelckeymon's moves that match one of its types have a same-type attack bonus (STAB) of 3 instead of 1.5, but its moves have their base power multiplied by 0.75.",
		shortDesc: "This Zelckeymon's same-type attack bonus (STAB) is 3 instead of 1.5, but it has 0.75x move power.",
		onModifyMove(move) {
			move.stab = 3;
		},
		onBasePower(basePower, attacker, defender, move) {
			return basePower * 0.75;
		},
		id: "specialist",
		name: "Specialist",
		rating: 3,
	},
	//#08 - Speed Demon
	speeddemon: {
		num: 8,
		desc: "This Zelckeymon's moves have their priority increased by 1.",
		shortDesc: "This Zelckeymon's moves have +1 priority.",
		onModifyPriority(priority, pokemon, target, move) {
			return priority + 1;
		},
		id: "speeddemon",
		name: "Speed Demon",
		rating: 5,
	},
	//#09 - Resilient
	resilient: {
		num: 9,
		shortDesc: "This Zelckeymon cannot be struck by a critical hit.",
		onCriticalHit: false,
		name: "Resilient",
		rating: 1,
	},
	//#10 - Full Armor
	fullarmor: {
		num: 10,
		desc: "This Zelckeymon cannot be struck by a critical hit. It takes 0.75x damage from physical attacks.",
		shortDesc: "This Zelckeymon's is immune to crits. It takes 0.75x damage from physical attacks.",
		onCriticalHit: false,
		name: "Full Armor",
		rating: 4,
		onSourceModifyDamage(damage, source, target, move) {
			if (move.category === 'Physical') {
				this.debug('Full Armor resistance');
				return this.chainModify(0.75);
			}
		},
	},
	//#11 - Pack Tactics
	packtactics: {
		num: 11,
		desc: "This Zelckeymon's allies have their attack multiplied 1.5.",
		shortDesc: "This Zelckeymon's is immune to crits. It takes 0.8x damage from attacks.",
		onCriticalHit: false,
		name: "Pack Tactics",
		rating: 0,
		onAllyBasePowerPriority: 22,
		onAllyBasePower(basePower, attacker, defender, move) {
			if (attacker !== this.effectData.target) {
				this.debug('Pack Tactics boost');
				return this.chainModify(1.5);
			}
		},
	},
	//#12 - Adaptability
	adaptability: {
		num: 12,
		desc: "This Zelckeymon's type changes to match the type of the last move that hit it, unless that type is already one of its types. This effect applies after all hits from a multi-hit move; Sheer Force prevents it from activating if the move has a secondary effect.",
		shortDesc: "This Zelckeymon's type changes to the type of a move it's hit by, unless it has the type.",
		onAfterMoveSecondary(target, source, move) {
			if (!target.hp) return;
			const type = move.type;
			if (
				target.isActive && move.effectType === 'Move' && move.category !== 'Status' &&
				type !== '???' && !target.hasType(type)
			) {
				if (!target.setType(type)) return false;
				this.add('-start', target, 'typechange', type, '[from] ability: Adaptability');

				if (target.side.active.length === 2 && target.position === 1) {
					// Curse Glitch
					const action = this.queue.willMove(target);
					if (action && action.move.id === 'curse') {
						action.targetLoc = -1;
					}
				}
			}
		},
		name: "Adaptability",
		rating: 0,
	},
	//#13 - Cumbersome
	cumbersome: {
		num: 13,
		id: "cumbersome",
		name: "Cumbersome",
		rating: -1,
		onModifyPriority(priority, pokemon, target, move) {
			return priority - 1;
		},
		desc: "This Zelckeymon's moves have their priority reduced by 1.",
		shortDesc: "This Zelckeymon has -1 move priority.",
	},
	//#14 - Mini
	mini: {
		num: 14,
		id: "mini",
		name: "Mini",
		rating: -1,
		onBasePower(basePower, attacker, defender, move) {
			return basePower * 0.5;
		},
		desc: "This Zelckeymon's attacks have their power multiplied by 0.5.",
		shortDesc: "This Zelckeymon has its move power halved.",
	},
	//#15 - Evolutionary
	evolutionary: {
		num: 15,
		desc: "This Zelckeymon's neutral-type moves have their element changed to match its own element.",
		shortDesc: "This Zelckeymon's neutral type moves change to match its type.",
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = ['wait'];
			let type = pokemon.types[0];
			if (move.type === 'Neutral' && !noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status')) {
				move.type = type;
			}
		},
		id: "evolutionary",
		name: "Evolutionary",
		rating: 2, //Considered to have a rating of 1 due to STAB, despite the ability being effectively useless without that.
	},
	//#16 - Barricade
	barricade: {
		num: 16,
		desc: "This Zelckeymon takes 0.5x damage from attacks, but its defense and sp.defense are reduced by 1 each turn it remains in battle.",
		shortDesc: "This Zelckeymon's takes 0.5x damage from attacks. Its DEF and SP.DEF lower each turn.",
		name: "Barricade",
		rating: 1,
		onResidualOrder: 26,
		onResidualSubOrder: 1,
		onResidual(pokemon) {
			if (pokemon.activeTurns) {
				this.boost({def: -1, spd: -1});
			}
		},
		onSourceModifyDamage(damage, source, target, move) {
			this.debug('Barricade resistance');
			return this.chainModify(0.5);
		},
	},
	//#17 - Mega-Armor
	megaarmor: {
		num: 17,
		desc: "This Zelckeymon takes 0.875x damage from attacks.",
		shortDesc: "This Zelckeymon's takes 0.875x damage from attacks.",
		name: "Mega-Armor",
		rating: 2,
		onSourceModifyDamage(damage, source, target, move) {
			this.debug('Mega-Armor resistance');
			return this.chainModify(0.875);
		},
	},
	//#18 - Incorporeal
	incorporeal: {
		num: 18,
		desc: "This Zelckeymon takes 0.0x damage from physical attacks.",
		shortDesc: "This Zelckeymon's is immune to physical attacks.",
		name: "Mega-Armor",
		rating: 5,
		onSourceModifyDamage(damage, source, target, move) {
			if (move.category === 'Physical') {
				this.debug('Incorporeal immunity');
				return this.chainModify(0.0);
			}
		},
	},
	//#19 - Metaphysical
	metaphysical: {
		num: 19,
		desc: "This Zelckeymon takes 0.0x damage from special attacks.",
		shortDesc: "This Zelckeymon's is immune to special attacks.",
		name: "Mega-Armor",
		rating: 5,
		onSourceModifyDamage(damage, source, target, move) {
			if (move.category === 'Special') {
				this.debug('Metaphysical immunity');
				return this.chainModify(0.0);
			}
		},
	},
	//#20 - Magmabolism
	magmabolism: {
		num: 20,
		name: "Magmabolism",
		rating: 3,
		desc: "This Zelckeymon is immune to Fire-type moves and raises its Special Attack by 1 stage when hit by a Fire-type move.",
		shortDesc: "This Zelckeymon absorbs Fire attacks that hit it to raise Sp. Atk by 1; Fire immunity.",
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Fire') {
				if (!this.boost({spa: 1})) {
					this.add('-immune', target, '[from] ability: Magmabolism');
				}
				return null;
			}
		},
	},
	livingfire: {
		num: 21,
		name: "Living Fire",
		rating: 2,
		shortDesc: "100% chance a Pokemon making contact with this Pokemon will be burned.",
		onDamagingHit(damage, target, source, move) {
			if (move.flags['contact']) {
					source.trySetStatus('brn', target);
			}
		},
	},
};
