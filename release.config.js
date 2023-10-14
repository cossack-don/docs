// const config = {
//     branches: ['master', 'main'],
//     plugins: [
//         '@semantic-release/commit-analyzer',
//         '@semantic-release/release-notes-generator',
//         '@semantic-release/npm',
//         ['@semantic-release/git', {
//             'assets': ['package.json'],
//             'message': 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
//         }],
//         '@semantic-release/github'
//     ]
// };
//
// module.exports = config;

module.exports = {
    branches: [
        'master',
        {
            name: 'beta',
            prerelease: true
        }
    ],
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        [
            '@semantic-release/changelog',
            {
                changelogFile: 'CHANGELOG.md'
            }
        ],
        '@semantic-release/npm',
        '@semantic-release/github',
        [
            '@semantic-release/git',
            {
                assets: ['CHANGELOG.md', 'dist/**'],
                message: 'chore(release): set `package.json` to ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
            }
        ]
    ]
}