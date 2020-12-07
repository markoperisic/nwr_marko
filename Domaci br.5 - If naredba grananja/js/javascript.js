// 1.

// let x = 5;
// let y = 6;

// if ( x > y ) {
//     document.write(`Broj ${x} je veci od broja ${y}`);
// }else  {
//     document.write(`Broj ${y} je veci od broja ${x}`);
// }

//2.

// let temp = 5;

// if ( temp > 0) {
//     document.write(`Temperatura ${temp} je u plusu`);
// }else if (temp >= 0) {
//     document.write(`Temperatura je u plusu`);
// }else {
//     document.write(`Temperatura je u minusu`);
// }

//3.

// let pol = prompt('Uneti pol');


// if ( pol == "musko") {
//     document.body.style.backgroundColor = 'red';
// }else if ( pol== "zensko") {
//     document.write('Zensko');
// }



//4. 

// let datum = new Date().getHours();

// let vreme  = datum < 12 ? 'Trenutno je jutro' : 'Trenutno je prepodne';

// console.log(datum , vreme);


//5.

// let godina = new Date().getUTCFullYear();

// let godina1 = '1987';



// if ( godina - godina1 >= 18) {
//     document.write(`Osoba je punoletna`);
// }else {
//     document.write(`Osoba je maloletna`);
// }

//6. 

// let a = 6;
// let b = 15;
// let c = 12;

// if(a>b && a>c){
//     document.write(`Najveci broj  je broj a ${a}`);
//   }else if(b>c && b>a){
//     document.write(`Najveci broj je broj b ${b}`);
//   }else if (c>a && c>b){
//     document.write(`Najveci broj je broj c ${c}`);
//   }else {
        
//   }


//7.

// let bod = prompt('Uneti broj bodova');

// if ( bod >=90 ) {
//     document.write(`Ucenik je dobio 10 sa ${bod} poena.`);
// }else if ( bod >=80) {
//     document.write(`Ucenik je dobio 9 sa ${bod} poena.`);
// }else if ( bod >=70) {
//     document.write(`Ucenik je dobio 8 sa ${bod} poena.`);
// }else if ( bod >=60) {
//     document.write(`Ucenik je dobio 7 sa ${bod} poena.`);
// }else if ( bod >=50) {
//     document.write(`Ucenik je dobio 6 sa ${bod} poena.`);
// }else {
//     document.write(`Ucenik nije polozio ispit sa ${bod} poena.`);
// }




//8. 

// let dan = new Date().getDay();

// console.log(dan);
     
// if (dan == 0) {
//     document.write(`Danas je nedelja i neradni je dan`);
// }else if (dan == 6) {
//     document.write('Danas je subota i neradni je dan');
// }else {
//     document.write('Danas je radni dan');
// }

//9.


// let vreme = new Date().getHours();

// if (vreme < 12 ) {
//     document.write(`Tacno je ${vreme} ,dobro jutro!`);
// }else if ( vreme <  18) {
//     document.write(`Tacno je ${vreme} ,dobar dan!`);
// }else {
//     document.write(`Tacno je ${vreme} ,dobro vece!`)
// }

//10.

// let datum1 = new Date('2020-12-19 13:25:00');
// let datum2 = new Date('2020-12-30 20:25:00');

// if (datum1 < datum2) {
//     document.write(`Datum ${datum2.toLocaleDateString()} je raniji datum.`);
// }else  {
//     document.write(`Datum ${datum1.toLocaleDateString()} je raniji datum.`);
// }

//11.

// let vreme = new Date().getHours();

// if (vreme >=9 && vreme <= 17 ) {
//     document.write(`Tacno je ${vreme} i radno je vreme firme.`)
// }else { 
//     document.write(`Trenutno je ${vreme} i firma je zatvorena.`)
// }

//12.

// let array1 = [8,9,10,11,12,13,14,15,16,17];
// let array2 = [9,10,11,12,13,14,15,16,17];

// let checker = (arr, target) => target.every(v => arr.includes(v));

// if(checker(array1, array2)){
// document.write("poklapaju se");
// } else {
// document.write("ne poklapaju")
// }

//13.

// let x =13 ;

// if ( x % 2 === 0 ) {
//     document.write(`Rezultat je ${x} i ovaj  broj je paran`);
// }else {
//     document.write(`Rezultat je ${x} i ovaj broj je neparan`);
// }

//14.

// let x = 10;

// if ( x % 3 ==0 ) {
//     document.write(`${x} je deljiv sa 3`);
// }else {
//     document.write(`${x} nije deljiv sa 3`);
// }

//15.

// let x = 10;
// let y = 15;

// let z = x - y;
// let d = y - x;

// if ( x < y ) {
//     document.write(`Broj ${y} je veci od broja ${x} i njihov rezultata oduzimanjem je ${d}.`);
// }else {
//     document.write(`Broj ${x} je veci od broja ${y} i njohov rezultata oduzimanjem je ${z}.`);
// }


//16.

// let x = 5
 

