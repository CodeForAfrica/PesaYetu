module.exports = {
  "root": true,
  "parser": "babel-eslint",
  "extends": ["airbnb", "plugin:prettier/recommended", "prettier/react"],
  "env": {
    "browser": true,
    "jest": true
  },
  plugins: ['react-hooks', 'json', 'markdown'],
  "rules": {
    "no-unused-vars": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-filename-extension": [1, { "extensions": [".js"] }],
    "react/prop-types": [2, { ignore: ['classes'] }]
  }
};
