const myFilter = require('./task1')

describe("myFilter function: ", () => {

    let array

    beforeEach(() => {
        array = [false, 42, 0, "", true, null, "hello"];
    })

    test("should be defined", () => {
        expect(myFilter).toBeDefined()
    })

    test("should not has falsy values", () => {
        const result = [42, true, "hello"];
        expect(array.myFilter(val => !!val)).toEqual(result)
    })
})