const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const primeFactors = require("../primeFactors").primeFactors;

describe("PrimeFactors", function(){
  it("calculates the prime factors of an integer", function(){


    // expect(primeFactors.of(1)).toEqual([]);
    // expect(primeFactors.of(2)).toEqual([2]);
    // expect(primeFactors.of(3)).toEqual([3]);
    // expect(primeFactors.of(4)).toEqual([2, 2]);
    // expect(primeFactors.of(5)).toEqual([5]);
    // expect(primeFactors.of(6)).toEqual([2, 3]);
    // expect(primeFactors.of(7)).toEqual([7]);
    // expect(primeFactors.of(8)).toEqual([2, 2, 2]);
    // expect(primeFactors.of(9)).toEqual([3, 3]);
    // expect(primeFactors.of(2 * 2 * 3 * 7 * 13 * 23)).toEqual([2, 2, 3, 7, 13, 23]);
    // expect(primeFactors(1)).to.deep.equal([]);
    // expect(primeFactors(2)).to.deep.equal([2]);
    // expect(primeFactors(3)).to.deep.equal([3]);
    // expect(primeFactors(4)).to.deep.equal([2, 2]);
    // expect(primeFactors(5)).to.deep.equal([5]);
    // expect(primeFactors(6)).to.deep.equal([2, 3]);
    // expect(primeFactors(7)).to.deep.equal([7]);
    // expect(primeFactors(8)).to.deep.equal([2, 2, 2]);
    // expect(primeFactors(9)).to.deep.equal([3, 3]);
    // expect(primeFactors(2 * 2 * 3 * 7 * 13 * 23)).to.deep.equal([2, 2, 3, 7, 13, 23]);
    assert.deepEqual(primeFactors(1), [])
    assert.deepEqual(primeFactors(2), [2])
    assert.deepEqual(primeFactors(3), [3]);
    assert.deepEqual(primeFactors(4), [2, 2]);
    assert.deepEqual(primeFactors(5), [5]);
    assert.deepEqual(primeFactors(6), [2, 3]);
    assert.deepEqual(primeFactors(7), [7]);
    assert.deepEqual(primeFactors(8), [2, 2, 2]);
    assert.deepEqual(primeFactors(9), [3, 3]);
    assert.deepEqual(primeFactors(2 * 2 * 3 * 7 * 13 * 23), [2, 2, 3, 7, 13, 23]);
  });
});
