function booksTemplate(index) {
    return /*html*/ `
        <article>
            <h2>${books[index].name}</h2>
            <figure>
                <img src="../assets/img/book_cover.jpg" alt="Picture of Book Cover">
            </figure>
            <table>
                <tr>
                    <th>Genre:</th>
                    <td>${books[index].genre}</td>
                </tr>
                 <tr>
                    <th>Published:</th>
                    <td>${books[index].publishedYear}</td>
                </tr>
                <tr>
                    <th>Author:</th>
                    <td>${books[index].author}</td>
                </tr>
                <tr>
                    <th>Price:</th>
                    <td>${books[index].price} EUR</td>
                </tr>
            </table>
        </article>
    `;
}
