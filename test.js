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

const vegaLiteTerms = [
	'vega-lite',
	'VEGA-LITE',
	'Vega-lite',
	'vega_lite',
	'VEGA_LITE',
	'Vega_lite',
	'vegalite',
	'VEGALITE',
	'Vegalite',
	'vegaLite',
];

const vegaLiteInvalids = vegaLiteTerms.map((term) => {
	return {
		text: term,
		output: 'Vega-Lite',
		errors: [
			{
				message: `Incorrect usage of the term: “${term}”, use “Vega-Lite” instead`,
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
	// More info: https://github.com/sapegin/textlint-rule-terminology/blob/master/test.js#L198
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
		{
			text: 'Matplotlib',
		},
		{
			text: 'GeoPandas',
		},
		{
			text: 'Vega',
		},
		{
			text: 'Vega-Lite',
		},
		{
			text: 'IPython',
		},
		{
			text: 'SciPy',
		},
		{
			text: 'SymPy',
		},
		{
			text: 'TensorFlow',
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
		// Matplotlib
		{
			text: 'matplotlib',
			output: 'Matplotlib',
			errors: [
				{
					message:
						'Incorrect usage of the term: “matplotlib”, use “Matplotlib” instead',
				},
			],
		},
		{
			text: 'MATPLOTLIB',
			output: 'Matplotlib',
			errors: [
				{
					message:
						'Incorrect usage of the term: “MATPLOTLIB”, use “Matplotlib” instead',
				},
			],
		},
		// GeoPandas
		{
			text: 'geopandas',
			output: 'GeoPandas',
			errors: [
				{
					message:
						'Incorrect usage of the term: “geopandas”, use “GeoPandas” instead',
				},
			],
		},
		{
			text: 'GEOPANDAS',
			output: 'GeoPandas',
			errors: [
				{
					message:
						'Incorrect usage of the term: “GEOPANDAS”, use “GeoPandas” instead',
				},
			],
		},
		{
			text: 'Geopandas',
			output: 'GeoPandas',
			errors: [
				{
					message:
						'Incorrect usage of the term: “Geopandas”, use “GeoPandas” instead',
				},
			],
		},
		// Vega
		{
			text: 'vega',
			output: 'Vega',
			errors: [
				{
					message: 'Incorrect usage of the term: “vega”, use “Vega” instead',
				},
			],
		},
		{
			text: 'VEGA',
			output: 'Vega',
			errors: [
				{
					message: 'Incorrect usage of the term: “VEGA”, use “Vega” instead',
				},
			],
		},
		// Vega-Lite
		...vegaLiteInvalids,
		// IPython
		{
			text: 'ipython',
			output: 'IPython',
			errors: [
				{
					message:
						'Incorrect usage of the term: “ipython”, use “IPython” instead',
				},
			],
		},
		{
			text: 'iPython',
			output: 'IPython',
			errors: [
				{
					message:
						'Incorrect usage of the term: “iPython”, use “IPython” instead',
				},
			],
		},
		{
			text: 'Ipython',
			output: 'IPython',
			errors: [
				{
					message:
						'Incorrect usage of the term: “Ipython”, use “IPython” instead',
				},
			],
		},
		{
			text: 'IPYTHON',
			output: 'IPython',
			errors: [
				{
					message:
						'Incorrect usage of the term: “IPYTHON”, use “IPython” instead',
				},
			],
		},
		// SciPy
		{
			text: 'scipy',
			output: 'SciPy',
			errors: [
				{
					message: 'Incorrect usage of the term: “scipy”, use “SciPy” instead',
				},
			],
		},
		{
			text: 'SCIPY',
			output: 'SciPy',
			errors: [
				{
					message: 'Incorrect usage of the term: “SCIPY”, use “SciPy” instead',
				},
			],
		},
		{
			text: 'Scipy',
			output: 'SciPy',
			errors: [
				{
					message: 'Incorrect usage of the term: “Scipy”, use “SciPy” instead',
				},
			],
		},
		// SymPy
		{
			text: 'sympy',
			output: 'SymPy',
			errors: [
				{
					message: 'Incorrect usage of the term: “sympy”, use “SymPy” instead',
				},
			],
		},
		{
			text: 'SYMPY',
			output: 'SymPy',
			errors: [
				{
					message: 'Incorrect usage of the term: “SYMPY”, use “SymPy” instead',
				},
			],
		},
		{
			text: 'Sympy',
			output: 'SymPy',
			errors: [
				{
					message: 'Incorrect usage of the term: “Sympy”, use “SymPy” instead',
				},
			],
		},
		// TensorFlow
		{
			text: 'tensorflow',
			output: 'TensorFlow',
			errors: [
				{
					message:
						'Incorrect usage of the term: “tensorflow”, use “TensorFlow” instead',
				},
			],
		},
		{
			text: 'TENSORFLOW',
			output: 'TensorFlow',
			errors: [
				{
					message:
						'Incorrect usage of the term: “TENSORFLOW”, use “TensorFlow” instead',
				},
			],
		},
		{
			text: 'Tensorflow',
			output: 'TensorFlow',
			errors: [
				{
					message:
						'Incorrect usage of the term: “Tensorflow”, use “TensorFlow” instead',
				},
			],
		},
	],
});
