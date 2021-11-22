let qsSearch = location.search;
let qstoSearch = new URLSearchParams(qsSearch);
let idSearch = qstoSearch.get('id');

let textoBusqueda = document.querySelector('.h2-resultados');
//textoBusqueda.innerText = `Resultados de ${idSearch}`


let UrlPeliculas = `https://api.themoviedb.org/3/search/movie?api_key=c6aeb9dcbc4f74ad8200cc2d59baad51&language=en-US&page=1&query=${idSearch}`
console.log(UrlPeliculas);


fetch(UrlPeliculas) 
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data.results);
        let peliculasResultados = document.querySelector('.guardaArticulos-resultados');
        let infoBusqueda = data.results;
        let arPeliculasResultados = '';



        if (arPeliculasResultados.length == 0) {
            let noHayResultados = document.querySelector('.no-hay-resultados');
          noHayResultados.innerText = `No se encontraron resultados para: ${idSearch}`
        } else (infoBusqueda.length > 0) 
                textoBusqueda.innerText = `Resultados de ${idSearch}`


            
            for (let i=0; i<5; i++) {
                arPeliculasResultados += `<article> <img src= https://image.tmdb.org/t/p/w154/${infoBusqueda[i].poster_path} alt='${infoBusqueda[i].original_title}' />
                <h3>${infoBusqueda[i].original_title} </h3>
                <p>${infoBusqueda[i].release_date}</p>
                <a href="detail-movie.html?id=${infoBusqueda[i].id}" class="botonVerMas"> Ver Mas</a>
                </article>`



                peliculasResultados.innerHTML = arPeliculasResultados;




            }
                






        


    })
    .catch(function(error) {
        console.log(error);
    })
