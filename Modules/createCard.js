import getCardTitle, {
    getCardAuthor,
    getCardDescription,
    getCardImage,
} from "./getCardParts.js";

export default function createCard(booklist, index) {
    let cardDiv = document.createElement("div");
    let cardTitle = getCardTitle(booklist, index);
    let cardAuthor = getCardAuthor(booklist, index);
    let cardDescription = getCardDescription(booklist, index);
    let cardImage = getCardImage(booklist, index);

    cardDiv.appendChild(cardTitle);
    cardDiv.appendChild(cardAuthor);
    cardDiv.appendChild(cardImage);
    cardDiv.appendChild(cardDescription);
    cardDiv.classList.add("card");
    cardDiv.style.padding = "14px";
    cardDiv.style.height = "400px";
    cardDiv.style.display = "grid";
    cardDiv.style.gridTemplateRows = "50px 50px 260px 40px";

    return cardDiv;
}
