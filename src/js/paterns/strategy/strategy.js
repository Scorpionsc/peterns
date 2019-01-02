export class Catalog {

    sortStrategy = {};

    data = [
        { name: 'Cola', price: 60, rating: 2 },
        { name: 'Shoes', price: 1500, rating: 4 },
        { name: 'Phone', price: 6000, rating: 1 },
        { name: 'Hot-Dog', price: 150, rating: 5 },
    ];

    sort = () =>{
        this.data = this.sortStrategy.sort(this.data);
        console.dir(JSON.stringify(this.data));
    };

    setSortStrategy = (s) => {
        this.sortStrategy = s;
    };


}

export class SortStrategy {
    sort = () => {};
}
