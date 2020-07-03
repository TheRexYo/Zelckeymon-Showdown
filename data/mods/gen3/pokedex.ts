export const BattlePokedex: {[speciesid: string]: SpeciesData} = {
	/* TODO List:
		- Correct ID numbers.
		- Add all existing Zelckeymon before making new ones.
		- Properly add Zelckey and Chomp morphs.
	*/
	/* Egg Group Rules:
		- Gene-based groups (such as 'Reptile' and 'Arthropod') are organized into archetypes based on genetic relation. Each family / order has its own number assigned to it.
		- Element-based groups (such as 'Ocean' and 'Storm') are organized into archetypes based on taxonomic class (crustacean, reptilian, etc). Each archetype has a number assigned to it.
	*/
	/* Egg Group Notes:
		- Because Gene-based groups are limited to closely related species, they serve as the primary means of limiting moves to certain archetypes.
		- Becaues Element-based groups allow Zelckeymon of different families (but the same class) to breed, they are the primary means of allowing moves between archetypes.
		- Unique "Special Egg-Groups" also exist. These egg-groups are used to categorize Zelckeymon together, often to bridge gaps between archetypes. However, they can also be used to limit the breeding of certain species by removing the more standard archetypes in favor of special ones.
	*/
	/*Egg Group Archetypes (Gene-Based):
		- Reptile
			- 1 -> Chomposaurian (Chomps, Zelckeys, and many other Dinosaur-like species)
			- 2 -> Saurian (Lizards)
			- 3 -> Serpentine (Snakes)
		- Arthropod
			- 1 -> Crustacean
	*/
	/*Egg Group Archetypes (Element-Based):
		- Generic*
			- 1 -> Reptile
			- 2 -> Arthropod
		
		*Archetype numbers in this category apply to all other elemental categories that don't have that number specified as something else.
	*/
	//#01 - Chomp
	chomp: {
		num: 1,
		name: "chomp",
		species: "Chomp",
		types: ["Grass"],
		genderRatio: {M: 0.5, F: 0.5},
		baseStats: {hp: 30, atk: 30, def: 30, spa: 30, spd: 30, spe: 30}, //TODO: Multiply Z-Mon stats by 10 to get P-Mon stats (for now).
		abilities: {0: "Elemental Force", H: "Elemental Boost"},
		heightm: 0.6,
		weightkg: 4.5,
		color: "Green",
		//evos: ["ivysaur"],
		eggGroups: ["Reptile 1", "Forest 1"],
	},
	//#04 - Zelckey
	zelckey: {
		num: 4,
		name: "zelckey",
		species: "Zelckey",
		types: ["Water"],
		genderRatio: {M: 0.5, F: 0.5},
		baseStats: {hp: 15, atk: 15, def: 15, spa: 45, spd: 15, spe: 60}, //TODO: Multiply Z-Mon stats by 10 to get P-Mon stats (for now).
		abilities: {0: "Elemental Force", H: "Elemental Boost"},
		heightm: 0.4,
		weightkg: 2.5,
		color: "Blue", //Not sure if this will work.
		//evos: ["ivysaur"],
		eggGroups: ["Reptile 1", "Ocean 1"],
	},
	//#10 - Barridor
	barridor: {
		num: 10,
		name: "barridor",
		species: "Barridor",
		types: ["Steel"],
		genderRatio: {M: 0.5, F: 0.5},
		baseStats: {hp: 45, atk: 15, def: 45, spa: 15, spd: 45, spe: 15}, //TODO: Multiply Z-Mon stats by 10 to get P-Mon stats (for now).
		abilities: {0: "Barricade"},
		heightm: 1.4,
		weightkg: 90.7,
		color: "Black", //Not sure if this will work.
		//evos: ["ivysaur"],
		eggGroups: ["Inorganic 1"],
	},
	//#13 - Magmalisk
	magmalisk: {
		num: 13,
		name: "magmalisk",
		species: "Magmalisk",
		types: ["Fire", "Rock"],
		genderRatio: {M: 0.45, F: 0.55},
		baseStats: {hp: 30, atk: 15, def: 45, spa: 45, spd: 15, spe: 30}, //TODO: Multiply Z-Mon stats by 10 to get P-Mon stats (for now).
		abilities: {0: "Magmabolism", H: "Living Fire"},
		heightm: 1.4,
		weightkg: 35.3,
		color: "Black", //Not sure if this will work.
		//evos: ["ivysaur"],
		eggGroups: ["Amphibian 1", "Lava 1"],
	},
};
