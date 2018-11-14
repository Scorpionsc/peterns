class Observer {

    constructor(behaviour){
        this.behaviour = behaviour;
    }

    notify(msg){
        this.behaviour(msg);
    }

}

export default Observer;
