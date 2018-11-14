class Observable {

    observers = [];

    sendMessage(msg) {

        const {observers} =  this;

        observers.forEach((observer)=>{
            observer.notify(msg);
        })

    }

    addObserver(observer) {
        const {observers} =  this;

        observers.push(observer);
    }

}

export default Observable;
