const bcrypt = require('bcryptjs');
const db = require('../db');

class UserController {
    async getUser(req, res) {

    }

    async createNewUser(req, res, next) {
        try {
            const name = await req.body.username;
            const password = await req.body.password;
            const hash = bcrypt.hashSync(password, 7);
            const newUser = await db.query('INSERT INTO users(username, password) VALUES ($1, $2)', [name, hash]);
            // res.json(newUser); не возвращает созданного юзера, разобраться
        } catch(e) {
            if (e.code = '23505') {
                res.status(400).json({message: 'This username is already taken'});
            } else {
                res.status(400).json({message: 'Registration error'});
            }
        }
    }

    async login(req, res) {
        try {

        } catch(e) {
            console.log(e);
            req.status(400).json({message: 'Autorization error'});
        }
    }
}

module.exports = new UserController();