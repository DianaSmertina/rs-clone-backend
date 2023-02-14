const bcrypt = require('bcryptjs');
const { json } = require('express');
const db = require('../db');

class ResultsController {
    async updateCountry(req, res) {
        try {
            const username = await req.body.username;
            const country = await req.body.country;
            await db.query('UPDATE results SET country = ($1) WHERE user_name = ($2)', [country, username]);
            return res.json('ok');
        } catch(e) {
            console.log(e);
        }
    }

    async updatePopulation(req, res) {
        try {
            const username = await req.body.username;
            const population = await req.body.population;
            await db.query('UPDATE results SET population = ($1) WHERE user_name = ($2)', [population, username]);
            return res.json('ok');
        } catch(e) {
            console.log(e);
        }
    }

    async updateFlags(req, res) {
        try {
            const username = await req.body.username;
            const flags = await req.body.flags;
            await db.query('UPDATE results SET flags = ($1) WHERE user_name = ($2)', [flags, username]);
            return res.json('ok');
        } catch(e) {
            console.log(e);
        }
    }
}

module.exports = new ResultsController();