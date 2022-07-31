export default function createCard(booklist, index) {
    //This looks like garbage
    let cardDiv = document.createElement("div");
    let cardTitle = document.createElement("h4");
    let cardDescription = document.createElement("p");
    let cardImage = document.createElement("img");
    let cardAuthor = document.createElement("p");
    try {
        cardImage.src = booklist[index].volumeInfo.imageLinks.thumbnail;
    } catch {
        cardImage.appendChild(
            document.createTextNode("Sorry, no image found."),
        );
    }
    let cardAuthorText = "";
    try {
        cardAuthorText = document.createTextNode(
            "By: " + booklist[index].volumeInfo.authors[0],
        );
    } catch {
        cardAuthorText = document.createTextNode("Sorry, no Author found.");
    }
    let cardTitleText = document.createTextNode(
        booklist[index].volumeInfo.title,
    );
    let cardDescriptionText = "";
    if (booklist[index].volumeInfo.description) {
        cardDescriptionText = document.createTextNode(
            booklist[index].volumeInfo.description,
        );
    } else {
        cardDescriptionText = document.createTextNode(
            "Sorry, no description found",
        );
    }

    cardTitle.appendChild(cardTitleText);
    cardAuthor.appendChild(cardAuthorText);
    cardDescription.appendChild(cardDescriptionText);
    cardDiv.appendChild(cardTitle);
    cardDiv.appendChild(cardAuthor);
    cardDiv.appendChild(cardImage);
    cardDiv.appendChild(cardDescription);
    cardDiv.classList.add("card");
    return cardDiv;
}
