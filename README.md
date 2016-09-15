# gen-array
[![Build Status](https://travis-ci.org/QingWei-Li/gen-array.svg?branch=master)](https://travis-ci.org/QingWei-Li/gen-array)
[![Coverage Status](https://coveralls.io/repos/github/QingWei-Li/gen-array/badge.svg?branch=master)](https://coveralls.io/github/QingWei-Li/gen-array?branch=master)
[![npm](https://img.shields.io/npm/v/gen-array.svg?maxAge=6000)](https://www.npmjs.com/package/gen-array)

> Generate array from loop

## Installation
```shell
npm i gen-array -S
```

## Usage
```javascript
import gen from 'gen-array'

gen(() => ({
  name: 'name',
  age: Math.floor(Math.random() * 20 + 10)
}), 10)
// -> [{ name: 'name', age: 21 }, { name: 'name', age: 28 }, ...], length 10


gen(() => Math.random() * 20, 15)
// -> [2, 6, 18, ...], length 15

gen(i => i + 1, 5)
// -> [1, 2, 3, 4, 5]
```

## Syntax
`gen(fn: Function, [len: Number, ignore: Boolean])`

## Parameters
- fn: function
- len: loop times
- ignore: ignore null and undefined, default true

## License
MIT
