const router = require("express").Router()
const userCtrl = require("../controllers/userCrtl");
const {auth} = require('../middleware/auth')
const {adminUser} = require('../middleware/auth')

router.post('/register', userCtrl.register)

router.post('/activation', userCtrl.activateEmail)

router.post('/login', userCtrl.login)

router.post('/refresh_token', userCtrl.getAccessToken)

router.post('/forgot', userCtrl.forgotPassword)

router.post('/reset',auth, userCtrl.resetPassword)

router.get('/infor',auth, userCtrl.getUserInfor)

router.get('/all_infor',adminUser, userCtrl.getUsersAllInfor)

router.get('/logout', userCtrl.logout)

router.patch('/update', auth,userCtrl.updateUser)

router.patch('/update_role/:id', adminUser ,userCtrl.updateUsersRole)

router.delete('/delete/:id', adminUser ,userCtrl.deleteUser)


module.exports = router;