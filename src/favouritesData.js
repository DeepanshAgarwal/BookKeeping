let favouriteBooks = [];

function addToFavourites(book) {
    favouriteBooks.push(book);
    console.log("New book added to favourites: ", book);
    console.log("Favourite books: ", favouriteBooks);
}

function removeFromFavourites(book) {
    favouriteBooks = favouriteBooks.filter(
        (favourite) => favourite.isbn !== book.isbn
    );
    console.log("Book removed from favourites: ", book);
}

export { favouriteBooks, addToFavourites, removeFromFavourites };
