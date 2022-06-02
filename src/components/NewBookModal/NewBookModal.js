import React, { useState } from "react";
import styles from "./NewBookModal.module.scss";
import Frame from "../Frame/Frame";
import InputWithHeader from "../InputWithHeader/InputWithHeader";
import { bookStates } from "../../constants/initialStates/bookStates";
import { bookInputType } from "../../constants/types/newBookInputTypes";

const NewBookModal = ({ goNext }) => {
  const [data, setData] = useState(bookStates);

  const onConfirm = () => goNext(data);
  const changeData = (typeData, value) => {
    const changedData = { ...data, [typeData]: value || null };
    setData(changedData);
  };
  const typedChangeData = (typeData) => (value) => changeData(typeData, value);

  return (
    <Frame style={styles.container} headerText={"Добавить"}>
      <InputWithHeader
        style={styles.textInput}
        maxLength={18}
        onInput={typedChangeData("title")}
        headerText={"Название"}
      />
      <InputWithHeader
        style={styles.textInput}
        maxLength={18}
        onInput={typedChangeData(bookInputType.AUTHOR)}
        headerText={"Автор"}
      />
      <button className={styles.confirmBtn} onClick={onConfirm}>
        Далее
      </button>
    </Frame>
  );
};

export default NewBookModal;
