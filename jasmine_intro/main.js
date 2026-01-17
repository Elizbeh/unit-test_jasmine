/* Unit Testing - Grouping with Describe Challenge
* 
* Is there a more reliable way to identify our grouping name?
*
*/

class User {
    firstName
    lastName
    middleName

    constructor(data = {}) {
        this.firstName = data.firstName || ""
        this.lastName = data.lastName || ""
        this.middleName = data.middleName || ""
    }
}

/**
* Test Suite 
*/
describe(`${User.name} Class`, () => {
    describe("Default values", () => {
        it('first name defaults to empty', () => {
        //arrange
    const data = {firstName: null}
    //act
    const model = new User(data)
    //assert
    expect(model.firstName).toBe('')
    })
   
    it('last name defaults to empty', () => {
        const data = {lastName: null}
        const model = new User(data)
        expect(model.lastName).toBe('')
    })
    it('middle name defaults to empty', () => {
        const data = {middleName: null}
        const model = new User(data)
        expect(model.middleName).toBe('')
    })
    })
    
})