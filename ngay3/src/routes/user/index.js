const express = require('express')
const router = express.Router()
const userController = require('../../controllers/user.controller')

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *         - phone
 *         - address
 *         - posts
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the user
 *         name:
 *           type: string
 *           description: The name of the user
 *         email:
 *           type: string
 *           description: The email of the user 
 *         address:
 *           type: string
 *           description: The address of the user
 *         password:
 *           type: string
 *           description: The password of the user
 *         phone:
 *           type: string
 *           description: The phone number of the user
 *         posts:
 *           type: array
 *           items:
 *             type: string
 *           description: The posts made by the user
 *       example:
 *         id: 1
 *         name: John Doe
 *         email: johndoeexample.com
 *         password: pass123
 *         phone: 0903123456
 *         address: tp.HoChiMinh
 *         posts: ['postID', 'postID']
 */


/**
 * @swagger
 * /users/list-user:
 *   get:
 *     tags: [Users]
 *     summary: Retrieves a list of users
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 * 
 */
router.get('/list-user', userController.listUser);

/**
 * @swagger
 * /users/create-user:
 *   post:
 *     tags: [Users]
 *     summary: Creates a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *           example:
 *                   name: John Doe
 *                   email: johndoeexample@gmai.com
 *                   password: pass123
 *                   address: ads
 *     responses:
 *       201:
 *         description: The user was successfully created
 *         content:
 *           application/json:
 *             examples:
 *               example-1:
 *                 value:
 *                   name: John Doe
 *                   email: johndoeexample@gmai.com
 *                   password: pass123
 *                   address: ads
 */
router.post('/create-user', userController.createUser);


/**
 * @swagger
 * /users/update-user/{id}:
 *   patch:
 *     tags: [Users]
 *     summary: Updates user details by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The user ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *           example:
 *             name: John Doe
 *             email: johndoeexample@gmail.com
 *             password: pass123
 *             address: 123 Main St
 *     responses:
 *       200:
 *         description: User details updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: User not found
 */
router.get('/get-user-detail/:id', userController.userDetail);

/**
 * @swagger
 * /users/update-user/{id}:
 *   patch:
 *     tags: [Users]
 *     summary: Updates user details by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The user ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: User details updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: User not found
 */
router.patch('/update-user/:id', userController.updateUser);

/**
 * @swagger
 * /users/delete-user/{id}:
 *   delete:
 *     tags: [Users]
 *     summary: Deletes user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The user ID
 *     responses:
 *       204:
 *         description: User deleted successfully
 *       404:
 *         description: User not found
 */
router.delete('/delete-user/:id', userController.deleteUser);

module.exports = router