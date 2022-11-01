export function getCardDescription(booklist, index) {
    let cardDescription = document.createElement("p");

    let cardDescriptionText = "";
    if (booklist[index].volumeInfo.description) {
        let newCardDescription =
            booklist[index].volumeInfo.description.split(" ");
        let fixedCardDescription = newCardDescription[0];
        if (newCardDescription.length >= 20) {
            for (let i = 1; i <= 20; i++) {
                fixedCardDescription = fixedCardDescription.concat(
                    " ",
                    newCardDescription[i],
                );
            }
            fixedCardDescription = fixedCardDescription.concat("...");
        } else {
            fixedCardDescription = booklist[index].volumeInfo.description;
        }

        cardDescriptionText = document.createTextNode(fixedCardDescription);
    } else {
        cardDescriptionText = document.createTextNode(
            "Sorry, no description found",
        );
    }

    cardDescription.style.textAlign = "justify";
    cardDescription.style.fontSize = "14px";
    cardDescription.appendChild(cardDescriptionText);

    return cardDescription;
}
export function getCardAuthor(booklist, index) {
    let cardAuthor = document.createElement("p");

    let cardAuthorText = "";
    try {
        cardAuthorText = document.createTextNode(
            "By: " + booklist[index].volumeInfo.authors[0],
        );
    } catch {
        cardAuthorText = document.createTextNode("Sorry, no Author found.");
    }
    cardAuthor.style.fontSize = "12px";
    cardAuthor.appendChild(cardAuthorText);

    return cardAuthor;
}
export function getCardImage(booklist, index) {
    let cardImage = document.createElement("img");
    let cardImageDiv = document.createElement("div");

    try {
        cardImage.src = booklist[index].volumeInfo.imageLinks.thumbnail;
    } catch {
        cardImage.appendChild(
            document.createTextNode("Sorry, no image found."),
        );
    }
    cardImageDiv.appendChild(cardImage);

    return cardImageDiv;
}

export default function getCardTitle(booklist, index) {
    let cardTitle = document.createElement("h4");

    let cardTitleText = document.createTextNode(
        booklist[index].volumeInfo.title,
    );

    cardTitle.style.fontSize = "16px";
    cardTitle.appendChild(cardTitleText);
    return cardTitle;
}
