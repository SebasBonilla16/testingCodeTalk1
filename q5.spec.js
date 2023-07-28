/*Describe funciton is a test suite block used to group related test cases
together. First argument describes the suite often used to provide context for
the tests within it. */
describe('My First Test', () => {
  /* It is used to define an individual test. Represents a single scenario that 
  you want to test */
  it('Does not do much!', () => {
    /* Expect function is used to make assertions about values or conditions in your tests.
    The .to.equal is used to assert that the actual value on the left side is equal to the expected value on the right side */
    expect(true).to.equal(true)
  })
})