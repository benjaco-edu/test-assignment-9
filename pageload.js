var webdriver = require('selenium-webdriver');

const chai = require('chai');
const Joi = require("joi");
const fetch = require("node-fetch");
var expect = chai.expect;

const itParam = require('mocha-param');


root = function() {
    return 'http://104.248.249.47';
};

json = function() {
    return '/student/Get';
};

dynamic = function() {
    return '/student/GetHtml?id=';
};




var driver;

let runWith = [
    [1, `ID : 1
Name : Adam
Age : 23`],
    [2, `ID : 2
Name : Brian
Age : 31`],
    [3, `ID : 3
Name : Cecilia
Age : 32`],
    [4, `ID : 4
Name : Dante
Age : 41`],
    [5, `ID : 5
Name : Eve
Age : 33`],
    [6, `Invalid input`],
];



const schema = Joi.array().items(Joi.object({
    id: Joi.number().required(),
    name: Joi.string().required(),
    age: Joi.number().min(0).required(),
    courses: Joi.array().items(Joi.number().required()).required()
}));



describe('Site verification', function() {
    this.timeout(30000);

    before(function () {
        driver = new webdriver.Builder().
            withCapabilities(webdriver.Capabilities.chrome()).
            build();
    });

    after(function () {
        driver.quit();
    });

    // using a library
    itParam("Dyn html - (${value[0]})", runWith, async function (value) {
        let page = await driver.get(root()+dynamic()+value[0]);
        let text = await (await driver.findElement(webdriver.By.css("main"))).getText();

        expect(text).to.be.equal(value[1]);
    });

    it("API returns right format", async function () {

        let data = await fetch(root() + json()).then(r => r.json());

        const result = Joi.validate(data, schema);

        expect(result.error).to.be.null;


    });

});
