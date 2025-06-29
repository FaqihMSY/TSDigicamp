let messages : string = "Hello Wordl!";
const myname : string ="What is your name!";
const age : number = 20;
function fullname(firstname : string , lastname : string ): string {
    return `${firstname} ${lastname}`;
}
console.log(messages);
console.log(myname);
console.log(currencyFormat(age));
console.log("my name is :", fullname(messages,myname));


function currencyFormat(amount : number) : string{
    return new Intl.NumberFormat('id-ID',{
        style :'currency',
        currency : 'IDR'
    }).format(amount)
}