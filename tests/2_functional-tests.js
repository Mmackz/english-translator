const chai = require("chai");
const chaiHttp = require("chai-http");
const assert = chai.assert;
const server = require("../server.js");

chai.use(chaiHttp);

suite("Functional Tests", function () {
   suite("POST request to /api/translate", function () {
      test("with valid text and locale fields", function (done) {
         chai
            .request(server)
            .post("/api/translate")
            .send({ locale: "american-to-british", text: "Mangoes are my favorite fruit." })
            .end(function (err, res) {
               assert.isNull(err);
               assert.equal(res.status, 200);
               assert.notProperty(res.body, "error", "error property should not exist");
               assert.property(res.body, "text", "body should have text property");
               assert.property(
                  res.body,
                  "translation",
                  "body should have translation property"
               );
               assert.equal(res.body.text, res.request._data.text);
               done();
            });
      });

      test("with text and invalid locale field", function (done) {
         chai
            .request(server)
            .post("/api/translate")
            .send({
               locale: "american-to-japanese",
               text: "Mangoes are my favorite fruit."
            })
            .end(function (err, res) {
               assert.isNull(err);
               assert.equal(res.status, 200);
               assert.property(res.body, "error", "body should have error property");
               assert.notProperty(res.body, "text", "body should not have text property");
               assert.notProperty(
                  res.body,
                  "translation",
                  "body should not have translation property"
               );
               assert.equal(res.body.error, "Invalid value for locale field");
               done();
            });
      });

      test("with missing text field", function (done) {
         chai
            .request(server)
            .post("/api/translate")
            .send({
               locale: "american-to-british"
            })
            .end(function (err, res) {
               assert.isNull(err);
               assert.equal(res.status, 200);
               assert.property(res.body, "error", "body should have error property");
               assert.notProperty(res.body, "text", "body should not have text property");
               assert.notProperty(
                  res.body,
                  "translation",
                  "body should not have translation property"
               );
               assert.equal(res.body.error, "Required field(s) missing");
               done();
            });
      });

      test("with missing locale field", function (done) {
         chai
            .request(server)
            .post("/api/translate")
            .send({
               text: "Mangoes are my favorite fruit."
            })
            .end(function (err, res) {
               assert.isNull(err);
               assert.equal(res.status, 200);
               assert.property(res.body, "error", "body should have error property");
               assert.notProperty(res.body, "text", "body should not have text property");
               assert.notProperty(
                  res.body,
                  "translation",
                  "body should not have translation property"
               );
               assert.equal(res.body.error, "Required field(s) missing");
               done();
            });
      });

      test("with empty text", function (done) {
         chai
            .request(server)
            .post("/api/translate")
            .send({
               locale: "american-to-british",
               text: ""
            })
            .end(function (err, res) {
               assert.isNull(err);
               assert.equal(res.status, 200);
               assert.property(res.body, "error", "body should have error property");
               assert.notProperty(res.body, "text", "body should not have text property");
               assert.notProperty(
                  res.body,
                  "translation",
                  "body should not have translation property"
               );
               assert.equal(res.body.error, "No text to translate");
               done();
            });
      });

      test("with text that needs no translation", function (done) {
         chai
            .request(server)
            .post("/api/translate")
            .send({
               locale: "american-to-british",
               text: "This text needs no translation."
            })
            .end(function (err, res) {
               assert.isNull(err);
               assert.equal(res.status, 200);
               assert.notProperty(res.body, "error", "error property should not exist");
               assert.property(res.body, "text", "body should have text property");
               assert.property(
                  res.body,
                  "translation",
                  "body should have translation property"
               );
               assert.equal(res.body.text, res.request._data.text);
               assert.equal(res.body.translation, "Everything looks good to me!")
               done();
            });
      });
   });
});
