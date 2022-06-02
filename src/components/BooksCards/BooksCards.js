import React from "react";
import styles from "./BooksCards.module.scss";
import BookCard from "../BookCard/BookCard";
import Frame from "../Frame/Frame";

const BooksCards = ({ booksData }) => {
  return (
    <Frame style={styles.container} headerText={"Книги"}>
      <div className={styles.content}>
        {booksData.map((bookData) => (
          <BookCard key={bookData.id} bookData={bookData} />
        ))}
      </div>
    </Frame>
  );
};

export default BooksCards;
