const User = require('../models/userModel');

exports.signUp = async (req,res,next) => {
    try {
        const {username, password} = req.body;

        const user = await User.create(req.body);
        
        res.status(200).json({
            status : 'success',
            data : user
        });

    } catch (e) {
        res.status(400).json({
            status : 'error',
            msg : e
        })
    }
};

exports.signIn = async (req,res,next) => {
    try {
        const {username, password} = req.body;
        
        const user = await User.findOne({username});
        
        if(!user){
            res.status(200).json({
                status : 'success',
                msg : 'No user exists !'
            });

            return
        }

        if(user.password === password) {
            req.session.user = user;
            res.status(200).json({
                status : 'Success',
                msg : 'Login Sucessfully' 
            })
        }
        else{
            res.status(400).json({
                status: 'Fail',
                msg: 'Incorrect Username or password'
            })
        }

    } catch (e) {
        res.status(400).json({
            status : 'error',
            msg : e
        })
    }
} 