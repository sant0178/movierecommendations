// wait for DOMContentloaded
// fetch the configuration info for imae locations and sizes 
// autofocus on search box
// listen on search button
// listen on keypress and <enter> or <return>


// after they click / <enter> press run a fetch 
// results come back from fetch
// show the movie results page
// loop through the results and build <divs>

// make something in the div clickable 
// get the id from the clickable element
// fetch the recommendations based on the movie id
//


let app = {
    URL: 'https://api.themoviedb.org/3/',
    INPUT: null,
    BASEURL:'https://image.tmdb.org/t/p/w185',
    init: function(){
        //fetch config info
        app.INPUT = document.getElementById('search-input');
        app.INPUT.focus();
        //add click listener
        
        let btn = document.getElementById('search-button');
        btn.addEventListener('click', app.runSearch);
        //listen for enter or return
        
        //add a back button function
        
        document.addEventListener('keypress', function(ev){
            let char =ev.char || ev.charCode || ev.which;
             if(char == 10 || char == 13){
                 //if they hit enter or return
                 btn.dispatchEvent(new MouseEvent('click'));
             }
            
        })
    },

//    let baseURL ='https://api.themoviedb.org/3';
//    let configData = null;
//    let baseImageURL = null;
//    
//    let getconfig = function (){
//    let url = "".concat(baseURL,'configuration?api_key=',+KEY);
//        fetch(url)
//        .then((result)=>{
//    return result.json();
//            
//        }
//})
//.then((data)=>{
//    baseImageURL = data.images.secure_base_url;
//    configData = data.images;
//    console.log('config',data);
//    conlse.log('config fetched');
//    runsearch('')
//})
//},
    
    runSearch: function(ev){
        ev.preventDefault();
        if(app.INPUT.value ){
            //if they actually typed something other than <enter>
            let url= app.URL + "search/movie?api_key=" + KEY;
            url += "&query=" +app.INPUT.value;
            
            //`${app.URL}search/movie?api_key=${KEY}&query=${app.INPUT.value}`
            
            fetch(url)
            .then( response => response.json() )
            .then( data => {
                console.log(data);
                app.showMovies(data.results);
            } )
            .catch( err => {
                console.log(err);
            } );
        }
        },
    showMovies: function(movies){
        let section = document.querySelector('#search-results .content');
        let df = document.createDocumentFragment();
        section.innerHTML = "";
        
        
        
        movies.forEach(function(movie){
            
            
            
            
            
            let div = document.createElement('div');
//            div.setAttribute("data-movie", movie.id);
            
            div.setAttribute('data-list', movie.id);
            console.log(movie.id);
            div.addEventListener('click', app.getRecommended);
            div.classList.add('movie');
            
            let img = document.createElement('img');
            img.src=''.concat(app.BASEURL, movie.poster_path);  
            
            let title = document.createElement('h1');
            
            title.textContent=movie.title;
            
            
            
            div.textContent=movie.overview;
            
            
            
          
          
            
            
            
            
            div.appendChild(img);
            div.appendChild(title);    
            df.appendChild(div);
            
        });
        section.appendChild(df);
        
    },
    getRecommended: function(ev){
        //part of the url here is the movie id <- included in movie obj
        let movie_id = ev.target.getAttribute('data-movie');
        console.log("You clicked", movie_id); 
        
    },

    
};


document.addEventListener('DOMContentLoaded', app.init);







// ev.currentTarget
// getAttribute 


// one step at a time

// use chrome console

// test a lot

// follow steps of a user as you ass code



















