import module from '../paterns/module/module';
import singeltone from '../paterns/singeltone/singeltone';
import Observable from '../paterns/observer/Observable';
import Observer from '../paterns/observer/Observer';


(function(){

    const item = {
        name: 'Salt',
        price: 20,
    };
    const item2 = {
        name: 'Sugar',
        price: 90,
    };
    module.addItem(item);
    module.addItem(item2);
    module.printItems();

    const s1 = new singeltone();
    const s2 = new singeltone();
    console.log(s1 === s2);
    s1.connect();

    const observable = new Observable();
    const observer1 = new Observer( (msg)=>{
        console.log(`1: ${msg}`);
    } );
    const observer2 = new Observer((msg)=>{
        console.log(`2: ${msg}`);
    });

    observable.addObserver(observer1);
    observable.addObserver(observer2);

    setTimeout(()=>{
        observable.sendMessage('Hi!!!');
    }, 3000);



}());



