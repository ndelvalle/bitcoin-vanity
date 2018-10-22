/* global describe it */

const assert = require('assert')
const vanity = require('../lib')

describe('Bitcoin vanity address', () => {
  it('exposes a functions when requiring the library', () => {
    assert.equal(typeof vanity, 'function')
  })

  it('find an address that contains the given input', () => {
    const pattern = `1N`
    const identity = vanity(pattern)

    assert.ok(identity.address.includes(pattern))
  })

  it('find an address that match using a matching function', () => {
    const pattern = `1ni`
    const isMatch = (addr) => addr.toLowerCase().startsWith(pattern)
    const identity = vanity(isMatch)

    assert.ok(isMatch(identity.address))
  })
})
