//https://api.themoviedb.org/3/discover/movie?api_key=c6aeb9dcbc4f74ad8200cc2d59baad51&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=string



let qs = location.search;
let qsto = new URLSearchParams(qs);
let id = qsto.get('id');

let url = "https://api.themoviedb.org/3/discover/movie?api_key=c6aeb9dcbc4f74ad8200cc2d59baad51&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}"

fetch (url) 
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    

        let titulos = document.querySelector ('h3');
        let img = document.querySelector ('img');
        let boton = document.querySelector ('.link');

        titulos.innertext = data.name;
        img.src = data.poster_path;
        //boton.innertext = 



    })
    .catch(function(error) {
        console.log(error);
    })


    



