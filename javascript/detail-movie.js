window.addEventListener("load", function () {
    ///const search_results = new URLSearchParams(location.search);
    //const codigoPelicula = search_results.get("id");

    let qs = location.search;
    let qsto = new URLSearchParams(qs);
    let id = qsto.get('id');

    const titulo = document.querySelector('.tituloPelicula');
    const imagen = document.querySelector('.foto-peli-detalle');
    let key = "c6aeb9dcbc4f74ad8200cc2d59baad51";
    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=es`;
    const URLimg = "https://image.tmdb.org/t/p/w342";
    const sinopsis = document.querySelector('.sinopsisPeli');
    const duracion = document.querySelector('.duracionPeli');
    const genero = document.querySelector('.generoPeli');
    const calificacion = document.querySelector('.calificacionPeli');
    const fecha = document.querySelector('.fechaPeli');


    fetch(URL)
        .then(function (data) {
            return data.json();
        })
        .then(function (data) {
            titulo.innerText = data.title;
            imagen.src = URLimg + data.poster_path;
            sinopsis.innerText = data.overview;
            duracion.innerText = `Duración: ${data.runtime} minutos`;
            calificacion.innerText = `Calificación: ${data.vote_average}`;
            genero.innerText = `Género: ${data.genres[0].name}`;
            fecha.innerText = `Fecha de Estreno: ${data.release_date}`;
            console.log(data);


        })
        .catch(function (error) {
            console.log("Error:" + error);
        })



    let favoritos = [];

    let recuperoStorage = localStorage.getItem('favoritos');


    if (recuperoStorage = ! null) {

        favoritos = JSON.parse(recuperoStorage);
        console.log(favoritos);
    }

    let fav = document.querySelector('.botonFavPeli');

    if (favoritos.includes(id)) {
        fav.innerText = 'Quitar de favoritos'

    }



    fav.addEventListener('click', function (evento) {
        evento.preventDefault();


        if (favoritos.includes(id)) {
            let indice = favoritos.indexOf(id);
            favoritos.splice(indice, 1)
            fav.innerText = 'Agregar a favoritos'

        } else {
            favoritos.push(id);
            fav.innerText = 'Quitar de favoritos'



        }

        console.log(favoritos);


        let favToString = JSON.stringify(favoritos);

        localStorage.setItem("favoritos", favToString);

        console.log(localStorage);


    })


});







