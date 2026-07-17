function moviesTemplate(i) {
    return /*html*/ `
        <article>
            <header class="title">        
                <h2 tabindex="0">${movies[i].name}</h2>
            </header>
                    <figure>
                        <img tabindex="0" src="${movies[i].cover}" alt="Movieposter of ${movies[i].name}">
                    </figure>
                    <div class="likes">
                        <p id="likes-${i}">${movies[i].likes}</p>
                        <button id="like-button-${i}" onclick="toggleLikes(${i})" class="like-button-unliked" aria-label="${movies[i].liked ? "Unlike this movie" : "Like this movie"}">
                        </button>
                    </div>
            <table class="movie-table">
                <tr>
                    <th>Genre:</th>
                    <td>${movies[i].genre}</td>
                </tr>
                <tr>
                    <th>Published:</th>
                    <td>${movies[i].publishedYear}</td>
                </tr>
                <tr>
                    <th>Director:</th>
                    <td>${movies[i].director}</td>
                </tr>
                <tr>
                    <th>Main Actor:</th>
                    <td>${movies[i].mainActor}</td>
                </tr>
            </table>
            <section class=interaction>
                <div class="movie-comments" id="movie-comments-${i}">
                    <h3>Comments</h3>
                    <div class="div-table">
                        <table class="comments-table" id="comments-table-${i}">
                            ${commentsRows(movies[i].comments)}
                        </table>
                    </div>
                    <div class="comments">
                        <form class="input-label">
                            <label for="input-${i}">add comments</label>
                            <input id="input-${i}" type="text" name="add comments">
                        </form>
                        <button id="submit-${i}" class="comment-btn" onclick="saveComments(${i})" onkeypress="saveComments(${i})">
                            <img src="../assets/icons/send.svg" alt="click to submit comment">
                        </button>
                    </div>
                </div>
            </section>
        </article>
    `;
}

function commentRowTemplate(comment) {
    return /*html*/ `
        <tr>
            <th>${comment.name}:</th>
            <td>${comment.comment}</td>
        </tr>
    `;
}
