const bcrypt = require('bcryptjs');
const { json } = require('express');
const db = require('../db');

class UserController {
    async getUser(req, res) {
        try {
            const username = req.params.username;
            const user = await db.query('SELECT * FROM users where username = $1', [username]);
            if (user.rowCount === 0) {
                return res.status(400).json({message: 'User not found'});
            }
            return res.json(user.rows[0]);
        } catch(e) {
            console.log(e);
        }
    }

    async getUsers(req, res) {
        try {
            const user = await db.query('SELECT * FROM users ORDER BY id ASC');
            return res.json(user.rows);
        } catch(e) {
            console.log(e);
        }
    }

    async createNewUser(req, res) {
        try {
            const name = await req.body.username;
            const password = await req.body.password;
            const hash = bcrypt.hashSync(password, 7);
            await db.query('INSERT INTO users(username, password) VALUES ($1, $2)', [name, hash]);
            return res.json('ok');
        } catch(e) {
            if (e.code = '23505') {
                console.log(e);
                res.status(400).json({message: 'This username is already taken'});
            } else {
                res.status(400).json({message: 'Registration error'});
            }
        }
    }

    async signIn(req, res) {
        try {
            const name = await req.body.username;
            const password = await req.body.password;
            const user = await db.query('SELECT * FROM users where username = $1', [name]);
            if (user.rowCount === 0) {
                return res.status(400).json({message: 'User not found'});
            }
            const validPassword = bcrypt.compare(password, user.rows[0].password);
            if (!validPassword) {
                return res.status(400).json({message: 'Wrong password'});
            }
            return res.json('ok');
        } catch(e) {
            console.log(e);
        }
    }
}

module.exports = new UserController();