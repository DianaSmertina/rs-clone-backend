const bcrypt = require('bcryptjs');
const db = require('../db');

class UserController {
    async getUser(req, res) {
        try {
            const username = req.params.username;
            const user = await db.query('SELECT * FROM users where username = $1', [username]);
            console.log(user);
            if (user.rowCount === 0) {
                return res.status(400).json({message: 'User not found'});
            }
            return res.json(user.rows[0]);
        } catch(e) {
            console.log(e);
        }
    }

    async createNewUser(req, res) {
        try {
            const name = await req.body.username;
            const password = await req.body.password;
            const hash = bcrypt.hashSync(password, 7);
            const newUser = await db.query('INSERT INTO users(username, password) VALUES ($1, $2)', [name, hash]);
            return res.json(newUser.rows[0]);
        } catch(e) {
            if (e.code = '23505') {
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