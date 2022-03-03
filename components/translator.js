const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

function flipObject(obj) {
   return Object.fromEntries(Object.entries(obj).map((e) => [e[1], e[0]]));
}

function capitalize(str) {
   return str.charAt(0).toUpperCase() + str.slice(1);
}

class Translator {
   americanToBritish(string) {
      let wordsToConvert = capitalize(string);
      const combinedWordsTitles = {
         ...americanToBritishSpelling,
         ...americanToBritishTitles,
         ...americanOnly
      };
      const americanWords = Object.keys(combinedWordsTitles);
      const britishWords = Object.values(combinedWordsTitles);

      americanWords.forEach((word, i) => {
         const match = wordsToConvert.match(new RegExp(`\\b${word}\\b`, "i"));
         if (match) {
            const { index } = match;
            const words =
               wordsToConvert.substring(0, index) +
               `<span class=\"highlight\">` +
               britishWords[i] +
               "</span>" +
               wordsToConvert.substring(index + word.length);
            wordsToConvert = words;
         }
      });
      return wordsToConvert;
   }

   britishToAmerican(string) {
      let wordsToConvert = capitalize(string);
      const combinedWordsTitles = {
         ...americanToBritishSpelling,
         ...americanToBritishTitles,
         ...flipObject(britishOnly)
      };
      const americanWords = Object.keys(combinedWordsTitles);
      const britishWords = Object.values(combinedWordsTitles);

      britishWords.forEach((word, i) => {
         const match = wordsToConvert.match(new RegExp(`\\b${word}\\b`, "i"));
         if (match) {
            const { index } = match;
            const words =
               wordsToConvert.substring(0, index) +
               `<span class=\"highlight\">` +
               americanWords[i] +
               "</span>" +
               wordsToConvert.substring(index + word.length);
            wordsToConvert = words;
         }
      });

      return wordsToConvert;
   }
}

module.exports = Translator;
