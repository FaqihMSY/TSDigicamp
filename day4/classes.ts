interface User {
    username :string;
    firstName :string;
    lastName :string;
    email:string;
    birthday:Date;

}

class User implements User{
    public username :string;
    public firstName :string;
    public lastName :string;
    public email:string;
    public birthday:Date;
    constructor(username :string,  firstName :string,lastName :string, email:string,birthday:Date){
        this.birthday=birthday;
        this.email=email;
        this.firstName=firstName;
        this.lastName=lastName;
        this.username=username;
    }
    get fullname(){
        return this.firstName+' '+this.lastName;
    }
    get ages(){
        return (new Date()).getFullYear() - this.birthday.getFullYear();
    }
    set newBirthday(newBirthday:Date){
        console.log(newBirthday.getFullYear());
        if(newBirthday.getFullYear()>=2002){
            console.error("eror pak");
            return ;
        }
        this.birthday=newBirthday;
    }
    
}

const user1 = new User(
   "johndoe",
    "John",
    "Doe",
    "john@example.com",
     new Date("2006-05-15") 
);
console.log(`User 1: ${user1.fullname}, Usia: ${user1.ages}`);
console.log(`Email: ${user1.email}`);

// Mengubah tanggal lahir menggunakan setter
user1.newBirthday = new Date("2003-12-01");
console.log(`User 1 (updated): ${user1.fullname}, Usia: ${user1.ages}`);