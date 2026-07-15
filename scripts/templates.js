function moviesTemplate(index) {
    return /*html*/ `
        <article>
            <header class="title">        
                <h2>${movies[index].name}</h2>
            </header>
            <figure>
                <img src="${movies[index].cover}" alt="Movieposter of ${movies[index].name}">
            </figure>
                 <div class="likes">
                    <p>${movies[index].likes}</p>
                    <input onclick="addLikes ()" class="like" type="image" src="../assets/icons/like.svg" alt="click to like movie">
                </div>
            <table>
                <tr>
                    <th>Genre:</th>
                    <td>${movies[index].genre}</td>
                </tr>
                 <tr>
                    <th>Published:</th>
                    <td>${movies[index].publishedYear}</td>
                </tr>
                <tr>
                    <th>Director:</th>
                    <td>${movies[index].director}</td>
                </tr>
                <tr>
                    <th>Main Actor:</th>
                    <td>${movies[index].mainActor}</td>
                </tr>
            </table>
            <section class=interaction>
                <div class="comments">
                    <input type="text" name="comment" id="comment">
                    <img src="../assets/icons/send.svg" alt="click to submit comment">
                </div>
                <div id="saved-comment"></div>
            </section>
        </article>
    `;
}
