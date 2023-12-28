class person{
    constructor(){
        console.log("parent constructor");
    }

    eat(){
        console.log("Eat The Food");
    }

    sleep(){
        console.log("Take a Sleep");
    }
}

class Engineer extends person{
    constructor(branch){
        super();
        this.branch=branch;
        console.log("Child Constructor");
        console.log(`Engineer Is OF ${branch} branch`);
    }

    work(){
        console.log("Do some Coding");
    }
}

let obj1 = new Engineer("COMPUTER");
obj1.eat();
obj1.sleep();
obj1.work();