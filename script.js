// link HTML

const storeRef = document.getElementById("container");

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

// render books (all, favorites)

//likes function

// comments function

//Extra: add books

// Initializing

function init() {
    renderMovies();
}
