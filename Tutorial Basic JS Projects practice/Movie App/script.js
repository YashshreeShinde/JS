//this api consist of  array of 20 movie objects
const APIURL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
//search api for search movie functionality
const SEARCHAPI ="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

// initially get some  movies
getMovies(APIURL);


//function for displaying the  20 movies at the start (when we open the app)
async function getMovies(url) {
    const resp = await fetch(url);
    const respData = await resp.json();

     console.log(respData);


    //resp.Data array of objects= movie objects
    showMovies(respData.results);
     console.log(respData.results);
}


function showMovies(movies) {
    main.innerHTML = "";

    movies.forEach((movie) => {
        const { poster_path, title, vote_average, overview } = movie; //destructuring objects data

        const movieEl = document.createElement("div");
        movieEl.classList.add("movie");

        movieEl.innerHTML = `
            <img src="${IMGPATH + poster_path}"alt="${title}"/>
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview:</h3>
                ${overview}
            </div>
        `;

        main.appendChild(movieEl);
    });
}


//Voting color according to ranking
function getClassByRate(vote) {
    if (vote >= 8) {
        return "green";
    } else if (vote >= 5) {
        return "orange";
    } else {
        return "red";
    }
}


//search mechanism
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    if (searchTerm) {
        getMovies(SEARCHAPI + searchTerm); //concatenating it with search term

        search.value = "";
    }
});
