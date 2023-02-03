

class UserController {
    async getUser(req, res) {

    }

    async createNewUser(req, res) {
        try {

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