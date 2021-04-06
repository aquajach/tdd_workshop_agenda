# Tdd Workshop
By: Jack Chen 
` `  
` `
` `
` `
` `
` `
` `
` `
` `
` `
` `
` `
` `  
` `
` `
` `
` `
` `
` `
` `
` `
` `
` `
` `
## Traditional Flow
1. Code implementation
2. Test it manually
3. Worry about the code
4. Write a test
5. Relieved (really?)  
` `  
` `
` `
` `
` `
` `
` `
` `
` `
` `
` `
` `
` `  
` `
` `
` `
` `
` `
` `
` `
` `
` `
` `
` `
```
const sortAcs = function (array) {
  return array.sort((a, b) => {
    a > b
  })
}

expect(sortAcs(1, "10", 4)).to.throw(Error) //=> Pass!

expect(sortAcs([1, 2, 4])).to.not.equal(findMax([1, 10, 4])) //=> Pass!

expect(sortAcs([1, 2, 4])).to.eql([4, 1, 2]) //=> Pass!
```
` `  
` `
` `
` `
` `
` `
` `
` `
` `
` `
` `
` `
` `  
` `
` `
` `
` `
` `
` `
` `
` `
` `
` `
` `
### TDD Flow:
1. Write a test
2. Make the test fail properly 
3. Code implementation
4. Verify the implementation by the test
5. Relieved (really!)

```
expect(sortAcs).to.not.throw(Error) //=> the function is defined and exported

expect(sortAcs[]).to.eql([]) //=> the function does not break

expect(sortAcs([1])).to.eql([1]) //=> the easiest test case

expect(sortAcs([10, 4, 1])).to.eql([1, 4, 10]) //=> the most common test case

expect(sortAcs(["a", 1, 2])).to.throw(Error) //=> the edge case
```



