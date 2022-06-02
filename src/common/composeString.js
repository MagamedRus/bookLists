import { numberReg } from "../constants/regularExpressions";

/** Remove all characters in a
 * string that are not numbers */
export const getOnlyNumbers = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (numberReg.test(str[i])) {
      result += str[i];
    }
  }
  return result;
};
