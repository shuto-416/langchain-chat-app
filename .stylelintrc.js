module.exports = {
    plugins: ['stylelint-scss'],
    extends: [
        'stylelint-config-standard',
        'stylelint-config-prettier',
        'stylelint-config-recess-order',
        'stylelint-prettier/recommended'
    ],
    rules: {
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: ['include', 'mixin', 'each', 'use', 'extend', 'forward', 'if', 'else if', 'else', 'for']
            }
        ],
        'at-rule-no-vendor-prefix': true,
        'comment-no-empty': true,
        'font-family-no-duplicate-names': true,
        'font-family-name-quotes': 'always-where-recommended',
        'font-weight-notation': 'named-where-possible',
        'function-calc-no-invalid': true,
        'function-calc-no-unspaced-operator': true,
        'function-url-quotes': 'always',
        'keyframe-declaration-no-important': true,
        'media-feature-name-no-vendor-prefix': true,
        'no-descending-specificity': null,
        'no-unknown-animations': true,
        'property-no-vendor-prefix': true,
        'selector-attribute-quotes': 'never',
        'selector-max-attribute': 1,
        'selector-max-class': 4,
        'selector-max-combinators': 2,
        'selector-max-compound-selectors': 2,
        'selector-max-type': 0,
        'selector-max-universal': 0,
        'selector-no-vendor-prefix': true,
        'string-quotes': 'single',
        'value-no-vendor-prefix': true,
        'at-rule-empty-line-before': [
            'always',
            {
                except: ['blockless-after-same-name-blockless', 'first-nested'],
                ignore: ['after-comment']
            }
        ],
        'rule-empty-line-before': [
            'always-multi-line',
            {
                except: ['first-nested'],
                ignore: ['after-comment']
            }
        ],
        'no-missing-end-of-source-newline': true,
        "semi": ["error", "never", {"beforeStatementContinuationChars": "never"}],
        "semi-spacing": ["error", {"after": true, "before": false}],
        "semi-style": ["error", "first"],
        "no-extra-semi": "error",
        "no-unexpected-multiline": "error",
        "no-unreachable": "error"
    }
}
