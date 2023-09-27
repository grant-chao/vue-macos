module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ['@nuxtjs', 'plugin:vue/vue3-recommended'],
    parserOptions: {
        ecmaVersion: 13,
        sourceType: 'module'
    },
    plugins: [],
    rules: {
        'no-undef': 'off',
        semi: [2, 'always'],
        indent: ['error', 4, {
            SwitchCase: 1
        }],
        'vue/html-indent': ['error', 4, {
            attribute: 1,
            baseIndent: 1,
            closeBracket: 0,
            alignAttributesVertically: true,
            ignores: []
        }],
        'vue/multi-word-component-names': 'off'
    }
};
