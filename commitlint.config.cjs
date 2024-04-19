module.exports = {
  extends: ['@commitlint/config-conventional'],

  rules: {
    'header-max-length': [0],
    'subject-case': [0],
    'subject-full-stop': [0],
    'subject-empty': [2, 'never'],
    'type-case': [2, 'never'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'refactor', 'chore', 'style'],
    ],
  },
};
