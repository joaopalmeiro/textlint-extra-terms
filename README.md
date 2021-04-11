# textlint-extra-terms

[![npm](https://img.shields.io/npm/v/textlint-extra-terms.svg)](https://www.npmjs.com/package/textlint-extra-terms)

List of extra terms to be used with [textlint](https://github.com/textlint/textlint) and [textlint-rule-terminology](https://github.com/sapegin/textlint-rule-terminology).

## Usage

> .textlintrc

```json
{
  "rules": {
    "terminology": {
      "defaultTerms": true,
      "terms": "./node_modules/textlint-extra-terms/terms.json"
    }
  }
}
```

## Development

- `yarn install`.
- `yarn test`.
- Release: `npx np` ([source](https://github.com/sindresorhus/np/issues/507#issuecomment-807266088)).

## References

- [textlint](https://github.com/textlint/textlint) ([website](https://textlint.github.io/)).
- [textlint-algolia-terms](https://github.com/algolia/textlint-algolia-terms) ([npm](https://www.npmjs.com/package/textlint-algolia-terms)).
- [textlint-rule-terminology](https://github.com/sapegin/textlint-rule-terminology).
- [textlint-tester](https://www.npmjs.com/package/textlint-tester).

## Notes

- [np](https://github.com/sindresorhus/np).
- [proselint](https://github.com/amperser/proselint).
- [LanguageTool](https://languagetool.org/) (alternative to Grammarly).
- [vscode-textlint](https://github.com/taichi/vscode-textlint).
