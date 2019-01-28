export default class EmployeeFabric {
    create(type = 'fullTime'){
        let employee = null;

        switch (type){
            case 'partTime':
                employee = new PartTime(type);
                break;
            case 'temporary':
                employee = new Temporary(type);
                break;
            case 'contractor':
                employee = new Contractor(type);
                break;
            default:
                employee = new FullTime(type);
        }

        return employee;
    }
}

class Employee {
    rate = null;

    constructor (type){
        this.type = type;
    }

    say = () => {
        console.log((`${this.type}: rate ${this.rate}/hour`));
    }
}

class FullTime extends Employee {
    rate = '12$';
}

class PartTime extends Employee {
    rate = '10$';
}

class Temporary extends Employee {
    rate = '8$';
}

class Contractor extends Employee {
    rate = '100$';
}