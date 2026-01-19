/* Unit Testing - Grouping with Describe Challenge
* 
* Is there a more reliable way to identify our grouping name?
*
*/
import User from "./user.js";
/**
* Test Suite 
*/
describe(`${User.name} Class`, () => {
    let model;
    beforeEach(()=> {
        model = new User()
    })
    describe("Default values", () => {
        it('first name defaults to empty', () => {
        //arrange
            const data = {firstName: null}
            //act
        
            //assert
            expect(model.firstName).toBe('')
            })
        
            it('last name defaults to empty', () => {
                
                expect(model.lastName).toBe('')
            })
            it('middle name defaults to empty', () => {
        
                expect(model.middleName).toBe('')
            })
         })

    describe('Full name', () => {
        beforeEach(() =>{
            model = new User({
                firstName: "Charle",
                lastName: "Gabriel"
            })
            
        })
        it("middle initial when middle name is defined with first name and last name", () => {

            model.middleName = "June"
            const result = model.fullName
            expect(result).toBe(`${model.firstName} ${model.middleName[0]}. ${model.lastName}`)

        })
        it('when no middle name return just first and last', ()=> {
            model.middleName = ''
            const result = model.fullName
            expect(result).toBe(`${model.firstName} ${model.lastName}`)
        })
    })
    
})



