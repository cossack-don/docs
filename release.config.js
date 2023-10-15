const config = {
    branches: ['master'],
    plugins: [
        ["semantic-release-major-tag", {
            "next": ["v${major}-example", "example-${major}.${minor}"],
        }],
        '@semantic-release/commit-analyzer',{
        },
        '@semantic-release/release-notes-generator',{
        },
        '@semantic-release/npm',
        ['@semantic-release/git', {
            'assets': ['package.json'],
            'message': 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
        }],
        '@semantic-release/github'
    ]
};

module.exports = config;