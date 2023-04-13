module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        sourceType: "module"
    },
    plugins: [
        '@typescript-eslint/eslint-plugin',
        '@typescript-eslint',
        'unused-imports',
        'typescript-sort-keys',
        'sort-keys-fix',
        'react-hooks'
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
        'plugin:jest/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:react-hooks/recommended',
        'prettier'
    ],
    ignorePatterns: [
        '.eslintrc.js',
    ],
    rules: {
        'react/jsx-curly-brace-presence': 'error',
        'react/display-name': 'off',
        'react/react-in-jsx-scope': 'off',
        quotes: ['off', 'single'],
        '@typescript-eslint/array-type': ['error', { default: 'generic', readonly: 'generic' }],
        '@typescript-eslint/class-literal-property-style': ['error', 'fields'],
        '@typescript-eslint/consistent-indexed-object-style': ['error', 'index-signature'],
        '@typescript-eslint/consistent-type-assertions': [
            'error',
            {
                assertionStyle: 'as',
                objectLiteralTypeAssertions: 'never'
            }
        ],
        '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
        '@typescript-eslint/dot-notation': ['error'],
        '@typescript-eslint/explicit-module-boundary-types': ['error'],
        '@typescript-eslint/lines-between-class-members': ['error'],
        '@typescript-eslint/member-ordering': ['error', { default: ['constructor', 'field', 'signature', 'method'] }],
        '@typescript-eslint/method-signature-style': ['error', 'property'],
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-implicit-any-catch': 'error',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/no-loss-of-precision': 'error',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/prefer-for-of': 'error',
        '@typescript-eslint/prefer-includes': 'error',
        '@typescript-eslint/prefer-string-starts-ends-with': 'error',
        '@typescript-eslint/typedef': [
            'error',
            {
                memberVariableDeclaration: true
            }
        ],
        'default-case': 'error',
        eqeqeq: 'error',
        'id-blacklist': 'error',
        'max-depth': 'error',
        'no-catch-shadow': 'error',
        'no-div-regex': 'error',
        'no-else-return': 'error',
        'no-lonely-if': 'error',
        'no-loop-func': 'error',
        'no-mixed-spaces-and-tabs': 'error',
        'no-nested-ternary': 'error',
        'no-proto': 'error',
        'no-restricted-syntax': [
            'error',
            {
                selector: 'TSEnumDeclaration',
                message: "Don't use `enum` as a type."
            }
        ],
        'no-trailing-spaces': 'error',
        'no-useless-concat': 'error',
        'object-shorthand': 'error',
        'prefer-arrow-callback': 'error',
        'prefer-template': 'error',
        yoda: 'error',
        'unused-imports/no-unused-imports': 'warn',
        'unused-imports/no-unused-vars': ['warn'],
        'typescript-sort-keys/interface': 'error',
        'typescript-sort-keys/string-enum': 'error',
        'sort-keys-fix/sort-keys-fix': 'error',
        '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'object', 'type'],
                pathGroups: [
                    {
                        pattern: '{react,react-dom/**,react-router-dom}',
                        group: 'builtin',
                        position: 'before'
                    }
                ],
                pathGroupsExcludedImportTypes: ['builtin'],
                alphabetize: {
                    order: 'asc'
                },
                'newlines-between': 'always'
            }
        ],
        curly: 'error',
        "semi": ["error", "never", {"beforeStatementContinuationChars": "never"}],
        "semi-spacing": ["error", {"after": true, "before": false}],
        "semi-style": ["error", "first"],
        "no-extra-semi": "error",
        "no-unexpected-multiline": "error",
        "no-unreachable": "error"
    }
}
