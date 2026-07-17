let movies;
const storeRef = document.getElementById("container");

// render movies, comments & likes

function renderMovies() {
    for (let i = 0; i < movies.length; i++) {
        storeRef.innerHTML += moviesTemplate(i);
        renderLikes(i);
    }
}

function renderLikes(i) {
    const btn = document.getElementById(`like-button-${i}`);
    if (movies[i].liked) {
        btn.classList.remove("like-button-unliked");
        btn.classList.add("like-button-liked");
    }
}

// local storage

function getMovies() {
    movies = JSON.parse(localStorage.getItem("movies")) || defaultMovies;
}

function saveMovies() {
    localStorage.setItem("movies", JSON.stringify(movies));
}

// save comments

function commentsRows(comments) {
    let rows = "";
    for (let j = 0; j < comments.length; j++) {
        rows += commentRowTemplate(comments[j]);
    }
    return rows;
}

function saveComments(i) {
    const input = document.getElementById(`input-${i}`);
    const comment = input.value;
    if (!comment) return;
    movies[i].comments.push({
        name: "You",
        comment: comment,
    });
    saveMovies();
    document.getElementById(`comments-table-${i}`).innerHTML = commentsRows(movies[i].comments);
    input.value = "";
}

// save & count likes

function toggleLikes(i) {
    movies[i].liked = !movies[i].liked;
    movies[i].likes += movies[i].liked ? 1 : -1;
    saveMovies();
    document.getElementById(`likes-${i}`).textContent = movies[i].likes;
    const btn2 = document.getElementById(`like-button-${i}`);
    btn2.classList.toggle("like-button-liked", movies[i].liked);
    btn2.classList.toggle("like-button-unliked", !movies[i].liked);
}

// Initialization on pageload

function init() {
    getMovies();
    renderMovies();
}
