import Book from './BookInstance.js';

const forLs = [];

export default class DisplayBook {
  static addBook(newBook, index) {
    const library = document.querySelector('#book-shelve');
    if (!localStorage.getItem('books')) {
      const noBook = document.createElement('p');
      noBook.innerHTML = 'No books in library';
      library.appendChild(noBook);
    }
    const container = document.createElement('div');
    container.classList.add('book');
    container.classList.add('flex');
    container.innerHTML = `
    <div class="book-details">
     <h3>${newBook.title}</h3>
     <p>${newBook.author}</p>
    </div>
     <button class="delete" data-remove=${index}>Delete</button>
     `;
    library.appendChild(container);

    forLs.push(newBook);
  }

  // delete function
  static deleteBook(index) {
    forLs.splice(index, 1);
    DisplayBook.setLs();
  }

  // set local storage
  static setLs() {
    localStorage.setItem('books', JSON.stringify(forLs));
  }

  // fetch local storage
  static getLs() {
    if (localStorage.getItem('books')) {
      const books = JSON.parse(localStorage.getItem('books'));
      books.forEach((book, index) => {
        const newBook = new Book(book.title, book.author);
        DisplayBook.addBook(newBook, index);
      });
    } else {
      localStorage.setItem('books', JSON.stringify(forLs));
    }
    const deleteBtn = document.querySelectorAll('.delete');
    deleteBtn.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const index = e.target.dataset.remove;
        DisplayBook.deleteBook(index);
        DisplayBook.setLs();
        e.target.parentElement.remove();
      });
    });
  }
}
