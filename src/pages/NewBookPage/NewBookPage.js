import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./NewBookPage.module.scss";
import Frame from "../../components/Frame/Frame";
import InputWithHeader from "../../components/InputWithHeader/InputWithHeader";
import { basePath } from "../../constants/routePath";
import { bookStates } from "../../constants/initialStates/bookStates";
import { bookInputType } from "../../constants/types/newBookInputTypes";
import CombinedImage from "../../components/CombinedImage/CombinedImage";
import { validNewBookInp } from "../../common/validations/validNewBook";
import { inputTypes } from "../../constants/types/inputTypes";
import { createNewBook } from "../../controllers/book";

function NewBookPage() {
  const params = useLocation();
  const navigator = useNavigate();
  const [bookData, setBookData] = useState({...bookStates});
  const [imgData, setImgData] = useState(null);
  const [errStates, setErrStates] = useState({...bookStates});
  const validTimers = {...bookStates};

  const onConfirm = () => {
    const isError = checkAll();
    if (!isError) {
      createNewBook(bookData, imgData);
      navigator(basePath);
    }
  };

  const checkAll = () => {
    let isError = false;
    Object.keys(bookData).forEach((type) => {
      const errTxt = validNewBookInp(type, bookData[type]);
      setErrStates((prevState) => ({ ...prevState, [type]: errTxt }));
      if (errTxt) isError = true;
    });
    return isError;
  };

  const onInput = (type, value) => {
    validTimers[type] && clearTimeout(validTimers[type]);
    validTimers[type] = setTimeout(() => {
      const errTxt = validNewBookInp(type, value);
      setErrStates((prevState) => ({ ...prevState, [type]: errTxt }));
      setBookData((prevState) => ({ ...prevState, [type]: value }));
    }, 500);
  };

  const typedOnInput = (type) => (value) => onInput(type, value);

  useEffect(() => {
    const bookData = params.state?.newBook;
    bookData && setBookData(bookData);
  }, [params.state]);

  return (
    <div className={styles.container}>
      <Frame style={styles.content} headerText={"Добавить книгу"}>
        <div className={styles.fillInputs}>
          <InputWithHeader
            style={styles.input}
            headerText={"Название"}
            intialValue={bookData.title}
            onInput={typedOnInput(bookInputType.TITLE)}
            errorText={errStates[bookInputType.TITLE]}
          />
          <InputWithHeader
            style={styles.input}
            headerText={"Автор"}
            intialValue={bookData.author}
            onInput={typedOnInput(bookInputType.AUTHOR)}
            errorText={errStates[bookInputType.AUTHOR]}
          />
          <InputWithHeader
            style={styles.input}
            headerText={"Год выпуска"}
            maxLength={4}
            inputType={inputTypes.NUMBERS}
            intialValue={bookData.year}
            onInput={typedOnInput(bookInputType.YEAR)}
            errorText={errStates[bookInputType.YEAR]}
          />
          <InputWithHeader
            style={styles.input}
            headerText={"Жанр"}
            maxLength={20}
            intialValue={bookData.genre}
            onInput={typedOnInput(bookInputType.GENRE)}
            errorText={errStates[bookInputType.GENRE]}
          />
        </div>
        <div className={styles.rightContent}>
          <CombinedImage imgData={imgData} setImgData={setImgData} />
          <button onClick={onConfirm} className={styles.createBtn}>
            Создать
          </button>
        </div>
      </Frame>
    </div>
  );
}

export default NewBookPage;
