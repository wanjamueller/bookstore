let movies;

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

// local storage

function getMovies() {
    movies = JSON.parse(localStorage.getItem("movies")) || defaultMovies;
}

function saveMovies() {
    localStorage.setItem("movies", JSON.stringify(movies));
}

// add comments

function saveComments(i) {
    const input = document.getElementById(`input-${i}`);
    const comment = input.value;
    if (!comment) return;

    movies[i].comments.push({
        name: "You",
        comment: comment,
    });

    saveMovies();

    document.getElementById(`comments-table-${i}`).innerHTML = commentsTemplate(movies[i].comments);

    input.value = "";
}

// all / favorites

//likes function

// comments function

//Extra: add books

// Initializing

function init() {
    getMovies();
    renderMovies();
}
