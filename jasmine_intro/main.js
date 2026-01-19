import User from "./user.js";

describe(`${User.name} Class`, () => {
    it('exist', () => {
        expect(User).toBeDefined()
    })
    let mockUserService;

    beforeEach(()=> {
        mockUserService = {
            lastId: null,
            user: {},
            getUserById: async function (id) {
                this.lastId = id
                return this.user;
            }
        };
    })

    describe("Default values", () => {
        it('first name defaults to empty', () => {
            const model = new User({ firstName: null });
            expect(model.firstName).toBe('');
        });

        it('last name defaults to empty', () => {
            const model = new User({ lastName: null });
            expect(model.lastName).toBe('');
        });

        it('middle name defaults to empty', () => {
            const model = new User({ middleName: null });
            expect(model.middleName).toBe('');
        });
    })

    describe('Full name', () => {
        let model;

        beforeEach(() =>{
            model = new User({ firstName: "Charle", lastName: "Gabriel" });
        })

        it("middle initial when middle name is defined", () => {
            model.middleName = "June";
            expect(model.fullName).toBe(`${model.firstName} ${model.middleName[0]}. ${model.lastName}`);
        });

        it('when no middle name return just first and last', ()=> {
            model.middleName = '';
            expect(model.fullName).toBe(`${model.firstName} ${model.lastName}`);
        });
    })

    describe("Say My Name", () => {
        it("alerts the full name of user", () => {
            const model = new User({ firstName: "Danielle", lastName: "Charles" });
            spyOn(window, "alert");

            model.sayMyName();

            expect(window.alert).toHaveBeenCalledWith("Danielle Charles");
        });
    })

    describe("get code name", () => {
        let model;

        beforeEach(() => {
            model = new User();
        });

        it('is a coding god when confirmed', () => {
            spyOn(window, "confirm").and.returnValue(true);
            const result = model.getCodeName();
            expect(result).toBe("Testing God!");
        });

        it('is a coding scrub when not confirmed', () => {
            spyOn(window, "confirm").and.returnValue(false);
            const result = model.getCodeName();
            expect(result).toBe(`Scrub skippinbg tests in his best friend's ride`);
        });

        it('asks a user if they are a testing god', () => {
            spyOn(window, "confirm").and.returnValue(true);
            model.getCodeName();
            expect(window.confirm).toHaveBeenCalledWith('Are you a testing god?');
        });
    })

   describe('getMyFullUserData', () => {
    it('passes id to get user', async () => {
        const model = new User({ firstName: "Dylan", lastName: "Israel", id: 1 }, mockUserService);
        
        await model.getMyFullUserData();

        expect(mockUserService.lastId).toBe(1);
    });

    it('returns full user data', async () => {
        const model = new User({ firstName: "Dolan", lastName: "Israel", id: 2 }, mockUserService);

        // Set what the mock service should return
        mockUserService.user = { id: 2, firstName: "Dolan", lastName: "Israel" };

        const result = await model.getMyFullUserData();

        expect(result.id).toBe(2);
        expect(result.firstName).toBe("Dolan");
    });
    });

    describe('additional matchers examples', () => {
        // toBeDefined(), toEqual()
        it('gets full name pieces', () => {
           // arrange
           const firstName = 'Dylan';
           const middleName = 'Christopher';
           const lastName = 'Israel';
           
           // act
           const model = new User({firstName, middleName, lastName});
           
           // assert 
            expect(model.fullNamePieces).toEqual([firstName, middleName, lastName]);
        });
    });
    
    describe('additional matchers testing area', () => {
        it('has my first name', () => {
            // arrange
            const firstName = 'Dylan';
            const lastName = 'Israel';
            
            // act
            const model = new User({firstName, lastName});
            
            // assert
            expect(model.fullName).toMatch(/Dylan/);
        });

    
    })
})
