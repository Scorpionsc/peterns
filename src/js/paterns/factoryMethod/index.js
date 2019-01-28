class Employee {
    getInfo = () => {}
}

export class FullTime extends Employee {
    rate = '12$';

    getInfo = () => {
        console.log((`FullTime: rate ${this.rate}/hour`));
    }
}

export class PartTime extends Employee {
    rate = '10$';

    getInfo = () => {
        console.log((`PartTime: rate ${this.rate}/hour`));
    }
}

export class Temporary extends Employee {
    rate = '8$';

    getInfo = () => {
        console.log((`Temporary: rate ${this.rate}/hour`));
    }
}

export class Contractor extends Employee {
    rate = '100$';

    getInfo = () => {
        console.log((`Contractor: rate ${this.rate}/hour`));
    }
}

