import {
  latinAndCyrrilReg,
  latinCyrrilNumbReg,
} from "../../constants/regularExpressions";
import {
  ONLY_LAT_KYR_LETTERS,
  ONLY_NUMB_LAT_KYR_LETTERS,
  MIN_TWO_SYMBOLS,
  EMPTY_INPUT,
  BAD_FORMAT_DATE,
  BIG_YEAR,
} from "../../constants/types/exceptionTypes";

export const validName = (value) => {
  let result = null;
  const name = value?.replace(" ", "");
  const logLength = name?.length;
  const isGoodLength = logLength >= 2;
  const isEmpty = name === null && !name;
  if (isEmpty) {
    result = EMPTY_INPUT;
  } else if (!isGoodLength) {
    result = MIN_TWO_SYMBOLS;
  } else if (!latinAndCyrrilReg.test(name)) {
    result = ONLY_LAT_KYR_LETTERS;
  }
  return result;
};

export const validTitle = (value) => {
  let result = null;
  const title = value?.replace(" ", "");
  const logLength = title?.length;
  const isGoodLength = logLength >= 2;
  const isEmpty = title === null && !title;
  if (isEmpty) {
    result = EMPTY_INPUT;
  } else if (!isGoodLength) {
    result = MIN_TWO_SYMBOLS;
  } else if (!latinCyrrilNumbReg.test(title)) {
    result = ONLY_NUMB_LAT_KYR_LETTERS;
  }
  return result;
};

export const validYear = (year) => {
  let result = null;
  const isEmpty = year === null && !year;
  const currYear = new Date().getFullYear();
  if (isEmpty) {
    result = EMPTY_INPUT;
  } else if (currYear < Number(year)) {
    result = BIG_YEAR;
  } else {
    const yearLength = year.length;
    const isGoodLength = yearLength > 1;
    if (!isGoodLength) result = BAD_FORMAT_DATE;
  }

  return result;
};
