"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function strongify(length, ...personalizations) {
  function generate(value) {
    const personalization = choice(personalizations)

    if (value.length < length) {
      return generate(value.concat(personalization()))
    }

    return value
  }

  return generate('')
} exports.default = strongify;

 function uppercase() {
  const values = 'ABCDEFGHIJKLMNOPQRSTUVXWYZ'
  return choice(values)
} exports.uppercase = uppercase;

 function lowercase() {
  const values = 'abcdefghijklmnopqrstuvxwyz'
  return choice(values)
} exports.lowercase = lowercase;

 function number() {
  const values = '123456789'
  return choice(values)
} exports.number = number;

 function special() {
  const values = '!@#$%&*()_+=-'
  return choice(values)
} exports.special = special;

function choice(values) {
  return values[Math.floor(Math.random() * values.length)]
}
