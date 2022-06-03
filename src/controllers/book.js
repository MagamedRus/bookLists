import { BOOKS_DATA } from "../constants/localStorageKeys";
import { createImage } from "./file";

export const getAllBooks = () => {
  const strBookData = localStorage.getItem(BOOKS_DATA);
  const bookData = strBookData ? JSON.parse(strBookData) : [];
  return bookData;
};

export const createNewBook = (bookData, file) => {
  let booksData = getAllBooks();
  const lastIndex = booksData.length - 1;
  const lastElement = booksData[lastIndex];
  const newId = lastElement?.id + 1 || 0;
  let newBook = {
    id: newId,
    ...bookData,
  };
  if (file != null) {
    const imageId = createImage(file);
    newBook.imageId = imageId;
  }
  booksData.push(newBook);
  const strBooksData = JSON.stringify(booksData);
  localStorage.setItem(BOOKS_DATA, strBooksData);

  return newId;
};
