const chai = require("chai");
const assert = chai.assert;

const Translator = require("../components/translator.js");
const translator = new Translator();

suite("Unit Tests", function () {
   suite("translator method tests", function () {
      suite("americanToBritish() outputs", function () {
         test("translate string to British English", function (done) {
            const testString = "Mangoes are my favorite fruit.";
            const expected = `Mangoes are my <span class=\"highlight\">favourite</span> fruit.`;
            const result = translator.americanToBritish(testString);
            assert.isString(result, "expected result to be a string");
            assert.equal(result, expected);
            done();
         });

         test("translate string to British English", function (done) {
            const testString = "I ate yogurt for breakfast.";
            const expected = `I ate <span class=\"highlight\">yoghurt</span> for breakfast.`;
            const result = translator.americanToBritish(testString);
            assert.isString(result, "expected result to be a string");
            assert.equal(result, expected);
            done();
         });

         test("translate string to British English", function (done) {
            const testString = "We had a party at my friend's condo.";
            const expected = `We had a party at my friend's <span class=\"highlight\">flat</span>.`;
            const result = translator.americanToBritish(testString);
            assert.isString(result, "expected result to be a string");
            assert.equal(result, expected);
            done();
         });

         test("translate string to British English", function (done) {
            const testString = "Can you toss this in the trashcan for me?";
            const expected = `Can you toss this in the <span class=\"highlight\">bin</span> for me?`;
            const result = translator.americanToBritish(testString);
            assert.isString(result, "expected result to be a string");
            assert.equal(result, expected);
            done();
         });

         test("translate string to British English", function (done) {
            const testString = "The parking lot was full.";
            const expected = `The <span class=\"highlight\">car park</span> was full.`;
            const result = translator.americanToBritish(testString);
            assert.isString(result, "expected result to be a string");
            assert.equal(result, expected);
            done();
         });

         test("translate string to British English", function (done) {
            const testString = "Like a high tech Rube Goldberg machine.";
            const expected = `Like a high tech <span class=\"highlight\">Heath Robinson device</span>.`;
            const result = translator.americanToBritish(testString);
            assert.isString(result, "expected result to be a string");
            assert.equal(result, expected);
            done();
         });

         test("translate string to British English", function (done) {
            const testString = "To play hooky means to skip class or work.";
            const expected = `To <span class=\"highlight\">bunk off</span> means to skip class or work.`;
            const result = translator.americanToBritish(testString);
            assert.isString(result, "expected result to be a string");
            assert.equal(result, expected);
            done();
         });

         test("translate string to British English", function (done) {
            const testString = "No Mr. Bond, I expect you to die.";
            const expected = `No <span class=\"highlight\">Mr</span> Bond, I expect you to die.`;
            const result = translator.americanToBritish(testString);
            assert.isString(result, "expected result to be a string");
            assert.equal(result, expected);
            done();
         });

         test("translate string to British English", function (done) {
            const testString = "Dr. Grosh will see you now.";
            const expected = `<span class=\"highlight\">Dr</span> Grosh will see you now.`;
            const result = translator.americanToBritish(testString);
            assert.isString(result, "expected result to be a string");
            assert.equal(result, expected);
            done();
         });

         test("translate string to British English", function (done) {
            const testString = "Lunch is at 12:15 today.";
            const expected = `Lunch is at <span class=\"highlight\">12.15</span> today.`;
            const result = translator.americanToBritish(testString);
            assert.isString(result, "expected result to be a string");
            assert.equal(result, expected);
            done();
         });
      });

      suite("britishToAmerican() outputs", function () {
         test("translate string to American English", function (done) {
            const testString = "We watched the footie match for a while.";
            const expected = `We watched the <span class=\"highlight\">soccer</span> match for a while.`;
            const result = translator.britishToAmerican(testString);
            assert.isString(result, "expected result to be a string");
            assert.equal(result, expected);
            done();
         });

         test("translate string to American English", function (done) {
            const testString = "Paracetamol takes up to an hour to work.";
            const expected = `<span class=\"highlight\">Tylenol</span> takes up to an hour to work.`;
            const result = translator.britishToAmerican(testString);
            assert.isString(result, "expected result to be a string");
            assert.equal(result, expected);
            done();
         });

         test("translate string to American English", function (done) {
            const testString = "First, caramelise the onions.";
            const expected = `First, <span class=\"highlight\">caramelize</span> the onions.`;
            const result = translator.britishToAmerican(testString);
            assert.isString(result, "expected result to be a string");
            assert.equal(result, expected);
            done();
         });

         test("translate string to American English", function (done) {
            const testString = "I spent the bank holiday at the funfair.";
            const expected = `I spent the <span class=\"highlight\">public holiday</span> at the <span class=\"highlight\">carnival</span>.`;
            const result = translator.britishToAmerican(testString);
            assert.isString(result, "expected result to be a string");
            assert.equal(result, expected);
            done();
         });

         test("translate string to American English", function (done) {
            const testString = "I had a bicky then went to the chippy.";
            const expected = `I had a <span class=\"highlight\">cookie</span> then went to the <span class=\"highlight\">fish-and-chip shop</span>.`;
            const result = translator.britishToAmerican(testString);
            assert.isString(result, "expected result to be a string");
            assert.equal(result, expected);
            done();
         });

         test("translate string to American English", function (done) {
            const testString = "I've just got bits and bobs in my bum bag.";
            const expected = `I've just got <span class=\"highlight\">odds and ends</span> in my <span class=\"highlight\">fanny pack</span>.`;
            const result = translator.britishToAmerican(testString);
            assert.isString(result, "expected result to be a string");
            assert.equal(result, expected);
            done();
         });

         test("translate string to American English", function (done) {
            const testString = "The car boot sale at Boxted Airfield was called off.";
            const expected = `The <span class=\"highlight\">swap meet</span> at Boxted Airfield was called off.`;
            const result = translator.britishToAmerican(testString);
            assert.isString(result, "expected result to be a string");
            assert.equal(result, expected);
            done();
         });

         test("translate string to American English", function (done) {
            const testString = "Have you met Mrs Kalyani?";
            const expected = `Have you met <span class=\"highlight\">Mrs.</span> Kalyani?`;
            const result = translator.britishToAmerican(testString);
            assert.isString(result, "expected result to be a string");
            assert.equal(result, expected);
            done();
         });

         test("translate string to American English", function (done) {
            const testString = "Prof Joyner of King's College, London.";
            const expected = `<span class=\"highlight\">Prof.</span> Joyner of King's College, London.`;
            const result = translator.britishToAmerican(testString);
            assert.isString(result, "expected result to be a string");
            assert.equal(result, expected);
            done();
         });

         test("translate string to American English", function (done) {
            const testString = "Tea time is usually around 4 or 4.30";
            const expected = `Tea time is usually around 4 or <span class=\"highlight\">4:30</span>`;
            const result = translator.britishToAmerican(testString);
            assert.isString(result, "expected result to be a string");
            assert.equal(result, expected);
            done();
         });
      });

      suite("highlight translations", function () {
         test("Highlight translation in Mangoes are my favorite fruit.", function (done) {
            const testString = "Mangoes are my favorite fruit.";
            const expected = `Mangoes are my <span class=\"highlight\">favourite</span> fruit.`;
            const result = translator.americanToBritish(testString);
            assert.isString(result, "expected result to be a string");
            assert.equal(result, expected);
            assert.include(result, "highlight", "translation should be highlighted");
            done();
         });

         test("highlight translation in I ate yogurt for breakfast.", function (done) {
            const testString = "I ate yogurt for breakfast.";
            const expected = `I ate <span class=\"highlight\">yoghurt</span> for breakfast.`;
            const result = translator.americanToBritish(testString);
            assert.isString(result, "expected result to be a string");
            assert.equal(result, expected);
            assert.include(result, "highlight", "translation should be highlighted");
            done();
         });

         test("highlight translation in We watched the footie match for a while.", function (done) {
            const testString = "We watched the footie match for a while.";
            const expected = `We watched the <span class=\"highlight\">soccer</span> match for a while.`;
            const result = translator.britishToAmerican(testString);
            assert.isString(result, "expected result to be a string");
            assert.equal(result, expected);
            assert.include(result, "highlight", "translation should be highlighted");
            done();
         });

         test("highlight translation in Paracetamol takes up to an hour to work.", function (done) {
            const testString = "Paracetamol takes up to an hour to work.";
            const expected = `<span class=\"highlight\">Tylenol</span> takes up to an hour to work.`;
            const result = translator.britishToAmerican(testString);
            assert.isString(result, "expected result to be a string");
            assert.equal(result, expected);
            assert.include(result, "highlight", "translation should be highlighted");
            done();
         });
      })
   });
});

