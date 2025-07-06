var User = /** @class */ (function () {
    function User(username, firstName, lastName, email, birthday) {
        this.birthday = birthday;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
    }
    Object.defineProperty(User.prototype, "fullname", {
        get: function () {
            return this.firstName + ' ' + this.lastName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "ages", {
        get: function () {
            return (new Date()).getFullYear() - this.birthday.getFullYear();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "newBirthday", {
        set: function (newBirthday) {
            console.log(newBirthday.getFullYear());
            if (newBirthday.getFullYear() >= 2002) {
                console.error("eror pak");
                return;
            }
            this.birthday = newBirthday;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var user1 = new User("johndoe", "John", "Doe", "john@example.com", new Date("2006-05-15"));
console.log("User 1: ".concat(user1.fullname, ", Usia: ").concat(user1.ages));
console.log("Email: ".concat(user1.email));
// Mengubah tanggal lahir menggunakan setter
user1.newBirthday = new Date("2003-12-01");
console.log("User 1 (updated): ".concat(user1.fullname, ", Usia: ").concat(user1.ages));
