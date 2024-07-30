const express = require('express')
const router = express.Router()

// router.use('/api/v1/users', require('./user/index'))
// router.use('/api/v1/post', require('./post/index'))
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management
 */

/**
 * @swagger
 * tags:
 *   name: Posts
 *   description: Post management
 */

router.use('/users', require('./user/index'));
router.use('/post', require('./post/index'));
module.exports = router