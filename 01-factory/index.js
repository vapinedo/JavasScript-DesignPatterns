const employeeTypes = {
    DEVELOPER: 'DEVELOPER',
    TESTER: 'TESTER'
}

function Developer(name) {
    this.name = name
    this.type = "Developer"
}

function Tester(name) {
    this.name = name
    this.type = "Tester"
}

function EmployeeFactory() {
    this.create = (name, type) => {
        switch (type) {
            case employeeTypes.DEVELOPER:   return new Developer(name)
            case employeeTypes.TESTER:      return new Tester(name)
        }
    }
}

function say() {
    console.log('Hi i am ' + this.name + ' and i am a ' + this.type)
}

const employeeFactory = new EmployeeFactory()
const employeeList = []

employeeList.push(employeeFactory.create('Valp', employeeTypes.DEVELOPER))
employeeList.push(employeeFactory.create('John', employeeTypes.TESTER))

employeeList.forEach(employee => say.call(employee))