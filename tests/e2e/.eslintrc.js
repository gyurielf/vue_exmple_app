module.exports = {
    plugins: ['cypress'],
    env: {
        browser: true,
        'cypress/globals': true
    },
    // globals: {
    //     cy: false,
    //     Cypress: false,
    //     describe: false,
    //     context: false,
    //     beforeEach: false,
    //     afterEach: false,
    //     it: false,
    //     assert: false,
    //     expect: false
    // },
    rules: {
        strict: 'off'
    }
};
