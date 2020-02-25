import strongify, { uppercase, lowercase, number, special } from '../src'

describe('strongify should', () => {
  it('return a random string with only uppercase characters when is specified the uppercase personalization', () => {
    const value = strongify(12, uppercase)

    expect(value).toMatch(/^[A-Z]{12}$/)
  })

  it('return a random string with only lowercase characters when is specified the lowercase personalization', () => {
    const value = strongify(12, lowercase)

    expect(value).toMatch(/^[a-z]{12}$/)
  })

  it('return a random string with only numbers characters when is specified the number personalization', () => {
    const value = strongify(12, number)

    expect(value).toMatch(/^\d{12}$/)
  })

  it('return a random string with only special characters when is specified the special personalization', () => {
    const value = strongify(12, special)

    expect(value).toMatch(/^[!@#$%&*)(+=_-]{12}$/)
  })
})
