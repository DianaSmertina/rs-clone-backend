const bcrypt = require('bcryptjs');
const { json } = require('express');
const db = require('../db');

class ResultsController {
    async updateCountry(req, res) {
        try {
            const username = await req.body.username;
            const country = await req.body.country;
            await db.query('UPDATE results SET country = ($1) WHERE user_name = ($2)', [country, username]);
            return res.json('new record');
        } catch(e) {
            res.status(400).json({message: 'Update record error'});
        }
    }

    async updatePopulation(req, res) {
        try {
            const username = await req.body.username;
            const population = await req.body.population;
            await db.query('UPDATE results SET population = ($1) WHERE user_name = ($2)', [population, username]);
            return res.json('new record');
        } catch(e) {
            res.status(400).json({message: 'Update record error'});
        }
    }

    async updateFlags(req, res) {
        try {
            const username = await req.body.username;
            const flags = await req.body.flags;
            await db.query('UPDATE results SET flags = ($1) WHERE user_name = ($2)', [flags, username]);
            return res.json('new record');
        } catch(e) {
            res.status(400).json({message: 'Update record error'});
        }
    }

    async getCountry(req, res) {
        try {
            const username = req.params.username;
            const records = await db.query('SELECT * FROM results where user_name = $1', [username]);
            if (records.rowCount === 0) {
                return res.status(400).json({message: 'User not found'});
            }
            return res.json(records.rows[0].country);
        } catch(e) {
            res.status(400).json({message: 'Get record error'});
        }
    }

    async getPopulation(req, res) {
        try {
            const username = req.params.username;
            const records = await db.query('SELECT * FROM results where user_name = $1', [username]);
            if (records.rowCount === 0) {
                return res.status(400).json({message: 'User not found'});
            }
            return res.json(records.rows[0].population);
        } catch(e) {
            res.status(400).json({message: 'Get record error'});
        }
    }

    async getFlags(req, res) {
        try {
            const username = req.params.username;
            const records = await db.query('SELECT * FROM results where user_name = $1', [username]);
            if (records.rowCount === 0) {
                return res.status(400).json({message: 'User not found'});
            }
            return res.json(records.rows[0].flags);
        } catch(e) {
            res.status(400).json({message: 'Get record error'});
        }
    }

    async getAllResults(req, res) {
        try {
            const playResults = await db.query('SELECT * FROM results ORDER BY country DESC');
            return res.json(playResults.rows);
        } catch(e) {
            res.status(400).json({message: 'Get records error'});
        }
    }
}

module.exports = new ResultsController();