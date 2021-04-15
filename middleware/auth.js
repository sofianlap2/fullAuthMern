const jwt = require('jsonwebtoken');
const Users = require('../models/userModel')

const auth = (req,res,next) => {
try {
   const token = req.header('Authorization')
   if(!token) return res.status(400).json({msg: "Invalid authentification."})

   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err,user)=> {
       if(err) return res.status(400).json({msg: "Invalid authentification."})

       req.user = user
       next()
   })
} catch (err) {
    return res.status(500).json({msg: err.message})
}
};

const authAdmin = async (req,res,next) => {
    try {
        const user = await Users.findOne({_id: req.user.id})

        if(user.role !==1)
            return res.status(500).json({msg: "Admin ressources access denied."})

        next()

    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
};

const adminUser = [auth, authAdmin]

module.exports = {auth, authAdmin, adminUser}