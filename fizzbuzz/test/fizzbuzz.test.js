const chai = require('chai');
const assert = chai.assert;
const {fizzBuzz} = require('../fizzBuzz')

describe('task 3 solver', () => {
  it('should return fizz if it is divisible by 2 (but not 3)', ()=>{
    assert.deepEqual(fizzBuzz(2), 'fizz')
    assert.deepEqual(fizzBuzz(4), 'fizz')
    assert.deepEqual(fizzBuzz(8), 'fizz')
    assert.deepEqual(fizzBuzz(16), 'fizz')
    assert.deepEqual(fizzBuzz(14), 'fizz')
  })
  it('should return buzz if it is divisible by 3 (but not 2)', ()=>{
    assert.deepEqual(fizzBuzz(3), 'buzz')
    assert.deepEqual(fizzBuzz(9), 'buzz')
    assert.deepEqual(fizzBuzz(15), 'buzz')
    assert.deepEqual(fizzBuzz(21), 'buzz')
  })
  it('should return fizz buzz if it is divisible by both 2 and 3', ()=>{
    assert.deepEqual(fizzBuzz(6), 'fizz buzz')
    assert.deepEqual(fizzBuzz(12), 'fizz buzz')
    assert.deepEqual(fizzBuzz(18), 'fizz buzz')
  })
  it('otherwise should return null', ()=>{
    assert.deepEqual(fizzBuzz(5), null)
    assert.deepEqual(fizzBuzz(11), null)
    assert.deepEqual(fizzBuzz(13), null)
  })
})
