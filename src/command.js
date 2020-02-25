#!/usr/bin/env node

import chalk from 'chalk'
import inquirer from 'inquirer'
import strongify, { uppercase, lowercase, number, special } from './index'

console.log(chalk.bold(chalk.green(`Welcome to strongify password.`)))

inquirer
  .prompt([
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

      return [uppercase]
    }

    const useLowercase = (previous) => {
      if (!answer.lowercase) return previous

      return [...previous, lowercase]
    }

    const userNumber = (previous) => {
      if (!answer.number) return previous

      return [...previous, number]
    }

    const useSpecial = (previous) => {
      if (!answer.special) return previous

      return [...previous, special]
    }

    const options = useSpecial(userNumber(useLowercase(userUppercase())))

    if (!options.length) {
      console.log(
        chalk.bold(chalk.red('You must choose at least one personalization.'))
      )

      return
    }

    const password = strongify(12, ...options)

    console.log(
      chalk.bold(
        `This is your strongest password ever: ${chalk.green(password)}`
      )
    )
  })
