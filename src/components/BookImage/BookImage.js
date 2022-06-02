import React from "react";
import styles from "./BookImage.module.scss";

const BookImage = ({ title, imgData }) => {
  const textIco = title?.charAt(0).toUpperCase();

  return (
    <div className={styles.container}>
      {imgData ? (
        <img className={styles.img} alt={"Аватарка"} src={imgData} />
      ) : (
        <p className={styles.textImg}>{textIco}</p>
      )}
    </div>
  );
};

export default BookImage;
