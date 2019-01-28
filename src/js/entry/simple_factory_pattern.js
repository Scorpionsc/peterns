import EmployeeFabric from '../paterns/factory';

(function(){

    const employee = new EmployeeFabric();

    const fullTime = employee.create();
    const partTime = employee.create('partTime');
    const temporary = employee.create('temporary');
    const contractor = employee.create('contractor');

    fullTime.say();
    partTime.say();
    temporary.say();
    contractor.say();

}());



