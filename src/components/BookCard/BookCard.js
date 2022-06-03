import React, { useCallback, useEffect, useState } from "react";
import { getImage } from "../../controllers/file";
import BookImage from "../BookImage/BookImage";
import BookInfoCard from "../BookInfoCard/BookInfoCard";
import styles from "./BookCard.module.scss";

const BookCard = ({ bookData }) => {
  const { title, imageId } = bookData;
  const [imgData, setImgData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const changeOpenState = () => setIsOpen(!isOpen);

  const uploadImg = useCallback(async () => {
    if (imageId != null) {
      const imageData = getImage(imageId);
      setImgData(imageData);
    }
  }, [imageId]);

  useEffect(uploadImg, [uploadImg]);

  return (
    <div className={styles.container}>
      <BookImage title={title} imgData={imgData?.src} />
      <div
        className={`${styles.actionContainer} ${
          isOpen && styles.openActionContainer
        }`}
      >
        <BookInfoCard bookData={bookData} isOpen={isOpen} />
        <button
          className={styles.btnsContainer}
          onClick={changeOpenState}
          title="Показать больше"
        >
          {isOpen && <p className={styles.arrowDown}>⌄</p>}
          {!isOpen && <p className={styles.arrowTop}>⌃</p>}
        </button>
      </div>
    </div>
  );
};

export default BookCard;
