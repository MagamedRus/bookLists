import React from "react";
import ImagePicker from "../ImagePicker/ImagePicker";
import VerticalImage from "../VerticalImage/VerticalImage";
import { getCompressedImg } from "../../common/files";

const CombinedImage = ({ imgData, setImgData }) => {
  const removeImg = () => setImgData(null);

  const setImgFile = async (imgFile) => {
    const imgDataFile = await getCompressedImg(imgFile, 145, 205);
    setImgData(imgDataFile);
  };

  return (
    <>
      {!imgData && <ImagePicker setImage={setImgFile} isDisable={false} />}
      {imgData && <VerticalImage src={imgData} removeImage={removeImg} />}
    </>
  );
};

export default CombinedImage;
