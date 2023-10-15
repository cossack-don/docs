const config = {
    branches: ['master'],
    plugins: [
        '@semantic-release/commit-analyzer',{
            "releaseRules": [
                { "type": "next", "release": "minor" },
            ],
        },
        '@semantic-release/release-notes-generator',
        '@semantic-release/npm',
        ['@semantic-release/git', {
            'assets': ['package.json'],
            'message': 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
        }],
        '@semantic-release/github'
    ]
};

module.exports = config;