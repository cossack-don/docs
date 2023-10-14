module.exports = {extends: ['@commitlint/config-conventional'],

    // https://github.com/conventional-changelog/commitlint/issues/2112
    rules: {
        'body-max-line-length': [0, 'always'] // Make sure there is never a max-line-length by disabling the rule
    },
}
