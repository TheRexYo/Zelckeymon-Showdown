export const TypeChart: {[k: string]: TypeData} = {
	Bug: {
		damageTaken: {
			chemical: 3,
			Bug: 0,
			Dark: 0,
			Dragon: 0,
			Electric: 0,
			Light: 0,
			Fighting: 2,
			Fire: 1,
			Wind: 1,
			Ghost: 0,
			Grass: 2,
			Earth: 1,
			Ice: 0,
			Neutral: 0,
			Poison: 1,
			Psychic: 2,
			Rock: 1,
			Steel: 0,
			Water: 0,
		},
		HPivs: {atk: 30, def: 30, spd: 30},
		HPdvs: {atk: 13, def: 13},
	},
	Dark: {
		damageTaken: {
			night: 3,
			Bug: 0,
			Dark: 2,
			Dragon: 0,
			Electric: 0,
			Light: 1,
			Fighting: 1,
			Fire: 0,
			Wind: 0,
			Ghost: 2,
			Grass: 0,
			Earth: 0,
			Ice: 0,
			Neutral: 0,
			Poison: 0,
			Psychic: 3,
			Rock: 0,
			Steel: 0,
			Water: 0,
		},
		HPivs: {},
	},
	Dragon: {
		damageTaken: {
			elemental: 3,
			Bug: 0,
			Dark: 0,
			Dragon: 1,
			Electric: 2,
			Light: 0,
			Fighting: 0,
			Fire: 2,
			Wind: 0,
			Ghost: 0,
			Grass: 2,
			Earth: 0,
			Ice: 1,
			Neutral: 0,
			Poison: 0,
			Psychic: 0,
			Rock: 0,
			Steel: 0,
			Water: 2,
		},
		HPivs: {atk: 30},
		HPdvs: {def: 14},
	},
	Electric: {
		damageTaken: {
			par: 3,
			Bug: 0,
			Dark: 0,
			Dragon: 0,
			Electric: 2,
			Light: 0,
			Fighting: 0,
			Fire: 0,
			Wind: 2,
			Ghost: 0,
			Grass: 0,
			Earth: 1,
			Ice: 0,
			Neutral: 0,
			Poison: 0,
			Psychic: 0,
			Rock: 0,
			Steel: 2,
			Water: 0,
		},
		HPivs: {spa: 30},
		HPdvs: {atk: 14},
	},
	Light: {
		damageTaken: {
			day: 3,
			Bug: 0,
			Dark: 1,
			Dragon: 0,
			Electric: 0,
			Light: 0,
			Fighting: 3,
			Fire: 0,
			Wind: 0,
			Ghost: 2,
			Grass: 0,
			Earth: 0,
			Ice: 0,
			Neutral: 0,
			Poison: 1,
			Psychic: 1,
			Rock: 0,
			Steel: 0,
			Water: 0,
		},
	},
	Fighting: {
		damageTaken: {
			binding: 3,
			Bug: 2,
			Dark: 2,
			Dragon: 0,
			Electric: 0,
			Light: 1,
			Fighting: 0,
			Fire: 0,
			Wind: 1,
			Ghost: 0,
			Grass: 0,
			Earth: 0,
			Ice: 0,
			Neutral: 0,
			Poison: 0,
			Psychic: 1,
			Rock: 2,
			Steel: 0,
			Water: 0,
		},
		HPivs: {def: 30, spa: 30, spd: 30, spe: 30},
		HPdvs: {atk: 12, def: 12},
	},
	Fire: {
		damageTaken: {
			brn: 3,
			Bug: 2,
			Dark: 0,
			Dragon: 0,
			Electric: 0,
			Light: 0,
			Fighting: 0,
			Fire: 2,
			Wind: 2,
			Ghost: 0,
			Grass: 2,
			Earth: 1,
			Ice: 2,
			Neutral: 0,
			Poison: 0,
			Psychic: 0,
			Rock: 1,
			Steel: 2,
			Water: 1,
		},
		HPivs: {atk: 30, spa: 30, spe: 30},
		HPdvs: {atk: 14, def: 12},
	},
	Wind: {
		damageTaken: {
			windstorm: 3,
			Bug: 2,
			Dark: 0,
			Dragon: 0,
			Electric: 1,
			Light: 0,
			Fighting: 2,
			Fire: 0,
			Wind: 0,
			Ghost: 0,
			Grass: 2,
			Earth: 3,
			Ice: 1,
			Neutral: 0,
			Poison: 0,
			Psychic: 0,
			Rock: 1,
			Steel: 0,
			Water: 0,
		},
		HPivs: {hp: 30, atk: 30, def: 30, spa: 30, spd: 30},
		HPdvs: {atk: 12, def: 13},
	},
	Ghost: {
		damageTaken: {
			trapped: 3,
			Bug: 2,
			Dark: 1,
			Dragon: 0,
			Electric: 0,
			Light: 1,
			Fighting: 3,
			Fire: 0,
			Wind: 0,
			Ghost: 1,
			Grass: 0,
			Earth: 0,
			Ice: 0,
			Neutral: 0,
			Poison: 2,
			Psychic: 3,
			Rock: 0,
			Steel: 0,
			Water: 0,
		},
		HPivs: {def: 30, spd: 30},
		HPdvs: {atk: 13, def: 14},
	},
	Grass: {
		damageTaken: {
			powder: 3,
			Bug: 1,
			Dark: 0,
			Dragon: 0,
			Electric: 2,
			Light: 0,
			Fighting: 0,
			Fire: 1,
			Wind: 1,
			Ghost: 0,
			Grass: 2,
			Earth: 2,
			Ice: 1,
			Neutral: 0,
			Poison: 1,
			Psychic: 0,
			Rock: 0,
			Steel: 0,
			Water: 2,
		},
		HPivs: {atk: 30, spa: 30},
		HPdvs: {atk: 14, def: 14},
	},
	Earth: {
		damageTaken: {
			sandstorm: 3,
			Bug: 0,
			Dark: 0,
			Dragon: 0,
			Electric: 3,
			Light: 0,
			Fighting: 0,
			Fire: 0,
			Wind: 0,
			Ghost: 0,
			Grass: 1,
			Earth: 0,
			Ice: 1,
			Neutral: 0,
			Poison: 2,
			Psychic: 0,
			Rock: 2,
			Steel: 0,
			Water: 1,
		},
		HPivs: {spa: 30, spd: 30},
		HPdvs: {atk: 12},
	},
	Ice: {
		damageTaken: {
			hail: 3,
			frz: 3,
			Bug: 0,
			Dark: 0,
			Dragon: 0,
			Electric: 0,
			Light: 0,
			Fighting: 1,
			Fire: 1,
			Wind: 0,
			Ghost: 0,
			Grass: 0,
			Earth: 0,
			Ice: 2,
			Neutral: 0,
			Poison: 0,
			Psychic: 0,
			Rock: 1,
			Steel: 1,
			Water: 0,
		},
		HPivs: {atk: 30, def: 30},
		HPdvs: {def: 13},
	},
	Neutral: {
		damageTaken: {
			Bug: 0,
			Dark: 0,
			Dragon: 0,
			Electric: 0,
			Light: 0,
			Fighting: 0,
			Fire: 0,
			Wind: 0,
			Ghost: 3,
			Grass: 0,
			Earth: 0,
			Ice: 0,
			Neutral: 0,
			Poison: 0,
			Psychic: 0,
			Rock: 0,
			Steel: 0,
			Water: 0,
		},
	},
	Poison: {
		damageTaken: {
			psn: 3,
			tox: 3,
			Bug: 2,
			Dark: 0,
			Dragon: 0,
			Electric: 0,
			Light: 2,
			Fighting: 2,
			Fire: 0,
			Wind: 0,
			Ghost: 0,
			Grass: 2,
			Earth: 1,
			Ice: 0,
			Neutral: 0,
			Poison: 2,
			Psychic: 1,
			Rock: 0,
			Steel: 0,
			Water: 0,
		},
		HPivs: {def: 30, spa: 30, spd: 30},
		HPdvs: {atk: 12, def: 14},
	},
	Psychic: {
		damageTaken: {
			confusion: 3,
			Bug: 1,
			Dark: 1,
			Dragon: 0,
			Electric: 0,
			Light: 0,
			Fighting: 2,
			Fire: 0,
			Wind: 0,
			Ghost: 1,
			Grass: 0,
			Earth: 0,
			Ice: 0,
			Neutral: 0,
			Poison: 0,
			Psychic: 2,
			Rock: 0,
			Steel: 0,
			Water: 0,
		},
		HPivs: {atk: 30, spe: 30},
		HPdvs: {def: 12},
	},
	Rock: {
		damageTaken: {
			sandstorm: 3,
			Bug: 0,
			Dark: 0,
			Dragon: 0,
			Electric: 0,
			Light: 0,
			Fighting: 1,
			Fire: 2,
			Wind: 2,
			Ghost: 0,
			Grass: 1,
			Earth: 1,
			Ice: 0,
			Neutral: 0,
			Poison: 2,
			Psychic: 0,
			Rock: 0,
			Steel: 1,
			Water: 1,
		},
		HPivs: {def: 30, spd: 30, spe: 30},
		HPdvs: {atk: 13, def: 12},
	},
	Steel: {
		damageTaken: {
			psn: 3,
			tox: 3,
			sandstorm: 3,
			Bug: 2,
			Dark: 0,
			Dragon: 2,
			Electric: 0,
			Light: 2,
			Fighting: 1,
			Fire: 1,
			Wind: 2,
			Ghost: 0,
			Grass: 2,
			Earth: 1,
			Ice: 2,
			Neutral: 0,
			Poison: 3,
			Psychic: 2,
			Rock: 2,
			Steel: 2,
			Water: 0,
		},
		HPivs: {spd: 30},
		HPdvs: {atk: 13},
	},
	Water: {
		damageTaken: {
			flood: 3,
			Bug: 0,
			Dark: 0,
			Dragon: 0,
			Electric: 1,
			Light: 0,
			Fighting: 0,
			Fire: 2,
			Wind: 0,
			Ghost: 0,
			Grass: 1,
			Earth: 0,
			Ice: 2,
			Neutral: 0,
			Poison: 0,
			Psychic: 0,
			Rock: 0,
			Steel: 2,
			Water: 2,
		},
		HPivs: {atk: 30, def: 30, spa: 30},
		HPdvs: {atk: 14, def: 13},
	},
};
