console.log('favoritos');


let recuperoStorage = localStorage.getItem('favoritos');


let favoritos = JSON.parse(recuperoStorage);
console.log(favoritos);


let section = document.querySelector('.peliculas-agregadas');
let peliculasFavoritas = '';

for (let i = 0; i <favoritos.length; i++) {
    let URL= `https://api.themoviedb.org/3/movie/${favoritos[i]}?api_key=c6aeb9dcbc4f74ad8200cc2d59baad51&language=es&page=1`;
    
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


        section.innerHTML = peliculasFavoritas;



    })
    .catch(function (error) {
        console.log("Error:" + error);
    })














}