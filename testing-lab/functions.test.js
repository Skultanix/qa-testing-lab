const {
    returnTwo,
    greeting,
    add,
    subtract,
    multiply,
    divide
} = require(`./functions`)


// Testing returnTwo
test("the returnTwo function should, well...return 2", () => {
    let returnedTwo = returnTwo()
    expect(returnedTwo).toBe(2)
})

//Testing greeting
test("greeting function with the argument of 'James' should to return 'Hello, James'.", () => {
    expect(greeting('James')).toBe("Hello, James.")
})
test("greeting function with the argument of 'Jill' should to return 'Hello, Jill'.", () => {
    expect(greeting('Jill')).toBe("Hello, Jill.")
})

//Testing the math functions
describe("math function tests", () => {
    test("adding 1 and 2 should return 3", () => {
        expect(add(1, 2)).toBe(3)
    })
    test("adding 5 and 9 should return 14", () => {
        expect(add(5, 9)).toBe(14)
    })
    test("subtracting 7 and 2 should return 5", () => {
        expect(subtract(7, 2)).toBe(5)
    })
    test("subtracting 5 and 4 should return 1", () => {
        expect(subtract(5, 4)).toBe(1)
    })
    test("multipling 7 and 2 should return 14", () => {
        expect(multiply(7, 2)).toBe(14)
    })
    test("multipling 5 and 4 should return 20", () => {
        expect(multiply(5, 4)).toBe(20)
    })
    test("dividing 10 and 2 should return 5", () => {
        expect(divide(10, 2)).toBe(5)
    })
    test("dividing 15 and 5 should return 3", () => {
        expect(divide(15, 5)).toBe(3)
    })
})
