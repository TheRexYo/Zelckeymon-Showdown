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
		desc: `Standard Zelckeymon rules.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656537/">Random Battle Suggestions</a>`,
		],

		mod: 'beta',
		ruleset: ['Standard'],
	},
	{
		name: "Test",
		desc: `No team validation. For testing only.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656537/">Random Battle Suggestions</a>`,
		],

		mod: 'beta',
		ruleset: ['Test'],
	},
];

exports.Formats = Formats;
