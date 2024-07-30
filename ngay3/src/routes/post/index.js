const express = require('express')
const router = express.Router()
const postController = require('../../controllers/post.controller')


/**
 * @swagger
 * components:
 *   schemas:
 *     Post:
 *       type: object
 *       required:
 *         - title
 *         - content
 *         - userId
 *       properties:
 *         title:
 *           type: string
 *           description: The title of the post
 *         content:
 *           type: string
 *           description: The content of the post
 *         userId:
 *           type: string
 *           description: The ID of the user who created the post
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date when the post was created
 *       example:
 *         title: "My First Post"
 *         content: "This is the content of my first post."
 *         userId: "60b8d7a40e3a4f1a2c8b4567"
 */

/**
 * @swagger
 * /post/list-post:
 *   get:
 *     tags: [Posts]
 *     summary: Retrieves a list of posts
 *     responses:
 *       200:
 *         description: A list of posts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Post'
 */
router.get('/list-post', postController.listContent)

/**
 * @swagger
 * /post/create-post:
 *   post:
 *     tags: [Posts]
 *     summary: Creates a new post
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *              $ref: '#/components/schemas/Post'
 *     responses:
 *       201:
 *         description: Post created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 */
router.post(`/create-post`, postController.postContent)

/**
 * @swagger
 * /post/detail-post/{id}:
 *   get:
 *     tags: [Posts]
 *     summary: Retrieves post details by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The post ID
 *     responses:
 *       200:
 *         description: Post details retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 *       404:
 *         description: Post not found
 */
router.get(`/detail-post/:id`, postController.blogDetail)

/**
 * @swagger
 * /post/update-post/{id}:
 *   patch:
 *     tags: [Posts]
 *     summary: Updates a post by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The post ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Post'
 *     responses:
 *       200:
 *         description: Post updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 *       404:
 *         description: Post not found
 */
router.patch(`/update-post/:id`, postController.updateBlog)

/**
 * @swagger
 * /post/delete-post/{id}:
 *   delete:
 *     tags: [Posts]
 *     summary: Deletes a post by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The post ID
 *     responses:
 *       204:
 *         description: Post deleted successfully
 *       404:
 *         description: Post not found
 */
router.delete(`/delete-post/:id`, postController.deleteBlog)

router.get(`/search-blog`, postController.findBlogByTitle)
module.exports = router