let urlPeli = "https://api.themoviedb.org/3/movie/popular?api_key=c6aeb9dcbc4f74ad8200cc2d59baad51&language=es&page=1"


fetch(urlPeli)
    .then(function (response) {
        return response.json();

    })

    .then(function (data) {
        console.log(data.results);
        let guardaArticulosIndexPeli = document.querySelector('.guardaArticulosIndexPeli');
        let info = data.results;
        let pelisPopular = '';



        for (let i = 0; i < 5; i++) {
            pelisPopular += `<article class= "articulo-index"> <img src= https://image.tmdb.org/t/p/w154/${info[i].poster_path} alt='${info[i].title}' />
            <h3>${info[i].title} </h3>
            <p>${info[i].release_date}</p> 
            <a href="detail-movie.html?id=${info[i].id}" class="botonVerMas"> Ver Mas</a>
            </article>`


        }


        guardaArticulosIndexPeli.innerHTML = pelisPopular;

        //let .guardaArticulosIndexPeli = document.querySelector(".guardaArticulosIndexPeli");
        //guardaArticulosIndexPeli.style.display = flex; 



    })
    .catch(function (error) {
        console.log("Error:" + error);
    })









//------------------------------series populares----------------------------------------------//



let urlSerie = "https://api.themoviedb.org/3/tv/popular?api_key=c6aeb9dcbc4f74ad8200cc2d59baad51&language=es&page=1"


fetch(urlSerie)
    .then(function (response) {
        return response.json();

    })

    .then(function (data) {
        console.log(data.results);
        let guardaArticulosIndexSeries = document.querySelector('.guardaArticulosIndexSeries');
        let info = data.results;
        let seriesPopular = '';



        for (let i = 0; i < 5; i++) {
            seriesPopular += `<article class= "articulo-index"> <img src= https://image.tmdb.org/t/p/w154/${info[i].poster_path} alt='${info[i].name}' />
            <h3>${info[i].name} </h3>
            <p>${info[i].first_air_date}</p> 
            <a href="detail-series.html?id=${info[i].id}" class="botonVerMas"> Ver Mas</a>
            </article>`


        }


        guardaArticulosIndexSeries.innerHTML = seriesPopular;

        //let article = document.querySelector(".article");
        //article.style.border = "3px";



    })
    .catch(function (error) {
        console.log("Error:" + error);
    })


//------------------------------peliculas mejor valoradas----------------------------------------------//


let urlPeliTop = "https://api.themoviedb.org/3/movie/top_rated?api_key=c6aeb9dcbc4f74ad8200cc2d59baad51&language=es&page=1"


fetch(urlPeliTop)
    .then(function (response) {
        return response.json();

    })

    .then(function (data) {
        console.log(data.results);
        let guardaArticulosIndexPeliTop = document.querySelector('.guardaArticulosIndexMejorPuntuadas');
        let info = data.results;
        let PelisTop = '';



        for (let i = 0; i < 5; i++) {
            PelisTop += `<article class= "articulo-index"> <img src= https://image.tmdb.org/t/p/w154/${info[i].poster_path} alt='${info[i].title}' />
            <h3>${info[i].title} </h3>
            <p>${info[i].release_date}</p> 
            <a href="detail-movie.html?id=${info[i].id}" class="botonVerMas"> Ver Mas</a>
            </article>`


        }


        guardaArticulosIndexPeliTop.innerHTML = PelisTop;

        //let article = document.querySelector(".article");
        //article.style.border = "3px";



    })
    .catch(function (error) {
        console.log("Error:" + error);
    })





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
    
    } else if (inputField.value.length < 3){
        message.innerText = "Debe escribir al menos 3 caracteres."
        message.style.color = "red"
        inputField.style.outline = "1px solid red"
    
    } else {
        this.submit()
    }






})

inputField.addEventListener('focus', function(){
    message.innerText = '';




})




