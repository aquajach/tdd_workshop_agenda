const findMax = function (array) {
  return array.sort((a, b) => {
    a > b
  })
}

expect(findMax(1, "10", 4)).to.throw(Error) //=> Pass!

expect(findMax([1, 2, 4])).to.not.equal(findMax([1, 10, 4])) //=> Pass!

expect(findMax([1, 2, 4])).to.eql([4, 1, 2]) //=> Pass!
