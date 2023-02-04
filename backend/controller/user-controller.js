const bcrypt = require('bcryptjs');
const db = require('../db');

class UserController {
    async getUser(req, res) {

    }

    async createNewUser(req, res, next) {
        try {
            const name = await req.body.username;
            const password = await req.body.password;
            // добаить проверку есть ли такой юзер
            const hash = bcrypt.hashSync(password, 7);
            const newUser = await db.query('INSERT INTO users(username, password) VALUES ($1, $2)', [name, hash]);
            // res.json(newUser); не возвращает созданного юзера, разобраться
        } catch(e) {
            console.log(e);
            res.status(400).json({message: 'Registration error'});
        }
    }

    async login(req, res) {
        try {

        } catch(e) {
            console.log(e);
            req.status(400).json({message: 'Registration error'});
        }
    }
}

module.exports = new UserController();