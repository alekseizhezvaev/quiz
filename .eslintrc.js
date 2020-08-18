const a11yOff = Object.keys(require('eslint-plugin-jsx-a11y').rules)
    .reduce((acc, rule) => { acc[`jsx-a11y/${rule}`] = 'off'; return acc; }, {});

module.exports = {
    extends: [
        'airbnb',
    ],
    parser: 'babel-eslint',
    rules: {
        ...a11yOff,
        'react/jsx-filename-extension': [
            1,
            {
                extensions: [
                    '.js',
                    '.jsx',
                ],
            },
        ],
        'react/state-in-constructor': 0,
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 'first'],
        'react/prefer-stateless-function': 0,
        'linebreak-style': 0,
        indent: [
            'error',
            4,
        ],
    },
};
