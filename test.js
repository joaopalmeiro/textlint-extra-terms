const TextLintTester = require('textlint-tester');
const textlintRuleTerminology = require('textlint-rule-terminology');

const d3Terms = [
	'd3',
	'd3.js',
	'd3js',
	'd3 js',
	'D3.js',
	'D3js',
	'D3 js',
	'd3.JS',
	'd3JS',
	'd3 JS',
	'D3.JS',
	'D3JS',
	'D3 JS',
];
const d3Invalids = d3Terms.map((term) => {
	return {
		text: term,
		output: 'D3',
		errors: [
			{
				message: `Incorrect usage of the term: “${term}”, use “D3” instead`,
			},
		],
	};
});

const tester = new TextLintTester();

const testConfig = {
	rules: [
		{
			ruleId: 'rule-terminology',
			rule: textlintRuleTerminology,
			options: {
				terms: './terms.json',
			},
		},
	],
};

tester.run('extra-terms', testConfig, {
	valid: [
		{
			text: 'D3',
		},
		{
			text: 'Altair',
		},
		{
			text: 'NumPy',
		},
	],
	invalid: [
		// D3
		...d3Invalids,
		// Altair
		{
			text: 'altair',
			output: 'Altair',
			errors: [
				{
					message:
						'Incorrect usage of the term: “altair”, use “Altair” instead',
				},
			],
		},
		{
			text: 'ALTAIR',
			output: 'Altair',
			errors: [
				{
					message:
						'Incorrect usage of the term: “ALTAIR”, use “Altair” instead',
				},
			],
		},
		// NumPy
		{
			text: 'numpy',
			output: 'NumPy',
			errors: [
				{
					message: 'Incorrect usage of the term: “numpy”, use “NumPy” instead',
				},
			],
		},
		{
			text: 'NUMPY',
			output: 'NumPy',
			errors: [
				{
					message: 'Incorrect usage of the term: “NUMPY”, use “NumPy” instead',
				},
			],
		},
		{
			text: 'Numpy',
			output: 'NumPy',
			errors: [
				{
					message: 'Incorrect usage of the term: “Numpy”, use “NumPy” instead',
				},
			],
		},
	],
});
