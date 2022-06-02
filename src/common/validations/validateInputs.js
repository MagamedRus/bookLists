import { latinAndCyrrilReg } from "../../constants/regularExpressions";
import { MIN_NAME_LENGTH } from "../../constants/validations/userRegistration";
import {
  ONLY_LAT_KYR_LETTERS,
  MIN_TWO_SYMBOLS,
  EMPTY_INPUT,
} from "../../constants/types/exceptionTypes/registrationExceptionTypes";
import { isEmptyString } from "./stringValidations";

export const validName = (name) => {
  let result = null;
  const logLength = name.length;
  const isGoodLength = logLength >= MIN_NAME_LENGTH;
  const isEmpty = isEmptyString(name);
  if (isEmpty) {
    result = EMPTY_INPUT;
  } else if (!isGoodLength) {
    result = MIN_TWO_SYMBOLS;
  } else if (!latinAndCyrrilReg.test(name)) {
    result = ONLY_LAT_KYR_LETTERS;
  }
  return result;
};


export const validYear = (name) => {
  
}