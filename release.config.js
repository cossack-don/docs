const config = {
    branches: [
        'master',
    ],
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        '@semantic-release/npm',
        ['@semantic-release/git', {
            'assets': ['package.json'],
            'message': 'chore(release): ${nextRelease.version}'
        }],
        '@semantic-release/github'
    ]
};

module.exports = config;