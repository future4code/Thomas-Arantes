"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const countries_1 = require("./countries");
const app = express_1.default();
app.use(express_1.default.json());
app.use(cors_1.default());
app.listen(3003, () => {
    console.log("servidor tá okay em http://localhost:3003");
});
app.get('/countries/all', (req, res) => {
    const result = countries_1.countries.map(country => ({
        id: country.id,
        name: country.name
    }));
    res.status(200).send(result);
});
app.get('/countries/:id', (req, res) => {
    const countryById = countries_1.countries.find(country => country.id === Number(req.params.id));
    if (countryById) {
        res.status(200).send(countryById);
    }
    else {
        res.status(404).send("Not Found");
    }
});
app.get('/countries/search', (req, res) => {
    let searchCountry = countries_1.countries;
    if (req.query.name) {
        searchCountry = searchCountry.filter(country => country.name.includes(req.query.name));
    }
    if (req.query.name) {
        searchCountry = searchCountry.filter(country => country.capital.includes(req.query.capital));
    }
    if (req.query.name) {
        searchCountry = searchCountry.filter(country => country.continent.includes(req.query.continent));
    }
    if (searchCountry !== countries_1.countries && !searchCountry.length) {
        res.status(200).send(searchCountry);
    }
    else {
        res.status(404).send("Not Found");
    }
});
//# sourceMappingURL=index.js.map