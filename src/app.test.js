/* eslint-env jest */

const app = require('./app')

describe('app', () => {
  test('returns the configured app', () => {
    return app()
      .then(res => {
        expect(res).not.toBe(undefined)
      })
  })
})
