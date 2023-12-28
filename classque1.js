let data = "secrete info";
class user{
    constructor(name,email){
       this.name = name;
       this.email = email;
    }

    view_data(){
        try{
            console.log(datata);
           }
           catch(err){
             console.log(err);
           }
       console.log("DATA : ",data);
       
    }
}

class admin extends user{
    constructor(name,email){
        super(name,email);
        this.name = name;
        this.email = email;
    }

    edit_data(){
        data = "some new value";
    }
}

let user1 = new user("Bhavesh","bhavesh@gmail.com");
let user2 = new user("Mahesh","mahesh@gmail.com");
let admin1 = new admin("Admin","admin@gmail.com");