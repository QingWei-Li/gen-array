import test from 'ava'
import gen from './'

test('type error', t => {
  t.throws(() => gen('a'))
})

test('no specific length', t => {
  t.deepEqual(gen(() => 'name'), ['name'])
})

test('don\'t ignore', t => {
  t.deepEqual(gen(() => {}, 3, false), [undefined, undefined, undefined])
})

test('ignore', t => {
  const arr = gen(i => i % 2 ? null : true, 10)
  t.deepEqual(arr, [true, true, true, true, true])
})

test('object', t => {
  const list = gen(() => ({
    name: 'test',
    age: Math.floor(Math.random() * 20)
  }), 10)

  t.is(list.length, 10)
  list.forEach(i => {
    t.is(i.name, 'test')
    t.true(i.age < 20)
  })
})

test('number', t => {
  const list = gen(() => Math.random() * 20, 15)

  t.is(list.length, 15)
  list.forEach(i => {
    t.true(i < 20)
  })
})
