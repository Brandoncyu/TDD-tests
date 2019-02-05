const chai = require('chai');
const assert = chai.assert;
const {removeSNames} = require('../app')

describe('removeSNames', () =>{
  it('should remove all s names', () => {
    const names = ['Scott', 'Courtney', 'Steve']
    // expect(removeSNames(names)).not.toContain('Scott')
    // expect(removeSNames(names)).not.toContain('Steve')
    assert.notInclude(removeSNames(names), 'Scott')
    assert.notInclude(removeSNames(names), 'Steve')
  })

  it('should not remove other names', () =>{
    const names = ['Scott', 'Courtney', 'Wes']
    // expect(removeSNames(names)).toContain('Courtney')
    // expect(removeSNames(names)).toContain('Wes')
    assert.include(removeSNames(names), 'Courtney')
    assert.include(removeSNames(names), 'Wes')
  })

  it('should account for case', () =>{
    const names = ['Scott', 'Courtney', 'Wes', 'scott']
    // expect(removeSNames(names)).not.toContain('Scott')
    // expect(removeSNames(names)).not.toContain('scott')
    assert.notInclude(removeSNames(names), 'Scott')
    assert.notInclude(removeSNames(names), 'scott')
  })
})
