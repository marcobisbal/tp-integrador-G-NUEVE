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
            genero.href = `detalle-generos.html?id=${data.genres[0].id}&genre_ids=${data.genres[0].name}`;
            genero.innerText = `Género: ${data.genres[0].name}`;
            fecha.innerText = `Fecha de Estreno: ${data.release_date}`;
            console.log(data);


        })
        .catch(function (error) {
            console.log("Error:" + error);
        })


    // creo el array para rellenar los favoritos
    let favoritos = [];
    //recupero el storage
    let recuperoStorage = localStorage.getItem('favoritos');

    //reviso si el id esta en favoritos
    if (recuperoStorage) {

        favoritos = JSON.parse(recuperoStorage);
        //console.log(favoritos);
    }

    let botonFavoritos = document.querySelector('.botonFavPeli');

    if (favoritos.includes(id)) {
        botonFavoritos.innerText = '- Quitar de favoritos ★'

    }



    botonFavoritos.addEventListener('click', function (evento) {
        evento.preventDefault();


        if (favoritos.includes(id)) {
            let indice = favoritos.indexOf(id);
            favoritos.splice(indice, 1)
            botonFavoritos.innerText = '+ Agregar a favoritos ★'

        } else {
            favoritos.push(id);
            botonFavoritos.innerText = '- Quitar de favoritos ★'



        }

       


        let favToString = JSON.stringify(favoritos);

        localStorage.setItem("favoritos", favToString);

        console.log(localStorage);


    })


});







