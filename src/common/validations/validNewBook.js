import { validName, validTitle, validYear } from "./validateInputs";
import { bookInputType } from "../../constants/types/newBookInputTypes";

export const validNewBookInp = (inpType, value) => {
  let errType = null;

  switch (inpType) {
    case bookInputType.TITLE:
      errType = validTitle(value);
      break;
    case bookInputType.AUTHOR:
      errType = validName(value);
      break;
    case bookInputType.YEAR:
      errType = validYear(value);
      break;
    case bookInputType.GENRE:
      errType = validName(value);
      break;
    default:
      break;
  }

  return errType;
};
