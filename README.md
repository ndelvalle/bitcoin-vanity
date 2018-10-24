# bitcoin-vanity

This is a naive implementation to generate a bitcoin vanity address. This operation runs in a synchronous way blocking the event loop. This project is a proof of concept to play around with bitcoin concepts.


## Install

```bash
$ npm install --save bitcoin-vanity
```

```bash
$ yarn add bitcoin-vanity
```

## Use

```js
const vanity = require('bitcoin-vanity')

const pattern = `1N`
const identity1 = vanity(pattern) // identity is an object with a private and public key and an address


const isMatch = (addr) => addr.toLowerCase().startsWith(pattern)
const identity2 = vanity(isMatch) // identity is an object with a private and public key and an address
```

## Test

```bash
npm run test
```
