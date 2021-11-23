console.log('favoritos');


let recuperoStorage = localStorage.getItem('favoritos');


let favoritos = JSON.parse(recuperoStorage);
console.log(favoritos);


let sectionPeli = document.querySelector('.peliculas-agregadas');
let sectionSerie = document.querySelector('.series-agregadas');
let seriesFavoritas = '';
let peliculasFavoritas = '';

if (peliculasFavoritas == null || peliculasFavoritas.length == 0) {
    sectionPeli.innerHTML = '<h1 class="titulo-peli-fav" No tienes peliculas en favoritos </h1>'
    

    } else {
        for (let i = 0; i <favoritos.length; i++) {
            let URL= `https://api.themoviedb.org/3/movie/${favoritos[i]}?api_key=c6aeb9dcbc4f74ad8200cc2d59baad51&language=es`
            
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
    
    
    
    
    
















