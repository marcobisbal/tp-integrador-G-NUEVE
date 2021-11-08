let urlPeli = "https://api.themoviedb.org/3/movie/popular?api_key=c6aeb9dcbc4f74ad8200cc2d59baad51&language=en-US&page=1"


fetch (urlPeli)
    .then(function(response){
        return response.json();

    })

    .then(function(data){
        console.log(data.results);
        let guardaArticulosIndexPeli = document.querySelector('.guardaArticulosIndexPeli');
        let info = data.results;
        let pelisPopular = '';



        for (let i=0; i<5; i++) {
            pelisPopular += `<article> <img src=img/inicio/durodematar.jpg alt='${info[i].title}' />
            <h3>${info[i].title} </h3>
            <p>${info[i].release_date}</p>`
            
            
        }


        guardaArticulosIndexPeli.innerHTML = pelisPopular;

        //let .guardaArticulosIndexPeli = document.querySelector(".guardaArticulosIndexPeli");
        //guardaArticulosIndexPeli.style.display = flex; 
    
    
    
    })
    .catch(function(error){
        console.log("Error:"+ error);
    })









//------------------------------series populares----------------------------------------------//



let urlSerie = "https://api.themoviedb.org/3/tv/popular?api_key=c6aeb9dcbc4f74ad8200cc2d59baad51&language=en-US&page=1"


fetch (urlSerie)
    .then(function(response){
        return response.json();

    })

    .then(function(data){
        console.log(data.results);
        let guardaArticulosIndexSeries = document.querySelector('.guardaArticulosIndexSeries');
        let info = data.results;
        let seriesPopular = '';



        for (let i=0; i<5; i++) {
            seriesPopular += `<article> <img src= img/inicio/durodematar.jpg alt='${info[i].title}' />
            <h3>${info[i].title} </h3>
            <p>${info[i].release_date}</p>`
            
            
        }


        guardaArticulosIndexSeries.innerHTML = seriesPopular;

        //let article = document.querySelector(".article");
        //article.style.border = "3px";
    
    
    
    })
    .catch(function(error){
        console.log("Error:"+ error);
    })

