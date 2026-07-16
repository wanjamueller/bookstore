// link HTML

const storeRef = document.getElementById("container");

// render movies and comments

function renderMovies() {
    for (let i = 0; i < movies.length; i++) {
        storeRef.innerHTML += moviesTemplate(i);
    }
}

function commentsTemplate(comments) {
    let rows = "";
    for (let j = 0; j < comments.length; j++) {
        rows += commentRowTemplate(comments[j]);
    }
    return rows;
}

// Save to local storage

function saveMovies() {
    localStorage.setItem("movies", JSON.stringify(movies));
}

// all / favorites

//likes function

// comments function

//Extra: add books

// Initializing

function init() {
    renderMovies();
    saveMovies();
}
