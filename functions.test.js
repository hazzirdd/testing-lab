require('./functions.js')


test('Check to see if returnTwo returns 2', () => {
    expect(returnTwo()).toEqual(2)
})

describe('Tests for greeting', () => {
    test('greeting should return Hello, plus the given name', () => {
        expect(greeting('James')).toBe('Hello, James')
    })
    test('greeting should return Hello, plus the given name', () => {
        expect(greeting('Jill')).toBe('Hello, Jill')
    })
})

describe('Tests for add', () => {
    test('add should get the sum of two given numbers', () => {
        expect(add(1,2)).toEqual(3)
    })
    test('add should get the sum of two given numbers', () => {
        expect(add(5,9)).toEqual(14)
    })
})

describe('Tests for multiply, divide and subtract', () => {
    test('multiply should get the multiplied value of 2 given numbers', () => {
        expect(multiply(2,10)).toEqual(20)
    })
    test('Divide should get the divided value of 2 given numbers', () => {
        expect(divide(10,2)).toEqual(5)
    })
    test('Subtract should get the subtracted value of 2 given numbers', () => {
        expect(subtract(50,30)).toEqual(20)
    })
    test('Add should take in 2 numbers', () => {
        expect(add(2,2,2)).toEqual(6)
    })
})

test('Add should return an integer', () => {
    expect(typeof add(2,4)).toBe('number')
})

test('greeting should return a string', () => {
    expect(typeof greeting('Hayden')).toEqual('string')
})

