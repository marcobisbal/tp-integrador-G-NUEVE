let urlGenerosPelis = "https://api.themoviedb.org/3/genre/movie/list?api_key=c6aeb9dcbc4f74ad8200cc2d59baad51&language=en-US"



fetch (urlGenerosPelis)
    .then(function(response){
        return response.json();

    })

    .then(function(data){
        console.log(data.genres);
        let listContainerGeneros = document.querySelector('.list-container-generos');
        let info = data.genres;
        let generosPeli = '';



        for (let i=0; i<info.length; i++) {
            generosPeli += `<article class = "generosseries" />
            <li>${info[i].name} </li>`
            
            
        }


        listContainerGeneros.innerHTML = generosPeli;

        //let .guardaArticulosIndexPeli = document.querySelector(".guardaArticulosIndexPeli");
        //guardaArticulosIndexPeli.style.display = flex; 
    
    
    
    })
    .catch(function(error){
        console.log("Error:"+ error);
    })


//----------------generos series-----------------------------------------

let urlGenerosSeries = "https://api.themoviedb.org/3/genre/tv/list?api_key=c6aeb9dcbc4f74ad8200cc2d59baad51&language=en-US"



fetch (urlGenerosSeries)
    .then(function(response){
        return response.json();

    })

    .then(function(data){
        console.log(data.genres);
        let listContainerGeneros = document.querySelector('.list-container-generos-serie');
        let info = data.genres;
        let generosPeli = '';



        for (let i=0; i<info.length; i++) {
            generosPeli += `<article class = "generosseries" />
            <li>${info[i].name} </li>`
            
            
        }


        listContainerGeneros.innerHTML = generosPeli;

        //let .guardaArticulosIndexPeli = document.querySelector(".guardaArticulosIndexPeli");
        //guardaArticulosIndexPeli.style.display = flex; 
    
    
    
    })
    .catch(function(error){
        console.log("Error:"+ error);
    })
