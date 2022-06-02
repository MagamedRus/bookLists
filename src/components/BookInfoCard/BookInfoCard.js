import React from "react";
import styles from "./BookInfoCard.module.scss";

const BookInfoCard = ({ bookData, isOpen }) => {
  const { title, author, year, genre } = bookData;
  return (
    <div className={`${styles.container} ${isOpen && styles.openContainer}`}>
      <p className={`${styles.infoText} ${isOpen && styles.openLogin}`}>
        {title}
      </p>
      {isOpen && (
        <div className={styles.allInfoContainer}>
          <h2>Автор</h2>
          <p className={styles.infoText}>{author}</p>
          <h2>Жанр</h2>
          <p className={styles.infoText}>{genre}</p>
          <h2>Год выпуска</h2>
          <p className={styles.infoText}>{year}</p>
        </div>
      )}
    </div>
  );
};

export default BookInfoCard;
