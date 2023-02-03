const bcrypt = require('bcryptjs');

class UserController {
    async getUser(req, res) {

    }

    async createNewUser(req, res) {
        try {
            const name = req.body.username;
            const password = req.body.password;
            // добаить проверку есть ли такой юзер
            const hash = bcrypt.hashSync(password, 7);
        } catch(e) {
            console.log(e);
            req.status(400).json({message: 'Registration error'});
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