

let qs = location.search;
let qsto = new URLSearchParams(qs);
let id = qsto.get('id');

let urlMovie = `https://api.themoviedb.org/3/discover/movie?api_key=c6aeb9dcbc4f74ad8200cc2d59baad51&language=es&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}`

fetch (urlMovie) 
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data.results);
        let articuloGenero = document.querySelector('.guardaArticulos');
        let info = data.results;
        let generos = '';
      


        



        for (let i=0; i<info.length; i++) {
            generos += 
            `<article class ="articulo-peli-genero"> <img src= https://image.tmdb.org/t/p/w154/${info[i].poster_path} alt='${info[i].title}' />
            <h3>${info[i].title} </h3>
            <p>${info[i].release_date}</p> 
            <a href="detail-movie.html?id=${info[i].id}" class="botonVerMas"> Ver Mas</a>
            </article>`
            
            
        }

        
       articuloGenero.innerHTML = generos;


        



    })
    .catch(function(error) {
        console.log(error);
    })

    

    
        

//-----------------------------------generos de serie-----------------------------------------------------------------


 let urlSerie = `https://api.themoviedb.org/3/discover/tv?api_key=c6aeb9dcbc4f74ad8200cc2d59baad51&language=es&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_genres=${id}`

fetch (urlSerie) 
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data.results);
        let articuloGeneroSerie = document.querySelector('.guardaArticulosSerie');
        let info = data.results;
        let generosSerie = '';

        
        
    

        for (let i=0; i<info.length; i++) {
            generosSerie += 
            `<article class ="articulo-serie-genero"> <img src= https://image.tmdb.org/t/p/w154/${info[i].poster_path} alt='${info[i].title}' />
            <h3>${info[i].name} </h3>
            <p>${info[i].first_air_date}</p> 
            <a href="detail-series.html" class="botonVerMas"> Ver Mas</a>
            </article>`
            
            
        }

        articuloGeneroSerie.innerHTML = generosSerie;


        


        



    })
    .catch(function(error) {
        console.log(error);
    })

    



