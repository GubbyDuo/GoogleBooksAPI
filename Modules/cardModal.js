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
    cardDescription.style.fontSize = "14px";
    cardAuthor.style.fontSize = "12px";
    cardTitle.style.fontSize = "16px";
    cardDescription.style.textAlign = "justify";

    cardTitle.appendChild(cardTitleText);
    cardAuthor.appendChild(cardAuthorText);
    cardDescription.appendChild(cardDescriptionText);
    cardDiv.appendChild(cardTitle);
    cardDiv.appendChild(cardAuthor);
    cardDiv.appendChild(cardImage);
    cardDiv.appendChild(cardDescription);
    cardDiv.classList.add("card");
    cardDiv.style.padding = "14px";
    return cardDiv;
}
