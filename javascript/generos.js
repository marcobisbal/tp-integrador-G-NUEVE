let urlGenerosPelis = "https://api.themoviedb.org/3/genre/movie/list?api_key=c6aeb9dcbc4f74ad8200cc2d59baad51&language=es"



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
            <li>
            <a href="detalle-generos.html?id=${info[i].id}&genre_ids=${info[i].name}"> ${info[i].name} </a>
            </li>`
            
            
        }


        listContainerGeneros.innerHTML = generosPeli;

        //let .guardaArticulosIndexPeli = document.querySelector(".guardaArticulosIndexPeli");
        //guardaArticulosIndexPeli.style.display = flex; 
    
    
    
    })
    .catch(function(error){
        console.log("Error:"+ error);
    })


//----------------generos series-----------------------------------------

let urlGenerosSeries = "https://api.themoviedb.org/3/genre/tv/list?api_key=c6aeb9dcbc4f74ad8200cc2d59baad51&language=es"



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
            <li>
            <a href="detalle-generos.html?id=${info[i].id}&genre_ids=${info[i].name}">${info[i].name} </a>
            </li>`
            
            
        }


        listContainerGeneros.innerHTML = generosPeli;

        //let .guardaArticulosIndexPeli = document.querySelector(".guardaArticulosIndexPeli");
        //guardaArticulosIndexPeli.style.display = flex; 
    
    
    
    })
    .catch(function(error){
        console.log("Error:"+ error);
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
    
    
    
    
    
