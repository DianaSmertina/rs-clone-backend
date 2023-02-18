const bcrypt = require('bcryptjs');
const { json } = require('express');
const db = require('../db');
const cloudinary = require('cloudinary').v2;
const fs = require('fs/promises');

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
            const today = new Date();
            const year = today.getFullYear();
            const month = (today.getMonth() + 1).toString().padStart(2, '0');
            const day = today.getDate().toString().padStart(2, '0');
            const formattedDate = `${year}-${month}-${day}`;
            await db.query('INSERT INTO users(username, password, reg_date) VALUES ($1, $2, $3)', [name, hash, formattedDate]);
            await db.query('INSERT INTO results(country, population, flags, user_name) VALUES ($1, $2, $3, $4)', [0, 0, 0, name]);
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
            const validPassword = await bcrypt.compare(password, user.rows[0].password);
            if (!validPassword) {
                return res.status(400).json({message: 'Wrong password'});
            }
            return res.json('ok');
        } catch(e) {
            console.log(e);
        }
    }

    async createAvatar(req, res) {
        try {
            const username = req.params.username;
            const avatar = await cloudinary.uploader.upload(req.file.path);
            await db.query('UPDATE users SET avatar = ($1) WHERE username = ($2)', [avatar.url, username]);
            res.send(avatar);
          } catch (error) {
            res.send(error);
          }
          fs.unlink(req.file.path);
    }

    async getAvatar(req, res) {
        try {
            const username = req.params.username;
            const user = await db.query('SELECT * FROM users where username = $1', [username]);
            if (user.rowCount === 0) {
                return res.status(400).json({message: 'User not found'});
            }
            return res.json(user.rows[0].avatar);
        } catch {
            res.send(error);
        }
    }
}

module.exports = new UserController();