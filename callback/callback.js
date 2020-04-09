// ? Modul H
// ? materi 2

// ? Asyncronous call back
// ? contoh 1 Asyncronous call back - vanilla javascript 
function getDataMahasiswa(url, success, error) {
   let xhr = new XMLHttpRequest();
   // XMLHttpRequest object untuk interaksi kepada server

   xhr.onreadystatechange = function() {
      if ( xhr.readyState === 4 ) {
         if ( xhr.status === 200 ) {
            success( xhr.response );
         } else if ( xhr === 404 ) {
            error();
         }
      }
   }
   // ? onreadystatechange proprty 
   xhr.open( 'get', url );
   xhr.send();
}
getDataMahasiswa('json/data.json', results => {
   console.log( results );
}, () =>  {

});