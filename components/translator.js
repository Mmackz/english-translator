const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

class Translator {
   static americanToBritish(string) {
      let wordsToConvert = string;
      const combinedWordsTitles = {
         ...americanToBritishSpelling,
         ...americanToBritishTitles,
         ...americanOnly
      };
      const americanWords = Object.keys(combinedWordsTitles);
      const britishWords = Object.values(combinedWordsTitles);

      // use regex to match word boundarys (avoid words within words)

      americanWords.forEach((word, i) => {
         const index = wordsToConvert.indexOf(word);
         if (index !== -1) {
            console.log(word);
            const words =
               wordsToConvert.substring(0, index) +
               britishWords[i] +
               wordsToConvert.substring(index + word.length);
            wordsToConvert = words;
         }
      });
      return wordsToConvert;
   }

   britishToAmerican(string) {}
}

const t = Translator.americanToBritish(
   "bookmobile is the arbor armory banister of artifacts and analog stuff."
);
console.log(t);

module.exports = Translator;
