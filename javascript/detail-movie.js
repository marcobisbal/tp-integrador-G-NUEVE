window.addEventListener("load", function () {
    const search_results = new URLSearchParams(location.search);
    const codigoPelicula = search_results.get("id");

    const titulo = document.querySelector('.tituloPelicula');
    const imagen = document.querySelector('.foto-peli-detalle');
    let key = "c6aeb9dcbc4f74ad8200cc2d59baad51";
    const URL = `https://api.themoviedb.org/3/movie/${codigoPelicula}?api_key=${key}&language=es`;
    const URLimg = "https://image.tmdb.org/t/p/w342";
    const sinopsis = document.querySelector('.sinopsisPeli');
    const duracion = document.querySelector('.duracionPeli');
    const genero = document.querySelector('.generoPeli');
    const calificacion = document.querySelector('.calificacionPeli');

    fetch(URL)
        .then(function (data) {
            return data.json();
        })
        .then(function (data) {
            titulo.innerText = data.title;
            imagen.src= URLimg + data.poster_path;
            sinopsis.innerText = data.overview;
            duracion.innerText = data.runtime;
            calificacion.innerText = data.vote_average;
            genero.innerText = data.genres[0].name;
            console.log(data.genres[0].name);

        })
        .catch();
        
    

});



