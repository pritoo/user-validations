const { User, validate } = require('../models/UserSchema');



exports.registerUser = async (req, res) => {

    const { error } = validate(req.body);
    if (error) {
        return res.status(500).send(error.details[0].message);
    }

    
    let user = await User.findOne({ email: req.body.email });
    if (user) {
        return res.status(400).send('That user already exisits!');
    } else {
       
        user = new User({
            email: req.body.email,
            password: req.body.password
        });
        await user.save();
        res.send("statuscode:200",user);
    }
};

