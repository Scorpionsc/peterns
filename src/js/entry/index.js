import module from '../paterns/module/module';
import singletone from '../paterns/singletone/singletone';
import Observable from '../paterns/observer/Observable';
import Observer from '../paterns/observer/Observer';
import { Catalog, SortStrategy } from '../paterns/strategy/strategy';


(function(){

    // // module example
    // const item = {
    //     name: 'Salt',
    //     price: 20,
    // };
    // const item2 = {
    //     name: 'Sugar',
    //     price: 90,
    // };
    // module.addItem(item);
    // module.addItem(item2);
    // module.printItems();
    //
    // // singletone example
    // const s1 = new singletone();
    // const s2 = new singletone();
    // console.log(s1 === s2);
    // s1.connect();
    //
    //
    // // observer example
    // const observable = new Observable();
    // const observer1 = new Observer( (msg)=>{
    //     console.log(`1: ${msg}`);
    // } );
    // const observer2 = new Observer((msg)=>{
    //     console.log(`2: ${msg}`);
    // });
    //
    // observable.addObserver(observer1);
    // observable.addObserver(observer2);
    //
    // setTimeout(()=>{
    //     observable.sendMessage('Hi!!!');
    // }, 3000);
    //
    //
    // //strategy example
    // class NameSortStrategy extends SortStrategy{
    //     sort = (data)=>{
    //         return data.sort( (a, b)=> ((a.name > b.name)? 1: -1) );
    //     }
    // }
    // class PriceSortStrategy extends SortStrategy{
    //     sort = (data)=>{
    //         return data.sort( (a, b)=> a.price - b.price );
    //     }
    // }
    // class RatingSortStrategy extends SortStrategy{
    //     sort = (data)=>{
    //         return data.sort( ( a, b)=> b.rating - a.rating );
    //     }
    // }
    // const catalog = new Catalog();
    //
    // catalog.setSortStrategy(new NameSortStrategy());
    // catalog.sort();
    //
    // catalog.setSortStrategy(new PriceSortStrategy());
    // catalog.sort();
    //
    // catalog.setSortStrategy(new RatingSortStrategy());
    // catalog.sort();
    //
    //
    //

}());



