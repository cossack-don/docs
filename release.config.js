const config = {
    branches: ['master'],
    plugins: [
        '@semantic-release/commit-analyzer',{
            "preset": "angular",
            "releaseRules": [
                { "type": "breaking", "release": "major" },
            ],
        },
        '@semantic-release/release-notes-generator',{
            "preset": "angular",
            "releaseRules": [
                { "type": "breaking", "release": "major" },
            ],
        },
        '@semantic-release/npm',
        ['@semantic-release/git', {
            "preset": "angular",
            "releaseRules": [
                { "type": "breaking", "release": "major" },
            ],
            'assets': ['package.json'],
            'message': 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
        }],
        '@semantic-release/github'
    ]
};

module.exports = config;