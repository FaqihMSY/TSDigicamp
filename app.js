var messages = "Hello Wordl!";
var myname = "What is your name!";
var age = 20;
function fullname(firstname, lastname) {
    return "".concat(firstname, " ").concat(lastname);
}
console.log(messages);
console.log(myname);
console.log(currencyFormat(age));
console.log("my name is :", fullname(messages, myname));
function currencyFormat(amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR'
    }).format(amount);
}
