// Funkcije //

/*
//1 primer 

function testFunkcija(prvi, drugi) { 
    document.write(prvi + "je prestigao" + drugi + "u nanometarskoj izradi procesora")
}

testFunkcija("AMD", "Intel");

//2 Primer

function Izracunaj(a, b , c) {
    
    const x = a + b + c;
    
    return x;

}
document.write(Izracunaj(3,6,6));



//3 Primer

let info = ["Marko", "Perisic"];

let priprema = {
    ime:'',
    prezime:'',
}

function parse () {
    priprema.ime = info[0];
    priprema.prezime = info[1];
}

function print () {
    const ime = document.getElementById('ime');
    const prezime = document.getElementById('prezime')

    ime.innerText = priprema.ime;
    prezime.innerText = priprema.prezime;

}

parse();
print();
console.log(priprema);

*/

//4 Primer

let srednjaVrednost = () => {
    const a = 4;
    const b = 2;
    const c = 3;
    
    const suma = a + b + c;
    
    return suma / 3;
    
}

//5 Primer 



//6 Primer 

let num1 = '20',
    num2 = '30.5';

let sum = (+num1) + (+num2);


console.log(sum, typeof String); 