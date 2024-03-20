const cards = document.querySelector('.cards');
const myLibrary = [];

function Book(title) {
    this.title = title;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    let card = document.createElement('div');
    cards.appendChild(card);
    card.classList.add('card');
    card.classList.add(book.title.split(' ').join('-').toLowerCase());
    card.textContent = book.title;
    let title = document.createElement('div');
    card.appendChild(title);
    title.classList.add('title');
    let wrapper1 = document.createElement('div');
    card.appendChild(wrapper1);
    wrapper1.classList.add('wrapper');
    let author = document.createElement('div');
    wrapper1.appendChild(author);
    let pages = document.createElement('div');
    wrapper1.appendChild(pages);
    let genre = document.createElement('div');
    card.appendChild(genre);
    let read = document.createElement('div');
    card.appendChild(read);
    let wrapper2 = document.createElement('div');
    card.appendChild(wrapper2);
    let edit = document.createElement('button');
    wrapper2.appendChild(edit);
    let remove = document.createElement('button');
    wrapper2.appendChild(remove);
}

let harryPotter = new Book("Harry Potter")
addBookToLibrary(harryPotter)
console.log(myLibrary)

