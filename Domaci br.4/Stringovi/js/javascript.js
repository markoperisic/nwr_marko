/*
//Primer 1

let string = "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";
document.write(`<br><strong>${string}</strong><br>`);
document.write(string.indexOf('dog'));


//Primer 2



const textarea = document.getElementById('poruka');

function trim() {
    const tekst = textarea.value;
    const trimovanText = text.trim();
    console.log(trimovanText);
}




//Primer 3

let string = "I love name.";
let novaRec = string.replace('name' ,'Javascript')
document.write(novaRec);

*/

//Primer 4






//Primer 5 

let reg = /@/gi;

let string = 'Th@e quick br@own$fox jumps$ov@er the$lazy$do@g';
let newString =string.replace(reg ,'');


let noviString = newString.split('$');
console.log(noviString);




























