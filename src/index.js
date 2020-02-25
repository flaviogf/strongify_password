export default function strongify(length, ...personalizations) {
  function generate(value) {
    const personalization = choice(personalizations)

    if (value.length < length) {
      return generate(value.concat(personalization()))
    }

    return value
  }

  return generate('')
}

export function uppercase() {
  const values = 'ABCDEFGHIJKLMNOPQRSTUVXWYZ'
  return choice(values)
}

export function lowercase() {
  const values = 'abcdefghijklmnopqrstuvxwyz'
  return choice(values)
}

export function number() {
  const values = '123456789'
  return choice(values)
}

export function special() {
  const values = '!@#$%&*()_+=-'
  return choice(values)
}

function choice(values) {
  return values[Math.floor(Math.random() * values.length)]
}
