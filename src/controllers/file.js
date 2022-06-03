import { IMAGES_DATA } from "../constants/localStorageKeys";

export const getImage = (imageId) => {
  let result = "";
  const strImagesData = localStorage.getItem(IMAGES_DATA);
  const imagesData = strImagesData ? JSON.parse(strImagesData) : [];
  imagesData.forEach((el) => {
    if (el.id === imageId) result = el;
  });

  return result;
};

export const getAllImages = () => {
  const strImagesData = localStorage.getItem(IMAGES_DATA);
  const imagesData = strImagesData ? JSON.parse(strImagesData) : [];
  return imagesData;
};

export const createImage = (image) => {
  let allImages = getAllImages();
  const lastIndex = allImages.length - 1;
  const lastElement = allImages[lastIndex];
  const newId = lastElement?.id + 1 || 0;

  const newImageData = {
    id: newId,
    src: image,
  };
  allImages.push(newImageData);
  const strImagesData = JSON.stringify(allImages);
  localStorage.setItem(IMAGES_DATA, strImagesData);
  return newId;
};