// if ( x > 0 ) {  
//     }if (y =x+1) {
//     document.write(`Broj ${x} je veci od nule i njegov sledbenik je:${y}`)
//     }else if(x <= 0) {
//     }else if (y = x - 1) {
//         document.write(`Broj ${x} je manji ili jednak  nuli i njegov predhodnik je: ${y} `)
//     }else {

//     }
    
 
//17.


// let a = 50;
// let b = 20;
// let c = 15;

// if (a < b && a < c){
// 	document.write('najmanji je a=', a);
// 	if (b < c){
//   	document.write( 'srednji je b=', b);
//     document.write(' najveci je c=', c);
//   }else {
//   	document.write(' srednji je c=', c);
//     document.write( 'najveci je b=', b);
//   }
// }
// if (b < a && b < c){
// 	document.write('najmanji je b=', b);
// 	if (a < c){
//   	document.write(' srednji je a=', a);
//     document.write(' najveci je c=', c);
//   }else {
//   	document.write(' srednji je a=', c);
//     document.write( 'najveci je c=', a);
//   }
// }
// if (c < a && c < b){
// 	document.write('najmanji je c=', c);
// 	if (a < b){
//   	document.write(' srednji je a=', a);
//     document.write(' najveci je b=', b);
//   }else {
//   	document.write(' srednji je b=', b);
//     document.write( 'najveci je a=', a);
//   }
// }

//18.

// let broj = 5;
// Number.isInteger(broj);

// if (Number.isInteger(broj)){
//     document.write("Ceo");
//     } else {
//     document.write("Nije ceo")
//     }

//19.



// let a = 20;
// let b = 7;
// let c = 11;

// if (a < b && a < c){
// 	document.write('najmanji je a=', a);
// 	if (b < c){
//   	document.write( 'srednji je b=', b);
//     document.write(' najveci je c=', c);
//   }else {
//   	document.write(' srednji je c=', c);
//     document.write( 'najveci je b=', b);
//   }
// }
// if (b < a && b < c){
// 	document.write('najmanji je b=', b);
// 	if (a < c){
//   	document.write(' srednji je a=', a);
//     document.write(' najveci je c=', c);
//   }else {
//   	document.write(' srednji je a=', c);
//     document.write( 'najveci je c=', a);
//   }
// }
// if (c < a && c < b){
// 	document.write('najmanji je c=', c);
// 	if (a < b){
//   	document.write(' srednji je a=', a);
//     document.write(' najveci je b=', b);
//   }else {
//   	document.write(' srednji je b=', b);
//     document.write( 'najveci je a=', a);
//   }
// }





// //20.

// let broj = 16;
// let broj1= 20;

// let prvi= Number.isInteger(broj);
// let drugi = Number.isInteger(broj1);

// if ( prvi > drugi ) {  
//     if (prvi %2 ===0) {
//         document.write(`Broj ${prvi} je paran`)
//     }else {
//         document.write(`Broj ${prvi} nije paran`);
//     }
// }else{
//     if ( drugi %2 ===0) {
//         document.write(`Broj  je paran`)
//     }else {
//         document.write(`Broj  nije paran `)
//     }
// }   
    
   


       


//21.

// let a = 9;
// let b = 4;
// let c = 3;

// if ( a >b && a >c) {
//     document.write(`Najveci broj je ${a}`);
// }else if (b > a && b >c) {
//     document.write(`Najveci bro je ${b}`);
// }else {
//     document.write(`Najveci broj je ${c}`);
// }


//22.

// let temp = 15;

// if ( temp <= -15){
//     document.write(`ekstremna temperatura`)
// }else if ( temp >= 40) {
//     document.write(`ekstremna temperatura`)
// }else {
//     document.write(`temperatura je normalna`)
// }

//23.

// let godina = new Date().getFullYear();

// if (( godina % 100 ==0) && ( godina % 400 ==0 ) || (godina % 4 ==0 )) {
//     document.write(`Godina je prestupna`);
// }


//24.


// let doktor1 = [8,9,10,11,12,13,14,15,16,17];
// let doktor2 = [9,10,11,12,13,14,15,16,17];

// let checker = (arr, target) => target.every(v => arr.includes(v));

// if(checker(doktor1, doktor2)){
// document.write("poklapaju se");
// } else {
// document.write("ne poklapaju")
// }



//25.


// let a = 90;
// let b = 60;
// let c = 100;

// if ( a >b && a >c) {
//     document.write(`Najveci broj je ${a}`);
// }else if (b > a && b >c) {
//     document.write(`Najveci bro je ${b}`);
// }else {
//     document.write(`Najveci broj je ${c}`);
// }


//26.

// let now = new Date().getHours();
// let day = new Date().getDay();


// if (day > 0 && day <6 ) {

// if (now >= 9 && now <= 20) {
// document.write('Otvoreno')
// } else {
// document.write('Zatvoreno')
// }
// } else {
// if (now >= 10 && now <= 18) {
// document.write('Otvoreno')
// } else {
// document.write('Zatvoreno')
// }
// }