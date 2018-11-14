const singeltone = (function(){

    let instance = null;
    const server = 'localhost';

    return function () {

        this.connect = () => {
            console.log(`Connect ${server}`);
        };

        if(instance) return instance;

        instance = this;

    };

}());

export default singeltone;
