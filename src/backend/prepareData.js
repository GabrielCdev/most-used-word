import { removeTags } from "@/utils/removeTags";
import { filterValidRow } from "@/utils/filterValidRow";
import { removePunctuation } from "@/utils/removePunctuation";
import { mergeRows } from "@/utils/mergeRows";

module.exports = (rows) => {
  return new Promise((resolve, reject) => {
    try {
      const words = rows
        .filter(filterValidRow)
        .map(removePunctuation)
        .map(removeTags)
        .reduce(mergeRows)
        .split(" ")
        .map((word) => word.toLowerCase());

      resolve(words);
    } catch (e) {
      reject(e);
    }
  });
};
