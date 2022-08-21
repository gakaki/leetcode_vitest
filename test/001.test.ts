import { assert, expect, test } from 'vitest'

test('Math.sqrt()', () => {
  expect(Math.sqrt(4)).toBe(2)
  expect(Math.sqrt(144)).toBe(12)
  expect(Math.sqrt(2)).toBe(Math.SQRT2)
})

test('JSON', () => {
  const input = {
    foo: 'hello1',
    bar: 'world2',
  }

  const output = JSON.stringify(input)

  expect(output).eq('{"foo":"hello1","bar":"world2"}')
  assert.deepEqual(JSON.parse(output), input, 'matches original')
})
