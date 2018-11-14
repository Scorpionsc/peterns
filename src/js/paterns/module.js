
const module = (function () {

    let someItems = [];
    let totalPrice = 0;

    return {
        addItem: (item) => {
            totalPrice += item.price;
            someItems.push(item);
        },
        printItems: () => {
            someItems.forEach( item => {
                console.log(`${item.name}: ${item.price}`);
            } );
        },
    };

}());

export default module;
