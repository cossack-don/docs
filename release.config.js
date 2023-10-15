const config = {
    branches: ['master'],
    plugins: [
        '@semantic-release/commit-analyzer',{
            "releaseRules": [
                { "tag": "Breaking", "release": "major" },
                { "tag": "Build", "release": "minor" },
                { "tag": "Chore", "release": "minor" },
                { "tag": "Fix", "release": "patch" },
                { "tag": "New", "release": "minor" },
                { "tag": "Update", "release": "minor" },
                { "tag": "Upgrade", "release": "minor" }
            ]
        },
        '@semantic-release/release-notes-generator',
        {"releaseRules": [
                { "tag": "Breaking", "release": "major" },
                { "tag": "Build", "release": "minor" },
                { "tag": "Chore", "release": "minor" },
                { "tag": "Fix", "release": "patch" },
                { "tag": "New", "release": "minor" },
                { "tag": "Update", "release": "minor" },
                { "tag": "Upgrade", "release": "minor" }
            ]},
        '@semantic-release/npm',
        ['@semantic-release/git', {
            'assets': ['package.json'],
            'message': 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
        }],
        '@semantic-release/github'
    ]
};

module.exports = config;