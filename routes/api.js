"use strict";

const Translator = require("../components/translator.js");
const validLocales = ["british-to-american", "american-to-british"];

module.exports = function (app) {
   const translator = new Translator();

   app.route("/api/translate").post((req, res) => {
      const { locale, text } = req.body;

      // check required fields exist
      if (!locale || text === undefined) {
         res.json({ error: "Required field(s) missing" });
      }

      // check if text is empty
      else if (text === "") {
         res.json({ error: "No text to translate"})
      }

      // check locale is valid
      else if (!validLocales.includes(locale)) {
         res.json({ error: "Invalid value for locale field" });
      }

      // request is valid, start translating
      else {
         let translation =
            locale === "british-to-american"
               ? translator.britishToAmerican(text)
               : translator.americanToBritish(text);
         if (translation === text) {
            translation = "Everything looks good to me!"
         }
         res.json({ text, translation });
      }
   });
};
