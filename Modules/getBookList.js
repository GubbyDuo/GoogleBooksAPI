export default async function getBookList() {
    const input = document.getElementById("textInput");
    const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${input.value}`,
    );
    const data = await response.json();
    console.log(data);
    return data.items;
}
