let qsSearch = location.search;
let qstoSearch = new URLSearchParams(qsSearch);
let idSearch = qstoSearch.get('id');

let textoBusqueda = document.querySelector();
textoBusqueda.innerText = `Resultados de ${idSearch}`

let UrlPeliculas = `https://api.themoviedb.org/3/search/movie?api_key=c6aeb9dcbc4f74ad8200cc2d59baad51&language=en-US&query=${idSearch}`
console.log(UrlPeliculas);


fetch(UrlPeliculas) 
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data.results);
        let peliculasResultados = document.querySelector('');
        let infoBusqueda = data.results;
        let arPeliculasResultados = '';



        if (infoBusqueda.length == 0) {
            let noHayResultados = document.querySelector('');
            ( ) .innerText = `No se encontraron resultados para "${idSearch}"`
        } else (infoBusqueda.length > 0) {
            
            for (let i=0; i<infoBusqueda.length; i++)





        }




        



    })
    .catch(function(error) {
        console.log(error);
    })
