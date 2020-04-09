// Modul H
// Materi 3 
// Promise 


// contoh 1 
let ditepati = true ;
const janji1 = new Promise(( resolve, reject ) => {
   if( ditepati ) {
      resolve ('janji ditepati !');
   } else {
      reject ( 'ingkar janji.. '); 
   }
});
janji1
.then( response => console.log('ok! :' + response ))
.catch( response => console.log('Not ok :' + response ));



// contoh 2 
let ditepati1 = true ;
const janji2 = new Promise(( resolve, reject ) => {
   if ( ditepati1 ) {
      setTimeout(() => {
         resolve(' ditepati setelah beberapa waktu');
      },2000);
   } else {
      setTimeout(() => {
         resolve(' tidak ditepati setelah beberapa waktu')
      }, 2000)
   }
});
console.log('mulai');
janji2
.finally( response => console.log('selesai menunggu '))
.then( response => console.log('ok! :' + response ))
.catch( response => console.log('Not ok :' + response ));
console.log('selesai');


// contoh 3
// promise pada onject json
const film = new Promise( resolve => {
   setTimeout(() => {
      resolve([{
         jusul:'Spiderman',
         sutradara: 'Sanjaya',
         pemeran: 'jiung, coy'
      }]);
   }, 1000);
});


const cuaca = new Promise( resolve => {
   setTimeout(() => {
      resolve([{
         kota : 'bandung',
         suhu : 30,
         kondisi : 'berawan'
      }]);
   }, 500);
});

// film.then( response => console.log( response ));
// cuaca.then( response => console.log( response ));
Promise.all([  film, cuaca ])
// .then( response => console.log( response ) );
.then( response => {
   const [ film, cuaca ] = response ;
   console.log(film);
   console.log(cuaca);
})