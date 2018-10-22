const bitcoin = require('bitcoinjs-lib')

function find(input) {
  let ellipticCurveKeyPair
  let p2pkhAddress

  const isMatch = typeof input === 'function' ? input : (addr) => addr.includes(input)

  do {
    ellipticCurveKeyPair = bitcoin.ECPair.makeRandom()
    const p2pkh = bitcoin.payments.p2pkh({ pubkey: ellipticCurveKeyPair.publicKey })

    p2pkhAddress = p2pkh.address
  } while (!isMatch(p2pkhAddress))

  return {
    publicKey: ellipticCurveKeyPair.publicKey,
    privateKey: ellipticCurveKeyPair.privateKey,
    address: p2pkhAddress,
  }
}

module.exports = find
