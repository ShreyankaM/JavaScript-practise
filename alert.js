alert('enter the value of a')
const prompt = require('prompt-sync')();

let a = prompt("enter the value of a",588);
a=Number.parseInt(a)
alert("you entered the number of type" +(typeof a))
let write = confirm("do you want to write on the page")
if(write)
{
    document.write(a)
}
else{
console.log("please allow me to write")
}
