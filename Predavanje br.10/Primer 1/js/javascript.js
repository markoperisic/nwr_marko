/*
let h2 = document.getElementById('title');
h2.style.color = 'red';

console.log(h2);
*/
// Objekti 
// key : value
let osobaA = {
    ime:'Marko',
    prezime:'Perisic',
    visina: 180,
    tezina:80,
    ocene: {
        predmet1:10,
        predmet2:5,
        predmet3:8,
    }
};

//pristupanje vrednosti objekta
/*
osobaA.prezime;
console.log(osobaA.prezime);
console.log(osobaA.ime);

console.log(osobaA.ocene.predmet2);

let automobil = {
    godinaProizvodnje: 2018,
    model: '',
    proizvodjac: '',
    boja: ''
}

automobil.model = 'E46';
automobil.boja = 'crvena'

//selekcija emlemenata

let spanProizvodjac = document.getElementById('proizvidjac');

spanProizvodjac.innerText = automobil.model;

console.log(`model automobila je: ${automobil.model}`);
*/
let osoba = {
    ime: 'Stefan',
    prezime: 'Jovanovic',
    godinaRodjenja: 1990,
    hobi: 'Gaming',
    omiljenaBoja:'Crvena'
}

let spanIme = document.getElementById('ime');
spanIme.innerText = osoba.ime;

let spanPrezime = document.getElementById('prezime');
spanPrezime.innerText = osoba.prezime;

let spanGodinaRodjenja = document.getElementById('godinaRodjenja');
spanGodinaRodjenja.innerText = osoba.godinaRodjenja;

let spanHobi = document.getElementById('hobi');
console.log(spanHobi);
spanHobi.innerText = osoba.hobi;

let spanOmiljenaBoja = document.getElementById('omiljenaBoja')
spanOmiljenaBoja.innerText = osoba.omiljenaBoja;


/* Nizovi */

let niz = []; //prazan niz 
// 0 , 1 ,2 ..n-1 
niz = [1 , 2 , 3 , 4 , 5 , 6 , 7, 8, 9,10];

console.log(niz[9]);
niz[9] = 'Poslednji broj u nizu';

console.log(niz[9], niz[2]);