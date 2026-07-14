// link HTML

const storeRef = document.getElementById("container");

function renderMovies() {
    for (let index = 0; index < movies.length; index++) {
        const library = movies[index];
        storeRef.innerHTML += moviesTemplate(index);
    }
}

// render books (all, favorites)

//likes function

function addLikes(index) {
    if ((movies[index].liked = false)) {
        movies[index].likes + 1;
        movies.liked = true;
    } else {
        movies[index].likes - 1;
        movies[index].liked = false;
    }

    renderMovies();
}

// comments function

//Extra: add books

// Initializing

function init() {
    renderMovies();
}
