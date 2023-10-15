const config = {
    branches: ['master'],
    plugins: [
        '@semantic-release/commit-analyzer',{
            "preset": "angular",
            "releaseRules": [
                { "type": "feat", "release": "major" },
            ],
        },
        '@semantic-release/release-notes-generator',
        '@semantic-release/npm',
        ['@semantic-release/git', {
            "releaseRules": [
                { "type": "feat", "release": "major" },
            ],
            'assets': ['package.json'],
            'message': 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
        }],
        '@semantic-release/github'
    ]
};

module.exports = config;