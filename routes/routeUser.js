const router = require('express').Router();
const Controller = require('../controllers/UserController.js')

router.get('/', Controller.getUser)
router.get('/:id', Controller.getUserById)
router.post('/', Controller.createUser)
router.delete('/:id', Controller.deleteUser)
router.post('/login', Controller.login)


module.exports = router