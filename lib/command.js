"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _chalk = require('chalk'); var _chalk2 = _interopRequireDefault(_chalk);
var _inquirer = require('inquirer'); var _inquirer2 = _interopRequireDefault(_inquirer);
var _index = require('./index'); var _index2 = _interopRequireDefault(_index);

console.log(_chalk2.default.bold(_chalk2.default.green(`Welcome to strongify password.`)))

_inquirer2.default
  .prompt([
    {
      type: 'list',
      name: 'length',
      message: 'What length password?',
      choices: [8, 16, 32, 64],
    },
    {
      type: 'confirm',
      name: 'uppercase',
      message: 'Would you like applying the UPPERCASE personalization?',
    },
    {
      type: 'confirm',
      name: 'lowercase',
      message: 'Would you like applying the LOWERCASE personalization?',
    },
    {
      type: 'confirm',
      name: 'number',
      message: 'Would you like applying the NUMBER personalization?',
    },
    {
      type: 'confirm',
      name: 'special',
      message: 'Would you like applying the SPECIAL personalization?',
    },
  ])
  .then((answer) => {
    const userUppercase = () => {
      if (!answer.uppercase) return []

      return [_index.uppercase]
    }

    const useLowercase = (previous) => {
      if (!answer.lowercase) return previous

      return [...previous, _index.lowercase]
    }

    const userNumber = (previous) => {
      if (!answer.number) return previous

      return [...previous, _index.number]
    }

    const useSpecial = (previous) => {
      if (!answer.special) return previous

      return [...previous, _index.special]
    }

    const options = useSpecial(userNumber(useLowercase(userUppercase())))

    if (!options.length) {
      console.log(
        _chalk2.default.bold(_chalk2.default.red('You must choose at least one personalization.'))
      )

      return
    }

    const password = _index2.default.call(void 0, answer.length, ...options)

    console.log(
      _chalk2.default.bold(
        `This is your strongest password ever: ${_chalk2.default.green(password)}`
      )
    )
  })
