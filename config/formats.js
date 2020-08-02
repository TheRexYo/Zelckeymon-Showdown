'use strict';

// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.js

/**@type {(FormatsData | {section: string, column?: number})[]} */
const Formats = [

	// Sw/Sh Singles
	///////////////////////////////////////////////////////////////////

	{
		section: "Main",
	},
	{
		name: "Standard",
		section: "Main",
		desc: 'Standard Zelckeymon rules.',
		threads: [
			'&bullet; <a href="https://www.smogon.com/forums/threads/3656537/">Random Battle Suggestions</a>',
		],

		mod: 'gen8',
		ruleset: ['Obtainable', 'Nickname Clause', 'OHKO Clause', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "Test",
		section: "Other",
		desc: 'No team validation. For testing only.',
		threads: [
			'&bullet; <a href="https://www.smogon.com/forums/threads/3656537/">Random Battle Suggestions</a>',
		],

		mod: 'gen8',
		ruleset: ['HP Percentage Mod', 'Team Preview', 'Cancel Mod'],
	},
];

exports.Formats = Formats;
