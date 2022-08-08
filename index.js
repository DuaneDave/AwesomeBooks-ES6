// eslint-disable-next-line no-unused-vars
import Render from './modules/Render.js';

// buttons
const listBtn = document.querySelector('#list');
const addBookBtn = document.querySelector('#add-new');
const contactBtn = document.querySelector('#contact');

// sections
const contact = document.querySelector('.contact');
const bookList = document.querySelector('.shelve');
const addNewBook = document.querySelector('.form');

listBtn.addEventListener('click', (e) => {
  e.preventDefault();
  bookList.classList.remove('hide');
  contact.classList.add('hide');
  addNewBook.classList.add('hide');
});

addBookBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addNewBook.classList.remove('hide');
  contact.classList.add('hide');
  bookList.classList.add('hide');
});

contactBtn.addEventListener('click', (e) => {
  e.preventDefault();
  contact.classList.remove('hide');
  bookList.classList.add('hide');
  addNewBook.classList.add('hide');
});

const scrollToTop = document.querySelector('.scroll-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scrollToTop.classList.add('fade');
  } else {
    scrollToTop.classList.remove('fade');
  }
});

const linkAction = document.querySelectorAll('.nav-link');
linkAction.forEach((link) => {
  link.addEventListener('click', () => {
    linkAction.forEach((link) => link.classList.remove('active'));
    link.classList.add('active');
  });
});
