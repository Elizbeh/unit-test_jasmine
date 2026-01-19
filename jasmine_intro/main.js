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

    describe("Say My Name", () => {
        it("alert the full name of user", () => {
            //arrange
            model.firstName = "Danielle"
            model.lastName = "Charles"
            spyOn(window, "alert")
            
            //act
            model.sayMyName()

            //assert
            expect(window.alert).toHaveBeenCalledWith("Danielle Charles")
        })
    })
    
    describe("get code name", () => {
     it('is a coding god when confirmed', () => {
           //arrange

        spyOn(window, "confirm").and.returnValue(true)

        //act
        const result = model.getCodeName()

        expect(result).toBe("Testing God!")
     })

     it('is a coding scrub when not confirmed', () => {
           //arrange

        spyOn(window, "confirm").and.returnValue(false)

        //act
        const result = model.getCodeName()

        expect(result).toBe(`Scrub skippinbg tests in his best friend's ride`)
     })

     it('asks a user if they are a testing god', () => {
           //arrange

        spyOn(window, "confirm").and.returnValue(true)

        //act
        const result = model.getCodeName()

        expect(window.confirm).toHaveBeenCalledWith('Are you a testing god?')
     })
    })
})



