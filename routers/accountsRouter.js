const router = require('express').Router()
const {accountsController} = require('../controllers')

router.get('/', accountsController.login)
router.patch('/edit/:id', accountsController.editProfile)

module.exports = router