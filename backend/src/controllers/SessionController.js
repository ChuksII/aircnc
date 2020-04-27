//index, show, store, update, destroy

const User = require('../models/User');

module.exports = {
    async store(req, res) {
        const { email } = req.body; //desestruturação
        
        let user = await User.findOne({ email });
        //const user = await User.create({ email });
    
        if (!user) {
            user = await User.create({ email });
        }

        return res.json(user);
    }

};