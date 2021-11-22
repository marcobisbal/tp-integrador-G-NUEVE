window.addEventListener("load", function () {
    const search_results = new URLSearchParams(location.search);
    const codigoSerie = search_results.get("id");
  

    const titulo = document.querySelector('.tituloSerie');
    const imagen = document.querySelector('.foto-serie-detalle');
    let key = "c6aeb9dcbc4f74ad8200cc2d59baad51";
    const URL = `https://api.themoviedb.org/3/tv/${codigoSerie}?api_key=${key}&language=en-US`;
    
    const URLimg = "https://image.tmdb.org/t/p/w342";
    const sinopsis = document.querySelector('.sinopsisSerie');
    //const duracion = document.querySelector('.duracionSerie');
    const genero = document.querySelector('.generoSerie');
    const calificacion = document.querySelector('.calificacionSerie');
    const fecha = document.querySelector ('.fechaSerie');


    fetch(URL)
        .then(function (data) {
            return data.json();
        })
        .then(function (data) {
            titulo.innerText = data.name;
            imagen.src= URLimg + data.poster_path;
            sinopsis.innerText = data.overview;
            duracion.innerText = data.runtime;
            calificacion.innerText = `Calificación: ${data.vote_average}`;
            genero.innerHTML = `Género: ${data.genres[0].name}</a>`;
            fecha.innerText = `Fecha de Estreno: ${data.first_air_date}`;
            
            console.log(data);


        })
        .catch(function(error){
            console.log("Error:"+ error);
        })
        
    

});



