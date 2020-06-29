/* eslint-env jest */

const config = require('./config')

describe('config default', () => {
  test('server port is 3000', () => {
    return config.read()
      .then(res => {
        console.log(res)
        expect(res.server.port).toBe('3000')
      })
  })
})

describe('config values', () => {
  test('server port is from PORT', () => {
    process.env.PORT = 'PORT'
    return config.read()
      .then(res => {
        console.log(res)
        expect(res.server.port).toBe('PORT')
      })
  })
})
