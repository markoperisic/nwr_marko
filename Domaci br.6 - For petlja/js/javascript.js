// //Zadatak 1.

// for ( let i=1 ; i<=20 ;i++) {
//     console.log('Brojevi' , i);
// }

//Zadatak 2.

// for ( let  i=20 ; i > 0 ;i--) {
//     console.log('Brojevi' ,i)
// }

//Zadatak 3.



// for ( let i=1 ; i<= 20 ; i++) {
//    if (i % 2 === 0){
//        console.log('Parni brojevi',i);
//    }

// }


//Zadatak 4.

// for ( let i =5 ; i <=15 ;i++) {
//     console.log(`${i*2}`);
// }

//Zadatak 5.

// const brojevi = prompt('Unesite do kog broja zelite da odredite sumu');

// let suma = 0;

// for ( let i = 1; i <=100 ;i ++) {
//     suma +=i;
//     console.log('za inkremenet: ', i, ' suma je: ', suma);
// }

//Zadatak 6.

// const broj = prompt('Unesite do kog broja zelite da odredite sumu');

// let suma = 0;

// for ( let i=1; i<=broj ;i++) {
//     suma +=i;
//     console.log('za inkremenet: ', i, ' suma je: ', suma);
// }

//Zadatak 7.

// const n = parseInt(prompt('Uneti vrednost za N'));
// const m = parseInt(prompt('Uneti vrednost za M'));

// let suma = 0;

// for ( let i =n ;i <= m ; i++) {
//     suma +=i;
// }

// document.write(`Suma svih brojeva od ${n} do ${m} je ${suma}`);

//Zadatak 8.

// const n = parseInt(prompt('Uneti vrednost za N'));
// const m = parseInt(prompt('Uneti vrednost za M'));

// let proizvod  = n*m;

// for ( let i =n ;i <= m ; i++) {
//     proizvod +=i;
// }

// document.write(`Prozivod brojeva od ${n} do ${m} je ${proizvod}`);

//Zadatak 9.



// let n=2;
// let m=5;
// let suma = 0;


// for (let i = n; i <= m; i++){
// suma += Math.pow(i,2);
// console.log('Suma kvadrata brojeva izmedju n i m je ', suma);
// }




//10.
 
// function imgloop()
//   {
//     let ar = [];
//     ar.push("assets/1.jpg");
//     ar.push("assets/2.jpg");
//     ar.push("assets/3.jpg");

//     for (i = 0; ar.length > i; i++)
//     {
//       var img = new Image(200, 200);
//       img.src = ar[i];

//       var src = document.getElementById("elementid");
//       src.appendChild(img);
//     }

//   }

// //Zadatak 11.

// let j=0;

// for ( let i=1 ;i<=30;i++){
//    if(i%9==0) { 
//       j+=i;
//  }
//  console.log(j);
// }

//Zadatak 12.

// let j=1;

// for ( let i=20 ;i <= 100; i++) {
//    if (i%11==0) {
//       j*=i;
//    }
//    console.log(j);
// }

//Zadatak 13.

// for ( let i =5 ; i <= 150 ; i++) {
//    if ( i % 13 ==0)
//    console.log('Brojevi deljivi sa 13 su:' ,i);
// }

//Zadatak 14.

// let s=0; 
// let b=0;
// let c=window.prompt("Unesite broj do kojeg želite da izracunate: ","5");
// n=parseInt(c)
// for(i=1;i<=n;i++){
//    s=s+i;
//    b=b+1;
// }document.write("Aritmetička sredina brojeva od 1 do " + n + " iznosi: " + parseFloat(s/b).toFixed(2));


//Zadatak 15.


// let n = 0;
// let m = 5;

// for ( let i =n ; i<=m ;i++ ) {
//    if( i >=0 ) {
//       console.log('Brojevi koji su pozitivni' ,i);
//    }else {
//       console.log('Brojevi koji su negativni' ,i);
// }
// }


//Zadatak 16:


// for ( let i = 5; i <=50; i++) {
//    if (i%3==0) {
//       console.log('Brojevi koji se dele sa 3:',i);
//    }else if ( i% 5==0) {
//       console.log('Brojevi koji se dele sa 5:',i);
//    }
   
// }


//Zadatak 17:

// let n, m;
// let suma = 0;
// let brojac = 0;

// n = 1;
// m = 20;

// for (let i = n; i < m; i++){
// 	if (i % 10 == 4){
//   	suma += i;
//     brojac++;
//   }
  
// }

// document.write("Suma svih brojeva cija je zadnja cifra 4 je "+suma+ " i ima ih " +brojac);


//Zadatak 18:

// let n = 2;
// let m = 10;

// let a = 2;

// for ( let i = n; i<=m ;i++) {
//    if( i%a ==0) {
//    console.log('Brojevi koji su deljivi sa:',a ,i);
//    }
// }

//Zadatak 19:

// let n = 2;
// let m = 15;

// let a = 3;

// for ( let i =n; i<=m ;i++)  {
//    if ( i%a !=0) {
//       console.log('Brojevi koji nije deljiv sa:',a ,i);
//    }
// }

//Zadatak 20:

// let n = 1;
// let m = 5;
// let a = 3;
// let suma = 0;

// for (let i = n; i < m; i++){
// if (i % a != 0){
// suma += i;
// }
// }

// document.write("suma je " + suma);

//Zadatak 21:

// let n = 1;
// let m = 10;
// let a = 3;
// let suma = 1;

// for (let i = n; i < m; i++){
// if (i % a == 0){
// suma *= i;
// }
// }

// document.write("suma je " + suma);

