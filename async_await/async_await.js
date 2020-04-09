// Modul H
// materi 6 
// Async & Await 


// contoh 
function cobaPromise() {
   return new Promise(( resolve, reject ) => {
      const waktu = 4000;
      if ( waktu < 5000 ) {
         setTimeout(() => {
            resolve('selesai')
         }, waktu );
      } else {
         reject('kelamaan')
      }
   });
}

// jika menggunakan then dan catch
// const coba = cobaPromise();
// coba
//    .then( coba => console.log( coba ))
//    .catch( coba => console.log( coba ));



// jika menggunakan Async & Await 
async function cobaAsync() {
   try {
      const coba = await cobaPromise();
      console.log(coba);
   } catch ( err ) {
      console.log( err );
   }
};
cobaAsync();