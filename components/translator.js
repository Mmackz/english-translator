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

function translateTime(string) {
   return string
      .split(" ")
      .map((word) => {
         if (/\b\d\d:\d\d\b/.test(word)) {
            return highlight(word.split(":").join("."));
         }
         if (/\b\d\d\.\d\d\b/.test(word)) {
            return highlight(word.split(".").join(":"));
         }
         return word;
      })
      .join(" ");
}

function highlight(word) {
   return `<span class=\"highlight\">${word}</span>`;
}

function convertTitles(string, titles) {
   const wordsToConvert = string.split(" ");

   return wordsToConvert
      .map((word) => {
         const lowerWord = word.toLowerCase();
         if (titles.hasOwnProperty(lowerWord)) {
            return highlight(
               titles[lowerWord].charAt(0).toUpperCase() + titles[lowerWord].slice(1)
            );
         }
         return word;
      })
      .join(" ");
}

class Translator {
   americanToBritish(string) {
      let wordsToConvert = capitalize(string);
      const combinedWords = {
         ...americanToBritishSpelling,
         ...americanOnly
      };
      const americanWords = Object.keys(combinedWords);
      const britishWords = Object.values(combinedWords);

      americanWords.forEach((word, i) => {
         let match = wordsToConvert.match(new RegExp(`\\b${word}\\b`, "i"));

         while (match) {
            const { index } = match;
            const words =
               wordsToConvert.substring(0, index) +
               highlight(britishWords[i]) +
               wordsToConvert.substring(index + word.length);
            wordsToConvert = words;
            match = wordsToConvert.match(new RegExp(`\\b${word}\\b`, "i"));         
         }
         
      });
      return translateTime(convertTitles(wordsToConvert, americanToBritishTitles));
   }

   britishToAmerican(string) {
      let wordsToConvert = capitalize(string);
      const combinedWords = {
         ...americanToBritishSpelling,
         ...flipObject(britishOnly)
      };
      const americanWords = Object.keys(combinedWords);
      const britishWords = Object.values(combinedWords);

      britishWords.forEach((word, i) => {
         let match = wordsToConvert.match(new RegExp(`\\b${word}\\b`, "i"));
         while (match) {
            const { index } = match;
            const words =
               wordsToConvert.substring(0, index) +
               highlight(americanWords[i]) +
               wordsToConvert.substring(index + word.length);
            wordsToConvert = words;
            match = wordsToConvert.match(new RegExp(`\\b${word}\\b`, "i"));
         }
      });

      return translateTime(convertTitles(wordsToConvert, flipObject(americanToBritishTitles)));
   }
}

module.exports = Translator;
