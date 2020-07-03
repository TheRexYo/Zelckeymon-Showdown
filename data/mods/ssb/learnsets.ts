/* eslint-disable max-len */

export const BattleLearnsets: {[speciesid: string]: LearnsetData} = {
	iderror: {
		learnset: {
			scratch: ["1L1"],
		},
	},
	chomp: {
		learnset: {
			snap: ["1L1"],
		},
		eventData: [
			{generation: 1, level: 5, isHidden: true, moves: ["snap", "junglefang"], pokeball: "cherishball"},
		],
		/*encounters: [
			{generation: 1, level: 5},
		],*/
	},
	zelckey: {
		learnset: {
			scratch: ["1L1"],
		},
		/*eventData: [
			{generation: 3, level: 70, moves: ["sweetscent", "growth", "solarbeam", "synthesis"], pokeball: "pokeball"},
			{generation: 3, level: 10, gender: "M", moves: ["tackle", "growl", "leechseed", "vinewhip"], pokeball: "pokeball"},
			{generation: 5, level: 10, gender: "M", isHidden: true, moves: ["tackle", "growl", "leechseed", "vinewhip"]},
			{generation: 5, level: 1, shiny: 1, ivs: {def: 31}, moves: ["falseswipe", "block", "frenzyplant", "weatherball"], pokeball: "pokeball"},
			{generation: 6, level: 5, moves: ["growl", "leechseed", "vinewhip", "poisonpowder"], pokeball: "cherishball"},
			{generation: 6, level: 5, isHidden: true, moves: ["tackle", "growl", "celebrate"], pokeball: "cherishball"},
		],
		encounters: [
			{generation: 1, level: 5},
		],*/
	},
};
