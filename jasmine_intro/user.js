class User {
    firstName
    lastName
    middleName

    constructor(data = {}) {
        this.firstName = data.firstName || ""
        this.lastName = data.lastName || ""
        this.middleName = data.middleName || ""
    }

    get fullName() {
        if(this.middleName.length > 0){
            return `${this.firstName} ${this.middleName[0]}. ${this.lastName}`
        }
        return `${this.firstName} ${this.lastName}`
    }

    sayMyName() {
        window.alert(this.fullName)
    }

    getCodeName() {
        const isATestinggod = confirm('Are you a testing god?')
        if(isATestinggod) {
            return 'Testing God!'
        } else {
            return `Scrub skippinbg tests in his best friend's ride`
        }
    }
}

export default User