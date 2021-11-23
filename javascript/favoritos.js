//console.log(favoritosSeries);
//console.log(favoritosPeliculas);


let recuperoStoragePeli = localStorage.getItem('favoritosPeliculas');
let recuperoStorageSerie = localStorage.getItem('favoritosSeries');



let favPeliculas = JSON.parse(recuperoStoragePeli);
console.log(favPeliculas);

let favSeries = JSON.parse(recuperoStorageSerie);
console.log(favSeries);

let tituloPeli = document.querySelector('.titulo-peli-fav');
let tituloSerie = document.querySelector('.titulo-serie-fav');
let sectionPeli = document.querySelector('.peliculas-agregadas');
let sectionSerie = document.querySelector('.series-agregadas');
let seriesFavoritas = '';
let peliculasFavoritas = '';

if (peliculasFavoritas == null || peliculasFavoritas.length == 0) {
    tituloPeli.innerHTML = 'No tienes peliculas agregadas a favoritos';


} else {
    for (let i = 0; i < favPeliculas.length; i++) {
        let URL = `https://api.themoviedb.org/3/movie/${favoritos[i]}?api_key=c6aeb9dcbc4f74ad8200cc2d59baad51&language=es`

        fetch(URL)
            .then(function (response) {
                return response.json();

            })

            .then(function (data) {
                console.log(data.results);
                peliculasFavoritas += `<article class= "articulo-index"> 
                <img src= https://image.tmdb.org/t/p/w154/${data[i].poster_path} alt='${data[i].title}' />
                <h3>${data[i].title} </h3>
                <p>${data[i].release_date}</p> 
                <a href="detail-movie.html?id=${data[i].id}" class="botonVerMas"> Ver Mas</a>
                </article>`


                sectionPeli.innerHTML = peliculasFavoritas;



            })
            .catch(function (error) {
                console.log("Error:" + error);
            })



    }




















}


if (seriesFavoritas == null || seriesFavoritas.length == 0) {
    tituloSerie.innerHTML = 'No tienes series agregadas a favoritos';


} else if (seriesFavoritas.length > 0) {
    for (let i = 0; i < favoritos.length; i++) {
        let URL = `https://api.themoviedb.org/3/tv/${favoritos[i]}?api_key=c6aeb9dcbc4f74ad8200cc2d59baad51&language=es`

        fetch(URL)
            .then(function (response) {
                return response.json();

            })

            .then(function (data) {
                console.log(data.results);
                seriesFavoritas += `<article class= "articulo-index"> 
                <img src= https://image.tmdb.org/t/p/w154/${data[i].poster_path} alt='${data[i].name}'/>
                <h3>${data[i].name} </h3>
                <p>${data[i].release_date}</p> 
                <a href="detail-series.html?id=${data[i].id}" class="botonVerMas"> Ver Mas</a>
                </article>`


                sectionPeli.innerHTML = seriesFavoritas;



            })
            .catch(function (error) {
                console.log("Error:" + error);
            })



    }




















}



// formulario busqueda



let formulario = document.querySelector('form');
let inputField = document.querySelector('.search');
let message = document.querySelector('.message');

formulario.addEventListener('submit', function (evento) {
    evento.preventDefault()
    console.log('no me mando');

    if (inputField.value == "") {
        message.innerText = "Campo obligatorio.";
        message.style.color = "red"
        inputField.style.outline = "1px solid red"

    } else if (inputField.value.length < 3) {
        message.innerText = "Debe escribir al menos 3 caracteres."
        message.style.color = "red"
        inputField.style.outline = "1px solid red"

    } else {
        this.submit()
    }






})

inputField.addEventListener('focus', function () {
    message.innerText = '';




})










