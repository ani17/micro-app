const protect = (req,res,next) => {
    if(!req.session.user){
        return res.status(401).json({
            'status' : 'Error',
            'msg' : 'You are not logged in!'
        })
    }
    next();
}

module.exports = protect;