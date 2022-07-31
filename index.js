import createCard from "./Modules/createCard.js";
import getBookList from "./Modules/getBookList.js";

const bookGrid = document.getElementById("booksGrid");
const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", async () => {
    console.log("test");
    bookGrid.innerHTML = "";
    const booklist = await getBookList();
    console.log(booklist[1]);
    for (let i = 0; i < 12; i++) {
        const card = createCard(booklist, i);
        bookGrid.appendChild(card);
    }
});
