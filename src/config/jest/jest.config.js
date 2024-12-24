const esmModules = ['uuid'];

module.exports = {
    rootDir: '../../../',
    // jest.config.js
    setupFiles: ['config/config'],
    setupFilesAfterEnv: ['./src/config/jest/jest.setup.js'],
    transform: {
        '^.+\\.(ts|tsx|js|jsx)$': '@swc/jest',
        '^.+\\.svg$': '<rootDir>/svgTransform.js'
    },
    moduleNameMapper: {
        '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/identity-obj-proxy',
        '^@components(.*)$': '<rootDir>/components$1',
        '^@pages(.*)$': '<rootDir>/pages$1',
        '^@hooks(.*)$': '<rootDir>/context/hooks$1'
    },
    verbose: true,
    collectCoverage: true,
    coveragePathIgnorePatterns: ['<rootDir>/test/test-utils.js'],
    testPathIgnorePatterns: ['<rootDir>/cypress/integration'],
    // ignore cypress
    modulePathIgnorePatterns: ['./cypress'],
    transformIgnorePatterns: [`node_modules/(?!(?:.pnpm/)?(${esmModules.join('|')}))`]
};
