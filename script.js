// link HTML

const storeRef = document.getElementById("container");

function renderBooks() {
    for (let index = 0; index < books.length; index++) {
        const library = books[index];
        storeRef.innerHTML += booksTemplate(index);
    }
}

// render books (all, favorites)

//likes function

// comments function

//Extra: add books

// Initializing

function init() {
    renderBooks();
}
