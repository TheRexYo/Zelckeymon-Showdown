export const BattleItems: {[itemid: string]: ItemData} = {
	bronzebell: {
		num: 1,
		gen: 1,
		id: "bronzebell",
		name: "Bronze Bell",
		spritenum: 2,
		fling: {
			basePower: 15,
		},
		onDamagingHit(damage, target, source, move) {
			if (move.type === 'Fire') {
				target.useItem();
			}
		},
		boosts: {
			spa: 3,
		},
		desc: "Raises holder's Sp. Atk by 3 stages if hit by a Fire-type attack. Single use.",
	},
	redfern: {
		num: 2,
		gen: 1,
		id: "redfern",
		name: "Red Fern",
		spritenum: 2,
		fling: {
			basePower: 15,
		},
		onDamagingHit(damage, target, source, move) {
			if (move.type === 'Dark') {
				target.useItem();
			}
		},
		boosts: {
			spa: 3,
		},
		desc: "Raises holder's Sp. Atk by 3 stages if hit by a Dark-type attack. Single use.",
	},
};
