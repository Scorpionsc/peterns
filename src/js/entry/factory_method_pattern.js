import {
    FullTime,
    PartTime,
    Temporary,
    Contractor
} from '../paterns/factoryMethod';

(function(){

    const fullTime = new FullTime();
    const partTime = new PartTime();
    const temporary = new Temporary();
    const contractor = new Contractor();

    fullTime.getInfo();
    partTime.getInfo();
    temporary.getInfo();
    contractor.getInfo();

}());



