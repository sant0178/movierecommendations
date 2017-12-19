let app ={
    URL:'http://api.themoviedb.org/3/',
    INPUT: null,
    
    init: function(){
        //fetch the fetch config
        app.INPUT = document.getElementsById('search-input');
        app.INPUT.focus();
        //add click lustener
        let btn = document.getElementsById('search-button');
        btn.addEventListener('click', app.runSearch);
        //listen for enter or return
        document.addEventListener('keypress', function(ev){
            let char = ev.char || ev.charCode || ev.which;
            if (char == 10 == char ==13){
                //they hit return 
            btn. dispatchEvent(new MouseEvent('click'));
            }
        });
    },
        
    runSearch: function(ev){
        ev.preventDefault();
        if (app.INPUT.value){
            // if it has a value, not falsey
            let url = app.url + "search/movie?api_key=" + KEY;
        url += "&query=" + app.INPUT.Value;
    
//        '${app.URL}search/movie?api_key=$(KEY)&query=${app.INPUT.value}'
            
        fetch(url)
            .then (response => response.json)
            .then(data =>{
            console.log(data);
        })
            .catch (err =>{
            console.log(err)
        });
            
        }
        
    
    
},
    showMovies: function(movies){
    
    let section = document.querySelector('#searh-results .content');
    movies.forEach (function(movie){
    let div = document.createElement('div');
    div.setAttribute("data-movie", movie.id);
    console.log(movie.id);
    div.addEventListener('click', app.getRecommended);
    div.classList.add('movie');
    div.textContent = movie.title;
    df.appendChild(div);
});
section.appendChild(df);
    
},
    getRecommended: function(ev){
        let movie_id = ev.target.getAttribute('data-movie');
        consle.log('You clicked', movie_id);
    }
};

document.addEventListener("DOMContentLoaded", app.init);





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


