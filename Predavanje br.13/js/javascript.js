/*
function suma () {
    console.log('funkcija je pozvana')
}

function suma(){
    return 2 + 2;
}
let vrednostSuma =suma();

console.log(vrednostSuma);


// sa parametrina

function razlika (a, b) {
    return a - b;
}

let prviBroj = 5;
let drugiBroj = 2;

razlika(10 ,2);

razlika(10 , 2)
*/

const inputPrveVrednosti = document.getElementById('prva_vrednost');
const inputDrugeVrednosti = document.getElementById('druga_vrednost');
const inputTreceVrednosti = document.getElementById('treca_vrednost');
const spanRezultat = document.getElementById('rezultat')


function racSrednjeVrednosti (a ,b ,c, callback) {
    console.log(a ,b , c ,callback);
    let srednjaVrednost = (a + b + c) / 3;
    callback(srednjaVrednost);
}

function odstampajPodatke(rezultat) {
    spanRezultat.innerText = rezultat;
}

function prikaziVrednosti (){
    const a = parseInt(inputPrveVrednosti.value);
    const b = parseInt(inputDrugeVrednosti.value);
    const c = parseInt(inputTreceVrednosti.value);

    racSrednjeVrednosti(a ,b ,c ,odstampajPodatke);
    
}