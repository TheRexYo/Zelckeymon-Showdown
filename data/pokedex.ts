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
		- Because Element-based groups allow Zelckeymon of different families (but the same class) to breed, they are the primary means of allowing moves between archetypes.
		- Unique "Special Egg-Groups" also exist. These egg-groups are used to categorize Zelckeymon together, often to bridge gaps between archetypes. However, they can also be used to limit the breeding of certain species by removing the more standard archetypes in favor of special ones.
	*/
	/*Egg Group Archetypes (Gene-Based):
		- Reptile
			- 1 -> Chomposaurian (Chomps, Zelckeys, and many other Dinosaur-like species)
			- 2 -> Saurian (Lizards)
			- 3 -> Serpentine (Snakes)
			- 4 -> Protobirds
		- Bird
			- 1 -> Primitive Birds
		- Arthropod
			- 1 -> Crustacean
		- Amphibian
			- 1 -> Salamander
		- Mammal
			- 1 -> Carnivorid (Feline, Canine, etc.)
	*/
	/*Egg Group Archetypes (Element-Based):
		- Generic*
			- 1 -> Reptile
			- 2 -> Arthropod
			- 3 -> Amphibian
			- 4 -> Mammal
			- 5 -> Bird
		*Archetype numbers in this category apply to all other elemental categories that don't have that number specified as something else.
	*/
	//#01 - Chomp
	chomp: {
		num: 1,
		name: "Chomp",
		//species: "chomp",
		types: ["Grass"],
		genderRatio: {M: 0.5, F: 0.5},
		baseStats: {hp: 35, atk: 30, def: 30, spa: 30, spd: 30, spe: 25}, //TODO: Add common variant with spe and def swapped, hp reduced, and atk increased.
		abilities: {0: "Elemental Force", 1: "Elemental Boost", H: "Bite-Force"},
		heightm: 0.6,
		weightkg: 4.5,
		color: "Green",
		//evos: ["ivysaur"],
		eggGroups: ["Reptile 1", "Forest 1"],
	},
	//#04 - Pyrex
	pyrex: {
		num: 4,
		name: "Pyrex",
		//species: "pyrex",
		types: ["Fire"],
		genderRatio: {M: 0.5, F: 0.5},
		baseStats: {hp: 60, atk: 20, def: 10, spa: 65, spd: 20, spe: 25}, //TODO: Multiply Z-Mon stats by 10 to get P-Mon stats (for now).
		abilities: {0: "Elemental Force", 1: "Elemental Boost", H: "Living Fire"},
		heightm: 0.5,
		weightkg: 6.5,
		color: "Red", //Not sure if this will work.
		//evos: ["ivysaur"],
		eggGroups: ["Reptile 1", "Lava 1"],
	},
	//#07 - Zelckey
	zelckey: {
		num: 7,
		name: "Zelckey",
		//species: "zelckey",
		types: ["Water"],
		genderRatio: {M: 0.5, F: 0.5},
		baseStats: {hp: 20, atk: 10, def: 10, spa: 30, spd: 30, spe: 100}, //TODO: Multiply Z-Mon stats by 10 to get P-Mon stats (for now).
		abilities: {0: "Elemental Force", 1: "Elemental Boost", H: "Momentum"},
		heightm: 0.4,
		weightkg: 2.5,
		color: "Blue", //Not sure if this will work.
		//evos: ["ivysaur"],
		eggGroups: ["Reptile 1", "Ocean 1"],
	},
	//#15 - Spookaburra
	spookaburra: {
		num: 15,
		name: "Spookaburra",
		//species: "spookaburra",
		types: ["Ghost", "Flying"],
		genderRatio: {M: 0.5, F: 0.5},
		baseStats: {hp: 75, atk: 30, def: 5, spa: 30, spd: 20, spe: 10}, //TODO: Multiply Z-Mon stats by 10 to get P-Mon stats (for now).
		abilities: {0: "Frighten", 1: "Haunting", H: "Final Haunt"},
		heightm: 0.4,
		weightkg: 2.5,
		color: "Blue", //Not sure if this will work.
		//evos: ["ivysaur"],
		eggGroups: ["Bird 1", "Graveyard 1"],
	},
	//#86 - Barridor
	barridor: {
		num: 86,
		name: "Barridor",
		//species: "barridor",
		types: ["Steel"],
		genderRatio: {M: 0.5, F: 0.5},
		baseStats: {hp: 45, atk: 15, def: 45, spa: 15, spd: 45, spe: 15}, //TODO: Multiply Z-Mon stats by 10 to get P-Mon stats (for now).
		abilities: {0: "Barricade", H: "Mega-Armor"},
		heightm: 1.4,
		weightkg: 90.7,
		color: "Black", //Not sure if this will work.
		//evos: ["ivysaur"],
		eggGroups: ["Inorganic 1"],
	},
	//#89 - Magmalisk
	magmalisk: {
		num: 89,
		name: "Magmalisk",
		//species: "magmalisk",
		types: ["Fire", "Rock"],
		genderRatio: {M: 0.45, F: 0.55},
		baseStats: {hp: 30, atk: 15, def: 45, spa: 45, spd: 15, spe: 30}, //TODO: Multiply Z-Mon stats by 10 to get P-Mon stats (for now).
		abilities: {0: "Magmabolism", 1: "Living Fire", H: "Specialist"},
		heightm: 1.4,
		weightkg: 45.4,
		color: "Black", //Not sure if this will work.
		//evos: ["ivysaur"],
		eggGroups: ["Lava 1", "Lava 3"], //This Zelckeymon acts as a mediator between amphibians and reptiles due to being both a Salamander and a Snake. Only breeds with Lava Zelckeymon, though.
	},
	//#92 - Conchimp
	conchimp: {
		num: 92,
		name: "Conchimp",
		//species: "blitzphinx",
		types: ["Water", "Fighting"],
		genderRatio: {M: 0.55, F: 0.45},
		baseStats: {hp: 30, atk: 45, def: 15, spa: 15, spd: 45, spe: 30}, //TODO: Multiply Z-Mon stats by 10 to get P-Mon stats (for now).
		abilities: {0: "Hydrophyllic", 1: "Impatient", H: "Specialist"},
		heightm: 1.2,
		weightkg: 31.7,
		color: "Brown", //Not sure if this will work.
		//evos: ["ivysaur"],
		eggGroups: ["Ocean 4", "Battlefield 4"], //This Zelckeymon acts as a mediator between Water mammals and Fighting mammals.
	},
	//#95 - Saparrot
	saparrot: {
		num: 95,
		name: "Saparrot",
		//species: "blitzphinx",
		types: ["Grass", "Flying"],
		genderRatio: {M: 0.45, F: 0.45},
		baseStats: {hp: 10, atk: 35, def: 35, spa: 35, spd: 35, spe: 50}, //TODO: Multiply Z-Mon stats by 10 to get P-Mon stats (for now).
		abilities: {0: "Herbivore", 1: "Vigor", H: "Generalist"},
		heightm: 1.1,
		weightkg: 4.0,
		color: "Brown", //Not sure if this will work.
		//evos: ["ivysaur"],
		eggGroups: ["Forest 5", "Sky 5"], //This Zelckeymon acts as a mediator between Grass birds and Flying birds.
	},
	//#98 - Blitzphinx
	blitzphinx: {
		num: 98,
		name: "Blitzphinx",
		//species: "blitzphinx",
		types: ["Flying", "Fighting"],
		genderRatio: {M: 0.5, F: 0.5},
		baseStats: {hp: 75, atk: 135, def: 30, spa: 135, spd: 30, spe: 135}, //TODO: Multiply Z-Mon stats by 10 to get P-Mon stats (for now).
		abilities: {0: "Blitz Rush", H: "Riddler"},
		heightm: 2.1,
		weightkg: 163.3,
		color: "Brown", //Not sure if this will work.
		//evos: ["ivysaur"],
		eggGroups: ["Battlefield 4", "Sky 4"], //This Zelckeymon acts as a mediator between Flying mammals and Fighting mammals.
	},
};
