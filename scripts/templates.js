function moviesTemplate(i) {
    return /*html*/ `
        <article>
            <header class="title">        
                <h2>${movies[i].name}</h2>
            </header>
                    <figure>
                        <img src="${movies[i].cover}" alt="Movieposter of ${movies[i].name}">
                    </figure>
                    <div class="likes">
                        <p id="likes-${i}">${movies[i].likes}</p>
                        <button id="like-button-${i}" class="like">
                            <img src="../assets/icons/like.svg" alt="click to like movie">
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
                            ${commentsTemplate(movies[i].comments)}
                        </table>
                    </div>
                    <h4>add comments</h4>
                    <div class="comments">
                        <input id="input-${i}" type="text">
                        <button id="submit-${i}" class="like-btn" onclick="saveComments(${i})" onkeypress="saveComments(${i})">
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
